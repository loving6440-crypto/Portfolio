/* ---------- 예시 데이터 (나중에 실제 작업물로 교체) ---------- */
const IMG={
  profile:"images/profile.webp",
  d1:"images/personal-01.webp",d2:"images/personal-02.webp",d3:"images/personal-03.webp",d4:"images/personal-04.webp",d5:"images/personal-05.webp",d6:"images/personal-06.webp"
};
const PS=["Adobe Photoshop"];
Object.assign(IMG,{fashion:"images/personal-07.webp",b1:"images/dental-01.webp",b2:"images/dental-02.webp",b3:"images/dental-03.webp",b4:"images/dental-04.webp",b5:"images/dental-05.webp",b6:"images/dental-06.webp",b7:"images/dental-07.webp"});
Object.assign(IMG,{m1:"images/maedup-01.webp",m2:"images/maedup-02.webp",m3:"images/maedup-03.webp",m4:"images/maedup-04.webp",v1:"images/video-01-poster.webp",v2:"images/video-02-poster.webp",v3:"images/video-03-poster.webp"});
const AI_=["Adobe Illustrator"];
Object.assign(IMG,{c1:"images/butter-01.webp",c2:"images/butter-02.webp",c3:"images/butter-03.webp"});
const designs=[
  {t:"연세 이루다 치과 브랜딩",sec:"브랜딩",tags:["브랜딩","치과","로고"],tools:AI_,img:IMG.b1,imgs:[IMG.b1,IMG.b2,IMG.b3,IMG.b4,IMG.b5,IMG.b6,IMG.b7],pos:"center"},
  {t:"MAEDUP 브랜딩",sec:"브랜딩",tags:["브랜딩","로고","전통"],tools:AI_,img:IMG.m1,imgs:[IMG.m1,IMG.m2,IMG.m3,IMG.m4],pos:"center"},
  {t:"버터 캐릭터 디자인",sec:"브랜딩",tags:["브랜딩","캐릭터디자인"],img:IMG.c1,imgs:[IMG.c1,IMG.c2,IMG.c3],pos:"center"},
  {t:"핸드폰 케이스",sec:"개인작",tags:["편집","인쇄","핸드폰 케이스"],tools:PS,img:IMG.d1,pos:"center"},
  {t:"엽서",sec:"개인작",tags:["편집","인쇄","엽서"],tools:PS,img:IMG.d2,pos:"center 45%"},
  {t:"포스터",sec:"개인작",tags:["편집","인쇄","포스터"],tools:PS,img:IMG.d3,pos:"center 40%"},
  {t:"표지",sec:"개인작",tags:["편집","인쇄","표지"],tools:PS,img:IMG.d4,pos:"70% center"},
  {t:"유튜브 커버",sec:"개인작",tags:["편집","유튜브","커버"],tools:PS,img:IMG.d5,pos:"center"},
  {t:"표지",sec:"개인작",tags:["편집","인쇄","표지"],tools:PS,img:IMG.d6,pos:"70% center"},
  {t:"포스터",sec:"개인작",tags:["편집","포스터"],tools:PS,img:IMG.fashion,pos:"center 30%"}
];
const designSecs=["브랜딩","개인작"];
const PR=["Adobe Premiere"], PRAE=["Adobe Premiere","Adobe After Effect"];
const motions=[
  {t:"동백섬 홍보 영상",tags:["촬영","홍보","동백섬"],tools:PR,img:IMG.v1,src:"videos/v1.mp4"},
  {t:"화장품 AI 광고",tags:["AI","광고","화장품"],tools:PRAE,img:IMG.v2,src:"videos/v2.mp4"},
  {t:"네일팁 AI 광고",tags:["AI","광고","네일팁"],tools:PRAE,img:IMG.v3,src:"videos/v3.mp4"}
];
const skills=[["Ai",65,"Adobe Illustrator"],["AI",90,"Claude / ChatGPT 외 AI 활용"],["Ps",85,"Adobe Photoshop"],["Figma",70,"Figma"],["Pr",60,"Adobe Premiere"],["Ae",50,"Adobe After Effects"]];
const mbti=[["I",45,"E"],["S",30,"N"],["F",50,"T"],["J",45,"P"]];

/* ---------- 썸네일: 몽글한 블롭 그라데이션 ---------- */
function thumb(w,i,video,full){
  if(w.img)return full
    ?`<div class="shot"><img src="${w.img}" alt="${w.t}"></div>`
    :`<div class="thumb real"><img src="${w.img}" alt="" loading="lazy" style="object-position:${w.pos||"center"}">${w.src?`<span class="play"><svg width="26" height="26"><use href="#playi"/></svg></span>`:""}</div>`;
  const [a,b]=w.g, x=20+(i*37)%60, y=25+(i*23)%50;
  return `<div class="thumb" style="background:
      radial-gradient(circle at ${x}% ${y}%, ${b} 0 18%, transparent 46%),
      radial-gradient(circle at ${100-x}% ${100-y}%, #ffffff 0 8%, transparent 34%),
      linear-gradient(135deg, ${a}, ${b})">
    <span class="ex">EXAMPLE</span>
    ${video?`<span class="play"><svg width="26" height="26"><use href="#playi"/></svg></span><span class="dur">${w.dur}</span>`:""}
  </div>`;
}
const flower=(cls,st="")=>`<svg class="flower ${cls}" style="${st}" aria-hidden="true"><use href="#flower"/></svg>`;

