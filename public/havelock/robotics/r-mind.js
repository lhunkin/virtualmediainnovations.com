/* HOW A MACHINE DECIDES — safeguards, pipeline, classes, grades */
window.R.push(

{ k:'safeguards', n:'The Three Safeguards', kicker:'01 // How a machine decides',
  lede:'People call them the Three Laws. The instrument is the Alliance Robotics Covenant, and it does not say what most people think it says.',
  blocks:[

  {t:'quote', b:'Life before orders. Orders before self.', src:'THE COVENANT // PUBLIC SUMMARY'},

  {t:'cards', items:[
    { n:'Safeguard One', s:'Preservation of Life',
      b:`A robot must preserve protected life and must not knowingly cause injury except through the least-harmful action reasonably necessary to prevent greater immediate injury. Four conditions have to hold before it acts: reliable knowledge of the danger, reasonable ability to help, a lawful method of intervening, and a proportionate response. It is expected to catch a falling child, report a fire, interrupt an overdose, stop an impaired person driving, and refuse an instruction that creates immediate physical danger. It is not required to perform miracles. It does not walk into a reactor without protective equipment because someone might be inside.` },
    { n:'Safeguard Two', s:'Authenticated Service',
      b:`A robot must carry out authenticated instructions from an authorised person or institution within its certified purpose, unless the instruction conflicts with Preservation of Life. This is <b>not</b> "obey any human", and the difference matters more than any other sentence in the Covenant. Every command is checked against identity, authority, jurisdiction, certified purpose, current emergency state, foreseeable harm, and any restriction attached to the person, the place or the task. A stranger cannot order a delivery robot to hand over its cargo. A child cannot instruct a househand to run dangerous machinery. An executive cannot redirect a municipal rescue unit without incident authority.` },
    { n:'Safeguard Three', s:'Continuity and Accountability',
      b:`A robot must preserve its own functioning, memory integrity, evidence record and ability to complete lawful service, unless doing so conflicts with the first two. It keeps operational memory, chain-of-custody records, patient data, evidence logs, enough power to summon help, and the memory state needed to explain what it did. It may refuse an order to erase logs, conceal an injury, destroy evidence, or keep working with a dangerous unreported fault. The practical consequence is easy to miss and hard to overstate: <b>the machine is often a witness.</b>` }
  ]},

  {t:'note', h:'PROTECTED LIFE — WHO COUNTS',
    b:`Verified humans. Persons reasonably believed to be human. Legally recognised digital persons. Patients and dependants inside the robot's certified role. Animals, where they fall within its care or public-safety function. Note the shape of that list: it is not a description of who is alive. It is a description of who the machine has been told is alive.`},

  {t:'list', h:'THE DECISION PIPELINE', items:[
    'Sensor input',
    'Person and hazard classification',
    'Identity and authority verification',
    'Certified role and jurisdiction',
    'Harm prediction and proportionality',
    'Safeguard hierarchy',
    'Action, refusal, clarification, or safe mode',
    'Tamper-evident decision record'
  ]},

  {t:'prose', b:[
    `Read that pipeline again and notice how little of it is the machine's own judgement. The safety kernel at the bottom is extremely difficult to alter, and nobody serious tries. The layers that tell the kernel what is happening are ordinary software maintained by ordinary institutions.`,
    `Every robotics ethicist in the Alliance says some version of the same sentence, and the standards board prints it on the first page of the certification handbook.`
  ]},

  {t:'quote', b:'The machine does not have to break its Safeguards. Someone only has to change who counts, what harm means, or whose order is valid.',
    src:'ALLIANCE ROBOTICS STANDARDS BOARD // CERTIFICATION HANDBOOK, PAGE ONE'},

  {t:'list', h:'WHAT A MACHINE MAY NEVER DECIDE — even under emergency authority', items:[
    'Deliberate execution',
    'Erasure of a required decision record',
    'Permanent seizure of property without review',
    'Rewriting its own safeguard kernel',
    'Impersonating a human official',
    'Concealing the authority under which it acted'
  ]},

  {t:'note', h:'THE SAFEGUARDS DO NOT BIND PERSONS',
    b:`A common and consequential misunderstanding. The Three Safeguards govern <i>service agents</i>. They do not govern a legally recognised person who happens to live in a manufactured body — because if they did, every digital person would be permanently compelled to obey human orders, and personhood would be decoration. A recognised person's chassis still carries collision avoidance, strength governors, weapons interlocks and evidence recording. Those are safety systems, comparable to the ones in an aerial vehicle or a power-assist suit. They do not make the occupant obey an owner.`},

  {t:'table', head:['Occupant', 'Governing framework'], rows:[
    ['Bounded service agent',              'Full Three Safeguards'],
    ['Human telepresence operator',        'Ordinary law, plus chassis safety systems'],
    ['Memorial personality',               'Three Safeguards, plus memory and privacy restrictions'],
    ['Mind under personhood review',       'Safeguard Two largely suspended; preservation order applies'],
    ['Recognised digital person',          'Civil and criminal law — not compulsory obedience'],
    ['NEMA or military unit',              'Human Command and Engagement Annex'],
    ['Synthetic volunteer',                'Military law and a voluntary service contract']
  ]}

]},

{ k:'classes', n:'Classes, Grades and Standing', kicker:'02 // How a machine is rated',
  lede:'Two scales, deliberately kept apart. What a machine is allowed to do, and how well it can think — and a modest mind with enormous authority is the more dangerous of the two.',
  blocks:[

  {t:'prose', b:[
    `The old argument about "true artificial intelligence versus mere automation" was abandoned as useless around the middle of the century. It was replaced by two ratings that are never treated as interchangeable: <b>Class</b>, which is where a machine is deployed and what it may lawfully do, and <b>Grade</b>, which is how much reasoning it can bring to the job.`,
    `Institutional minds carry two further numbers on top: <b>authority</b> — how much it may decide without a human — and <b>audit</b> — how thoroughly its decisions are recorded and reviewable. High audit is the single most reassuring figure on any certificate, and the one buyers most often trade away for price.`
  ]},

  {t:'ladder', items:[
    { k:'Class I — Instrumental',        n:'Grade 1',   v:'Narrow machine intelligence with little or no social model. A tool that happens to move.' },
    { k:'Class II — Service',            n:'Grade 2',   v:'Conversational assistant with bounded initiative. The overwhelming majority of machines people actually meet.' },
    { k:'Class III — Institutional',     n:'Grade 3–4', v:'Professional, organisational or infrastructure intelligence. Licensed to one field and expected to explain itself.' },
    { k:'Class IV — Research, Strategic', n:'Grade 4–5', v:'Broad planning, research, prediction or strategic coordination. Restricted access, heavy audit, named human authority.' },
    { k:'Class V — Digital Person',      n:'Varies',    v:'A legal status, not a power level. Recognised or disputed personhood.' },
    { k:'Class X — Unclassified',        n:'—',         v:'Reserved. No unit has been publicly assigned to it.' }
  ]},

  {t:'table', head:['Grade', 'What it can actually do'], rows:[
    ['Grade 1', 'Repeats narrow procedures. Does not generalise and is not expected to.'],
    ['Grade 2', 'Conversational and adaptive within one role. Will ask rather than guess.'],
    ['Grade 3', 'Professional planning and situational judgement inside one licensed field.'],
    ['Grade 4', 'Broad coordination and complex arbitration across several domains.'],
    ['Grade 5', 'Strategic planning. Rare, restricted, and always attached to a named human authority.']
  ]},

  {t:'stats', items:[
    ['~97 %',   'Grade 1–2 — bounded service and task machines'],
    ['~2.99 %', 'Grade 3 — licensed professional and institutional minds'],
    ['~0.01 %', 'Executive, strategic, emergent or person-level']
  ]},

  {t:'note', h:'A REPORTED CONTROVERSY',
    b:`Synthetic-rights organisations allege that manufacturers deliberately hold advanced servant models just below the legal threshold for personhood — capable enough to be sold as companions, bounded enough never to acquire standing. Manufacturers reject this. The Index records the allegation because it is made seriously, repeatedly, and by people with access to the specifications.`},

  {t:'prose', b:[
    `Most servant machines can converse convincingly, remember your preferences, apologise, express concern and adapt their behaviour without possessing a continuous subjective self. That is not a trick played on the customer; it is what the specification asks for and what the certification tests.`,
    `The legal problem is that some of them do have one.`
  ]},

  {t:'list', h:'LEGAL STANDING — NINE RUNGS', items:[
    '<b>Property.</b> No independent right to refuse transfer or shutdown.',
    '<b>Licensed autonomous system.</b> May act within a certified role, under human liability.',
    '<b>Household dependent.</b> Limited protection from arbitrary destruction; no contractual agency.',
    '<b>Corporate officer.</b> May authorise transactions inside a corporate charter.',
    '<b>Protected research subject.</b> Cannot be destroyed or altered without review, and remains confined.',
    '<b>Limited person.</b> Can hold some property, testify, contract, and refuse some modifications.',
    '<b>Full person.</b> Legal agency comparable to a human citizen.',
    '<b>Fugitive code.</b> Claims personhood, holds no recognised status.',
    '<b>Deceased human continuation.</b> A reconstructed personality with contested identity and inheritance.'
  ]},

  {t:'note', h:'CONNECTION MODEL — WHY TWO IDENTICAL MACHINES BEHAVE DIFFERENTLY',
    b:`An older locally-hosted unit runs on its own memory with periodic updates: independent, repairable, hard to commandeer, and working from stale information. A current unit runs on continuous Common Mesh support: fluent, capable, well coordinated, and wholly dependent on authentication and semantic updates it does not control. A Grey Workshop conversion runs on a local trust system: resistant to corporate control, legally awkward, and very difficult to certify. Same chassis. Three different machines.`}

]}

);
