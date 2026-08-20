/* ============================================================
   HAVELOCK CIVIC INDEX // VANCOUVER 2098
   vancouver-history.js — regional history, 2030 to the present

   IMPORTANT EDITORIAL CONSTRAINT
   This is a public civic publication written *inside* 2098. It
   does not know what December brings. Nothing here may hint at
   the Cataclysm, and the tone of the recent entries must be
   confident, because that confidence is the point.

   Where the popular name for a period is unflattering, the
   Index uses the institutional one and notes the popular one
   underneath. A reader who notices that the last three periods
   are the only ones with two names has noticed something.

   ── ADDING TO THIS FILE ─────────────────────────────────────
   ERAS        the period spine. { p, name, pop, txt, mark }
                 p     period, e.g. '2051 – 2060'
                 name  the Index's name for it
                 pop   popular name, or null
                 txt   body copy
                 mark  'now' for the current period, or omit
   FOUNDATIONS the five events of 2030–2034 that made the rest
                 possible. { y, name, txt, legacy }
   FIRSTS      the short "when it became normal" ledger.
   ============================================================ */
(() => {
  'use strict';

  const ERAS = [

    { p:'2030 – 2034', name:'The City of Temporary Measures', pop:null,
      txt:`Nothing was destroyed and nothing was solved. Successive smoke seasons, atmospheric rivers, coastal surges, freight interruptions, network attacks and medical shortages arrived close enough together that the city stopped treating emergencies as things that end. Government ran on emergency powers, corporations fielded response teams, neighbourhoods organised their own relief, and the first street-technology economy in the region's history grew out of people solving problems that no institution had authority to solve.` },

    { p:'2035 – 2041', name:'The Alliance Port', pop:null,
      txt:`The North American Alliance Pact united Canada, Mexico and the United States in a social, economic, scientific and military coalition, and created NEMA. Canada did not cease to exist; British Columbia remained a province; municipalities kept their responsibilities; Host Nations kept their rights. The Alliance sat over and between the systems already here. Vancouver became its northern Pacific gateway. The physical border weakened. The informational border expanded everywhere.` },

    { p:'2042 – 2050', name:'The Open Science Coast', pop:null,
      txt:`Universities, hospitals, public agencies, Host-Nation research authorities, corporations, worker cooperatives and international partners shared facilities and standards, and the results cascaded. A nerve-regrowth treatment became a human-machine interface, then remote surgery, then industrial manipulators, then orbital and deep-ocean construction. Aerospace materials became prosthetics and flood defences. Port-scheduling intelligence became hospital triage. No single invention created the Golden Age. Interoperability did.` },

    { p:'2051 – 2060', name:'The Great Systems Decade', pop:null,
      txt:`Compact fusion and continent-scale storage made abundant, predictable power ordinary — not free, but reliable enough that a blackout became evidence of sabotage or negligence rather than weather. Freight learned to move itself. The Common Mesh became civic reality, and the emergency credential of 2032 matured into the Civic Identity Record. The Dike Compact distributed flood authority so widely that no single organisation could control it, and no emergency could be resolved without an argument.` },

    { p:'2061 – 2070', name:'The Vertical City', pop:null,
      txt:`The shape you see today was poured in these years: Burrard Core and Harbour Crown, the False Creek Ribbon, the Burnaby Stack, the Fraser Nexus at New Westminster, the Surrey Metroplex and the Cloverdale Agritech Belt, the Richmond Delta Grid. Households learned to trust machines that spoke to them every morning. Crime became administrative — it turned out to be more profitable to change a container's destination than to steal the container. And beneath all of it, the Underlayer acquired a name.` },

    { p:'2071 – 2080', name:'The Body Decades', pop:null,
      txt:`Gene repair, organ replacement, nerve reconstruction and rejuvenation produced families of four adult generations and delayed inheritance by a century. Age became less visible and more contractual. Augmentation split into four cultures — restoration, profession, expression and performance — and the central legal question of the decade was never whether a person could be augmented. It was whether that person owned the result. The rulings that followed protected the person. They did not eliminate the lease.` },

    { p:'2081 – 2085', name:'The Pacific High Frontier', pop:null,
      txt:`Orbital travel became routine in the sense that international aviation had once been routine. Northstar Pacific Operations linked Richmond passenger processing, Sea Island and Boundary Bay aerospace, Surrey pressure-system manufacturing, marine recovery near Tsawwassen and mission control downtown. The principal tether sites are equatorial and always will be; Vancouver's advantage was never geography but assembly. The ocean frontier grew alongside the orbital one, and Muir Point Annex opened on Vancouver Island.` },

    { p:'2086 – 2092', name:'The Patent Peace', pop:null,
      txt:`Two generations of open exchange ended, not in a crisis but in a preference. The celebrated open laboratory became a secure research campus. The public patent became a sealed portfolio. The independent scientist became a contracted asset. Consolidation produced a small number of firms the public came to call the Eleven — not a council, never a council, simply the companies whose failure the region could no longer survive. Corporate power was strongest exactly where public dependence was real.` },

    { p:'2093 – 2095', name:'The Careful Years', pop:'popularly, “the Quiet War”',
      txt:`Strategic competition returned to artificial minds, human augmentation, orbital assets, genetic engineering, autonomous systems and identity technology. It did not become a war. The tactical threshold — the point at which an incident stops being crime and starts being something specialist units attend — was formalised in these years, and the Index notes that formalising a threshold is not the same as crossing one. Enhanced-person licensing arrived: more humane than persecution, more intrusive than ordinary citizenship.` },

    { p:'2096 – 2097', name:'Reporting and Review', pop:'popularly, “Hairline Cracks”',
      txt:`Everything worked. Transit was dependable, hospitals performed miracles, food was abundant, orbital traffic expanded, and recorded crime sat below several earlier decades. A number of anomalous reports circulated in this period and were individually reviewed, individually explained and individually closed. The Index records that each was resolved by the office that received it, and observes only that no single office received more than a few.` },

    { p:'2098', name:'The Bright Year', pop:null, mark:'now',
      txt:`Audit season ran to January and March as it always does. The Bright Coast brought tourism, research conferences, augmentation exhibitions, orbital recruitment and public hero events; Northstar announced expanded Pacific capacity and Surrey took the manufacturing contracts. Managed climate systems reduced the summer smoke without eliminating it, and the argument over clean-air priority ran its usual course. Restaurants are full. Transit is working. People are taking out fifty-year mortgages and hundred-year education plans, which is the most honest measure of civic confidence anyone has ever devised.` }
  ];

  const FOUNDATIONS = [
    { y:'2030', name:'The Fraser Continuity Winter',
      txt:`Freight interruption, river flooding, network sabotage and medical shortage arrived together and left whole districts with warehouses full of supplies that could not legally be routed to the people who needed them. Local operators bypassed procurement and improvised an exchange linking hospitals, freight unions, community organisations, agricultural cooperatives, military logistics officers and private carriers. It was inefficient, it was open to fraud, and it saved thousands of lives.`,
      legacy:'Its routing architecture is an ancestor of both the Common Mesh and the Fraser Nexus.' },

    { y:'2031', name:'The Burrard Mutual Aid Net',
      txt:`After repeated commercial outages, neighbourhood networks, Host-Nation marine operators, amateur radio groups, municipal responders, independent drone pilots and repair shops built a shared emergency communications layer. It deliberately accepted messages from people with no verified account, which made it resilient and made it exploitable.`,
      legacy:'The argument over whether an emergency network should prioritise identity or need has continued for the rest of the century.' },

    { y:'2032', name:'The Civic Relief Key',
      txt:`British Columbia issued a temporary digital identity so that shelter, medicine, food, relocation support and work authorisation could reach displaced residents. It reduced duplication and fraud. It also tied housing, health, movement, family status and financial assistance into a single institutional record for the first time.`,
      legacy:'Civil-liberties organisations warned that an emergency credential was becoming a complete model of a human life. It is the direct ancestor of the Civic Identity Record.' },

    { y:'2033', name:'Contract Recovery',
      txt:`Private medical and security operators consolidated into a citywide recovery network. A member in danger could trigger protected extraction, rapid stabilisation and transport to a contracted hospital. Recovery teams occasionally exchanged fire with kidnappers, corporate security, police or rival medical providers over who legally controlled a wounded patient.`,
      legacy:'This is the era that produced the question “Who owns the landing pad?” — which became as important as “Who can save the patient?”' },

    { y:'2034', name:'The Pacific Continuity Conference',
      txt:`Vancouver hosted Canada, Mexico, the United States, Host Nations, port authorities, aerospace firms, medical manufacturers, continental rail operators, utilities and emergency commands. It was publicly about disaster relief and trade standards. What it actually revealed was that North America had already been cooperating for four years through temporary arrangements nobody had ever assembled into law.`,
      legacy:'It prepared the political ground for the Alliance Pact the following year.' }
  ];

  const FIRSTS = [
    ['2032', 'A single credential first ties housing, health, movement and money together'],
    ['2035', 'NEMA is founded; the shared continental credit system opens'],
    ['2045', 'The Diagnostic Key Strike; thousands of proprietary keys released'],
    ['late 2040s', 'The first Common Mesh; the netrunner becomes the Mesh specialist'],
    ['2050s', 'The Civic Identity Record; identity crime becomes a violent offence'],
    ['2061', 'The Canucks win the Stanley Cup'],
    ['by 2064', 'The Golden Hour Guarantee'],
    ['2070s', 'Body-sovereignty rulings; four adult generations in one household'],
    ['2080s', 'Orbital travel becomes routine; the Moon industrialises'],
    ['2093', 'The tactical threshold is formalised'],
    ['2098', 'You are here']
  ];

  /* ---------------------------------------------------------- */
  const $ = s => document.querySelector(s);

  const eras = $('#eraTrack');
  if (eras) eras.innerHTML = ERAS.map(e => `
    <article class="era holo-panel beam ${e.mark === 'now' ? 'era--now' : ''}" data-depth="0.1">
      <div class="era-p">${e.p}${e.mark === 'now' ? '<i>PRESENT</i>' : ''}</div>
      <h3>${e.name}</h3>
      ${e.pop ? `<span class="era-pop">${e.pop}</span>` : ''}
      <p>${e.txt}</p>
    </article>`).join('');

  const found = $('#foundTrack');
  if (found) found.innerHTML = FOUNDATIONS.map(f => `
    <article class="found holo-panel beam" data-depth="0.08">
      <b class="found-y">${f.y}</b>
      <h3>${f.name}</h3>
      <p>${f.txt}</p>
      <p class="found-l">${f.legacy}</p>
    </article>`).join('');

  const firsts = $('#firstsTrack');
  if (firsts) firsts.innerHTML = FIRSTS.map(f =>
    `<div class="first"><b>${f[0]}</b><span>${f[1]}</span></div>`).join('');

  window.HAVELOCK_ERAS = ERAS;   // available for the mesh search
})();
