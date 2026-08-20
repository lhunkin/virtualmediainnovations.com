/* GETTING UP, WHAT FLIES, WHAT YOU WEAR, WHAT IT COSTS */
window.R.push(

{ k:'access', n:'Ways to Reach Orbit', kicker:'01 // Getting up',
  lede:'Ten routes, and the difference between the cheapest and the fastest is nine times the money and three days.',
  blocks:[

  {t:'table', head:['Method', 'Typical time', 'Passenger', 'Cargo', 'Used for'], rows:[
    ['Direct reusable spaceplane',   '2–5 h flight; 8–16 h total', '18,000 cr', '180 cr/kg', 'Personnel and urgent cargo'],
    ['Air-launched shuttle',         '3–6 h; 8–20 h total',        '12,000 cr', '100 cr/kg', 'Smaller launch facilities'],
    ['Sea-launched reusable booster','2–5 h; 12–24 h total',       '9,000 cr',  '60 cr/kg',  'Heavy commercial cargo'],
    ['Rotovator / skyhook capture',  '6–12 h',                     '6,500 cr',  '35 cr/kg',  'Time-sensitive medium loads'],
    ['Equatorial orbital lift',      '3–5 days',                   '4,000 cr',  '18 cr/kg',  'Bulk freight and low-g passengers'],
    ['Electromagnetic launch track', '6–12 h to rendezvous',       '<b>Not permitted</b>', '8–20 cr/kg', 'Hardened unmanned cargo'],
    ['Spaceplane descent',           '2–4 h',                      '5,000 cr',  '70 cr/kg',  'Routine passenger return'],
    ['Ballistic reentry capsule',    '45–120 min',                 '3,000 cr',  'Limited',   'Emergency or low-cost descent'],
    ['Orbital-lift descent',         '3–5 days',                   '2,000 cr',  '10 cr/kg',  'Bulk return cargo']
  ]},

  {t:'note', h:'THOSE ARE COMMERCIAL RATES BEFORE EVERYTHING ELSE',
    b:`Before unusual customs fees, medical charges, cargo insurance, security escorts or emergency priority. And note the row that reads <i>not permitted</i>: the electromagnetic track will throw twelve tons into orbit for eight credits a kilogram at six to twelve gravities, and living passengers are prohibited for reasons that require no elaboration.`},

  {t:'cards', items:[
    { n:'The Asteria climber', s:'Pacific Equatorial Lift Consortium',
      b:`Ninety-six passengers, two hundred and fifty tons of cargo, four crew, three to five days between the equatorial terminal and the upper orbital complex. Ground and orbital stations beam power to its drive while its clamps pull it along the tether. Two medical rooms, a radiation shelter, six independent pressure sections and twenty-four rescue spheres. The cabins resemble a narrow hotel crossed with a train. <b>Asterias depart only after extensive mass balancing — an undeclared heavy object is not merely contraband, it can endanger other climbers.</b>` },
    { n:'The Needle cargo dart', s:'Fraser-Pacifica',
      b:`Unmanned, twelve tons, 70,000 credits a launch before cargo fees. Machine parts, propellant, metal feedstock, water, sealed food, radiation shielding — anything that does not require a gentle ride. Launch acceleration reaches six to twelve gravities.` },
    { n:'The Hookrunner', s:'Kaguya Aerospace and Celestial Bridge',
      b:`Air-launched, suborbital arc at Mach 8, then matches a rotating orbital tether and is caught. The process is safe by 2098 standards and terrifying by any ordinary standard. Hookrunner pilots are among the most highly trained civilian aerospace operators alive.` }
  ]}

]},

{ k:'craft', n:'What Flies', kicker:'02 // The spacecraft catalogue',
  lede:'Sixteen classes covering everything from a lifeboat to a Mars transport, and a price range of four orders of magnitude.',
  blocks:[

  {t:'table', head:['Craft', 'Class', 'Crew / passengers', 'Cargo', 'Price'], rows:[
    ['Northstar ERV-12 Homefall',      'Reentry lifeboat',        '0 / 12',  'Survival gear','450,000 cr'],
    ['Northstar NHO-OT12 Dockhand',    'Orbital tug',             '2 / 4',   '3 t; 600 t tow','2.8 M cr'],
    ['KLS FC-6 Freebird',              'Free-agent cutter',       '2 / 6',   '20 t',        '5.5 M cr'],
    ['Northstar NHO-LT24 Crownrunner', 'Passenger spaceplane',    '4 / 24',  '8 t',         '7.2 M cr'],
    ['KLS KX-XC8 Horizon',             'Executive courier',       '2 / 8',   '2 t',         '11.5 M cr'],
    ['Cyberworks CAN-ML16 Mare Lander','Lunar transport',         '4 / 16',  '25 t',        '16 M cr'],
    ['Solace SMM-OE9 Angel Ascender',  'Orbital ambulance',       '5 / 6 patients','3 t',   '18 M cr'],
    ['Yuro YAC-HF600 Helios',          'Solar-electric freighter','4 / 12',  '600 t',       '24 M cr'],
    ['Laika LSY-CF40 Volga',           'Cislunar ferry',          '6 / 40',  '80 t',        '28 M cr'],
    ['Bhandari BHL-HC80 Ganges',       'Heavy cargo orbiter',     '6 / 12',  '80 t',        '32 M cr'],
    ['Sunward SY-12 Zephyr',           'Solar yacht',             '4 / 12',  '50 t',        '45 M cr'],
    ['Northstar NHO-CT40 Bridgewright','Construction tender',     '12 / 24', '400 t',       '75 M cr'],
    ['Yuro-KLS YK-CR16 Hermes',        'Fast interplanetary courier','8 / 16','40 t',       '120 M cr'],
    ['Bhandari BHL-AH400 Samudra',     'Asteroid hauler',         '18 / 30', '5,000 t',     '180 M cr'],
    ['IMA DR-88 Endeavour',            'Mars transport',          '24 / 88', '300 t',       '~260 M cr']
  ]},

  {t:'note', h:'THE MANUFACTURERS, IN ONE LINE EACH',
    b:`<b>Northstar Habitat &amp; Orbital</b> — the Pacific's workhorse yard. <b>Bhandari Heavy Lift</b> — mass, moved precisely. <b>Kaguya Aerospace</b> and <b>Celestial Bridge Dynamics</b> — tether capture and the hardest flying anyone does commercially. <b>Laika State Yards</b> — a Laika craft is rarely elegant and rarely helpless. <b>Yuro Aerospace Consortium</b> — European cooperation and European rivalry in the same hull. <b>Cyberworks Aerospace Network</b> — lunar, and containing more autonomy than its public documentation admits. <b>KLS Orbital Systems</b> — sells independence while arranging maintenance contracts that make independence difficult. <b>Sunward Leisure Systems</b> — exactly what it sounds like, for people to whom the fare is not a consideration.`},

  {t:'quote', b:'A private office with a horizon measured in continents.', src:'KLS // ON THE HORIZON EXECUTIVE COURIER'},

  {t:'note', h:'THE FREEBIRD, WHICH IS THE ONE PLAYERS WILL WANT',
    b:`Two crew, six passengers, twenty tons, five and a half million credits — the cheapest craft a private operator can realistically run and go anywhere in. It is also the clearest illustration of the economics: <b>a Freebird bought for 5.5 million may cost another million a year to operate legally.</b>`}

]},

{ k:'suits', n:'Suits and EVA', kicker:'03 // What you wear',
  lede:'Eight suits, from a four-thousand-credit launch garment to a powered orbital work frame, and the difference between them is measured in hours of survival.',
  blocks:[

  {t:'table', head:['Suit', 'Purpose', 'Endurance', 'Price', 'Access'], rows:[
    ['Solace EC-2 Lifewrap',        'Emergency pressure cocoon',  '1 hour',   '1,500 cr',  'O'],
    ['Northstar TPS-4 Transit Skin','Launch and reentry',         '2 hours',  '4,000 cr',  'O/L'],
    ['Northstar EVA-8 Worklight',   'Standard EVA suit',          '8 hours',  '22,000 cr', 'L'],
    ['IMA MFS-9 Redwalker',         'Mars surface',               '24 hours', '75,000 cr', 'L/R'],
    ['Northstar HAS-12 Hardline',   'Heavy EVA hard suit',        '12 hours', '95,000 cr', 'R'],
    ['Solace RS-5 Rescue Shell',    'Medical and casualty rescue','10 hours', '130,000 cr','R'],
    ['Northstar Vacuum Frame',      'Powered orbital work suit',  '12 hours', '220,000 cr','R']
  ]},

  {t:'cards', items:[
    { n:'Transit Skin', s:'The one everybody wears',
      b:`Worn during launch, docking and reentry. Flexible enough to sit in a passenger couch, and it protects against smoke, loss of cabin pressure, fragments and short exposure. <b>It is not an EVA suit</b>, and the number of people who have had to be told this in a departure lounge is a standing joke among cabin crew.` },
    { n:'Lifewrap', s:'The one in the locker',
      b:`Folds into a case the size of a briefcase. Activated, it seals around one person, inflates a pressure layer and circulates emergency air. The occupant cannot walk and can manage only simple hand actions. Fifteen hundred credits, open sale, and it is the reason a great many people are alive.` },
    { n:'Worklight', s:'The professional standard',
      b:`Station technicians, inspectors, construction crews and visiting researchers. Eight hours, twenty-two kilos, twenty-two thousand credits. If you see somebody working outside a hull in the Pacific corridor, this is almost certainly what they are wearing.` }
  ]},

  {t:'note', h:'AND THE HARD SUITS',
    b:`The <b>Hardline</b> is rigid and articulated so that its limbs keep a near-constant internal volume — which is what lets a technician work for twelve hours without their hands giving out. The <b>Marewalker</b> uses magnetic dust exclusion and boots whose soles change stiffness for rock, prepared pads or loose regolith. The <b>Redwalker</b> is built for a thin carbon-dioxide atmosphere rather than hard vacuum, with glove assemblies exchangeable for geological, mechanical or biological work.`},

  {t:'note', h:'WEAPONS, BRIEFLY',
    b:`Conventional firearms are usually prohibited aboard stations and spacecraft. A missed shot can damage equipment, injure somebody in another compartment, or create a pressure emergency. What is permitted is a small class of <i>hull-safe</i> and <i>low-penetration</i> designs, and the permission is grudging.`}

]},

{ k:'ownership', n:'Owning a Spacecraft', kicker:'04 // What it actually takes',
  lede:'Thirteen things you must hold continuously, and nine bills that never stop arriving.',
  blocks:[

  {t:'list', h:'REQUIRED, CONTINUOUSLY, FOR A LEGAL PRIVATE CRAFT', items:[
    'Registered ownership',
    'Pressure-hull certification',
    'Reactor or propulsion licence',
    'Pilot and engineering licences',
    'Insurance',
    'A docking contract',
    'A transponder',
    'Current navigation data',
    'Environmental inspection',
    'Medical and rescue coverage',
    'A reaction-mass account',
    'A maintenance provider',
    'Cargo and passenger authority'
  ]},

  {t:'table', head:['Continuing expense', 'Typical cost'], rows:[
    ['Annual maintenance',                    '8 – 15 % of purchase price'],
    ['Small-craft station berth',             '5,000 – 20,000 cr / month'],
    ['Large-craft berth',                     '50,000 – 500,000 cr / month'],
    ['Small orbital refuel',                  '10,000 – 50,000 cr'],
    ['Cislunar ferry refuel',                 '100,000 – 500,000 cr'],
    ['Interplanetary departure loading',      '1 – 10 M cr'],
    ['Pressure-hull inspection',              '0.5 – 2 % of craft cost'],
    ['Emergency rescue retainer',             '25,000 – 500,000 cr / year'],
    ['Transponder and navigation certification','5,000 – 50,000 cr / year']
  ]},

  {t:'note', h:'WHICH IS WHY SMUGGLING WORKS THE WAY IT DOES',
    b:`Nobody evades those costs by flying faster. They evade them by delaying inspections, using stolen reaction mass, falsifying cargo, operating out of jurisdictionally fragmented facilities, and accepting docking where the airlock seal is a matter of trust. Every item on that list is an administrative decision, and every one of them is survivable right up until it is not.`},

  {t:'note', h:'A FEW RETROFIT PRICES, FOR SCALE',
    b:`Type I air recycler 15,000 credits <i>per person</i>. Closed-loop recycler 40,000 per person. Radiation storm shelter 35,000 per person. Crew quarters 20,000 per person. Medical bay 400,000; surgical bay 1.5 million. Emergency hibernation berth 90,000 each. A Homefall lifeboat 450,000. A rotating habitat starts at twenty million. Read that list again and notice how much of it is priced per human being — which is the honest arithmetic of the frontier.`},

  {t:'quote', b:'One mislabeled cargo container can kill everyone aboard.',
    src:'ORBITAL SAFETY BULLETIN // STANDING TEXT'}

]}

);
