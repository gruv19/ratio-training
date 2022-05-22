const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};C();const L=()=>`<header class="header">
  <div class="header__logo">
  </div>
  <div class="header__burger">
  </div>
  <div class="header__nav">
  </div>
</header>`;var f="data:image/png;base64,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";const u=(e="nuntium.",t="",n="")=>{const r=document.querySelector("head"),a=r.querySelector("title");t&&r.insertAdjacentHTML("afterbegin",`<meta name="description" content="${t}" />`),n&&r.insertAdjacentHTML("afterbegin",`<meta name="keywords" content="${n}" />`),a.textContent=e},b=e=>new Date(e).toLocaleDateString("en-EN",{month:"long",day:"numeric",year:"numeric"}),A=e=>Math.ceil(e/60),_=(e,t,n,r,a)=>{for(let o=e;o>=t;o--){const l=r(a[o]);n.append(l)}},i="/test/",y=()=>{let e=null;if(window.location.pathname===i||window.location.pathname===`${i}index.html`)e=new Image,e.src=f,e.classList.add("logo");else{const t=new Image;t.src=f,t.classList.add("logo__image"),e=document.createElement("a"),e.classList.add("logo"),e.setAttribute("href",i),e.append(t)}return e};const $=()=>`<button class="burger-button">
  <svg class="burger-button__icon" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H36V4H0V0ZM0 10H36V14H0V10ZM0 20H36V24H0V20Z" fill="black" fill-opacity="0.54"/>
  </svg>
</button>`,I=()=>{const e=document.createElement("div");return e.innerHTML=$(),e.firstElementChild};const x=(e="/")=>`<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item"><a href="${i}" class="nav__link${e===i?" nav__link--active":""}">Home</a></li>
    <li class="nav__item"><a href="${i}blog/" class="nav__link${e===`${i}blog/`||e===`${i}blog`?" nav__link--active":""}">Blog</a></li>
    <li class="nav__item"><a href="${i}about/" class="nav__link${e===`${i}about/`||e===`${i}about`?" nav__link--active":""}">About</a></li>
  </ul>
</nav>`,H=e=>{const t=document.createElement("div");return t.innerHTML=x(e),t.firstElementChild},m=()=>{const e=document.createElement("div");e.innerHTML=L();const t=e.firstElementChild,n=y(),r=I(),a=H(window.location.pathname),o=()=>{a.parentElement.classList.contains("header__nav--active")?a.parentElement.classList.remove("header__nav--active"):a.parentElement.classList.add("header__nav--active")};return t.querySelector(".header__logo").append(n),t.querySelector(".header__burger").append(r),t.querySelector(".header__nav").append(a),r.addEventListener("click",o),t};const M=e=>`<section class="container${e!=="default"?` container--${e}`:""}"></section>`,h=e=>{const t=document.createElement("div");return t.innerHTML=M(e),t.firstElementChild};const T=e=>`<h1 class="page-name">${e}</h1>`,S=(e="Page Name")=>{const t=document.createElement("div");return t.innerHTML=T(e),t.firstElementChild};const B=e=>`<div class="about-content">${e}</div>`,N=e=>{const t=document.createElement("div");return t.innerHTML=B(e),t.firstElementChild},q=async()=>{const e=await(await fetch("https://course.7t33n.ru/rest/v1/about")).json();u(e.seo.title,e.seo.description,e.seo.keywords);const t=document.querySelector("#app");t.innerHTML="";const n=m();t.append(n);const r=h("about");t.append(r);const a=S(e.title);r.append(a);const o=N(e.content);r.append(o)};const k=e=>{const{author:t,createdAt:n,description:r,image:a,readTime:o,tag:l,title:s}=e;return`<section class="full-article">
  <img src="${a}" class="full-article__image">
  <h1 class="full-article__title">${s}</h1>
  <div class="full-article__meta">
    <span class="full-article__author-name">${t.name}</span>
    <span class="full-article__divider"></span>
    <span class="full-article__date-time">${b(n)} (${A(o)} mins read)</span>
  </div>
  <div class="full-article__tag">#${l.name.toLowerCase()}</div>
  <div class="full-article__content">${r}</div>
  <div class="full-article__author"></div>
</section>`};const O=e=>{const{about:t,name:n,nick:r}=e;return`<div class="author">
    <div class="author__title">ABOUT AUTHOR</div>
    <div class="author__card">
      <img src="http://zornet.ru/_fr/81/9661273.jpg" alt="" class="author__photo">
      <div class="author__main-info">
        <div class="author__name">${n}</div>
        <div class="author__link">@${r.toLowerCase()}</div>
      </div>
      <div class="author__about">${t}</div>
    </div>
  </div>`},X=e=>{const t=document.createElement("div");return t.innerHTML=O(e),t.firstElementChild},P=e=>{const{author:t}=e,n=document.createElement("div");n.innerHTML=k(e);const r=n.firstElementChild,a=X(t);return r.querySelector(".full-article__author").append(a),r};const R=(e,t)=>{const{id:n=-1,title:r=""}=e,{id:a=-1,title:o=""}=t;return`<div class="pagination${n===-1?" pagination--without-prev":""}${a===-1?" pagination--without-next":""}">
    ${n>-1?`<div class="paginamtion__prev">
        <a class="pagintation__arrow pagintation__arrow--prev" href="${i}blog/article/${n}">
          <svg class="pagination__arrow-icon pagination__arrow-icon--small pagination__arrow-icon--prev" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2001 2.19971L4.80005 16.2997L27.2001 29.7997" stroke="white" stroke-width="5"/>
          </svg>
          <svg class="pagination__arrow-icon pagination__arrow-icon--big pagination__arrow-icon--prev" viewBox="0 0 74 88" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.5999 2.6001L5.3999 44.9001L72.5999 85.4001" stroke="white" stroke-width="5"/>
          </svg>
        </a>
        <div class="pagination__label">
          Go back: <a href="${i}blog/article/${n}" class="pagination__article-title">${r}</a>
        </div>
      </div>`:""}
    ${a>-1?`<div class="pagination__next">
        <div class="pagination__label">
          Next up: <a href="${i}blog/article/${a>-1}" class="pagination__article-title">${o}</a>
        </div>
        <a class="pagintation__arrow pagintation__arrow--next" href="${i}blog/article/${a}">
          <svg class="pagination__arrow-icon pagination__arrow-icon--small pagination__arrow-icon--next" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2001 2.19971L4.80005 16.2997L27.2001 29.7997" stroke="white" stroke-width="5"/>
          </svg>
          <svg class="pagination__arrow-icon pagination__arrow-icon--big pagination__arrow-icon--next" viewBox="0 0 74 88" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.5999 2.6001L5.3999 44.9001L72.5999 85.4001" stroke="white" stroke-width="5"/>
          </svg>
        </a>
      </div>`:""}
  </div>`},j=(e,t)=>{const n=document.createElement("div");return n.innerHTML=R(e,t),n.firstElementChild},Q=async()=>{const e=window.location.pathname.split("/"),t=e[e.length-1],n=await(await fetch(`https://course.7t33n.ru/rest/v1/blog/article/${t}`)).json(),r=n.nextId!==null?await(await fetch(`https://course.7t33n.ru/rest/v1/blog/article/${n.nextId}`)).json():{id:-1,title:""},a=n.prevId!==null?await(await fetch(`https://course.7t33n.ru/rest/v1/blog/article/${n.prevId}`)).json():{id:-1,title:""},o=document.querySelector("#app");o.innerHTML="",u(`nuntium. - ${n.seo.title}`,n.seo.description,n.seo.keywords);const l=m();o.append(l);const s=h("article");o.append(s);const c=P(n);s.append(c),o.append(j(a,r))};const D=(e,t)=>{const{id:n,tag:r,title:a,author:o,createdAt:l,image:s,readTime:c,description:d}=e;return`<article class="article-card ${t!="default"?`article-card--${t}`:""}">
  ${t==="default"?`<a class="article-card__link" href="${i}blog/article/${n}">`:""}
    <img src="${s}" alt="" class="article-card__img">
  ${t==="default"?"</a>":""}
  <div class="article-card__content">
    <p class="article-card__tag">${r}</p>
    <h1 class="article-card__title"><a class="article-card__link" href="${i}blog/article/${n}">${a}</a></h1>
    <div class="article-card__meta">
      <span class="article-card__author">${o}</span>
      <span class="article-card__divider"></span>
      <span class="article-card__date-time">${b(l)} (${A(c)} mins read)</span>
    </div>
    <p class="article-card__text">${d}</p>
  </div>
  </article>`},p=(e,t="default")=>{const n=document.createElement("div");return n.innerHTML=D(e,t),n.firstElementChild};const U=e=>`<div class="title">
  <h1 class="title__header">${e}</h1>
  <div class="title__divider"></div>
</div>`,g=e=>{const t=document.createElement("div");return t.innerHTML=U(e),t.firstElementChild},z=async()=>{u("nuntium. - blog");const e=4,t=await(await fetch("https://course.7t33n.ru/rest/v1/blog/featured/")).json(),n=await(await fetch("https://course.7t33n.ru/rest/v1/blog/articles/")).json(),r=document.querySelector("#app"),a=m();r.append(a);const o=p(t,"featured");r.append(o);const l=h("blog");r.append(l);const s=g("Editor\u2019s Picks");l.append(s);let c=n.length-1,d=c-e+1<0?0:c-e+1;_(c,d,l,p,n),document.addEventListener("scroll",()=>{document.documentElement.getBoundingClientRect().bottom<document.documentElement.clientHeight+100&&(c=d-1,d=c-e+1<0?0:c-e+1,_(c,d,l,p,n))})},Y=async()=>{u("nuntium. - home");const e=await(await fetch("https://course.7t33n.ru/rest/v1/blog/featured/")).json(),t=await(await fetch("https://course.7t33n.ru/rest/v1/blog/articles/")).json(),n=3,r=document.querySelector("#app");r.innerHTML="";const a=m();r.append(a);const o=p(e,"featured");r.append(o);const l=h();r.append(l);const s=g("Editor\u2019s Picks");l.append(s);for(let d=t.length-1;d>=t.length-n;d--){const v=p(t[d]);l.append(v)}const c=p(t[t.length-n-1],"banner");r.append(c)};const F=e=>`<div class="error">
  <h1 class="error__title"></h1>
  <p class="error__text">${e}</p>
  <a class="error__link" href="${i}">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443</a>
</div>`,G=e=>{const t=document.createElement("div");t.innerHTML=F(e);const n=t.firstElementChild;return n.querySelector(".error__title").append(g("\u041E\u0448\u0438\u0431\u043A\u0430")),n},w=e=>{u("nuntium. - error");const t=document.querySelector("#app");t.innerHTML="";const n=G(e);t.append(n)},E=[{path:`${i}blog/article/[a-zA-Z0-9]+`,component:Q},{path:`${i}about/?`,component:q},{path:`${i}blog/?`,component:z},{path:`${i}?`,component:Y}],J=()=>{let e=window.location.pathname;return e[e.length-1]==="/"&&(e=e.substring(0,e.length-1)),e!==`${i}index.html`?e=e.replace(/[^a-zA-Z0-9/]/g,""):(e=i,history.pushState(null,null,e)),e.length?e:i},K=e=>{const t=E.findIndex(n=>e.match(new RegExp(`^${n.path}$`,"gi")));return t>-1?E[t].component:null},V=()=>{console.log({BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0});const e=J(),t=K(e);console.log(e),console.log(t),t?t().catch(n=>w("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...")):w("\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")};window.addEventListener("load",V);
