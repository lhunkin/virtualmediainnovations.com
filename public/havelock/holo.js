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
     7. Shared clock — in-game campaign date
        Change IN_GAME_DATE to move the campaign forward.
     -------------------------------------------------------- */
  const IN_GAME_DATE = '2098.06.18';
  window.HAVELOCK_DATE = IN_GAME_DATE;

  const dateEls = document.querySelectorAll('[data-holo-date]');
  const timeEls = document.querySelectorAll('[data-holo-time]');
  if (dateEls.length || timeEls.length) {
    const tick = () => {
      const n = new Date();
      const p = v => String(v).padStart(2, '0');
      dateEls.forEach(el => el.textContent = IN_GAME_DATE);
      timeEls.forEach(el => el.textContent = p(n.getHours()) + ':' + p(n.getMinutes()) + ':' + p(n.getSeconds()));
    };
    tick();
    setInterval(tick, 1000);
  }
})();
