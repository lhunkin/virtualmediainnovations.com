/* THE TECHNOLOGY AND THE LAW */
window.R.push(

{ k:'tech', n:'What Changed and What Did Not', kicker:'01 // The technology',
  lede:'Six improvements, one of which is not an improvement at all.',
  blocks:[

  {t:'list', h:'WHAT SEVENTY YEARS ACTUALLY BOUGHT', items:[
    '<b>Advanced propellant.</b> Clean-burning conventional powder, layered caseless propellant and electrothermally assisted ignition let shorter barrels produce useful velocity.',
    '<b>Composite construction.</b> Ceramic liners, memory-metal feed lips and carbon-polymer receivers reduce weight — without making anything indestructible.',
    '<b>Smart fire control.</b> An authorised weapon identifies its user, displays its ammunition, calculates lead, records the firing event and talks to goggles, cybernetic eyes or drones.',
    '<b>Recoil management.</b> Counter-mass bolts, active stocks and predictive muzzle compensation make large calibres manageable, especially for augmented shooters.',
    '<b>Ammunition specialisation.</b> One action may fire ball, hollow-point, armour-piercing, frangible, gel, silver-coated or ramjet rounds, provided chamber pressure and feed geometry allow it.',
    '<b>The dependency problem.</b> High-end weapons need licensed ammunition, authenticated magazines, firmware, proprietary parts and manufacturer service. A cheap mechanical weapon stays functional for generations.'
  ]},

  {t:'note', h:'THE SIXTH ONE IS THE ONE TO THINK ABOUT',
    b:`Five of those are engineering. The sixth is a business model, and it is the reason the most sophisticated weapon in a room is not always the one that will still work in it. A Fraser pistol can be field-stripped without electronic tools. A Harker-Morrow service rifle cannot be fed at all without the manufacturer's ammunition blocks.`},

  {t:'ladder', items:[
    { k:'Smart-0', n:'Mechanical', v:'May carry a round counter and an optic. Requires no authentication, repairs with ordinary tools, and cannot be remotely disabled.' },
    { k:'Smart-1', n:'Local',      v:'Stores approved users locally and pairs with goggles or implants. Biometric grip, chamber display, ballistic computer, firing-event log. Works without the Mesh — though a damaged authentication module can lock it.' },
    { k:'Smart-2', n:'Networked',  v:'Verifies licence status, assignment, geography and authorised ammunition through the Common Mesh. Remote armoury management, automatic evidence upload, discharge reporting, remote safe mode.' }
  ]},

  {t:'note', h:'A SMART-2 WEAPON MAY SIMPLY DECLINE',
    b:`It can refuse to fire because its owner, its licence, its location or its mission authorisation cannot be verified. Military versions carry an emergency hard-local mode, and reaching it requires armoury credentials. This is the single most important practical fact about a modern service weapon, and it is not printed on the box.`},

  {t:'prose', b:[
    `<b>Hard-local conversion</b> — de-networking a weapon so that it fires regardless of what any authority thinks — costs 500 to 2,000 credits from a weapons engineer or a competent illicit armourer. It removes the remote lock and the network authentication, preserves the mechanical firing, removes the wireless evidence upload, usually costs a point of accuracy, voids the warranty, leaves a visible tamper flag on any later inspection, and <b>turns a normally lawful weapon into restricted or prohibited equipment.</b>`,
    `<b>Ramjet</b> is the flagship commercial technology and the most misunderstood. It is the trade name for a family of two-stage boosted projectiles: atmospheric versions use a microscopic air-breathing duct, orbital versions a sealed micro-rocket with its own oxidiser. The round leaves the barrel at conventional velocity and only begins accelerating once it has reached a safe distance. A weapon must be marked <b>RJ-compatible</b> — firing ramjet ammunition from an unsuitable firearm destroys the action and may injure the shooter. Vacuum-rated rounds are marked <b>V-RJ</b>.`,
    `Ramjet cannot be suppressed, carries a distinctive thermal and acoustic signature, and leaves a flight path that sensors can often reconstruct afterwards. It is a long-range technology and a poor secret.`
  ]},

  {t:'quote', b:'An M-grade load is not simply a better armour-piercing bullet. The weapon must be specifically chambered, lined and authorised to use it.',
    src:'ORDNANCE STANDARDS BOARD // AMMUNITION CLASSIFICATION'}

]},

{ k:'law', n:'Access and the Law', kicker:'02 // Who may hold what',
  lede:'Five classifications, and a great many weapons that carry two of them at once.',
  blocks:[

  {t:'table', head:['Code', 'Classification', 'What it takes'], rows:[
    ['C — Civilian',   'Ordinary lawful ownership',      'An adult with an appropriate Civic Identity Record and a local firearm licence. Carrying remains jurisdiction-dependent.'],
    ['L — Licensed',   'Security, wilderness, industrial, competitive or professional use', 'An occupational endorsement.'],
    ['R — Restricted', 'Police, licensed enhanced-person security, corporate tactical personnel, specially authorised investigators', 'Authorisation attached to a role, not a person.'],
    ['M — Military',   'NEMA, national armed forces, approved military contractors', '<b>Private possession is a major offence.</b>'],
    ['X — Prohibited', 'Covert, experimental or strategic equipment', 'No normal civilian ownership path exists.']
  ]},

  {t:'note', h:'ASSIGNMENT-LINKED EQUIPMENT',
    b:`Vancouver treats most Restricted and all Military weapons as equipment attached to a duty rather than to a person. A security officer may be authorised to hold a weapon during a shift and not to take it home. A covert organisation can issue temporary credentials — and the weapon's own logs may later prove the credential was fraudulent. The equipment usually belongs to the employer, which means that losing employment can mean losing lawful access to the entire package on the same afternoon.`},

  {t:'quote', b:'A 7.62mm machine gun can be owned by an appropriately licensed company. A 30mm autocannon is military property. A 120mm tank gun is a continental strategic asset.',
    src:'ORDNANCE ESCALATION // PUBLIC SUMMARY'},

  {t:'prose', b:[
    `The rest of that ladder is worth finishing. A guided bomb is tracked from assembly to final deployment. A rail cannon cannot be legally moved without generating multiple customs, NEMA and satellite-surveillance records. At the top of the scale, the question stops being whether a thing is legal and becomes whether it can be moved without three governments noticing.`,
    `Ammunition is licensed separately from the weapon and on its own scale. Heavy armour-piercing is Restricted or Military and closely tracked. Ramjet-AP is Military or prohibited. Silver armour-piercing is normally NEMA-controlled. It is entirely possible to hold a lawful weapon and commit a serious offence by loading it.`
  ]},

  {t:'cards', items:[
    { n:'Enforcement by the weapon itself', s:'The distinctive mechanism',
      b:`Removing an evidence module, a recording module or an ammunition-identification chip puts a weapon into safe mode. A hard-local conversion leaves a tamper flag. Blackglass maintains a microscopic ballistic signature library for every legal production lot, and one of its precision barrels records a pressure history for every shot fired through it. Enforcement in 2098 is not principally done by police.` },
    { n:'Environmental mandates', s:'Where you are decides what you may load',
      b:`Northstar requires frangible ammunition in most pressurised civilian station compartments, because a missed shot in a habitat is a decompression event. Frangible rounds are standard aboard aircraft, orbital habitats, pressure facilities, hospitals, reactor complexes and crowded transit hubs. Loading armour-piercing into a station-rated pistol voids its pressure-facility certification.` },
    { n:'Jurisdiction', s:'And the contradictions in it',
      b:`Aegis policy often forbids hollow-point in crowded public facilities on liability grounds, while some jurisdictions <i>require</i> expanding ammunition to reduce overpenetration. A precision rifle legal in the Fraser Valley may be Restricted in an urban jurisdiction four kilometres away. Carrying law is local and the licence is not.` }
  ]}

]}

);
