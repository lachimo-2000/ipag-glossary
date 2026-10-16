/* Logic/markup checks using a small DOM stub. This is not a browser rendering test. */
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),content=fs.readFileSync(path.join(root,'content.json'),'utf8'),code=fs.readFileSync(path.join(root,'app.js'),'utf8');
function boot(hash='#lookup',width=1440){
 const els=new Map(),handlers={},timers=new Map();let serial=0,storageReads=0;
 const cl=()=>{const s=new Set();return{add(...a){a.forEach(v=>s.add(v))},remove(...a){a.forEach(v=>s.delete(v))},contains(x){return s.has(x)},toggle(x,b){const add=b===undefined?!s.has(x):b;add?s.add(x):s.delete(x);return add}}};
 let doc;
 function el(id){if(!els.has(id))els.set(id,{id,innerHTML:'',textContent:id==='glossary-data'?content:id==='assets-data'?JSON.stringify({logoColor:'data:image/png;base64,',logoWhite:'data:image/png;base64,',building:'data:image/png;base64,'}):'',value:'',style:{},dataset:{},hidden:false,open:false,isConnected:true,scrollTop:0,children:[],classList:cl(),attrs:{},setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},focus(){doc.activeElement=this},querySelector(s){return el('selector:'+s)},querySelectorAll(){return[]},addEventListener(k,f){this['on'+k]=f},showModal(){this.open=true},close(){this.open=false}});return els.get(id)}
 doc={getElementById:el,body:{classList:cl(),style:{}},querySelector:s=>el('selector:'+s),addEventListener(k,f){(handlers[k]??=[]).push(f)}};
 const win={innerWidth:width,scrollY:0,scrollTo(o){this.scrollY=o.top},matchMedia(q){return{matches:q.includes('900px')?this.innerWidth<=900:false}},addEventListener(){}};
 const location={hash};const ctx={document:doc,window:win,location,history:{replaceState(v,t,h){location.hash=h}},localStorage:{getItem(){storageReads++;return JSON.stringify({profile:{fullName:'Trương Minh Đức',avatar:'male'}})},setItem(){throw Error('Must not write personal storage')}},requestAnimationFrame:f=>f(),setTimeout:f=>{timers.set(++serial,f);return serial},clearTimeout:id=>timers.delete(id),console};vm.createContext(ctx);vm.runInContext(code,ctx);
 return{run:s=>vm.runInContext(s,ctx),el,win,doc,location,get storageReads(){return storageReads},flush(){for(const [i,f]of timers){timers.delete(i);f()}},dispatch(k,e){for(const f of handlers[k]||[])f(e)}};
}
let a=boot(),n=0;function check(expr){assert(a.run(expr),expr);n++}
check("s.view==='home'");assert.equal(a.location.hash,'#home');assert.equal(a.storageReads,0);n+=2;
check("VIEWS.map(x=>x[0]).join(',')==='home,lookup,compare,help'");
check("!$('app').innerHTML.includes('Trương Minh Đức')");
check("!/(profile-form|data-bookmark|annotation-tools|study-shell|data-view=\"reading\")/.test($('app').innerHTML)");
check("home().includes('VỀ BỘ TỪ ĐIỂN')&&home().includes('Bộ Từ điển Thuật ngữ của IPAG')");
check("!home().includes('Ngôn ngữ chung là nền tảng')&&!home().includes('PHẦN V: ILEAD')");
for(const q of ['OC','oc','  OC  '])check(`searchRank(${JSON.stringify(q)})[0].t.key==='OC'`);
check("searchRank('OC')[0].tier===0");check("searchRank('OC').every((x,i,a)=>i===0||a[i-1].tier<=x.tier)");
check("!searchRank('OC').some(x=>x.t.key==='LMS')");check("searchRank('học').some(x=>x.t.key==='LMS')");
check("searchRank('COE')[0].t.key==='COE'");check("searchRank('IPAWY').some(x=>x.t.key==='IPAway'&&x.tier===5)");
check("searchRank('cộng tác').map(x=>x.t.id).join()===searchRank('CONG TAC').map(x=>x.t.id).join()");
check("searchRank('xyz987nomatch').length===0");check("simpleHighlight('<script>OC</script>','OC').includes('&lt;script&gt;')");
a.run("navigate('lookup')");check("results().length===58");check("(lookup().match(/class=\"term-card\"/g)||[]).length===58");check("!lookup().includes('detail-body')");
for(const [section,count]of [['IPA',8],['IPAM',20],['IPAG',6],['EPIC',18],['ILEAD',6]]){
 a.run(`s.alpha='A';setSection('${section}')`);check("s.alpha==='all'");check(`results().length===${count}`);
 check("[...availableLetters()].every(c=>DATA.terms.some(t=>t.section===s.section&&firstLetter(t)===c))");
 for(const c of JSON.parse(a.run('JSON.stringify([...availableLetters()])'))){a.run(`s.alpha='${c}'`);check('results().length>0');}
 a.run("s.alpha='all'");
}
a.run("setSection('IPA')");check("!availableLetters().has('A')");check("filters().includes('data-alpha=\"A\" aria-pressed=\"false\" disabled')");
a.run("s.q='OC';s.section='all';s.alpha='all'");check("results()[0].t.key==='OC'");check("!availableLetters().has('A')");
a.run("s.q='';s.section='IPAM';s.alpha='O';s.sort='az';render();window.scrollY=1462;");
const before=JSON.stringify(a.run('s')),page=a.el('app').innerHTML,origin=a.el('origin');a.doc.activeElement=origin;
a.run("openTerm('term-68')");check("$('term-dialog').open&&document.body.classList.contains('detail-open')");check("overlay.scroll===1462");check("$('term-dialog').innerHTML.includes('OC – Opportunity chain')");
a.run("$('term-dialog').scrollTop=381;openTerm('term-66');");check("overlay.stack.length===2&&overlay.stack[0].scroll===381");
a.run("overlay.stack.pop();paintDetail()");check("$('term-dialog').scrollTop===381");
a.run('closeDetail()');a.flush();check("!$('term-dialog').open&&!document.body.classList.contains('detail-open')");assert.equal(a.win.scrollY,1462);assert.equal(a.doc.activeElement,origin);assert.equal(JSON.stringify(a.run('s')),before);assert.equal(a.el('app').innerHTML,page);n+=4;
a.run("openTerm('term-68');");a.el('term-dialog').oncancel({preventDefault(){}});a.flush();check("!$('term-dialog').open");
a.run("s.q='';s.section='all';s.alpha='all'");
let all=[];for(const id of JSON.parse(a.run('JSON.stringify([...termMap.keys()])'))){a.run(`overlay.stack=[{id:'${id}',scroll:0}]`);const html=a.run(`detailHTML('${id}')`);assert(html.includes('data-action="close-detail"'));all.push({id,html});n++;}
const home=a.run('home()'),help=a.run('help()'),lookup=a.run('lookup()'),compare=a.run('compare()'),shell=a.run("s.view='home';render();$('app').innerHTML");
assert(!/Glossary IPAG_15102026|Ghi chú:|Chia sẻ:|SCORM|Ứng dụng 3\.0/.test(help));n++;
assert(!/localStorage|avatar|bookmarks|flashcard|annotation-tools|user-highlight/.test(code));n++;
let b=boot('#term-68',390);assert(b.run("s.view==='home'"));assert(b.run("$('sidebar').inert===true"));b.run('mobileOpen=true;syncMenu()');assert(b.run("$('sidebar').inert===false"));n+=3;
const output=process.argv[2];if(output)fs.writeFileSync(output,JSON.stringify({all,home,help,lookup,compare,shell}));
console.log(`PASS ${n} logic/markup assertions (DOM stub; no browser rendering).`);
