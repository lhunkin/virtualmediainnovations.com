/* ============================================================
   DRONES AND REMOTE SYSTEMS — SUMMARY AND HAND-OFF

   NOTE FOR LARRY: this used to be derived content, because the
   robots document was written to sit after a drones chapter
   that was not supplied. That chapter has since turned up —
   "Eyes, Hands, and Swarms" — and is now a supplement of its
   own at /havelock/drones.html, built from the real canon:
   eight legal categories, six access codes, four control modes,
   standing orders, and the full catalogue from sensor motes to
   persistent high-altitude surveillance.

   What remains here is the part that belongs on a robotics
   page: where the judgement lives, the operator rule, and the
   line between a bounded machine and a person. Everything
   catalogue-shaped moved.
   ============================================================ */
window.R.push(

{ k:'drones', n:'Drones and Remote Systems', kicker:'04 // Machines without a body of their own',
  lede:'A drone is not a small robot. It is a machine that has agreed, in advance, to be somebody else\'s hands.',
  blocks:[

  {t:'prose', b:[
    `The distinction the law cares about is not size or shape but where the judgement lives. An embodied robot carries its own certified purpose and answers for its own decisions inside it. A drone is operated — by a person, by a handler machine, or by a coordination network — and its behaviour is a property of that relationship rather than of the airframe.`,
    `This is why drones are not counted in the population figures. Microdrones and disposable sensor motes are equipment in the way a torch is equipment. Nobody proposes that a torch be certified, and nobody has yet made a convincing argument that ten thousand of them together should be.`
  ]},

  {t:'plate', img:'landslide-handler', ref:'PLATE 4.1',
   alt:'Rescue machines and responders working a landslide with small drones overhead',
   cap:`A handler unit working a slide with responders. The machine on the ground is certified and answerable. The drones above it are not certified, are not audited, and belong — legally — to whoever released them. Where liability sits if one of them injures somebody has been litigated four times and settled differently each time.`},

  {t:'note', h:'THE OPERATOR RULE',
    b:`The single most important line in remote-systems practice, and the one most often got wrong by people who ought to know better. <b>A unit under direct control runs on its operator's judgement instead of its own — not in addition to it.</b> A trained controller can make a rescue machine faster and more decisive than it would ever be alone. That same controller has, in taking the link, replaced the machine's own hazard model with their own. Both modes are competent. Assuming you have both at once is how people get hurt.`},

  {t:'note', h:'THE FULL CATALOGUE IS A SUPPLEMENT OF ITS OWN',
    b:`Eight legal categories, six access codes, four control modes, and roughly seventy machines from a 300-credit disposable sensor mote to a 650,000-credit persistent high-altitude flying wing — <a href="/havelock/drones.html">Drones and Remote Systems</a> covers all of it, along with swarms, micro-repair systems, and the five standing orders every important drone should carry.`},

  {t:'gallery', h:'THE VISIBLE LAYER', items:[
    {img:'field-drones', n:'Survey. ',
     cap:'Agricultural blocks flown on scheduled routing, the picture assembled by a ground unit that never leaves the row it is standing in.'},
    {img:'fire-drones', n:'Fire ground. ',
     cap:'Overhead thermal and a hose crew working the same incident. The drones see it four minutes earlier and cannot do anything about it.'},
    {img:'street-delivery', n:'Courier traffic. ',
     cap:'The commonest drone incident is not a mechanical failure. It is a routing instruction that authenticated correctly and should not have.'},
    {img:'fire-suppression', n:'The spent machine. ',
     cap:'Doctrine in one frame: put the equipment where the person would have had to stand, and lose the equipment.'}
  ]},

  {t:'note', h:'THE ETHICAL DESIGN RULE',
    b:`A lawful breach courier may not contain a persistent social personality, a human-derived memory model, a childlike voice, a personhood-capable learning architecture, or a concealed passenger mind. The rule is not squeamishness. It exists because asking a socially aware machine to knowingly destroy itself turned out to be politically intolerable, and the industry would rather be forbidden from building one than have to argue about it again.`},

  {t:'prose', b:[
    `Military and emergency units do not run on the Three Safeguards at all. They operate under a separate restricted directive set — the <b>Human Command and Engagement Annex</b> — which permits force against authenticated hostile targets while retaining civilian, surrender, medical and proportionality protections. The practical detail worth carrying: <b>an ordinary member of the public cannot command or redirect one.</b> Not by speaking to it, not by presenting credentials, not in an emergency.`,
    `NEMA distributes its combat and rescue units among human-led formations rather than assembling independent robot forces. Doctrine is explicit about why: the machines exist to support human operatives, recover the wounded, clear debris, provide cover, and be spent instead of people.`
  ]},

  {t:'plate', img:'night-response', ref:'PLATE 4.2',
   alt:'A night emergency scene with responders, blue lights and heavy machines in the rain',
   cap:`Units operating under the Annex, alongside the people they are there to spend themselves for. Nothing in this frame will take an instruction from a member of the public — not from a bystander, not from someone presenting credentials, not in an emergency. That is the design, and on a night like this it is also the point.`},

  {t:'note', h:'A DISTINCTION WORTH KNOWING BEFORE YOU NEED IT',
    b:`A NEMA combat drone is bounded equipment. A <b>synthetic volunteer</b> is a recognised digital person who has signed a service contract, holds rank, carries legal accountability, may refuse an unlawful order, cannot be copied to produce more soldiers without consent, and cannot be restored from a backup and quietly declared the same casualty returned to duty. If its continuity ends, it has been killed rather than destroyed. Mistaking one for the other has caused an international incident, and the two are not reliably distinguishable by looking.`},

  {t:'quote', b:'A synthetic body is not evidence of guilt. A biologically human body is not evidence of authenticity.',
    src:'NEW WESTMINSTER CONTINUITY DOCKET // STANDING GUIDANCE'},

  {t:'prose', b:[
    `Above all of it sits <b>LANTERN</b>, the NEMA orbital coordination network, linking Sentinel One, Northstar Crown, observation satellites, high-altitude aircraft, debris interceptors, emergency relays, and weather and wildfire platforms to ground command.`,
    `Its published functions are civil: tracking debris and uncontrolled spacecraft, predicting reentry corridors, mapping earthquakes, fires, floods and atmospheric events, restoring emergency communications, coordinating large evacuations, locating missing aircraft and vessels, designating safe landing and rescue zones, and monitoring unauthorised launches. What else LANTERN can do is not a matter of public record, and the Index does not speculate.`
  ]},

  {t:'note', h:'THE WHITE CROWN',
    b:`When LANTERN concentrates an observation and designation pass over a specific place, it is visible from the ground: a broad pale column through cloud, a moving lattice of white-blue lines, scattered reflection across rain and glass, briefly lit aerosol and marine haze, over a defined area a few hundred metres across. The light is scanning and ranging. Vancouver residents call it the White Crown, over the continuing objection of Northstar, who would prefer it were called nothing at all. A White Crown over a neighbourhood means something there has drawn continental attention.`}

]}

);
