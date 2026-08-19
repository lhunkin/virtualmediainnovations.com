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
  {ref:'TR-2098-0518', d:'2098.05.18', from:'PAC-07-B', to:'Deep Ward', cls:'INTERNAL',
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

  {id:'CP-0207', cat:'PATIENT', label:'Anchor listener',
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

  {id:'CP-0402', cat:'DETAINEE', label:'Digital person',
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
