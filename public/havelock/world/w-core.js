/* ============================================================
   HAVELOCK WORLD INDEX // 2098
   w-core.js — registry scaffolding

   A Havelock publication for personnel travelling, contracting
   or holding assets outside the Pacific. It is a briefing, not
   an encyclopaedia: each entry says what a region is good at,
   how it treats the people inside it, and where it is under
   strain.

   PLAYER-SAFE. Everything in this directory can be read by
   anyone. No campaign secret appears here — no classified
   programme, no artificial mind, no December.

   ── ADDING A REGION ─────────────────────────────────────────
   One file per macro-region, loaded in order by world.html.
   Each file pushes entries into the registry:

     window.W.push({ ... })

   Entry shape:
     k      short key, lowercase, no spaces
     r      macro-region key — must match a REGIONS entry
     n      name as published
     tag    short classification line
     lede   one sentence. The whole entry in miniature.
     body   [ paragraph, paragraph, ... ]
     facts  [ [label, value], ... ]   optional
     strain one line: where this region is under pressure.
            Never optional. A briefing that omits the cost is
            advertising.
   ============================================================ */

window.W_META = {

  head: 'HAVELOCK WORLD INDEX',
  sub:  'Thirty-nine entries // revised 2098.06',

  intro: `Havelock operates in one region and depends on the rest. This index exists because personnel routinely sign agreements, accept treatment, carry augmentation and move assets across jurisdictions whose rules they have never read — and because the single most common cause of a stranded employee is not danger. It is a credential that stops being recognised at a border.`,

  note: `Every entry ends with a line marked STRAIN. That line is not editorial disapproval. It is the part of the briefing you are most likely to need, because a region's strengths are advertised to you and its pressure points are not.`,

  /* Order here is the order of the filter chips and the grid. */
  REGIONS: [
    { k:'namerica', n:'North America',        s:'The Alliance and its neighbours' },
    { k:'samerica', n:'South America',        s:'Amazon, Silver River, Andean-Pacific' },
    { k:'europe',   n:'Europe and Eurasia',   s:'The Compact, the north, the Russias' },
    { k:'mideast',  n:'The Middle East',      s:'Gulf, Plateau, Levant' },
    { k:'africa',   n:'Africa',               s:'Five regional systems' },
    { k:'asia',     n:'South and East Asia',  s:'The largest share of humanity' },
    { k:'oceania',  n:'Oceania and the Poles',s:'Australia, the Pacific, the ice, the deep' },
    { k:'orbit',    n:'The High Frontier',    s:'Earth orbit, the Moon, Mars' }
  ],

  foot: `A note on what this index does not tell you. It describes governments, economies and infrastructure. It does not describe the specific contract you are about to sign, and no entry here overrides one. Where this index and your agreement disagree, your agreement is what a court will read.`
};

/* Populated by the w-*.js files, in load order. */
window.W = [];
