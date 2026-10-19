/* Node logic checks with a minimal DOM stub; this does not test browser layout. */
/* Logic/markup checks using a small DOM stub. This is not a browser rendering test. */
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),content=fs.readFileSync(path.join(root,'content.json'),'utf8'),code=fs.readFileSync(path.join(root,'app.js'),'utf8');
function boot(hash='#lookup',width=1440){
 const els=new Map(),handlers={},timers=new Map();let serial=0,storageReads=0;
 const cl=()=>{const s=new Set();return{add(...a){a.forEach(v=>s.add(v))},remove(...a){a.forEach(v=>s.delete(v))},contains(x){return s.has(x)},toggle(x,b){const add=b===undefined?!s.has(x):b;add?s.add(x):s.delete(x);return add}}};
 let doc;
 function el(id){if(!els.has(id))els.set(id,{id,innerHTML:'',textContent:id==='glossary-data'?content:id==='assets-data'?JSON.stringify({logoColor:'data:image/png;base64,',logoWhite:'data:image/png;base64,',building:'data:image/png;base64,'}):'',value:'',style:{},dataset:{},hidden:false,open:false,isConnected:true,scrollTop:0,children:[],classList:cl(),attrs:{},setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},scrollIntoView(){},focus(){doc.activeElement=this},querySelector(s){return el('selector:'+s)},querySelectorAll(){return[]},addEventListener(k,f){this['on'+k]=f},showModal(){this.open=true},close(){this.open=false}});return els.get(id)}
 doc={getElementById:el,body:{classList:cl(),style:{}},querySelector:s=>el('selector:'+s),addEventListener(k,f){(handlers[k]??=[]).push(f)}};
 const win={innerWidth:width,scrollY:0,scrollTo(o){this.scrollY=o.top},matchMedia(q){return{matches:q.includes('900px')?this.innerWidth<=900:false}},addEventListener(){}};
 const location={hash};const ctx={document:doc,window:win,location,history:{replaceState(v,t,h){location.hash=h}},localStorage:{getItem(){storageReads++;return JSON.stringify({profile:{fullName:'Trương Minh Đức',avatar:'male'}})},setItem(){throw Error('Must not write personal storage')}},requestAnimationFrame:f=>f(),setTimeout:f=>{timers.set(++serial,f);return serial},clearTimeout:id=>timers.delete(id),console};vm.createContext(ctx);vm.runInContext(code,ctx);
 return{run:s=>vm.runInContext(s,ctx),el,win,doc,location,get storageReads(){return storageReads},flush(){for(const [i,f]of timers){timers.delete(i);f()}},dispatch(k,e){for(const f of handlers[k]||[])f(e)}};
}

const a=boot();let n=0;const check=s=>{assert(a.run(s),s);n++};
check("s.view==='home'&&VIEWS.map(v=>v[0]).join(',')==='home,lookup,compare'");
check("home().indexOf('home-lookup-cta')>home().indexOf('cycle-grid')");
check("!home().split('home-contents')[0].includes('data-view=\"lookup\"')");
check("CYCLE.map(v=>v[3]).join(',')==='Khởi,Hành,Tinh,Thông,Chuyên'");
a.run("navigate('lookup')");check("results().length===DATA.terms.length");
check("(lookupResults().match(/class=\"inline-term\"/g)||[]).length===DATA.terms.length");
check("!lookupResults().includes('data-alpha=')&&lookupResults().includes('data-jump=')");
check("(lookupResults().match(/class=\"glossary-section\"/g)||[]).length===5");
for(const sec of ['IPA','IPAM','IPAG','EPIC','ILEAD']){a.run(`s.section='${sec}'`);check("results().every(x=>x.t.section===s.section)");check("(lookupResults().match(/data-jump=/g)||[]).length===results().length")}
a.run("s.section='all';s.q='OC'");check("results()[0].t.key==='OC'");check("lookupResults().match(/aria-labelledby=\"section-([^\"]+)/)[1]==='IPAM'");
check("linkedRanges('nguyên tắc và cụ thể',null).length===0");check("linkedRanges('(TAC), CU.',null).length===2");
a.run("navigate('compare')");
for(const [pos,query,key]of [[0,'TAC','TAC'],[1,'FC','FC']]){
 a.dispatch('input',{target:{dataset:{compareSearch:String(pos)},value:query}});
 check(`compareMatches(${pos})[0].key==='${key}'`);
 const id=a.run(`compareMatches(${pos})[0].id`);
 a.dispatch('change',{target:{dataset:{compareSelect:String(pos)},value:id}});
 check(`termMap.get(compareIds[${pos}]).key==='${key}'`);
 check(`$('compare-body-${pos}').innerHTML.includes(termMap.get(compareIds[${pos}]).title)`);
}
check("termMap.get(compareIds[0]).key==='TAC'&&termMap.get(compareIds[1]).key==='FC'");
a.dispatch('input',{target:{dataset:{compareSearch:'0'},value:'zz991nomatch'}});check('compareMatches(0).length===0');check("compareSelectOptions(0).includes('Không tìm thấy')");
a.run("s.view='lookup';s.section='IPAM';s.q='OC';window.scrollY=1350;jumpTo('term-tac')");check("s.section==='ILEAD'&&s.q===''&&jumpTrail.length===1");a.run('jumpBack()');check("s.section==='IPAM'&&s.q==='OC'&&window.scrollY===1350");

