/* STREET MACHINES — cycles, security AVs, construction, civilian robots */
window.R.push(

{ k:'cycles', n:'Motorcycles and Hovercycles', kicker:'04 // Two wheels',
  lede:'The vehicle class that survived automation by being the one thing an autonomous network is bad at: going somewhere it was not expecting.',
  blocks:[

  {t:'prose', b:[
    `A motorcycle in 2098 is a deliberate choice. It is slower to insure, harder to licence, less comfortable in the rain, and it goes places the traffic system has not planned for. Couriers ride them because a gap in traffic is worth money. Everyone else rides them for reasons the traffic system does not model.`,
    `Most fold or stand upright and live in residential utility lockers rather than parking structures. The Foldrunner will go through an ordinary door.`
  ]},

  {t:'table', head:['Model', 'Type', 'Speed', 'Range', 'Price'], rows:[
    ['Rainline RM-MC2 Needle',        'Urban commuter',            '125 mph', '360 mi', '14,500 cr'],
    ['Underlayer UW-FR2 Foldrunner',  'Compact tunnel cycle',      '95 mph',  '240 mi', '16,000 cr'],
    ['Rainline RM-RCB7 Courier Bike', 'High-speed courier',        '175 mph', '420 mi', '22,000 cr'],
    ['Cloverdale CAM-MU3 Stockhand',  'Utility trike',             '90 mph',  '600 mi', '29,000 cr'],
    ['Cascadia CCW-TK4 Trailknife',   'Dual-sport / off-road',     '130 mph', '520 mi', '33,000 cr'],
    ['Halvorsen HM-RW8 Roadwarden',   'Touring',                   '155 mph', '650 mi', '36,000 cr'],
    ['Rainline RM-HC5 Cloudrunner',   'Civilian hovercycle',       '165 mph', '360 mi', '46,000 cr'],
    ['Auralis AM-GW2 Glasswing',      'Enclosed luxury cycle',     '150 mph', '450 mi', '56,000 cr'],
    ['Tanaka-Ivers TI-KX9 Kestrel-R', 'Performance',               '215 mph', '300 mi', '68,000 cr'],
    ['Solace SMM-RR2 Rapid Responder','Emergency medical',         '170 mph', '450 mi', '72,000 cr'],
    ['Aegis APV-PB6 Pursuit',         'Police and security cycle', '205 mph', '500 mi', '185,000 cr']
  ]},

  {t:'note', h:'THE FIRST SIX MINUTES OF THE HOSPITAL',
    b:`Solace markets the Rapid Responder with that line and it is not advertising exaggeration. A medical motorcycle reaches a collapsed pedestrian on Broadway several minutes before an ambulance can, carrying a paramedic, a medscanner and enough intervention to matter. Everything that happens afterwards is easier because of those minutes.`},

  {t:'note', h:'AND THE OTHER SIDE OF IT',
    b:`Kestrel-R owners receive regular warnings that a delayed bearing replacement, an unauthorised tyre or an unofficial control patch will void the performance certification — which is to say the licence to use the thing they bought. The Glasswing is sold to commuters who want a motorcycle without exposure to Vancouver rain, and its insurance is expensive precisely because it works.`}

]},

{ k:'security', n:'Security Hover AVs', kicker:'05 // Force in the air',
  lede:'Five roles: patrol, interceptor, containment, tactical, command. Corporate machines in the last three categories remain scarce and registered, and their deployment creates consequences even when no weapon is fired.',
  blocks:[

  {t:'prose', b:[
    `A security AV is the most politically expensive object a private organisation can operate. It is visible, it is loud, it is logged continuously by three separate authorities, and it announces to an entire neighbourhood that somebody has decided the situation warrants it.`,
    `That is by design. The regulatory theory is that force which cannot be applied quietly will be applied rarely.`
  ]},

  {t:'cards', items:[
    { n:'Patrol and interceptor', s:'The visible tier',
      b:`Wide-area observation, identity audit, route interdiction. Aegis Watchtower-class machines run continuous wide-area identity audits over a district and are entirely open about it — the point is deterrence, and deterrence requires being seen.` },
    { n:'Containment', s:'Non-lethal by specification',
      b:`Restraint foam, capture nets, optical dazzlers, contact shock systems, counter-drone ion projectors. Lethal mounts exist and require military authority. The Bulwark is a moving barricade: its forward shield protects two standing officers, four crouching civilians, or one casualty team.` },
    { n:'Tactical and command', s:'Political objects',
      b:`Deployment of a Bulwark or a Vigil-T into ordinary civilian unrest creates political and legal consequences even when it never attacks. Bastion deployment requires executive authorisation, an established threat classification, and an explanation afterwards.` }
  ]},

  {t:'note', h:'ONE MACHINE THE INDEX WILL NAME PLAINLY',
    b:`The Harker-Morrow Shrike is described by its critics as a private attack aircraft with paperwork, and the Index records that the description has not been successfully disputed. The firm's own literature calls its reconnaissance line <i>threat characterisation</i>. Aegis calls its armoured sedan a <i>continuity and personal-integrity vehicle</i>. Everyone else calls it armoured.`}

]},

{ k:'construction', n:'The Machines That Built It', kicker:'06 // Construction robots',
  lede:'Every skyline in the region was assembled by machines that will refuse an unsafe order — and refuse it in six specific, enumerated ways.',
  blocks:[

  {t:'table', head:['Model', 'Role', 'Price', 'Access'], rows:[
    ['Verdant VHB-6 Habitat Weaver',      'Interior construction',      '145,000 cr', 'Licensed'],
    ['Rainline RCM-4 Roadmender',         'Road repair',                '190,000 cr', 'Licensed professional'],
    ['Cascadia CBR-10 Bridge Walker',     'Structural support',         '220,000 cr', 'Licensed professional'],
    ['Cloverdale CAM-EW9 Earthwright',    'Earthworks and dikes',       '260,000 cr', 'Licensed professional'],
    ['Northstar NHO-VS8 Vacuum Servitor', 'Orbital construction',       '400,000 cr', 'Aerospace licence'],
    ['Underlayer UWT-M7 Mole',            'Tunnelling',                 '950,000 cr', 'Restricted industrial'],
    ['Blackglass BGM-FC5 Furnace Crawler','Heat and demolition',        '1.25 M cr',  'Restricted industrial'],
    ['Fraser FHI-ACR80 Atlas Crane Spider','Heavy lift',                '1.8 M cr',   'Industrial institutional'],
    ['Bhandari BHL-PR12 Print Rig',       'Large-scale fabrication',    '2.6 M cr',   'Major institutional licence'],
    ['Meridian MIG-DG4 Dike Guardian',    'Flood infrastructure',       'Not sold at retail', 'Critical infrastructure']
  ]},

  {t:'list', h:'CONSTRUCTION SAFETY INTERLOCKS — what a civilian machine will refuse', items:[
    'Swing a tool through an occupied safety zone',
    'Collapse an inhabited structure',
    'Operate a cutter against a living target',
    'Move an unsecured load above people',
    'Exceed a structure\'s certified load',
    'Continue when identity, survey or utility records conflict'
  ]},

  {t:'note', h:'READ THE LAST ONE AGAIN',
    b:`Five of those six interlocks are about physics. The sixth is about paperwork — the machine stops when the records disagree with each other. It is the most frequently triggered interlock on any site in the region, and the one most often overridden by a supervisor who is personally liable for having done so.`}

]},

{ k:'civrobots', n:'Robots in Ordinary Life', kicker:'07 // The civilian catalogue',
  lede:'Appliances, tools, co-workers, remote bodies, status symbols, and occasionally people. A humanoid shape does not prove intelligence.',
  blocks:[

  {t:'note', h:'FOUR LEGAL CATEGORIES',
    b:`<b>Appliance robot</b> — an owned machine with narrow programming. <b>Service robot</b> — an autonomous professional machine operating under licence. <b>Avatar chassis</b> — a body controlled by a remote human, an artificial mind, or a digital person. <b>Digital person</b> — a cognisant legal or disputed person, whose chassis is a body rather than equipment. Destroying an appliance is property damage. Destroying a body occupied by a digital person may be assault or murder, depending on jurisdiction, backup continuity and legal recognition. A legally recognised person may inhabit a plain industrial chassis.`},

  {t:'table', head:['Model', 'Role', 'Price', 'Access'], rows:[
    ['Verdant VLS-HK4 Hearthkeeper',   'Domestic service',            '4,800 cr',  'Open'],
    ['Learning Lantern LL-TU2 Tutor',  'Education and child support', '7,500 cr',  'Open'],
    ['Rainline RDS-CB2 Curbside',      'Delivery',                    '8,500 cr',  'Open commercial'],
    ['Cascadia CCW-PH3 Porterhound',   'Cargo and personal support',  '12,000 cr', 'Open'],
    ['Companion Dynamics CD-PA7 Pallas','Personal companion',         '15,000 cr', 'Open'],
    ['Quiet Clerk QC-AR2 Archive Runner','Secure records courier',    '16,000 cr', 'Licensed legal, medical or corporate'],
    ['Solace CM-3 Caremate',           'Elder and patient assistance','18,000 cr', '<b>Medical licence or prescription</b>'],
    ['Pacifica PB-TL4 Telepresence Liaison','Remote office avatar',   '22,000 cr', 'Licensed commercial'],
    ['Cloverdale CAM-AH5 Agrihand',    'Farming and animal care',     '24,000 cr', 'Open professional'],
    ['Auralis ACS-CN5 Concierge',      'Hospitality',                 '28,000 cr', 'Licensed commercial'],
    ['MetroSan MS-SW6 Streetwasher',   'Sanitation',                  '32,000 cr', 'Municipal or commercial'],
    ['Solace SMM-MD6 MediCradle',      'Mobile medical assistant',    '65,000 cr', 'Medical professional']
  ]},

  {t:'gallery', h:'IN THE HOUSE AND ON THE STREET', items:[
    {img:'hearthline-breakfast', n:'The Hearthkeeper. ',
     cap:'Cleans, cooks simple meals, manages deliveries, monitors appliances, and recognises the family. At 4,800 credits it is the cheapest thing on this page and the one most households actually own.'},
    {img:'home-eldercare', n:'The Caremate. ',
     cap:'Elderly residents, disabled people, recovering patients — physical support without full-time human care, with a direct hospital connection. It is also programmed to preserve its patient even when the patient orders otherwise.'},
    {img:'library-children', n:'The Tutor. ',
     cap:'Schools, hospitals, language programmes, libraries and affluent homes. Carries a parent and school link and an allergen sensor, and is not permitted to discipline a child physically.'},
    {img:'street-delivery', n:'The Curbside. ',
     cap:'Outside restaurants, pharmacies, apartments and offices, working the designated pedestrian lanes. Identity verification and an identity lock on the cargo box.'}
  ]},

  {t:'note', h:'THE MACHINES THAT SORT PEOPLE',
    b:`A Concierge quietly informs security when somebody does not belong. A Transit Pod handles disputed identities and can hold its doors closed. A Watchtower runs wide-area identity audit. A Tutor may decline a child whose identity no longer verifies. None of these is a malfunction — each is the certified behaviour, working exactly as specified, and the specification was written by somebody who did not have to be in the room when it happened.`},

  {t:'quote', b:'Its emotional responses are sophisticated simulation in the standard model. Owners frequently treat the robot as a family member anyway.',
    src:'CONSUMER GUIDANCE // ON COMPANION UNITS'}

]}

);