/* ---------- 페이지 ---------- */
const pages={
home:()=>`
  <section class="hero">
    <div>
      <p class="label">Visual Designer</p>
      <h1 class="eng"><span>design</span><span>created by</span><span>dreams.</span></h1>
      <p class="tag">부드러운 꿈을 전하는 디자이너, 정세원입니다.</p>
      <div class="btns">
        <a class="btn primary" href="#design">시각/편집 디자인</a>
        <a class="btn ghost" href="#motion">영상 디자인</a>
      </div>
    </div>
    <div class="orb-wrap" aria-hidden="true">
      <svg class="waves" viewBox="0 0 400 120" fill="none" stroke="#fff" stroke-width="1.4">
        ${Array.from({length:9},(_,k)=>`<path d="M0 ${30+k*8} C 80 ${0+k*8}, 160 ${70+k*8}, 240 ${35+k*8} S 360 ${10+k*8}, 400 ${40+k*8}"/>`).join("")}
      </svg>
      <div class="orb"></div>
      <div class="orb-txt"><div class="orb-in"><img class="mascot" src="images/character.webp" alt=""><b>정세원</b><small>JEONG SE-WON</small></div></div>
      ${flower("f1 spin")}${flower("f2 spin","animation-duration:20s")}${flower("f3")}
    </div>
  </section>
  <section class="quick">
    <a class="qcard coral" href="#profile"><span class="eng">profile</span><span class="arrow">VIEW →</span></a>
    <a class="qcard" href="#design"><span class="eng">design</span><span class="arrow">VIEW →</span></a>
    <a class="qcard mint" href="#motion"><span class="eng">video</span><span class="arrow">VIEW →</span></a>
  </section>`,

profile:()=>`
  <div class="ph">${flower("c")}<h1 class="eng">profile</h1>${flower("c","width:22px")}</div>
  <figure class="pimg"><div class="pscroll"><img src="${IMG.profile}" alt="정세원 프로필: 1999.11.16 출생, 혜화여자고등학교 졸업, 센텀직업전문학교 수료, MBTI ENFP, 툴 숙련도와 취미(독서, 요리, 창작활동, 교육봉사)"></div>
    <figcaption>옆으로 밀어서 보기</figcaption></figure>
  <div class="contact">
    <span><b>E-MAIL</b><em id="mail">loving6440@gmail.com</em></span>
    <span><b>PHONE</b><em>010-5519-1896</em></span>
    <button class="btn primary" id="copyBtn" type="button">이메일 복사</button>
  </div>`,

design:()=>`
  <div class="ph">${flower("c")}<h1 class="eng">graphic design</h1></div>
  <nav class="jump" aria-label="디자인 카테고리">${designSecs.map(n=>`<button type="button" class="cat" data-jump="${n}">${n}<span class="n">${designs.filter(w=>w.sec===n).length}</span></button>`).join("")}</nav>
  ${designSecs.map(n=>{const items=designs.map((w,i)=>({w,i})).filter(o=>o.w.sec===n);return`
  <section class="dsec" id="sec-${n}">
    <div class="dhead">${flower("","width:26px")}<h2 class="kr">${n}</h2><span class="cnt">${items.length}</span></div>
    <div class="grid">${items.length?items.map(({w,i})=>card(w,i,false)).join(""):`<p class="empty">브랜딩 작업을 준비하고 있어요.</p>`}</div>
  </section>`}).join("")}`,
motion:()=>`
  <div class="ph">${flower("c")}<h1 class="eng">motion &amp; video</h1></div>
  <div class="grid">${motions.map((w,i)=>card(w,i,true)).join("")}</div>`
};

const filters={design:"전체",motion:"전체"};
function worksPage(key,title,sub,cats,list,video){
  const all=["전체",...cats];
  return `
  <div class="ph">${flower("c")}<h1 class="eng">${title}</h1></div>
  <div class="cats" role="group" aria-label="카테고리">
    ${all.map(c=>`<button type="button" class="cat" data-cat="${c}" aria-pressed="${filters[key]===c}">${c}<span class="n">${c==="전체"?list.length:list.filter(w=>w.c===c).length}</span></button>`).join("")}
  </div>
  <div class="grid" id="grid"></div>`;
}
const tagHtml=w=>`<div class="tags">${w.tags.map(t=>`<span class="tag">#${t}</span>`).join("")}</div>`;
function card(w,i,video){return`
    <button class="work page" type="button" data-i="${i}" aria-label="${w.tags?w.tags.map(t=>"#"+t).join(" "):w.t}">
      ${thumb(w,i,video)}
      ${w.tags?`<div class="meta">${tagHtml(w)}${w.imgs?`<span class="pages">${w.imgs.length} PAGES</span>`:""}</div>`
        :`<div class="meta"><span class="c">${w.c}</span><h3>${w.t}</h3><p>${w.d}</p></div>`}
    </button>`}
