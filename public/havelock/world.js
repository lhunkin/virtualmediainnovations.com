/* ============================================================
   HAVELOCK WORLD INDEX // 2098
   world.js — region filters, search, rendering

   Data lives in world/w-*.js, one file per macro-region. This
   file only knows how to draw whatever it finds in window.W.
   ============================================================ */
(() => {
  'use strict';

  const M = window.W_META, ALL = window.W || [];
  if (!M || !ALL.length) return;

  const $ = s => document.querySelector(s);
  let region = 'all', q = '';

  const REGION_NAME = Object.fromEntries(M.REGIONS.map(r => [r.k, r.n]));

  /* ---- static furniture -------------------------------------- */
  const intro = $('#wIntro');
  if (intro) intro.innerHTML =
    `<p class="holo-body">${M.intro}</p><p class="holo-body">${M.note}</p>`;

  const foot = $('#wFoot');
  if (foot) foot.innerHTML =
    `<span class="holo-data">CIVIC INDEX // SCOPE</span><p>${M.foot}</p>`;

  const chips = $('#wChips');
  if (chips) chips.innerHTML =
    `<button class="on" data-region="all">All regions <em>${ALL.length}</em></button>` +
    M.REGIONS.map(r => {
      const n = ALL.filter(e => e.r === r.k).length;
      return `<button data-region="${r.k}" title="${r.s}">${r.n} <em>${n}</em></button>`;
    }).join('');

  /* ---- render ------------------------------------------------ */
  const match = e => {
    if (region !== 'all' && e.r !== region) return false;
    if (!q.trim()) return true;
    const hay = (e.n + ' ' + e.tag + ' ' + e.lede + ' ' + e.body.join(' ') + ' ' +
      e.strain + ' ' + (e.facts || []).flat().join(' ')).toLowerCase();
    return q.toLowerCase().split(/\s+/).filter(Boolean).every(w => hay.includes(w));
  };

  function render() {
    const list = ALL.filter(match);
    const grid = $('#wGrid');

    $('#wCount').textContent =
      list.length + (list.length === 1 ? ' entry' : ' entries');

    if (!list.length) {
      grid.innerHTML = '<div class="w-empty">No entry matches that query.</div>';
      return;
    }

    /* Group under region headings so the page reads as a briefing
       rather than a flat pile of cards. */
    const order = M.REGIONS.map(r => r.k).filter(k => list.some(e => e.r === k));

    grid.innerHTML = order.map(rk => {
      const meta = M.REGIONS.find(r => r.k === rk);
      const items = list.filter(e => e.r === rk);
      return `
        <div class="w-band beam" data-depth="0.04">
          <h3>${meta.n}</h3><span>${meta.s}</span><i>${items.length}</i>
        </div>` +
        items.map(e => `
        <article class="w-entry holo-panel beam" data-depth="0.05" id="w-${e.k}">
          <div class="w-head">
            <b>${e.n}</b>
            <em>${e.tag}</em>
            <span class="w-reg">${REGION_NAME[e.r]}</span>
          </div>
          <p class="w-lede">${e.lede}</p>
          <div class="w-body">${e.body.map(p => `<p>${p}</p>`).join('')}</div>
          ${e.facts ? `<dl class="w-facts">${e.facts.map(f =>
            `<dt>${f[0]}</dt><dd>${f[1]}</dd>`).join('')}</dl>` : ''}
          <div class="w-strain"><span>STRAIN</span><p>${e.strain}</p></div>
        </article>`).join('');
    }).join('');
  }

  /* ---- controls ---------------------------------------------- */
  chips?.addEventListener('click', ev => {
    const b = ev.target.closest('[data-region]');
    if (!b) return;
    region = b.dataset.region;
    chips.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    render();
    document.getElementById('index')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const search = $('#wSearch');
  search?.addEventListener('input', () => { q = search.value; render(); });

  render();
  window.HAVELOCK_WORLD = ALL;   // available for the mesh search
})();
