/* ============================================================
   HAVELOCK WORLD INDEX // THE HIGH FRONTIER
   f-core.js — scaffolding

   Getting to orbit, what it costs, what flies, what you wear,
   and what it takes to keep a spacecraft legal.

   PLAYER-SAFE. Stripped on the way in: all game mechanics, all
   NEMA hardware, and everything about what happens after this
   year.

   Reuses the robotics renderer — same globals, same element
   IDs, so robotics.js and robotics.css drive this page without
   modification.
   ============================================================ */

window.R_META = {
  head: 'THE HIGH FRONTIER',
  sub:  'A supplement to the Havelock World Index // revised 2098.06',

  lede: `There are no faster-than-light drives, no reactionless engines and no public artificial gravity. Every journey is bounded by radiation, heat, reaction mass, orbital mechanics and delayed communication.`,

  intro: `Passengers pass through departure lounges, medical screening, customs, pressure-suit fitting and identity verification much as earlier generations passed through international airports. That is the honest measure of how routine this has become — and it conceals the fact that nothing about it is forgiving. A mislabelled cargo container can kill everyone aboard.`,

  stats: [
    ['~100,000', 'People living beyond Earth for part of the year'],
    ['< 400',    'Stationed anywhere near Mars'],
    ['18,000 cr','Spaceplane seat to orbit — the fast way'],
    ['4,000 cr', 'Equatorial lift seat — the slow way'],
    ['8 – 15 %', 'Of purchase price, per year, to maintain a craft']
  ],

  foot: `A note on who actually goes. Employers, national programmes, universities, military services and orbital contractors usually pay worker fares — a technician may travel to orbit several times without ever personally buying a ticket. Roughly a hundred thousand people live off Earth, and they are supported by millions who never leave it.`
};

window.R = [];
