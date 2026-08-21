/* ============================================================
   HAVELOCK INDUSTRIES // PUBLIC MESH TERMINAL
   site.js — public page behaviour
   ============================================================ */
(() => {
  'use strict';

  const $  = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  /* --------------------------------------------------------
     1. Projector warm-up
     -------------------------------------------------------- */
  const curtain = $('#bootCurtain');
  const bootLines = $('#bootLines');
  const LINES = [
    'EMITTER ARRAY // WARM',
    'TRUST ANCHOR // VERIFIED',
    'PACIFIC RELAY 07 // SYNCHRONISED',
    'PUBLIC RECORD SERVICE // AVAILABLE',
    'PROJECTION FIELD // STABLE'
  ];

  if (curtain && bootLines) {
    let i = 0;
    const t = setInterval(() => {
      if (i >= LINES.length) return clearInterval(t);
      bootLines.insertAdjacentHTML('beforeend', '<div><b>›</b> ' + LINES[i] + '</div>');
      i++;
    }, 430);

    const dismiss = () => {
      clearInterval(t);
      curtain.classList.add('done');
      setTimeout(() => curtain.remove(), 800);
    };
    setTimeout(dismiss, 2900);
    // Let impatient players skip the warm-up.
    curtain.addEventListener('click', dismiss);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') dismiss(); }, { once: true });
  }

  /* --------------------------------------------------------
     2. Public record content (modals)
     -------------------------------------------------------- */
  /* Division files — one entry per card in section 02. */
  const DIVISION = (idx, name, tag, mandate, services, where, contracts) => ({
    tag: tag,
    title: idx + ' // ' + name,
    body:
      '<p><b>Mandate.</b> ' + mandate + '</p>' +
      '<p><b>Core services.</b></p><ul>' + services.map(x => '<li>' + x + '</li>').join('') + '</ul>' +
      '<p><b>Where it operates.</b> ' + where + '</p>' +
      '<div class="modal-grid">' + contracts.map(c =>
        '<div class="modal-tile"><b>' + c[0] + '</b><span>' + c[1] + '</span></div>').join('') + '</div>'
  });

  const RECORDS = {
    d01: DIVISION('D-01', 'Human Systems', 'CLINICAL // PACIFIC + ORBITAL',
      'Keep people alive, then keep them whole, then keep them working — in that order, and for as long as it takes. Human Systems holds the clinical obligation for every other division’s personnel as well as for contracted populations.',
      ['Trauma, reconstruction and critical care',
       'Organ fabrication, transplant and long-term immunological support',
       'Prosthetic design, fitting, revision and lifetime maintenance',
       'Augmentation support and capability rehabilitation',
       'Consent Ledger administration and clinical records custody'],
      'Vancouver flagship, seventeen Pacific Commons clinics, and Continuity Suite 19-C in medium Earth orbit. Mobile theatres deploy with Tier 2 and Tier 3 activations.',
      [['Organ fabrication', 'WAITING PERIODS PUBLISHED QUARTERLY'],
       ['Exit maintenance', 'LIFE SUPPORT CONTINUES AFTER EMPLOYMENT'],
       ['Consent Ledger', 'EMPLOYEE RETAINS THE RECORD'],
       ['Independent oversight', 'EXTERNALLY STAFFED CLINICAL REVIEW']]),

    d02: DIVISION('D-02', 'Infrastructure Continuity', 'CIVIL // 31 COUNTRIES',
      'Hold the systems a population cannot survive a week without — power, water, shelter and the coastline — and hold them through the failure rather than after it.',
      ['Grid hardening, islanding and black-start capability',
       'Water treatment, distribution and emergency potable supply',
       'Seawall, pump, drainage and managed-retreat works',
       'Emergency housing manufacture and placement at scale',
       'Post-event civil recovery and handback to public authorities'],
      'Thirty-one countries. The largest current programme is the Salish corridor, spanning eleven municipalities across two jurisdictions.',
      [['Salish corridor', 'THIRD PHASE // PUBLIC REVIEW'],
       ['Maintenance term', 'TWENTY YEARS FROM HANDOVER'],
       ['Degraded mode', 'EVERY SYSTEM RUNS WITHOUT THE MESH'],
       ['Handback', 'TO PUBLIC AUTHORITY, NOT TO A SUCCESSOR VENDOR']]),

    d03: DIVISION('D-03', 'Emergency &amp; Recovery', 'FIELD // RAPID DEPLOY',
      'Go in first, bring people out, and preserve what can be preserved once nobody is still dying. Emergency &amp; Recovery owns the Stabilize and Recover phases of the continuity cycle.',
      ['Search, extraction and technical rescue',
       'Hazardous atmosphere, contaminated and collapsed-structure entry',
       'Critical and protected personnel movement',
       'Scene preservation, evidence recovery and chain of custody',
       'Recovery, identification and repatriation of the dead'],
      'Standing crews at all seventeen Pacific Commons hubs. Tier 3 Field Measures units deploy on mission-specific authority and their locations are not published.',
      [['Life before evidence', 'DESTRUCTION OF EVIDENCE IS PROTECTED'],
       ['Capture before termination', 'LETHAL FORCE IS A REPORTED FAILURE STATE'],
       ['Return together', 'UNIT STATE IS ASSESSED, NOT INDIVIDUAL HEROICS'],
       ['Repatriation', 'AT COST, FOR ANY OPERATOR']]),

    d04: DIVISION('D-04', 'Systems Intelligence', 'MESH // TRUST LAYER',
      'Decide whether a system can be trusted with a life, say so in writing, and be answerable when the answer was wrong. Systems Intelligence certifies autonomy and anchors identity across the Common Mesh.',
      ['Autonomous system certification and periodic recertification',
       'Identity architecture, trust anchoring and recovery-key custody',
       'Post-incident forensic analytics and causation findings',
       'Common Mesh public service assurance and degradation reporting',
       'Protected-identity sealing and recorded unsealing procedure'],
      'Vancouver, distributed regional teams, and an orbital cell aboard Suite 19-C. Findings are filed publicly, including findings adverse to Havelock.',
      [['Certification', 'WITHDRAWABLE // PUBLISHED WHEN WITHDRAWN'],
       ['Unsealing', 'NAMED OFFICER // SUBJECT IS NOTIFIED'],
       ['Mesh telemetry', 'SESSION-MINIMISED ON PUBLIC TERMINALS'],
       ['Adverse findings', 'FILED AGAINST OURSELVES AS WELL']]),

    d05: DIVISION('D-05', 'Mobility &amp; Orbital', 'LIFT // NORTHSTAR CROWN',
      'Move what cannot be lost and reach what cannot wait — through atmosphere, through the lift corridor, and in orbit where there is no second responder.',
      ['Medical evacuation, atmospheric and orbital',
       'Protected, hazardous and temperature-critical freight',
       'Debris tracking, characterisation and removal',
       'Lift corridor coordination and conjunction warning',
       'Crew and vehicle recovery, including uncontrolled attitude'],
      'Pacific lift corridor and medium Earth orbit, operating from Continuity Suite 19-C aboard Northstar Crown. Crew rotations run ninety days.',
      [['Orbital agreement', 'RENEWED THROUGH 2104'],
       ['Conjunction warnings', 'FREE // NO LICENCE CONDITIONS'],
       ['Suite 19-C', 'PERMANENT // NEVER MOTHBALLED'],
       ['Two theatres', 'HELD AT READINESS AT ALL TIMES']]),

    d06: DIVISION('D-06', 'Risk &amp; Assurance', 'ACTUARIAL // PUBLIC FILINGS',
      'Price the failure honestly, carry the liability, and make sure the person who lost everything can prove who they are afterward. Risk &amp; Assurance is the division that makes the other five affordable.',
      ['Continuity underwriting and contract structuring',
       'Liability, indemnity and third-party claims',
       'Identity theft response and civic identity restoration',
       'Institutional and public risk modelling',
       'Charter compliance auditing and claims administration'],
      'Global, with public risk models lodged with the North American Alliance registry and released without charge to civil authorities.',
      [['Risk models', 'RELEASED FREE TO CIVIL AUTHORITIES'],
       ['Identity restoration', 'OFFERED REGARDLESS OF POLICY STATUS'],
       ['Charter audit', 'BIENNIAL // EMPLOYEE REPRESENTATION'],
       ['Claims', 'COMPANY BEARS PROCESS COST']]),

    news5: {
      tag: 'HIGH FRONTIER // PUBLIC SERVICE',
      title: 'Conjunction warning service opened to all corridor operators',
      body: `<p>Havelock debris tracking and conjunction prediction data is now released to every operator
             in the Pacific lift corridor without charge and without licence conditions, including to
             direct commercial competitors.</p>
             <p>The company has declined to place the data behind a commercial agreement on the grounds
             that a collision in the corridor is a shared loss. Feeds are mirrored to the public trust
             channel and remain available during mesh degradation.</p>`
    },
    news6: {
      tag: 'GOVERNANCE // ANNUAL REVIEW',
      title: 'Annual review filed, including three adverse findings',
      body: `<p>The 2098 annual continuity review has been filed with the North American Alliance registry
             and mirrored here in full.</p>
             <p>Three adverse findings are disclosed: two Tier 1 response-time failures in the Pacific
             Commons, and one records-handling breach in which personnel medical data was retained
             beyond its permitted window. Affected employees were notified before publication.</p>
             <p>Remediation, the officers accountable, and the cost of each are recorded in the filing.
             Havelock has published adverse findings against itself in every year since listing in 2062.</p>`
    },

    news1: {
      tag: 'PUBLIC WORKS // SALISH CORRIDOR',
      title: 'Coastal continuity works extended along the Salish corridor',
      body: `<p>Third-phase seawall, pump and managed-retreat infrastructure has entered public review
             across eleven municipalities. Havelock Infrastructure Continuity holds the build and
             twenty-year maintenance obligation under a public continuity contract.</p>
             <p>Independent load modelling and the full environmental file are lodged with the
             North American Alliance civil registry. Public comment closes 2098.07.30.</p>`
    },
    news2: {
      tag: 'HUMAN SYSTEMS // CLINICAL',
      title: 'Organ fabrication capacity raised at Vancouver and Suite 19-C',
      body: `<p>Additional fabrication lines at Havelock Centre and Continuity Suite 19-C have reduced
             median waiting periods for replacement organs across the Pacific Commons.</p>
             <p>Under the Human Capability Charter, ordinary restoration and replacement organs
             remain the property of the person who received them and cannot be repossessed on exit
             from employment.</p>`
    },
    news3: {
      tag: 'ENVIRONMENTAL // MUIR POINT',
      title: 'Muir Point environmental restoration enters year four',
      body: `<p>Sediment remediation, water-table monitoring and habitat restoration at the Muir Point
             site continue under the 2094 consent order.</p>
             <p>Havelock has requested a two-year extension of independent monitoring beyond the
             regulatory minimum. Quarterly readings are published to the public trust channel.</p>`
    },
    news4: {
      tag: 'HIGH FRONTIER // ORBITAL',
      title: 'Northstar Crown emergency coordination agreement renewed',
      body: `<p>Havelock retains orbital medical evacuation, debris response and protected-cargo
             obligations aboard Northstar Crown through 2104.</p>
             <p>Continuity Suite 19-C remains the company's permanent orbital facility, staffed
             continuously for flight medicine and emergency recovery.</p>`
    },
    leadership: {
      tag: 'CORPORATE GOVERNANCE // PUBLIC RECORD',
      title: 'Executive leadership',
      body: `<div class="modal-grid">
               <div class="modal-tile"><b>Office of the Chair</b><span>BOARD // PUBLIC FILINGS</span></div>
               <div class="modal-tile"><b>Chief Continuity Officer</b><span>DOCTRINE // FIELD STANDARD</span></div>
               <div class="modal-tile"><b>Human Systems</b><span>CLINICAL GOVERNANCE // CONSENT LEDGER</span></div>
               <div class="modal-tile"><b>Special Measures</b><span>M. DAGENAIS // PACIFIC</span></div>
               <div class="modal-tile"><b>Systems Intelligence</b><span>AI ASSURANCE // IDENTITY</span></div>
               <div class="modal-tile"><b>Risk &amp; Assurance</b><span>ACTUARIAL // LIABILITY</span></div>
             </div>
             <p style="margin-top:18px">Directorships, remuneration and related-party disclosures are filed
             annually and mirrored to the public trust channel.</p>`
    },
    careers: {
      tag: 'BUILD WHAT PEOPLE DEPEND ON',
      title: 'Careers mesh',
      body: `<p>Public openings synchronise by region, credential class and continuity specialty.
             Havelock recruits for careers measured in decades, not contracts.</p>
             <div class="modal-grid">
               <div class="modal-tile"><b>Pacific Operations</b><span>CLINICAL // LOGISTICS // RESPONSE</span></div>
               <div class="modal-tile"><b>High Frontier</b><span>FLIGHT MEDICINE // ORBITAL RECOVERY</span></div>
               <div class="modal-tile"><b>Systems Intelligence</b><span>AI ASSURANCE // AUDIT // IDENTITY</span></div>
               <div class="modal-tile"><b>Infrastructure Continuity</b><span>GRID // WATER // COASTAL</span></div>
             </div>
             <p style="margin-top:18px">All positions carry Charter protections: medical information,
             protected identity, necessary maintenance, independent counsel, and a recorded Consent Ledger.</p>`
    },
    privacy: {
      tag: 'PUBLIC RESPONSIBILITY',
      title: 'Mesh privacy',
      body: `<p>Public Havelock terminals use session-minimised telemetry, local trust validation and
             auditable identity handoff. Nothing you read on this terminal is attributed to your
             civic identity.</p>
             <p>Protected medical, personnel and operational records require a separate authenticated
             trust channel and are logged on access.</p>`
    },
    accessibility: {
      tag: 'BUILD FOR FAILURE',
      title: 'Accessibility',
      body: `<p>Havelock public services support visual, auditory, neural-interface, language, haptic,
             low-bandwidth and non-implant access modes.</p>
             <p>Essential services must remain reachable through a physical fallback path. A system
             that only works when everything works is not a continuity system.</p>`
    }
  };

  const modal = $('#modalOverlay');
  const openModal = key => {
    const rec = RECORDS[key];
    if (!rec || !modal) return;
    $('#modalTag').textContent = rec.tag;
    $('#modalTitle').textContent = rec.title;
    $('#modalBody').innerHTML = rec.body;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  $$('[data-modal]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault();
    openModal(el.dataset.modal);
  }));
  $('#modalClose')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  /* --------------------------------------------------------
     3. Public mesh search
     -------------------------------------------------------- */
  /* The index lives in mesh-index.js so every page shares one
     copy. The inline fallback keeps search working if that file
     is ever missing. Each row: [ title, summary, href, group ]. */
  const INDEX = window.HAVELOCK_MESH || [
    ['Vancouver 2098', 'City region, district atlas, operations and visitor guide', '/havelock/vancouver.html', 'Vancouver'],
    ['The World of 2098', 'Thirty-nine regional briefings', '/havelock/world.html', 'World'],
    ['Employee access', 'Authenticated Common Mesh terminal for Havelock personnel', '/havelock/employee/index.html', 'Employee']
  ];

  const overlay = $('#searchOverlay');
  const input   = $('#meshSearch');
  const results = $('#searchResults');

  /* The overlay is a directory first and a search box second.
     Opening it offers the areas of the site; picking one lists
     what is inside it; typing at any point searches everything.
     Most people arriving here want to go somewhere, not to
     compose a query, and forty rows of text is a wall rather
     than a menu. */
  const LIMIT = 40;

  /* Running order and blurb for the top level. A group that is
     in the index but missing here still appears, filed after
     these in the order the index first mentions it. */
  const AREAS = [
    ['Havelock',  'Divisions, continuity doctrine, the public record, careers'],
    ['Vancouver', 'The city in 2098 — history, districts, operations, places to visit'],
    ['World',     'Thirty-nine regional briefings, pole to pole'],
    ['Robotics',  'How robots work, who builds them, what the law allows'],
    ['Vehicles',  'Traffic as a utility, the firms that build it, the catalogue'],
    ['Drones',    'Categories, access codes, control methods, the catalogue'],
    ['Arms',      'Service calibres, the heavy end, doctrine and the record'],
    ['Equipment', 'Possession, access, condition, and what a role carries'],
    ['Frontier',  'Orbit, the Moon, and the hundred thousand living off Earth'],
    ['Employee',  'Authenticated terminal — credentials required']
  ];

  let area = null;            // the area being browsed, or null at the top

  const countOf = name => INDEX.filter(r => r[3] === name).length;

  const rowHTML = r =>
    `<button class="result" type="button" data-href="${r[2]}">` +
    `<b>${r[0]}</b><span>${r[1]}</span></button>`;

  function render(q = '') {
    /* Every word has to appear somewhere in the row, but not
       together and not in order — "orbital habitat" should find
       the High Frontier even though no summary uses that phrase. */
    const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);

    /* ---- typing searches everything, area or no area ---- */
    if (terms.length) {
      const match = r => { const hay = r.join(' ').toLowerCase();
                           return terms.every(t => hay.includes(t)); };
      const all  = INDEX.filter(match);
      const hits = all.slice(0, LIMIT);

      if (!hits.length) {
        results.innerHTML = '<div class="result"><b>No public record match</b>' +
          '<span>Protected records require an authenticated trust channel.</span></div>';
        return;
      }
      const order = [], groups = {};
      hits.forEach(r => {
        const g = r[3] || 'Public record';
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(r);
      });
      results.innerHTML =
        `<div class="result-count">${hits.length}${all.length > LIMIT ? '+' : ''} of ${INDEX.length} records</div>` +
        order.map(g => `<div class="result-group">${g}</div>` +
                       groups[g].map(rowHTML).join('')).join('');
      return;
    }

    /* ---- inside one area ---- */
    if (area) {
      const rows = INDEX.filter(r => r[3] === area);
      results.innerHTML =
        `<button class="result-back" type="button" data-back="1">` +
        `<i>←</i> All areas</button>` +
        `<div class="result-group">${area} — ${rows.length} ` +
        `${rows.length === 1 ? 'record' : 'records'}</div>` +
        rows.map(rowHTML).join('');
      return;
    }

    /* ---- the top level: the areas of the site ---- */
    const named = AREAS.map(a => a[0]);
    const extra = [...new Set(INDEX.map(r => r[3]))].filter(g => g && !named.includes(g));
    const list  = AREAS.concat(extra.map(g => [g, '']));

    results.innerHTML =
      `<div class="result-count">${INDEX.length} records across ` +
      `${list.filter(a => countOf(a[0])).length} areas — pick one, or type to search</div>` +
      list.filter(a => countOf(a[0])).map(([name, blurb]) =>
        `<button class="result result-area" type="button" data-area="${name}">` +
        `<b>${name}<em>${countOf(name)}</em></b>` +
        `<span>${blurb}</span></button>`
      ).join('');
  }

  /* One delegated listener rather than rebinding on every
     render, so the three views cannot drift apart. */
  results?.addEventListener('click', e => {
    const el = e.target.closest('[data-href],[data-area],[data-back]');
    if (!el) return;

    if (el.dataset.back !== undefined) { area = null; render(''); results.scrollTop = 0; return; }
    if (el.dataset.area) { area = el.dataset.area; render(''); results.scrollTop = 0; return; }

    const href = el.dataset.href;
    closeSearch();
    if (!href.startsWith('#')) { window.location.href = href; return; }
    const target = document.querySelector(href);
    // Anchors that do not exist on this page belong to the main terminal.
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/havelock/index.html' + href;
  });

  function openSearch() {
    if (!overlay) return;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    area = null;                 // always open at the top level
    if (input) input.value = '';
    render('');
    setTimeout(() => input?.focus(), 40);
  }
  function closeSearch() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  $('#searchButton')?.addEventListener('click', openSearch);
  $('#searchClose')?.addEventListener('click', closeSearch);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  input?.addEventListener('input', () => render(input.value));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      /* Inside an area, Escape steps back to the directory
         rather than throwing away the whole overlay. */
      if (overlay && !overlay.hidden && area && !input?.value.trim()) {
        area = null; render(''); results.scrollTop = 0; return;
      }
      closeSearch(); closeModal(); closePlate(); closeSheet();
    }
    // Ctrl/Cmd+K opens the mesh, the way every terminal in 2098 does.
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  });

  /* --------------------------------------------------------
     2b. Mobile navigation sheet
     The rail drops its links below 1180px, so narrow viewports
     reach the sections through here.
     -------------------------------------------------------- */
  const sheet   = $('#navOverlay');
  const menuBtn = $('#menuButton');

  const openSheet = () => {
    if (!sheet) return;
    sheet.hidden = false;
    menuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const closeSheet = () => {
    if (!sheet) return;
    sheet.hidden = true;
    menuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', () =>
    sheet.hidden ? openSheet() : closeSheet());
  $('#menuClose')?.addEventListener('click', closeSheet);

  // Close on selection, then let the browser handle the anchor jump.
  sheet?.querySelectorAll('.navsheet-links a, .navsheet-foot a')
        .forEach(a => a.addEventListener('click', closeSheet));

  $('#menuSearch')?.addEventListener('click', () => { closeSheet(); openSearch(); });

  // A rotation into desktop width must not leave the sheet stranded open.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1260 && sheet && !sheet.hidden) closeSheet();
  });

  /* --------------------------------------------------------
     3b. Facility plate viewer
     -------------------------------------------------------- */
  const lb    = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCap');

  const openPlate = fig => {
    if (!lb) return;
    lbImg.src = fig.dataset.shot;
    lbImg.alt = fig.querySelector('img')?.alt || '';
    lbCap.textContent = fig.dataset.cap || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const closePlate = () => {
    if (!lb) return;
    lb.hidden = true;
    // Release the full-size image so it isn't held in memory between views.
    lbImg.src = '';
    document.body.style.overflow = '';
  };

  $$('.shot[data-shot]').forEach(fig => {
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    fig.addEventListener('click', () => openPlate(fig));
    fig.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPlate(fig); }
    });
  });
  $('#lbClose')?.addEventListener('click', closePlate);
  lb?.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'FIGURE') closePlate(); });

  /* --------------------------------------------------------
     4. Record figures count up as the projector resolves them
     -------------------------------------------------------- */
  const counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const finalText = el.textContent;
        const target = parseInt(el.dataset.count, 10);
        // Years must not tick up from zero — a wrong date mid-flight reads as
        // a fact, not an animation. Only quantities count.
        if (target > 1900 && target < 2200) { io.unobserve(el); return; }
        const suffix = finalText.replace(/[0-9]/g, '');
        const start = performance.now();
        const dur = 1100;
        const step = now => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = finalText;
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => io.observe(c));
  }
})();
