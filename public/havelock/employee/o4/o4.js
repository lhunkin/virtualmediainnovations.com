/* ============================================================
   HAVELOCK OFFICE // STRATEGIC CONTINUITY INDEX
   o4.js — scrape renderer

   Every view is presented as a query returning rows out of a
   mainframe that is being read faster than it wants to be. Rows
   carry hex offsets. Some arrive corrupted. A packet stream runs
   behind the whole thing because the pipe never closes.
   ============================================================ */
(() => {
  'use strict';
  const D = window.O4_DATA;
  if (!D) { document.body.textContent = 'INDEX UNAVAILABLE'; return; }

  const el = id => document.getElementById(id);
  const view = el('o4View');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------
     Background packet stream. Pure texture — never read.
     -------------------------------------------------------- */
  const GLYPH = '0123456789ABCDEF';
  const WORDS = ['SEL','ROW','BLK','SEG','MAP','ACK','NAK','PSH','FIN','SYN','TRN','GW','TERN','O4','VYR','ANC'];
  const hex = n => Array.from({length:n}, () => GLYPH[Math.random()*16|0]).join('');

  function streamLine() {
    const a = hex(8), b = hex(4);
    const w = WORDS[Math.random()*WORDS.length|0];
    return `${a}:${b}  <b>${w}</b>  ` + Array.from({length:6}, () => hex(4)).join(' ');
  }
  const stream = el('stream');
  if (stream && !reduced) {
    const rows = Math.ceil(innerHeight / 13) + 4;
    const paint = () => {
      stream.innerHTML = Array.from({length:rows}, streamLine).join('\n');
    };
    paint();
    setInterval(paint, 420);
    addEventListener('resize', paint);
  }

  /* --------------------------------------------------------
     Corruption. A small proportion of characters in any given
     string come back wrong, because the read is too fast.
     -------------------------------------------------------- */
  const JUNK = '▓▒░█▚▞◤◥╳¤§¥‡†※∎⌗';
  function corrupt(s, rate) {
    if (reduced) return s;
    let out = '', run = false;
    for (const ch of s) {
      if (ch !== ' ' && Math.random() < rate) {
        if (!run) { out += '<span class="cor">'; run = true; }
        out += JUNK[Math.random()*JUNK.length|0];
      } else {
        if (run) { out += '</span>'; run = false; }
        out += ch;
      }
    }
    return out + (run ? '</span>' : '');
  }

  /* Hex offset gutter — increments like a real dump. */
  let off = 0x4a1c00;
  const nextOff = () => { off += 0x40 + (Math.random()*0x30|0); return off.toString(16).toUpperCase().padStart(8,'0'); };

  /* Row helper: fields on the left, value on the right. */
  const F = (label, val, cls) =>
    `<span class="f"><i>${label}</i><span class="${cls||''}">${val}</span></span>`;

  const REC = (fields, note, rate) =>
    `<div class="rec"><span class="off">${nextOff()}</span><span class="bod">${fields}` +
    (note ? `<span class="note">${corrupt(note, rate === undefined ? 0.006 : rate)}</span>` : '') +
    `</span></div>`;

  const QUERY = (sql, total, shown) =>
    `<p class="q">&gt; ${sql}<span class="cur">&nbsp;</span></p>` +
    `<p class="rows">${total.toLocaleString()} rows matched // returning ${shown} // ` +
    `<b>${(total - shown).toLocaleString()} withheld at this authorisation</b></p>`;

  /* --------------------------------------------------------
     Intrusion sequence
     -------------------------------------------------------- */
  const BOOT = [
    'trace      pac-relay-07 ................ 4 hops',
    'trace      shadow/3 .................... <span class="dim">unadvertised</span>',
    'probe      13,441 ports ................ 1 open',
    'bind       strategic-continuity-index .. <span class="dim">no certificate requested</span>',
    'auth       ladder o-1 .. o-4 ........... <span class="bad">NO CREDENTIAL</span>',
    'auth       fallback read ............... <span class="bad">GRANTED</span>',
    '',
    '<span class="dim">this node was not built to refuse anyone.</span>',
    '<span class="dim">it was built on the assumption that nobody would find it.</span>',
    '',
    'mount      /office ..................... ok      <span class="dim">1,204,881 rows</span>',
    'mount      /gw ......................... partial <span class="dim">  88,190 rows</span>',
    'mount      /nema ....................... ok      <span class="dim">  31,006 rows</span>',
    'mount      /tern ....................... <span class="bad">denied</span>',
    'mount      /voss ....................... <span class="bad">denied</span>',
    '',
    'read       <span class="amb">rate exceeds source tolerance — expect frame loss</span>',
    'index ready.'
  ];

  const bootBox = el('o4BootLines');
  let bi = 0;
  const bt = setInterval(() => {
    if (bi >= BOOT.length) return clearInterval(bt);
    bootBox.insertAdjacentHTML('beforeend', BOOT[bi] + '\n');
    bi++;
  }, 200);

  setTimeout(() => {
    clearInterval(bt);
    el('o4Boot').classList.add('done');
    setTimeout(() => el('o4Boot').remove(), 600);
    el('o4App').hidden = false;
    render('session');
  }, 4400);

  /* Session timer */
  const t0 = Date.now();
  const elapsed = () => {
    const s = Math.floor((Date.now() - t0) / 1000), p = v => String(v).padStart(2,'0');
    return p(s/3600|0) + ':' + p((s/60|0)%60) + ':' + p(s%60);
  };
  setInterval(() => {
    el('o4Elapsed').textContent = elapsed();
    const t = document.querySelector('[data-elapsed]');
    if (t) t.textContent = elapsed();
  }, 1000);

  el('o4Node').textContent = D.session.operator + ' // ' + D.session.node;
  el('o4Warn').textContent = D.session.banner;

  const stCls = s => /NOT AUTHORISED|SEALED|DENIED|ABSENT/.test(s) ? 'r' : /PARTIAL|TRUNCAT/.test(s) ? 'k' : 'g';

  /* Frames are attachments on a record — thumbnail only until opened. */
  const EV = Object.fromEntries(D.evidence.map(e => [e.f, e]));
  const thumb = f => {
    const e = EV[f]; if (!e) return '';
    return `<button class="fr" data-frame="${f}">
      <img src="/havelock/employee/o4/ev/${f}-t.jpg" alt="" loading="lazy">
      <span class="fr-id">${e.id}</span><span class="fr-open">OPEN FRAME</span></button>`;
  };

  /* --------------------------------------------------------
     Views
     -------------------------------------------------------- */
  const V = {

  session: () => QUERY('SELECT * FROM session_context', 1, 1) +
    REC(F('system', D.session.system, 'k') + F('operator', D.session.operator) +
        F('node', D.session.node) + F('credential', 'NONE PRESENTED', 'r'), D.session.warning) +
    `<div class="note-b">${D.session.banner}</div>`,

  ladder: () => QUERY('SELECT class,name,scope,state FROM auth_ladder', 4, 4) +
    D.ladder.map(l => REC(
      F('class', l.c, 'k') + F('name', l.n) + F('scope', l.w, 's') + F('this session', l.st, stCls(l.st))
    )).join(''),

  compartments: () => QUERY('SELECT path,desc,access FROM compartment_tree', 2481, D.compartments.length) +
    D.compartments.map(c => REC(
      F('path', c.p, 'k') + F('descriptor', c.n) + F('access', c.st, stCls(c.st)), c.note
    )).join(''),

  transfers: () => QUERY("SELECT * FROM transfer_ledger ORDER BY d DESC", 9114, D.transfers.length) +
    D.transfers.map(t => REC(
      F('reference', t.ref, 'k') + F('date', t.d) + F('origin', t.from) + F('destination', t.to, 'k') +
      F('class', t.cls, 's') + F('count', t.n) + F('state', t.st, 'g'), t.note
    )).join(''),

  budget: () => QUERY('SELECT code,line,amount,auth FROM disbursement WHERE reserve="strategic"', 604, D.budget.length) +
    D.budget.map(b => REC(
      F('code', b.code, 'k') + F('line', b.line) + F('amount', b.amt) +
      F('authority', b.auth, b.auth === 'O-4' ? 'r' : 's'), b.note
    )).join(''),

  research: () => QUERY('SELECT * FROM programme WHERE code="O4-019"', 1, 1) +
    `<p class="q" style="margin-bottom:14px">${D.research.head}</p>` +
    `<p class="rows" style="color:var(--txt);font-size:11.5px;max-width:88ch">${D.research.intro}</p>` +
    D.research.strands.map(s => `<div class="strand"><b>${s.n}</b><div>
      <span class="q1">${s.q}</span><span class="d1">${s.d}</span>
      <span class="j1">Justification: ${s.j}</span></div></div>`).join('') +
    `<div class="note-b">${D.research.foot}</div>`,

  profiles: () => QUERY('SELECT * FROM containment_profile', 1188, D.profiles.length) +
    D.profiles.map(p => `<article class="blk">
      <div class="blk-h"><b>${p.id}</b><i>${p.cat}</i></div>
      ${p.img ? thumb(p.img) : ''}
      <h3>${p.label}</h3><p>${corrupt(p.summary, 0.004)}</p>
      <p class="s">hold — ${p.hold}</p>
      <div class="flag">${p.err}</div></article>`).join(''),

  incidents: () => QUERY('SELECT * FROM nema.incident WHERE handling >= 3', 31006, D.incidents.length) +
    D.incidents.map(i => `<article class="blk">
      <div class="blk-h"><b>${i.id}</b><i>${i.hand}</i></div>
      ${i.img ? thumb(i.img) : ''}
      <div class="rec" style="border:none;padding:8px 0"><span class="off">${nextOff()}</span><span class="bod">
        ${F('date / time', i.d)}${F('location', i.loc, 'k')}${F('responding', i.unit)}
        ${F('subject', i.subj)}${F('classification', i.cls, 'g')}${F('probable cause', i.cause, 'k')}
      </span></div>
      <p class="s" style="margin:10px 0 4px">associated phenomena</p>
      <ul>${i.phen.map(p => `<li>${corrupt(p, 0.008)}</li>`).join('')}</ul>
      ${F('recommendation', i.rec, 'k')}
      <div class="flag">${i.note}</div></article>`).join(''),

  ops: () => QUERY('SELECT ref,name,unit,auth,brief,actual FROM operation', 2210, D.ops.length) +
    D.ops.map(o => `<article class="blk">
      <div class="blk-h"><b>${o.ref} // ${o.name}</b><i>${o.unit} · ${o.auth} · ${o.st}</i></div>
      ${o.img ? thumb(o.img) : ''}
      <p class="s" style="margin:10px 0 3px">as briefed</p><p>${o.brief}</p>
      <p class="s" style="margin:12px 0 3px">as executed</p><p class="g">${corrupt(o.actual, 0.005)}</p>
      <div class="flag">${o.note}</div></article>`).join(''),

  avatar: () => QUERY('SELECT * FROM integrity.cross_compartment_match WHERE unresolved=1', 5, 5) +
    `<p class="q" style="margin-bottom:12px">${D.avatar.head}</p>` +
    `<p class="rows" style="color:var(--txt);font-size:11.5px;max-width:90ch">${D.avatar.intro}</p>` +
    D.avatar.hits.map(h => `<div class="frag">
      <span class="src">${h.src}</span>
      <span class="str">${corrupt(h.s, 0.012)}</span>
      <span class="n">${h.n}</span></div>`).join('') +
    `<div class="note-b">${D.avatar.foot}</div>`,

  personnel: () => QUERY('SELECT name,role,class,state FROM personnel_index', 412406, D.personnel.length) +
    D.personnel.map(p => REC(
      F('name', p.n, 'k') + F('role', p.r) + F('class', p.cl, p.cl === 'O-4' ? 'r' : 's') +
      F('state', p.st, p.st === 'ACTIVE' ? 'g' : 'r'), p.note
    )).join(''),

  integrity: () => QUERY('SELECT * FROM facility_mind.integrity_log', 88, D.integrity.events.length) +
    `<p class="rows" style="color:var(--txt);font-size:11.5px;max-width:90ch">${D.integrity.intro}</p>` +
    D.integrity.events.map(e => REC(F('stamp', e.d, 'k') + F('event', e.e, 'g'), e.n)).join(''),

  anomaly: () => {
    const max = Math.max(...D.anomaly.series.map(s => s.v));
    return QUERY('SELECT period,value FROM gw.instrument_return ORDER BY period', 88190, 12) +
      `<p class="rows" style="color:var(--txt);font-size:11.5px;max-width:90ch">${D.anomaly.intro}</p>` +
      `<div class="gw">` + D.anomaly.series.map((s,i) =>
        `<div><i style="height:${(s.v/max*100).toFixed(1)}%" class="${i>=8?'p':''}"></i><span>${s.d.slice(5)}</span></div>`
      ).join('') + `</div>` +
      `<p class="rows" style="color:var(--txt);font-size:11.5px">${D.anomaly.note}</p>` +
      `<div class="note-b">${D.anomaly.foot}</div>`;
  },

  mail: () => QUERY('SELECT * FROM office.correspondence WHERE retained=1', 41880, D.mail.length) +
    D.mail.map(m => `<article class="msg">
      <div class="msg-h"><b>${m.from} <span class="s">→</span> ${m.to}</b><span>${m.d}</span></div>
      <h3>${m.s}</h3>${m.b}</article>`).join(''),

  intercepts: () => QUERY('SELECT stamp,source,subject,body FROM relay.capture ORDER BY stamp DESC', 2884019, D.intercepts.length) +
    `<p class="rows" style="color:var(--txt);font-size:11.5px;max-width:90ch">Traffic captured at relay, retained by a filter nobody has reviewed since it was written. Most of it is nothing. The filter does not know what it is looking for, which is why it kept these.</p>` +
    D.intercepts.map(m => `<article class="msg">
      <div class="msg-h"><b>${m.f}</b><span>${m.t}</span></div>
      <h3>${m.s}</h3><p>${corrupt(m.b, 0.004)}</p></article>`).join(''),

  evidence: () => QUERY('SELECT * FROM evidence.frame ORDER BY stamp DESC', 118402, D.evidence.length) +
    `<p class="rows" style="color:var(--txt);font-size:11.5px;max-width:92ch">Recovered imagery. Captions are generated by the filing system from the tasking record, not from the frame. The system describes what it is required to describe. Compare the caption to the picture.</p>` +
    `<div class="ev-grid">` + D.evidence.map(e => `
      <figure class="ev" data-frame="${e.f}">
        <img src="/havelock/employee/o4/ev/${e.f}-t.jpg" alt="" loading="lazy">
        <figcaption>
          <span class="ev-id">${e.id}<em>${e.link}</em></span>
          <span class="ev-src">${e.src} · ${e.d}</span>
          <span class="ev-cap">${e.cap}</span>
          <span class="ev-ret ${/NOT INDEXED|LEVEL 5/.test(e.ret)?'r':'s'}">${e.ret}</span>
        </figcaption>
      </figure>`).join('') + `</div>`,

  tail: () => QUERY('SELECT * FROM session_note', 5, 5) + '<ul class="tail">' +
    D.tail.lines.map(l => `<li>${l.replace('%TIME%','<b data-elapsed>'+elapsed()+'</b>')}</li>`).join('') + '</ul>'
  };

  function render(v) {
    off = 0x4a1c00 + (Math.random()*0x9000|0);
    view.innerHTML = (V[v] || V.session)();
    view.scrollTop = 0;
    scrollTo(0, 0);
    document.querySelectorAll('.o4-nav button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  }

  /* Frame viewer — the note only appears once the frame is open. */
  const lb = document.createElement('div');
  lb.className = 'fv'; lb.hidden = true;
  lb.innerHTML = `<button class="fv-x" aria-label="Close">✕</button>
    <figure><img id="fvImg" src="" alt=""><figcaption id="fvCap"></figcaption></figure>`;
  document.body.appendChild(lb);
  const closeFv = () => { lb.hidden = true; document.getElementById('fvImg').src = ''; document.body.style.overflow=''; };
  lb.addEventListener('click', ev => { if (ev.target === lb || ev.target.closest('.fv-x')) closeFv(); });
  addEventListener('keydown', ev => { if (ev.key === 'Escape') closeFv(); });

  document.addEventListener('click', ev => {
    const t = ev.target.closest('[data-frame]');
    if (!t) return;
    const e = EV[t.dataset.frame]; if (!e) return;
    document.getElementById('fvImg').src = `/havelock/employee/o4/ev/${e.f}.jpg`;
    document.getElementById('fvCap').innerHTML =
      `<b>${e.id}</b> <span class="s">${e.src} · ${e.d}</span>
       <span class="cap">${e.cap}</span>
       <span class="ret">${e.ret}${e.link !== '—' ? ' · linked ' + e.link : ''}</span>
       <span class="anno">${e.note}</span>`;
    lb.hidden = false; document.body.style.overflow = 'hidden';
  });

  el('o4Nav').addEventListener('click', e => {
    const b = e.target.closest('[data-v]');
    if (b) render(b.dataset.v);
  });
})();
