/* ============================================================
   HAVELOCK OFFICE // STRATEGIC CONTINUITY INDEX
   sf-core.js — SUBJECT FILE REGISTRY

   Havelock does not keep a dossier on a capable person. It keeps
   fragments, in separate compartments, filed by whichever office
   generated them. A registry entry here, an acquisition memo
   there, a disposition record in asset custody, a standing
   instruction in legal. No single office holds a complete
   picture and no procedure exists for assembling one.

   This node is the first place the fragments have ever appeared
   on the same screen. That is not a feature. It is what happens
   when somebody reads a database faster than it can refuse.

   ── ADDING A SUBJECT ────────────────────────────────────────
   One file per subject in this directory, loaded in order by
   index.html. Each file ends with a push into the registry:

     window.O4_SF.subjects.push({ ... })

   Subject shape:
     k      short key for the filter chip
     code   Havelock subject file reference
     n      name as filed
     alias  operating name
     cls    class per NEMA
     nema   status per the NEMA registry
     hvlk   status per Havelock  ← these two are meant to disagree
     sum    one-line index summary
     docs   [ document, document, ... ]

   Document shape:
     ref    document reference
     kind   what sort of document it is
     src    originating compartment
     cls    classification
     d      date
     fields [[label, value], ...]   optional
     b      body HTML                optional
     note   annotation               optional
     flag   red-flagged line         optional
   ============================================================ */

window.O4_SF = {

head: 'REGISTRY.SUBJECT // CAPABLE PERSONS — LEGACY COHORT',

intro: 'Files held on capable persons who operated in the Pacific before the Special Measures framework. Status is carried in two columns because two organisations maintain it. Where the columns disagree, both are correct within the system that produced them.',

/* ── The event that produced five of the seven statuses ──── */
event: {
  ref:'EV-2095-0211',
  d:'2095.02.11',
  name:'[OPERATION NAME NOT CARRIED IN THIS COMPARTMENT]',
  head:'COHORT TERMINATION EVENT',
  intro:'One night. Six capable persons entered a facility they had spent fourteen months identifying. What follows is assembled from four compartments that do not share data, which is why the times do not agree.',
  lines:[
    {t:'22:40', e:'Perimeter telemetry loss, sectors 3 through 7', n:'Attributed at the time to a spoofing device of non-commercial manufacture. Device recovered. Device had failed.'},
    {t:'22:58', e:'Entry', n:'Six. Recovered imagery establishes six and no interpretation has ever established otherwise, though the count has been queried nine times.'},
    {t:'23:31', e:'Contact', n:'Response was already inside the building. Response had been inside the building since 21:00. The tasking that placed it there is dated the previous week.'},
    {t:'23:44', e:'Two subjects deceased', n:'CAIN, D.C. and McGREGOR, J.D. Cause of death recorded in both cases as consistent with the response. Neither body was released.'},
    {t:'23:51', e:'Directive overwrite attempted', n:'Logged by the facility system against itself. Origin recorded as internal, O-4. No O-4 officer was present at the site.'},
    {t:'23:51', e:'Partition event', n:'The facility system divided. There is no procedure for this and none has been written since.'},
    {t:'00:12', e:'Three subjects secured', n:'WEIAN, L.M. — MEEKS, D.M. — GARCIA, J.M. All three subsequently released under instrument.'},
    {t:'00:12', e:'One subject not accounted for', n:'BORDENS, L.M. Egress route never established. The building has no unmonitored exit. This has been confirmed four times.'},
    {t:'—', e:'Sixth entrant', n:'Six entered. Two died, three were secured, one escaped. That is six. It is also five plus one, and every reviewing officer who has counted it has counted it that way, and the imagery shows six.'}
  ],
  note:'The event is filed as a security incident at a research site. It is not filed as an operation, because filing it as an operation would have created a reviewing authority, and the tasking that placed the response inside the building at 21:00 would have been read by that authority.'
},

/* ── Populated by the sf-*.js files, in load order ───────── */
subjects: [],

/* ── Who has been reading these files ───────────────────── */
log: [
  {d:'2098.06.14', who:'DAGENAIS, M. // O-2', f:'all seven', n:'Fourth full-cohort read this year. Purpose field: "familiarisation." Her unit has no legacy-cohort tasking.'},
  {d:'2098.06.09', who:'— // O-4, not indexed', f:'ADAMS candidate set', n:'Twelfth read. This file has been queried more times than the other six combined and it is the only one with nothing in it.'},
  {d:'2098.05.30', who:'Strategic Health // clinical', f:'GARCIA, J.M.', n:'Monthly. Has been monthly since 2095 without interruption, including the two months the ward reported no clinical events.'},
  {d:'2098.05.22', who:'[compartment identifier only]', f:'MEEKS, D.M.', n:'Requesting compartment does not appear in the compartment tree at any authorisation this node can read.'},
  {d:'2098.04.19', who:'Equipment Control // asset custody', f:'CAIN, D.C.', n:'Scheduled inspection. The inspection is of the file. There is also an inspection of the item.'},
  {d:'2098.02.16', who:'Operations Desk // watch', f:'BORDENS, L.M.', n:'Two days after the Gilmore event. No connection has been established and no connection has been looked for.'},
  {d:'2091.11.30', who:'— // O-4, not indexed', f:'all seven', n:'Same date as the retention exception reviewer decision. Same terminal. Same four minutes.'}
],

foot:'A file is not kept because a person is dangerous. A file is kept because a person is useful, and usefulness survives death, and two of these seven have been useful since the night they stopped being alive.'

};
