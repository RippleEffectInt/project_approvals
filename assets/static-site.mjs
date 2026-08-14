import { links, localeOrder, translations } from "./content.mjs";

const root = document.querySelector("#site");
const esc = (value) => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const list = (items, render) => items.map(render).join("");

function landing() {
  const c = translations.en;
  document.documentElement.lang = "en";
  document.title = "Africa Projects App | Choose your language";
  root.innerHTML = `<main class="languageLanding"><header class="landingHeader"><img src="./assets/ripple-effect.png" alt="Ripple Effect"></header><section class="landingHero"><p class="eyebrow">Africa Projects App</p><h1>${esc(c.landingTitle)}</h1><p class="lede">${esc(c.landingIntro)}</p><div class="languageGrid">${list(localeOrder, code => { const item=translations[code]; return `<button data-locale="${code}" lang="${item.lang}"><span>${esc(item.native)}</span><small>${esc(item.openGuide)} →</small></button>`; })}</div></section><footer><img src="./assets/ripple-effect.png" alt="Ripple Effect"><p>Project approval training</p></footer></main>`;
  root.querySelectorAll("[data-locale]").forEach(button => button.addEventListener("click", () => guide(button.dataset.locale)));
}

function steps(items) { return `<ol class="instructions">${list(items,(item,i)=>`<li class="instruction"><span class="stepNumber">${i+1}</span><div><h4>${esc(item[0])}</h4><p>${esc(item[1])}</p></div></li>`)}</ol>`; }

function guide(locale) {
  const c = translations[locale];
  document.documentElement.lang = c.lang;
  document.title = `${c.native} | Africa Projects App`;
  root.innerHTML = `<main lang="${c.lang}" id="top">
  <header class="topbar"><button class="brand brandButton" data-back aria-label="${esc(c.choose)}"><img src="./assets/ripple-effect.png" alt="Ripple Effect"><span>${esc(c.brand)}</span></button><nav aria-label="Page sections"><a href="#journey">${esc(c.nav[0])}</a><a href="#cast">${esc(c.nav[1])}</a><a href="#outline">${esc(c.nav[2])}</a><a href="#approval">${esc(c.nav[3])}</a></nav><button class="languageButton" data-back>${esc(c.choose)}</button></header>
  ${c.status ? `<div class="reviewBanner">${esc(c.status)}</div>` : ""}
  <section class="hero"><div class="heroCopy"><p class="eyebrow">${esc(c.eyebrow)}</p><h1>${esc(c.hero)}</h1><p class="lede">${esc(c.lede)}</p><div class="heroActions"><a class="primaryButton" href="#journey">${esc(c.start)}</a><a class="textLink" href="#checklist">${esc(c.jump)} ↓</a></div></div><aside class="ruleCard"><span class="ruleLabel">${esc(c.ruleLabel)}</span><strong>${esc(c.rule)}</strong><p>${esc(c.ruleDetail)}</p></aside></section>
  <section class="alert"><span class="alertIcon">30</span><div><strong>${esc(c.deadline)}</strong><p>${esc(c.deadlineText)}</p></div></section>
  <section class="section" id="journey"><div class="sectionIntro"><p class="eyebrow">${esc(c.processLabel)}</p><h2>${esc(c.processTitle)}</h2><p>${esc(c.processText)}</p></div><ol class="journeyGrid">${list(c.stages,(s,i)=>`<li><span>0${i+1}</span><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></li>`)}</ol></section>
  <section class="section rolesSection"><div class="sectionIntro"><p class="eyebrow">${esc(c.rolesLabel)}</p><h2>${esc(c.rolesTitle)}</h2></div><div class="roleList">${list(c.roles,r=>`<div class="role"><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></div>`)}</div><p class="quietNote"><strong>${esc(c.editorLead)}</strong> ${esc(c.editorText)}</p></section>
  <section class="section actionSection" id="cast"><div class="actionCopy"><p class="eyebrow">${esc(c.cast.label)}</p><h2>${esc(c.cast.title)}</h2><p>${esc(c.cast.intro)}</p>${steps(c.cast.steps)}<div class="resourceLinks"><a href="${links.assessment}">${esc(c.cast.resources)} ↗</a><a href="${links.processMap}">${esc(c.cast.processMap)} ↗</a></div></div></section>
  <section class="section naming"><div><p class="eyebrow">${esc(c.naming.label)}</p><h2>${esc(c.naming.title)}</h2><p>${esc(c.naming.intro)}</p><a class="textLink" href="${links.naming}">${esc(c.naming.link)} ↗</a></div><div class="nameExamples">${list(c.naming.examples,x=>`<div><span>${esc(x[0])}</span><strong>${esc(x[1])}</strong></div>`)}</div></section>
  <section class="section actionSection" id="outline"><div class="actionCopy"><p class="eyebrow">${esc(c.outline.label)}</p><h2>${esc(c.outline.title)}</h2><p>${esc(c.outline.intro)}</p>${steps(c.outline.steps)}</div></section>
  <section class="section" id="approval"><div class="sectionIntro"><p class="eyebrow">${esc(c.approval.label)}</p><h2>${esc(c.approval.title)}</h2><p>${esc(c.approval.intro)}</p></div><div class="approvalCards">${list(c.approval.cards,(card,i)=>`<article><span class="cardNumber">0${i+1}</span><h3>${esc(card[0])}</h3><ol>${list(card[1],x=>`<li>${esc(x)}</li>`)}</ol></article>`)}</div></section>
  <section class="section statusSection"><div class="sectionIntro"><p class="eyebrow">${esc(c.statusLabel)}</p><h2>${esc(c.statusTitle)}</h2></div><div class="statusTable" role="table"><div class="statusHead" role="row">${list(c.statusHeads,x=>`<span>${esc(x)}</span>`)}</div>${list(c.events,(event,i)=>`<div class="statusRow" role="row"><span>${esc(event)}</span><span>${esc(c.statuses[i][0])}</span><span>${esc(c.statuses[i][1])}</span></div>`)}</div></section>
  <section class="section everyday"><div class="sectionIntro"><p class="eyebrow">${esc(c.situationsLabel)}</p><h2>${esc(c.situationsTitle)}</h2></div><div class="accordion">${list(c.situations,(x,i)=>`<details ${i===0?"open":""}><summary>${esc(x[0])}</summary><p>${esc(x[1])}</p></details>`)}</div></section>
  <section class="section checklist" id="checklist"><div><p class="eyebrow">${esc(c.checkLabel)}</p><h2>${esc(c.checkTitle)}</h2><p>${esc(c.checkIntro)}</p></div><ul>${list(c.checks,x=>`<li>${esc(x)}</li>`)}</ul></section>
  <footer><img src="./assets/ripple-effect.png" alt="Ripple Effect"><p>${esc(c.footer)}</p><button class="footerLanguage" data-back>${esc(c.choose)}</button><a href="#top">${esc(c.back)} ↑</a></footer></main>`;
  root.querySelectorAll("[data-back]").forEach(button => button.addEventListener("click", landing));
  window.scrollTo({top:0,behavior:"instant"});
}

landing();
