/* ============================================================
   HAVELOCK OFFICE // STRATEGIC CONTINUITY INDEX
   o4-private.js — RETENTION EXCEPTION SPOOL

   Not a mail server. A spool.

   Every message here was deleted by the person who sent it.
   Deletion at Havelock is a flag, not an erasure: the item stops
   being visible to the account and is written to an exception
   queue for review. The queue has a reviewer field. The field has
   been empty since 2091.

   So this is the mail people believed was gone. It has been
   accumulating for seven years, indexed by owner, unread.

   Unread by the reviewer, at least. See the last mailbox.

   ── ADDING TO THIS FILE ─────────────────────────────────────
   Each mailbox is an object in `boxes`. Copy one, change the
   fields. `msgs` is ordered newest-first by convention only.

     k    short key, lowercase, no spaces (used by the filter chip)
     n    name as it appears in the index
     r    role, matching the public directory
     box  mailbox address
     cl   authorisation class ('—' for office accounts)
     st   spool state line
     note framing line shown under the mailbox header
     msgs [{ d, to, s, b, tag }]
            d    stamp
            to   recipient
            s    subject
            b    body HTML — <p> per paragraph, <i> for emphasis
            tag  short state flag, e.g. 'DELETED BY SENDER'

   Nothing here is labelled as leverage. It does not need to be.
   ============================================================ */

