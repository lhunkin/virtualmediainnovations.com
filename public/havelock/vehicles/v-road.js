/* THE ROAD — how traffic works, who builds, what it costs */
window.R.push(

{ k:'street', n:'What the Streets Look Like', kicker:'01 // The road',
  lede:'Three forms dominate, none of them exotic, and the differences between them decide who can go where.',
  blocks:[

  {t:'cards', items:[
    { n:'Wheeled', s:'The majority, still',
      b:`Low smooth composite bodies, laminated smartglass, recessed lighting, retractable sensor strips, and wheel housings concealing more machinery than an entire early-21st-century engine compartment. Grilles are rare because almost everything is electric. Physical mirrors have vanished from premium models and remain on manual and industrial vehicles, <b>because a mirror never needs a firmware update.</b>` },
    { n:'Low-hover', s:'One to twelve feet up',
      b:`Lift fans, directional jets and computer-controlled ground-effect systems. <b>They are not anti-gravity machines.</b> They produce wash, require continuous stabilisation, and perform badly in rubble, dense forest or confined interiors. What they do well is water, flood, mud and broken ground — which is why the agricultural belt runs on them.` },
    { n:'AV', s:'Aerodyne or vectored thrust',
      b:`The common North American term for anything that leaves the ground properly. An urban AV generates wind, vibration, warning lights, transponder traffic and a continuous stream of legal records. Stealing one is easy compared with hiding one.` }
  ]},

  {t:'note', h:'TRAFFIC IS A MANAGED UTILITY',
    b:`Routine travel requires no skill at all. The vehicle negotiates route access, traffic separation, tolls, weather diversions, emergency corridors and charging, and settles the bill afterwards. Continuous induction lanes can extend a hover car's practical range indefinitely, so long as it stays on the network that owns them.`},

  {t:'prose', b:[
    `Public transport moves far more people than private AVs ever will. Maglev sets, autonomous shuttles, ferries, freight carriers, cable systems and underground transit are the real machinery of the age; the air taxi is the part that gets photographed.`,
    `The licensing ladder runs: <b>open</b> → open commercial or professional → <b>licensed</b> → licensed professional, commercial or industrial → specific commercial, emergency-service, flight, aerospace or lunar licences → <b>institutional</b> → <b>restricted</b> → strategic issue → not commercially available at all. Where a machine sits on that ladder tells you more about it than its top speed.`
  ]},

  {t:'gallery', h:'WHAT YOU ACTUALLY SEE, BY DISTRICT', wide:true, items:[
    {img:'city/coal-harbour', n:'Burrard Core. ',
     cap:'City Hovers, Family Pods, Transit Pods, Executive Glides, Secure Sedans and Sparrows. The wealthiest towers have private AV pads and protected express access.'},
    {img:'gastown-street', n:'Gastown and the East Van belt. ',
     cap:'Courier bikes, Grid Vans, Wayfarers, service crawlers, customised manual cars, and vehicles whose exterior panels advertise three different owners.'},
    {img:'city/richmond-grid', n:'Richmond and the Delta Grid. ',
     cap:'Cargo Haulers, Pelicans, Bhandari lifters, customs vehicles, Atlas Movers and long lines of autonomous containers.'},
    {img:'harvest-belt', n:'Surrey and Cloverdale. ',
     cap:'Wayfarers, utility hovers, agricultural skiffs, conventional trucks, livestock transports — and privately owned machines that still have steering wheels.'},
    {img:'city/north-shore', n:'The North Shore. ',
     cap:'Weatherproof family vehicles, rescue hovers, cable-maintenance equipment, avalanche machines, and AVs waiting on cloud and wind clearance.'},
    {img:'city/port-yard', n:'Portside and the Fraser Nexus. ',
     cap:'Atlas Movers, cargo haulers, autonomous tugs, rail consists, inspection vehicles, customs patrols and Aegis security transports.'},
    {img:'tunnel-industrial', n:'The Underlayer. ',
     cap:'Underlayer Mules, courier motorcycles, compact manual cars, tunnel shuttles, unregistered rebuilds, and old vehicles with their network hardware physically removed.'},
    {img:'city/tricities-corridor', n:'The corridors between. ',
     cap:'Freight, treatment works and housing sharing one protected route, on a road that four separate authorities have to agree about before anything moves.'}
  ]}

]},

{ k:'makers', n:'Who Builds Them', kicker:'02 // The manufacturers',
  lede:'Eleven names cover most of what moves in the Lower Mainland, and each one is really selling a relationship rather than a machine.',
  blocks:[

  {t:'table', head:['Firm', 'Known for', 'What you are actually buying'], rows:[
    ['Rainline Mobility', 'Compact hovers, courier machines, coastal weatherproofing',
     'Modest prices and a machine that is everywhere. The default.'],
    ['Verdant Loop Transit', 'Autonomous shuttles, family cabins, accessibility, arcology transport',
     'Safe, comfortable, deeply networked — and notoriously hard to operate once the infrastructure stops answering.'],
    ['Cascadia Cooperative Works', 'Worker-owned manufacturing; Surrey, Tacoma, Portland, the Fraser corridor',
     'Physical controls, replaceable modules, open diagnostics, repair by independent shops.'],
    ['Northstar Habitat &amp; Orbital', 'Aerospace materials applied to premium ground vehicles',
     'Elegant, quiet, secure, expensive — and tightly bound to Northstar service contracts.'],
    ['Cloverdale Agrimotive', 'Agricultural skiffs, utility hovers, irrigation crawlers',
     'Not fashionable. Keeps moving through floodwater, mud, smoke, snow and poor communications.'],
    ['Aegis Protective Vehicles', 'Executive vehicles, interceptors, armoured transports',
     'An Aegis emblem tells everyone the occupants are wealthy, dangerous, important, or all three.'],
    ['Fraser Heavy Industries', 'Cargo haulers, port equipment, maglev stock, container movers',
     'Standardised cargo modules and lifetime institutional service contracts.'],
    ['Solace Medical Mobility', 'Ambulances, mobile clinics, life-support cabins, medical AVs',
     'Compassion in the advertising. Contracts, data systems and proprietary consumables underneath it.'],
    ['Cirrus Aeromotive', 'Air-taxi fleets, family and commercial AVs',
     'One of the largest civilian AV companies on the continent, and the one you will actually ride in.'],
    ['Sablewing Aerospace', 'Low-observable executive AVs, surveillance craft, high-speed couriers',
     'Sablewing sells privacy to people whose movements are valuable information.'],
    ['Bhandari Heavy Lift', 'Cargo AVs, construction lifters, offshore and orbital-ground logistics',
     'Mass, moved precisely. Its pilots are respected specialists for a reason.']
  ]},

  {t:'note', h:'THE REAL DIVIDE IS NOT PRICE',
    b:`It is whether a mechanic can fix the thing without asking permission. Cascadia publishes most of its mechanical specifications and lets independent cooperatives fabricate non-critical parts; a damaged wheel motor can be replaced without authenticating with head office. At the other end, a proprietary lift controller fails and the vehicle waits for a depot appointment. Both machines work. Only one of them still works when the relationship does not.`}

]},

{ k:'catalogue', n:'The Catalogue', kicker:'03 // Ground and air',
  lede:'Published list prices. Almost nobody pays them — the mass market is leased, the top of it is fleet, and the middle is financed.',
  blocks:[

  {t:'table', head:['Model', 'Class', 'Price', 'Access'], rows:[
    ['Underlayer Works UW-FR2 Foldrunner', 'Compact tunnel cycle — folds through a residential door', '16,000 cr', 'Open'],
    ['Rainline RM-MC2 Needle', 'Urban commuter motorcycle', '14,500 cr', 'Open'],
    ['Rainline RM-RCB7 Courier Bike', 'High-speed courier, 175 mph', '22,000 cr', 'Open; priority software needs a courier licence'],
    ['Rainline RL-C1/98 City Hover', 'Low-hover commuter, driver + 3', '32,000 cr', 'Open — lease 450–600 cr/month'],
    ['Cascadia CCW-WF5 Wayfarer', 'Manual-capable family and expedition utility', '52,000 cr', 'Open'],
    ['Verdant VLT-FP6 Family Pod', 'Fully autonomous family and accessibility vehicle', '45,000 cr', 'Open'],
    ['Cloverdale CAM-UH2 Utility Hover', 'Agricultural and municipal utility — a floating pickup', '58,000 cr', 'Open'],
    ['Cascadia CCW-GV6 Grid Van', 'Utility repair and technical service', '72,000 cr', 'Licensed professional'],
    ['Northstar NHO-EG4 Executive Glide', 'Premium executive low-hover sedan', '140,000 cr', 'Licensed'],
    ['Fraser FHI-FCH20 Cargo Hauler', 'Twenty-ton regional freight tractor', '180,000 cr', 'Commercial licence'],
    ['Aegis APV-SS4 Secure Sedan', 'Armoured executive and protective services', '220,000 cr', 'Licensed; jammer Restricted'],
    ['Burnaby BMT-P20 Transit Pod', 'Twenty-passenger municipal shuttle', '260,000 cr', 'Institutional'],
    ['Aegis APV-CP5 Civic Patrol', 'Armoured police patrol', '300,000 cr (+85,000 pursuit)', 'Restricted — police and chartered security'],
    ['Solace SMM-SRR9 Rapid Recovery', 'Advanced trauma ambulance', '480,000 cr', 'Emergency-service licence'],
    ['Cirrus CA-SP3 Sparrow', 'Family AV and air-taxi backbone', '620,000 cr', 'Licensed'],
    ['Fraser FHI-PAM80 Port Atlas Mover', 'Eighty-ton container platform', '650,000 cr', 'Licensed industrial'],
    ['Metro-Rampart MR-FRH8 Fire Crown', 'Heavy fire, rescue and hazardous environment', '900,000 cr', 'Institutional emergency'],
    ['Cirrus CA-PL10 Pelican', 'Light commercial AV, ten passengers or two tons', '1.4 M cr', 'Commercial flight licence'],
    ['Sablewing SA-VL6 Veil', 'Low-observable executive AV', '1.9 M cr', 'Licensed; signature package Restricted'],
    ['Bhandari BHL-L12 Lifter Twelve', 'Heavy construction and cargo AV, twelve tons', '2.8 M cr', 'Industrial flight licence'],
    ['Blue Cedar BC-SF600 Strait Ferry', '600 passengers, ~120 vehicles', '8 M cr', 'Institutional'],
    ['Fraser FHI-FRS600 Maglev Set', 'Eight cars, 800 passengers, 370 mph', '~22 M cr', 'Continental system asset']
  ]},

  {t:'note', h:'THE LEASE IS THE PRODUCT',
    b:`The City Hover is almost always leased, and the 450–600 credits a month cover traffic access, basic insurance, software updates, battery replacement and a personal assistant that learns your routes. The same agreement records every destination, every passenger authorisation, every emergency override, and every unauthorised attempt to take manual control. Nothing about that is hidden. It is on the page nobody reads.`},

  {t:'gallery', h:'FOUR MACHINES WORTH KNOWING', items:[
    {img:'street-delivery', n:'The Courier Bike. ',
     cap:'In legal mode it requests priority, announces its route and warns traffic before entering a gap. In dark mode it is a fast manual motorcycle with none of the network protections that normally keep the rider alive.'},
    {img:'rail-yard', n:'The Cargo Hauler. ',
     cap:'Mostly driverless, and its cab still has two seats — insurance law requires a human-compatible control station. Independent truckers, union inspectors, hazardous-freight crews and smugglers are the principal users of those seats.'},
    {img:'emergency-dept', n:'The Rapid Recovery. ',
     cap:'Exchanges data with the hospital the whole way in, identifies compatible blood and organ resources, and prepares the receiving surgical team before it arrives.'},
    {img:'kingsway-transit', n:'The Transit Pod. ',
     cap:'Clean, brightly lit, constantly recorded, and designed to be washed out between service cycles. It recognises mobility aids, medical emergencies, lost children, violent behaviour and disputed identities — and can lock its doors while it waits for the authorities.'}
  ]},

  {t:'table', head:['Modification', 'Cost', 'Note'], rows:[
    ['Manual control conversion', '4,000 – 20,000 cr', 'The single most requested job in an independent shop'],
    ['Offline navigation archive', '1,500 cr', 'Because the maps are otherwise a live service'],
    ['Reinforced cabin', '25,000 cr', ''],
    ['Heavy reinforcement', '60,000 cr', 'Effectively the construction of a new vehicle'],
    ['Drone dock', '7,500 cr', ''],
    ['Medical cradle', '25,000 cr', ''],
    ['Privacy suite', '12,000 cr', ''],
    ['Amphibious package', '20,000 cr', ''],
    ['Cargo security vault', '10,000 – 50,000 cr', ''],
    ['Performance override', '5,000 cr', '<b>Illegal on public routes</b>'],
    ['Restricted jammer', '40,000 cr', '<b>Restricted licence; major legal consequences</b>']
  ]}

]}

);
