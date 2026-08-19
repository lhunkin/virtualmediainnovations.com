/* ============================================================
   HAVELOCK COMMON MESH // EMPLOYEE TERMINAL
   data.js — all player-facing content for the employee area.

   Plain JS (not JSON) on purpose: it loads from file:// without a
   web server, so the terminal works off a laptop at the table.

   GM NOTE — the lore threaded through these messages is
   breadcrumbs only. Nothing here confirms a campaign secret. The
   recurring thread is a Pacific facility that appears in routing
   and logistics paperwork but never in the public register; the
   sealed message at the bottom is the payoff for reading it all.
   ============================================================ */

const HAVELOCK_DATA = {

/* ------------------------------------------------------------
   MAIL — 40 messages, oldest at the bottom
   cat: exec | security | people | facility | clinical | ops | mesh | finance | culture
   ------------------------------------------------------------ */
mail: [

/* ══════════════════════════════════════════════════════════════════
   NEW MESSAGES GO HERE — newest at the top of this list.

   Copy this block, fill it in, and it appears in the inbox on the
   next deploy. Nothing else needs changing.

   {id:'unique-id-no-spaces', from:'Sender Name', role:'Their title, division',
    cat:'ops', date:'2098.09.14', time:'11:20', tag:'H3 INTERNAL', pri:true,
    subject:'Subject line',
    preview:'One sentence shown in the list.',
    body:`<p>First paragraph.</p>
    <h4>A section heading</h4>
    <p>More text. Use <b>bold</b> for emphasis.</p>
    <ul><li>Bulleted point</li></ul>
    <p class="signature">— Name<br>Title</p>`},

   cat  must be one of: exec security people facility clinical ops mesh finance culture
   pri  true adds a gold PRIORITY flag. Omit it otherwise.
   date use the in-game date. The clock is around 2.5 days ahead per real
        day, so check the top-right readout for where the campaign is.

   Reading every message unlocks the sealed archive item, so each one you
   add raises the bar for that reward. That is intentional.
   ══════════════════════════════════════════════════════════════════ */

{id:'dagenais-welcome', from:'Mireille Dagenais', role:'Director, Pacific Special Measures',
 cat:'exec', date:'2098.06.18', time:'07:03', tag:'H3 INTERNAL', pri:true,
 subject:'Welcome to Field Measures Unit Three',
 preview:'There are two things I want you to understand before we begin.',
 body:`<p>Welcome aboard.</p>
 <p>There are two things I want you to understand before we begin. First, your field authority is real, but it is not unlimited. When Havelock issues a credential it is tied to a specific assignment, a specific jurisdictional problem, and a record of who authorised what. That record exists to protect you. It also exists to find you.</p>
 <p>Second, I expect you to bring people back alive whenever practical. A dangerous person may also be a patient, a witness, or the only person who understands what just happened.</p>
 <p>You were not hired because every situation has a procedure. You were hired because sometimes the procedure runs out before the problem does.</p>
 <p class="signature">— Mireille Dagenais<br>Director, Pacific Special Measures</p>`},

{id:'aulakh-orientation', from:'Mina Aulakh', role:'Unit Coordinator, FMU-3',
 cat:'ops', date:'2098.06.18', time:'06:48', tag:'INTERNAL',
 subject:'Orientation logistics and station access',
 preview:'Your Crown station credential is active through Pacific Commons and Deck 4.',
 body:`<p>Your Crown station credential is active through Pacific Commons, Deck 4 Strategic Health, and Havelock Continuity Suite 19-C.</p>
 <p>Please complete agreement review and protected-identity selection before unit activation. Equipment fitting follows medical baseline.</p>
 <p>Do not worry if station security appears stricter around Suite 19-C. Havelock shares the deck with regulated medical and strategic cargo services, and the cargo people are worse about it than we are.</p>
 <p>If you get lost, ask the Common Mesh for "Havelock Continuity Suite Nineteen-C." It will route you to the public entrance, not the operations lift.</p>
 <p class="signature">— Mina</p>`},

{id:'chair-quarterly', from:'Office of the Chair', role:'Adaeze Halloran-Ohene, Chair &amp; Chief Executive',
 cat:'exec', date:'2098.06.16', time:'09:00', tag:'ALL PERSONNEL', pri:true,
 subject:'Quarterly report to all personnel — Q2 2098',
 preview:'We are profitable, we are growing, and I want to spend most of this letter on the part we got wrong.',
 body:`<p>To every Havelock employee, in thirty-one countries and one orbit:</p>
 <p>We are profitable, we are growing, and I want to spend most of this letter on the part we got wrong.</p>
 <h4>The quarter in figures</h4>
 <p>Group revenue of ACr 41.2 billion, up 6.1% year on year. Human Systems and Infrastructure Continuity both grew ahead of forecast. Mobility &amp; Orbital was flat, which is what happens in a quarter where nothing falls out of the sky, and I am not going to apologise for a quiet corridor.</p>
 <p>Headcount stands at 412,400. We opened the Osaka continuity office, commissioned the Prince Rupert cold-chain hub, and handed the Quito water programme back to municipal control on schedule and under budget.</p>
 <h4>The three adverse findings</h4>
 <p>Our annual review, filed 2 April, disclosed two Tier 1 response-time failures in the Pacific Commons and one records-handling breach in which personnel medical data was retained past its permitted window.</p>
 <p>I want to be plain about the third one, because it was ours and not a contractor's. Four hundred and eleven employees had clinical records held longer than the Charter allows. Every one of them was notified before we published. The retention was a configuration error, not a policy — but a policy that can be defeated by a configuration error is not much of a policy, and Systems Intelligence has been told so.</p>
 <h4>What I am asking for</h4>
 <p>The company is now large enough that most of you will never meet anyone who can overrule me. That is a structural problem and I do not have a clean answer to it. What I have is the Confidential Reporting Procedure, an independent advocate outside your chain of command, and my word that I read the summary of every Charter claim filed against this company.</p>
 <p>If something here is wrong, I would rather hear it from you than read it in a filing.</p>
 <p class="signature">— Adaeze Halloran-Ohene<br>Chair and Chief Executive, Havelock Industries<br>Vancouver</p>`},

{id:'mesh-security', from:'Common Mesh Trust Office', role:'Systems Intelligence',
 cat:'security', date:'2098.06.15', time:'11:20', tag:'MANDATORY READ', pri:true,
 subject:'Trusted sources only — how to verify a Havelock message',
 preview:'If a message asks you to act quickly and quietly, it is not from us.',
 body:`<p>This is the quarterly trust briefing. It is short, it is mandatory, and it will save you a very bad week.</p>
 <h4>Every genuine Havelock message carries three things</h4>
 <ul>
   <li>A <b>trust anchor stamp</b> in the header, rendered by your terminal — not by the message. If the badge is drawn inside the message body, the message is forged.</li>
   <li>A <b>named sender with a division</b>. "Havelock Administration" is not a division. "Havelock Security Team" is not a division. We have six divisions and they are all listed on the public site.</li>
   <li>A <b>routing path you can expand</b>. Genuine internal mail routes through a named relay. Pacific personnel should see Pacific Relay 07.</li>
 </ul>
 <h4>What we will never do</h4>
 <p>Havelock will never ask you for your access phrase, your recovery key, or your protected identity by message. Not in an emergency. Not from a director. Not from me.</p>
 <p>We will never ask you to move funds, release a credential, or bypass a checkpoint on the basis of a message alone. Every one of those actions has a recorded authorisation path, and if the path is missing, the request is fake.</p>
 <h4>The pattern to watch for</h4>
 <p>Hostile messages share one shape: <b>urgency plus secrecy</b>. Act now. Do not discuss this with your supervisor. The clock is running. Real Havelock urgency is loud — it comes with an alert tone, a named authorising officer, and half a dozen other people already moving.</p>
 <p>If a message asks you to act quickly and quietly, it is not from us. Forward it to the Trust Office and go back to your work.</p>
 <p>One further note for field personnel. Attachments claiming to be routing manifests, deck plans or facility registers have been circulating on the Pacific relays this quarter. Do not open them. Several are crude, one or two are not, and at least one contained a facility list we do not recognise as ours.</p>
 <p class="signature">— Common Mesh Trust Office<br>Systems Intelligence // Pacific Relay 07</p>`},

{id:'perks-catalogue', from:'Havelock Employee Advantage', role:'People Services',
 cat:'people', date:'2098.06.14', time:'08:30', tag:'BENEFITS',
 subject:'Your 2098 discount catalogue — Vancouver and beyond',
 preview:'Your credential is your card. Tap it and the discount applies.',
 body:`<p>Employee Advantage is live for 2098. Your credential is your card — tap it at any participating counter and the discount applies. No forms, no codes, no expiry.</p>
 <h4>Vancouver</h4>
 <ul>
   <li><b>Skyline Transit Authority</b> — 40% off all zones, plus free travel within two hours of a logged shift end. Long rotations, we see you.</li>
   <li><b>The Gastown Grid</b> — 15% at every restaurant, bar and roastery in the district association. Show the credential, not the appetite.</li>
   <li><b>Fraser Delta Memorial Gardens</b> — free entry, always, for Havelock personnel and their families. This one is not a discount and never will be.</li>
   <li><b>Lions Gate Athletic</b> — 50% membership, all six locations, including the rehabilitation pool at Havelock Centre.</li>
   <li><b>Pacific Optical &amp; Neural</b> — 25% on non-clinical eyewear and interface accessories. Clinical work is covered in full under your medical plan; do not pay for it here by mistake.</li>
   <li><b>Kitsilano Housing Trust</b> — deposit waiver and 8% on first-year rent for employees relocating into the region.</li>
 </ul>
 <h4>Pacific Commons</h4>
 <ul>
   <li><b>Seattle Commons Market</b> — 20% at all member grocers.</li>
   <li><b>Prince Rupert Cold Chain Canteen</b> — meals at cost for anyone holding a logistics or response credential.</li>
   <li><b>Kamloops Depot Motor Pool</b> — personal vehicle servicing at internal rates, weekends only.</li>
   <li><b>Anchorage Forward Station</b> — winter kit issue at cost, and the sauna is free. It is a very good sauna.</li>
 </ul>
 <h4>International</h4>
 <ul>
   <li><b>Osaka Continuity Office</b> — commuter pass subsidy and 30% at the Nakanoshima canteen.</li>
   <li><b>Reykjavík Grid Programme</b> — geothermal spa access for all rotating personnel.</li>
   <li><b>Quito Water Works</b> — 25% at partner pharmacies across the metropolitan district.</li>
 </ul>
 <h4>Orbital</h4>
 <ul>
   <li><b>Continuity Suite 19-C Galley</b> — all meals included on rotation. Yes, including the good coffee. No, you cannot ship it down.</li>
   <li><b>Northstar Crown Residential Ring</b> — 60% on family visitation berths, subject to lift availability.</li>
 </ul>
 <p>Participating partners are listed in full on the Advantage register. If a counter refuses your credential, report it — we renegotiate annually and we do keep score.</p>
 <p class="signature">— Havelock Employee Advantage</p>`},

{id:'people-agreement', from:'Havelock People Services', role:'Personnel Trust',
 cat:'people', date:'2098.06.17', time:'16:40', tag:'CONTROLLED PERSONAL',
 subject:'Agreement review reminder',
 preview:'Average review time is nine minutes. Average review time is not a requirement.',
 body:`<p>Your Enhanced Field Services Employment and Sponsorship Agreement is ready for review.</p>
 <p>The employee portal reports an average review time of nine minutes. Average review time is not a requirement. You may request clarification, take the document away, or bring independent counsel at company expense before signing.</p>
 <p>Your current compensation record shows ACr 228,000 base salary plus ACr 42,000 annual operational availability stipend.</p>
 <p class="signature">— Havelock People Services</p>`},

{id:'clinic-baseline', from:'Strategic Health Clinic', role:'Deck 4, Suite 19-C',
 cat:'clinical', date:'2098.06.17', time:'14:05', tag:'MEDICAL // PROTECTED',
 subject:'Baseline complete — two items require confirmation',
 preview:'No immediate medical restriction prevents deployment.',
 body:`<p>Operational baseline is complete. No immediate medical restriction prevents deployment.</p>
 <p>Two Consent Ledger items require confirmation: emergency stabilisation authority, and protected-medical-identity routing. Both may be reviewed under Medical &amp; Consent on this terminal.</p>
 <p>You are not required to grant either. You are required to decide, and to have the decision recorded.</p>
 <p class="signature">— Strategic Health Clinic</p>`},

{id:'facility-salish', from:'Infrastructure Continuity', role:'Salish Corridor Programme',
 cat:'facility', date:'2098.06.11', time:'10:15', tag:'PUBLIC WORKS',
 subject:'Salish corridor works — third phase enters public review',
 preview:'Eleven municipalities, two jurisdictions, one signature.',
 body:`<p>Third-phase seawall, pump and managed-retreat infrastructure has entered public review across eleven municipalities and two jurisdictions.</p>
 <p>For personnel unfamiliar with the programme: the Salish works are the largest continuity build the company has ever attempted on land, and the twenty-year maintenance obligation means most of you will still be here when it matters.</p>
 <p>Site access for non-programme personnel requires a day credential. The Delta pumping station accepts visitors on the first Saturday of each month, and it is genuinely worth the trip — the intake hall is the only part of the original 2041 works still standing.</p>
 <p class="signature">— Infrastructure Continuity // Programme Office</p>`},

{id:'facility-muir', from:'Environmental Compliance', role:'Consent Order Monitoring',
 cat:'facility', date:'2098.06.09', time:'13:30', tag:'REGULATORY',
 subject:'Muir Point — Q2 monitoring readings published',
 preview:'Sediment and water-table readings within tolerance. Sector G remains under extended sampling.',
 body:`<p>Quarterly readings under the 2094 consent order have been lodged with the registry and mirrored to the public trust channel.</p>
 <p>Sediment, water-table and habitat indicators are within tolerance across sectors A through F. Sector G remains under extended sampling at the company's request; the additional monitoring is voluntary and is not required by the order.</p>
 <p>Site access remains restricted. Personnel are reminded that Muir Point is an active remediation site and that the restriction is an environmental one, not an operational one — the paperwork is boring and we would like to keep it that way.</p>
 <p class="signature">— Environmental Compliance</p>`},

{id:'facility-19c-lift', from:'Suite 19-C Facilities', role:'Northstar Crown',
 cat:'facility', date:'2098.06.13', time:'07:50', tag:'FACILITY NOTICE',
 subject:'Deck 4 lift maintenance — 19 to 21 June',
 preview:'Public lift out of service. Use the Commons stair or the Deck 3 transfer.',
 body:`<p>The Deck 4 public lift will be out of service from 19 June for scheduled bearing replacement. Use the Commons stair or transfer via Deck 3.</p>
 <p>The operations lift is not an alternative and will not accept public credentials during the window, before anybody asks.</p>
 <p>Strategic Health clinic hours are unaffected. Cargo transfers to the sealed bays on the far side of the deck are also unaffected; if you are routed past them, keep moving — that side of Deck 4 is leased and it is not ours to explain.</p>
 <p class="signature">— Suite 19-C Facilities</p>`},

{id:'facility-kamloops', from:'Regional Facilities', role:'Pacific Commons',
 cat:'facility', date:'2098.06.06', time:'09:10', tag:'FACILITY NOTICE',
 subject:'Kamloops Depot — expansion complete',
 preview:'Eighty additional emergency housing units and a second motor pool.',
 body:`<p>Kamloops Depot expansion is complete and the site returns to full standing-crew status this week.</p>
 <p>The depot now holds eighty additional emergency housing units, a second motor pool, and the regional cold store previously split between Kamloops and Prince George.</p>
 <p>Kamloops is now the largest inland depot in the Pacific Commons and the primary staging point for interior response. If you are rotating through, the crew room coffee is a war crime and the beds are excellent.</p>
 <p class="signature">— Regional Facilities</p>`},

{id:'facility-prince-rupert', from:'Regional Facilities', role:'Pacific Commons',
 cat:'facility', date:'2098.05.30', time:'11:45', tag:'FACILITY NOTICE',
 subject:'Prince Rupert cold-chain hub commissioned',
 preview:'Transplant tissue and fabrication feedstock now stage through the north coast.',
 body:`<p>The Prince Rupert cold-chain hub is commissioned and accepting consignments.</p>
 <p>Transplant tissue, fabrication feedstock and temperature-critical pharmaceutical stock for the northern Pacific now stage through Prince Rupert rather than routing south to Vancouver. Median delivery time to northern communities drops by roughly nineteen hours.</p>
 <p>Hub personnel note that the site inherited its numbering from an older Havelock logistics scheme, so the bays run 2 through 12. There is no Bay 1. There has never been a Bay 1 at Prince Rupert and Facilities would appreciate no further tickets about it.</p>
 <p class="signature">— Regional Facilities</p>`},

{id:'facility-centre', from:'Havelock Centre', role:'Vancouver',
 cat:'facility', date:'2098.05.28', time:'15:20', tag:'FACILITY NOTICE',
 subject:'Atrium refit and the records annexe',
 preview:'The founding wall stays. Everything around it is moving.',
 body:`<p>The Havelock Centre atrium refit begins in July. The founding wall stays exactly where it is; everything around it is moving.</p>
 <p>The records annexe below the atrium will be closed to walk-in access for the duration. Physical records requests should be lodged through Records Custody with fourteen days' notice — the annexe holds the company's paper archive back to incorporation, and retrieval is genuinely a person walking into a basement with a list.</p>
 <p>Employees curious about the early years are encouraged to book a supervised visit before the closure. The 2039 through 2055 boxes are more interesting than the official history, largely because nobody was writing for posterity yet.</p>
 <p class="signature">— Havelock Centre Facilities</p>`},

{id:'facility-seattle', from:'Pacific Commons', role:'Seattle Hub',
 cat:'facility', date:'2098.05.26', time:'08:05', tag:'FACILITY NOTICE',
 subject:'Seattle Commons clinic — extended hours',
 preview:'Prosthetic maintenance now runs to 22:00 on weekdays.',
 body:`<p>Seattle Commons clinic extends prosthetic fitting and maintenance to 22:00 on weekdays from 1 June, following the capacity increase at Vancouver.</p>
 <p>Walk-in maintenance for company-issued and personally-owned prosthetics is available to all Havelock personnel and their registered dependants at no charge, regardless of where the device was fitted.</p>
 <p class="signature">— Pacific Commons // Seattle</p>`},

{id:'facility-anchorage', from:'Northern Operations', role:'Anchorage Forward Station',
 cat:'facility', date:'2098.05.21', time:'12:00', tag:'FACILITY NOTICE',
 subject:'Anchorage winter protocol — early review',
 preview:'We are reviewing in May because last year we reviewed in September.',
 body:`<p>Winter protocol review opens this month. We are reviewing in May because last year we reviewed in September and the first storm arrived in October.</p>
 <p>All northern rotating personnel must complete cold-weather recertification before their next deployment. The station holds kit for one hundred and forty; current rotation strength is one hundred and six, so there is no reason for anyone to be short.</p>
 <p>Anchorage remains the northernmost staffed Havelock facility in the Alliance. Anything above us on a routing table is a partner site, a relay, or a typing error.</p>
 <p class="signature">— Northern Operations</p>`},

{id:'facility-osaka', from:'International Operations', role:'Asia-Pacific',
 cat:'facility', date:'2098.05.19', time:'10:30', tag:'FACILITY NOTICE',
 subject:'Osaka continuity office opens',
 preview:'Our thirty-first country, and the first office designed after the Charter.',
 body:`<p>The Osaka continuity office opened this month, bringing Havelock to thirty-one countries.</p>
 <p>Osaka is the first Havelock facility designed from the ground up after the 2092 Charter, and it shows: the clinical suite, the personnel trust rooms and the advocate's office are on the ground floor with street access, so an employee can reach independent counsel without walking through their own management.</p>
 <p>Every facility built from here will follow that plan. Retrofitting the older sites is funded through 2101.</p>
 <p class="signature">— International Operations</p>`},

{id:'facility-reykjavik', from:'International Operations', role:'North Atlantic',
 cat:'facility', date:'2098.05.14', time:'09:40', tag:'FACILITY NOTICE',
 subject:'Reykjavík grid programme — islanding milestone',
 preview:'The city can now run disconnected from everything for eleven days.',
 body:`<p>The Reykjavík grid programme has demonstrated full islanding: the municipal grid ran disconnected from all external supply for eleven days under load.</p>
 <p>Eleven days is not an arbitrary figure. It is the duration of the Fraser Delta dike failure in 2039, and it has been the company's internal benchmark for degraded-mode endurance ever since. Every continuity system we build is asked the same question — can it survive its own worst week.</p>
 <p class="signature">— International Operations</p>`},

{id:'facility-quito', from:'International Operations', role:'South America',
 cat:'facility', date:'2098.05.07', time:'14:15', tag:'FACILITY NOTICE',
 subject:'Quito water works handed back to municipal control',
 preview:'On schedule, under budget, and out of our hands.',
 body:`<p>The Quito water programme has been handed back to municipal control, on schedule and under budget.</p>
 <p>Handback means handback. Havelock retains a twenty-year maintenance obligation and no operational control, no pricing role and no seat on the water authority. Personnel are reminded that this is deliberate and is not up for renegotiation, whatever a client elsewhere may tell you they heard.</p>
 <p class="signature">— International Operations</p>`},

{id:'hr-enrolment', from:'People Services', role:'Benefits',
 cat:'people', date:'2098.06.10', time:'08:00', tag:'ACTION REQUIRED',
 subject:'Annual benefits enrolment opens 1 July',
 preview:'Defaults carry over. Dependants do not.',
 body:`<p>Annual enrolment opens 1 July and closes 31 July.</p>
 <p>Your existing elections carry over automatically. Dependant registrations do not — if you added a dependant this year, confirm them or their coverage lapses on 1 August.</p>
 <p>Augmentation maintenance, prosthetic servicing and necessary life-support are not elections. They are Charter obligations and cannot be waived, declined or traded for salary, no matter what a well-meaning colleague tells you about maximising your package.</p>
 <p class="signature">— People Services // Benefits</p>`},

{id:'hr-charter-audit', from:'Charter Compliance', role:'Independent Panel Secretariat',
 cat:'people', date:'2098.06.08', time:'11:00', tag:'CHARTER',
 subject:'Biennial Charter audit — your participation',
 preview:'The audit is not a survey. It is evidence.',
 body:`<p>The biennial Human Capability Charter audit begins in September. Employee representation participates as of right and is not appointed by management.</p>
 <p>The audit is not a survey. Submissions are evidence, they are taken under the confidential reporting protections, and the panel's findings are published whether or not the company likes them.</p>
 <p>Prior audits have produced findings against Havelock in 2094 and 2096. Both are on the public record. Read them before you decide whether this process is theatre.</p>
 <p class="signature">— Charter Compliance</p>`},

{id:'hr-counsel', from:'People Services', role:'Personnel Trust',
 cat:'people', date:'2098.06.05', time:'16:10', tag:'CONTROLLED PERSONAL',
 subject:'Independent counsel — how to request one',
 preview:'The company pays. The company does not choose.',
 body:`<p>You may request independent legal counsel before signing any agreement or variation, and at any point during a Charter claim.</p>
 <p>The company pays. The company does not choose. Counsel is drawn from a panel maintained by the North American Alliance bar, not by Havelock, and your discussions with them are not reportable to us in any form.</p>
 <p>Declining counsel is recorded as a decision rather than assumed from silence. If you have not been offered it, that is itself reportable.</p>
 <p class="signature">— People Services // Personnel Trust</p>`},

{id:'hr-identity', from:'Identity Services', role:'Systems Intelligence',
 cat:'people', date:'2098.06.03', time:'10:25', tag:'IDENTITY',
 subject:'Protected identity selection — your options',
 preview:'Four tiers. You choose. The recovery key exists regardless.',
 body:`<p>Field personnel in credentialed roles may elect protected identity at one of four tiers, from a simple operational alias through to a fully sealed civic record with restricted family linkage.</p>
 <p>A recovery key exists at every tier. This is not negotiable — an identity that cannot be restored is not protection, it is erasure, and the Charter forbids us from doing that to a person.</p>
 <p>Unsealing requires a recorded request, a named authorising officer and notification to you. Where an Alliance court orders otherwise, notification is deferred rather than cancelled. You will always find out. Sometimes you find out late.</p>
 <p class="signature">— Identity Services</p>`},

{id:'hr-payroll', from:'Payroll', role:'Finance',
 cat:'people', date:'2098.06.02', time:'07:30', tag:'PAYROLL',
 subject:'Pay cycle and availability stipend timing',
 preview:'Stipend lands separately, on the 5th, and it is not a bonus.',
 body:`<p>Base salary continues to settle on the last working day of each month.</p>
 <p>The operational availability stipend settles separately on the 5th of the following month. It is not a bonus and it is not performance-linked — it is payment for being deployable, and it accrues whether or not you deploy.</p>
 <p>Hazard, mission and orbital-rotation supplements settle with the stipend. Queries to Payroll, not to your unit coordinator, who cannot see your record and would rather not.</p>
 <p class="signature">— Payroll</p>`},

{id:'hr-pension', from:'Continuity Retirement Fund', role:'Trustee Board',
 cat:'finance', date:'2098.05.29', time:'12:40', tag:'FINANCE',
 subject:'Long-service continuity fund — annual statement',
 preview:'Your statement is ready. The fund is not invested in Havelock.',
 body:`<p>Your annual continuity fund statement is available under Pay &amp; Benefits.</p>
 <p>A reminder on structure: the fund holds no Havelock Industries stock and cannot, by trust deed. If this company fails, your retirement does not fail with it. That constraint costs the fund about forty basis points a year in returns and the trustees consider it the best money we spend.</p>
 <p>Employees within ten years of the long-service threshold should book a continuity planning session. The medical maintenance component runs for life and the arithmetic surprises people.</p>
 <p class="signature">— Continuity Retirement Fund // Trustee Board</p>`},

{id:'hr-relocation', from:'Mobility Services', role:'People Services',
 cat:'people', date:'2098.05.24', time:'09:55', tag:'PEOPLE',
 subject:'Relocation and rotation allowances updated',
 preview:'Orbital rotation allowance up 12%. Family visitation berths expanded.',
 body:`<p>Relocation and rotation allowances have been revised for the 2098–99 cycle.</p>
 <p>Orbital rotation allowance rises 12%, reflecting the ninety-day cycle at Suite 19-C. Family visitation berths on the Northstar Crown residential ring have been expanded from six to fourteen, subject to lift availability.</p>
 <p>Inland and northern postings retain the remote supplement. Anchorage, Kamloops and Prince Rupert all qualify; Seattle and Vancouver do not, and we have had that argument enough times now.</p>
 <p class="signature">— Mobility Services</p>`},

{id:'clinical-consent', from:'Clinical Governance', role:'Human Systems',
 cat:'clinical', date:'2098.06.12', time:'13:00', tag:'MEDICAL',
 subject:'Your Consent Ledger — what your copy contains',
 preview:'Every entry, every authoriser, every thing you were told beforehand.',
 body:`<p>Your Consent Ledger copy contains every medical, augmentation and capability intervention performed on you while employed: what was done, who authorised it, what you were told beforehand, and what you agreed to.</p>
 <p>The company cannot amend an entry without your countersignature. It cannot delete one at all. When you leave, the ledger goes with you and our copy is destroyed on a fixed schedule.</p>
 <p>Emergency interventions performed while you could not consent are recorded separately and flagged for review with you afterward, in ordinary conditions. If you find an entry you do not recognise, that is exactly what the Confidential Reporting Procedure is for.</p>
 <p class="signature">— Clinical Governance</p>`},

{id:'clinical-aug', from:'Human Systems', role:'Augmentation Maintenance',
 cat:'clinical', date:'2098.06.07', time:'10:05', tag:'MEDICAL',
 subject:'Augmentation maintenance — book your window',
 preview:'Deferred maintenance is the leading cause of field augmentation failure.',
 body:`<p>Scheduled maintenance windows for Q3 are open at Vancouver, Seattle and Suite 19-C.</p>
 <p>Deferred maintenance is the single leading cause of field augmentation failure, ahead of damage, and by a margin that embarrasses everyone involved. Book the window. It is paid time.</p>
 <p>Personnel with capability-class augmentation should book at Vancouver or Suite 19-C only; Seattle is not equipped for capability work and will send you north with a wasted afternoon.</p>
 <p class="signature">— Human Systems // Augmentation Maintenance</p>`},

{id:'clinical-immunisation', from:'Occupational Health', role:'Pacific Region',
 cat:'clinical', date:'2098.05.31', time:'08:45', tag:'MEDICAL',
 subject:'Seasonal immunisation — Pacific region',
 preview:'Walk-in at every hub through July.',
 body:`<p>Seasonal immunisation is available walk-in at every Pacific Commons hub through July, and at Suite 19-C for rotating personnel.</p>
 <p>Personnel deploying to emergency housing sites, flood works or crowded shelter environments should complete immunisation before deployment rather than after. We say this every year and every year somebody argues.</p>
 <p class="signature">— Occupational Health</p>`},

{id:'clinical-fatigue', from:'Occupational Health', role:'Long-Rotation Programme',
 cat:'clinical', date:'2098.05.23', time:'11:30', tag:'MEDICAL',
 subject:'Long-rotation fatigue — revised guidance',
 preview:'Ninety days is the limit, not the target.',
 body:`<p>Revised fatigue guidance for orbital and long-deployment personnel takes effect 1 July.</p>
 <p>Ninety days is the rotation limit, not the rotation target. Extension beyond ninety requires clinical sign-off, not managerial sign-off, and the clinician's decision is final.</p>
 <p>Supervisors requesting extensions will be asked to justify them in writing to Occupational Health. Personnel who feel pressured to extend should report it; that pressure is a safety issue and it is treated as one.</p>
 <p class="signature">— Occupational Health</p>`},

{id:'ops-force', from:'Field Standards', role:'Emergency &amp; Recovery',
 cat:'ops', date:'2098.06.04', time:'09:20', tag:'FIELD STANDARD',
 subject:'Use-of-force refresher — capture first',
 preview:'Lethal force is a failure state with a reporting requirement.',
 body:`<p>Annual refresher on the field use-of-force standard. The order does not change and will not change.</p>
 <ul>
   <li>Preserve life. Use the minimum force reasonably necessary.</li>
   <li>Capture when practical. Negotiation, restraint, medical stabilisation and technical disablement are preferred to lethal force.</li>
   <li>Protect surrendering and incapacitated people, including hostile ones.</li>
   <li>Preserve evidence and chain of custody — after, never instead.</li>
   <li>Return together.</li>
 </ul>
 <p>Lethal force is a failure state with a reporting requirement, not a tactical option with a preference. Personnel who use it are supported, represented and reviewed. All three.</p>
 <p class="signature">— Field Standards</p>`},

{id:'ops-debris', from:'Mobility &amp; Orbital', role:'Corridor Operations',
 cat:'ops', date:'2098.04.27', time:'14:50', tag:'HIGH FRONTIER',
 subject:'Conjunction warning service opened to all operators',
 preview:'Free, unlicensed, and available to our competitors.',
 body:`<p>Havelock debris tracking and conjunction prediction data is now released to every operator in the Pacific lift corridor without charge and without licence conditions. That includes direct competitors.</p>
 <p>The commercial argument against this was strong. The argument for it was shorter: a collision in the corridor is a shared loss, and we would rather be poor and uncrowded than rich in a debris field.</p>
 <p class="signature">— Mobility &amp; Orbital</p>`},

{id:'ops-drill', from:'Emergency &amp; Recovery', role:'Pacific Commons',
 cat:'ops', date:'2098.05.16', time:'16:00', tag:'OPERATIONS',
 subject:'Tier 2 activation drill — results',
 preview:'Fourteen minutes to regional command. Target is twelve.',
 body:`<p>The Pacific Commons Tier 2 activation drill completed on 12 May. Regional command assumed the contract in fourteen minutes against a twelve-minute target.</p>
 <p>The delay was handover, not mobilisation — crews were moving at four minutes. The gap sat between the duty officer and the regional director, which is exactly the seam this doctrine exists to close.</p>
 <p>Revised handover cards issue this month. Read them; the next one will not be a drill.</p>
 <p class="signature">— Emergency &amp; Recovery</p>`},

{id:'ops-equipment', from:'Equipment Control', role:'Asset Custody',
 cat:'ops', date:'2098.06.01', time:'08:15', tag:'ASSET CONTROL',
 subject:'Custody audit — sign your schedule',
 preview:'Sign it even if nothing changed. Especially if nothing changed.',
 body:`<p>Quarterly custody audit is open. Review your Equipment Responsibility Schedule on this terminal and sign it, even if nothing has changed. Especially if nothing has changed.</p>
 <p>A reminder on the boundary: armour, frames, weapons, drones, vehicles, comms and leased augmentation are company property. Ordinary medical restoration, replacement organs and permanently integrated life support are part of you and appear nowhere on this schedule. If something of yours is listed as ours, report it today.</p>
 <p class="signature">— Equipment Control</p>`},

{id:'ops-training', from:'Training Office', role:'Certification',
 cat:'ops', date:'2098.05.27', time:'10:40', tag:'TRAINING',
 subject:'Q3 certification windows now open',
 preview:'Book early. The capability-class sessions fill in a day.',
 body:`<p>Q3 certification windows are open across all Pacific sites and Suite 19-C.</p>
 <p>Capability-class and containment sessions fill within a day of opening, and they only run four times a year. Book now or plan your Q4 around it.</p>
 <p>All certification is funded in full, retained by you, and portable if you leave the company. That is deliberate. We would rather train someone who walks than employ someone who cannot.</p>
 <p class="signature">— Training Office</p>`},

{id:'mesh-degradation', from:'Systems Intelligence', role:'Common Mesh Assurance',
 cat:'mesh', date:'2098.06.02', time:'15:30', tag:'MESH',
 subject:'Planned mesh degradation test — 24 June',
 preview:'We are going to break it on purpose, at 03:00, for forty minutes.',
 body:`<p>A planned degradation test runs 24 June from 03:00 Pacific, lasting approximately forty minutes.</p>
 <p>During the window, Pacific Relay 07 will operate in reduced-trust mode. Public terminals will show a degradation banner. Authenticated services will require re-authentication on each request. Emergency and clinical services are unaffected and are never included in a test.</p>
 <p>Every Havelock service is required to have a degraded mode that works without the mesh. This is how we find out which ones actually do. Last year we found three that did not.</p>
 <p class="signature">— Systems Intelligence</p>`},

{id:'mesh-anchor', from:'Systems Intelligence', role:'Trust Architecture',
 cat:'mesh', date:'2098.05.12', time:'09:05', tag:'MESH',
 subject:'Trust anchor rotation — no action required',
 preview:'Your credential re-anchors silently. If it asks you for anything, it is not us.',
 body:`<p>Pacific trust anchors rotate on 20 May. Credentials re-anchor silently at next authentication and no action is required from you.</p>
 <p>To repeat the Trust Office: the rotation will never prompt you for an access phrase, a recovery key or a confirmation code. If something prompts you during the rotation window, it is not us, and the Trust Office would like to see it.</p>
 <p class="signature">— Systems Intelligence // Trust Architecture</p>`},

{id:'finance-stock', from:'Investor Relations', role:'Risk &amp; Assurance',
 cat:'finance', date:'2098.06.16', time:'17:00', tag:'FINANCE',
 subject:'HVLK listing notice and the employee share plan',
 preview:'Q2 results move the price. Your enrolment window does not.',
 body:`<p>Q2 results publish on 30 June. HVLK will be subject to the usual closed period from 16 June; personnel holding material non-public information may not trade, and if you are unsure whether you hold any, you do.</p>
 <p>The employee share plan enrolment window is separate and unaffected. Participation is capped at 8% of base salary and is matched at 50% after three years' service.</p>
 <p>A word of advice from a department that watches this every day: your salary, your medical cover and your retirement fund are already exposed to this company's fortunes. Concentrating your savings in HVLK as well is a decision, not a default. The Market view on your terminal shows the sector if you want to compare.</p>
 <p class="signature">— Investor Relations</p>`},

{id:'culture-memorial', from:'Community Programme', role:'People Services',
 cat:'culture', date:'2098.06.09', time:'09:30', tag:'COMMUNITY',
 subject:'Fraser Delta memorial — volunteer hours',
 preview:'Eleven days, eleven names read. We have done it every year since 2040.',
 body:`<p>The Fraser Delta memorial falls on 3 August. Volunteer hours are paid and do not count against leave.</p>
 <p>For personnel new to the company: the memorial runs eleven days, one for each day the dike system failed in 2039. Eleven names are read on each of them. Havelock was incorporated in the middle of that failure and has never marked the anniversary as a founding.</p>
 <p>The Memorial Gardens are free to Havelock personnel and their families year-round. That will not change.</p>
 <p class="signature">— Community Programme</p>`},

{id:'culture-galley', from:'Suite 19-C Services', role:'Northstar Crown',
 cat:'culture', date:'2098.06.14', time:'06:15', tag:'STATION LIFE',
 subject:'Galley menu, and the coffee situation',
 preview:'The good beans are back. Rationing is over. Behave.',
 body:`<p>The good beans are back on the 12 June lift. Rationing is over. Behave.</p>
 <p>Galley hours extend to cover the third rotation from Monday. The night crew have been eating standing up in a corridor for six weeks and Services would like to formally apologise for that.</p>
 <p>Personnel are reminded that galley stock is not personal cargo and that the mass allowance on the down-lift is checked. Every quarter somebody tries. Every quarter it is coffee.</p>
 <p class="signature">— Suite 19-C Services</p>`},

{id:'culture-newstarters', from:'People Services', role:'Onboarding',
 cat:'culture', date:'2098.06.15', time:'13:45', tag:'PEOPLE',
 subject:'Welcome to the eleven hundred people who joined this quarter',
 preview:'A short letter about what you have actually signed up for.',
 body:`<p>Eleven hundred and forty people joined Havelock this quarter. This letter is for them, and it is short.</p>
 <p>You have joined a company whose product is that somebody answers. Not that nothing goes wrong — things go wrong constantly, and most of your career will be spent inside things that have already gone wrong.</p>
 <p>What we sell is a single signature at the bottom of a very long chain. When you are the person at the top of that chain at 3am, in the rain, with a decision to make and nobody to ask, the signature is yours. That is the job. The salary is compensation for the weight, not the hours.</p>
 <p>Read your agreement. Take the counsel. Ask the rude question in orientation. The people who last here are the ones who never quite stopped being suspicious of us, and we would rather have them.</p>
 <p class="signature">— People Services // Onboarding</p>`},

{id:'facility-register-update', from:'Records Custody', role:'Havelock Centre',
 cat:'facility', date:'2098.05.05', time:'11:15', tag:'RECORDS',
 subject:'Public facility register — annual reconciliation',
 preview:'Twenty-two Pacific entries reconciled. One historical discrepancy noted and closed.',
 body:`<p>The annual reconciliation of the public facility register against internal asset records is complete. Twenty-two Pacific entries reconciled without exception.</p>
 <p>One historical discrepancy is noted and closed: legacy routing tables from the 2060s and 2070s carry site codes that no longer correspond to any registered facility. These are understood to be decommissioned works, leased space, or clerical duplicates from the pre-mesh numbering scheme.</p>
 <p>Records Custody has closed the item as unresolvable rather than resolved. The distinction matters to auditors and to nobody else, but we are required to say it.</p>
 <p class="signature">— Records Custody</p>`},

{id:'ops-standby', from:'Operations Desk', role:'Pacific Special Measures',
 cat:'ops', date:'2098.06.18', time:'05:30', tag:'H3 INTERNAL',
 subject:'FMU-3 status — standby',
 preview:'No deployable assignment token released. Remain contactable.',
 body:`<p>Field Measures Unit Three remains at standby. No deployable assignment token has been released to this compartment.</p>
 <p>Personnel should remain contactable and within two hours of Suite 19-C. Equipment custody and medical baseline should be closed out during the standby period rather than after activation, because after activation there will not be time and somebody always thinks there will.</p>
 <p class="signature">— Operations Desk</p>`}

],

/* ------------------------------------------------------------
   READER REWARD — sealed until every message above is read
   ------------------------------------------------------------ */
reward: {
  id:'archive-routing',
  from:'Records Custody', role:'Archive Retrieval // Havelock Centre',
  cat:'facility', date:'2071.09.14', time:'—', tag:'ARCHIVE // DECLASSIFIED 2093',
  subject:'Pacific routing table, revision 11 — retrieval note',
  preview:'Retrieved from the annexe at your request. Note the count.',
  body:`<p>Retrieved from the records annexe at your request. Original is paper; this is a certified transcription. Declassified 2093 under the routine review schedule.</p>
  <p>The document is a Pacific logistics routing table, revision 11, dated September 2071. It lists cold-chain and consumables destinations for the region in that year. It is, by any reasonable measure, one of the least interesting documents in the basement.</p>
  <p>Note the count.</p>
  <p>The public facility register for 2071 lists ten Pacific destinations. This table routes to eleven. Ten carry site names. The eleventh carries only a numeric code, <b>PAC-07-B</b>, and a consumables allocation sized for roughly forty people.</p>
  <p>PAC-07-B appears in revisions 9 through 14, then stops. It does not appear in the register for any year. Records Custody has no acquisition record, no disposal record, and no lease.</p>
  <p>The 2098 reconciliation closed this class of discrepancy as <i>unresolvable rather than resolved</i>. I signed that assessment and I stand by it: there is no evidence here of anything except old paperwork, and old paperwork is wrong constantly.</p>
  <p>I will say the one thing that keeps the file open on my desk. Clerical duplicates do not get a consumables allocation. Somebody was eating.</p>
  <p class="signature">— H. Vasquez-Lindqvist<br>Records Custody, Havelock Centre<br><i>Retrieval logged. This note is part of the record.</i></p>`
},

/* ------------------------------------------------------------
   MARKET — 2098 exchange data
   ------------------------------------------------------------ */
market: {
  asOf:'2098.06.18 // 16:00 PACIFIC CLOSE // DELAYED 20 MIN',
  primary:{
    ticker:'HVLK', name:'Havelock Industries', exch:'NAA PACIFIC',
    price:1842.60, change:14.80, pct:0.81,
    open:1829.40, high:1851.20, low:1824.05,
    vol:'2.41M', mcap:'ACr 1.94T', pe:22.4, yield:'1.9%',
    range52:'1,402.10 — 1,908.75',
    note:'Closed period in effect from 2098.06.16 ahead of Q2 results on 2098.06.30.',
    // 60 sessions of closing prices, oldest first
    history:[1602,1588,1611,1624,1619,1640,1657,1649,1662,1671,
             1655,1668,1690,1702,1688,1699,1714,1731,1726,1740,
             1722,1709,1688,1665,1641,1628,1650,1672,1691,1705,
             1718,1733,1749,1741,1758,1772,1765,1780,1796,1788,
             1801,1815,1808,1822,1834,1827,1840,1852,1845,1858,
             1871,1863,1849,1836,1841,1855,1868,1852,1828,1842.6]
  },
  index:{
    ticker:'PCI', name:'Pacific Continuity Index',
    value:9412.77, change:38.19, pct:0.41,
    note:'Twelve constituents. Weighted by continuity obligation, not market capitalisation.'
  },
  constituents:[
    {t:'HVLK', n:'Havelock Industries',            s:'Continuity // Diversified', p:1842.60, c:0.81,  w:'18.4%'},
    {t:'NSCR', n:'Northstar Crown Authority',      s:'Orbital // Infrastructure', p:  964.15, c:1.24,  w:'11.9%'},
    {t:'KAIT', n:'Kaito Reclamation Group',        s:'Salvage // Remediation',    p:  412.80, c:-0.36, w:'9.7%'},
    {t:'MRDN', n:'Meridian Grid Partners',         s:'Power // Islanding',        p:  788.45, c:0.62,  w:'9.1%'},
    {t:'ALDR', n:'Alder Clinical Systems',         s:'Human Systems // Clinical', p: 1105.30, c:2.08,  w:'8.8%'},
    {t:'SFTL', n:'Softlight Assurance',            s:'AI Audit // Identity',      p:  622.90, c:-1.14, w:'8.2%'},
    {t:'TDWL', n:'Tidewell Coastal Works',         s:'Marine // Flood Defence',   p:  349.55, c:0.94,  w:'7.6%'},
    {t:'CRVX', n:'Corvid Express Logistics',       s:'Freight // Cold Chain',     p:  271.20, c:-0.42, w:'6.9%'},
    {t:'HLIO', n:'Helio Lift Consortium',          s:'Lift // Corridor',          p:  856.75, c:1.61,  w:'6.1%'},
    {t:'BRWN', n:'Brownlee Indemnity',             s:'Continuity Underwriting',   p:  498.05, c:0.18,  w:'5.4%'},
    {t:'QNTA', n:'Quanta Housing Trust',           s:'Emergency Shelter',         p:  183.40, c:-0.88, w:'4.6%'},
    {t:'VRDL', n:'Verdal Water Authority',         s:'Water // Treatment',        p:  606.10, c:0.35,  w:'3.3%'}
  ],
  notes:[
    ['CLOSED PERIOD','HVLK trading restricted for personnel holding material non-public information until 2098.07.01.'],
    ['EMPLOYEE PLAN','Participation capped at 8% of base salary. 50% match after three years of service.'],
    ['FUND SEPARATION','The Continuity Retirement Fund holds no HVLK by trust deed and cannot acquire it.'],
    ['INDEX METHOD','PCI weights by continuity obligation carried, not market capitalisation. Rebalanced annually.']
  ]
},

/* ------------------------------------------------------------
   OPERATIONS
   ------------------------------------------------------------ */
operations: {
  unit:{name:'Field Measures Unit Three', code:'FMU-3', region:'Pacific Special Measures',
        sponsor:'Director Mireille Dagenais', command:'Provisional // no permanent field commander',
        status:'STANDBY', posture:'Contactable, within two hours of Suite 19-C'},
  authority:'Mission-specific, temporary, recorded, and limited to issued credentials. Authority lapses with the assignment token, not with the calendar.',
  standingOrders:[
    ['SO-01','Life before evidence','Destruction of evidence to reach a living person is protected conduct and is not a reportable loss.'],
    ['SO-02','Capture before termination','Lethal force is a failure state carrying a reporting requirement. Personnel are supported, represented and reviewed.'],
    ['SO-03','Containment before disclosure','Hazard information releases on a recorded schedule. Delay is permitted. Silence is not.'],
    ['SO-04','Return together','Unit state at task end is the assessed outcome. Individual heroics that strand the unit are failures.'],
    ['SO-05','Name the authoriser','No instruction is executed without a named authorising officer in the record. This protects you.']
  ],
  activations:[
    {ref:'PAC-2098-0412', date:'2098.04.12', tier:'TIER 2', loc:'Pacific Commons // Drill', outcome:'CLOSED', note:'Regional handover 14 min against 12 min target.'},
    {ref:'PAC-2098-0331', date:'2098.03.31', tier:'TIER 1', loc:'Kamloops Depot', outcome:'CLOSED', note:'Cold store compressor failure. No loss.'},
    {ref:'ORB-2098-0227', date:'2098.02.27', tier:'TIER 4', loc:'Pacific lift corridor', outcome:'CLOSED', note:'Conjunction avoidance. Advisory issued to all operators.'},
    {ref:'PAC-2098-0119', date:'2098.01.19', tier:'TIER 2', loc:'Salish corridor', outcome:'CLOSED', note:'Storm surge overtopping. Managed retreat executed.'}
  ],
  token:{released:false, note:'Assignment compartment service returned no active token for this session. Compartment absence is not evidence that a compartment does not exist.'}
},

/* ------------------------------------------------------------
   MEDICAL &amp; CONSENT
   ------------------------------------------------------------ */
medical: {
  baseline:{status:'COMPLETE', date:'2098.06.17', clinic:'Strategic Health Clinic // Deck 4',
            restriction:'None preventing deployment'},
  vitals:[
    ['CARDIOVASCULAR','WITHIN RANGE'],['NEUROLOGICAL','WITHIN RANGE'],
    ['PULMONARY','WITHIN RANGE'],['MUSCULOSKELETAL','WITHIN RANGE'],
    ['AUGMENTATION INTERFACE','NOMINAL'],['FATIGUE INDEX','LOW']
  ],
  pending:[
    {id:'emergency', title:'Emergency stabilisation authority',
     text:'Authorises Havelock clinical personnel to perform procedures reasonably necessary to preserve life, prevent catastrophic neurological injury, stabilise an augmentation, prevent uncontrolled ability discharge, or maintain safe transport, where you cannot consent at the time.',
     note:'May include temporary sedation, suppression, neural isolation or disconnection of non-essential systems. Every use is logged and reviewed with you afterward in ordinary conditions.'},
    {id:'routing', title:'Protected medical identity routing',
     text:'Routes your clinical records under your protected identity rather than your civic one, so a treating clinician outside Havelock cannot link your medical history to your sealed record.',
     note:'Reduces continuity of care with non-Havelock providers. Some personnel decline this deliberately. Either decision is recorded.'}
  ],
  ledger:[
    {date:'2098.06.17', proc:'Operational baseline assessment', auth:'Dr. S. Okonjo-Bell', consent:'GRANTED // IN PERSON'},
    {date:'2098.06.17', proc:'Augmentation interface calibration', auth:'Tech. R. Fenwick', consent:'GRANTED // IN PERSON'},
    {date:'2098.06.16', proc:'Immunisation, seasonal Pacific', auth:'Nurse A. Idris', consent:'GRANTED // IN PERSON'},
    {date:'2098.06.16', proc:'Records transfer from prior employer', auth:'Records Custody', consent:'GRANTED // WRITTEN'},
    {date:'2098.06.15', proc:'Pre-employment health declaration', auth:'Self-reported', consent:'N/A'}
  ],
  rights:'You hold a copy of this ledger. Havelock cannot amend an entry without your countersignature and cannot delete one at all. On exit, your copy travels with you and the company copy is destroyed on a fixed schedule.'
},

/* ------------------------------------------------------------
   EQUIPMENT CUSTODY
   ------------------------------------------------------------ */
equipment: {
  auditDue:'2098.06.30',
  issued:[
    {item:'Common Mesh terminal, field-hardened', code:'TRM-4471-C', cls:'COMPANY', st:'ISSUED', note:'Degraded mode certified. Do not modify the trust anchor.'},
    {item:'Credential and protected-identity token', code:'CRD-H3-8820', cls:'COMPANY', st:'ISSUED', note:'H3 Operational, compartmented by assignment.'},
    {item:'Protective vest, Pacific pattern', code:'PPE-2210-B', cls:'COMPANY', st:'ISSUED', note:'Fitted 2098.06.17. Refit at 12 months or after impact.'},
    {item:'Field medical kit, Tier 2', code:'MED-0914', cls:'COMPANY', st:'ISSUED', note:'Sealed. Breaking the seal files an automatic usage report.'},
    {item:'Powered frame, light recovery', code:'FRM-1187', cls:'COMPANY', st:'PENDING FIT', note:'Fitting follows medical baseline. Booked 2098.06.21.'},
    {item:'Sidearm, less-lethal primary', code:'WPN-3340-L', cls:'COMPANY', st:'PENDING', note:'Release requires use-of-force certification current within 12 months.'},
    {item:'Vehicle authorisation, Pacific pool', code:'VEH-PAC-77', cls:'COMPANY', st:'ISSUED', note:'Ground and rotary. Not lift-rated.'},
    {item:'Quarters allocation, Suite 19-C', code:'QTR-19C-214', cls:'FACILITY', st:'ISSUED', note:'Residential ring, 90-day rotation.'}
  ],
  protected:[
    'Ordinary medical restoration and reconstruction',
    'Replacement and fabricated organs',
    'Permanently integrated life-support systems',
    'Naturally occurring capability',
    'Your civic identity and its recovery key'
  ],
  protectedNote:'These are part of your protected person under the Human Capability Charter. They appear on no schedule, cannot be repossessed, and cannot be used as leverage in any negotiation with you. If anything of yours is listed as company property above, report it today.'
},

/* ------------------------------------------------------------
   PAY &amp; BENEFITS
   ------------------------------------------------------------ */
benefits: {
  pay:[
    ['Base salary','ACr 228,000','Annual // settles last working day'],
    ['Operational availability stipend','ACr 42,000','Annual // settles 5th of following month'],
    ['Orbital rotation supplement','ACr 1,850','Per 30-day rotation'],
    ['Hazard supplement','Assignment-rated','Settles with stipend'],
    ['Certification retention','ACr 6,400','Annual // per current capability class']
  ],
  totalNote:'Indicative total for a standard year at current rating: ACr 278,250 before assignment-rated supplements.',
  coverage:[
    ['Clinical','Full','Trauma, reconstruction, critical care, no cap'],
    ['Augmentation maintenance','Full','Charter obligation // cannot be waived'],
    ['Prosthetic servicing','Full','Including devices fitted before employment'],
    ['Dependants','Full','Registered dependants, same terms'],
    ['Mental health','Full','Independent provider // not reportable to Havelock'],
    ['Life support continuation','For life','Continues after employment ends, for any reason'],
    ['Independent counsel','Company-funded','Panel maintained by the Alliance bar, not by us']
  ],
  fund:{name:'Continuity Retirement Fund', balance:'ACr 41,280', contrib:'8% employee // 6% company',
        note:'Holds no HVLK stock by trust deed and cannot acquire it. If this company fails, your retirement does not fail with it.'},
  advantage:'Employee Advantage discounts apply on credential tap at all participating counters. See the June catalogue in Messages for the full register.'
},

/* ------------------------------------------------------------
   TRAINING &amp; CERTIFICATION
   ------------------------------------------------------------ */
training: [
  {name:'Field use-of-force, capture-first', st:'CURRENT', exp:'2099.02.14', req:true,  note:'Annual. Required for less-lethal release.'},
  {name:'Emergency medical, Tier 2 field',   st:'CURRENT', exp:'2099.04.02', req:true,  note:'Biennial refresher.'},
  {name:'Hazardous atmosphere entry',        st:'CURRENT', exp:'2098.11.30', req:true,  note:'Expiring within 6 months.'},
  {name:'Powered frame, light recovery',     st:'BOOKED',  exp:'—',          req:true,  note:'Session 2098.06.21, Suite 19-C.'},
  {name:'Containment and capture, capability class', st:'REQUIRED', exp:'—', req:true,  note:'Q3 window opens 2098.07.01. Fills in a day.'},
  {name:'Cold-weather operations',           st:'LAPSED',  exp:'2097.10.11', req:false, note:'Required only for northern postings.'},
  {name:'Orbital egress and pressure trauma',st:'CURRENT', exp:'2099.01.08', req:true,  note:'Required for Suite 19-C residence.'},
  {name:'Charter and confidential reporting',st:'CURRENT', exp:'2100.06.17', req:true,  note:'Triennial. Completed at onboarding.'},
  {name:'Mesh degraded-mode operations',     st:'CURRENT', exp:'2099.06.24', req:false, note:'Recommended before the 24 June test.'},
  {name:'Evidence handling and chain of custody', st:'CURRENT', exp:'2099.03.19', req:true, note:'Annual.'}
],

/* ------------------------------------------------------------
   DIRECTORY
   ------------------------------------------------------------ */
directory: [
  {n:'Mireille Dagenais', r:'Director, Pacific Special Measures', l:'Suite 19-C', c:'H3', av:'MD', note:'Unit sponsor. Contact through the Operations Desk unless directed otherwise.'},
  {n:'Mina Aulakh', r:'Unit Coordinator, FMU-3', l:'Suite 19-C', c:'H3', av:'MA', note:'First point of contact for logistics, access and scheduling.'},
  {n:'Adaeze Halloran-Ohene', r:'Chair and Chief Executive', l:'Vancouver', c:'PUBLIC', av:'AH', note:'Office of the Chair. All-personnel correspondence only.'},
  {n:'Dr. S. Okonjo-Bell', r:'Clinical Lead, Strategic Health', l:'Deck 4, Suite 19-C', c:'MEDICAL', av:'SO', note:'Operational baselines and capability assessment.'},
  {n:'R. Fenwick', r:'Augmentation Technician', l:'Deck 4, Suite 19-C', c:'MEDICAL', av:'RF', note:'Interface calibration and maintenance windows.'},
  {n:'H. Vasquez-Lindqvist', r:'Records Custody', l:'Havelock Centre, Vancouver', c:'INTERNAL', av:'HV', note:'Archive retrieval. Fourteen days notice for physical records.'},
  {n:'Operations Desk', r:'Pacific Special Measures', l:'Suite 19-C', c:'H3', av:'OD', note:'Standing watch. Activation tokens and standing orders.'},
  {n:'Common Mesh Trust Office', r:'Systems Intelligence', l:'Pacific Relay 07', c:'INTERNAL', av:'TO', note:'Report suspected forged or hostile messages here.'},
  {n:'Independent Advocate', r:'Confidential Reporting', l:'External // Alliance panel', c:'PROTECTED', av:'IA', note:'Outside your division and outside your chain of command. Not reportable to Havelock.'},
  {n:'People Services', r:'Personnel Trust', l:'Vancouver', c:'INTERNAL', av:'PS', note:'Agreements, counsel requests, benefits and identity selection.'},
  {n:'Equipment Control', r:'Asset Custody', l:'Pacific Commons', c:'INTERNAL', av:'EC', note:'Custody schedules, fittings and returns.'},
  {n:'Training Office', r:'Certification', l:'Pacific // distributed', c:'INTERNAL', av:'TR', note:'Booking, recertification and capability-class windows.'}
],

/* ------------------------------------------------------------
   H3 SECURE
   ------------------------------------------------------------ */
secure: {
  credential:'H3 OPERATIONAL // COMPARTMENTED BY ASSIGNMENT',
  session:'VERIFIED // PACIFIC RELAY 07 // TRUST ANCHOR CURRENT',
  compartments:[
    {name:'FMU-3 unit compartment', st:'ACCESSIBLE', note:'Standing orders, unit status, activation history.'},
    {name:'Assignment token compartment', st:'NO ACTIVE TOKEN', note:'Nothing released to this session.'},
    {name:'Sponsor correspondence', st:'ACCESSIBLE', note:'Director-level correspondence addressed to you.'},
    {name:'Cross-unit operational records', st:'NOT AUTHORISED', note:'Requires a named authorising officer and a recorded purpose.'},
    {name:'Regional Special Measures index', st:'NOT AUTHORISED', note:'Requires Tier 3 sponsorship beyond your current assignment.'}
  ],
  advisory:'Compartment absence is not evidence that a compartment does not exist. It is evidence that nothing has been released to this session. Personnel who confuse the two make poor witnesses.',
  audit:[
    ['2098.06.18 05:31','Session opened','Trust anchor verified'],
    ['2098.06.18 05:31','Compartment query','No active assignment token'],
    ['2098.06.17 14:08','Medical record access','Self // Strategic Health Clinic'],
    ['2098.06.17 09:22','Credential issued','H3 Operational // Dagenais, M.'],
    ['2098.06.16 11:40','Identity tier selection','Pending employee confirmation']
  ]
}
};

/* A top-level `const` in a classic script is script-scoped, not a property of
   window. Publish it explicitly so views.js can read it. */
window.HAVELOCK_DATA = HAVELOCK_DATA;
