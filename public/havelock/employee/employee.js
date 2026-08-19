
(() => {
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const boot=$('#boot'),login=$('#login'),app=$('#app');
const ambient=$('#ambient'),clickSound=$('#clickSound'),grantSound=$('#grantSound'),alertSound=$('#alertSound');
let soundOn=localStorage.getItem('havelockSound')!=='off';
function play(el){ if(!soundOn||!el)return; try{el.currentTime=0;const pr=el.play();if(pr&&pr.catch)pr.catch(()=>{})}catch(e){} }
function click(){play(clickSound)}
function setSound(v){soundOn=v;localStorage.setItem('havelockSound',v?'on':'off'); $('#soundToggle')&&($('#soundToggle').textContent=v?'SOUND ON':'SOUND OFF'); $('#audioLogin')&&($('#audioLogin').textContent=v?'Audio: On':'Audio: Off'); if(v && !app.classList.contains('hidden')){ambient.volume=.35;ambient.play().catch(()=>{})}else ambient.pause()}
setSound(soundOn);

const lines=['TRUST ANCHOR // VERIFIED','PACIFIC RELAY 07 // SYNCHRONIZED','LOCAL IDENTITY SERVICE // READY','H3 COMPARTMENT SERVICE // AVAILABLE','CONTINUITY NETWORK // NOMINAL'];
let li=0; const lineBox=$('#bootLines');
const lineTimer=setInterval(()=>{ if(li<lines.length){lineBox.innerHTML+=lines[li]+'<br>';li++} },350);
setTimeout(()=>{clearInterval(lineTimer);boot.classList.add('hidden'); const trusted=localStorage.getItem('havelockTrusted')==='yes'; if(trusted) enterApp(false); else login.classList.remove('hidden')},3000);

function enterApp(withSound=true){
  login.classList.add('hidden');app.classList.remove('hidden');
  if(withSound) play(grantSound);
  if(soundOn){ambient.volume=.35;ambient.play().catch(()=>{})}
  setTimeout(()=>play(alertSound),700);
  updateClock();
}
$('#loginForm').addEventListener('submit',e=>{
  e.preventDefault(); click();
  const id=$('#employeeId').value.trim(), pass=$('#passcode').value.trim();
  const msg=$('#loginMessage');
  msg.textContent='VERIFYING LOCAL TRUST…';
  setTimeout(()=>{
    if(!id){msg.textContent='EMPLOYEE OR OPERATIONAL ID REQUIRED';return}
    if(pass.toUpperCase()!=='H3-2098'){msg.textContent='ACCESS PHRASE NOT RECOGNIZED // HINT FOR GAME: H3-2098';play(alertSound);return}
    if($('#remember').checked)localStorage.setItem('havelockTrusted','yes');
    localStorage.setItem('havelockEmployeeId',id);
    msg.textContent='IDENTITY VERIFIED // H3 SESSION ESTABLISHED';
    setTimeout(()=>enterApp(true),650);
  },900);
});
$('#audioLogin').addEventListener('click',()=>{click();setSound(!soundOn)});
$('#soundToggle').addEventListener('click',()=>{click();setSound(!soundOn)});
$('#lockButton').addEventListener('click',()=>{click();localStorage.removeItem('havelockTrusted');ambient.pause();app.classList.add('hidden');login.classList.remove('hidden');$('#passcode').value='';$('#loginMessage').textContent='TERMINAL LOCKED'});

function updateClock(){
 const d=new Date(); $('#time').textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':');
}
setInterval(updateClock,1000);

document.addEventListener('pointerdown',e=>{if(e.target.closest('button,a'))click()},true);

const titles={home:'Good morning.',messages:'Messages',operations:'Operations',documents:'Controlled Documents',medical:'Medical & Consent',equipment:'Equipment Custody',benefits:'Pay & Benefits',training:'Training & Certifications',directory:'Directory',market:'Market // HVLK',secure:'H3 Secure'};
$('#nav').addEventListener('click',e=>{
 const b=e.target.closest('[data-view]'); if(!b)return;
 $$('nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
 $$('.view').forEach(x=>x.classList.remove('active'));$('#view-'+b.dataset.view).classList.add('active');
 $('#pageTitle').textContent=titles[b.dataset.view];$('#crumb').textContent='EMPLOYEE MESH / '+b.dataset.view.toUpperCase();
});

const messages={
mireille:{from:'Mireille Dagenais',meta:'07:03 // H3 INTERNAL // PACIFIC SPECIAL MEASURES',subject:'Welcome to Field Measures Unit Three',body:`<p>Welcome aboard.</p><p>There are two things I want you to understand before we begin. First, your field authority is real, but it is not unlimited. When Havelock issues a credential, it is tied to a specific assignment, a specific jurisdictional problem, and a record of who authorized what.</p><p>Second, I expect you to bring people back alive whenever practical. A dangerous person may also be a patient, a witness, or the only person who understands what just happened.</p><p>You were not hired because every situation has a procedure. You were hired because sometimes the procedure runs out before the problem does.</p><p class="signature">— Mireille Dagenais<br>Director, Pacific Special Measures</p>`},
mina:{from:'Mina Aulakh',meta:'06:48 // INTERNAL // FMU-3',subject:'Orientation logistics and station access',body:`<p>Your Crown station credential is active through Pacific Commons, Deck 4 Strategic Health, and Havelock Continuity Suite 19-C.</p><p>Please complete agreement review and protected-identity selection before unit activation. Equipment fitting follows medical baseline. Do not worry if station security appears stricter around Suite 19-C; Havelock shares the deck with regulated medical and strategic cargo services.</p><p>If you get lost, ask the Common Mesh for “Havelock Continuity Suite Nineteen-C.” It will route you to the public entrance, not the operations lift.</p><p class="signature">— Mina</p>`},
hr:{from:'Havelock People Services',meta:'YESTERDAY // CONTROLLED PERSONAL',subject:'Agreement review reminder',body:`<p>Your Enhanced Field Services Employment and Sponsorship Agreement is ready for review.</p><p>The employee portal reports an average review time of nine minutes. Average review time is not a requirement. You may request clarification or independent counsel before signing.</p><p>Your current compensation record shows ACr 228,000 base salary plus ACr 42,000 annual operational availability stipend.</p>`},
clinic:{from:'Strategic Health Clinic',meta:'YESTERDAY // MEDICAL // PROTECTED',subject:'Baseline complete / two items require confirmation',body:`<p>Operational baseline is complete. No immediate medical restriction prevents deployment.</p><p>Two Consent Ledger items require confirmation: emergency stabilization authority and protected-medical-identity routing. These may be reviewed through Medical & Consent.</p>`}
};
// The messages view is rendered by views.js; this reader only runs if an
// older static message list is present.
function readMessage(key){
 const box=$('#messageReader'); if(!box)return;
 const m=messages[key]; if(!m)return;
 box.innerHTML=`<div class="meta">${m.meta}</div><h2>${m.subject}</h2><div class="meta">FROM // ${m.from}</div>${m.body}`;
 $$('.message-list button').forEach(b=>b.classList.toggle('selected',b.dataset.message===key));
}
$$('[data-message]').forEach(b=>b.addEventListener('click',()=>readMessage(b.dataset.message)));

const docs={
agreement:['Enhanced Field Services Employment and Sponsorship Agreement',`<p><b>Agreement:</b> HCRS-PAC-FMU3-2098-14</p><div class="box"><b>Employment classification</b><span>Operational Specialist, Enhanced Field Services</span></div><div class="box"><b>Assigned unit</b><span>Field Measures Unit Three</span></div><div class="box"><b>Initial term</b><span>Thirty-six months</span></div><div class="box"><b>Clearance</b><span>H3 Operational, compartmented by assignment</span></div><p><b>Plain-language promise:</b> You receive excellent pay, strategic medical care, augmentation maintenance, legal protection, equipment, and identity security. You agree to remain deployable, protect confidential information, submit to reasonable safety monitoring, return company property, and follow Havelock’s capture-first use-of-force policy.</p>`],
force:['Field Use-of-Force Standard',`<ul><li>Preserve life; use the minimum force reasonably necessary.</li><li>Capture when practical. Negotiation, restraint, medical stabilization, and technical disablement are preferred to lethal force.</li><li>Protect surrendering and incapacitated people.</li><li>Preserve evidence and chain of custody.</li><li>Protect operational identities.</li><li>Return together. Leaving the team trapped, exposed, or unable to extract is an operational failure.</li></ul>`],
consent:['Medical Consent Ledger Summary',`<p>When an employee cannot provide informed consent, Havelock medical personnel may perform procedures reasonably necessary to preserve life, prevent catastrophic neurological injury, stabilize an augmentation, prevent uncontrolled ability discharge, remove an immediate threat to others, or maintain safe transport.</p><p>Emergency authority may include temporary sedation, power suppression, neural isolation, chemical stabilization, or temporary disconnection of nonessential systems. The Consent Ledger must be updated afterward.</p>`],
identity:['Protected Identity Notice',`<p>Havelock may establish a field name, operational alias, protected professional identity, sealed address information, restricted family records, compartmented credentials, and temporary jurisdictional authority.</p><p>A recovery key must exist so the employee’s lawful identity can be restored.</p>`],
equipment:['Equipment Responsibility Schedule',`<p>Employer property may include armor, power frames, weapons, drones, vehicles, communications systems, artificial assistants, specialist tools, restricted software, and designated leased augmentations.</p><p>Ordinary medical restoration, replacement organs, and permanently integrated life-support systems are part of the employee’s protected person and may not be repossessed.</p>`],
reporting:['Confidential Reporting Procedure',`<p>Employees may report unlawful detention, bodily-autonomy violations, criminal conduct, unsafe medical practice, compromised identity systems, cognition interference, unexplained impulses, power changes, or equipment behaving outside specification.</p><p>Independent advocate access is separate from the operational chain of command.</p>`]
};

const modal=$('#modal');
function openModal(title,body,kicker='H3 EMPLOYEE MESH'){
 $('#modalTitle').textContent=title;$('#modalKicker').textContent=kicker;$('#modalBody').innerHTML=body;modal.classList.remove('hidden');
}
function closeModal(){modal.classList.add('hidden')}
$('#modalClose').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$$('[data-doc]').forEach(b=>b.addEventListener('click',()=>{const d=docs[b.dataset.doc];openModal(d[0],d[1],'CONTROLLED DOCUMENT // EMPLOYEE COPY')}));

$$('[data-open]').forEach(b=>b.addEventListener('click',()=>{
 const k=b.dataset.open;
 if(messages[k]){openModal(messages[k].subject,`<div class="box"><b>${messages[k].from}</b><span>${messages[k].meta}</span></div>${messages[k].body}`,'INTERNAL MESSAGE');return}
 if(k==='onboarding')openModal('FMU-3 Onboarding',`<div class="box"><b>1 // Agreement review</b><span>Required before operational activation.</span></div><div class="box"><b>2 // Medical baseline</b><span>Complete.</span></div><div class="box"><b>3 // Protected identity selection</b><span>Pending employee confirmation.</span></div><div class="box"><b>4 // Equipment custody</b><span>Core terminal and credential complete; field fitting pending.</span></div><div class="choice"><button class="gold" onclick="document.getElementById('modalClose').click()">ACKNOWLEDGE</button></div>`,'ACTIVATION CHECKLIST');
 if(k==='operation')openModal('Operations Channel',`<p>Your current H3 credential is recognized. No deployable assignment token has been released.</p><div class="box"><b>UNIT</b><span>Field Measures Unit Three</span></div><div class="box"><b>STATUS</b><span>STANDBY // Northstar Crown</span></div><div class="box"><b>SPONSOR</b><span>Director Mireille Dagenais</span></div>`,'PACIFIC SPECIAL MEASURES // H3');
 if(k==='consent')openModal(docs.consent[0],docs.consent[1]+'<div class="choice"><button class="gold">CONFIRM EMERGENCY STABILIZATION</button><button>REQUEST CLINIC REVIEW</button></div>','MEDICAL // PROTECTED PERSONAL RECORD');
 if(k==='secure')openModal('H3 Trust Query',`<p>Credential valid. Assignment compartment service returned no active token.</p><div class="box"><b>RESULT</b><span>NO RECORDS RELEASED TO THIS SESSION</span></div><p>Compartment absence is not evidence that a compartment does not exist.</p>`,'SECURE TRUST SERVICE');
}));

// Background mesh.
const canvas=$('#mesh'),ctx=canvas.getContext('2d');let nodes=[];
function resize(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0);nodes=Array.from({length:55},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06}))}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(let i=0;i<nodes.length;i++){const a=nodes[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>innerWidth)a.vx*=-1;if(a.y<0||a.y>innerHeight)a.vy*=-1;ctx.fillStyle='rgba(93,205,222,.3)';ctx.fillRect(a.x,a.y,1,1);for(let j=i+1;j<nodes.length;j++){const b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<110){ctx.strokeStyle=`rgba(83,177,194,${(1-d/110)*.06})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}requestAnimationFrame(draw)}
resize();addEventListener('resize',resize);draw();
})();
