/* ============================================================
   HAVELOCK WORLD INDEX // VEHICLES AND STREET MACHINES
   v-core.js — scaffolding

   A public supplement covering how people and freight move in
   2098: what the streets look like, who builds the machines,
   what they cost, and what a licence actually gets you.

   PLAYER-SAFE. Stripped on the way in: all game mechanics,
   everything about what happens after this year, all NEMA
   hardware, and every out-of-character note.

   This page reuses the robotics renderer. It defines the same
   globals (R_META, R) and the same element IDs, so robotics.js
   and robotics.css drive it without modification.

   Block types: prose · cards · ladder · table · quote · note ·
   stats · list · plate · gallery. See robotics/r-core.js.
   ============================================================ */

window.R_META = {
  head: 'VEHICLES AND STREET MACHINES',
  sub:  'A supplement to the Havelock World Index // revised 2098.06',

  lede: `Traffic is not a skill in 2098. It is a utility — negotiated, metered, logged and billed, like water.`,

  intro: `Most residents never drive. The vehicle negotiates route access, traffic separation, tolls, weather diversions, emergency corridors and charging, and the occupant arrives without having made a decision. That arrangement is safe, efficient and almost entirely invisible, which is why it is worth reading about: a system nobody notices is a system nobody audits.`,

  stats: [
    ['20 – 35',  'mph — pedestrian and interior districts'],
    ['50 – 75',  'mph — ordinary urban lanes'],
    ['100 – 125','mph — urban express corridors'],
    ['125 – 155','mph — intercity smart highway'],
    ['150 – 300','mph — low-altitude AV corridor']
  ],

  foot: `A vehicle's listed speed is its physical maximum under favourable conditions. It is not permission to use that speed on Georgia Street. And a reminder that catches out more travellers than any mechanical fault: a person may own a car outright and still be refused a particular route because of weather, insurance, licence status, unpaid maintenance, a public-safety order, or a disputed Civic Identity Record.`
};

window.R = [];
