const $=id=>document.getElementById(id);
/* ---- reusable components ---- */
const Opt=o=>`<article class="oc"><div class="t"><span class="ico">${o.i}</span><span class="tag">${o.tag}</span></div><h3>${o.h}</h3><p>${o.p}</p><ul>${o.l.map(x=>`<li>${x}</li>`).join('')}</ul>${o.go?`<a class="btn full" href="#jobs">${o.b} →</a>`:`<button class="btn full" data-w>${o.b} 🔔</button>`}</article>`;
const Stat=s=>`<div class="st"><span class="ico">${s.i}</span><div><b>${s.n}</b><span>${s.t}</span></div></div>`;
const Row=r=>`<div class="row"><div><span class="n">${r.n}</span>${r.k?`<span class="k">${r.k}</span>`:''}${r.b?`<span class="bd b" style="margin:0 0 0 4px">${r.b}</span>`:''}<h4>${r.h}</h4><p>${r.p}</p></div>${r.r?`<div class="rt">${r.r}</div>`:''}</div>`;
const Item=i=>`<div class="it"><span class="lg" style="color:${i.c}">${i.a}</span><div><h5>${i.h}${i.tg?`<span class="bd p">${i.tg}</span>`:''}</h5><small>${i.m}</small><small>${i.d}</small></div><a class="btn" href="#upload">${i.b}</a></div>`;
const Step=s=>`<div><span class="ico">${s.i}</span><div><b>${s.h}</b>${s.t}</div></div>`;
const Link=l=>`<a class="f" href="${l[1]||'#'}" ${l[1]?'':`data-t="${l[0]} page coming soon"`}>${l[0]}</a>`;

$('opts').innerHTML=[
 {i:'🏛',tag:'Coming Soon',h:'College',p:'Explore colleges, courses,fees, placements & more',l:['Search by course, location, fees','Connect directly with colleges','Improve student placements'],b:'Join Waitlist'},
 {i:'🎓',tag:'Available Now',h:"I'm Looking for a Job",p:"Upload your resume. We'll find jobs that fit you.",l:['Jobs from 1000+ sources','AI powered matching','WhatsApp & email alerts'],b:'Explore Jobs',go:1},
 {i:'💼',tag:'Coming Soon',h:"I'm Hiring",p:'Connect with colleges and find candidates — from students to graduates.',l:['Connect directly with colleges','Find the right candidates','Simplify your hiring'],b:'Join Waitlist'}].map(Opt).join('');
$('stats').innerHTML=[{i:'👥',n:'800+',t:'Students'},{i:'🏛',n:'130+',t:'colleges'},{i:'💼',n:'100+',t:'jobs & internships'},{i:'🛡',n:'100%',t:'Safe & Trusted'}].map(Stat).join('');
$('r1').innerHTML=[{n:'01',h:'Set your preferences',p:'Tell us what you\'re looking for, from colleges and courses to jobs, internships and gigs.',r:'<span class="bd p">Smart Profile</span>'},{n:'02',h:'Discover relevant opportunities',p:'Explore colleges and career opportunities matched to your profile, interests and goals',r:'<span class="bd b">AI Ranked</span>'},{n:'03',h:'Get notified when something fits',p:'Get notified when a relevant college or new opportunity is found, so you can act early.',r:'<span class="bd g">Instant Alerts</span>'}].map(Row).join('');
$('r2').innerHTML=[
 {n:'01',k:'VERIFIED PROFILE',h:'Build your college profile',p:'Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.',r:'<span class="bd g">✓ NAAC A++ Ready</span><span class="bd b">98% Match</span>'},
 {n:'02',k:'DIRECT ENROLL',h:'Students discover and connect',p:'Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.',r:'<span class="bd b">Direct Enquiries</span><span class="bd g">● WHATSAPP / CHAT</span><small class="k">Avg. response: &lt;15 min</small>'},
 {n:'03',k:'CAMPUS RECRUITING',h:'Recruiters discover your College',p:'Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.',r:'<span class="bd p">500+ Hiring Partners</span><span class="bd b">Connect Directly</span>'},
 {n:'04',k:'LIVE HUB',h:'Track placements in real time',p:'Track students, interviews, offers and placements from one centralized dashboard.',r:'<span class="bd r">● LIVE PLACEMENTS</span><span class="bd s">Students · Interviews · Offers</span>'}].map(Row).join('');