check("!home().includes('side-close')");
check("home().includes('Hướng dẫn sử dụng')&&home().includes('So sánh hai thuật ngữ')");
check("!lookup().includes('guide-title')&&!lookup().includes('Ba cách tra cứu')");
check("!lookupResults().includes('class=\"inline-full\"')");
for(const q of ['mi','MI']){a.run(`s.q=${JSON.stringify(q)};s.section='all'`);check("['GMI','AMI','VMI','PMI','BMI'].every(key=>results().some(r=>r.t.key===key))")}
a.run("s.q='vc'");check("results().some(r=>r.t.key==='FVC')");
a.run("s.q='c'");check("results().some(r=>r.t.key==='FC')&&results().some(r=>r.t.key==='OC')");
a.run("s.q='tắc nghẽn';s.section='all'");check("results().some(r=>r.t.key==='TAC')");
for(const pos of [0,1]){a.run(`compareQueries[${pos}]='tắc nghẽn'`);check(`compareMatches(${pos}).some(t=>t.key==='TAC')`);a.run(`compareQueries[${pos}]='uon'`);check(`compareMatches(${pos}).some(t=>t.key==='CU')`)}
a.run("compareQueries[0]='';compareQueries[1]='';s.q='';s.section='all'");


// Typing alone must filter the detailed content; no submit or suggestion selection.
a.run("s.view='lookup';s.section='all';s.q='';render()");
a.dispatch('input',{target:{id:'search-input',dataset:{},value:'HWG'}});
check("s.q==='HWG'");check("results().length===2");
check("$('lookup-results').innerHTML.includes('entry-term-hwg')&&$('lookup-results').innerHTML.includes('entry-term-ipam')");
check("!$('lookup-results').innerHTML.includes('entry-term-ipa\"')");
a.dispatch('input',{target:{id:'search-input',dataset:{},value:'tắc nghẽn'}});
check("s.q==='tắc nghẽn'&&results().some(r=>r.t.key==='TAC')");
check("($('lookup-results').innerHTML.match(/class=\"inline-term\"/g)||[]).length===results().length".replace('\\$','$'));
a.dispatch('input',{target:{id:'search-input',dataset:{},value:'zz991nomatch'}});check("$('lookup-results').innerHTML.includes('Chưa tìm thấy kết quả')");
a.dispatch('input',{target:{id:'search-input',dataset:{},value:''}});check("s.q===''&&results().length===62");
check("(compare().match(/select size=\"6\"/g)||[]).length===2");
check("!compareSelectOptions(0).includes(' · ')");
a.run("s.q='';s.section='all';compareQueries[0]='';compareQueries[1]=''");

const out={home:a.run('home()'),lookup:a.run("s.section='all';s.q='';lookup()"),compare:a.run('compare()')};if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(out));
console.log('PASS',n,'targeted checks: continuous glossary, section-specific term directory, exact links, native comparison change events, search, jump/return state.');
