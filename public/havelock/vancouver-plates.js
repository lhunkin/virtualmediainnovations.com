/* ============================================================
   HAVELOCK CIVIC INDEX // VANCOUVER 2098
   vancouver-plates.js — city imagery

   Plates are placed by dropping a marker into vancouver.html:

     <figure class="cplate beam" data-plate="coal-harbour"></figure>
     <div class="cgal beam" data-gal="visit"></div>

   The renderer fills them from the tables below. Captions are
   written to add something the surrounding prose does not — a
   figure, a consequence, a thing the reader would otherwise
   have to be told twice. A picture with no caption is
   decoration, and this page is not decorated.

   Click any frame to open it full size.

   ── ADDING AN IMAGE ─────────────────────────────────────────
   1. Drop the file in assets/img/city/ at 1500px wide, plus a
      760px copy named <slug>-s.jpg for phones.
   2. Add a PLATES entry (large, with a reference number) or a
      GALLERIES group (small frames in a grid).
   3. Put the marker where you want it in vancouver.html.
   ============================================================ */
(() => {
  'use strict';

  const PLATES = {

    'coal-harbour': { ref:'PLATE 01',
      alt:'The Coal Harbour waterfront at evening with aerial vehicles and moored craft',
      cap:`Harbour Crown at the end of a working day. Passengers, executives, sensitive freight and orbital transfers — everything except bulk containers, which go two kilometres east and are handled by machines. The restricted zones here begin without fences. A pedestrian simply finds that their identity no longer authorises the next stretch of seawall.` },

    'port-yard': { ref:'PLATE 02',
      alt:'The Port of Vancouver working yard in rain, with cranes, freight and service machines',
      cap:`The other harbour. Most freight moves without a human hand touching it, and the people here are employed for the exceptions — a damaged container, a contradictory manifest, hazardous cargo, an unidentified passenger, a decision the automated system is not authorised to make. The port did not stop needing people. It stopped needing them for the routine.` },

    'gastown-overlay': { ref:'PLATE 03',
      alt:'Gastown in the rain with augmented-reality heritage figures and a vanished tram rendered in blue light',
      cap:`The Memory Quarter with the heritage channel running. A tram that stopped in 1955 crosses Water Street beside a market stall selling vegetables. The archive can rebuild any lost version of this block — which means somebody, in an office, decides each year which version is the official one.` },

    'oakridge-stack': { ref:'PLATE 04',
      alt:'An aerial view of the Oakridge Civic Stack, transit lines, housing and the Southlands beyond',
      cap:`A civic stack and, four hundred metres east, working farmland. Vancouver did not become a single continuous city, and the decision not to is the most consequential planning choice of the last seventy years. The Stack holds homes, schools, clinics, markets and gardens in one complex. The lift schedule inside it is local politics.` },

    'cambie-axis': { ref:'PLATE 05',
      alt:'The Cambie Medical Axis at street level in the rain, with hospitals, transit and pedestrians',
      cap:`St Paul's, BC Cancer, Children's and Women's, the research towers and the augmentation clinics, strung along one corridor with a secured data link overhead. The woman crossing on augmented legs is not remarkable here and knows it. What decides her care is not the technology on this street. It is whose contract recognises her.` },

    'seawall-english-bay': { ref:'PLATE 06',
      alt:'The seawall at English Bay on a bright evening, crowded with walkers, cyclists and small craft',
      cap:`The seawall does more work than any single piece of infrastructure in the city and most residents experience it as a place to walk. It is a flood defence, a transit route, an emergency corridor and the largest continuously monitored public space in the region. On an evening like this none of that is visible, which is the point of it.` },

    'north-shore': { ref:'PLATE 07',
      alt:'The North Shore waterfront at dusk, terraced housing rising into forest above a working shipyard',
      cap:`Affluent terraces stacked into protected forest above a shipyard that still builds and repairs hulls. Above the treeline: watersheds, climate systems, rescue stations and a number of facilities that appear on no public map. The North Shore is the most expensive ground in the region and the least completely documented.` },

    'richmond-grid': { ref:'PLATE 08',
      alt:'The Richmond Delta Grid from the air — airport, spaceplane, dikes, greenhouses and rail',
      cap:`Airport, orbital terminal, customs, freight, greenhouses, dikes and pumps on ground that is at or below sea level for its entire length. Richmond's prosperity rests on the continuing agreement of the pumps, the dikes, the soil reinforcement, the traffic control and the inspection regime. Every one of those has a different authority behind it.` },

    'lynn-watershed': { ref:'PLATE 09',
      alt:'The Lynn Valley Watershed Authority field station in mountain cloud, with restricted-lands signage',
      cap:`Restricted watershed lands, access by authorisation only, maximum penalty fifty thousand and imprisonment. The city's drinking water is a security installation with a ranger service and a NEMA presence, and it has been since 2071. Nobody in Vancouver thinks about this, which is the highest compliment infrastructure can be paid.` },

    'tricities-corridor': { ref:'PLATE 10',
      alt:'The Tri-Cities reservoir corridor at night — freight, treatment works, dams and a lit sign reading Protect the Flow',
      cap:`Water, power and people, in that order, on the sign. Residential towers four kilometres from a treatment works, a rail yard and a dam, all of them inside one protected corridor. When the Dike Compact distributed flood authority so that no organisation could control it alone, this is the kind of place the argument happens in.` },

    'canada-place-nema': { ref:'PLATE 11',
      alt:'NEMA Peacekeeper Command at Canada Place during the North American Alliance Summit',
      cap:`The Alliance Summit at Canada Place, and the most visible institution in North America doing what it does best: standing where everyone can see it. NEMA is trusted because its personnel routinely walk into places everybody else is leaving. It also holds military, police, intelligence, rescue and emergency powers in one organisation, and both of those sentences are the reason it works.` },

    'nema-exercise': { ref:'PLATE 12',
      alt:'A NEMA disaster-response exercise on an airfield with collapsed structures, rescue machines and crews',
      cap:`Readiness exercise — earthquake response, mass evacuation, structural collapse. These are run every year and praised every year. Privately, several municipal governments have observed that the powers being rehearsed blur the line between disaster authority and military command, and that the exercise never rehearses handing the city back.` },

    'medical-atrium': { ref:'PLATE 13',
      alt:'The atrium of a Cambie medical complex with patients, staff, mobility equipment and a transport robot',
      cap:`Healing through science, care through community, on a banner above a floor where an organ transport robot is threading between wheelchairs. Everything visible here is real and works. What the atrium does not display is the tier a patient holds, and that is the only variable in the building that changes an outcome.` },

    'aquabus-interior': { ref:'PLATE 14',
      alt:'The interior of a False Creek water shuttle with passengers and route displays',
      cap:`Four networks, one credential — and this is what the credential looks like when it works. Nobody on this boat has thought about the tap, the route, the transfer or the fare since they boarded. A damaged identity would turn every one of those into a separate problem before the vessel reached Granville Island.` },

    'sea-island-terminal': { ref:'PLATE 15',
      alt:'Passenger processing at the Sea Island orbital terminal',
      cap:`Sea Island orbital processing. Ninety-one departures a week from a building where a passenger clears identity, medical screening and customs for three jurisdictions without stopping walking. The Pacific's advantage was never geography — the tether sites are equatorial and always will be. It was assembly, and it was decided here in the 2080s.` }
  };

  const GALLERIES = {

    districts: { h:'FOUR OF THE TWENTY-FOUR', wide:true, items:[
      { img:'false-creek-basin', n:'The False Creek Ribbon. ',
        cap:'Housing, culture, research, media, recreation and water transit around the basin. Heavily monitored, heavily programmed, and genuinely popular — all three at once.' },
      { img:'kits-jericho', n:'The West Side. ',
        cap:'Beaches, research campuses and low towers where the city meets the strait. Old money, new institutes, and a shoreline that is quietly being re-engineered a hundred metres at a time.' },
      { img:'commercial-drive', n:'The Drive. ',
        cap:'A neighbourhood that has resisted standardisation for a century and is still doing it. Community boards, an offline market, and a courier machine working around a dog.' },
      { img:'north-shore', n:'The Mountain Edge. ',
        cap:'Terraces, watershed, rescue infrastructure and hidden strategic sites, stacked one above the other on the same slope.' }
    ]},

    operations: { h:'THE MACHINERY THAT HAS TO STAY BORING', items:[
      { img:'lynn-watershed', n:'Water. ',
        cap:'A watershed authority with a ranger service, restricted lands and a penalty schedule. The most secured civilian installation in the region.' },
      { img:'tricities-corridor', n:'Power and flow. ',
        cap:'Reservoir, treatment, freight and housing inside one protected corridor, governed by four authorities that must agree before anything moves.' },
      { img:'port-yard', n:'Freight. ',
        cap:'Automated to the point where the humans present are there for the exceptions — and are personally liable for them.' },
      { img:'medical-atrium', n:'Medicine. ',
        cap:'The Golden Hour Guarantee in a building. Located, reached, stabilised and transferred inside a defined window — with the destination set by coverage.' }
    ]},

    visit: { h:'WORTH THE TRIP', items:[
      { img:'gastown-overlay', n:'The Memory Quarter. ',
        cap:'Heritage overlays running over wet brick. The unlicensed community reconstructions are more interesting than the official ones and everybody knows it.' },
      { img:'seawall-english-bay', n:'The seawall. ',
        cap:'Twenty-eight kilometres of flood defence that the city uses as a promenade. Free, continuous, and busy in any weather.' },
      { img:'coal-harbour', n:'Harbour Crown. ',
        cap:'Terminals, marinas, conference halls and orbital transfer, wrapped around the north of the downtown peninsula.' },
      { img:'oakridge-stack', n:'A civic stack. ',
        cap:'Go up one. Homes, schools, clinics, markets and gardens inside a single complex, with farmland visible from the roof.' }
    ]},

    moving: { h:'FOUR NETWORKS, ONE CREDENTIAL', items:[
      { img:'transit-interior', n:'Rapid transit. ',
        cap:'The spine of the region. Transit exchanges are civic buildings in their own right, and function as shelters during an incident.' },
      { img:'aquabus-interior', n:'Marine routes. ',
        cap:'SeaBus, False Creek ferries, marine taxis and the coastal gate. Water makes several districts unusually permeable and unusually easy to isolate.' },
      { img:'sea-island-apron', n:'Aerial corridors. ',
        cap:'Aerial vehicle lanes and rooftop pads, tightly controlled over the Core and Harbour Crown, and contested every time the weather changes.' },
      { img:'sea-island-terminal', n:'And upward. ',
        cap:'Orbital processing at Sea Island, where a passenger clears three jurisdictions without breaking stride.' }
    ]}
  };

  /* ---------------------------------------------------------- */
  const IMG = (slug, alt, sizes, cls) =>
    `<img src="/havelock/assets/img/city/${slug}.jpg"
          srcset="/havelock/assets/img/city/${slug}-s.jpg 760w,
                  /havelock/assets/img/city/${slug}.jpg 1500w"
          sizes="${sizes}" alt="${alt}" class="${cls || ''}"
          loading="lazy" decoding="async">`;

  document.querySelectorAll('[data-plate]').forEach(el => {
    const p = PLATES[el.dataset.plate];
    if (!p) return;
    el.dataset.img = el.dataset.plate;
    el.innerHTML = IMG(el.dataset.plate, p.alt, '(max-width:900px) 100vw, 1100px') +
      `<figcaption><span class="cref">${p.ref}</span>${p.cap}</figcaption>`;
  });

  document.querySelectorAll('[data-gal]').forEach(el => {
    const g = GALLERIES[el.dataset.gal];
    if (!g) return;
    if (g.wide) el.classList.add('cgal--wide');
    el.innerHTML =
      (g.h ? `<span class="holo-data cgal-h">${g.h}</span>` : '') +
      `<div class="cgal-grid">${g.items.map(i => `
        <figure data-img="${i.img}">
          ${IMG(i.img, i.cap, '(max-width:760px) 100vw, 380px')}
          <figcaption><b>${i.n}</b>${i.cap}</figcaption>
        </figure>`).join('')}</div>`;
  });

  /* ---- full-size viewer -------------------------------------- */
  const lb = document.createElement('div');
  lb.className = 'cview'; lb.hidden = true;
  lb.innerHTML = `<button class="cview-x" aria-label="Close">✕</button>
    <figure><img id="cvImg" src="" alt=""><figcaption id="cvCap"></figcaption></figure>`;
  document.body.appendChild(lb);

  const close = () => {
    lb.hidden = true;
    document.getElementById('cvImg').src = '';
    document.body.style.overflow = '';
  };
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.closest('.cview-x')) close();
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });

  document.addEventListener('click', e => {
    const fig = e.target.closest('[data-img]');
    if (!fig) return;
    document.getElementById('cvImg').src = `/havelock/assets/img/city/${fig.dataset.img}.jpg`;
    document.getElementById('cvCap').innerHTML =
      fig.querySelector('figcaption')?.innerHTML || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  });
})();
