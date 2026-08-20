/* ============================================================
   HAVELOCK WORLD INDEX // DRONES AND REMOTE SYSTEMS
   d-core.js — scaffolding

   Eyes, hands and swarms: micro-robots, minidrones, civil and
   professional machines, industrial and rescue systems, swarms,
   and the law that decides which of them you may own.

   PLAYER-SAFE. Stripped on the way in: all game mechanics, all
   NEMA hardware and doctrine, every classified line, and
   everything about what happens after this year.

   Reuses the robotics renderer — same globals, same element
   IDs, so robotics.js and robotics.css drive this page without
   modification.
   ============================================================ */

window.R_META = {
  head: 'DRONES AND REMOTE SYSTEMS',
  sub:  'A supplement to the Havelock World Index // revised 2098.06',

  lede: `A drone is not a small robot. It is a machine that has agreed, in advance, to be somebody else's hands.`,

  intro: `The distinction the law cares about is not size or shape but where the judgement lives. An embodied robot carries its own certified purpose and answers for decisions inside it. A drone is operated — by a person, by a handler machine, or by a coordination network — and its behaviour is a property of that relationship rather than of the airframe. This is why the population figures exclude them: a disposable sensor mote is equipment in the way a torch is equipment, and nobody has yet made a convincing argument that ten thousand of them together are anything else.`,

  stats: [
    ['Mote',   'Disposable, uncounted, everywhere'],
    ['Micro',  'Hand-sized; single task, short endurance'],
    ['Mini',   'The commonest professional class'],
    ['Small',  'Carries tools, cargo or a casualty'],
    ['Medium', 'Industrial, rescue and security work'],
    ['Heavy',  'Structural, orbital and strategic']
  ],

  foot: `Two things worth carrying away. Every important drone should have five recorded instructions — objective, authorised people, use-of-force limit, lost-contact behaviour, abort condition — and a vague order is a dangerous one. And the sentence that has decided more enquiries than any other: <b>machines follow what they were told, not what their owners later claim they meant.</b>`
};

window.R = [];
