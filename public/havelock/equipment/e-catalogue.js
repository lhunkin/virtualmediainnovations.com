/* THE CATALOGUE — chapters, makers, loadouts */
window.R.push(

{ k:'chapters', n:'The Catalogue', kicker:'04 // Seventeen chapters',
  lede:'A hundred and thirty-six profiles, arranged by the job rather than the technology — because a person in trouble reaches for a category, not a physics.',
  blocks:[

  {t:'table', head:['Ch.', 'Family', 'What it covers'], rows:[
    ['01', 'Personal Communications and Field Computing', 'Wristlinks, field slates, hardened radio, long-range beacons, authenticated cameras, identity tokens, offline computers'],
    ['02', 'Sensors and Detection',                       'Optical, active, marine, medical, environmental, geophysical and orbital sensing'],
    ['03', 'Surveillance, Identity and Intrusion',        'Identity tools, surveillance sets, tracking, counter-surveillance, secure storage, intrusion rigs'],
    ['04', 'Medical and Trauma Equipment',                'Kits, consumables, stations, transport, organ containers, field fabricators, hazard medicine'],
    ['05', 'Rescue and Disaster Response',                'Exoskeletons, mapping tools, microdrone swarms, water rescue, structural tools, atmosphere support'],
    ['06', 'Industrial, Engineering and Salvage',         'Tool systems, cutters, compact fabricators, electrical safety, EVA repair, heavy lift, mobile workshops'],
    ['07', 'Protective Clothing and Armour',              'Concealable, responder, security, marine, environmental, medical rescue and rated shells'],
    ['08', 'Nonlethal, Restraint and Security',           'Batons, restraint projectors, distraction devices, control weapons, medical capture, area denial'],
    ['09', 'Sidearms, Submachine Guns and Ammunition',    'The service calibres, compacts, machine pistols and special ammunition families'],
    ['10', 'Long Arms and Heavy Equipment',               'Assault, battle and precision rifles, support weapons, ramjet systems'],
    ['11', 'Enhanced-Operator Equipment',                 'Enhancement support, mobility gear, personal propulsion and flight, physiological support suits'],
    ['12', 'Cybernetics and Bionics',                     'Neural interfaces, cyberoptics, cyberaudio, respiratory implants, limbs, internal augmentation'],
    ['13', 'Arctic, Canadian and Remote Frontier',        'Wilderness loadouts, navigation, environmental suits, shelters, mobility frames, engineering kits'],
    ['14', 'Australian, Outback and Tech-City',           'Thermal protection, powered work frames, fixed security, all-terrain machines, survival utility'],
    ['15', 'Marine and Undersea',                         'Diving suits, propulsion, underwater tools, powered frames, mini-submersibles, sleds'],
    ['16', 'Naval Craft, Aircraft and Coastal',           'Patrol boats, submersible patrol craft, amphibious armour, naval VTOL, rotorcraft, submarines'],
    ['17', 'Orbital, Lunar and Powered Systems',          'EVA exoskeletons, powered armour, autonomous robots, tugs, shuttles, lunar industrial vehicles']
  ]},

  {t:'note', h:'HOW A PROFILE READS',
    b:`Each entry carries the manufacturer and model, the retail price, the access code and the availability rating, and its maintenance and network dependence. Then a physical description — what the object actually looks like in a hand or on a bench. Then <b>field doctrine</b>: what it changes in a scene, and the tactical choice it creates. Then <b>maintenance and failure</b>: how it degrades, what repair requires, and the clue its wear leaves behind for anyone who examines it afterwards.`},

  {t:'quote', b:'A sensor answers a physical question. It does not explain the answer.',
    src:'CHAPTER 2 // SENSORS AND DETECTION'},

  {t:'cards', items:[
    { n:'The chapter openers are the argument', s:'Not the profiles',
      b:`Every family opens with the operational question that stops good equipment being an automatic solution. Communications: <i>the Golden Age carries its institutions in the pocket — along with their permissions.</i> Security: <i>observation is common; trustworthy access is expensive.</i> Rescue: <i>a rescue tool is measured by the person it reaches, not the wall it destroys.</i>` },
    { n:'And the ones that state a limit', s:'Plainly',
      b:`Nonlethal equipment: <i>control tools still injure people, create evidence, and require judgement.</i> Cybernetics: <i>in 2098 a body can be repaired, improved, leased, tracked, and repossessed.</i> Arctic work: <i>cold is not empty terrain — it is a machine that consumes heat, time, batteries and judgement.</i>` },
    { n:'Two that are about dependency', s:'Which is the book\'s real subject',
      b:`Repair: <i>technology survives only as long as somebody can open it, understand it, and make it work again.</i> And on the Australian lineage, the sharpest line in the catalogue: <b>the Outback punishes dependency; the Tech-Cities weaponise it.</b>` }
  ]}

]},

{ k:'makers', n:'Who Makes It', kicker:'05 // Twenty institutions',
  lede:'Forty-six names appear across the catalogue. These twenty account for most of what a person will actually hold.',
  blocks:[

  {t:'table', head:['Organisation', 'Specialty'], rows:[
    ['Pacifica Data Trust',          'Identity, finance, secure data, audit systems'],
    ['Meridian Continuum',           'Power, grids, climate, infrastructure, strategic engineering'],
    ['Helix-Kestrel Biomedical',     'Longevity, organs, cybermedicine, enhancement, clinical systems'],
    ['Northstar Habitat &amp; Orbital', 'Launch, stations, lunar industry, EVA, orbital vehicles'],
    ['Cascadia Systems Cooperative', 'Robotics, municipal systems, open repair, transit, tools'],
    ['Aegis Civic Security',         'Private security, custody, tactical response, prisons'],
    ['Rainline Media Group',         'Media, evidence, reputation, witness and executive protection'],
    ['Blackglass Materials',         'Advanced ceramics, armour, transparent protection, heat systems'],
    ['Solace Recovery Network',      'Trauma extraction, hospitals, medical transport, crisis insurance'],
    ['Harker-Morrow Dynamics',       'Defence robotics, electronic warfare, exoskeletons, prototypes'],
    ['Halvorsen Motorworks',         'Rugged ground vehicles, manual fallback, parts availability'],
    ['Rampart Vehicle Group',        'Armoured transports, tactical vehicles, heavy utility chassis'],
    ['Cirrus Aeromotive',            'Civilian AVs, rescue lift, rotorcraft, flight controls'],
    ['Sablewing Aeronautics',        'Stealthy executive and security aircraft, restricted software'],
    ['Blue Cedar Marine',            'Ferries, patrol craft, submersibles, deep-station tenders'],
    ['Wellington Tactical Systems',  'Ammunition, conventional weapons, ramjet research'],
    ['Cyberworks Aerospace Network', 'Robotics, artificial minds, lunar exploration, remote systems'],
    ['KLS Corporation',              'Orbital manufacturing, security frames, heavy station systems'],
    ['Southern Cross / Wattle / Redline', 'Australian desert, road, water and field systems'],
    ['Grey Workshops',               'Unlicensed repair, open hardware, salvage, identity-independent tools']
  ]},

  {t:'note', h:'THE MANUFACTURER PRINCIPLE',
    b:`No strategic machine is made by one logo. Armour depends on Blackglass, medicine on Helix-Kestrel or Solace, data on Pacifica, power on Meridian, and transport on half a dozen others. This is why a recall is a negotiation rather than an announcement, and why the useful question about any firm is not what it makes but what everybody else cannot make without it.`},

  {t:'note', h:'AND A NOTE ON READING THESE AS FACTIONS',
    b:`Each of them has useful employees, internal divisions, genuine public benefits and specific crimes. Destroying a company should never be the only available answer when a city still needs what it makes — which is, in practice, the position every regulator in the Alliance has found itself in at least once.`}

]},

{ k:'loadouts', n:'Standard Loadouts', kicker:'06 // What a role carries',
  lede:'Eight representative packages. Each grants access rather than ownership, and the distinction is where most of the interesting trouble comes from.',
  blocks:[

  {t:'table', head:['Role', 'Representative package'], rows:[
    ['Investigator or media',
     'Civic wristlink, field slate, witness lens, pinpoint cameras, shieldcoat, a compact pistol or no weapon at all, trauma pouch'],
    ['Corporate security',
     'Team console, door sensor, soft tactical suit, pulse baton, service pistol, restraint cuffs, flash-sound capsules'],
    ['Trauma and rescue',
     'Golden Hour pack, lifesign triager, hover stretcher access, response longcoat, floodline harness, hardened communicator'],
    ['Engineer or salvager',
     'Powered hand rig, cutting torch, diagnostic slate, pressure-seal gun, grid clamp access, protective longcoat, offline reference library'],
    ['Marine and diver',
     'Pelagic suit, deep pack access, speargun, marine sonar, coldwater rescue suit, line launcher'],
    ['Arctic and remote',
     'Ranger rig, whiteout mast, field shelter, coldwater suit, conventional rifle, repair tools, store-and-forward beacon'],
    ['Enhanced operator',
     'Approved conversion support, harness, mobility boots, cooling suit, tailored armour, a named medical contact, contingency arrangements'],
    ['Orbital crew',
     'EVA suit or frame access, long-range beacon, field slate, vacuum repair spindle, emergency oxygen, sealed trauma kit']
  ]},

  {t:'list', h:'THE RULES THAT COME WITH A PACKAGE', items:[
    'A package grants <b>access</b>, not ownership, unless it was separately paid for or earned.',
    'Strategic and vehicle items are normally team, employer, Alliance or settlement resources.',
    'Not everything is issued at once — the tools should express the role and create obligations.',
    'Track owner, licence and maintenance for anything that matters.',
    'For restricted items, establish who notices possession and what follows from that.',
    'For anything recovered or stolen, establish tracker, authentication, damage and missing support.'
  ]},

  {t:'note', h:'THE ONE THAT CATCHES PEOPLE OUT',
    b:`Look again at the investigator package: <i>a compact pistol or no weapon at all</i>. In a catalogue of a hundred and thirty-six items, the entry that most often changes a scene is the decision not to carry one of them. An investigator without a weapon is admitted to rooms, and an investigator with one is escorted through corridors.`},

  {t:'quote', b:'The equipment is extraordinary, but it is owned, serviced, audited, financed, and vulnerable.',
    src:'ARSENAL // EDITORIAL STANDARD'}

]}

);
