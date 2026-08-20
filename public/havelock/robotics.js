/* ============================================================
   HAVELOCK WORLD INDEX // ROBOTICS AND AUTONOMY
   robotics.js — generic block renderer

   The data files describe content as a list of typed blocks.
   This file only knows how to draw each type. Adding a new
   section means adding a data file and a <script> tag; it
   never means touching this file, unless you invent a new
   block type.
   ============================================================ */
(() => {
  'use strict';

  const M = window.R_META, S = window.R || [];
  if (!M || !S.length) return;

  const $ = s => document.querySelector(s);
  const esc = s => String(s);

  /* ---- block renderers --------------------------------------- */
  const B = {

    prose: b => `<div class="r-prose">${b.b.map(p => `<p>${p}</p>`).join('')}</div>`,

    cards: b => `<div class="r-cards">${b.items.map(i => `
      <article class="r-card holo-panel">
        <b>${i.n}</b>${i.s ? `<span>${i.s}</span>` : ''}
        <p>${i.b}</p>
      </article>`).join('')}</div>`,

    ladder: b => `<div class="r-ladder">${b.items.map(i => `
      <div class="r-rung">
        <b>${i.k}</b>${i.n && i.n !== '—' ? `<em>${i.n}</em>` : '<em class="nil">—</em>'}
        <p>${i.v}</p>
      </div>`).join('')}</div>`,

    table: b => `<div class="r-tablewrap"><table class="r-table">
      <thead><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${b.rows.map(r => `<tr>${r.map((c, i) =>
        `<td${i === 0 ? ' class="r-key"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`,

    quote: b => `<blockquote class="r-quote holo-bracket">
      <p>${b.b}</p><span class="holo-data">${b.src}</span></blockquote>`,

    note: b => `<div class="r-note">
      <span class="holo-data">${b.h}</span><p>${b.b}</p></div>`,

    stats: b => `<div class="r-stats">${b.items.map(i => `
      <div><b>${i[0]}</b><span>${i[1]}</span></div>`).join('')}</div>`,

    list: b => `<div class="r-list">
      <span class="holo-data">${b.h}</span>
      <ol>${b.items.map(i => `<li>${i}</li>`).join('')}</ol></div>`
  };

  /* ---- page -------------------------------------------------- */
  const lede = $('#rLede');
  if (lede) lede.innerHTML =
    `<p class="r-hero-lede">${M.lede}</p><p class="holo-body">${M.intro}</p>`;

  const stats = $('#rStats');
  if (stats) stats.innerHTML = M.stats.map(s =>
    `<div><span class="holo-data">${s[1]}</span><b>${s[0]}</b></div>`).join('');

  const nav = $('#rNav');
  if (nav) nav.innerHTML = S.map(s =>
    `<a href="#r-${s.k}">${s.n}</a>`).join('');

  const body = $('#rBody');
  if (body) body.innerHTML = S.map(s => `
    <section class="section section--tight" id="r-${s.k}">
      <div class="section-head beam">
        <div class="holo-kicker">${s.kicker}</div>
        <h2 class="holo-title t2">${s.n}</h2>
        <p class="holo-body r-lede">${s.lede}</p>
      </div>
      ${s.blocks.map(b => {
        const fn = B[b.t];
        if (!fn) return '';
        return `<div class="r-block beam" data-depth="0.04">${fn(b)}</div>`;
      }).join('')}
    </section>`).join('');

  const foot = $('#rFoot');
  if (foot) foot.innerHTML =
    `<span class="holo-data">SCOPE AND LIMITS</span><p>${M.foot}</p>`;

  window.HAVELOCK_ROBOTICS = S;   // available for the mesh search
})();
