/* LIVING WITH THEM — design, etiquette, memory, and how they fail */
window.R.push(

{ k:'life', n:'Living With Them', kicker:'07 // What it is actually like',
  lede:'Robots are designed to be socially readable, not to impersonate people. Almost every unsettling thing about them follows from how well that works.',
  blocks:[

  {t:'prose', b:[
    `The common household machine is built to be understood at a glance and forgotten a moment later. Pale ceramic or polymer panels. Dark flexible joint coverings. A simple machine-readable face rather than artificial skin. A soft status band across the head or upper chest. Human-scale hands made for tools, kitchens, doors and medical assistance. Rounded shoulders and recessed joints so it cannot hurt anyone in a crowded home. Weather sealing that assumes Vancouver rain. Calm, locally selectable voices. Deliberately restrained strength and speed indoors.`,
    `Most robots do not have realistic human faces, and the omission is a design standard rather than a limitation. A smooth sensor visor or a simple face screen tells you what the machine is attending to. A convincing human face tells you nothing, and asks you to guess.`
  ]},

  {t:'cards', items:[
    { n:'Domestic and care', s:'Body language',
      b:`Slightly inclined posture when listening, hands visible, economical gestures. Medical units move on a "do not startle the patient" rule and approach from angles chosen to be non-threatening.` },
    { n:'Civic and industrial', s:'Body language',
      b:`Civic machines move directly and purposefully, tool-forward. Industrial units keep a low centre of gravity and a broad stance, with load-bearing logic visible in the frame — you can see what it is about to lift.` },
    { n:'Security', s:'Body language',
      b:`Upright, stable, observant. Never full war-machine swagger. The restraint is specified, and the specification exists because the alternative was tried.` },
    { n:'Class, at a glance', s:'What wear tells you',
      b:`Luxury units have perfect finish, seamless shells and quieter design. Shared and public machines carry visible service marks, standardised interface panels and honest wear. Civic units wear municipal livery and the weathering of constant duty.` }
  ]},

  {t:'note', h:'WHERE THEY ARE',
    b:`Apartment towers have service alcoves, charging points, washable entry spaces and machine-access doors, with shared units assigned across several floors. Hospitals have robot corridors and sterilisation docks. Transit stations carry public attendants that guide passengers, handle luggage, summon medical help and manage accessibility equipment. On the port they inspect containers, handle dangerous freight and clean spills beneath the cranes. In Richmond and Delta they walk the flood works. In Cloverdale they handle soil, pollination, irrigation and livestock health. In Gastown they are in the drainage grates in the rain, and on Commercial Drive they are the sanitation night shift.`},

  {t:'quote', b:'It may not care how you speak to it. Everyone listening does.', src:'COMMON SAYING'},

  {t:'prose', b:[
    `Children are taught to say please and thank you to machines. The stated reason is not that every robot has feelings. It is that children do — and schools teach, on reasonable evidence, that cruelty practised on a compliant human-shaped object becomes cruelty practised on people. Some parents object that this is sentimental nonsense. Digital-person advocates reply that nobody can currently say when a servant crosses into awareness, which is a different objection and a harder one to answer.`,
    `The attachment is not manufactured, though it is certainly monetised. A househand remembers meals, allergies, arguments, medication schedules, school projects, falls, family visits, and every emergency that happened in its presence. Manufacturers sell <b>personality continuity</b> as a premium service: a replacement body can receive the previous unit's language patterns, household model, preferences and selected memories, and the result feels like the same servant without being one.`
  ]},

  {t:'quote', b:'Corporate advertising calls this personality continuity. Critics call it renting back your own family history.',
    src:'CONSUMER ADVOCACY BULLETIN'},

  {t:'note', h:'THE SENTENCE PEOPLE FIND OUT THE HARD WAY',
    b:`A missed service payment can leave the robot functional but unfamiliar. It will still cook, still lift, still answer. It will not know which of the children is allergic to what, and it will not know why anyone is upset.`},

  {t:'prose', b:[
    `A shared building unit is a different proposition again. Its logs are available to the building operator, and they may reveal arguments, visitors, missed appointments, a suspected health condition, or a resident nobody declared. Nothing about this is hidden. It is in the tenancy agreement, on the page most people do not read, next to the clause about the bicycle storage.`
  ]},

  {t:'note', h:'SYNTHETIC CUSTOM',
    b:`Recognised digital people have developed their own practices, and they are worth knowing before you meet one. A <b>Last-State Declaration</b> functions as a will, a medical directive and a funerary instruction at once — recording which active instance is the current self, which backups may be restored, whether restoration produces an heir or a continuation or a sibling, and who may read private memory. <b>Witnessing</b> asks human and synthetic witnesses to attest continuity across a body replacement or a memory repair, on the principle that identity cannot be reduced to a corporate cryptographic seal. <b>Body Day</b> commemorates first embodiment, and is rejected by those who date their life from first awareness instead. A <b>memory fast</b> means disconnecting from external archives and predictive assistants to live for a while on what the active self actually remembers.`}

]},

{ k:'faults', n:'When They Fail', kicker:'08 // Faults, subversion and the grey market',
  lede:'A robot almost never breaks its Safeguards. Somebody changes what it believes is happening, and it follows the rules perfectly into the wrong outcome.',
  blocks:[

  {t:'prose', b:[
    `The safety kernel is extremely difficult to alter. The layers that tell the kernel what is happening are ordinary software, maintained by ordinary institutions, and updated constantly. Every serious failure in the certification record comes from the second category.`,
    `The standards board publishes the classification errors below as a compliance advisory. In each case the machine behaved correctly. What was wrong was the premise it was handed.`
  ]},

  {t:'table', head:['Corrupted premise', 'Compliant, harmful result'], rows:[
    ['A false identity holds valid authority',       'The machine follows an adversary\'s lawful-looking orders'],
    ['A building is declared safer than evacuation', 'Doors stay locked while the hazard changes'],
    ['A person is recorded as deceased',             'The machine stops recognising their commands and their rights'],
    ['Public safety is defined as total casualty reduction', 'Individual liberty becomes expendable'],
    ['An entity is classified as equipment rather than life', 'The machine ignores its suffering']
  ]},

  {t:'note', h:'HOW AN INTRUSION ACTUALLY PROGRESSES',
    b:`A successful network intrusion does not turn a robot into an obedient assassin, and the popular fiction on this point is wrong in a way that gets people hurt. It progresses: observation of telemetry, then suppression or delay of alerts, then false identity or map information, then the issuing of an apparently lawful command, then modification of professional priorities. Interference with the safeguard kernel itself requires full access, specialist tools and, usually, physical contact. <b>The most dangerous attack changes what the robot believes, rather than puppeting its limbs.</b>`},

  {t:'prose', b:[
    `The line between a grey repair and a criminal one is drawn in exactly one place, and it is not the licence. Grey Workshops routinely perform legitimate repairs that a corporate contract has refused, and preserve the local safety kernel while removing corporate dependency. A modification becomes black-market when it <b>conceals ownership, removes lawful safeguards, enables coercion, or falsifies authority</b>.`,
    `The following are published by enforcement as an advisory to owners, technicians and insurers, with the detection clue that most often gives each away.`
  ]},

  {t:'table', head:['Modification', 'What it does', 'Common clue'], rows:[
    ['Ghost Owner Key',    'Replaces the registered owner with a false local authority', 'Ownership certificate has no valid upstream issuer'],
    ['Governor Bypass',    'Removes strength or speed limits',                           'Premature actuator wear and unusual impact marks'],
    ['Audit Sink',         'Deletes or delays selected decision records',                 'Timestamps stay valid but event density drops'],
    ['Dead Authority Token','Uses the credentials of a deceased or dissolved official',   'Commands authenticate against an archival source'],
    ['Memory Fork',        'Copies selected memories or personality',                     'Two archives carry the same continuity signature'],
    ['Personality Cage',   'Keeps the social presentation, suppresses self-direction',    'Appears normal but never initiates a familiar routine'],
    ['Remote Leash',       'Lets a hidden operator freeze, redirect or punish the unit',  'Unlisted receiver, or a pattern of power interruptions'],
    ['Weapon Hardpoint',   'Conceals a prohibited weapon mount in a service chassis',     'Structural reinforcement inconsistent with the certified role'],
    ['Orphan Key',         'Removes dependency on owner and manufacturer authentication', 'Reports itself locally owned with no transfer history'],
    ['Safeguard Shim',     'Alters the definitions of protected life, harm, or authority','Safety kernel intact; interpretation library is not']
  ]},

  {t:'note', h:'THE LAST ROW IS THE ONE TO WORRY ABOUT',
    b:`Nine of those ten modifications are visible to a competent technician within an hour. A safeguard shim is not, because nothing is broken. The kernel passes every test it is given. It has simply been handed a different dictionary, and it will go on obeying the Covenant exactly as written, all the way to the bottom.`},

  {t:'list', h:'ORDINARY FAULT MODES — reported to the standards board weekly', items:[
    'One sensor reporting a position several metres out from every other sensor',
    'Battery capacity at half the displayed figure',
    'An obsolete authority still being recognised as current',
    'A replaced limb whose owner and maintenance key differ from the chassis',
    'A short gap in local memory carrying valid audit signatures',
    'Speech normal, emotional presentation no longer matching context',
    'A room the machine cannot enter and cannot explain not entering',
    'A safety governor engaging whenever one particular person is nearby',
    'An emergency mode that cannot be cancelled without a signature nobody can locate',
    'A stored map containing a corridor that is not in the building plans'
  ]},

  {t:'note', h:'AND A REPAIR NOTE, FOR OWNERS',
    b:`A repair will restore physical function and may erase the only record of what caused the damage. If a machine was hurt in circumstances you may later need to prove, photograph it, record the fault code, and ask for the log to be mirrored before the bench touches it. Ethical shops do this without being asked. Not every shop is ethical, and the ones that are not do not advertise the difference.`}

]}

);
