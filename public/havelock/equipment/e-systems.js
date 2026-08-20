/* POSSESSION, ACCESS, CONDITION AND THE MARKET */
window.R.push(

{ k:'possession', n:'What Possession Actually Means', kicker:'01 // Owning a thing',
  lede:'Seven separate relationships, any one of which can be withdrawn without anybody taking the object away from you.',
  blocks:[

  {t:'list', h:'ESTABLISH ALL SEVEN BEFORE YOU RELY ON ANYTHING', items:[
    '<b>Owner record.</b> Who the registry says holds it.',
    '<b>Licence.</b> What class it falls under and whose endorsement covers it.',
    '<b>Maintenance source.</b> Who is permitted to open it, and how far away they are.',
    '<b>Software authority.</b> Who can change what it does, or stop it doing anything.',
    '<b>Storage location.</b> Where it is lawfully allowed to sit when not in use.',
    '<b>Consumable chain.</b> What it eats, who makes that, and how long the supply runs.',
    '<b>Insurance or institutional response.</b> Who turns up when it fails, and how fast.'
  ]},

  {t:'note', h:'MISSION ISSUE',
    b:`A professional team can be handed extraordinarily expensive equipment for one operation without ever being permitted to keep it. Mission issue is the cleanest arrangement in the whole market and the one most likely to be misunderstood — the equipment works, the support is real, the training is genuine, and none of it is yours. It goes back at the end of the shift, and the record of what you did with it does not.`},

  {t:'table', head:['Acquisition route', 'What it gets you', 'What it costs'], rows:[
    ['Legal retail or professional supplier',
     'A reliable item, training, a warranty and verified parts',
     'Identity, licence, payment, owner telemetry and service dependence'],
    ['Employer issue',
     'No purchase cost, plus team integration and support',
     'Not personal property — recall, orders, audit and contractual control'],
    ['Government or Alliance mission issue',
     'Access to strategic equipment and ammunition',
     'Command authority, sealed objectives, strict recovery, national attention'],
    ['Grey Workshop rebuild',
     'Open control, local repair, reduced telemetry',
     'Variable quality, no warranty, legal exposure, compatibility faults'],
    ['Black market',
     'Restricted or prohibited access',
     'Price, leverage, counterfeit parts, criminal obligation, police response'],
    ['Theft or recovery',
     'Immediate access',
     'Hot serials, active trackers, angry owners, missing keys, damaged condition']
  ]},

  {t:'quote', b:'Discounts are paid in risk: false identity, debt, hidden controls, counterfeit components, a coercive installer, a stolen owner record, and maintenance you cannot ask for.',
    src:'CONSUMER ADVISORY // ON THE INFORMAL MARKET'}

]},

{ k:'access', n:'Access and Availability', kicker:'02 // Two different questions',
  lede:'One code says whether you may have it. The other says how long you will wait — and the second is the one that ruins plans.',
  blocks:[

  {t:'table', head:['Code', 'Meaning', 'Typical requirement'], rows:[
    ['O — Open',           'Ordinary consumer purchase',
     'Identity and payment only'],
    ['L — Licensed',       'Professional, vehicle, medical or regulated civilian equipment',
     'A relevant licence, employer or certified training'],
    ['R — Restricted',     'High-risk security, intrusion, augmentation or heavy protective equipment',
     'Background review, declared purpose, continuing registration'],
    ['M — Military',       'Military weapons, combat craft or continental infrastructure',
     'Government, Alliance or national service authority'],
    ['P — Prohibited',     'Coercive, identity-destroying or unapproved strategic technology',
     '<b>No legal civilian possession.</b>'],
    ['C — Classified',     'Unregistered workshop, stolen or secret-programme equipment',
     'Access through contact, theft or circumstance. Not through a counter.']
  ]},

  {t:'ladder', items:[
    { k:'Availability 1', n:'Same day',  v:'In stock across the region.' },
    { k:'Availability 2', n:'Same day',  v:'Through a normal supplier, with an order.' },
    { k:'Availability 3', n:'Days',      v:'Specialist supplier or a contract.' },
    { k:'Availability 4', n:'Weeks',     v:'Verified purpose, a licence, or a contact who will vouch.' },
    { k:'Availability 5', n:'Months',    v:'Institutional approval, a major informal operation, or a strategic allocation.' },
    { k:'Availability 6', n:'—',         v:'Unique prototype, national asset, or something that has to be gone and got.' }
  ]},

  {t:'note', h:'AVAILABILITY IS TIME AND ATTENTION, NOT A SHOPPING TRIP',
    b:`The distinction matters because the two codes fail differently. A high access code stops you at the counter. A high availability rating lets you order the thing and then spends four weeks generating a verified purpose, a licence check and a supplier who now remembers your name. The second route reaches the same object and leaves considerably more behind.`},

  {t:'table', head:['Technology tier', 'Where it lives', 'What it means in a room'], rows:[
    ['1 — Consumer',     'Homes, schools, shops, ordinary vehicles',
     'Tools and defensive devices. Nothing here changes an outcome by itself.'],
    ['2 — Professional', 'Hospitals, industry, rescue, licensed specialists',
     'Better protection, real sensors, sealed equipment, specialist function.'],
    ['3 — Tactical',     'Corporate response, high-threat police, elite security',
     'Heavy protective equipment, and occasionally something rated beyond it.'],
    ['4 — Strategic',    'Military, Alliance, continental defence',
     'Full military-rated protection, energy weapons, robots and vehicles.'],
    ['5 — Prototype',    'Black programmes, orbit, one-off recoveries',
     'Campaign-changing, and unlisted here for the reason implied by the word.']
  ]},

  {t:'note', h:'THE THRESHOLD BETWEEN THREE AND FOUR',
    b:`Crossing from tactical to strategic equipment is not an upgrade. It is a change of genre — the difference between a situation the police can attend and a situation that generates an international phone call. Every institution in the Alliance treats it that way, and the paperwork on either side of the line is written by different departments.`}

]},

{ k:'condition', n:'Condition', kicker:'03 // What state it is in',
  lede:'The same object in six different conditions is six different objects, and only two of them behave as advertised.',
  blocks:[

  {t:'ladder', items:[
    { k:'Pristine',    n:'Unused',    v:'Better resale, and the first thing that goes wrong is likely to go right on a second attempt.' },
    { k:'Serviceable', n:'Normal',    v:'Works as the specification says. The state the catalogue assumes and the market rarely supplies.' },
    { k:'Worn',        n:'Used',      v:'Slightly worse in use, and one small annoyance per operation. Most working equipment lives here.' },
    { k:'Damaged',     n:'Impaired',  v:'Reduced capability, capacity or protection until somebody repairs it properly.' },
    { k:'Jury-rigged', n:'Temporary', v:'Works for one job. A serious failure ends it entirely.' },
    { k:'Salvaged',    n:'Unknown',   v:'Owner, parts, software and compatibility all have to be established before it can be trusted at all.' }
  ]},

  {t:'note', h:'SALVAGED IS NOT A CONDITION, IT IS A QUESTION',
    b:`Everything else on that ladder describes wear. Salvaged describes ignorance — you do not know who owns it, what has been done to it, whether the software still answers to somebody else, or whether the parts inside it came from the same machine as the housing. A salvaged item that works perfectly is still salvaged until those four questions have answers.`},

  {t:'prose', b:[
    `Maintenance and network dependence are recorded separately on every profile, and the pairing is the useful part. A high maintenance rating means only a manufacturer depot or a strategic facility can open the thing. A high network rating means it needs continuous authentication to function at all. An item scoring high on both is superb equipment and a very short leash.`,
    `Grey Workshops exist in the space between those two numbers. What they sell is not capability — it is open control, local repair and reduced telemetry, at the price of variable quality, no warranty, legal exposure and compatibility faults nobody warned you about.`
  ]}

]}

);
