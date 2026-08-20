/* ============================================================
   HAVELOCK WORLD INDEX // EQUIPMENT
   e-core.js — scaffolding

   The ARSENAL catalogue: 136 profiles across seventeen chapters
   and forty-six manufacturers. The site does not reproduce the
   catalogue — it explains the systems that sit underneath it,
   which are the part that changes how a scene plays.

   PLAYER-SAFE. Stripped on the way in: all game mechanics, the
   "After the Fall" field on every profile, all post-Golden-Age
   and anomalous material, every classified programme, and the
   source-crosswalk apparatus.

   Reuses the robotics renderer — same globals, same element
   IDs, so robotics.js and robotics.css drive this page without
   modification.
   ============================================================ */

window.R_META = {
  head: 'EQUIPMENT',
  sub:  'A supplement to the Havelock World Index // revised 2098.06',

  lede: `In the Last Bright Age, buying an object is only one part of possessing it.`,

  intro: `Tactical, medical, drone, vehicle, cybernetic and powered equipment each carries an owner record, a licence, a maintenance source, a software authority, a storage location, a consumable chain, and an insurance or institutional response. A receipt establishes none of those. This supplement covers the seven things that decide whether a piece of equipment is actually yours, and what each of them costs when it turns out not to be.`,

  stats: [
    ['17',  'Chapters, communications to orbital'],
    ['136', 'Equipment profiles'],
    ['46',  'Named manufacturers and institutions'],
    ['6',   'Access codes, Open to Classified'],
    ['1–6', 'Availability, same-day to campaign objective']
  ],

  foot: `The principle that runs under all of it: <b>no strategic machine is made by one logo.</b> Armour depends on Blackglass, medicine on Helix-Kestrel or Solace, data on Pacifica, power on Meridian, transport on half a dozen others. A badge on a housing is a service relationship, and the question worth asking about any expensive object is not who sold it to you but how many separate organisations have to keep agreeing for it to go on working.`
};

window.R = [];
