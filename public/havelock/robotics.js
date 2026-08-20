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
      <ol>${b.items.map(i => `<li>${i}</li>`).join('')}</ol></div>`,

    /* One large image carrying a caption that adds information the
       prose does not. Click to open full size. */
    plate: b => `<figure class="r-plate" data-img="${b.img}">
      <img src="/havelock/assets/img/robots/${b.img}.jpg"
           srcset="/havelock/assets/img/robots/${b.img}-s.jpg 760w,
                   /havelock/assets/img/robots/${b.img}.jpg 1500w"
           sizes="(max-width:900px) 100vw, 1100px"
           alt="${b.alt}" loading="lazy" decoding="async">
      <figcaption>${b.ref ? `<span class="r-ref">${b.ref}</span>` : ''}${b.cap}</figcaption>
    </figure>`,

    /* A grid of smaller frames. Each still gets a caption — a
       picture with no caption is decoration, and this page is
       not decorated. */
    gallery: b => `<div class="r-gal${b.wide ? ' r-gal--wide' : ''}">
      ${b.h ? `<span class="holo-data r-gal-h">${b.h}</span>` : ''}
      <div class="r-gal-grid">${b.items.map(i => `
        <figure data-img="${i.img}">
          <img src="/havelock/assets/img/robots/${i.img}-s.jpg"
               alt="${i.alt || ''}" loading="lazy" decoding="async">
          <figcaption>${i.n ? `<b>${i.n}</b>` : ''}${i.cap}</figcaption>
        </figure>`).join('')}</div>
    </div>`
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

  /* ---- full-size viewer -------------------------------------- */
  const lb = document.createElement('div');
  lb.className = 'r-view'; lb.hidden = true;
  lb.innerHTML = `<button class="r-view-x" aria-label="Close">✕</button>
    <figure><img id="rViewImg" src="" alt=""><figcaption id="rViewCap"></figcaption></figure>`;
  document.body.appendChild(lb);

  const close = () => {
    lb.hidden = true;
    document.getElementById('rViewImg').src = '';
    document.body.style.overflow = '';
  };
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.closest('.r-view-x')) close();
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });

  document.addEventListener('click', e => {
    const fig = e.target.closest('[data-img]');
    if (!fig) return;
    document.getElementById('rViewImg').src =
      `/havelock/assets/img/robots/${fig.dataset.img}.jpg`;
    document.getElementById('rViewCap').innerHTML =
      fig.querySelector('figcaption')?.innerHTML || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  window.HAVELOCK_ROBOTICS = S;   // available for the mesh search
})();