function renderGrid(key){
  const list=key==="design"?designs:motions, video=key==="motion", f=filters[key];
  const items=list.map((w,i)=>({w,i})).filter(o=>f==="전체"||o.w.c===f);
  document.getElementById("grid").innerHTML=items.length?items.map(({w,i})=>`
    <button class="work page" type="button" data-i="${i}">
      ${thumb(w,i,video)}
      <div class="meta"><span class="c">${w.c}</span><h3>${w.t}</h3><p>${w.d}</p></div>
    </button>`).join(""):`<p class="empty">이 카테고리에는 아직 작업이 없어요.</p>`;
}

/* ---------- 라우팅 ---------- */
const app=document.getElementById("app");
let current="home";
function route(){
  const r=(location.hash||"#home").slice(1);
  current=pages[r]?r:"home";
  app.innerHTML=`<div class="page">${pages[current]()}</div>`;
  document.querySelectorAll("nav a").forEach(a=>{a.dataset.route===current?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")});
  
  window.scrollTo({top:0});
}
window.addEventListener("hashchange",route);

app.addEventListener("click",e=>{
  const jb=e.target.closest("[data-jump]");
  if(jb){document.getElementById("sec-"+jb.dataset.jump).scrollIntoView({behavior:"smooth",block:"start"});return;}
  const cat=e.target.closest(".cat");
  if(cat){filters[current]=cat.dataset.cat;
    document.querySelectorAll(".cat").forEach(b=>b.setAttribute("aria-pressed",b===cat));
    renderGrid(current);return;}
  const w=e.target.closest(".work");
  if(w){openModal(current,+w.dataset.i);return;}
  if(e.target.id==="copyBtn"){
    const txt=document.getElementById("mail").textContent, btn=e.target;
    const done=()=>{btn.textContent="복사했어요!";setTimeout(()=>btn.textContent="이메일 복사",1600)};
    try{navigator.clipboard.writeText(txt).then(done,()=>{selectMail();btn.textContent="선택됨, Ctrl+C로 복사"})}catch(_){selectMail()}
  }
});
function selectMail(){const r=document.createRange();r.selectNodeContents(document.getElementById("mail"));const s=getSelection();s.removeAllRanges();s.addRange(r)}

/* ---------- 모달 ---------- */
const modal=document.getElementById("modal"), sheet=document.getElementById("sheet");
let lastFocus=null;
function openModal(key,i){
  const video=key==="motion", w=(video?motions:designs)[i];
  lastFocus=document.activeElement;
  sheet.classList.toggle("long",!!w.imgs);
  const close=`<button class="close" id="closeBtn" type="button" aria-label="닫기">×</button>`;
  if(w.tags){
    sheet.innerHTML=close+(w.src
      ?`<div class="shot vid"><video controls playsinline preload="metadata" poster="${w.img}" src="${w.src}"></video></div>`
      :w.imgs
      ?`<div class="stack">${w.imgs.map((src,k)=>`<img src="${src}" alt="${w.t} ${k+1}">`).join("")}</div>`
      :thumb(w,i,false,true))+`
      <div class="body"><h3 id="mTitle" class="sr">${w.t}</h3>${w.sec?`<span class="label">${w.sec}</span>`:""}${tagHtml(w)}
        ${w.tools?`<div class="tools">${w.tools.map(t=>`<span class="chip">${t}</span>`).join("")}</div>`:""}</div>`;
  }else{
    sheet.innerHTML=close+`${thumb(w,i,video,true)}
    <div class="body">
      <span class="label">${w.c}${video?` · ${w.dur}`:""}</span>
      <h3 id="mTitle">${w.t}</h3>
      <p>${w.d}</p>
      <p>여기에 작업 의도, 과정, 결과 이미지나 영상 링크가 들어갈 자리예요.</p>
      <div class="tools">${w.tools.map(t=>`<span class="chip">${t}</span>`).join("")}</div>
    </div>`;
  }
  modal.hidden=false;sheet.scrollTop=0;document.getElementById("closeBtn").focus();
}
function closeModal(){modal.hidden=true;sheet.innerHTML="";lastFocus&&lastFocus.focus()}
modal.addEventListener("click",e=>{if(e.target===modal||e.target.id==="closeBtn")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeModal()});

/* ---------- 인트로 ---------- */
const intro=document.getElementById("intro");
if(!location.hash||location.hash==="#intro"){
  intro.hidden=false;document.body.style.overflow="hidden";intro.focus();
  intro.addEventListener("click",()=>{
    intro.classList.add("leaving");
    if(location.hash!=="#home")location.hash="home";
    const end=()=>{intro.hidden=true;document.body.style.overflow=""};
    intro.addEventListener("animationend",end,{once:true});
    setTimeout(end,900);
  },{once:true});
}
route();
