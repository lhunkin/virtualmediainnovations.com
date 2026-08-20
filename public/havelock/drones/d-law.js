/* CATEGORIES, ACCESS AND CONTROL */
window.R.push(

{ k:'classes', n:'Categories and Access', kicker:'01 // What you may own',
  lede:'Eight legal categories and six access codes. Between them they decide whether a machine is a purchase, a licence, a registration, or a criminal offence.',
  blocks:[

  {t:'list', h:'THE EIGHT LEGAL CATEGORIES', items:[
    '<b>Appliance drone</b> — an owned machine with narrow programming.',
    '<b>Professional drone</b> — operated under a trade or vehicle licence.',
    '<b>Security drone</b> — registered, with a declared purpose and a named responsible person.',
    '<b>Military drone</b> — NEMA, military, or specifically chartered security use.',
    '<b>Avatar chassis</b> — a body worked by a remote human, artificial mind or digital person.',
    '<b>Digital person</b> — a cognisant legal or disputed person. The chassis is a body.',
    '<b>Micro-robot</b> — below the threshold at which individual registration is practical.',
    '<b>Swarm</b> — many units under one controller, registered and insured as a single object.'
  ]},

  {t:'ladder', items:[
    { k:'O — Open',       n:'Consumer', v:'Sold over a counter. Registration on purchase, nothing further.' },
    { k:'L — Licensed',   n:'Trade',    v:'Requires a professional or vehicle licence. The commonest tier for anything useful.' },
    { k:'R — Restricted', n:'Declared', v:'Restricted ownership, continuing registration, and a declared purpose that can be checked.' },
    { k:'M — Military',   n:'Chartered',v:'Military, NEMA, or specifically chartered security use only.' },
    { k:'P — Prohibited', n:'Research', v:'Prohibited outside tightly controlled research or evidence authority.' },
    { k:'C — Classified', n:'—',        v:'Classified capability or existence. Not listed in a public index, including this one.' }
  ]},

  {t:'note', h:'THE TWO RATINGS THAT ACTUALLY MATTER',
    b:`<b>Maintenance rating</b> runs 1 to 5: owner tools, licensed garage, specialist shop with proprietary parts, manufacturer depot, strategic facility. <b>Network rating</b> runs 0 to 5 and sets the control range with it — 0 is a hundred feet of cable or optical beam, 1 is five hundred feet, 2 is two miles, 3 is ten miles or a professional vehicle relay, 4 is fifty miles on municipal Mesh or the emergency network, 5 is strategic, satellite or station host. A machine with a high network rating is more capable and less yours.`},

  {t:'prose', b:[
    `Weapon fitting is where the tiers bite. A non-lethal mount costs 5,000 to 15,000 credits and requires Restricted registration. A light weapon mount costs 20,000 plus the weapon and requires military access. A tactical mount is 60,000 plus the weapon. Lethal weapons require military authority or illegal modification, and there is no third option.`,
    `At the other end of the same list sits the <b>Ghost Identity Rebuild</b> at forty per cent of the drone's value — the illegal removal of a machine's ownership and route history. It is the single most common criminal modification in the region, and the trade's own warning is that failed work leaves hidden identifiers behind.`
  ]}

]},

{ k:'control', n:'How They Are Flown', kicker:'02 // Control and standing orders',
  lede:'Four ways to work a machine at a distance, each trading immediacy against the operator\'s own safety.',
  blocks:[

  {t:'cards', items:[
    { n:'Direct control', s:'Hands on',
      b:`An operator flying the machine, through a panel, a wrist display, a hardline or manual controls on the body itself. The unit runs on the operator's judgement <b>instead of</b> its own — not in addition to it. Both modes are competent. Assuming you have both at once is how people get hurt.` },
    { n:'Cold immersion', s:'Sensory, bounded',
      b:`The operator perceives through the machine while remaining aware of the room they are sitting in. The standard professional rig, and the one insurers prefer. A cold-immersion control rig runs about 25,000 credits.` },
    { n:'Hot immersion', s:'Full presence',
      b:`Deeper, faster, and carrying real risk to the operator — feedback trauma, disorientation, and the phenomenon the trade calls identity bleed. A tactical rig is 60,000 credits and is not sold to anyone without a medical clearance.` },
    { n:'Standing orders', s:'Nobody flying at all',
      b:`The machine works to recorded instructions. This is how most drones spend most of their service life, and it is where nearly every serious incident originates.` }
  ]},

  {t:'list', h:'STANDING ORDERS — the five every important drone should carry', items:[
    'Mission objective',
    'Authorised people',
    'Use-of-force limit',
    'Lost-contact behaviour',
    'Abort condition'
  ]},

  {t:'quote', b:'A dangerous order is vague: “Keep unauthorized people away.”',
    src:'OPERATOR CERTIFICATION // STANDING ORDERS MODULE'},

  {t:'note', h:'AND THE COROLLARY',
    b:`Machines follow what they were told, not what their owners later claim they meant. Every enquiry into a drone incident in the last decade has turned on the recorded wording of a standing order, and the operator who wrote it has been the person answering for it — not the manufacturer, not the software licensor, not the firm that owns the airframe.`}

]}

);
