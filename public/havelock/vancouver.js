/* ============================================================
   HAVELOCK CIVIC INDEX // VANCOUVER 2098
   vancouver.js — district atlas data, filtering, and the
   visitor guide.

   All district material is drawn from the GOLDENAGE player
   primer and is player-safe. Nothing here reveals a campaign
   secret. Edit the arrays below to add or change entries.
   ============================================================ */
(() => {
  'use strict';

  const $ = s => document.querySelector(s);

  /* --------------------------------------------------------
     DISTRICT ATLAS
     zone: core | inner | outer | beneath | annex
     -------------------------------------------------------- */
  const DISTRICTS = [
    { n:1, zone:'core', name:'Burrard Core', tag:'CENTRAL BUSINESS // CIVIC',
      inc:'Financial towers, civic complexes, government offices, legal institutions, executive residences, media headquarters, hero agencies, luxury medical facilities.',
      txt:'The vertical public face of 2098 Vancouver. Kilometre-scale mixed-use towers rise above older streets and buried infrastructure; a single complex may hold offices, apartments, clinics, schools, gardens and several thousand permanent residents. Clean, beautiful, crowded and intensely monitored. Many plazas look public but are privately maintained.' },

    { n:2, zone:'core', name:'Harbour Crown and Coal Harbour', tag:'PORT // DIPLOMATIC // ORBITAL TRANSFER',
      inc:'Passenger terminals, convention centres, customs, executive marinas, hotels, diplomatic venues, orbital cargo interfaces, seawall defences, marine rescue stations.',
      txt:'Wraps the north side of the downtown peninsula, handling passengers, executives, sensitive freight and orbital transfers rather than bulk containers. The harbour sensor net tracks vessels, swimmers, drones, cargo seals and environmental conditions. Restricted areas often begin without fences — a pedestrian simply finds their identity no longer authorises the next stretch of seawall.' },

    { n:3, zone:'core', name:'West End, English Bay and Stanley Park', tag:'RESIDENTIAL // PARK // WATERFRONT',
      inc:'Dense residential towers, care facilities, neighbourhood clinics, schools, beaches, public seawalls, ecological stations, community-managed spaces.',
      txt:'One of the most densely inhabited parts of the city, and more residential in feel than the Core. Tower councils and neighbourhood associations hold real influence because they coordinate access, maintenance, emergency power and care workers. Stanley Park remains green, wet and immediately recognisable — immense cedars, forest paths, seawall routes, Host-Nation stewardship and climate research.' },

    { n:4, zone:'core', name:'Gastown Memory Quarter, DTES and Strathcona', tag:'HERITAGE // COMMUNITY // ARCHIVE',
      inc:'Heritage streets, public archives, historic overlays, galleries, nightlife, supportive housing, social services, community clinics, markets, workshops.',
      txt:'The Memory Quarter preserves old brick, narrow alleys, rail history and augmented-reality versions of a vanished Vancouver. Archives can reconstruct a lost building, a dead performer or an entire historic street — but someone still decides which version becomes official. The Downtown Eastside remains a living community with its own networks, deliberately uneven Mesh coverage, and residents accustomed to being over-recorded but undercounted.' },

    { n:5, zone:'core', name:'Hastings Port Arc and East Van Fabrication Belt', tag:'INDUSTRY // LOGISTICS // GREY WORKSHOP',
      inc:'Bulk terminals, container handling, rail yards, bonded warehouses, marine fabrication, robotics shops, recycling, modular factories, repair co-operatives, union halls.',
      txt:'Where the city’s invisible physical work happens. Automated cranes, cargo robots, inspection AIs and private logistics firms move an enormous share of the region’s food, machinery and medical material. The Fabrication Belt is where expensive machines go after their service contracts expire — licensed workshops beside independent roboticists and salvage processors keeping old buildings, vehicles and cybernetics alive.' },

    { n:6, zone:'core', name:'East Vancouver Community Belt', tag:'RESIDENTIAL // CULTURAL',
      inc:'Grandview-Woodland, Commercial Drive, Hastings-Sunrise, Renfrew-Collingwood, schools, cultural centres, music venues, community media, local clinics.',
      txt:'The social and residential city behind the industrial belt, and more technologically sophisticated than its low-rise appearance suggests. Its greatest asset is organisation: parent groups, tenant councils, faith communities, labour associations and local responders mobilise faster than formal municipal systems.' },

    { n:7, zone:'core', name:'False Creek Ribbon, Yaletown and Olympic Basin', tag:'WATERFRONT // EVENTS // RESEARCH',
      inc:'High-density waterfront housing, hospitality towers, medical and research campuses, floating structures, sports venues, ferries, media facilities, Pacific Crown Arena.',
      txt:'Polished but not uniform — residential towers and restored industrial forms stand beside laboratories, clinics, parks and floating gardens. Water routes make the district unusually permeable; bridges and narrow crossings can isolate it just as quickly. The Olympic Basin is the region’s mass-event and licensed-hero showcase district.' },

    { n:8, zone:'core', name:'Mount Pleasant, Central Broadway and the Cambie Medical Axis', tag:'MEDICAL // RESEARCH // DESIGN',
      inc:'Advanced hospitals, public medical campuses, biomedical research, augmentation clinics, university facilities, studios, maker spaces, transit interchanges.',
      txt:'The Cambie Medical Axis is one of the greatest concentrations of healthcare in the NAA Pacific region — public hospitals, trauma centres, rehabilitation, cybernetic clinics and research laboratories linked by secure transit and data corridors. The miracles are real. So are access restrictions, proprietary treatment plans, medical debt and corporate ownership of implanted systems.' },

    { n:9, zone:'core', name:'Western Peninsula and University Reach', tag:'ACADEMIC // COASTAL RESEARCH',
      inc:'Kitsilano, Vanier Reach, Jericho, Point Grey, the university city, Pacific Spirit forest, beaches, marine science, AI research, secure laboratories.',
      txt:'Jericho has become a major climate-resilience and coastal-research commons where public institutions, Host-Nation authorities and emergency agencies jointly manage shoreline protection. University Reach functions as a city inside the city, with its own internal emergency systems. Pacific Spirit remains protected forest, ecological laboratory, watershed buffer, public refuge — and a surveillance gap.' },

    { n:10, zone:'core', name:'South Vancouver and the Fraser Shore', tag:'RESIDENTIAL // CIVIC // FLOOD',
      inc:'Oakridge, Arbutus, Kerrisdale, Sunset, Fraser Street, Marpole, River District, Southlands, schools, care facilities, markets, civic stacks, flood infrastructure.',
      txt:'The part of Vancouver most often left out when the city is reduced to downtown and False Creek. In 2098 it is a broad spectrum of ordinary life: affluent garden districts, dense multigenerational neighbourhoods, senior care, faith communities and transit-centred residential towers. Oakridge Civic Stack is the major southern transit, shopping, civic and shelter complex.' },

    { n:11, zone:'inner', name:'Burnaby Stack and Data Spine', tag:'VERTICAL URBANISM // DATA',
      inc:'Metrotown, Brentwood, Edmonds, Lougheed, Burnaby Mountain, Big Bend, megablocks, transit exchanges, universities, hospitals, data centres, media studios.',
      txt:'The inland hinge of the metropolitan region and the setting’s strongest expression of vertical urbanism. Linked towers contain residential floors, schools, clinics, markets, parks and workshops; their internal populations rival old towns. Elevators, freight shafts, skybridges and landing rights create an economy of movement, and floor councils hold genuine political power.' },

    { n:12, zone:'inner', name:'North Shore Terrace and Shipyards', tag:'MARINE INDUSTRY // TERRACE',
      inc:'Lower and Central Lonsdale, shipyards, marine robotics, passenger ferries, port industry, civic towers, hospitals, hillside housing, West Vancouver estates.',
      txt:'Rises quickly from heavy waterfront industry to expensive residential terraces. Lower Lonsdale combines ferry traffic, shipyards, marine fabrication, public waterfront and markets. The district remains dependent on bridges, marine transport, steep roads and mountain weather — a disruption at one crossing turns adjacent neighbourhoods into isolated operating zones.' },

    { n:13, zone:'inner', name:'Mountain Edge, Watersheds and Sea-to-Sky', tag:'WATERSHED // WILDERNESS',
      inc:'Lynn Valley, Seymour, Capilano, Hollyburn, Grouse, Cypress, protected watersheds, reservoirs, climate stations, hydroelectric infrastructure, rescue bases.',
      txt:'Urban services become less certain the moment terrain intervenes. Aircraft contend with downdrafts, cloud layers and conditions that change faster than automated routing expects. Water authorities, environmental wardens, climate engineers and mountain-rescue teams hold authority that downtown operators routinely underestimate. Many facilities are isolated because isolation is their purpose.' },

    { n:14, zone:'inner', name:'Richmond Delta Grid', tag:'AIRPORT // AEROSPACE // AGRICULTURE',
      inc:'Sea Island, YVR Crown Terminal, the Northstar aerospace corridor, Bridgeport, Richmond City Centre, Steveston, vertical farming, dikes, pumps, river infrastructure.',
      txt:'Simultaneously an airport city, aerospace gateway, freight machine, agricultural district and flood-management project. Its apparent flatness hides extensive pumps, utility galleries, cargo lines, dikes, sensors and reclaimed foundations. Sea Island and YVR Crown process international passengers, urgent orbital personnel and spaceplane operations.' },

    { n:15, zone:'inner', name:'Delta, Tsawwassen and the Coastal Gate', tag:'FERRY // FARMLAND // BORDER',
      inc:'North Delta, Ladner, Tsawwassen, Tsawwassen First Nation, Roberts Bank, Boundary Bay, ferry terminals, customs, farmland, wetlands, dikes.',
      txt:'Edge, gateway and strategic reserve. Ladner remains a recognisable agricultural town surrounded by protected farms, dikes and co-operatives. Boundary Bay’s wetlands absorb floods, support ecological monitoring and complicate sensors. Tsawwassen First Nation is a distinct government and a major regional partner in land, trade, transport and coastal stewardship.' },

    { n:16, zone:'inner', name:'Surrey Metroplex', tag:'LARGEST MUNICIPALITY // POLYCENTRIC',
      inc:'Surrey Central, Guildford, Newton, Fleetwood, Port Kells, South Surrey, White Rock, hospitals, civic towers, universities, megablocks, logistics, transit hubs.',
      txt:'The Lower Mainland’s largest municipality — not Vancouver’s outer suburb. A polycentric city whose major centres hold their own hospitals, command structures, transit and political interests. Prosperous but visibly uneven. Its greatest strength is overlapping community capacity: fire, medicine, schools, gurdwaras, churches, mosques, cultural associations and co-operatives all maintain response networks.' },

    { n:17, zone:'inner', name:'Cloverdale, Campbell Heights and the Langley Agritech Belt', tag:'FOOD SECURITY // BIOINDUSTRY',
      inc:'Cloverdale town centre, fairgrounds, equestrian lands, seed vaults, livestock medicine, precision agriculture, greenhouses, food laboratories, drone-managed fields.',
      txt:'Cloverdale keeps a recognisable town, agricultural and fairground identity while serving as the western centre of a continental food-security system. Its research campuses protect seed libraries, soil organisms, livestock genetics, pollination systems and food cultures that cannot be replaced by simple industrial printing.' },

    { n:18, zone:'inner', name:'New Westminster Crown and the Fraser Nexus', tag:'COURTS // RECORDS // INFRASTRUCTURE',
      inc:'Uptown and downtown New Westminster, riverfront, courts, arbitration facilities, public records, regional hospitals, Sapperton, Queensborough, Annacis Island.',
      txt:'The administrative and historical hinge of the region. The Crown concentrates courts, evidence repositories, identity records, arbitration and witness services. The Nexus is the machinery below and around it — rail exchange, power distribution, river control, freight, bridge management and service tunnels linking systems that publicly pretend to be separate.' },

    { n:19, zone:'inner', name:'Tri-Cities Reservoir Corridor', tag:'WATER // RAIL // RESERVOIR',
      inc:'Port Moody, Coquitlam, Port Coquitlam, Maillardville, Burke Mountain, rail yards, marine facilities, water treatment, reservoirs, hydroelectric systems.',
      txt:'Port Moody connects marine industry, environmental response and concealed boat access to Burrard Inlet; Port Coquitlam is a major rail, freight and maintenance centre. Reservoirs, biological reserves, hydro systems and buried tunnels support millions of people, and public confidence depends on that machinery staying ordinary and nearly invisible.' },

    { n:20, zone:'inner', name:'Pitt Meadows, Maple Ridge and the Eastern Gate', tag:'FLOODPLAIN // TRANSITION',
      inc:'Pitt Meadows farmland and floodplain, regional aviation, dikes, rail, river crossings, Maple Ridge civic centres, manufacturing, Golden Ears recreation.',
      txt:'The transition between metropolitan city and eastern valley. Less densely monitored than Vancouver, Burnaby or Surrey, but not wilderness — this is where metropolitan infrastructure becomes dispersed, and where a single damaged bridge, rail corridor, dike or relay can isolate large populations.' },

    { n:21, zone:'beneath', name:'The Underlayer', tag:'THE CITY BENEATH THE CITY',
      inc:'Service corridors, utility galleries, storm systems, old transit bores, freight tunnels, buried streets, seawall chambers, sealed shelters, drowned structures.',
      txt:'Not one unified tunnel network but the accumulated hidden geography of a century of rebuilding. Power authorities know their galleries. Transit knows its bores. Port security knows its freight routes. Nobody is supposed to hold a complete map, because such a map would bypass too many security and property systems. Four broad environments: Live Service, Legacy Infrastructure, Drowned Vancouver, and Black Spaces.' },

    { n:22, zone:'annex', name:'Abbotsford and the Fraser Valley NEMA Corridor', tag:'ANNEX // POP. 486,000',
      inc:'Agritech, food processing, aerospace supply, freight, regional medicine, aviation, NEMA staging, emergency logistics, continental interior routes.',
      txt:'The eastern anchor of the Lower Mainland — large enough to operate independently, close enough to become indispensable when Vancouver, Surrey or Richmond suffers a major emergency. The NEMA Abbotsford campus holds command facilities, training grounds, rescue and military support, vehicle depots, field hospitals and communications.' },

    { n:23, zone:'annex', name:'Vancouver Island South and Muir Point', tag:'ANNEX // GOVERNMENT // COASTAL',
      inc:'Greater Victoria government, naval facilities, universities, shipyards, research, aerospace support, hospitals, coastal communities, Muir Point.',
      txt:'Fast ferries, aircraft, marine routes and suborbital connections make travel routine, but weather and water still create meaningful isolation. Suited to government operations, corporate retreats, wilderness searches, secure transfers and remote laboratories — places where extraction is difficult before anyone begins shooting.' },

    { n:24, zone:'annex', name:'Orbital Vancouver', tag:'ANNEX // HIGH FRONTIER',
      inc:'Richmond passenger processing, Sea Island aerospace, Boundary Bay freight, Surrey pressure-hull manufacturing, Tsawwassen marine recovery, Northstar Crown transfer complex.',
      txt:'Not a place on the city map but the network through which the region reaches space. For most residents, orbit is part of ordinary economics and news rather than personal travel. For workers, the High Frontier begins in a Richmond terminal, a Surrey factory, a Delta recovery ship or a Vancouver control room long before anyone leaves the atmosphere.' }
  ];

  const ZONES = [
    ['all',     'All districts'],
    ['core',    'City of Vancouver'],
    ['inner',   'Inner Metropolitan'],
    ['beneath', 'Beneath the City'],
    ['annex',   'Connected Annexes']
  ];

  let zone = 'all', q = '';

  function render() {
    const grid = $('#districtGrid');
    if (!grid) return;
    let list = DISTRICTS.filter(d => zone === 'all' || d.zone === zone);
    if (q) {
      const t = q.toLowerCase();
      list = list.filter(d => (d.name + d.inc + d.txt + d.tag).toLowerCase().includes(t));
    }
    $('#districtCount').textContent = list.length + (list.length === 1 ? ' district' : ' districts');

    grid.innerHTML = list.length ? list.map(d => `
      <article class="dist holo-panel beam lit" data-zone="${d.zone}">
        <div class="dist-head"><span class="dist-n">${String(d.n).padStart(2,'0')}</span><em>${d.tag}</em></div>
        <h3>${d.name}</h3>
        <p class="dist-txt">${d.txt}</p>
        <div class="dist-inc"><span>INCLUDES</span><p>${d.inc}</p></div>
      </article>`).join('')
      : '<div class="dist-empty">No district matches that query.</div>';
  }

  document.querySelectorAll('[data-zone-filter]').forEach(b =>
    b.addEventListener('click', () => {
      zone = b.dataset.zoneFilter;
      document.querySelectorAll('[data-zone-filter]').forEach(x => x.classList.toggle('on', x === b));
      render();
    }));

  const search = $('#districtSearch');
  search?.addEventListener('input', () => { q = search.value; render(); });

  render();
  window.HAVELOCK_DISTRICTS = DISTRICTS;   // available for the mesh search
})();
