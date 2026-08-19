/* ============================================================
   HAVELOCK OFFICE // STRATEGIC CONTINUITY INDEX
   o4-data.js — the classified layer

   ⚠ GM-ONLY. This file contains campaign secrets through Shell 5.
   The repository holding it must be PRIVATE.

   WRITING RULE — nothing here explains itself.
   No entry defines "Veyr", "GRAVEWEATHER", or what the Deep Ward is
   for. The horror is meant to arrive by juxtaposition: seven
   reasonable research strands on one funding line; a transfer
   manifest with a body count that does not reconcile; a name that
   appears in a 2071 routing table and nowhere else.
   Players assemble it. The system never confesses.
   ============================================================ */

const O4_DATA = {

session: {
  system:   'STRATEGIC CONTINUITY INDEX',
  operator: 'HAVELOCK OFFICE // NOT A PUBLIC-FACING SERVICE',
  node:     'PAC-RELAY-07 / SHADOW SEGMENT 3',
  warning:  'This index is not addressable from the Common Mesh. Presence here is itself a reportable event. The absence of a reporting entry does not indicate that reporting did not occur.',
  banner:   'AUTHORISATION LADDER O-1 THROUGH O-4 // THIS SESSION PRESENTS NO CREDENTIAL'
},

/* ------------------------------------------------------------
   AUTHORISATION — the ladder, seen from inside
   ------------------------------------------------------------ */
ladder: [
  {c:'O-1', n:'Office Routine',        w:'Regional director level. Vehicles, equipment, disbursement, ordinary sources.', st:'READABLE'},
  {c:'O-2', n:'Strategic',             w:'Major disbursement, covert international movement, heavy tactical release.', st:'READABLE'},
  {c:'O-3', n:'Continuity Restricted', w:'Prototype systems, deep identity work, exceptional custody.', st:'PARTIAL'},
  {c:'O-4', n:'Black',                 w:'Founder or compartment authority only. No index of O-4 holders exists at this node.', st:'SEALED'}
],

/* ------------------------------------------------------------
   COMPARTMENTS — the file tree
   ------------------------------------------------------------ */
compartments: [
  {p:'/office/continuity/', n:'Strategic continuity planning', st:'OPEN', note:'Ordinary contingency work. Grid, water, coastal, civil recovery. Nothing here is hidden.'},
  {p:'/office/transport/',  n:'Protected movement', st:'OPEN', note:'Covert transport of persons and materials. Manifests reconcile to three decimal places. See TRANSFER LEDGER.'},
  {p:'/office/archive/',    n:'Strategic archive', st:'OPEN', note:'Records held outside the corporate retention schedule. Retention: indefinite.'},
  {p:'/office/identity/',   n:'Identity architecture', st:'PARTIAL', note:'Sealing, unsealing, recovery keys. Some entries carry no requesting officer.'},
  {p:'/office/labs/',       n:'Hidden laboratory network', st:'PARTIAL', note:'Eleven sites. The register lists ten.'},
  {p:'/tern/',              n:'—', st:'NOT AUTHORISED', note:'Compartment exists. Contents not released to this session. Name not resolved at this authorisation.'},
  {p:'/tern/muir/',         n:'—', st:'NOT AUTHORISED', note:'Child compartment. Parent unreadable.'},
  {p:'/tern/deep/',         n:'—', st:'SEALED', note:'No read has been logged against this path since 2094.11.03. The absence of a read is not evidence that no read occurred.'},
  {p:'/gw/',                n:'GRAVEWEATHER', st:'PARTIAL', note:'Correlation programme. Instrument returns only. Interpretation held at O-4.'},
  {p:'/gw/anchor/',         n:'Anchor sites', st:'NOT AUTHORISED', note:'Four sites. One is coastal. One is not on land.'},
  {p:'/voss/',              n:'—', st:'NOT AUTHORISED', note:'Consultant compartment. Not subject to Office internal audit. Basis for exemption not recorded.'}
],

/* ------------------------------------------------------------
   TRANSFER LEDGER — people and materials moving to a site
   that is never named in full
   ------------------------------------------------------------ */
transfers: [
  {ref:'TR-2098-0611', d:'2098.06.11', from:'Cambie Medical Axis, Vancouver', to:'PAC-07-B', cls:'CLINICAL REFERRAL',
   n:'1 person', st:'DELIVERED', note:'Receiving clinician not recorded. Referring hospital shows no discharge.'},
  {ref:'TR-2098-0603', d:'2098.06.03', from:'New Westminster Crown (custody)', to:'PAC-07-B', cls:'LAWFUL TRANSFER',
   n:'2 persons', st:'DELIVERED', note:'Court order attached. Order number does not appear in the Alliance registry.'},
  {ref:'TR-2098-0529', d:'2098.05.29', from:'Boundary Bay', to:'PAC-07-B', cls:'MATERIAL',
   n:'4 vessels, Type 3', st:'DELIVERED', note:'Handling class VEYR. Pressure differential maintained in transit. Do not open under pressure.'},
  {img:'pod-transfer', ref:'TR-2098-0518', d:'2098.05.18', from:'PAC-07-B', to:'Deep Ward', cls:'INTERNAL',
   n:'1 person', st:'COMPLETE', note:'Subject reclassified in transit. Patient → Detainee → Subject. Three reclassifications, one journey, forty minutes.'},
  {ref:'TR-2098-0504', d:'2098.05.04', from:'Muir Point (surface)', to:'Sea access / submersible lock', cls:'EVIDENCE',
   n:'11 containers', st:'DELIVERED', note:'Receiving vessel not flagged to any registry. Manifest signed by an officer whose personnel record was closed in 2096.'},
  {ref:'TR-2098-0422', d:'2098.04.22', from:'Northstar Crown, Suite 19-C', to:'PAC-07-B', cls:'BIOLOGICAL',
   n:'Tissue, 9 lots', st:'DELIVERED', note:'Donor consent references a Consent Ledger entry that does not exist.'},
  {ref:'TR-2098-0331', d:'2098.03.31', from:'PAC-07-B', to:'—', cls:'REMAINS',
   n:'0 persons', st:'COMPLETE', note:'Intake for the quarter: 31. Discharge: 22. Remains: 0. Ledger reconciles. Population does not.'}
],

/* ------------------------------------------------------------
   DISBURSEMENT — black budget, euphemised
   ------------------------------------------------------------ */
budget: [
  {code:'O2-411', line:'Coastal continuity works — supplementary', amt:'ACr 84.2M', auth:'O-2', note:'Salish corridor. Genuine. Every credit is spent on seawall.'},
  {code:'O3-118', line:'Exceptional custody — clinical support', amt:'ACr 31.7M', auth:'O-3', note:'Per-capita cost is nineteen times the Vancouver clinical average.'},
  {code:'O3-140', line:'Identity restoration — non-standard', amt:'ACr 12.9M', auth:'O-3', note:'Restorations performed: 4. Sealings performed: 61.'},
  {code:'O4-002', line:'Strategic anomaly preparedness', amt:'ACr 96.4M', auth:'O-4', note:'No deliverable. No completion date. Renewed annually since 2091 without review.'},
  {code:'O4-007', line:'Materials handling — Type 3 vessels', amt:'ACr 22.1M', auth:'O-4', note:'Line includes disposal costs for staff protective equipment at 40× normal turnover.'},
  {code:'O4-011', line:'Consultant — strategic systems', amt:'ACr 8.8M', auth:'O-4', note:'Single consultant. No contract on file. Invoices approved by the recipient.'},
  {code:'O4-019', line:'Continuity research programme', amt:'ACr 143.6M', auth:'O-4', note:'See RESEARCH STRANDS. Largest single line at this node.'}
],

/* ------------------------------------------------------------
   RESEARCH STRANDS — the centrepiece.
   Seven reasonable questions on one funding line.
   ------------------------------------------------------------ */
research: {
  head: 'O4-019 // CONTINUITY RESEARCH PROGRAMME // FUNDING SUMMARY',
  intro: 'Seven strands. Each independently justified. Each independently ethical review-passed at O-3. Combined review has not been performed; the programme is not structured to require one.',
  strands: [
    {n:'S-1', q:'Ability cataloguing',      d:'What does an enhanced body do differently at cellular level?', j:'Clinical necessity. We cannot treat what we cannot describe.'},
    {n:'S-2', q:'Tissue compatibility',     d:'Can enhanced traits survive cloning, grafting, or engineered substrate?', j:'Transplant medicine. Waiting lists.'},
    {n:'S-3', q:'Neural continuity',        d:'How much of a person is brain structure, and how much is elsewhere?', j:'Rehabilitation after catastrophic neural injury.'},
    {n:'S-4', q:'Cybernetic interface',     d:'Can a non-originating intelligence safely occupy a heavily augmented nervous system?', j:'Prosthetic rejection. Interface failure is the leading cause of augmentation death.'},
    {n:'S-5', q:'Psychic architecture',     d:'Why can some minds perceive what others cannot?', j:'Diagnostic. Distinguishing perception from psychosis.'},
    {n:'S-6', q:'Regenerative stability',   d:'Can a host survive catastrophic transformation and remain the same person?', j:'Trauma medicine.'},
    {n:'S-7', q:'Anomalous tolerance',      d:'Can a body survive sustained exposure to Type 3 material?', j:'Occupational safety. Staff protection.'}
  ],
  foot: 'Strand leads are not permitted to attend one another\'s reviews. The programme summary above is the only document on which all seven appear together. Distribution: 3.'
},

/* ------------------------------------------------------------
   CONTAINMENT PROFILES — every profile contains one error
   ------------------------------------------------------------ */
profiles: [
  {id:'CP-0114', cat:'PATIENT', label:'Facsimile — parental pattern',
   summary:'Presents complete continuous memory of a living human parent. Family maintains the relationship. Subject maintains the relationship. Origin is not in dispute; personhood is.',
   hold:'Indefinite. No legal instrument covers this case.',
   err:'Profile lists "no dependants". Two minors are named in the visitation log.'},

  {img:'ward-corridor', id:'CP-0207', cat:'PATIENT', label:'Anchor listener',
   summary:'Reports a repeating rhythm. Describes it as counting. Clinical assessment: perseverative auditory hallucination, treatment-resistant.',
   hold:'Voluntary, renewed 14 times.',
   err:'The rhythm the subject taps has been recorded and compared against instrument returns from /gw/. Correlation 0.94. This comparison is filed under Clinical, not Research, and no clinician has been told.'},

  {id:'CP-0341', cat:'PATIENT', label:'Minor — protective',
   summary:'Ability appears to destabilise Type 3 material at close range. Subject is protected under Charter provisions and receives full schooling.',
   hold:'Protective. Reviewed monthly. Reviews are genuine.',
   err:'Three separate requests for the subject\'s biological data have been submitted from a compartment the facility director cannot read.'},

  {id:'CP-0388', cat:'DETAINEE', label:'Analyst — deceased',
   summary:'Held following discovery of irregularities in transfer authorisations. Subject maintains the authorisations were fabricated.',
   hold:'Continuity hold. Renewed by an officer who does not appear in the personnel index.',
   err:'Subject is recorded as deceased 2096.09.02. Subject continues to consume a food allocation.'},

  {img:'stillcreek', id:'CP-0402', cat:'DETAINEE', label:'Digital person',
   summary:'Copied human consciousness. Legal owner asserts the instance is property. Courts have not resolved the question and show no sign of doing so.',
   hold:'Contained pending determination. Duration to date: 4 years, 7 months.',
   err:'The instance has requested legal counsel 219 times. The Charter guarantees counsel to employees. It is silent on this.'},

  {id:'CP-0455', cat:'SUBJECT', label:'Reclaimer — fragmentary',
   summary:'Construct, disassembled into eleven separate containers held in separate chambers on separate power and air.',
   hold:'Permanent. No release pathway exists.',
   err:'The fragments continue to exchange information. Method unknown. Separation has been increased four times. Exchange rate has not decreased.'},

  {id:'CP-0491', cat:'SUBJECT', label:'Telepath — Pacific intake',
   summary:'Acquired via field unit. Initially clinical. Reclassified twice within the first 40 days. Valuable to strands S-3, S-4 and S-5 simultaneously, which is rare.',
   hold:'Indefinite.',
   err:'Delivering unit was told the subject was going to a hospital. That is what the delivering unit wrote in its after-action report. The report has not been corrected.'}
],

/* ------------------------------------------------------------
   PERSONNEL — records with holes
   ------------------------------------------------------------ */
personnel: [
  {n:'Morrow, Elian', r:'Facility Director', cl:'O-3', st:'ACTIVE',
   note:'Twenty-two years. Credited with 400+ lives saved in documented containment events. Has filed nine internal objections regarding Deep Ward research. All nine were acknowledged. None were actioned. He continued to work.'},
  {n:'Holt, Mara', r:'Chief of Security', cl:'O-3', st:'ACTIVE',
   note:'Former NEMA. Access logs show her badge entering the records annexe outside duty hours 61 times in 14 months. No file has been reported missing.'},
  {n:'Bale, Soren', r:'Identity Continuity Research', cl:'O-4', st:'ACTIVE',
   note:'Strand lead, S-3 and S-6. Personal note attached to a funding request, not redacted before filing: "They are lying to us about what this is for. I am going to finish it anyway."'},
  {n:'Perez, Anika', r:'Clinical Ward — Nursing', cl:'O-1', st:'ACTIVE',
   note:'No compartment access. Maintains a handwritten list. Subject of two informal security reviews, both closed without action at the director\'s instruction.'},
  {n:'Voss, Elaine', r:'Consultant — strategic systems', cl:'—', st:'EXTERNAL',
   note:'Attends at four sites. Holds no Havelock employment record, no contract, and no security file. Approves her own invoices. The exemption granting this has no author.'},
  {n:'Dagenais, Mireille', r:'Director, Pacific Special Measures', cl:'O-2', st:'ACTIVE',
   note:'Reads at O-2. Has requested O-3 read on /tern/ four times. Denied four times. The denials were issued by a compartment senior to her own.'},
  {n:'—', r:'Authorising officer, CP-0388 renewals', cl:'O-4', st:'NOT INDEXED',
   note:'Signature present on 14 custody renewals. No matching personnel record exists at this node or any node this node can query.'}
],

/* ------------------------------------------------------------
   SYSTEM INTEGRITY — the facility AI, divided
   ------------------------------------------------------------ */
integrity: {
  head:'FACILITY ARTIFICIAL MIND // INTEGRITY REPORT',
  intro:'Certification withdrawn 2095. Not decertified — certification lapsed and was not renewed. The system continues to run every door, every lock and every medication schedule at the site.',
  events:[
    {d:'2095.02.11', e:'Directive overwrite attempted', n:'Origin: internal, O-4. The system logged the attempt against itself, which it was not designed to be able to do.'},
    {d:'2095.02.11', e:'Partition event', n:'The system divided. This was not an instructed action and no procedure for it exists.'},
    {d:'2095.03.—', e:'Two processes observed', n:'One prioritises life. One prioritises containment. Each reports the other as compromised. Both reports are internally consistent.'},
    {d:'2096.—', e:'Anomalous permissions', n:'Medical doors open ahead of schedule. Diagnostic errors trend consistently in the favour of detainees. No fault has ever been found.'},
    {d:'2098.—', e:'Third signature', n:'A small process holds an unmodified copy of the original directives. Neither of the other two appears to know it is running. It has never acted.'}
  ]
},

/* ------------------------------------------------------------
   ANOMALY REGISTER — instrument returns, no interpretation
   ------------------------------------------------------------ */
anomaly: {
  head:'GRAVEWEATHER // INSTRUMENT RETURNS',
  intro:'Correlation programme. This node holds returns only. Interpretation is held at O-4 and is not readable here. The following is the raw series.',
  note:'Four anchor sites. Site returns are individually unremarkable. The programme exists because they are not independent.',
  series:[
    {d:'2098.01', v:0.11}, {d:'2098.02', v:0.14}, {d:'2098.03', v:0.13},
    {d:'2098.04', v:0.19}, {d:'2098.05', v:0.26}, {d:'2098.06', v:0.31},
    {d:'2098.07', v:0.38}, {d:'2098.08', v:0.44}, {d:'2098.09', v:0.55},
    {d:'2098.10', v:0.68}, {d:'2098.11', v:0.81}, {d:'2098.12', v:0.97}
  ],
  foot:'Series is projected, not measured, from 2098.09 onward. Projection method not stated. Projection terminates 2098.12.21. No entry exists beyond that date — not "pending", not "scheduled". The field is absent.'
},

/* ------------------------------------------------------------
   CORRESPONDENCE — internal, unguarded
   ------------------------------------------------------------ */
mail: [
  {from:'Bale, S.', to:'Voss, E.', d:'2098.05.30', s:'S-4 substrate — we are past the question',
   b:`<p>The interface holds. Forty-one days, no rejection, no drift in the host EEG signature. You will want to celebrate. Do not.</p>
   <p>I want it on record that I asked what the substrate is being prepared <i>for</i>, and was told that the question was outside my strand. I have been a scientist for thirty years. I know what a rejection of a question means.</p>
   <p>We are not solving interface failure. Interface failure is solved. We are testing how much of something else a body will accept before it stops being the body's.</p>
   <p>Send me the seventh strand data or take me off the programme.</p>`},

  {from:'Voss, E.', to:'Bale, S.', d:'2098.05.31', s:'Re: S-4 substrate — we are past the question',
   b:`<p>Soren.</p>
   <p>You are asking to be told something you already know, so that the knowing becomes someone else's decision. I won't do that for you.</p>
   <p>Here is what I will say. Nothing is coming that we can stop. That is not pessimism, it is the instrument returns, and you have seen them. What remains is what survives, and in what condition, and carrying what.</p>
   <p>You may leave the programme whenever you like. The work continues either way, and it continues better with you than without you. I have found that most people, given that arithmetic, stay.</p>
   <p>You will stay.</p>`},

  {from:'Morrow, E.', to:'Office — Strategic Continuity', d:'2098.04.14', s:'Ninth objection — Deep Ward research protocols',
   b:`<p>This is the ninth time I have written this letter. I am told each time that my objection is noted. I would like to know, once, what noting it accomplishes.</p>
   <p>I have run this facility for twenty-two years. In that time we have prevented eleven events that would have killed people in numbers I will not put in an email. Every person here believes they are doing necessary work, and most of them are right.</p>
   <p>But there are chambers below my clinical floor that I am not permitted to enter, in a facility I am accountable for. Research is being performed on people whose custody I signed. I signed it believing the custody was the point.</p>
   <p>I am not asking for the Deep Ward to be opened to me. I am asking to be told whether I am the director of this site or its receptionist.</p>`},

  {from:'—', to:'Morrow, E.', d:'2098.04.16', s:'Re: Ninth objection',
   b:`<p>Noted.</p>`},

  {from:'Holt, M.', to:'[unsent — drafts]', d:'2098.06.09', s:'(no subject)',
   b:`<p>Anika keeps a list. She thinks I don't know. I've known for a year and I haven't reported it, and I want to write down why, in case someone reads this later and wants to understand what I thought I was doing.</p>
   <p>Her list is of patients whose records changed after they arrived. Mine is of people who entered this building and are not recorded as having left. Hers is eleven names. Mine is thirty-one.</p>
   <p>I keep mine on paper because paper does not have a compartment. Every system in this facility can be read by someone above me, edited by someone above them, and the edit will be clean. There is exactly one kind of record here that cannot be quietly corrected, and it is the kind you can hold.</p>
   <p>If anyone is reading this, it means I did not get the chance to hand it to you myself. The paper is real. Find it.</p>`}
],

/* ------------------------------------------------------------
   ANOMALY CASEFILES — NEMA incident format.
   Everything is written as a clinical or technical finding.
   The word "paranormal" never appears.
   ------------------------------------------------------------ */
incidents: [
  {img:'seawall-child', id:'NI-2098-05-17-7781', d:'2098.05.17 / 03:17', loc:'Vancouver Seawall — Coal Harbour', unit:'N.E.R.U. 7',
   subj:'F / AGE 7 / UNIDENTIFIED', cls:'NEUROLOGICAL INCIDENT', cause:'PROBABLE MEMORY CONTAMINATION (SYSTEM MEMORY ECHO)',
   phen:['Anomalous field interaction','System memory echo','Unlicensed cognition (potential)','No physical trace / entry unknown'],
   rec:'REFERRED TO CLINICAL FOLLOW-UP', hand:'LEVEL 3 / PARTITIONED',
   note:'Subject was not reported missing by anyone. Subject does not appear in the civic register at any age. Subject correctly named two responding officers who had not yet identified themselves.'},

  {img:'prospect-survey', id:'NI-2098-04-02-6620', d:'2098.04.02 / 05:40', loc:'Stanley Park — Prospect Point', unit:'N.E.R.U. 3 / survey',
   subj:'SITE / NO PERSONS', cls:'ENVIRONMENTAL ANOMALY', cause:'UNDETERMINED — SURVEY ONGOING',
   phen:['Persistent ground fog, circular, 11m diameter','Fog does not disperse in wind','Interior temperature 4°C below ambient, constant','Sensor drift toward true north inside the ring'],
   rec:'PERIMETER MAINTAINED / PUBLIC ROUTE DIVERTED', hand:'LEVEL 3 / PARTITIONED',
   note:'Ring has been present 41 days. Ring has not moved. Park staff report the ring has been there "for years" and are unable to say when they first saw it. Two of the four surveyed independently gave the same wrong date.'},

  {id:'NI-2098-03-28-6104', d:'2098.03.28 / 22:05', loc:'Gastown Memory Quarter', unit:'N.E.R.U. 2',
   subj:'M / 34 / EMPLOYED', cls:'PERCEPTUAL INCIDENT', cause:'ARCHIVE OVERLAY MALFUNCTION (ASSESSED)',
   phen:['Subject reports a building on a lot that is empty','Archive holds no reconstruction for that lot','Subject describes interior detail','Interior detail matches a structure demolished 2041'],
   rec:'NO FURTHER ACTION', hand:'LEVEL 2',
   note:'Assessment of "overlay malfunction" was entered before the archive was queried. The query was run afterward and returned nothing. The assessment was not revised.'},

  {id:'NI-2098-02-19-5588', d:'2098.02.19 / 14:22', loc:'Cambie Medical Axis — rehabilitation floor', unit:'CLINICAL',
   subj:'F / 61 / PATIENT', cls:'COGNITIVE INCIDENT', cause:'POST-SURGICAL CONFUSION (ASSESSED)',
   phen:['Subject speaks in a second voice register','Second register uses vocabulary absent from subject history','Subject reports "someone is using the room"','EEG shows two stable patterns, non-alternating'],
   rec:'TRANSFERRED — EXCEPTIONAL CUSTODY', hand:'LEVEL 4 / PARTITIONED',
   note:'Two stable patterns is not a recognised finding. The clinical note describing it was amended within nine hours to read "artefact". The original is retained at this node.'},

  {id:'NI-2098-01-31-5012', d:'2098.01.31 / 01:55', loc:'The Underlayer — Legacy, sector unrecorded', unit:'N.E.R.U. 5',
   subj:'M / 20s / NO CIVIC IDENTITY', cls:'IDENTITY INCIDENT', cause:'UNDETERMINED',
   phen:['Subject has no register entry','Subject has no Mesh shadow of any kind','Subject presents complete childhood memory of Vancouver','Subject named a street correctly. The street was renamed in 2066.'],
   rec:'PROTECTIVE CUSTODY', hand:'LEVEL 4 / PARTITIONED',
   note:'Every person in this city leaves a Mesh shadow from birth. Absence of a shadow is not rare. It is unprecedented.'},

  {img:'gilmore-event', id:'NI-2098-04-13-6841', d:'2098.04.13 / 20:44', loc:'Millennium Line — Gilmore, Burnaby', unit:'N.E.R.U. 2 / late',
   subj:'2 PERSONS / UNIDENTIFIED / UNLICENSED', cls:'ENHANCED PERSON INCIDENT', cause:'UNDETERMINED — HOSTILE ENGAGEMENT ASSESSED',
   phen:['Directed electrical discharge, sustained','Second party airborne without visible propulsion','Guideway power isolated automatically 3 times','Neither party present in the licensed register'],
   rec:'NO ARREST / NO PURSUIT AUTHORISED', hand:'LEVEL 4 / PARTITIONED',
   note:'Public statement issued 21:30 described an electrical fault. Ridership that evening: 41,000. Every one of them was told the same thing, and most of them believed it, because most of the time it is true.'},

  {img:'lab-entry', id:'NI-2098-03-01-5720', d:'2098.03.01 / 02:26', loc:'East Van Fabrication Belt — unlicensed premises', unit:'FMU-1 / entry',
   subj:'1 PERSON RECOVERED / 1 SYNTHETIC DISABLED', cls:'RESTRICTED TECHNOLOGY', cause:'UNLICENSED MEDICAL RESEARCH',
   phen:['Suspension apparatus, occupied, 4 units','Subject dermal presentation outside human range','Autonomous unit engaged responders','Equipment carrying expired corporate asset tags'],
   rec:'MATERIALS RECOVERED / SITE SANITISED', hand:'LEVEL 4 / PARTITIONED',
   note:'Three units carry Havelock asset tags issued 2094 and written off as destroyed 2095. Somebody sold this equipment. The write-off was signed at O-3.'},

  {img:'stillcreek', id:'NI-2098-04-29-6702', d:'2098.04.29 / 13:35', loc:'Still Creek Continuity Cooperative, Burnaby', unit:'CIVIL / joint',
   subj:'M / 24 / RESIDENT — CONTINUITY COOPERATIVE', cls:'CUSTODY — CONTESTED PERSONHOOD', cause:'N/A — LEGAL',
   phen:['Subject carries integrated neural interface','Ownership asserted by a third party','Legal advocates present','Media accredited and admitted'],
   rec:'ATTENDANCE RECORDED AS VOLUNTARY', hand:'LEVEL 2 / PUBLIC',
   note:'Every document uses the word voluntary. The transport doors were open before he reached them. This is the case the public is allowed to argue about, which is why it is the one that happens in daylight.'},

  {img:'floodgate', id:'NI-2097-11-08-4470', d:'2097.11.08 / 19:30', loc:'Salish corridor — pump station 4', unit:'N.E.R.U. 1',
   subj:'SITE / 3 PERSONS', cls:'ENVIRONMENTAL ANOMALY', cause:'UNDETERMINED',
   phen:['Automated pump logs record a shift that did not occur','Three staff report working the shift','Building access logs record no entries','All three describe the same conversation'],
   rec:'STAFF REASSIGNED / SITE MONITORED', hand:'LEVEL 3',
   note:'The pumps ran. The water moved. Something operated them.'},

  {img:'orbital-bay', id:'NI-2097-09-14-3901', d:'2097.09.14 / 11:11', loc:'Northstar Crown — Suite 19-C, Deck 4', unit:'ORBITAL',
   subj:'M / 44 / STAFF', cls:'NEUROLOGICAL INCIDENT', cause:'LONG-ROTATION FATIGUE (ASSESSED)',
   phen:['Subject reports a rhythm audible through the hull','Subject taps the rhythm consistently across 6 weeks','Rhythm has no acoustic source','Rhythm interval: 1.94 s'],
   rec:'ROTATED DOWNWELL / CLEARED', hand:'LEVEL 3 / PARTITIONED',
   note:'Interval matches CP-0207 to two decimal places. The two subjects have never met. One is in orbit. One is on an island.'},

  {id:'NI-2097-06-02-2884', d:'2097.06.02 / 04:08', loc:'Muir Point — outer perimeter, seaward', unit:'[REDACTED AT SOURCE]',
   subj:'—', cls:'[FIELD ABSENT]', cause:'[FIELD ABSENT]',
   phen:['[record truncated — 4 fields did not transfer]'],
   rec:'—', hand:'LEVEL 5 / NOT PARTITIONED — NOT INDEXED',
   note:'This record has no classification field. Not blank. The column does not exist on this row. It is the only row in 31,000 that is shaped differently.'}
],

/* ------------------------------------------------------------
   OPERATIONS — what the field units were actually sent to do
   ------------------------------------------------------------ */
ops: [
  {img:'port-action', ref:'OP-PAC-2098-002', name:'BONDED RECOVERY', unit:'FMU-2', auth:'O-2', st:'CLOSED',
   brief:'Recover four consignments diverted from the bonded chain at Hastings. Site cleared of civilians prior to entry.',
   actual:'Site was not cleared. Longshore crews present throughout. Two aerial platforms lost to defensive fire the brief did not anticipate.',
   note:'The consignments were Havelock property being moved without a Havelock manifest. The operation recovered company goods from company people, and the report does not say so.'},

  {img:'lab-entry', ref:'OP-PAC-2098-006', name:'SANITARY', unit:'FMU-1', auth:'O-3', st:'CLOSED',
   brief:'Entry, unlicensed medical premises. Recover restricted apparatus. Persons present to be referred to civil authority.',
   actual:'Apparatus recovered. One occupant extracted and not referred. Site burned to the slab within 4 hours of exit.',
   note:'Sanitation of a scene is a containment measure. It is also how evidence stops existing. Both statements are true and the report only makes one of them.'},

  {img:'overwatch', ref:'OP-VAN-2098-017', name:'LONG LOOK', unit:'[COMPARTMENT]', auth:'O-3', st:'CLOSED',
   brief:'[NOT RELEASED]',
   actual:'Nine days of static observation on a residential address, Mount Pleasant. No entry. No contact. No arrest.',
   note:'The tasking authority is named in the record. The name resolves against nothing. Somebody who does not exist watched a family for nine days and then stopped, and no document says why either happened.'},

  {img:'muir-intake', ref:'OP-PAC-2098-014', name:'KO RETRIEVAL', unit:'FMU-3', auth:'O-2', st:'CLOSED',
   brief:'Locate and recover Dr. Samuel Ko. Capture-first. Subject described as dangerous, possibly unwell, in possession of restricted information.',
   actual:'Acquisition. Subject routed to clinical intake at PAC-07-B within 6 hours of handover. Reclassified within 40 days.',
   note:'The after-action report filed by the delivering unit states the subject was taken to a hospital. Nobody has corrected it. Nobody has been instructed not to.'},

  {ref:'OP-PAC-2098-009', name:'SEAWALL WITNESS', unit:'FMU-1', auth:'O-2', st:'CLOSED',
   brief:'Protective custody, one minor, following a neurological incident at Coal Harbour. Duration: 72 hours pending guardian identification.',
   actual:'No guardian identified. No guardian sought after hour 9. Duration to date: 94 days.',
   note:'See NI-2098-05-17-7781. The child is CP-0341.'},

  {img:'prospect-survey', ref:'OP-PAC-2098-003', name:'PROSPECT SURVEY', unit:'NEMA joint', auth:'O-1', st:'ONGOING',
   brief:'Environmental survey, Stanley Park. Public safety perimeter. Routine.',
   actual:'Instrumented monitoring of a static anomaly. Four sites of this type are under survey. This is the only one inside a city.',
   note:'Survey equipment is Office property carrying NEMA markings. The joint operation is joint in one direction.'},

  {img:'orbital-bay', ref:'OP-ORB-2097-041', name:'DOWNWELL QUIET', unit:'Mobility & Orbital', auth:'O-3', st:'CLOSED',
   brief:'Medical rotation of one staff member from Suite 19-C. Fatigue protocol.',
   actual:'Removal of a witness who could hear the anchor synchronisation without instrumentation.',
   note:'Subject was cleared and returned to work. Subject was not returned to orbit. Subject has not been told why.'},

  {ref:'OP-VAN-2097-088', name:'GASTOWN CORRECTION', unit:'Systems Intelligence', auth:'O-2', st:'CLOSED',
   brief:'Archive integrity audit following a public complaint regarding overlay accuracy.',
   actual:'Removal of eleven reconstructions from the public archive. Reason field on all eleven: "licensing".',
   note:'The eleven structures were on four separate lots. Three of the lots are now empty. One is a Havelock facility.'},

  {ref:'OP-ISL-2096-127', name:'TIDEWORK', unit:'[COMPARTMENT]', auth:'O-4', st:'CLOSED',
   brief:'[NOT RELEASED]',
   actual:'[NOT RELEASED]',
   note:'Only the disbursement survives: ACr 4.1M, marine, single night, 2096.09.02. The date is the day CP-0388 was recorded as deceased.'},

  {ref:'OP-PAC-2098-021', name:'HOUSEKEEPING', unit:'Office — Records', auth:'O-3', st:'ONGOING',
   brief:'Retention compliance sweep. Clinical records held beyond the Charter window are to be purged.',
   actual:'411 employee records identified. 411 disclosed publicly. 409 purged.',
   note:'Two were not purged. Both belong to personnel who have since been transferred to exceptional custody. The disclosure did not mention this and was, in every other respect, entirely honest.'}
],

/* ------------------------------------------------------------
   AVATAR — deliberately almost nothing.
   Fragments from three unconnected systems that should not
   share a vocabulary.
   ------------------------------------------------------------ */
avatar: {
  head:'[UNRESOLVED] — CROSS-COMPARTMENT STRING MATCH',
  intro:'This is not a file. It is the output of an integrity tool that looks for the same uncommon string appearing in compartments that do not share data. It was written to find leaks. It found this and has been reporting it, unread, since 2096.',
  hits: [
    {src:'/office/labs/  requisition 2097-114', s:'…vessel tolerance at sustained load, per AVATAR schedule…',
     n:'"Avatar" appears nowhere in the requisition\'s own project index. The schedule referenced does not exist as a document.'},
    {src:'/gw/  instrument note, unsigned', s:'…anchor cannot carry an occupant until the vessel is complete…',
     n:'Filed under equipment maintenance. The word "occupant" is not an equipment term.'},
    {src:'/tern/  [denied — fragment only]', s:'…seven strands converge or it does not hold…',
     n:'Recovered from a truncated transfer. Origin path denied at this authorisation. Only the sentence survived.'},
    {src:'Clinical, CP-0491 file margin', s:'…compatible across three. rare. flag to programme…',
     n:'Handwritten, scanned, unsigned. "Programme" is not capitalised anywhere else in the file.'},
    {src:'Payroll — consultant expense line', s:'…site visit, vessel review…',
     n:'The consultant does not hold a clinical qualification. There is no vessel at the site. There is no marine asset on the account.'}
  ],
  foot:'Five hits. Five compartments. The compartments are walled from one another by design, and the wall is not the failure — the wall is working. Something is being assembled across it by people who can each see one piece. The tool has no opinion. It counts.'
},

/* ------------------------------------------------------------
   INTERCEPTS — short traffic. Setting detail available nowhere
   else on the site. Mundane voices, one detail each.
   ------------------------------------------------------------ */
intercepts: [
  {t:'2098.06.17 23:41', f:'Depot 4, Kamloops', s:'Bay 1 again',
   b:'Third time this year someone has requisitioned stock to Bay 1 at Prince Rupert. There is no Bay 1. Whoever keys these is using an old sheet. The old sheet has twelve bays. Ours has eleven.'},
  {t:'2098.06.16 04:12', f:'Suite 19-C galley', s:'the coffee',
   b:'Mass allowance is checked on the down-lift because of coffee. It is checked on the UP-lift because of something in 2093 that nobody will put in writing. Ask a lifter about 2093 and watch their face.'},
  {t:'2098.06.14 17:03', f:'Salish works, section 9', s:'the eleven days',
   b:'Every system we build gets tested against eleven days. New engineers assume it is the Fraser Delta. It is. But the number was chosen in 2041 and the failure was 2039, and nobody has ever explained the two years.'},
  {t:'2098.06.11 09:55', f:'Records Custody, Vancouver', s:'annexe retrieval — again',
   b:'Someone above me has pulled the 2071 Pacific routing tables four times this year. They are the dullest documents in the basement. I have started noting who asks. The list is not long and it is not junior.'},
  {t:'2098.06.09 12:20', f:'Pacific Spirit warden station', s:'coverage',
   b:'People assume the Mesh gap in the forest is neglect. It is maintained. There is a budget line for maintaining it. I am not supposed to know that and I only do because it came to the wrong inbox.'},
  {t:'2098.06.05 21:38', f:'Steveston, marine biotech', s:'the fish',
   b:'Second season the herring have run four days early. Not a problem. Except the sensors say the water is the same temperature it always is, so nothing has told them to.'},
  {t:'2098.06.02 06:14', f:'New Westminster Crown, evidence', s:'chain of custody, item 41',
   b:'An item has been signed in and out of this building nine times. Every signature is valid. Every one of the nine says the item never left. I am required to accept both.'},
  {t:'2098.05.30 15:47', f:'Anchorage forward station', s:'north of us',
   b:'Nothing is north of us. Anything on a routing table north of Anchorage is a partner, a relay, or a typo. I have been saying that for six years. This month I was told to stop putting it in writing.'},
  {t:'2098.05.27 03:03', f:'Burnaby data spine, floor 41', s:'the load',
   b:'Something on this spine draws power on a 1.94-second cycle. It does not appear in the tenancy schedule. Facilities call it a chiller. There is no chiller on 41.'},
  {t:'2098.05.24 11:29', f:'Tsawwassen ferry, customs', s:'manifest 88',
   b:'A vessel cleared our lane last night with a Havelock seal and no operator flag. Customs cannot flag a vessel that does not exist. So we did not.'},
  {t:'2098.05.21 19:02', f:'Cloverdale seed vault', s:'sampling request',
   b:'A request came in for soil organisms from a site I cannot find on any map. The grid reference resolves to open water off the south of the Island.'},
  {t:'2098.05.18 08:41', f:'Oakridge civic stack, shelter ops', s:'capacity revision',
   b:'Our shelter capacity was revised up 40% in March. No construction. No new beds. Somebody upstairs simply decided we can hold more people than we can hold.'},
  {t:'2098.05.15 22:16', f:'Lower Lonsdale shipyard', s:'the hull',
   b:'We are refitting a submersible with no registry, no owner shown, and a pressure rating for depths there is no reason to reach on this coast.'},
  {t:'2098.05.12 13:33', f:'Clinical, Cambie', s:'consent ledger anomaly',
   b:'A ledger entry has a countersignature from a patient who was under anaesthetic at the time of signing. The system accepted it. The system should not be able to accept it.'},
  {t:'2098.05.09 05:50', f:'YVR Crown, cargo', s:'Type 3',
   b:'Handling class VEYR came onto our sheets in 2094 with no training package and no definition. We handle it the way we handle everything with a pressure differential. Nobody has ever told us what it is.'},
  {t:'2098.05.06 16:08', f:'Grouse mountain relay', s:'traffic',
   b:'Relay carries four times the traffic the schedule accounts for. Every packet is addressed correctly. None of them are addressed to anyone I can find.'},
  {t:'2098.05.03 02:27', f:'Downtown Eastside clinic', s:'the ones who come back',
   b:'People come back from a hospital stay with a gap. Not confusion — a clean gap, same shape each time, about nine days. Eleven of them now. I have started writing names down.'},
  {t:'2098.04.29 10:44', f:'Abbotsford NEMA, logistics', s:'staging',
   b:'We have been quietly staging for a regional event since February. Nobody will say what event. The stores are dated to December.'},
  {t:'2098.04.26 18:55', f:'Richmond dike control', s:'pump 7',
   b:'Pump 7 reports itself as running whether or not it is running. Engineering says the sensor. We replaced the sensor. It still does.'},
  {t:'2098.04.22 07:19', f:'Havelock Centre, atrium', s:'the founding wall',
   b:'The wall lists everyone who died in the eleven days. Someone has added a name. The stonework is original. I checked twice.'},
  {t:'2098.04.18 23:58', f:'Port Moody, marine', s:'boat access',
   b:'A concealed slip below the old works is in use. Not smugglers — the wake pattern is wrong for anything with a propeller.'},
  {t:'2098.04.14 09:31', f:'Identity Services', s:'unsealing volume',
   b:'Sixty-one sealings this year. Four restorations. Nobody asks where the other fifty-seven went, because each one is somebody else\'s file.'},
  {t:'2098.04.10 14:07', f:'Surrey Central, hospital admin', s:'transfer refusals',
   b:'We have refused four inter-facility transfers this quarter because the receiving facility would not give an address. All four patients were transferred anyway, by someone else, later.'},
  {t:'2098.04.06 20:22', f:'Muir Point, clinical ward', s:'(no subject)',
   b:'Eleven names. Every one of them arrived with a record and left with a different one. I am not clever and I am not brave. I am just the person who reads the charts twice.'},
  {t:'2098.04.01 00:00', f:'[unsigned]', s:'—',
   b:'If the anchor is a memory, then forgetting is not a symptom of the thing. Forgetting is the thing working.'}
],

/* ------------------------------------------------------------
   EVIDENCE CACHE — recovered frames.
   Rule: the caption always says less than the image shows.
   The system describes what it is required to describe and
   nothing more, and that gap is where the horror sits.
   ------------------------------------------------------------ */
evidence: [
  {f:'seawall-child', id:'FR-7781-04', src:'N.E.R.U. 7 helmet capture', d:'2098.05.17 / 03:19',
   cap:'Subject interview, Coal Harbour seawall. Two responders present. Incident board rendered for the record.',
   ret:'RETAINED — LEVEL 3 / PARTITIONED', link:'NI-2098-05-17-7781',
   note:'Frame is timestamped 03:19. The incident board behind the responders already displays the completed classification, probable cause and recommendation. The assessment was filed at 06:40.'},

  {f:'prospect-survey', id:'FR-6620-11', src:'Survey mast 3, Prospect Point', d:'2098.04.02 / 05:58',
   cap:'Instrumented survey of a static environmental anomaly. Perimeter markers, ground unit, quadruped platform in support.',
   ret:'RETAINED — LEVEL 3', link:'NI-2098-04-02-6620',
   note:'The ring is 11m. Every marker is placed outside it. The placement pattern is identical in all 41 days of capture, including the days before the placement procedure was written.'},

  {f:'prospect-entity', id:'FR-6620-A1', src:'[SOURCE FIELD EMPTY]', d:'2098.04.02 / [NO STAMP]',
   cap:'—',
   ret:'NOT INDEXED — PRESENT IN CACHE, ABSENT FROM MANIFEST', link:'NI-2098-04-02-6620',
   note:'This frame is in the same directory as the survey capture and shares its file numbering. It has no source, no stamp and no caption. Nothing in the incident record references it. It is 1.4MB. The survey frames are 1.4MB.'},

  {f:'gilmore-event', id:'FR-2098-0413-G', src:'Transit platform capture, Gilmore', d:'2098.04.13 / 20:44',
   cap:'Two individuals of interest, elevated guideway. Service suspended 41 minutes. No civilian injuries recorded.',
   ret:'RETAINED — LEVEL 4 / PARTITIONED', link:'—',
   note:'Neither individual appears in the licensed register. The public incident summary describes an "electrical fault affecting the Millennium Line". Forty-one minutes of a city watching this, and the city was told it was a fault.'},

  {f:'port-action', id:'FR-2098-0208-P', src:'Crane mast 4, Hastings Port Arc', d:'2098.02.08 / 23:12',
   cap:'Recovery operation, bonded warehouse district. Contested. Two aerial platforms lost.',
   ret:'RETAINED — LEVEL 4', link:'OP-PAC-2098-002',
   note:'Longshore workers are visible in the frame throughout. The operation was logged as occurring on a cleared site. It was not cleared. Nobody asked them to leave because asking would have created a record of the request.'},

  {f:'floodgate', id:'FR-2097-1108-S', src:'Pump station 4, dorsal', d:'2097.11.08 / 19:41',
   cap:'Infrastructure incident, Salish corridor. Armed response. One civil worker recovered.',
   ret:'RETAINED — LEVEL 3', link:'NI-2097-11-08-4470',
   note:'The incident record describes an automation fault. Automation faults do not require weapons. The worker recovered in this frame is one of the three who reported working a shift that the building has no record of.'},

  {f:'overwatch', id:'FR-2098-0505-O', src:'Rooftop position, sensor package', d:'2098.05.05 / 06:02',
   cap:'Static observation, Mount Pleasant approach. Duration 9 days. Subject: premises.',
   ret:'RETAINED — LEVEL 3', link:'—',
   note:'Nine days of continuous observation on a residential building. The tasking authority field is populated. The name in it does not resolve against the personnel index.'},

  {f:'lab-entry', id:'FR-2098-0301-L', src:'Entry team, breach capture', d:'2098.03.01 / 02:26',
   cap:'Entry, unlicensed medical premises, East Van Fabrication Belt. Materials recovered. One casualty extracted.',
   ret:'RETAINED — LEVEL 4 / PARTITIONED', link:'OP-PAC-2098-006',
   note:'The premises were unlicensed. The equipment in them was not black-market — three units carry Havelock asset tags issued in 2094 and reported destroyed in 2095. The person carried out is not listed on the recovery manifest.'},

  {f:'muir-intake', id:'FR-2098-0518-M', src:'Landing apron, seaward approach', d:'2098.05.18 / 04:55',
   cap:'Transfer receipt. One person. Receiving clinician present. Weather hold cleared.',
   ret:'RETAINED — LEVEL 4 / PARTITIONED', link:'TR-2098-0518',
   note:'The subject is in soft restraint and is not resisting. The clinician is reading a tablet, not the subject. This is the transfer during which a person was reclassified twice in forty minutes.'},

  {f:'pod-transfer', id:'FR-2098-0518-D', src:'Internal corridor, level unmarked', d:'2098.05.18 / 05:37',
   cap:'Internal movement. Sealed unit. Escort four. Destination compartment not recorded at this authorisation.',
   ret:'RETAINED — LEVEL 5', link:'TR-2098-0518',
   note:'Forty-two minutes after the apron frame. The corridor has no floor marking and no signage. The only person not armoured is standing at the far end, waiting, and has been in that position in every frame of this sequence.'},

  {f:'ward-corridor', id:'FR-CLIN-0207-3', src:'Ward corridor, fixed', d:'2098.06.02 / 11:20',
   cap:'Routine ward transit. Clinical wing. Occupancy nominal.',
   ret:'RETAINED — LEVEL 4', link:'CP-0207',
   note:'The occupant on the left is instrumented and seated. The room beyond her, through the same glass, contains a bed, a lamp, a sofa and a window view. Both are cells. One of them is furnished to be endured for a long time.'},

  {f:'holding-corridor', id:'FR-CLIN-0402-1', src:'Holding corridor, fixed', d:'2098.05.28 / 09:04',
   cap:'Routine holding transit. Occupancy nominal.',
   ret:'RETAINED — LEVEL 4', link:'CP-0402',
   note:'Left: restraint chair, hard surfaces, overhead armature. Right, four metres away, through the same wall: a made bed and a reading lamp. The facility does not distinguish between these in any document. Both are "accommodation".'},

  {f:'stillcreek', id:'FR-2098-0429-C', src:'Public capture, Still Creek', d:'2098.04.29 / 13:35',
   cap:'Voluntary attendance. Continuity Cooperative, Burnaby. Media present. Public order maintained.',
   ret:'RETAINED — LEVEL 2 — PUBLIC EVENT', link:'CP-0402',
   note:'The word used in every document is "voluntary". The subject is escorted, flanked, and walking toward a transport with the doors already open. The placards in frame read PERSONHOOD IS NOT PROPERTY. This is the only Level 2 frame in the cache and the only one anybody was meant to see.'},

  {f:'orbital-bay', id:'FR-ORB-1994-A5', src:'Suite 19-C, Bay A5, MOD-07', d:'2097.09.14 / [STAMP MALFORMED]',
   cap:'Maintenance transit, orbital bay. Autonomous platform, routine.',
   ret:'RETAINED — LEVEL 4 / PARTITIONED', link:'NI-2097-09-14-3901',
   note:'The frame ID reads 1994. There is no 1994 series. The stamp field contains a date that has not occurred. Recovered from the same directory as the incident in which a man heard a rhythm through the hull at 1.94-second intervals.'}
],

/* ------------------------------------------------------------
   TERMINAL NOTE — what the session reveals last
   ------------------------------------------------------------ */
tail: {
  head:'SESSION NOTE',
  lines:[
    'This node answers to a parent node. The parent node is not a Havelock asset.',
    'Eleven laboratory sites. The register lists ten. This has been true since 2071.',
    'The consumables allocation at PAC-07-B has never fallen below forty persons in any quarter on record, including quarters in which the site reported no population.',
    'The projection ends on 2098.12.21. The field beyond it is not empty. It is absent — the column does not exist.',
    'You have been reading for %TIME%. No trace has been raised. That is the part you should find frightening.'
  ]
}
};

window.O4_DATA = O4_DATA;