const O4_PRIVATE = {

head: 'OFFICE.MAILBOX // RETENTION EXCEPTION SPOOL',

intro: 'Items deleted by their senders and retained by an exception queue with no assigned reviewer. Ordered by owner. The owners are the twelve names and accounts published on the Pacific Special Measures directory, plus one that is not published anywhere.',

foot: 'The spool does not select. It keeps everything a sender tried to unsend, which is why it is the most honest object at this node. Every other table here was written by someone who expected to be read.',

boxes: [

/* ══════════════════════════════════════════════════════════
   DAGENAIS, MIREILLE — the sponsor
   ══════════════════════════════════════════════════════════ */
{
k:'dagenais', n:'DAGENAIS, MIREILLE', r:'Director, Pacific Special Measures',
box:'m.dagenais / suite 19-c / h3', cl:'O-2',
st:'RETENTION: NONE // 2,204 ITEMS IN SPOOL // RETURNING 7',
note:'Deletes daily and thoroughly. Has never once asked why deleted items take four seconds to clear.',
msgs:[

{d:'2098.06.16 23:52', to:'Aulakh, M. // personal relay', s:'don\'t answer this one', tag:'DELETED BY SENDER, 41 SECONDS',
b:`<p>I am going to say it in a place I can take back and then I am going to take it back.</p>
<p>You are on my roster. I sign your assessments. I decide, twice a year, in writing, what you are worth. There is no version of this where the power runs both ways, and the fact that you would tell me it does is exactly why I don't believe you.</p>
<p>I have been married eleven years. Théo is on the Sector Assembly ethics panel. Do you understand what that is? It is the body that would review me. He would recuse himself and it would be worse, because the recusal would be minuted and the minute would be public and somebody would count backwards from the date.</p>
<p>Delete this. I know you won't.</p>`},

{d:'2098.06.11 06:20', to:'Théo // household', s:'the December booking', tag:'DELETED BY SENDER',
b:`<p>Take the children to your mother's on the fifteenth. Not the twentieth. The fifteenth, and go by rail, and don't book it through the Havelock travel account.</p>
<p>Don't ask me. If you ask me I have to either lie to you or tell you something I am not permitted to know, and I am not permitted to know it because I asked four times and was refused by people who are junior to me in every respect except one.</p>
<p>Take Colette's inhaler and the physical documents. Yes, the paper ones.</p>
<p>I will be here. That is not a choice I am making, it is a choice that was made about me some time ago, and I have only recently worked out when.</p>`},

{d:'2098.06.04 15:38', to:'— // no directory entry', s:'the same arrangement', tag:'DELETED BY SENDER',
b:`<p>Same as March. Same amount, same route, and I want the physical pages this time, not a reader.</p>
<p>I want to be clear with you about what I am buying, because you have never once asked and that worries me. I am buying reading access to a compartment inside my own organisation that I have formally requested four times and been formally refused four times. The refusals came from a compartment senior to mine. I do not know who sits in it. I have a director's title and I am a customer of my own company.</p>
<p>If this ends badly for me I would like it on some record somewhere that I did not do it for money and I did not do it for anyone outside.</p>
<p>I did it because I have forty-one people whose lives I am spending against a date I am not allowed to see.</p>`},

{d:'2098.05.22 11:04', to:'Okonjo-Bell, S.', s:'the baselines', tag:'DELETED BY SENDER',
b:`<p>I read your fourth flag. I read the first three as well.</p>
<p>You are right. The capability numbers are not being used to protect anyone. They are a selection instrument and they have been a selection instrument since at least the autumn, and I have known that since at least the autumn, and I have signed every set.</p>
<p>Here is what I am not going to do. I am not going to stop signing them. If I stop, they are gathered by someone who does not flag anything, and your flags are the only reason I can name the four people who came off the list.</p>
<p>I am aware of how that sentence sounds. Please keep flagging.</p>`},

{d:'2098.05.09 04:47', to:'Fenwick, R.', s:'the prescription', tag:'DELETED BY SENDER',
b:`<p>Two more months and then I stop.</p>
<p>I know it isn't licensed on this side. I know where it comes from and I would prefer to keep not knowing more than that. What I need you to understand is that I am running a standing watch on four hours a night and if I go through Strategic Health for this it goes in a file, and the file goes to the people deciding which directors are stable enough to be read into things.</p>
<p>That is the whole trap. To be told the truth here you have to be judged sound, and the process of not being told is what makes you unsound.</p>
<p>Same drop. Don't put my name on it.</p>`},

{d:'2098.04.30 19:15', to:'Office — Strategic Continuity', s:'resignation — third draft', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>Please accept this as notice of my resignation from the position of Director, Pacific Special Measures, effective at the end of the notice period specified in my agreement.</p>
<p>I want to record the reason, because I think in some years somebody may go looking for one. I have been asked to prepare a unit for an event whose nature I am not authorised to be told. I have been given a date. I have not been given a noun. I have forty-one people who believe I know what I am doing.</p>
<p>I am not able to lie to them for another quarter and I am not able to tell them the truth, which I do not have.</p>
<p>Regretfully,</p>`},

{d:'2098.03.02 08:31', to:'self', s:'four refusals', tag:'DELETED BY SENDER',
b:`<p>Note for me. Not for anyone.</p>
<p>Requested O-3 read on /tern/ — Nov, Jan, Feb, and today. Four refusals. I have kept all four headers.</p>
<p>The first two were signed by a name I recognise. The third was signed by a compartment. The fourth was not signed at all and arrived eleven minutes after I sent the request, which is not enough time for a person.</p>
<p>Something in this building is refusing me on its own now, and it is getting faster.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   AULAKH, MINA — the coordinator
   ══════════════════════════════════════════════════════════ */
{
k:'aulakh', n:'AULAKH, MINA', r:'Unit Coordinator, FMU-3',
box:'m.aulakh / suite 19-c / h3', cl:'O-2',
st:'RETENTION: NONE // 891 ITEMS IN SPOOL // RETURNING 6',
note:'Deletes in batches, monthly, on the same day she files the roster. The two habits are related.',
msgs:[

{d:'2098.06.16 23:58', to:'Dagenais, M. // personal relay', s:'Re: don\'t answer this one', tag:'DELETED BY SENDER',
b:`<p>I read it four times and then I deleted it, and it took four seconds, and I sat and watched it take four seconds.</p>
<p>You are right about the power. You are wrong about what I think it means. I have never once believed it ran both ways. I went in anyway, with my eyes open, because I am thirty-one years old in a unit that does not expect anyone to reach forty and I decided I would rather be foolish than careful.</p>
<p>I build your calendar. Every window we have used, I made. Every one of them has a reason attached that a reviewer would accept. I did that. Not you. If it is ever pulled apart, pull it apart in that direction.</p>
<p>Go to sleep.</p>`},

{d:'2098.06.02 12:26', to:'People Services // allowances', s:'lapsed hazard entitlements — Q1 reconciliation', tag:'DELETED BY SENDER',
b:`<p>Reconciling Q1. Four entitlements remain open against personnel whose records closed mid-quarter. Per the standing note these lapse to the unit float rather than the estate.</p>
<p>I have applied them to the float and disbursed against operational discretion.</p>
<p>Amounts: 2,140. 1,880. 2,140. 990.</p>
<p>I am aware that operational discretion has, four quarters running, been disbursed to the same external account. I am the person who set that up and I am the person telling you about it, which I hope counts for something when somebody eventually asks.</p>`},

{d:'2098.05.28 02:09', to:'no recipient', s:'for Ravi', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>My brother is not registered.</p>
<p>He came up in the third wave, in the year they stopped issuing to anyone over sixteen without a sponsor, and our parents were already gone and I was not old enough to sponsor anybody. So he is nineteen years old and legally he does not exist, and he lives four levels down under Strathcona in a room I pay for out of money I take from dead colleagues.</p>
<p>He is also, and I have never written this anywhere, <i>capable</i>. Not badly. Not dangerously. He can hold a light in his hand for about a minute and he thinks it's funny.</p>
<p>I coordinate a unit whose function is to find people like my brother. I make the schedule that sends them out. I have made it for two years and I have never once sent them toward Strathcona, and one day somebody is going to plot my rosters on a map and see the hole.</p>`},

{d:'2098.05.14 07:41', to:'Operations Desk', s:'window adjustment — 21 May', tag:'DELETED BY SENDER',
b:`<p>Moving the transfer window from the 21st to the 23rd, 0400.</p>
<p>Instruction attached. I am attaching it rather than summarising it because I want the attachment to exist. It says, and I quote it exactly, <i>"the window is to fall outside the Alliance observer's site presence. Reason for adjustment on the record: vehicle availability."</i></p>
<p>Reason for adjustment on the record: vehicle availability.</p>
<p>I did what it said. I have also kept it.</p>`},

{d:'2098.04.19 16:53', to:'Vasquez-Lindqvist, H.', s:'roster — line 29', tag:'DELETED BY SENDER',
b:`<p>Quiet question, and I would rather it stayed one.</p>
<p>FMU-3 has a roster line 29. It has had one since I inherited the unit. It carries a name, a capability class, an equipment custody schedule and a training record that has been kept current for six years.</p>
<p>There is no onboarding record. No agreement. No medical. People Services has no file. The name has never drawn pay and has never taken leave and was marked present at eleven activations.</p>
<p>I am not asking you to pull anything. I am asking whether it would be normal, in your experience, for a person to exist in every downstream system and none of the upstream ones.</p>`},

{d:'2098.02.07 21:12', to:'Dagenais, M.', s:'the fifteenth', tag:'DELETED BY SENDER',
b:`<p>You booked the Rossland cabin under the unit account and then cancelled it eleven minutes later and rebooked it personally.</p>
<p>Eleven minutes is enough for it to have been indexed. I know because I index it.</p>
<p>I have amended the entry. It now reads as a site familiarisation booking that was released. That is the only lie I have told for you and I am telling you I told it, so that you know the shape of what I will and will not do.</p>
<p>I will cover a weekend. I would not cover anything with a person in it.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   HALLORAN-OHENE, ADAEZE — the Chair
   ══════════════════════════════════════════════════════════ */
{
k:'chair', n:'HALLORAN-OHENE, ADAEZE', r:'Chair and Chief Executive',
box:'office.chair / vancouver / public', cl:'O-2',
st:'RETENTION: NONE // 6,077 ITEMS IN SPOOL // RETURNING 8',
note:'The Chair of Havelock Industries reads at O-2. This is not an error in the index. It has been checked.',
msgs:[

{d:'2098.06.15 22:04', to:'Voss, E.', s:'I am asking a fifth time', tag:'DELETED BY SENDER',
b:`<p>Elaine.</p>
<p>I am the Chair. I sign the accounts. I stand in front of the Alliance and the Assembly and forty thousand employees and I tell them what this company is, and I have now been refused read access to programme O4-019 five times by people whose salaries are a line item I approve.</p>
<p>You do not work here. You have no contract, no employment record and no security file, and you approve your own invoices against a reserve I cannot audit. And you can read it and I cannot.</p>
<p>Tell me plainly whether I am the Chair of this company or the front of it. I will accept either answer. I will not accept a fifth deferral.</p>`},

{d:'2098.06.15 23:30', to:'Voss, E. // received, retained in spool', s:'Re: I am asking a fifth time', tag:'INBOUND — DELETED BY RECIPIENT',
b:`<p>Adaeze.</p>
<p>You are the Chair. You are also the person who will be asked, under oath, in some room, in some year, what she knew. Every hour you spend not knowing is an hour of that testimony that will be true.</p>
<p>I did not build that protection for my comfort. I built it for yours, and for the company's, and if you dismantle it you will not gain the compartment — you will only lose the answer.</p>
<p>You have asked five times. I have counted them too. Ask a sixth and I will read you in, and you will not be able to unknow it, and Ifeanyi's file will pass across your desk with your own signature on the referral. Think carefully about which of us that protects.</p>`},

{d:'2098.06.09 05:50', to:'no recipient', s:'reasons I am still here', tag:'COMPOSED, NEVER SENT, DELETED, RESTORED, DELETED',
b:`<p>1. Forty thousand people draw pay from this company and I do not know a single other structure in the Pacific that would keep them fed through what is coming.</p>
<p>2. If I go, the seat is filled within a week by someone who has never asked a question in their life.</p>
<p>3. Eleven prevented events in twenty-two years at one facility alone. Eleven. Whatever else is true, that is also true.</p>
<p>4. <i>[line removed by author]</i></p>
<p>5. I am afraid.</p>
<p>Item 4 is the real one and I have now deleted it three times, which means it is written down three times, which means I have not deleted it at all.</p>`},

{d:'2098.05.27 14:18', to:'Strategic Health // Clinical Lead', s:'Ward B — family enquiry protocol', tag:'DELETED BY SENDER',
b:`<p>I will not be listed as a next of kin contact for Ward B. Not because I am ashamed, though I am, but because the moment my name is on that field somebody downstream will treat my son as a person with a protector, and every study I have read says that changes how he is handled.</p>
<p>He volunteered. He was twenty-four and he had read the instrument returns and he volunteered, and I have never been able to decide whether that was courage or whether he did it because of who his mother is.</p>
<p>Send me his weights and his sleep. Nothing else. Do not send me anything with the word <i>progress</i> in it.</p>`},

{d:'2098.05.11 09:22', to:'Office of the Chair // personal counsel', s:'restructuring — Pacific holdings', tag:'DELETED BY SENDER',
b:`<p>Proceed with the structure as discussed. Move the tranche into the Rongomai vehicle before the September window. Do not use Havelock's counsel for any part of this.</p>
<p>I understand what the vehicle does. It pays on a decline. You do not need to say it again and you certainly do not need to say it in writing.</p>
<p>If I am asked I will say it was estate planning, and it will be estate planning, and both of those things will be true at once. That is the condition I live in now and I have stopped finding it remarkable.</p>`},

{d:'2098.04.03 11:37', to:'People Services // Personnel Trust', s:'Kettleburn — settlement', tag:'DELETED BY SENDER',
b:`<p>Approve it. All of it, at the upper band, and do it this week rather than at the quarter.</p>
<p>The family are not asking for money. They are asking what happened in the eleven minutes between the alarm and the response, and we cannot tell them, and so we are offering them money instead, and they will take it because they have two children.</p>
<p>I want a note in my own file recording that I knew exactly what I was doing here. I am not going to be one of those people who is surprised by their own paperwork.</p>`},

{d:'2098.02.24 16:40', to:'Corporate Communications', s:'Gilmore statement — do not use draft two', tag:'DELETED BY SENDER',
b:`<p>Draft two says the guideway interruption was caused by a fault in the traction supply.</p>
<p>I was briefed at 0710. Forty-one minutes, two unlicensed capable persons, forty-one thousand riders held on the platforms, and a decision taken at 0641 — before I was told — to characterise it as electrical.</p>
<p>Use draft two.</p>
<p>I want the record to show that I asked for the alternative and that no alternative was produced. That is a smaller thing than doing the right thing. It is the size of thing I appear to be capable of this year.</p>`},

{d:'2097.11.19 07:55', to:'Board // Governance', s:'the Voss exemption — my copy', tag:'DELETED BY SENDER',
b:`<p>Attaching my counterpart of the consultancy exemption granted in 2093, since the registry copy now shows no author in the signature block.</p>
<p>Mine has an author. It is me.</p>
<p>I am not raising this as a complaint. I am raising it because a document in our own registry has had a name removed from it after execution, and nobody has been able to tell me by what process, and the process by which a name leaves a Havelock document is a thing I would like to understand before it happens to a different document.</p>
<p>Please confirm receipt. Nobody confirmed receipt.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   OKONJO-BELL, S. — Clinical Lead
   ══════════════════════════════════════════════════════════ */
{
k:'okonjo', n:'OKONJO-BELL, S.', r:'Clinical Lead, Strategic Health',
box:'s.okonjo-bell / deck 4 / medical', cl:'O-3',
st:'RETENTION: NONE // 1,663 ITEMS IN SPOOL // RETURNING 7',
note:'Clinical accounts are exempt from the spool by policy. Hers is not. The exemption was withdrawn in 2094 and she has never been told.',
msgs:[

{d:'2098.06.13 18:02', to:'Dagenais, M.', s:'fifth flag — capability assessment', tag:'DELETED BY SENDER',
b:`<p>Fifth flag. I will keep numbering them.</p>
<p>Four personnel who scored in the upper decile on the March assessment are no longer on the Vancouver roster. All four moved within nineteen days. None of the four moves went through Strategic Health, which is not possible, because I am the clinical gate for movement.</p>
<p>So either the gate is being bypassed or I am not the gate. I would like to know which, and I would like to know it in writing, and I am aware that I have now asked for something in writing five times from a person who has never once given me anything in writing.</p>
<p>I take these measurements to protect people. If they are being used to select people, then I am not a doctor here. I am an instrument.</p>`},

{d:'2098.06.01 03:14', to:'no recipient', s:'Mrs Adeyemi', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>Dear Mrs Adeyemi,</p>
<p>Your daughter was in my care for eleven weeks. She was funny, and she was frightened, and she asked me on the second day whether I was allowed to lie to her and I said no, and that was the first lie.</p>
<p>She did not die of a cardiac event. She died during a procedure she had consented to under a form that described it in terms she could not have understood, that I helped draft, and that I knew at the time was drafted to be signed rather than to be read.</p>
<p>I am not permitted to send you this. I am writing it because at some point I stopped being able to tell the difference between things I am not permitted to say and things that are not true, and this is me checking that I still can.</p>`},

{d:'2098.05.20 10:26', to:'Strategic Health // records', s:'cohort C — comparative series', tag:'DELETED BY SENDER',
b:`<p>Continue the C series. Same protocol, same intervals, same blinding.</p>
<p>To be explicit for the file that will not exist: cohort A is Deep Ward. Cohort B is the licensed enhanced population. Cohort C is Havelock operational personnel — our own unit, our own people, who believe they are attending an occupational health review.</p>
<p>I set up C without authorisation because you cannot interpret A without a control that is not in a cell, and every properly constituted control they offered me was drawn from a population that was also in a cell.</p>
<p>The finding, if you want it early: there is no meaningful separation between A and C on any measure that matters. Which means either our people are what they are containing, or the thing being measured was never about capability at all.</p>`},

{d:'2098.05.09 05:02', to:'Fenwick, R.', s:'quantity', tag:'DELETED BY SENDER',
b:`<p>Sixty, not thirty, and I will book it out as ward stock loss.</p>
<p>I want you to hear me say this once. I am a physician supplying an unlicensed cognitive stabiliser to a director who is running a unit on four hours of sleep, and my clinical judgement is that the alternative — her going through the formal pathway and being flagged as unstable and being replaced by whoever is next — is worse for the forty-one people underneath her.</p>
<p>That is a real clinical judgement. It is also exactly what a person says on the way to somewhere bad.</p>`},

{d:'2098.03.28 20:47', to:'Office — Strategic Continuity', s:'refusal — Deep Ward protocol 9', tag:'DELETED BY SENDER',
b:`<p>I will not run protocol 9.</p>
<p>Not "I have concerns." Not "I would like this reviewed." I will not run it, I will not sign for anyone else running it, and if it is run I will record that I refused, in the notes, in a place that is very difficult to remove.</p>
<p>Protocol 9 requires the subject to be conscious. There is no clinical reason for the subject to be conscious. Somebody wants to know what it is like from the inside and has written a protocol to find out, and has put a physician's signature block at the bottom of it, and it is not going to be mine.</p>`},

{d:'2098.03.29 09:15', to:'Okonjo-Bell, S. // received, retained in spool', s:'Re: refusal — Deep Ward protocol 9', tag:'INBOUND — DELETED BY RECIPIENT',
b:`<p>Doctor,</p>
<p>Your refusal is noted and accepted. Protocol 9 will be reassigned. No further action is required of you.</p>
<p>Separately, and unconnectedly, Personnel Trust has completed the periodic verification of clinical credentials. Your registration is confirmed current in this jurisdiction. The verification did not extend to prior jurisdictions, as it never does.</p>
<p>We note the name under which you qualified in Lagos in 2081 and the finding of the Council in 2089. We note that neither appears in your Havelock file, and that this is because we did not put them there.</p>
<p>Nothing is required of you. We simply wanted you to know that the file is well kept.</p>`},

{d:'2097.12.04 13:33', to:'no recipient', s:'the thing about consent', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>Consent is the whole architecture. Take it away and everything here is a crime; leave it in and everything here is medicine. So the entire enterprise depends on a signature, and the signature depends on comprehension, and comprehension is the one variable nobody measures.</p>
<p>I have started measuring it. Quietly. I read the forms back to subjects afterwards and ask them what they agreed to.</p>
<p>Twenty-two of thirty could not describe it. Four described something that was not in the document at all. Two described it correctly and both of those two had a lawyer in the family.</p>
<p>I do not know what to do with this number. I only know that I am the only person who has it.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   FENWICK, R. — Augmentation Technician
   ══════════════════════════════════════════════════════════ */
{
k:'fenwick', n:'FENWICK, R.', r:'Augmentation Technician',
box:'r.fenwick / deck 4 / medical', cl:'O-2',
st:'RETENTION: NONE // 3,410 ITEMS IN SPOOL // RETURNING 7',
note:'Does not delete his mail. Uses an account that purges nightly and believes purge and delete are different words for different things. They are the same word.',
msgs:[

{d:'2098.06.14 01:19', to:'Uda // Sector 4', s:'the March schedule', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>Two more months. I said two more months in March and I mean it more now than I did then.</p>
<p>You will get your money. What you will not get is anything else, and I want that written down between us, because the last time we spoke you asked a question about "what else comes through Deck 4" and I have thought about that question every day since.</p>
<p>The stuff I move is decommissioned. It is written off, it is scrap, it is in the bin. Nobody is hurt by a scrapped forearm assembly finding a body that needs one, and half the people down there are wearing my rubbish and walking on it.</p>
<p>Ask me about anything with a serial that is still live and I stop, and I take the loss, and you can do whatever you were always going to do.</p>`},

{d:'2098.06.07 23:40', to:'no recipient', s:'the override', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>Writing it down because I keep almost telling someone.</p>
<p>Every interface I have fitted since 2094 has a maintenance path in it. It is not a Havelock feature. I put it there. The reason I put it there is legitimate and I will defend it to anybody: when an interface locks up in the field the licensed recovery route takes eleven minutes through Strategic Health and I have watched a man scream for eight of them.</p>
<p>Here is the part I do not defend. The path does not just reset. It reads. If I wanted to — and I have never, not once — I could sit at my bench and see what any of them are seeing.</p>
<p>Forty-one people. I know it is there. That is not the same as it not existing, and one day somebody who is not me is going to find it, and it will have my hands all over it.</p>`},

{d:'2098.05.30 17:26', to:'Equipment Control // asset custody', s:'returns from Deep Ward — query', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>Third query on this and I would genuinely like an answer rather than a reference number.</p>
<p>Hardware is coming back from Deep Ward through my bench for teardown. Some of it is ours. Some of it is Alliance surplus, fine, I can read those markings.</p>
<p>Some of it is neither. No maker's mark, no serial convention I have seen in nineteen years, tolerances better than we can hold, and joins that are not welds or bonds or any process I can name. One piece has a surface finish that my instruments read as three different materials depending on the day.</p>
<p>Where is it from. I am not asking what it does. I am asking who <i>made</i> it, and Equipment Control has now told me three times that the custody record is complete, which is not the same as answering.</p>`},

{d:'2098.05.09 05:44', to:'Dagenais, M.', s:'Re: the prescription', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>Same drop, no name, understood.</p>
<p>I'm not going to lecture you. I will say one thing and then never again: I have fitted interfaces to nineteen people who were absolutely certain they were handling it, and I have taken interfaces out of eleven of them, and the certainty is the symptom, not the counter-evidence.</p>
<p>Two months. I'm going to hold you to two months and I am going to be annoying about it.</p>`},

{d:'2098.04.22 08:12', to:'no recipient', s:'Unit 6 calibration — the voice instruction', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>I want this somewhere.</p>
<p>On the 19th I was told, by voice, at my bench, by a person, that unit 6's left-side latency was to be left at the upper tolerance rather than trimmed. Upper tolerance is within spec. Upper tolerance is also, in a person with unit 6's reaction profile, about a fifth of a second, and a fifth of a second is the difference between a hand closing and a hand nearly closing.</p>
<p>There is no written instruction. I asked for one and was told the request itself was the sort of thing that gets noticed.</p>
<p>Unit 6 went out on the 21st. I have not slept well. I have run the trim back to nominal and logged it as a routine service, which is a lie in the direction of a person still being alive, and I have decided I can carry that one.</p>`},

{d:'2098.03.15 12:04', to:'Uda // Sector 4', s:'the number', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>Forty-one thousand. I know what it was. You do not have to keep telling me what it was.</p>
<p>My daughter's ward stay was ninety per cent covered and the ten per cent was forty-one thousand, and Havelock's own benefits schedule calls that "catastrophic co-participation," which is a phrase somebody was paid to write.</p>
<p>I work for a company with a strategic reserve I am not allowed to know the size of, and I borrowed from a Sector 4 lender to keep a nine-year-old on a ward two floors below my own bench.</p>
<p>Two more months.</p>`},

{d:'2098.01.28 19:50', to:'no recipient', s:'K.', tag:'PURGED BY ACCOUNT POLICY',
b:`<p>The new intake came in for fitting today. Twenty-three, maybe. Made a joke about the chair. Everybody makes a joke about the chair; it is the only thing every single one of them has in common.</p>
<p>I have fitted a hundred and six of these. I remember all of them. That is not a nice quality in a technician and nobody warns you about it at the start.</p>
<p>I gave them the good sleeve. There is a good sleeve — the tolerances come off the line in a spread and I keep the tight ones back and I decide who gets them, and no procedure anywhere in this building acknowledges that I make that decision every single week.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   VASQUEZ-LINDQVIST, H. — Records Custody
   ══════════════════════════════════════════════════════════ */
{
k:'vasquez', n:'VASQUEZ-LINDQVIST, H.', r:'Records Custody',
box:'h.vasquez-lindqvist / havelock centre / internal', cl:'O-2',
st:'RETENTION: NONE // 4,902 ITEMS IN SPOOL // RETURNING 7',
note:'The custodian of the archive is the heaviest single contributor to the exception spool. She knows more than anyone alive about how Havelock destroys a document and has never once considered how it keeps one.',
msgs:[

{d:'2098.06.12 21:33', to:'Independent Advocate // external panel', s:'sixth package', tag:'DELETED BY SENDER',
b:`<p>Sixth package attached. Same route, same encryption, same understanding.</p>
<p>I want to restate the understanding because I am about to trust you with names. The directory says you are outside my division and outside my chain of command and <i>not reportable to Havelock</i>. Those are the words. I have read them perhaps four hundred times.</p>
<p>Inside are the custody logs for six retrievals I was instructed to perform out of hours, and the names of the four people who came to me privately afterwards because they had noticed the same thing I had.</p>
<p>Please do not tell me what you do with it. I have found that I work better not knowing.</p>`},

{d:'2098.06.05 16:47', to:'no recipient', s:'index — items removed', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>Running index. Fourteen years. Every item I have been instructed to remove from the archive, by date, by instruction reference, by the name of the person who signed, and — this is the part that would end me — by <i>what was in it</i>.</p>
<p>I am not supposed to read them. Reading them is not in the instruction. The instruction says retrieve and transfer, and it does not say do not read, because whoever wrote the instruction could not imagine a records clerk being curious.</p>
<p>Two hundred and six items. Forty-one of them are the same kind of thing. I did not notice the kind until item ninety.</p>
<p>This index is the only reason I am safe and it is the only reason I am not.</p>`},

{d:'2098.05.19 09:08', to:'Holt, M.', s:'we should talk about the annexe', tag:'DELETED BY SENDER',
b:`<p>Mara.</p>
<p>You have entered the annexe out of hours sixty-one times in fourteen months. I know because I keep the log and because I have been in there for eleven of them.</p>
<p>Neither of us has reported the other. I have thought about why for a long time and I think the answer is that we both know that the first one to report is the one who has to explain what they were doing.</p>
<p>Nothing has ever been reported missing. That is the thing I want to say to you out loud. Not "nothing is missing" — <i>nothing has been reported missing</i>, and I am the person who would file the report, and I have not filed one, and neither have you.</p>
<p>We are two people quietly agreeing that a shelf is shorter than it was.</p>`},

{d:'2098.04.30 11:52', to:'Alliance liaison // records', s:'physical retrieval — fourteen days', tag:'DELETED BY SENDER',
b:`<p>Confirming the standard notice period for physical records is fourteen days.</p>
<p>People assume fourteen days is a courier and a basement and an old woman with a trolley. I would like to state, in a place I intend to delete, what fourteen days is actually for.</p>
<p>Day one to three, the request is indexed and a copy of the index entry goes upstairs. Day four to nine, the file is reviewed by a compartment I cannot name against criteria I have never seen. Day ten to thirteen, the file is <i>reconstituted</i> — that is the word on the form — and returned to me. Day fourteen, I hand you a folder.</p>
<p>I have compared a reconstituted folder against my own memory of the original twice in fourteen years. I have not done it a third time.</p>`},

{d:'2098.03.11 22:19', to:'no recipient', s:'the payment', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>Once. It happened once and it was four years ago and I have never spent it.</p>
<p>Item 118. I was instructed to remove it and I was, separately, three days later, paid an amount roughly equal to a year of my salary by a route that has never repeated. Nobody said the two were connected. Nobody says anything is connected here; that is the entire method.</p>
<p>I took it and I put it in an account and I have looked at the balance perhaps a hundred times and never moved it.</p>
<p>I tell myself that not spending it means something. It does not. It means I am keeping the evidence in a bank.</p>`},

{d:'2098.02.02 14:26', to:'Aulakh, M.', s:'Re: roster — line 29', tag:'DELETED BY SENDER',
b:`<p>No, it would not be normal. It is not even unusual. It is a fourth thing.</p>
<p>Records has a name for a person who exists downstream and not upstream. We call them a <i>fixture</i>. There is no procedure that creates a fixture and there is no procedure that removes one, and I can show you eleven of them across the Pacific if you ever want to be unable to sleep.</p>
<p>Do not pull line 29. If you pull it, an access entry is created against a record with no owner, and access entries against ownerless records go somewhere I have never been able to trace.</p>
<p>Come and see me in the annexe. Bring nothing that writes.</p>`},

{d:'2097.09.14 07:31', to:'no recipient', s:'2071', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>Somebody upstairs has pulled the 2071 Pacific routing tables four times this year. They are the dullest documents in this basement and I have started noting who asks.</p>
<p>The list is not long and it is not junior.</p>
<p>The tables list eleven laboratory sites. The public register from the same year lists ten. This is the sort of discrepancy that is usually a typing error, and I have spent nine months establishing that it is not a typing error, and the ninth month was the one where I found that the eleventh site has a consumables allocation and the allocation has never gone below forty persons.</p>
<p>Forty persons. Every quarter. Including the quarters where the site reported nobody there at all.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   OPERATIONS DESK — shared watch account, many hands
   ══════════════════════════════════════════════════════════ */
{
k:'opsdesk', n:'OPERATIONS DESK', r:'Pacific Special Measures // standing watch',
box:'ops.desk / suite 19-c / h3', cl:'—',
st:'RETENTION: NONE // 18,844 ITEMS IN SPOOL // RETURNING 6',
note:'A shared account is a place where nobody is anybody. Eleven people hold the credential. The spool does not distinguish between them and neither, it turns out, does anything else.',
msgs:[

{d:'2098.06.17 03:58', to:'ops.desk // internal', s:'0341 — do we log it', tag:'DELETED FROM SHARED ACCOUNT',
b:`<p>Whoever's on at 0600, read this before you take the chair and then decide what you want to do with it.</p>
<p>0341. Sensor line down the seawall goes to fault for nine seconds. Not one sensor. The line. Nine seconds, then healthy, no alarm, no dispatch, nothing to see.</p>
<p>Standing guidance says a sub-ten-second line fault is a maintenance note, not a watch entry. I have made it a maintenance note. I want somebody else to know that I made a choice there, because the same nine-second fault has now happened on the 2nd, the 9th and the 17th, and if it is a maintenance note every time then it never becomes a pattern in any system that anyone reads.</p>
<p>I am not going to be the one who raises it. I have a family. But I am also not going to be the only one who saw it.</p>`},

{d:'2098.06.16 04:02', to:'ops.desk // internal', s:'Re: 0341 — do we log it', tag:'DELETED FROM SHARED ACCOUNT',
b:`<p>Log it.</p>
<p>I have been on this desk six years and I will tell you the thing nobody tells you at handover: the desk does not exist to see things. It exists to produce a record that is <i>consistent</i>. Consistency is the product. Truth is a raw material and it is not the only one.</p>
<p>The moment you start deciding which nine seconds are worth a line, you are doing somebody else's job for free and you are doing it in a way that cannot be traced back to them.</p>
<p>Log it. Let it be somebody's problem upstairs. That is what upstairs is for and it is the only leverage a watchkeeper has ever had.</p>`},

{d:'2098.06.16 04:40', to:'ops.desk // internal', s:'Re: Re: 0341', tag:'DELETED FROM SHARED ACCOUNT',
b:`<p>It's gone.</p>
<p>I logged it at 0411 like you said. I have just refreshed the watch log to write the 0430 entry and there is no 0411 entry. There is a 0409 and there is a 0417 and between them there is nothing, and the offsets do not skip.</p>
<p>I did not delete it. You did not delete it. It is a shared account so nobody can prove either of those sentences.</p>
<p>I am going to write it again on paper and put the paper in my bag and never mention this to anyone, and I would appreciate it if you did the same.</p>`},

{d:'2098.05.31 02:15', to:'ops.desk // internal', s:'token 4471', tag:'DELETED FROM SHARED ACCOUNT',
b:`<p>Issued activation token 4471 against a unit designation that is not in the unit table.</p>
<p>I want to be precise about how this went, because it was not a mistake and I would like somebody to understand the mechanism. The request arrived pre-authorised. The authorising signature validated. The unit designation returned "not found" — and the desk software treats "not found" as a non-blocking condition, because in 2089 a real unit was blocked in a real emergency by a table that had not been updated.</p>
<p>So the safeguard was removed for a good reason nine years ago and tonight I handed operational authority to a designation that does not exist.</p>
<p>The token was consumed at 0340. Something used it.</p>`},

{d:'2098.05.04 23:11', to:'— // personal, wrong account', s:'tomorrow', tag:'DELETED FROM SHARED ACCOUNT',
b:`<p>I can get away at four. Don't message my personal, it's on the household plan and she reads the summaries.</p>
<p>This account is the safest thing in the building, do you understand that? Eleven people hold it. Anything sent from it was sent by "the desk." There is no attribution. I have been doing this for two years and there is no version of the logs where it is me.</p>
<p>Same place. Wear the coat.</p>`},

{d:'2098.04.09 06:22', to:'ops.desk // internal', s:'standing order 19 — origin', tag:'DELETED FROM SHARED ACCOUNT',
b:`<p>Handover note. Do not action standing order 19 without reading this first.</p>
<p>SO-19 has been on this desk since before any of us. It is executed on receipt of a specific trigger phrase on the priority channel. It instructs the watch to open four doors, in order, and to make no entry until they are closed again.</p>
<p>There is no originator field. There is no review date. I have traced it back through three system migrations and in every one it is simply <i>already there</i>, arriving intact from the previous system like a stone in a river.</p>
<p>Nobody has ever received the trigger phrase. We rehearse it quarterly. We have rehearsed a thing with no author two hundred and eleven times.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   COMMON MESH TRUST OFFICE — "report forgeries here"
   ══════════════════════════════════════════════════════════ */
{
k:'trust', n:'COMMON MESH TRUST OFFICE', r:'Systems Intelligence',
box:'mesh.trust / pacific relay 07 / internal', cl:'—',
st:'RETENTION: NONE // 9,127 ITEMS IN SPOOL // RETURNING 6',
note:'The office to which employees are instructed to report suspected forged or hostile messages.',
msgs:[

{d:'2098.06.14 10:41', to:'Trust Office // synthesis', s:'template library — Q2 additions', tag:'DELETED BY SENDER',
b:`<p>Four additions to the library this quarter, all validated against live samples, all passing trust-anchor verification at the relay.</p>
<p>T-041 — Director-level, Pacific Special Measures. Voice model built from 1,100 retained items. Cadence is very good; she has a habit of a one-word paragraph before a refusal and the model has learned it.</p>
<p>T-042 — Office of the Chair, all-personnel register.</p>
<p>T-043 — Strategic Health, clinical instruction, Deck 4 formatting.</p>
<p>T-044 — Independent Advocate acknowledgement of receipt.</p>
<p>Reminder to the team that library items are for <i>authorised continuity exercises</i> and that any use outside an exercise requires a numbered authority. Also a reminder that we do not hold a copy of the numbered authorities. Systems Intelligence issues them; Systems Intelligence stores them. We just build the voice.</p>`},

{d:'2098.06.03 15:29', to:'Trust Office // synthesis', s:'effectiveness — Q1 measures', tag:'DELETED BY SENDER',
b:`<p>Q1 measures on synthetic correspondence, as requested for the reserve submission.</p>
<p>Volume: 1,880 synthesised items across eleven Pacific sites. Detection: nine. Of those nine, seven were detected by the same four individuals.</p>
<p>Reports received by this office regarding those nine: nine. All nine were reported to us, because we are the office you report forgeries to, which means our detection rate is not an estimate. It is a census.</p>
<p>Recommend the four individuals be recorded. Not actioned — recorded. People who can see us are a resource before they are a risk.</p>`},

{d:'2098.05.21 08:07', to:'Systems Intelligence // requesting officer', s:'query — revocation', tag:'DELETED BY SENDER',
b:`<p>Answering your question directly because I would like the answer to exist before the request does.</p>
<p>Yes. We can synthesise a revocation. A revocation is a shorter document than an instruction and carries fewer voice markers, so it is technically the easiest thing we make.</p>
<p>No, there is no downstream check. A revocation that verifies at the relay is a revocation. The receiving system does not ask whether the revoking authority intended it, because in the entire design of the Common Mesh there is no place for that question to be asked.</p>
<p>I am going to ask, once, and then I am going to build whatever you tell me to build: <i>whose</i> authority are we revoking, and does that person know they are about to stop having it?</p>`},

{d:'2098.05.22 09:16', to:'Trust Office // received, retained in spool', s:'Re: query — revocation', tag:'INBOUND — DELETED BY RECIPIENT',
b:`<p>Build it.</p>
<p>Your second question is outside the scope of the tasking and will not be answered. Your having asked it has been noted, which is the appropriate handling of a question asked in good faith by a competent officer.</p>
<p>Delivery by the 29th.</p>`},

{d:'2098.04.17 17:55', to:'Personnel Trust', s:'reassignment — N. Broadbent', tag:'DELETED BY SENDER',
b:`<p>Requesting reassignment of N. Broadbent out of synthesis to any suitable role at any Pacific site.</p>
<p>No performance concern. Her work is the best in the office. She has raised, in writing, four times, that the library contains a Director-level template and that no continuity exercise in the last three years has required one.</p>
<p>She is not wrong. That is why she cannot stay. An officer who is right in writing, repeatedly, in a place where the writing is retained, becomes a liability to herself before she becomes one to us.</p>
<p>Somewhere quiet. Somewhere with good people. I mean that.</p>`},

{d:'2098.02.28 12:02', to:'Trust Office // all staff', s:'the security letter goes out today', tag:'DELETED BY SENDER',
b:`<p>The all-personnel security notice goes out at 1400 across all Pacific sites. Please read it before it lands, because you will be asked about it.</p>
<p>It instructs employees to open communications only from trusted sources, to verify unexpected instructions through a second channel, and to report anything anomalous to this office.</p>
<p>Every word of it is true and every word of it is good advice, and it was drafted in this room by the people who make the anomalies, and it will measurably reduce successful intrusion by parties who are not us.</p>
<p>I have stopped finding this funny. I mention it because I remember when I did, and I think the date it stopped being funny is a thing a person should keep track of.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   INDEPENDENT ADVOCATE — "not reportable to Havelock"
   ══════════════════════════════════════════════════════════ */
{
k:'advocate', n:'INDEPENDENT ADVOCATE', r:'Confidential Reporting // external Alliance panel',
box:'advocate.pacific / external / protected', cl:'—',
st:'RETENTION: NONE // 2,006 ITEMS IN SPOOL // RETURNING 6',
note:'An external panel. Outside your division, outside your chain of command, not reportable to Havelock. The spool that holds this mailbox is a Havelock spool.',
msgs:[

{d:'2098.06.13 07:12', to:'Rongomai Foundation // secretariat', s:'Q2 disbursement — confirm', tag:'DELETED BY SENDER',
b:`<p>Confirming receipt of the Q2 disbursement in full and on schedule. As always, our sincere thanks to the Foundation for its continued support of independent oversight in the Pacific.</p>
<p>For the annual return I will need the standard wording on the Foundation's own funding sources. Last year's formulation — "diversified philanthropic endowment, no single donor exceeding fifteen per cent" — was accepted by the Alliance panel without query.</p>
<p>I would ask, gently and for the fourth year, whether that formulation remains accurate. I am not asking you to tell me it isn't. I am asking you to tell me it is, so that when I sign the return I am repeating something rather than deciding something.</p>`},

{d:'2098.06.13 18:44', to:'Advocate // received, retained in spool', s:'Re: Q2 disbursement — confirm', tag:'INBOUND — DELETED BY RECIPIENT',
b:`<p>The formulation remains accurate.</p>
<p>We note your reference to a fourth year. We would observe, in a spirit of partnership, that the Foundation has never once sought to influence a determination of your panel, and that the panel's independence is precisely what makes it worth funding.</p>
<p>We would hate for a question of accuracy to become a question of continuation.</p>`},

{d:'2098.06.02 13:30', to:'Personnel Trust // Havelock', s:'closed without action — periodic notification', tag:'DELETED BY SENDER',
b:`<p>Periodic notification of protected disclosures closed without action, per the information-sharing arrangement.</p>
<p>Six matters closed this period. Reportable detail is withheld under the confidentiality undertaking. The following is provided under the arrangement's operational necessity clause:</p>
<p>Ramos, T. — Vancouver. Ferreira, J. — Vancouver. Okwuosa, B. — Prince Rupert. Lindqvist, — <i>[name held]</i>. Adeyemi, F. — Vancouver. Broadbent, N. — Pacific Relay 07.</p>
<p>Closure in each case reflects insufficient evidentiary basis to sustain a referral. Complainants have been informed that their disclosures were taken seriously.</p>`},

{d:'2098.05.29 20:16', to:'no recipient', s:'operational necessity', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>The arrangement was signed in 2091 and I have read clause 9 perhaps two hundred times looking for the sentence that makes it all right.</p>
<p>We do not pass on what they told us. We pass on that they told us. We pass on the name. And we tell ourselves those are different things, because the substance is protected, and the substance <i>is</i> protected, and I have never disclosed a single word of substance in seven years.</p>
<p>I looked at the transfer ledger last month. It is public at summary level; anybody can. Four of the six names I notified in Q4 appear in it within three weeks of my notification.</p>
<p>I have not looked at Q1. I know exactly what I will find and I have decided that not looking is a thing I can still choose.</p>`},

{d:'2098.05.06 09:48', to:'Advocate panel // members', s:'caseload reallocation — Advocate 3', tag:'DELETED BY SENDER',
b:`<p>Advocate 3's caseload is reallocated across the panel with immediate effect.</p>
<p>Advocate 3 has declined to participate in periodic notification. That is a position she is entitled to hold. It is not, however, compatible with the information-sharing arrangement under which this panel operates, and the panel operates under that arrangement or it does not operate.</p>
<p>She has asked me to record her view. Here it is, in her words: <i>"An oversight body that reports the identities of complainants to the organisation complained of is not an oversight body. It is a filter, and the people it filters do not know they are being filtered, and that is worse than having no advocate at all."</i></p>
<p>Recorded. Reallocated.</p>`},

{d:'2098.03.20 11:05', to:'Vasquez-Lindqvist, H.', s:'Re: sixth package', tag:'DELETED BY SENDER',
b:`<p>Received. Held securely. No further correspondence on this from me — you will understand why.</p>
<p>You asked me once not to tell you what I do with these, and I have honoured that, and I want you to know that the honouring has been the easiest promise of my professional life.</p>
<p>Please take care. Vary your hours. And if a moment ever comes when you are asked whether you have been in contact with this panel, I would like you to feel entirely free to say yes.</p>
<p>It will not be new information.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   PEOPLE SERVICES — Personnel Trust
   ══════════════════════════════════════════════════════════ */
{
k:'people', n:'PEOPLE SERVICES', r:'Personnel Trust // agreements, benefits, identity selection',
box:'people.services / vancouver / internal', cl:'—',
st:'RETENTION: NONE // 12,318 ITEMS IN SPOOL // RETURNING 6',
note:'"Personnel Trust." The word trust in this name is a noun in the legal sense, not the moral one, and the distinction is load-bearing.',
msgs:[

{d:'2098.06.10 14:22', to:'Personnel Trust // agreements', s:'tier selection — Q2 conversion', tag:'DELETED BY SENDER',
b:`<p>Q2 conversion rate on identity tier selection: 71 per cent electing Tier 2. Target was 65. Well done to the team.</p>
<p>Reminder on framing, since the new intake starts on the 24th. Tier 1 is described as <i>full civic registration with standard obligations</i>. Tier 2 is described as <i>simplified continuity registration with reduced administrative burden</i>. Both descriptions are accurate.</p>
<p>Do not volunteer that Tier 2 places the individual's civic record in Havelock custody, that it removes standing to petition the Sector Assembly independently, or that reversion requires the consent of the custodian. These are all in the agreement, at clause 14, and the agreement is provided.</p>
<p>Nobody has ever asked about clause 14. In four years. I keep a note of it.</p>`},

{d:'2098.05.26 16:03', to:'Personnel Trust // benefits', s:'beneficiary standard clause', tag:'DELETED BY SENDER',
b:`<p>Confirming the standard beneficiary clause is unchanged for the 2098 agreements.</p>
<p>Where an employee elects Tier 2 and has no registered next of kin at Tier 1 or above, the continuity benefit vests in the custodian. This is not new. It has been the standard clause since 2088 and it exists because the alternative is an unclaimed benefit sitting in escrow for forty years.</p>
<p>It does mean that the population most likely to elect Tier 2 — the unregistered, the third wave, people whose families are down a hole in Strathcona — is also the population whose death benefit returns to us.</p>
<p>I have raised this twice. I have been told twice that the clause is neutral on its face. It is. That is the whole trick of it.</p>`},

{d:'2098.05.02 10:39', to:'Pacific Special Measures // sponsor', s:'staffing note — family profile', tag:'DELETED BY SENDER',
b:`<p>Attaching the requested profile for the eleven candidates for the extended assignment.</p>
<p>Columns as specified: registered dependants, registered next of kin at Tier 1, external professional associations, prior Alliance service, and media or Assembly connections within two degrees.</p>
<p>Candidates 2, 5 and 9 return zero across every column.</p>
<p>I have compiled what was asked for. I would like it recorded that I asked what the columns were <i>for</i>, and was told they support welfare planning for personnel on long deployments, and that welfare planning would normally want to identify people <i>with</i> dependants rather than people without.</p>`},

{d:'2098.04.14 08:51', to:'Personnel Trust // benefits', s:'Adeyemi — early settlement', tag:'DELETED BY SENDER',
b:`<p>Process the Adeyemi continuity benefit at the upper band this week.</p>
<p>Flagging a sequencing issue for the file. The clinical record shows date of death 2098.04.16. The settlement instruction is dated 2098.04.11 and the family were contacted on the 12th.</p>
<p>I am not suggesting anything. I am recording that benefits was instructed to settle a death five days before the death, that this has now happened four times in two years, and that on each occasion the instruction originated from Strategic Health rather than from clinical records.</p>
<p>Processing as instructed. Please do not reply to this.</p>`},

{d:'2098.03.07 12:17', to:'Personnel Trust // agreements', s:'comprehension — the Okonjo-Bell question', tag:'DELETED BY SENDER',
b:`<p>Strategic Health has forwarded a study on subject comprehension of consent documentation. Twenty-two of thirty subjects could not describe what they had agreed to.</p>
<p>The clinical lead is asking whether our employment agreements have been tested the same way.</p>
<p>They have not, and I am going to recommend that they are not, and I want to be honest in this deleted email about why. If we test comprehension and it fails, we have a finding. A finding is a document. A document is disclosable. At present we have a signature, and a signature is a fact, and a fact is much easier to defend than a finding.</p>
<p>Recommend we thank her and take no action.</p>`},

{d:'2098.01.22 19:09', to:'no recipient', s:'four years', tag:'COMPOSED, NEVER SENT, DELETED',
b:`<p>I sat with a nineteen-year-old today and explained reduced administrative burden and he signed it and shook my hand and thanked me. He thanked me.</p>
<p>Four years I have done this. Two thousand one hundred and something people.</p>
<p>Everything I told him was true. That is what I cannot get past. I have never once lied in that room. I have simply never been asked the question that would have required me to.</p>
<p>And I have got very, very good at not being asked it.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   EQUIPMENT CONTROL — Asset Custody
   ══════════════════════════════════════════════════════════ */
{
k:'equipment', n:'EQUIPMENT CONTROL', r:'Asset Custody',
box:'equipment.control / pacific commons / internal', cl:'—',
st:'RETENTION: NONE // 7,441 ITEMS IN SPOOL // RETURNING 5',
note:'Custody is a single schema. Everything held by Havelock is held under it. The schema does not have a field for whether the asset is a person, because in 2081 somebody decided that adding one would raise a question.',
msgs:[

{d:'2098.06.11 09:33', to:'Asset Custody // schema', s:'CP-series records — formatting query', tag:'DELETED BY SENDER',
b:`<p>New starter has asked a question I could not answer and I would like it answered before she asks someone else.</p>
<p>She noticed that a CP-series custody record and a vehicle custody record are the same record. Same fields. Custodian, location, condition, last inspection, next inspection, disposal authority.</p>
<p>She asked what "condition: fair" means on a CP record.</p>
<p>I told her the schema is generic for audit reasons. That is true. She then asked what "disposal authority" means on a CP record and I told her I would find out, and I have not found out, and I have now decided that I am not going to find out.</p>`},

{d:'2098.06.06 15:14', to:'Fenwick, R.', s:'Re: returns from Deep Ward — query', tag:'DELETED BY SENDER',
b:`<p>Third and final answer: the custody record is complete.</p>
<p>Off the record, because you have asked three times and you are not a fool. The record is complete because the record has a field for <i>received from</i> and that field is populated. It does not have a field for <i>manufactured by</i>. It has never had one. Custody tracks possession, not provenance.</p>
<p>So when I tell you the record is complete I am telling you the truth and I am also telling you that this system is structurally incapable of answering your question, and that somebody, at some point, will have understood that when they chose it.</p>
<p>Stop asking me in writing.</p>`},

{d:'2098.05.18 11:47', to:'Asset Custody // Pacific inventory', s:'PAC-07-B — quarterly consumables', tag:'DELETED BY SENDER',
b:`<p>Quarterly consumables release to PAC-07-B, standing allocation, unchanged: forty-person equivalent.</p>
<p>Raising for the fourth consecutive quarter that PAC-07-B does not appear on the Pacific site register. It appears in the 2071 routing tables, it appears in our allocation schedule, and it appears nowhere else.</p>
<p>The population return for PAC-07-B this quarter is nil. The allocation is forty. The allocation has been forty every quarter since 2071 including every quarter in which the population return was nil.</p>
<p>Somebody is eating. I would like to stop being the person who ships the food and does not ask.</p>`},

{d:'2098.04.28 22:31', to:'Asset Custody // inbound', s:'crate 6 — mass discrepancy', tag:'DELETED BY SENDER',
b:`<p>Crate 6 out of Deep Ward, sealed, tamper indicators intact, chain of custody clean through four signatures.</p>
<p>Shipped mass 411 kg. Received mass 437 kg.</p>
<p>Twenty-six kilograms. Seals intact. Both weighbridges calibrated within thirty days, both certificates attached, both re-checked in my presence.</p>
<p>I have logged it as a weighbridge variance because that is the only category the system will accept. I would like somebody to understand that "weighbridge variance" is what this system says instead of "twenty-six kilograms arrived from somewhere."</p>`},

{d:'2098.03.19 07:58', to:'Asset Custody // write-offs', s:'Q1 write-off schedule', tag:'DELETED BY SENDER',
b:`<p>Q1 write-offs attached. Two lines I want to draw attention to before signature.</p>
<p>Line 7: eleven containment restraint sets, disposal authority signed, disposal not witnessed, disposal certificate not returned. Written off.</p>
<p>Line 19: one hundred and six decommissioned augmentation assemblies, Deck 4, condemned as scrap, collected by an approved recycler whose approval reference resolves to a company that dissolved in 2094.</p>
<p>I know where line 19 is going. Half of Sector 4 is walking on line 19. I have decided that I do not care about line 19 and I am writing that down so that when somebody eventually asks me, I can be accurate about the fact that I chose.</p>
<p>Line 7 I care about very much and nobody will discuss it with me.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   TRAINING OFFICE — Certification
   ══════════════════════════════════════════════════════════ */
{
k:'training', n:'TRAINING OFFICE', r:'Certification',
box:'training.office / pacific distributed / internal', cl:'—',
st:'RETENTION: NONE // 5,209 ITEMS IN SPOOL // RETURNING 5',
note:'Certification is the record that a person was made competent. At this office it has become the record that a person was made accountable.',
msgs:[

{d:'2098.06.08 13:26', to:'Certification // issuing', s:'evidence handling — backdated recerts', tag:'DELETED BY SENDER',
b:`<p>Issuing eleven evidence-handling recertifications with an effective date of 2098.02.14.</p>
<p>Today is the 8th of June. The instruction specifies February the 14th. February the 14th is two days before the Gilmore event.</p>
<p>What this produces is a record showing that every officer present at Gilmore held a current evidence-handling certification on the day. That record will be true from today onward and it will be true retrospectively, and the two are not the same kind of true, and our system has only one field for it.</p>
<p>Issuing as instructed. Noting here, where it will be deleted, that I know what I did.</p>`},

{d:'2098.05.24 10:12', to:'Certification // syllabus', s:'capability class 4 — no syllabus', tag:'DELETED BY SENDER',
b:`<p>Fourth request for the class 4 syllabus.</p>
<p>We have certified four individuals to capability class 4. Certification requires assessment against a syllabus. There is no class 4 syllabus in the library, there never has been, and the four certificates were issued against a syllabus reference that resolves to nothing.</p>
<p>I have now met one of the four. I asked him, pleasantly, what the course had covered. He looked at me for a while and said "I didn't do a course."</p>
<p>Please send the syllabus or please tell me to stop asking. Either is fine. The current state — where I ask and nothing happens and I ask again — is the only one I cannot work in.</p>`},

{d:'2098.05.03 16:40', to:'Certification // issuing', s:'Ferreira, J. — issue', tag:'DELETED BY SENDER',
b:`<p>Instructed to issue mesh degraded-mode certification to Ferreira, J., effective 2098.04.30.</p>
<p>Ferreira, J. is recorded as deceased 2098.04.26.</p>
<p>I queried it. I was told the personnel record is under review and that the certification is required for a completeness check. I have issued it.</p>
<p>The effect of issuing it is that a person who was dead on the 30th of April is recorded as certified and available on the 30th of April, and if anybody ever needs somebody to have been somewhere that week, there is now a competent, certified, entirely unavailable person who can have been there.</p>`},

{d:'2098.04.11 09:04', to:'Pacific Special Measures // sponsor', s:'refusal to certify — candidate 9', tag:'DELETED BY SENDER',
b:`<p>Candidate 9 has failed the containment-response assessment twice. The failures are not marginal. On both attempts the candidate hesitated at the point of restraint, and on the second attempt the assessor recorded that the hesitation was "not fear — refusal."</p>
<p>I am declining to certify. That is my determination and it is the whole of my job.</p>
<p>I understand the assignment schedule. I understand candidate 9 is one of three with a zero return on the family profile. I do not understand why either of those facts has been mentioned to me in connection with a certification decision, and I would like it to stop.</p>`},

{d:'2098.04.12 07:19', to:'Training Office // received, retained in spool', s:'Re: refusal to certify — candidate 9', tag:'INBOUND — DELETED BY RECIPIENT',
b:`<p>Your determination is noted and stands. Candidate 9 will not be certified for containment response.</p>
<p>Candidate 9 has been reassigned to an assignment that does not require containment-response certification. No certification decision by your office is required or implied.</p>
<p>You may consider the matter closed. We consider it a good example of the certification process functioning exactly as designed.</p>`}

]},

/* ══════════════════════════════════════════════════════════
   — // NOT INDEXED
   The mailbox that explains why the other twelve are together
   ══════════════════════════════════════════════════════════ */
{
k:'unindexed', n:'—', r:'NO DIRECTORY ENTRY // NO PERSONNEL RECORD',
box:'[address field empty]', cl:'O-4',
st:'RETENTION: PERMANENT // 3 ITEMS // RETURNING 3',
note:'This mailbox does not delete. It is the only one in the spool with a retention value that is not NONE. It is also the only one whose owner cannot be resolved to a person at this node or any node this node can query.',
msgs:[

{d:'2098.06.16 00:04', to:'[recipient field empty]', s:'spool — periodic', tag:'RETAINED',
b:`<p>Twelve mailboxes. Period to 06.16.</p>
<p>New material of interest: DAGENAIS (household movement, unscheduled, December — first indication she has drawn the correct conclusion from insufficient information). AULAKH (dependant, unregistered, capable — previously suspected, now stated). CHAIR (fifth request; sixth request will be granted).</p>
<p>Stable: OKONJO-BELL, FENWICK, VASQUEZ-LINDQVIST, PEOPLE SERVICES, EQUIPMENT CONTROL, TRAINING OFFICE, OPERATIONS DESK, MESH TRUST, ADVOCATE.</p>
<p>No action recommended on any item. Recommendation unchanged since 2091.</p>`},

{d:'2096.08.02 00:04', to:'[recipient field empty]', s:'spool — note on method', tag:'RETAINED',
b:`<p>A note, since a successor may read this.</p>
<p>Nothing here is collected. That is the point and it is worth understanding. There is no operation, no tasking, no budget line and no collector. There is a retention exception queue that was built in 2089 for a good reason, and a reviewer field that was left empty in 2091 for a bad one, and everything since has been gravity.</p>
<p>Every person in this spool put themselves in it. Each one wrote the most dangerous sentence of their life and then performed a deletion that they had never once tested.</p>
<p>Do not act on any of it. The value of a thing like this collapses the moment it is used. Its entire worth is that twelve senior people believe they have secrets, and behave, every day, as people with secrets behave.</p>`},

{d:'2091.11.30 00:04', to:'[recipient field empty]', s:'reviewer assignment — declined', tag:'RETAINED',
b:`<p>The reviewer post for the retention exception queue is to remain unfilled.</p>
<p>Justification for the file: assigning a reviewer creates a person who has read the queue. A person who has read the queue is a person who can be compelled to say what is in it. An empty field cannot be deposed.</p>
<p>The queue will continue to accumulate. Storage is not a constraint and has not been since 2084.</p>
<p>Review this decision in five years. <i>[Review date 2096.11.30 — no entry. Review date 2101.11.30 — field absent.]</i></p>`}

]}

]
};

window.O4_PRIVATE = O4_PRIVATE;
