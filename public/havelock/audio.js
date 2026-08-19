/* ============================================================
   HAVELOCK INDUSTRIES // PUBLIC MESH
   audio.js — ambient score for the public terminal

   Plays "The Watcher Wears Our Face" under the site with a
   visible control and a remembered preference.

   Browsers block audio that starts without a user gesture, so
   this attempts playback immediately and, if refused, arms a
   one-shot listener that starts it on the visitor's first tap,
   click, scroll or keypress. Either way the control reflects
   the true state — it never claims to be playing when it isn't.
   ============================================================ */
(() => {
  'use strict';

  const SRC   = 'assets/audio/watcher-wears-our-face.mp3';
  const TITLE = 'The Watcher Wears Our Face';
  const KEY   = 'havelockMusic';
  const VOL   = 0.34;          // background level — the site is to be read over

  let wanted = true;           // does the visitor want music
  try { wanted = localStorage.getItem(KEY) !== 'off'; } catch (e) {}

  /* --------------------------------------------------------
     Element. preload="none" so a phone on mobile data does not
     pull 4.4MB before anyone has asked for sound.
     -------------------------------------------------------- */
  const audio = document.createElement('audio');
  audio.src = SRC;
  audio.loop = true;
  audio.preload = 'none';
  audio.volume = 0;
  audio.setAttribute('aria-hidden', 'true');
  document.body.appendChild(audio);

  /* Fade rather than cut — a hard start is jarring under a boot screen. */
  let fadeTimer = null;
  function fadeTo(target, ms) {
    clearInterval(fadeTimer);
    const from = audio.volume, steps = Math.max(1, Math.round(ms / 40));
    let i = 0;
    fadeTimer = setInterval(() => {
      i++;
      audio.volume = Math.min(1, Math.max(0, from + (target - from) * (i / steps)));
      if (i >= steps) {
        clearInterval(fadeTimer);
        if (target === 0) audio.pause();
      }
    }, 40);
  }

  /* --------------------------------------------------------
     Control
     -------------------------------------------------------- */
  const btn = document.createElement('button');
  btn.className = 'holo-music';
  btn.type = 'button';
  let armed = false;           // waiting on a first gesture

  function paint() {
    const playing = !audio.paused;
    btn.classList.toggle('on', playing);
    btn.classList.toggle('armed', armed && !playing);
    btn.innerHTML = playing
      ? '<i>❙❙</i><span>' + TITLE + '</span>'
      : (armed ? '<i>▶</i><span>Tap for sound</span>'
               : '<i>▶</i><span>Play score</span>');
    btn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
    btn.setAttribute('aria-pressed', String(playing));
  }

  function start() {
    audio.preload = 'auto';
    const p = audio.play();
    if (p && p.catch) {
      return p.then(() => { armed = false; fadeTo(VOL, 2600); paint(); })
              .catch(() => { armed = true; paint(); return Promise.reject(); });
    }
    fadeTo(VOL, 2600); paint();
    return Promise.resolve();
  }

  function stop() {
    fadeTo(0, 500);
    setTimeout(paint, 520);
  }

  btn.addEventListener('click', () => {
    if (audio.paused) {
      wanted = true;
      try { localStorage.setItem(KEY, 'on'); } catch (e) {}
      start().catch(() => {});
    } else {
      wanted = false;
      try { localStorage.setItem(KEY, 'off'); } catch (e) {}
      stop();
    }
  });

  document.body.appendChild(btn);
  paint();

  /* --------------------------------------------------------
     Autostart, with a gesture fallback
     -------------------------------------------------------- */
  if (wanted) {
    start().catch(() => {
      // Blocked by autoplay policy. Wait for any first interaction.
      const kick = () => {
        if (!wanted) return detach();
        start().then(detach).catch(() => {});
      };
      const events = ['pointerdown', 'keydown', 'touchstart', 'wheel'];
      const detach = () => events.forEach(e => window.removeEventListener(e, kick));
      events.forEach(e => window.addEventListener(e, kick, { passive: true }));
    });
  }

  // Pause when the tab is hidden; resume only if the visitor wanted it.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !audio.paused) { audio.pause(); paint(); }
    else if (!document.hidden && wanted && audio.paused && audio.currentTime > 0) {
      audio.play().then(() => { fadeTo(VOL, 900); paint(); }).catch(() => {});
    }
  });

  audio.addEventListener('play', paint);
  audio.addEventListener('pause', paint);
})();
