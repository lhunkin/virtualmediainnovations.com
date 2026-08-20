/* ============================================================
   HAVELOCK WORLD INDEX // ROBOTICS AND AUTONOMY
   r-core.js — scaffolding

   A public supplement to the World Index, covering how machines
   work in 2098: what they may decide, what they may never
   decide, who builds them, who is liable, and what it is like
   to live beside one.

   PLAYER-SAFE. Everything in this directory can be read by
   anyone. Stripped on the way in: all game mechanics, all
   references to the Cataclysm and anything after it, all
   classified programmes, and every out-of-character note.

   ── ADDING TO THIS FILE SET ─────────────────────────────────
   One file per section. Each pushes into the registry:

     window.R.push({ k, n, kicker, lede, blocks:[ ... ] })

   Block types the renderer understands:
     {t:'prose',  b:[ 'paragraph', ... ]}
     {t:'cards',  items:[ {n, s, b} ]}          n=title s=subtitle
     {t:'ladder', items:[ {k, n, v} ]}          k=rung n=badge v=meaning
     {t:'table',  head:[...], rows:[[...]]}
     {t:'quote',  b:'…', src:'…'}
     {t:'note',   h:'HEADING', b:'…'}
     {t:'stats',  items:[ [big, label] ]}
     {t:'list',   h:'HEADING', items:['…']}
   ============================================================ */

window.R_META = {
  head: 'ROBOTICS AND AUTONOMY',
  sub:  'A supplement to the Havelock World Index // revised 2098.06',

  lede: `In 2098 there is one embodied robot for every five people, and almost everyone trusts them — because almost every robot has earned that trust.`,

  intro: `This supplement exists because the machines are no longer remarkable. A resident may go days without seeing a privately owned household unit and still deal with dozens of civic and corporate machines before lunch. That familiarity is the point, and it is also the reason a document like this is necessary: people stop reading the terms attached to things they see every day.`,

  stats: [
    ['1 : 5',   'Embodied robots to people'],
    ['~1 / 3',  'Humanoid or upright bimanual'],
    ['~1 %',    'Using human-presence shells'],
    ['~97 %',   'Bounded task and service minds'],
    ['~0.01 %', 'Person-level or under review']
  ],

  foot: `Two cautions. First, nothing in this supplement overrides your service agreement, your employer's fleet policy or a court order, and where they disagree, they win. Second, every figure here describes the Alliance average. A machine's behaviour is set by the jurisdiction it is standing in, not the one it was built in.`
};

/* Populated by the r-*.js files, in load order. */
window.R = [];
