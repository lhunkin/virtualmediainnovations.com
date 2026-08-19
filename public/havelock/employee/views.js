/* ============================================================
   HAVELOCK COMMON MESH // EMPLOYEE TERMINAL
   views.js — renders every view from data.js

   Runs after employee.js. Populates the empty view containers in
   index.html, owns the mail client, tracks what has been read,
   and unseals the archive note once the inbox is exhausted.
   ============================================================ */
(() => {
  'use strict';

  const D = window.HAVELOCK_DATA;
  if (!D) { console.warn('[views] data.js did not load'); return; }

  const $  = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const el = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  /* --------------------------------------------------------
     READ STATE — persists between sessions
     -------------------------------------------------------- */
  const KEY = 'havelockMailRead';
  let read = new Set();
  try { read = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...read])); } catch (e) {} };

  const total    = D.mail.length;
  const readCount = () => D.mail.filter(m => read.has(m.id)).length;
  const unlocked  = () => readCount() >= total;

  /* --------------------------------------------------------
     MAIL CLIENT
     -------------------------------------------------------- */
  const CATS = [
    ['all',      'All mail'],
    ['exec',     'Executive'],
    ['security', 'Security'],
    ['people',   'People'],
    ['facility', 'Facilities'],
    ['clinical', 'Medical'],
    ['ops',      'Operations'],
    ['mesh',     'Mesh'],
    ['finance',  'Finance'],
    ['culture',  'Station life'],
    ['archive',  'Archive']
  ];

  let filter = 'all', query = '', current = null;

  function visibleMail() {
    let list = D.mail.slice();
    if (unlocked()) list = list.concat([Object.assign({ sealed: false, isReward: true }, D.reward)]);
    if (filter === 'archive') list = list.filter(m => m.isReward);
    else if (filter !== 'all') list = list.filter(m => m.cat === filter && !m.isReward);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(m => (m.from + m.subject + m.preview + m.body + m.tag).toLowerCase().includes(q));
    }
    return list;
  }

  function renderMail() {
    const host = el('view-messages');
    if (!host) return;
    const n = readCount(), pct = Math.round(n / total * 100);

    host.innerHTML = `
      <div class="mail">
        <aside class="mail-rail">
          <div class="mail-progress">
            <div class="mp-head"><span>INBOX REVIEW</span><b>${n}/${total}</b></div>
            <div class="mp-bar"><i style="width:${pct}%"></i></div>
            <small>${unlocked()
              ? 'ARCHIVE RETRIEVAL UNSEALED'
              : (total - n) + ' unread in the correspondence record'}</small>
          </div>
          <div class="mail-cats">${CATS.map(([id, label]) => {
            if (id === 'archive' && !unlocked()) {
              return `<button class="mc locked" disabled><span>${label}</span><em>SEALED</em></button>`;
            }
            const c = id === 'all'
              ? D.mail.length
              : id === 'archive' ? 1 : D.mail.filter(m => m.cat === id).length;
            const u = id === 'all'
              ? D.mail.filter(m => !read.has(m.id)).length
              : id === 'archive' ? (read.has(D.reward.id) ? 0 : 1)
              : D.mail.filter(m => m.cat === id && !read.has(m.id)).length;
            return `<button class="mc ${filter === id ? 'on' : ''}" data-cat="${id}">
                      <span>${label}</span><em>${u ? u + ' new' : c}</em></button>`;
          }).join('')}</div>
          <button class="mail-markall small-button" type="button">MARK ALL READ</button>
        </aside>

        <div class="mail-list">
          <div class="mail-search">
            <input id="mailQuery" placeholder="Search correspondence…" value="${esc(query)}" autocomplete="off">
          </div>
          <div class="mail-items" id="mailItems"></div>
        </div>

        <article class="mail-read" id="mailRead"></article>
      </div>`;

    host.querySelectorAll('[data-cat]').forEach(b =>
      b.addEventListener('click', () => { filter = b.dataset.cat; current = null; renderMail(); }));

    const q = el('mailQuery');
    q.addEventListener('input', () => {
      query = q.value;
      renderItems();
      const p = q.selectionStart;
      q.focus(); q.setSelectionRange(p, p);
    });

    host.querySelector('.mail-markall').addEventListener('click', () => {
      D.mail.forEach(m => read.add(m.id));
      save(); renderMail(); refreshBadges();
    });

    renderItems();
  }

  function renderItems() {
    const box = el('mailItems');
    if (!box) return;
    const list = visibleMail();
    if (!list.length) {
      box.innerHTML = '<div class="mail-empty">No correspondence matches that query.</div>';
      el('mailRead').innerHTML = '';
      current = null;
      return;
    }

    // Keep the selection if it survived the filter; otherwise take the top item.
    if (current && !list.some(m => m.id === current)) current = null;
    if (!current) current = list[0].id;

    box.innerHTML = list.map(m => `
      <button class="mi ${read.has(m.id) ? '' : 'unread'} ${current === m.id ? 'on' : ''} ${m.isReward ? 'reward' : ''}" data-mail="${m.id}">
        <div class="mi-top"><b>${m.from}</b><time>${m.date}</time></div>
        <div class="mi-sub">${m.subject}</div>
        <div class="mi-pre">${m.preview}</div>
        <div class="mi-tag"><em>${m.tag}</em>${m.pri ? '<i class="pri">PRIORITY</i>' : ''}</div>
      </button>`).join('');

    box.querySelectorAll('[data-mail]').forEach(b =>
      b.addEventListener('click', () => openMail(b.dataset.mail)));

    paintReader(current);
  }

  /* Paints the reading pane only. Never rebuilds the list or the rail —
     doing so from inside a click handler wipes the pane it just filled. */
  function paintReader(id) {
    const m = id === D.reward.id ? D.reward : D.mail.find(x => x.id === id);
    const pane = el('mailRead');
    if (!m || !pane) return;
    pane.innerHTML = `
      <div class="mr-head">
        <div class="mr-trust" title="Rendered by your terminal, not by the message">
          <span class="trust-mark">✔</span> TRUST ANCHOR VERIFIED // PACIFIC RELAY 07
        </div>
        <div class="mr-meta">${m.date} ${m.time !== '—' ? m.time : ''} // ${m.tag}</div>
      </div>
      <h2>${m.subject}</h2>
      <div class="mr-from"><b>${m.from}</b><span>${m.role}</span></div>
      <div class="mr-body">${m.body}</div>`;
    pane.scrollTop = 0;
  }

  /* Updates the progress meter and category badges without a rebuild. */
  function updateCounters() {
    const n = readCount(), pct = Math.round(n / total * 100);
    const head = document.querySelector('.mp-head b');
    const bar  = document.querySelector('.mp-bar i');
    const note = document.querySelector('.mail-progress small');
    if (head) head.textContent = n + '/' + total;
    if (bar)  bar.style.width = pct + '%';
    if (note) note.textContent = unlocked()
      ? 'ARCHIVE RETRIEVAL UNSEALED'
      : (total - n) + ' unread in the correspondence record';

    $$('.mc[data-cat]').forEach(b => {
      const id = b.dataset.cat, em = b.querySelector('em');
      if (!em) return;
      if (id === 'archive') { em.textContent = read.has(D.reward.id) ? 1 : '1 new'; return; }
      const pool = id === 'all' ? D.mail : D.mail.filter(m => m.cat === id);
      const u = pool.filter(m => !read.has(m.id)).length;
      em.textContent = u ? u + ' new' : pool.length;
    });
    refreshBadges();
  }

  function openMail(id) {
    const wasUnread = !read.has(id);
    current = id;
    read.add(id); save();

    paintReader(id);
    $$('#mailItems .mi').forEach(b => {
      const on = b.dataset.mail === id;
      b.classList.toggle('on', on);
      if (on) b.classList.remove('unread');
    });

    if (wasUnread) {
      updateCounters();
      // Finishing the record unseals the archive note.
      if (unlocked() && !read.has(D.reward.id)) announceUnlock();
    }
  }

  function announceUnlock() {
    renderMail();   // rail must gain the Archive category; renderItems repaints the pane
    const modal = el('modal');
    if (!modal) return;
    el('modalKicker').textContent = 'RECORDS CUSTODY // RETRIEVAL AUTHORISED';
    el('modalTitle').textContent = 'Commendation — Records Custodian';
    el('modalBody').innerHTML = `
      <p>You have read the complete correspondence record for this posting. That is rarer than it should be.</p>
      <div class="box"><b>Records Custodian</b><span>NOTED ON PERSONNEL FILE // 2098.06.18</span></div>
      <p>Records Custody has released one archived item to your terminal in recognition. It is not classified, it is not important, and it has been sitting in a basement in Vancouver since 2071.</p>
      <p>It is filed under <b>Archive</b> in your correspondence categories.</p>
      <div class="choice"><button class="gold" data-goto-archive>OPEN ARCHIVE</button><button data-close-modal>LATER</button></div>`;
    modal.classList.remove('hidden');
    modal.querySelector('[data-close-modal]')?.addEventListener('click', () => modal.classList.add('hidden'));
    modal.querySelector('[data-goto-archive]')?.addEventListener('click', () => {
      modal.classList.add('hidden');
      filter = 'archive'; current = null; renderMail();
    });
  }

  function refreshBadges() {
    const unreadCount = D.mail.filter(m => !read.has(m.id)).length;
    const badge = document.querySelector('#nav button[data-view="messages"] em');
    if (badge) {
      badge.textContent = unreadCount || '';
      badge.style.display = unreadCount ? '' : 'none';
    }
  }

  /* --------------------------------------------------------
     MARKET TERMINAL
     -------------------------------------------------------- */
  function sparkline(data, w, h) {
    const min = Math.min(...data), max = Math.max(...data), span = (max - min) || 1;
    const pts = data.map((v, i) => [
      (i / (data.length - 1)) * w,
      h - ((v - min) / span) * (h - 12) - 6
    ]);
    const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    const area = line + ` L${w} ${h} L0 ${h} Z`;
    return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img"
              aria-label="HVLK closing price, last 60 sessions">
      <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(111,227,242,.34)"/>
        <stop offset="100%" stop-color="rgba(111,227,242,0)"/>
      </linearGradient></defs>
      <path d="${area}" fill="url(#sg)"/>
      <path d="${line}" fill="none" stroke="#6fe3f2" stroke-width="1.6" vector-effect="non-scaling-stroke"/>
      <circle cx="${pts[pts.length-1][0].toFixed(1)}" cy="${pts[pts.length-1][1].toFixed(1)}" r="3" fill="#e5b243"/>
    </svg>`;
  }

  const sign = v => (v >= 0 ? '+' : '') + v.toFixed(2);
  const dir  = v => (v >= 0 ? 'up' : 'down');

  function renderMarket() {
    const host = el('view-market');
    if (!host) return;
    const M = D.market, p = M.primary, x = M.index;

    host.innerHTML = `
      <div class="mkt-top">
        <article class="widget mkt-quote">
          <div class="widget-head"><span>${p.ticker} // ${p.name}</span><em>${p.exch}</em></div>
          <div class="mkt-price">
            <b>${p.price.toLocaleString('en-US',{minimumFractionDigits:2})}</b>
            <span class="mkt-unit">ACr</span>
            <span class="mkt-chg ${dir(p.change)}">${sign(p.change)} (${sign(p.pct)}%)</span>
          </div>
          <div class="mkt-chart">${sparkline(p.history, 600, 150)}</div>
          <div class="mkt-stats">
            <div><span>OPEN</span><b>${p.open.toFixed(2)}</b></div>
            <div><span>HIGH</span><b>${p.high.toFixed(2)}</b></div>
            <div><span>LOW</span><b>${p.low.toFixed(2)}</b></div>
            <div><span>VOLUME</span><b>${p.vol}</b></div>
            <div><span>MARKET CAP</span><b>${p.mcap}</b></div>
            <div><span>P/E</span><b>${p.pe}</b></div>
            <div><span>YIELD</span><b>${p.yield}</b></div>
            <div><span>52 WEEK</span><b>${p.range52}</b></div>
          </div>
          <div class="mkt-note">${p.note}</div>
        </article>

        <article class="widget mkt-index">
          <div class="widget-head"><span>${x.ticker}</span><em>INDEX</em></div>
          <b class="mkt-idx-name">${x.name}</b>
          <div class="mkt-price small">
            <b>${x.value.toLocaleString('en-US',{minimumFractionDigits:2})}</b>
            <span class="mkt-chg ${dir(x.change)}">${sign(x.change)} (${sign(x.pct)}%)</span>
          </div>
          <p class="soft">${x.note}</p>
          <div class="mkt-idx-facts">
            <div><span>CONSTITUENTS</span><b>${M.constituents.length}</b></div>
            <div><span>HVLK WEIGHT</span><b>${M.constituents[0].w}</b></div>
            <div><span>REBALANCED</span><b>ANNUALLY</b></div>
          </div>
        </article>
      </div>

      <div class="mkt-table">
        <div class="mkt-row head"><span>SYM</span><span>CONSTITUENT</span><span>SECTOR</span><span>LAST</span><span>CHG</span><span>WEIGHT</span></div>
        ${M.constituents.map(c => `
          <div class="mkt-row${c.t === 'HVLK' ? ' self' : ''}">
            <span class="sym">${c.t}</span>
            <span class="nm">${c.n}</span>
            <span class="sec">${c.s}</span>
            <span class="last">${c.p.toLocaleString('en-US',{minimumFractionDigits:2})}</span>
            <span class="chg ${dir(c.c)}">${sign(c.c)}%</span>
            <span class="wt">${c.w}</span>
          </div>`).join('')}
      </div>

      <div class="mkt-notes">
        ${M.notes.map(n => `<div class="widget"><div class="widget-head"><span>${n[0]}</span></div><p class="soft">${n[1]}</p></div>`).join('')}
      </div>
      <div class="mkt-asof">${M.asOf}</div>`;
  }

  /* --------------------------------------------------------
     OPERATIONS
     -------------------------------------------------------- */
  function renderOperations() {
    const host = el('view-operations');
    if (!host) return;
    const O = D.operations, u = O.unit;

    host.innerHTML = `
      <article class="widget wide">
        <div class="widget-head"><span>${u.name}</span><em>${u.status}</em></div>
        <div class="unit-status">
          <div><span>UNIT</span><b>${u.code}</b></div>
          <div><span>REGION</span><b>${u.region}</b></div>
          <div><span>SPONSOR</span><b>${u.sponsor}</b></div>
          <div><span>COMMAND</span><b>${u.command}</b></div>
        </div>
        <div class="unit-banner"><span>MISSION AUTHORITY</span><b>${O.authority}</b></div>
        <div class="unit-banner"><span>CURRENT POSTURE</span><b>${u.posture}</b></div>
      </article>

      <div class="ops-orders">
        <div class="widget-head"><span>STANDING ORDERS</span><em>FIELD STANDARD</em></div>
        ${O.standingOrders.map(([ref, title, text]) => `
          <div class="so"><i>${ref}</i><b>${title}</b><span>${text}</span></div>`).join('')}
      </div>

      <div class="ops-history">
        <div class="widget-head"><span>ACTIVATION HISTORY</span><em>UNIT COMPARTMENT</em></div>
        <div class="ah head"><span>REFERENCE</span><span>DATE</span><span>TIER</span><span>LOCATION</span><span>OUTCOME</span></div>
        ${O.activations.map(a => `
          <div class="ah"><span class="ref">${a.ref}</span><span>${a.date}</span>
            <span class="tier-t">${a.tier}</span><span>${a.loc}</span>
            <span class="out">${a.outcome}</span>
            <em>${a.note}</em></div>`).join('')}
      </div>

      <article class="widget wide token">
        <div class="widget-head"><span>ASSIGNMENT TOKEN</span><em class="warn">${O.token.released ? 'RELEASED' : 'NONE'}</em></div>
        <p class="soft">${O.token.note}</p>
      </article>`;
  }

  /* --------------------------------------------------------
     MEDICAL & CONSENT
     -------------------------------------------------------- */
  function renderMedical() {
    const host = el('view-medical');
    if (!host) return;
    const M = D.medical;

    host.innerHTML = `
      <div class="two-up">
        <article class="widget">
          <div class="widget-head"><span>OPERATIONAL BASELINE</span><em class="good-t">${M.baseline.status}</em></div>
          <div class="micro-list">
            <span>Assessed <b>${M.baseline.date}</b></span>
            <span>Clinic <b>${M.baseline.clinic}</b></span>
            <span>Restriction <b>${M.baseline.restriction}</b></span>
          </div>
          <div class="vitals">${M.vitals.map(v => `<div><span>${v[0]}</span><b>${v[1]}</b></div>`).join('')}</div>
        </article>

        <article class="widget">
          <div class="widget-head"><span>YOUR RIGHTS</span><em>CHARTER</em></div>
          <p class="soft">${M.rights}</p>
        </article>
      </div>

      <div class="consent-pending">
        <div class="widget-head"><span>AWAITING YOUR DECISION</span><em class="warn">${M.pending.length} ITEMS</em></div>
        ${M.pending.map(p => `
          <div class="cp" data-consent="${p.id}">
            <b>${p.title}</b>
            <p>${p.text}</p>
            <span class="cp-note">${p.note}</span>
            <div class="cp-actions">
              <button class="small-button gold-btn" data-decide="grant" data-item="${p.id}">GRANT</button>
              <button class="small-button" data-decide="decline" data-item="${p.id}">DECLINE</button>
              <em class="cp-state">NOT RECORDED</em>
            </div>
          </div>`).join('')}
      </div>

      <div class="ledger">
        <div class="widget-head"><span>CONSENT LEDGER</span><em>YOUR COPY</em></div>
        <div class="lg head"><span>DATE</span><span>PROCEDURE</span><span>AUTHORISED BY</span><span>CONSENT</span></div>
        ${M.ledger.map(l => `<div class="lg"><span>${l.date}</span><span>${l.proc}</span><span>${l.auth}</span><span class="lg-c">${l.consent}</span></div>`).join('')}
      </div>`;

    // Decisions are recorded, not evaluated — either answer is valid.
    host.querySelectorAll('[data-decide]').forEach(b => b.addEventListener('click', () => {
      const row = b.closest('.cp');
      const granted = b.dataset.decide === 'grant';
      row.querySelector('.cp-state').textContent = granted ? 'GRANTED // RECORDED 2098.06.18' : 'DECLINED // RECORDED 2098.06.18';
      row.querySelector('.cp-state').className = 'cp-state ' + (granted ? 'ok' : 'no');
      row.querySelectorAll('button').forEach(x => x.disabled = true);
      row.classList.add('decided');
    }));
  }

  /* --------------------------------------------------------
     EQUIPMENT
     -------------------------------------------------------- */
  function renderEquipment() {
    const host = el('view-equipment');
    if (!host) return;
    const E = D.equipment;

    host.innerHTML = `
      <article class="widget wide">
        <div class="widget-head"><span>EQUIPMENT RESPONSIBILITY SCHEDULE</span><em class="warn">AUDIT DUE ${E.auditDue}</em></div>
        <div class="eq head"><span>ITEM</span><span>ASSET CODE</span><span>CLASS</span><span>STATUS</span></div>
        ${E.issued.map(i => `
          <div class="eq">
            <span class="eq-n">${i.item}</span>
            <span class="eq-c">${i.code}</span>
            <span class="eq-cl">${i.cls}</span>
            <span class="eq-s ${i.st === 'ISSUED' ? 'ok' : 'pend'}">${i.st}</span>
            <em>${i.note}</em>
          </div>`).join('')}
      </article>

      <article class="widget wide protected-person">
        <div class="widget-head"><span>NOT COMPANY PROPERTY</span><em class="good-t">PROTECTED PERSON</em></div>
        <ul class="pp-list">${E.protected.map(p => `<li>${p}</li>`).join('')}</ul>
        <p class="soft">${E.protectedNote}</p>
      </article>`;
  }

  /* --------------------------------------------------------
     PAY & BENEFITS
     -------------------------------------------------------- */
  function renderBenefits() {
    const host = el('view-benefits');
    if (!host) return;
    const B = D.benefits;

    host.innerHTML = `
      <div class="two-up">
        <article class="widget">
          <div class="widget-head"><span>COMPENSATION</span><em>CURRENT RATING</em></div>
          ${B.pay.map(p => `<div class="pay"><b>${p[0]}</b><i>${p[1]}</i><span>${p[2]}</span></div>`).join('')}
          <div class="unit-banner"><span>INDICATIVE TOTAL</span><b>${B.totalNote}</b></div>
        </article>

        <article class="widget">
          <div class="widget-head"><span>CONTINUITY RETIREMENT FUND</span><em>${B.fund.contrib}</em></div>
          <div class="fund-bal"><span>CURRENT BALANCE</span><b>${B.fund.balance}</b></div>
          <p class="soft">${B.fund.note}</p>
        </article>
      </div>

      <article class="widget wide">
        <div class="widget-head"><span>COVERAGE</span><em>CHARTER AND PLAN</em></div>
        <div class="cov head"><span>AREA</span><span>LEVEL</span><span>TERMS</span></div>
        ${B.coverage.map(c => `<div class="cov"><span>${c[0]}</span><span class="cov-l">${c[1]}</span><span class="cov-t">${c[2]}</span></div>`).join('')}
        <div class="unit-banner"><span>EMPLOYEE ADVANTAGE</span><b>${B.advantage}</b></div>
      </article>`;
  }

  /* --------------------------------------------------------
     TRAINING
     -------------------------------------------------------- */
  function renderTraining() {
    const host = el('view-training');
    if (!host) return;
    const cls = s => s === 'CURRENT' ? 'ok' : s === 'LAPSED' ? 'bad' : s === 'BOOKED' ? 'pend' : 'warn-s';

    host.innerHTML = `
      <article class="widget wide">
        <div class="widget-head"><span>CERTIFICATION RECORD</span><em>FUNDED IN FULL // PORTABLE</em></div>
        <div class="tr head"><span>CERTIFICATION</span><span>STATUS</span><span>EXPIRES</span><span>REQUIRED</span></div>
        ${D.training.map(t => `
          <div class="tr">
            <span class="tr-n">${t.name}</span>
            <span class="tr-s ${cls(t.st)}">${t.st}</span>
            <span class="tr-e">${t.exp}</span>
            <span class="tr-r">${t.req ? 'REQUIRED' : 'OPTIONAL'}</span>
            <em>${t.note}</em>
          </div>`).join('')}
      </article>
      <article class="widget wide">
        <div class="widget-head"><span>POLICY</span><em>TRAINING OFFICE</em></div>
        <p class="soft">All certification is funded in full, retained by you, and portable if you leave the company. Havelock would rather train someone who walks than employ someone who cannot.</p>
      </article>`;
  }

  /* --------------------------------------------------------
     DIRECTORY
     -------------------------------------------------------- */
  function renderDirectory() {
    const host = el('view-directory');
    if (!host) return;

    host.innerHTML = `
      <div class="dir-grid">
        ${D.directory.map(p => `
          <article class="dir">
            <div class="dir-top"><div class="dir-av">${p.av}</div>
              <div><b>${p.n}</b><span>${p.r}</span></div></div>
            <div class="dir-meta"><i>${p.l}</i><em class="cl-${p.c.toLowerCase().replace(/[^a-z]/g,'')}">${p.c}</em></div>
            <p>${p.note}</p>
          </article>`).join('')}
      </div>`;
  }

  /* --------------------------------------------------------
     H3 SECURE
     -------------------------------------------------------- */
  function renderSecure() {
    const host = el('view-secure');
    if (!host) return;
    const S = D.secure;
    const stCls = s => s === 'ACCESSIBLE' ? 'ok' : s === 'NO ACTIVE TOKEN' ? 'pend' : 'bad';

    host.innerHTML = `
      <article class="widget wide">
        <div class="widget-head"><span>CREDENTIAL</span><em class="good-t">VERIFIED</em></div>
        <div class="micro-list">
          <span>Clearance <b>${S.credential}</b></span>
          <span>Session <b>${S.session}</b></span>
        </div>
      </article>

      <article class="widget wide">
        <div class="widget-head"><span>COMPARTMENTS</span><em>THIS SESSION</em></div>
        ${S.compartments.map(c => `
          <div class="cmp"><b>${c.name}</b><span class="cmp-s ${stCls(c.st)}">${c.st}</span><em>${c.note}</em></div>`).join('')}
        <div class="unit-banner"><span>ADVISORY</span><b>${S.advisory}</b></div>
      </article>

      <article class="widget wide">
        <div class="widget-head"><span>SESSION AUDIT</span><em>LAST FIVE EVENTS</em></div>
        ${S.audit.map(a => `<div class="aud"><time>${a[0]}</time><b>${a[1]}</b><span>${a[2]}</span></div>`).join('')}
      </article>`;
  }

  /* --------------------------------------------------------
     BOOT
     -------------------------------------------------------- */
  renderMail();
  renderMarket();
  renderOperations();
  renderMedical();
  renderEquipment();
  renderBenefits();
  renderTraining();
  renderDirectory();
  renderSecure();
  refreshBadges();

  // Home dashboard message previews should reflect real unread state.
  const unreadWidget = document.querySelector('[data-unread-count]');
  if (unreadWidget) unreadWidget.textContent = D.mail.filter(m => !read.has(m.id)).length + ' MESSAGES';
})();
