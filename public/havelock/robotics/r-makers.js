/* WHO BUILDS THEM — manufacturers and the catalogue */
window.R.push(

{ k:'makers', n:'Who Builds Them', kicker:'03 // The industry',
  lede:'No major robot is truly produced by one company, which is why no single company can be held responsible for one.',
  blocks:[

  {t:'prose', b:[
    `A Cyberworks househand may contain Pacifica identity hardware, Helix-Kestrel care routines, Cascadia mobility components, Blackglass shell materials and a Meridian battery controller. The badge on the chest panel is a service relationship, not a claim of manufacture, and the supply chain is the reason recall notices take the shape they do.`,
    `The Hearthline silhouette is common enough to be read instantly by anyone in the Alliance — but different firms supply the panels, the voices, the hands, the uniforms, the software and the service package behind that outline.`
  ]},

  {t:'plate', img:'assembly-arm', ref:'PLATE 3.1',
   alt:'A large assembly manipulator on a factory line with workers in high-visibility clothing',
   cap:`The badge on a chest panel is a service relationship. This line assembles frames that will leave wearing four different marques, and the recall notice for any one of them has to name every firm in the chain before it can name a fault.`},

  {t:'table', head:['Firm', 'Builds', 'Institutional character'], rows:[
    ['Cyberworks Aerospace Network', 'Premium servants, artificial minds, immersive and lunar robotics, hazardous systems',
     'Brilliant, proprietary, and increasingly unsure where the tool ends and the person begins'],
    ['Cascadia Systems Cooperative', 'Municipal robots, transit attendants, open-repair designs, shared housing units',
     'Practical, union-friendly, publicly accountable, financially pressured'],
    ['Solace Recovery Network', 'Medicine, care, rescue, casualty transport',
     'Compassionate service wrapped in insurance, triage and data ownership'],
    ['Meridian Continuum', 'Flood, power, climate, fire and infrastructure machines',
     'Builds the machines society cannot easily permit to fail'],
    ['Pacifica Data Trust', 'Identity, audit, evidence and authorisation modules',
     'Does not build every chassis, but decides who those chassis recognise'],
    ['Aegis Civic Security', 'Non-lethal security, custody and public-order units',
     'Professional and restrained in public; vulnerable to coercive contracts'],
    ['Northstar Habitat &amp; Orbital', 'Vacuum, aerospace, lift, station and high-altitude robots',
     'Expensive machines dependent on specialised service chains'],
    ['Blue Cedar Marine', 'Port, ferry, salvage, underwater and flood robots',
     'Rugged coastal design and a strong local repair culture'],
    ['Harker-Morrow Dynamics', 'Defence robotics, electronic warfare, heavy security',
     'Restricted, politically connected, aggressively protective of its telemetry'],
    ['Helix-Kestrel Biomedical', 'Human-machine medical interfaces and clinical manipulators',
     'Treats patient data as both a care record and a research asset'],
    ['Havelock Industries', 'Clinical robotics, rehabilitation systems, containment and patient-welfare machines',
     'A functioning machine can continue protecting people'],
    ['KLS Strategic Systems', 'Strategic and continuity platforms',
     'A functioning machine can continue protecting people'],
    ['Grey Workshops', 'Unsupported repair, local autonomy, mixed components',
     'Can free a machine from corporate dependence, or create an undocumented hazard']
  ]},

  {t:'gallery', wide:true, h:'THE FIRMS, IN THE FIELD', items:[
    {img:'penthouse-service', n:'Cyberworks. ',
     cap:'The prestige end of the domestic market, and the silhouette everyone else designs against.'},
    {img:'kingsway-transit', n:'Cascadia. ',
     cap:'Municipal, transit and shared-housing machines, built open-repair on purpose. Cheapest to keep and permanently short of money.'},
    {img:'emergency-dept', n:'Solace. ',
     cap:'Medicine, care, rescue and casualty transport. Compassionate service wrapped in insurance, triage and data ownership.'},
    {img:'flood-wall', n:'Meridian. ',
     cap:'Flood, power, climate and fire. The firm that builds the machines society cannot easily permit to fail.'},
    {img:'station-concourse', n:'Pacifica. ',
     cap:'Identity, audit and authorisation. Builds comparatively few chassis and decides what all of them recognise.'},
    {img:'public-order', n:'Aegis. ',
     cap:'Non-lethal security, custody and public order. Professional and restrained in public; vulnerable to a coercive contract.'},
    {img:'apron-service', n:'Northstar. ',
     cap:'Vacuum, aerospace, lift and station work. Expensive machines that depend on a specialised service chain.'},
    {img:'underwater-inspect', n:'Blue Cedar. ',
     cap:'Port, ferry, salvage and underwater. Rugged coastal design and a strong local repair culture.'},
    {img:'night-response', n:'Harker-Morrow. ',
     cap:'Defence robotics, electronic warfare and heavy security. Restricted, politically connected, protective of its telemetry.'},
    {img:'rehab-gait', n:'Helix-Kestrel. ',
     cap:'Human-machine medical interfaces and clinical manipulators. Treats patient data as care record and research asset at once.'},
    {img:'clinical-door', n:'Havelock. ',
     cap:'Clinical robotics, rehabilitation and containment. A functioning machine can continue protecting people.'},
    {img:'depot-bay', n:'Grey Workshops. ',
     cap:'Unsupported repair and local autonomy. Can free a machine from corporate dependence, or create an undocumented hazard.'}
  ]},

  {t:'note', h:'THE CHOKEPOINT',
    b:`Pacifica Data Trust is the firm to understand. It manufactures comparatively little and it decides, across most of the Alliance, which credentials a machine will accept as authority. A company that can be persuaded to change who a robot recognises has more practical power over that robot than the company that welded it together.`},

  {t:'prose', b:[
    `Cascadia dominates the public and municipal market — the Commonhand in shared housing, the Wayfinder in transit stations, the Streetwright on civic maintenance, the Fieldhand across the agricultural belt, the Longshore mule on the port. Its designs are deliberately open-repair, which is why they are cheaper to keep and why the cooperative is permanently short of money.`,
    `Cyberworks holds the prestige end. The Hearthline family is the visual symbol of domestic robot culture in a way that no competitor has managed to dislodge in thirty years.`
  ]},

  {t:'gallery', h:'CASCADIA IN SERVICE — THE PUBLIC FLEET', items:[
    {img:'building-pool', n:'Commonhand. ',
     cap:'Shared residential, assigned across several floors. Time is rationed per household and every hour of it is logged.'},
    {img:'skytrain-access', n:'Wayfinder. ',
     cap:'Transit attendant — guidance, luggage, accessibility equipment, and a medical summons that works before anybody finds a button.'},
    {img:'road-works', n:'Streetwright. ',
     cap:'Civic maintenance. Sixteen hours of endurance, which is exactly one long night shift plus the walk back to the depot.'},
    {img:'vertical-farm', n:'Fieldhand. ',
     cap:'Agriculture across the Cloverdale belt — soil, pollination, irrigation and livestock health.'},
    {img:'port-container', n:'Longshore. ',
     cap:'Two tons safely, four briefly, twelve hours at a time. Costs more than three household servants and earns it back in a quarter.'}
  ]},

  {t:'note', h:'CATALOGUE — PUBLISHED LIST PRICES, 2098',
    b:`Prices are for a new unit before service packages, and almost nobody pays them. Households lease, buildings pool, and employers hold fleets. The figures are useful mainly as a measure of what a category is worth relative to another — and as a reminder that a port cargo mule costs more than three household servants.`},

  {t:'table', head:['Model', 'Role', 'List price', 'Endurance'], rows:[
    ['Cyberworks HN-7 Hearthline',   'Household servant',            '75,000 cr',  '48 h domestic // 8 h heavy'],
    ['Cascadia CSH-4 Commonhand',    'Shared residential',           '58,000 cr',  '36 h'],
    ['Cascadia WF-12 Wayfinder',     'Transit attendant',            '68,000 cr',  '30 h'],
    ['Cascadia SW-8 Streetwright',   'Civic maintenance',            '85,000 cr',  '16 h'],
    ['Cascadia V-20 Fieldhand',      'Agriculture',                  '92,000 cr',  '20 h'],
    ['Solace LCE-8 Lifeline',        'Casualty extraction',          '85,000 cr',  '8 h'],
    ['Meridian E-6 Ember',           'Fire suppression',             '95,000 cr',  '8 h'],
    ['Cyberworks PS-8',              'Social-presence chassis',      '135,000 cr', '36 h'],
    ['Solace AST-9 Aster',           'Care attendant',               '145,000 cr', '24 h'],
    ['Blue Cedar HSR-3 Harbour Seal','Marine inspection',            '180,000 cr', '12 h'],
    ['Aegis CS-12 Civic Shield',     'Non-lethal civic security',    '190,000 cr', '—'],
    ['Cascadia LM-40 Longshore',     'Port cargo mule',              '240,000 cr', '12 h'],
    ['Northstar NVS-4',              'Vacuum servitor',              '400,000 cr', '12 h EVA'],
    ['Meridian CB-4 Cedar Brace',    'Structural shoring',           '420,000 cr', '12 h']
  ]},

  {t:'stats', items:[
    ['150 lb',   'HN-7 safe carry — 300 lb briefly, one adult in emergency'],
    ['2 tons',   'LM-40 safe lift — 4 tons short duration'],
    ['40 tons',  'CB-4 static hold when properly braced'],
    ['3,000 ft', 'HSR-3 maximum depth, at 35 mph underwater']
  ]},

  {t:'gallery', h:'THE EXPENSIVE END', items:[
    {img:'hangar-heavy', n:'Heavy and orbital frames. ',
     cap:'Purpose-built chassis, specialised actuators, separate certification. Nothing about this is an upgrade package fitted to something smaller.'},
    {img:'tunnel-crew', n:'Hazard and confined space. ',
     cap:'Machines rated for atmospheres that would kill the crew standing beside them, which is the entire justification for the price.'},
    {img:'operating-theatre', n:'Clinical manipulators. ',
     cap:'Licensed to one field, audited on every action, and worth more per hour of theatre time than the theatre.'}
  ]},

  {t:'note', h:'WHAT THE PRICE DOES NOT INCLUDE',
    b:`Service packages are quoted separately and are where the ongoing money lives: a tutor module at 15,000, concierge at 18,000, medical support at 35,000, accessibility at 22,000, a hazmat seal at 28,000. Two are worth naming for what they say about the market. A <b>private memory vault</b> — thirty days of protected local memory, out of reach of the service provider — costs 8,000. An <b>offline autonomy core</b>, which lets the machine keep working when the network will not authenticate it, costs 12,000. Both are optional. Both are extras.`}

]}

);
