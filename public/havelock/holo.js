/* ============================================================
   HAVELOCK INDUSTRIES // COMMON MESH
   holo.js — projection engine

   Injects the volumetric projector chrome on any page that loads
   it, drives pointer parallax, beam-in reveals, dust motes, and
   the warm-up sequence. Layout-safe: every injected layer is
   position:fixed and pointer-events:none.
   ============================================================ */
(() => {
  'use strict';

  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Content is only allowed to start hidden once this script is confirmed
  // running. If holo.js ever fails to load, every section stays visible.
  root.classList.add('holo-js');

  // Decorative subsystems are individually fenced. A cosmetic failure must
  // never be able to take the page's content down with it.
  const guard = (label, fn) => { try { fn(); } catch (err) { console.warn('[holo] ' + label + ' disabled:', err); } };

  /* --------------------------------------------------------
     0. Persisted FX preference
     -------------------------------------------------------- */
  try {
    if (localStorage.getItem('havelockHoloFx') === 'off') root.classList.add('holo-off');
  } catch (e) { /* storage blocked — run at full intensity */ }

  /* --------------------------------------------------------
     1. Projector chrome
     -------------------------------------------------------- */
  const chrome = document.createElement('div');
  chrome.className = 'holo-chrome';
  chrome.setAttribute('aria-hidden', 'true');
  chrome.innerHTML =
    '<div class="holo-cone"></div>' +
    '<div class="holo-emitter"></div>' +
    '<canvas class="holo-motes"></canvas>' +
    '<div class="holo-refresh"></div>' +
    '<div class="holo-tear"></div>' +
    '<div class="holo-scan"></div>' +
    '<div class="holo-falloff"></div>' +
    '<div class="holo-fringe"></div>';
  document.body.appendChild(chrome);

  /* --------------------------------------------------------
     2. FX intensity toggle
     -------------------------------------------------------- */
  const fxBtn = document.createElement('button');
  fxBtn.className = 'holo-fx';
  fxBtn.type = 'button';
  const syncFx = () => {
    fxBtn.textContent = root.classList.contains('holo-off') ? '◌ HOLO OFF' : '◉ HOLO ON';
    fxBtn.setAttribute('aria-label', 'Toggle holographic projection effects');
  };
  fxBtn.addEventListener('click', () => {
    root.classList.toggle('holo-off');
    try { localStorage.setItem('havelockHoloFx', root.classList.contains('holo-off') ? 'off' : 'on'); } catch (e) {}
    syncFx();
  });
  syncFx();
  document.body.appendChild(fxBtn);

  /* --------------------------------------------------------
     3. Airborne dust lit by the beam
     -------------------------------------------------------- */
  const canvas = chrome.querySelector('.holo-motes');
  const ctx = canvas.getContext('2d');
  let motes = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

  function sizeCanvas() {
    // clientWidth/clientHeight are read-only — set the CSS box, not the metric.
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Density scales with viewport so phones don't burn battery.
    const count = Math.round(Math.min(150, (W * H) / 12000));
    motes = new Array(count).fill(0).map(() => spawn(true));
  }

  function spawn(anywhere) {
    return {
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : H + 12,
      r: Math.random() * 1.5 + 0.35,
      // slow upward convection, as if riding the projector's heat
      vy: -(Math.random() * 0.22 + 0.05),
      vx: (Math.random() - 0.5) * 0.14,
      a: Math.random() * 0.5 + 0.12,
      phase: Math.random() * Math.PI * 2
    };
  }

  function drawMotes(t) {
    ctx.clearRect(0, 0, W, H);
    for (const m of motes) {
      m.x += m.vx;
      m.y += m.vy;
      m.phase += 0.012;
      if (m.y < -12) Object.assign(m, spawn(false));
      if (m.x < -12) m.x = W + 12;
      if (m.x > W + 12) m.x = -12;

      // Brightness falls off away from the cone's centre axis.
      const axis = 1 - Math.min(1, Math.abs(m.x - W / 2) / (W * 0.62));
      const twinkle = 0.55 + Math.sin(m.phase) * 0.45;
      const alpha = m.a * axis * twinkle;
      if (alpha <= 0.01) continue;

      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(150,240,255,' + alpha.toFixed(3) + ')';
      ctx.fill();
    }
  }

  let rafId = null;
  function loop(t) {
    if (!root.classList.contains('holo-off')) drawMotes(t);
    else ctx.clearRect(0, 0, W, H);
    rafId = requestAnimationFrame(loop);
  }

  guard('dust motes', () => {
    if (reduced) { canvas.style.display = 'none'; return; }
    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);
    rafId = requestAnimationFrame(loop);
    // Stop burning frames when the tab is hidden.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(rafId); rafId = null; }
      else if (!rafId) rafId = requestAnimationFrame(loop);
    });
  });

  /* --------------------------------------------------------
     4. Pointer parallax — the image sits in real depth
     -------------------------------------------------------- */
  const layers = [...document.querySelectorAll('[data-depth]')];
  guard('pointer parallax', () => {
  if (layers.length && !reduced && window.matchMedia('(pointer:fine)').matches) {
    let tx = 0, ty = 0, cx = 0, cy = 0, ticking = false;

    window.addEventListener('pointermove', e => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;   // -1 .. 1
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }, { passive: true });

    function apply() {
      // Ease toward the pointer so motion feels like mass, not tracking.
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      for (const el of layers) {
        const d = parseFloat(el.dataset.depth) || 0;
        const rot = el.hasAttribute('data-tilt') ? d * 1.7 : 0;
        el.style.transform =
          'translate3d(' + (-cx * d * 22).toFixed(2) + 'px,' +
          (-cy * d * 16).toFixed(2) + 'px,0)' +
          (rot ? ' rotateY(' + (cx * rot).toFixed(2) + 'deg) rotateX(' + (-cy * rot).toFixed(2) + 'deg)' : '');
      }
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) requestAnimationFrame(apply);
      else ticking = false;
    }
  }
  });

  /* --------------------------------------------------------
     5. Beam-in reveal on scroll
     -------------------------------------------------------- */
  const beams = document.querySelectorAll('.beam');
  if (beams.length) {
    if (!('IntersectionObserver' in window) || reduced) {
      beams.forEach(b => b.classList.add('lit'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Stagger siblings so a group resolves left-to-right.
          const delay = parseFloat(el.dataset.beamDelay || 0) + i * 70;
          setTimeout(() => el.classList.add('lit'), delay);
          io.unobserve(el);
        });
      // Fire the moment any pixel enters, with a head start below the fold, so
      // jumping to an anchor never lands on an unresolved (invisible) section.
      }, { rootMargin: '0px 0px 15% 0px', threshold: 0 });
      beams.forEach(b => io.observe(b));

      // Failsafe: an anchor jump can outrun the observer. Light the whole
      // target section immediately so a nav click never reveals a dark gap.
      const litAll = scope => {
        if (!scope) return;
        if (scope.classList && scope.classList.contains('beam')) {
          scope.classList.add('lit'); io.unobserve(scope);
        }
        scope.querySelectorAll?.('.beam:not(.lit)').forEach(el => {
          el.classList.add('lit'); io.unobserve(el);
        });
      };

      const litTarget = () => {
        const id = decodeURIComponent(location.hash.slice(1));
        if (id) litAll(document.getElementById(id));
      };

      window.addEventListener('hashchange', litTarget);
      document.addEventListener('click', e => {
        const a = e.target.closest?.('a[href^="#"]');
        if (!a) return;
        litAll(document.getElementById(a.getAttribute('href').slice(1)));
      }, true);
      litTarget();

      /* ----------------------------------------------------
         Late-arriving content.

         The list above is captured once, at load. Any .beam
         element injected afterwards by a data file — the
         district atlas, the history eras, the descent plates —
         would never be observed, and would sit at opacity:0
         forever while still occupying its full height. That
         reads to a visitor as a large unexplained gap.

         So: adopt anything added to the DOM later. The public
         hook is for scripts that want to be explicit; the
         MutationObserver catches everyone who forgets.
         ---------------------------------------------------- */
      const adopt = root => {
        if (!root || root.nodeType !== 1) return;
        if (root.classList.contains('beam') && !root.classList.contains('lit')) io.observe(root);
        root.querySelectorAll?.('.beam:not(.lit)').forEach(el => io.observe(el));
      };

      new MutationObserver(muts => {
        for (const m of muts) m.addedNodes.forEach(adopt);
      }).observe(document.body, { childList: true, subtree: true });

      /* ----------------------------------------------------
         Failsafe sweep.

         IntersectionObserver coalesces callbacks. On a fast
         scroll — a flick on a phone, a scripted jump, a mouse
         wheel spun hard — an element can be reported once,
         already out of view, with isIntersecting false, and
         then never reported again because it never re-enters.
         It stays dark permanently while occupying its height.

         So on every scroll frame, light anything that has
         reached the fold and somehow missed its turn. The
         observer still drives the normal staggered reveal;
         this only catches what it drops.
         ---------------------------------------------------- */
      let queued = false;
      const sweep = () => {
        queued = false;
        const fold = innerHeight * 0.98;
        document.querySelectorAll('.beam:not(.lit)').forEach(el => {
          if (el.getBoundingClientRect().top < fold) {
            el.classList.add('lit');
            io.unobserve(el);
          }
        });
      };
      addEventListener('scroll', () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(sweep);
      }, { passive: true });
      addEventListener('resize', sweep, { passive: true });
      addEventListener('load', sweep);

      window.HOLO_BEAM = { adopt, sweep };
    }
  }

  /* --------------------------------------------------------
     6. Projector warm-up
        Skipped when a page runs its own boot sequence
        (employee terminal) via <body data-holo-boot="off">.
     -------------------------------------------------------- */
  if (document.body.dataset.holoBoot !== 'off' && !reduced) {
    const sweep = document.createElement('div');
    sweep.className = 'holo-sweep';
    document.body.appendChild(sweep);
    setTimeout(() => sweep.remove(), 1600);
  }

  /* --------------------------------------------------------
     7. CAMPAIGN CLOCK
     The in-game date drifts on its own. It is interpolated
     between two anchors, so the site stays in step with the
     campaign without anyone touching it.

     To re-anchor for a new arc, change these four values only.
     -------------------------------------------------------- */
  const CAMPAIGN = {
    realStart: '2026-08-19',   // the day the drift begins
    gameStart: '2098-06-18',   // in-game date on that day
    realEnd:   '2026-11-02',   // the day it should reach gameEnd
    gameEnd:   '2098-12-21'    // solstice
  };

  const DAY = 86400000;
  const utc = iso => { const [y,m,d] = iso.split('-').map(Number); return Date.UTC(y, m-1, d); };

  /* Linear drift: ~2.5 in-game days per real day. Held at the start
     date before the campaign opens; allowed to run on past the end so
     the clock keeps moving into whatever comes after the solstice. */
  function campaignDate(now) {
    const rs = utc(CAMPAIGN.realStart), re = utc(CAMPAIGN.realEnd);
    const gs = utc(CAMPAIGN.gameStart), ge = utc(CAMPAIGN.gameEnd);
    const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const frac = (today - rs) / (re - rs);
    const gameMs = gs + Math.max(0, frac) * (ge - gs);
    return new Date(Math.round(gameMs / DAY) * DAY);
  }

  const pad = v => String(v).padStart(2, '0');
  const fmtDate  = d => d.getUTCFullYear() + '.' + pad(d.getUTCMonth()+1) + '.' + pad(d.getUTCDate());
  const MON = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const fmtLong  = d => d.getUTCDate() + ' ' + MON[d.getUTCMonth()] + ' ' + d.getUTCFullYear();

  const dateEls  = document.querySelectorAll('[data-holo-date]');
  const timeEls  = document.querySelectorAll('[data-holo-time]');
  const longEls  = document.querySelectorAll('[data-holo-datelong]');
  const cdEls    = document.querySelectorAll('[data-holo-countdown]');

  function tick() {
    const now = new Date();
    const game = campaignDate(now);

    window.HAVELOCK_DATE = fmtDate(game);
    window.HAVELOCK_GAME_DATE = game;

    dateEls.forEach(el => el.textContent = fmtDate(game));
    longEls.forEach(el => el.textContent = fmtLong(game));
    timeEls.forEach(el => el.textContent =
      pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds()));

    // Days remaining until the scheduled anchor rotation. Reads as routine
    // maintenance scheduling; happens to be the solstice.
    if (cdEls.length) {
      const left = Math.round((utc(CAMPAIGN.gameEnd) - game.getTime()) / DAY);
      cdEls.forEach(el => el.textContent = left > 0 ? 'T-' + left + ' D' : 'DUE');
    }
  }

  tick();
  setInterval(tick, 1000);
})();
