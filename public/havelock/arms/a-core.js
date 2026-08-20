/* ============================================================
   HAVELOCK WORLD INDEX // ARMS AND ORDNANCE
   a-core.js — scaffolding

   What a weapon is in 2098: a pressure chamber that also files
   a report. Covers the technology, the access ladder, the
   eleven manufacturers, the catalogue, doctrine, and the record
   every discharge leaves behind.

   PLAYER-SAFE. Stripped on the way in: all game mechanics, all
   supernatural and post-Golden-Age material, the manufacturers'
   "collapse value" lines, every adventure seed, and Muir Point.

   Reuses the robotics renderer — same globals, same element
   IDs, so robotics.js and robotics.css drive this page without
   modification.
   ============================================================ */

window.R_META = {
  head: 'ARMS AND ORDNANCE',
  sub:  'A supplement to the Havelock World Index // revised 2098.06',

  lede: `A firearm in 2098 contains a pressure chamber, launches a projectile, and must survive heat, fouling, recoil and abuse. The Golden Age improved the materials, the propellants, the tolerances and the optics. It has not abolished physics.`,

  intro: `There is no ray gun. Conventional chemical firearms remain the dominant weapons of civilian defence, police work, corporate security, organised crime and most covert operations, because they are inexpensive, reliable and effective. Lasers, rail weapons and true military-grade ordnance exist and are expensive, restricted and politically explosive — which is a description of the law rather than of the engineering.`,

  stats: [
    ['C',  'Civilian — licence and identity record'],
    ['L',  'Licensed — occupational endorsement'],
    ['R',  'Restricted — police and corporate tactical'],
    ['M',  'Military — private possession a major offence'],
    ['X',  'Prohibited — no civilian ownership path']
  ],

  foot: `Two cautions. The existence of a weapon in a catalogue does not mean it is commercially available — a great many entries here are listed so that a reader can recognise one, not acquire one. And the second, which surprises people more: in 2098 a weapon is an evidence-generating device. It records who fired it, when, with what, and in which direction, and that record has acquitted about as many people as it has convicted.`
};

window.R = [];