$('r3').innerHTML=[
 {n:'01',h:'Post a role in minutes',b:'INSTANT SETUP',p:'Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.',r:'<span class="bd g">⚡ 5 Min Deployment</span><span class="bd b">500+ Campus Network</span>'},
 {n:'02',h:'Receive a matched shortlist',b:'INSTANT SETUP',p:'Get candidates matched to your role by skills, experience, location and hiring requirements.',r:'<span class="bd p">⊘ Zero CV Clutter</span><span class="bd b">Tier 1–Tier 3 Parity</span>'},
 {n:'03',h:'Connect with candidates directly',b:'INSTANT SETUP',p:'Message, schedule interviews, and move candidates through your pipeline — all in one place.',r:'<span class="bd b">💬 In-App Scheduling</span><span class="bd b">1-Click Video / Chat</span>'},
 {n:'04',h:'Reduce your time-to-hire',b:'INSTANT SETUP',p:'Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.',r:'<span class="bd s">&lt;2 DAYS</span><span class="bd g">57% Faster Hiring</span>'}].map(Row).join('');
$('pl').innerHTML=[{i:'✓',h:'Resume analyzed',t:'<span style="color:var(--gr)">● Ready in 4s</span>'},{i:'◎',h:'Skills matched',t:'Deep taxonomy'},{i:'✦',h:'Experience matched',t:'Contextual seniority'},{i:'⌕',h:'1,000+ sources searched',t:'Real-time aggregators'}].map(Step).join('');
$('fg').innerHTML=`<div><img src="assets/logo.webp" alt="CampusPe"><p>From choosing a college to finding your next opportunity.</p><p>CampusPe connects students, colleges and employers in one place.</p></div>`+
[['For Students',[['Explore Colleges','#colleges'],['Find Opportunities','#jobs'],['Internships','#jobs'],['Full-time Jobs','#jobs'],['Part-time & Gig','#jobs'],['Application Tracker']]],['For Colleges',[['List Your College','#colleges'],['Admissions'],['Fee Collection'],['Placements']]],['For Employers',[['Post a Job','#employers'],['Find Talent','#employers'],['Campus Hiring','#employers']]],['Company',[['About Us'],['Contact Us','#top'],['Blogs','#blogs'],['Careers']]]].map(c=>`<div><h4>${c[0]}</h4>${c[1].map(Link).join('')}</div>`).join('')+
`<div><h4>Legal &amp; Policies</h4>${['Privacy Policy','Terms & Conditions','Refund & Cancellation Policy','Cookie Policy','Grievance Redressal','Job & Internship Disclaimer'].map(x=>Link([x])).join('')}<a class="f" href="#" data-t="Policies page coming soon" style="color:var(--b)">View all policies →</a><div class="ntb">Separate user, institution and employer terms can live inside the full Policies page.</div></div>`;

/* feed with working filter tabs */
const feed=[{a:'IIM',c:'#c1121f',h:'IIM Bangalore',tg:'Top College',m:'MBA · Bengaluru · ₹ 3L+',d:"India's premier management institute with global exposer...",b:'View Details',t:['All','Colleges']},
 {a:'G',c:'#4285f4',h:'Product Intern',tg:'Internship',m:'Bengaluru · Hybrid · ₹ 35K/mo',d:'Work on real products, learn from top engineers and build...',b:'Apply Now',t:['All','Jobs','Internships']},
 {a:'N',c:'#111',h:'Marketing Gig',tg:'Freelance',m:'Remote · Freelance · ₹ 10K - ₹ 25K',d:'Create content and help with social media campaigns for...',b:'View Details',t:['All','Freelance','Part-time']}];
