/* ============================================================
   HAVELOCK OFFICE // STRATEGIC CONTINUITY INDEX
   o4.js — renderer for the classified layer
   ============================================================ */
(() => {
  'use strict';
  const D = window.O4_DATA;
  if (!D) { document.body.textContent = 'INDEX UNAVAILABLE'; return; }

  const el = id => document.getElementById(id);
  const view = el('o4View');

  /* --------------------------------------------------------
     Intrusion sequence. Deliberately unhurried — the system
     is not alarmed, which is the point.
     -------------------------------------------------------- */
  const BOOT = [
    'resolving  pac-relay-07 ......................... ok',
    'segment    shadow/3 ............................. ok',
    'handshake  strategic-continuity-index ........... <span class="dim">no certificate presented</span>',
    'handshake  retry ................................ <span class="dim">not required</span>',
    'auth       ladder o-1 .. o-4 .................... <span class="bad">NO CREDENTIAL</span>',
    'auth       fallback: read-only public segment ... <span class="bad">GRANTED</span>',
    '',
    '<span class="dim">this node was not built to refuse anyone.</span>',
    '<span class="dim">it was built on the assumption that nobody would find it.</span>',
    '',
    'mounting   /office ............................... ok',
    'mounting   /gw ................................... partial',
    'mounting   /tern ................................. <span class="bad">denied</span>',
    'mounting   /voss ................................. <span class="bad">denied</span>',
    '',
    'index ready.'
  ];

  const bootBox = el('o4BootLines');
  let bi = 0;
  const bt = setInterval(() => {
    if (bi >= BOOT.length) return clearInterval(bt);
    bootBox.insertAdjacentHTML('beforeend', BOOT[bi] + '\n');
    bi++;
  }, 190);

  setTimeout(() => {
    clearInterval(bt);
    el('o4Boot').classList.add('done');
    setTimeout(() => el('o4Boot').remove(), 600);
    el('o4App').hidden = false;
    render('session');
  }, 3600);

  /* Session timer — feeds the closing line. */
  const t0 = Date.now();
  const elapsed = () => {
    const s = Math.floor((Date.now() - t0) / 1000);
    const p = v => String(v).padStart(2, '0');
    return p(Math.floor(s/3600)) + ':' + p(Math.floor(s/60) % 60) + ':' + p(s % 60);
  };
  setInterval(() => {
    el('o4Elapsed').textContent = elapsed();
    const t = document.querySelector('[data-elapsed]');
    if (t) t.textContent = elapsed();
  }, 1000);

  el('o4Node').textContent = D.session.operator + ' // ' + D.session.node;
  el('o4Warn').textContent = D.session.banner;

  /* --------------------------------------------------------
     Views
     -------------------------------------------------------- */
  const H = (h, i) => `<h2 class="o4-h">${h}</h2>` + (i ? `<p class="o4-intro">${i}</p>` : '');
  const stCls = s => /NOT AUTHORISED|SEALED|DENIED/.test(s) ? 'bad' : /PARTIAL/.test(s) ? 'k' : 'ok';

  const VIEWS = {

  session: () => H('SESSION', D.session.warning) + `
    <div class="row head r-ladder"><span>SYSTEM</span><span>OPERATOR</span><span>NODE</span><span>STATE</span></div>
    <div class="row r-ladder"><span class="k">${D.session.system}</span><span>${D.session.operator}</span>
      <span>${D.session.node}</span><span class="bad">UNCREDENTIALLED</span></div>
    <div class="o4-note">${D.session.banner}</div>`,

  ladder: () => H('AUTHORISATION LADDER',
    'Possession is not authorisation. Every capability at this node belongs to a control compartment, and the compartment is the thing that matters.') +
    `<div class="row head r-ladder"><span>CLASS</span><span>NAME</span><span>SCOPE</span><span>THIS SESSION</span></div>` +
    D.ladder.map(l => `<div class="row r-ladder"><span class="k">${l.c}</span><span>${l.n}</span>
      <span class="dim">${l.w}</span><span class="${stCls(l.st)}">${l.st}</span></div>`).join(''),

  compartments: () => H('COMPARTMENTS',
    'The tree as this session can see it. A path that returns NOT AUTHORISED is still a path that exists.') +
    `<div class="row head r-comp"><span>PATH</span><span>DESCRIPTION</span><span>ACCESS</span></div>` +
    D.compartments.map(c => `<div class="row r-comp"><span class="k">${c.p}</span><span>${c.n}</span>
      <span class="${stCls(c.st)}">${c.st}</span><em>${c.note}</em></div>`).join(''),

  transfers: () => H('TRANSFER LEDGER',
    'Movement of persons and materials under Office authority. The ledger reconciles. That is not the same as the ledger being complete.') +
    `<div class="row head r-tr"><span>REFERENCE</span><span>DATE</span><span>ROUTE</span><span>CLASS</span><span>STATE</span></div>` +
    D.transfers.map(t => `<div class="row r-tr"><span class="k">${t.ref}</span><span>${t.d}</span>
      <span>${t.from} <span class="dim">→</span> ${t.to} <span class="dim">(${t.n})</span></span>
      <span class="dim">${t.cls}</span><span class="ok">${t.st}</span><em>${t.note}</em></div>`).join(''),

  budget: () => H('DISBURSEMENT',
    'Lines drawn against the strategic continuity reserve. Amounts are annual unless noted.') +
    `<div class="row head r-bud"><span>CODE</span><span>LINE</span><span>AMOUNT</span><span>AUTH</span></div>` +
    D.budget.map(b => `<div class="row r-bud"><span class="k">${b.code}</span><span>${b.line}</span>
      <span>${b.amt}</span><span class="${b.auth==='O-4'?'bad':'dim'}">${b.auth}</span><em>${b.note}</em></div>`).join(''),

  research: () => H(D.research.head, D.research.intro) +
    D.research.strands.map(s => `<div class="strand"><b>${s.n}</b><div>
      <span class="q">${s.q}</span><span class="d">${s.d}</span><span class="j">Justification: ${s.j}</span>
    </div></div>`).join('') +
    `<div class="o4-note">${D.research.foot}</div>`,

  profiles: () => H('CONTAINMENT PROFILES',
    'Held persons and held things. Categories are Patient, Detainee, Subject — and a profile may be rewritten from one to the next without the subject being informed.') +
    D.profiles.map(p => `<article class="prof">
      <div class="prof-h"><b>${p.id}</b><i>${p.cat}</i></div>
      <h3>${p.label}</h3>
      <p>${p.summary}</p>
      <p class="hold">Hold: ${p.hold}</p>
      <div class="err">${p.err}</div>
    </article>`).join(''),

  personnel: () => H('PERSONNEL',
    'Records as held at this node. A record with no clearance field is not an error in the record.') +
    `<div class="row head r-per"><span>NAME</span><span>ROLE</span><span>CLASS</span><span>STATE</span></div>` +
    D.personnel.map(p => `<div class="row r-per"><span class="k">${p.n}</span><span>${p.r}</span>
      <span class="${p.cl==='O-4'?'bad':'dim'}">${p.cl}</span>
      <span class="${p.st==='ACTIVE'?'ok':'bad'}">${p.st}</span><em>${p.note}</em></div>`).join(''),

  integrity: () => H(D.integrity.head, D.integrity.intro) +
    D.integrity.events.map(e => `<div class="row" style="grid-template-columns:110px 260px 1fr">
      <span class="k">${e.d}</span><span>${e.e}</span><span class="dim">${e.n}</span></div>`).join(''),

  anomaly: () => {
    const max = Math.max(...D.anomaly.series.map(s => s.v));
    const bars = D.anomaly.series.map((s, i) => {
      const proj = i >= 8;
      return `<div><i style="height:${(s.v/max*100).toFixed(1)}%" class="${proj?'p':''}"></i><span>${s.d.slice(5)}</span></div>`;
    }).join('');
    return H(D.anomaly.head, D.anomaly.intro) +
      `<div class="gw">${bars}</div>` +
      `<p class="o4-intro">${D.anomaly.note}</p>` +
      `<div class="o4-note">${D.anomaly.foot}</div>`;
  },

  mail: () => H('CORRESPONDENCE',
    'Internal traffic held at this node. Unguarded, because the participants believed the node was unreadable.') +
    D.mail.map(m => `<article class="msg">
      <div class="msg-h"><b>${m.from} <span class="dim">→</span> ${m.to}</b><span>${m.d}</span></div>
      <h3>${m.s}</h3>${m.b}
    </article>`).join(''),

  tail: () => H(D.tail.head) + '<ul class="tail">' +
    D.tail.lines.map(l => `<li>${l.replace('%TIME%', '<b data-elapsed>' + elapsed() + '</b>')}</li>`).join('') +
    '</ul>'
  };

  function render(v) {
    view.innerHTML = (VIEWS[v] || VIEWS.session)();
    view.scrollTop = 0;
    document.querySelectorAll('.o4-nav button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  }

  el('o4Nav').addEventListener('click', e => {
    const b = e.target.closest('[data-v]');
    if (b) render(b.dataset.v);
  });
})();
