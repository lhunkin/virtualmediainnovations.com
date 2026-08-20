/* ============================================================
   HAVELOCK CIVIC INDEX // VANCOUVER 2098
   vancouver-history.js — regional history, 2030 to the present

   EDITORIAL CONSTRAINT
   This is a public civic publication written *inside* 2098. It
   does not know what December brings. Nothing here may hint at
   the Cataclysm, and the recent entries must sound confident,
   because that confidence is the point.

   Where the popular name for a period is unflattering, the
   Index uses the institutional one and notes the popular one
   beneath. A reader who notices that only the last three
   periods have two names has noticed something.

   HOUSE STYLE: short. Every entry earns its length. If a
   sentence is only setting up another sentence, cut it.

   ── ADDING TO THIS FILE ─────────────────────────────────────
   ERAS         { p, name, pop, txt, mark:'now' }
   FOUNDATIONS  { y, name, txt, legacy }
   FIRSTS       [ year, one line ]
   DESCENT      { img, alt, band, alti, cap } — the four plates,
                rendered wherever a [data-descent="key"] sits in
                the page.
   ============================================================ */
(() => {
  'use strict';

  const ERAS = [

    { p:'2030 – 2034', name:'The City of Temporary Measures', pop:null,
      txt:`Nothing was destroyed. Nothing was solved. Smoke seasons, atmospheric rivers, coastal surges, freight failures and network attacks arrived close enough together that the city stopped treating emergencies as things that end. Government ran on emergency powers. Neighbourhoods organised their own relief. The first street-technology economy in the region's history grew out of people solving problems nobody had the authority to solve.` },

    { p:'2035 – 2041', name:'The Alliance Port', pop:null,
      txt:`The Alliance Pact bound Canada, Mexico and the United States into one coalition and created NEMA. Canada remained. British Columbia remained. The Alliance sat over and between the systems already here, and Vancouver became its northern Pacific gateway. The physical border weakened. The informational border expanded everywhere.` },

    { p:'2042 – 2050', name:'The Open Science Coast', pop:null,
      txt:`Universities, hospitals, Host-Nation research authorities, corporations and cooperatives shared facilities, and the results cascaded. A nerve-regrowth treatment became a machine interface, then remote surgery, then orbital construction. Aerospace materials became prosthetics and flood defences. Port-scheduling intelligence became hospital triage. No single invention made the Golden Age. Interoperability did.` },

    { p:'2051 – 2060', name:'The Great Systems Decade', pop:null,
      txt:`Fusion made power abundant and predictable — not free, but reliable enough that a blackout became evidence of sabotage rather than weather. Freight learned to move itself. The Common Mesh became civic reality, the emergency credential of 2032 matured into the Civic Identity Record, and the Dike Compact spread flood authority so widely that no emergency could be resolved without an argument.` },

    { p:'2061 – 2070', name:'The Vertical City', pop:null,
      txt:`The shape you are looking at was poured in these years: Burrard Core, the False Creek Ribbon, the Burnaby Stack, the Fraser Nexus, the Surrey Metroplex, the Richmond Delta Grid. Households learned to trust machines that spoke to them every morning. Crime became administrative — it is easier to change a container's destination than to steal the container. Underneath all of it, the Underlayer acquired a name.` },

    { p:'2071 – 2080', name:'The Body Decades', pop:null,
      txt:`Gene repair and organ replacement produced families of four adult generations and delayed inheritance by a century. Age became less visible and more contractual. The question of the decade was never whether a person could be augmented. It was whether that person owned the result. The rulings protected the person. They did not eliminate the lease.` },

    { p:'2081 – 2085', name:'The Pacific High Frontier', pop:null,
      txt:`Orbital travel became routine in the way international aviation had once been routine. Northstar linked Richmond passenger processing, Sea Island aerospace, Surrey pressure systems and marine recovery at Tsawwassen. The tether sites are equatorial and always will be; Vancouver's advantage was never geography but assembly. Muir Point Annex opened on the Island in the same window.` },

    { p:'2086 – 2092', name:'The Patent Peace', pop:null,
      txt:`Two generations of open exchange ended, not in a crisis but in a preference. The open laboratory became a secure campus. The public patent became a sealed portfolio. The independent scientist became a contracted asset. Consolidation left a handful of firms the public calls the Eleven — never a council, simply the companies whose failure the region could no longer survive.` },

    { p:'2093 – 2095', name:'The Careful Years', pop:'popularly, “the Quiet War”',
      txt:`Competition returned to artificial minds, augmentation, orbital assets and identity technology. It did not become a war. The tactical threshold — the point at which an incident stops being crime — was formalised in these years, and the Index notes that formalising a threshold is not the same as crossing one. Enhanced-person licensing arrived: more humane than persecution, more intrusive than citizenship.` },

    { p:'2096 – 2097', name:'Reporting and Review', pop:'popularly, “Hairline Cracks”',
      txt:`Everything worked. Transit was dependable, hospitals performed miracles, orbital traffic expanded and recorded crime sat below several earlier decades. A number of anomalous reports circulated and were individually reviewed, individually explained and individually closed. Each was resolved by the office that received it. No single office received more than a few.` },

    { p:'2098', name:'The Bright Year', pop:null, mark:'now',
      txt:`Audit season ran to March. The Bright Coast brought conferences, exhibitions, orbital recruitment and hero events; Northstar announced expanded capacity and Surrey took the contracts. Managed climate reduced the summer smoke without ending the argument over who gets clean air first. Restaurants are full. Transit is working. People are signing fifty-year mortgages, which is the most honest measure of civic confidence ever devised.` }
  ];

  const FOUNDATIONS = [
    { y:'2030', name:'The Fraser Continuity Winter',
      txt:`Flood, freight failure, sabotage and medical shortage arrived together and left whole districts holding warehouses of supplies that could not legally reach the people who needed them. Local operators bypassed procurement and improvised an exchange linking hospitals, freight unions, cooperatives and private carriers. It was inefficient, open to fraud, and it saved thousands of lives.`,
      legacy:'Its routing architecture is an ancestor of both the Common Mesh and the Fraser Nexus.' },

    { y:'2031', name:'The Burrard Mutual Aid Net',
      txt:`After repeated commercial outages, neighbourhood networks, Host-Nation marine operators, radio groups and repair shops built a shared emergency communications layer. It deliberately accepted messages from people with no verified account — which made it resilient, and made it exploitable.`,
      legacy:'The argument over whether an emergency network should prioritise identity or need has run for the rest of the century.' },

    { y:'2032', name:'The Civic Relief Key',
      txt:`British Columbia issued a temporary digital identity so shelter, medicine, food and work authorisation could reach displaced residents. It cut duplication and fraud. It also tied housing, health, movement, family status and money into one institutional record for the first time.`,
      legacy:'Civil-liberties groups warned that an emergency credential was becoming a complete model of a human life. It is the direct ancestor of the Civic Identity Record.' },

    { y:'2033', name:'Contract Recovery',
      txt:`Private medical and security operators consolidated into a citywide recovery network. A member in danger could trigger protected extraction and transport to a contracted hospital. Recovery teams occasionally exchanged fire with kidnappers, corporate security, police or rival providers over who legally controlled a wounded patient.`,
      legacy:'This is the era that produced “Who owns the landing pad?” — a question that became as important as “Who can save the patient?”' },

    { y:'2034', name:'The Pacific Continuity Conference',
      txt:`Vancouver hosted three nations, Host Nations, port authorities, aerospace firms, rail operators and emergency commands. It was publicly about disaster relief and trade standards. What it revealed was that North America had already been cooperating for four years through temporary arrangements nobody had assembled into law.`,
      legacy:'It prepared the political ground for the Alliance Pact the following year.' }
  ];

  const FIRSTS = [
    ['2032', 'One credential first ties housing, health, movement and money together'],
    ['2035', 'NEMA founded; the shared continental credit system opens'],
    ['2045', 'The Diagnostic Key Strike — thousands of proprietary keys released'],
    ['2040s', 'The first Common Mesh; the netrunner becomes the Mesh specialist'],
    ['2050s', 'The Civic Identity Record; identity crime becomes a violent offence'],
    ['2061', 'The Canucks win the Stanley Cup'],
    ['2064', 'The Golden Hour Guarantee'],
    ['2070s', 'Body-sovereignty rulings; four adult generations in one household'],
    ['2080s', 'Orbital travel becomes routine; the Moon industrialises'],
    ['2093', 'The tactical threshold is formalised'],
    ['2098', 'You are here']
  ];

  /* The descent. Four plates, high to low, carrying the section. */
  const DESCENT = {
    orbit: {
      img:'descent-1-orbit', band:'FREEDOM STATION // OUTBOUND WINDOW', alti:'ALT 410 KM',
      alt:'Earth seen from a station window, two vessels on approach',
      cap:'From here the region is a smear of light on a wet coast, and the Alliance is a set of agreements about who may cross it. Ninety-one departures a week. None of them think of this as remarkable.' },
    coast: {
      img:'descent-2-coast', band:'PACIFIC APPROACH // CASCADIA', alti:'ALT 180 KM',
      alt:'The British Columbia coast and Vancouver Island from high orbit',
      cap:'Mountains, inlets, an island shielding a strait, and one river mouth flat enough to build on. Every decision in this history was shaped by that geography before anyone made it.' },
    approach: {
      img:'descent-3-approach', band:'DESCENT PROFILE // LOWER MAINLAND', alti:'ALT 62 KM',
      alt:'The Lower Mainland and the Fraser delta seen from low orbit',
      cap:'The grey is not one city. It is Vancouver, Surrey, Burnaby, Richmond, New Westminster, the Langleys and the delta farmland, and it has not revolved around a single downtown for forty years.' },
    city: {
      img:'descent-4-city', band:'BURRARD INLET // ARRIVAL', alti:'ALT 1.4 KM',
      alt:'Downtown Vancouver, the harbour and the North Shore mountains from the air',
      cap:'Seventy years of emergency measures, poured in concrete and glass. Nothing you can see from here was planned. All of it was kept.' }
  };

  /* ---------------------------------------------------------- */
  const $ = s => document.querySelector(s);

  const eras = $('#eraTrack');
  if (eras) eras.innerHTML = ERAS.map(e => `
    <article class="era holo-panel beam ${e.mark === 'now' ? 'era--now' : ''}" data-depth="0.08">
      <div class="era-p">${e.p}${e.mark === 'now' ? '<i>PRESENT</i>' : ''}</div>
      <h3>${e.name}</h3>
      ${e.pop ? `<span class="era-pop">${e.pop}</span>` : ''}
      <p>${e.txt}</p>
    </article>`).join('');

  /* The fifth event is the one that produced the Alliance, so it
     spans the row as a capstone — which also stops it orphaning
     into a second row with three empty columns beside it. */
  const found = $('#foundTrack');
  if (found) found.innerHTML = FOUNDATIONS.map((f, i, a) => `
    <article class="found holo-panel beam${i === a.length - 1 ? ' found--last' : ''}" data-depth="0.06">
      <b class="found-y">${f.y}</b>
      <h3>${f.name}</h3>
      <p>${f.txt}</p>
      <p class="found-l">${f.legacy}</p>
    </article>`).join('');

  const firsts = $('#firstsTrack');
  if (firsts) firsts.innerHTML = FIRSTS.map(f =>
    `<div class="first"><b>${f[0]}</b><span>${f[1]}</span></div>`).join('');

  /* Descent plates — srcset so phones never pull the 1800px file. */
  document.querySelectorAll('[data-descent]').forEach(el => {
    const d = DESCENT[el.dataset.descent];
    if (!d) return;
    el.innerHTML = `
      <img src="/havelock/assets/img/${d.img}.jpg"
           srcset="/havelock/assets/img/${d.img}-sm.jpg 900w, /havelock/assets/img/${d.img}.jpg 1800w"
           sizes="100vw" alt="${d.alt}" loading="lazy" decoding="async">
      <div class="desc-tel">
        <span class="desc-band">${d.band}</span>
        <span class="desc-alt">${d.alti}</span>
      </div>
      <p class="desc-cap">${d.cap}</p>`;
  });

  window.HAVELOCK_ERAS = ERAS;   // available for the mesh search
})();