const tabs=['All','Colleges','Jobs','Internships','Freelance','Part-time'];let cur='All';
const drawFeed=()=>{$('tb').innerHTML=tabs.map(t=>`<button class="${t===cur?'on':''}">${t}</button>`).join('');const f=feed.filter(x=>x.t.includes(cur));$('fd').innerHTML=(f.length?f:feed.slice(0,1)).map(Item).join('')};
drawFeed();$('tb').onclick=e=>{if(e.target.tagName==='BUTTON'){cur=e.target.textContent;drawFeed()}};

/* upload */
const fi=$('fi'),dz=$('dz'),fn=$('fn');
const pick=f=>{if(!f)return;const ok=/\.(pdf|docx?)$/i.test(f.name)&&f.size<=10*1048576;fn.style.color=ok?'var(--gr)':'#e5383b';fn.textContent=ok?`✓ ${f.name} selected — analyzing…`:'Please choose a PDF, DOC or DOCX under 10MB.'};
$('ub').onclick=()=>fi.click();fi.onchange=()=>pick(fi.files[0]);
['dragenter','dragover'].forEach(v=>dz.addEventListener(v,e=>{e.preventDefault();dz.classList.add('drag')}));
['dragleave','drop'].forEach(v=>dz.addEventListener(v,e=>{e.preventDefault();dz.classList.remove('drag')}));
dz.addEventListener('drop',e=>pick(e.dataTransfer.files[0]));

/* phone carousel */
const imgs=[...document.querySelectorAll('#car img')];let ci=2;
const place=()=>{const m=matchMedia('(max-width:900px)').matches,s=m?150:215;imgs.forEach((im,i)=>{const o=i-ci,a=Math.abs(o),sc=a===0?1:a===1?.8:.65;
 im.style.transform=`translateX(calc(-50% + ${o*s*(a>1?.92:1)}px)) translateY(${a===0?0:a===1?42:60}px) scale(${sc})`;im.style.zIndex=9-a;im.style.opacity=m&&a>1?0:a>1?.85:1;im.style.filter=a?'drop-shadow(0 12px 20px rgba(20,60,140,.18)) saturate(.95)':'drop-shadow(0 24px 36px rgba(20,60,140,.35))';im.style.pointerEvents=m&&a>1?'none':'auto'});
 [...$('dots').children].forEach((d,i)=>{d.classList.toggle('on',i===ci);d.setAttribute('aria-selected',i===ci)})};
$('dots').innerHTML=imgs.map((_,i)=>`<button aria-label="Show screen ${i+1}" data-i="${i}"></button>`).join('');
$('dots').onclick=e=>{if(e.target.dataset.i){ci=+e.target.dataset.i;place()}};imgs.forEach((im,i)=>im.onclick=()=>{ci=i;place()});
addEventListener('resize',place);place();

/* nav, toast, waitlist, theme */
const hd=$('hd'),mb=$('mb');mb.onclick=()=>{const o=hd.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'✕':'☰'};
hd.addEventListener('click',e=>{if(e.target.closest('.nl a')){hd.classList.remove('open');mb.textContent='☰'}});
const ts=$('ts');let tt;const toast=m=>{ts.textContent=m;ts.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>ts.classList.remove('show'),2200)};
document.addEventListener('click',e=>{const a=e.target.closest('[data-t]');if(a){e.preventDefault();toast(a.dataset.t)}
 const w=e.target.closest('[data-w]');if(w){const on=w.dataset.w==='1';w.dataset.w=on?'':'1';w.textContent=on?'Join Waitlist 🔔':'You\'re on the waitlist ✓';if(!on)toast("Added to the waitlist. We'll notify you!")}});


/* subtle parallax on floating hero cards (pointer devices only) */
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover)').matches){
 document.querySelectorAll('.hero,.up').forEach(box=>{const els=box.querySelectorAll('[data-d]');
  box.addEventListener('mousemove',e=>{const r=box.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;els.forEach(el=>el.style.transform=`translate(${x*el.dataset.d*2}px,${y*el.dataset.d*2}px)`)});
  box.addEventListener('mouseleave',()=>els.forEach(el=>el.style.transform=''))})}
