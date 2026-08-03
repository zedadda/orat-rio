/* ===========================================================
   Devocionário — app.js
   Roteamento por hash: #/  #/cat/:id  #/oracao/:cat/:id  #/favoritos  #/buscar
   =========================================================== */

const $app = document.getElementById("app");
const $topbarTitle = document.getElementById("topbar-title");
const $btnBack = document.getElementById("btn-back");
const $btnSearch = document.getElementById("btn-search");
const $userBadge = document.getElementById("user-badge");
const $tabbar = document.getElementById("tabbar");

/* ---------- Ícones SVG inline (monolinha, sem emoji) ---------- */
const ICONS = {
  home:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="20" y1="20" x2="15.3" y2="15.3"/></svg>`,
  back:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 8 12l7 7"/></svg>`,
  gear:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.1"/><path d="M19.4 13.4a7.4 7.4 0 0 0 0-2.8l1.9-1.4-1.9-3.3-2.2.7a7.4 7.4 0 0 0-2.5-1.4L14.3 3H9.7l-.4 2.2a7.4 7.4 0 0 0-2.5 1.4l-2.2-.7-1.9 3.3L4.6 10.6a7.4 7.4 0 0 0 0 2.8l-1.9 1.4 1.9 3.3 2.2-.7c.72.63 1.57 1.12 2.5 1.4L9.7 21h4.6l.4-2.2c.93-.28 1.78-.77 2.5-1.4l2.2.7 1.9-3.3-1.9-1.4Z"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3S4.7 15.8 2.4 11.2C1 8.3 2.6 4.9 6 4.9c2 0 3.6 1.2 6 3.5 2.4-2.3 4-3.5 6-3.5 3.4 0 5 3.4 3.6 6.3-2.3 4.6-9.6 9.1-9.6 9.1Z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1.2 1 2 2.6 2 4.3A5.3 5.3 0 0 1 12 20a5.3 5.3 0 0 1-5-7.7C8 10 12 8 12 2Z"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="3" x2="12" y2="21"/><line x1="7" y1="9" x2="17" y2="9"/></svg>`,
  sun:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="4.1"/><line x1="12" y1="1.6" x2="12" y2="4.4"/><line x1="12" y1="19.6" x2="12" y2="22.4"/><line x1="1.6" y1="12" x2="4.4" y2="12"/><line x1="19.6" y1="12" x2="22.4" y2="12"/><line x1="4.6" y1="4.6" x2="6.6" y2="6.6"/><line x1="17.4" y1="17.4" x2="19.4" y2="19.4"/><line x1="4.6" y1="19.4" x2="6.6" y2="17.4"/><line x1="17.4" y1="6.6" x2="19.4" y2="4.6"/></svg>`,
  host:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="6.4"/><line x1="12" y1="8.3" x2="12" y2="15.7"/><line x1="8.3" y1="12" x2="15.7" y2="12"/></svg>`,
  leaf:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z"/><path d="M6 18c3-4 6-7 12-12"/></svg>`,
  hammer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.3 6.6 17.8 3l3.1 3.1-3.5 3.5"/><path d="M13.7 8.2 4.4 17.5a1.5 1.5 0 0 0 2.1 2.1L15.8 10"/><line x1="10.8" y1="5.3" x2="13.7" y2="8.2"/></svg>`,
  star:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M12 3l2.6 5.8 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.7l1.4-6.1-4.7-4.2 6.2-.6Z"/></svg>`,
  flower:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.8"/><path d="M12 10.2c0-2.8 1.4-4.7 3.3-6.1-2.3 1.4-3.3 3.3-3.3 6.1Z"/><path d="M12 13.8c0 2.8-1.4 4.7-3.3 6.1 2.3-1.4 3.3-3.3 3.3-6.1Z"/><path d="M10.2 12c-2.8 0-4.7-1.4-6.1-3.3 1.4 2.3 3.3 3.3 6.1 3.3Z"/><path d="M13.8 12c2.8 0 4.7 1.4 6.1 3.3-1.4-2.3-3.3-3.3-6.1-3.3Z"/></svg>`,
  chalice:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l-1 6a4 4 0 0 1-8 0Z"/><line x1="12" y1="13" x2="12" y2="18"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="18" x2="12" y2="21"/></svg>`,
  beads: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="4" r="1.5"/><circle cx="18" cy="8" r="1.5"/><circle cx="18" cy="16" r="1.5"/><circle cx="12" cy="20" r="1.5"/><circle cx="6" cy="16" r="1.5"/><circle cx="6" cy="8" r="1.5"/><path d="M12 5.5 17 8m1 6.5-5 3.5m-6-3.5-1-6.5m1-1.5L12 5.5"/></svg>`,
  chevron:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>`,
  bread: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13c0-5 3.6-8.5 8-8.5s8 3.5 8 8.5c0 3-2 5.5-8 5.5s-8-2.5-8-5.5Z"/><path d="M9 8.5 7.5 13M15 8.5 16.5 13M12 7.5V13"/></svg>`
};
function icon(key, cls){ return `<span class="icon-svg${cls ? " " + cls : ""}">${ICONS[key] || ""}</span>`; }

const CATEGORY_ICON = {
  "oracoes-diarias": "sun",
  "santa-missa": "chalice",
  "confissao": "cross",
  "sagrada-comunhao": "host",
  "devocoes-breves": "leaf",
  "santissimo-sacramento": "cross",
  "sagrado-coracao": "heart",
  "nossa-senhora": "flower",
  "sao-jose": "hammer",
  "anjos-santos": "star",
  "oracoes-diversas": "leaf",
  "apendice": "leaf"
};

/* Glifos tipográficos minimalistas (estilo missal) para os cards da Home/Busca */
const CATEGORY_GLYPH = {
  "oracoes-diarias": "†",
  "santa-missa": "†",
  "confissao": "†",
  "sagrada-comunhao": "†",
  "devocoes-breves": "*",
  "santissimo-sacramento": "†",
  "sagrado-coracao": "†",
  "nossa-senhora": "AM",
  "sao-jose": "*",
  "anjos-santos": "*",
  "oracoes-diversas": "*",
  "apendice": "*",
  "enfermos-agonizantes": "†"
};

let readerSize = Number(localStorage.getItem("devoc:size") || 1.18);
let focusModeCleanup = null;

function getFavorites(){
  try{ return JSON.parse(localStorage.getItem("devoc:favs") || "[]"); }
  catch(e){ return []; }
}
function isFavorite(catId, prayerId){
  return getFavorites().some(f => f.cat === catId && f.id === prayerId);
}
function toggleFavorite(catId, prayerId){
  let favs = getFavorites();
  const key = f => f.cat === catId && f.id === prayerId;
  if(favs.some(key)){ favs = favs.filter(f => !key(f)); }
  else { favs.push({ cat: catId, id: prayerId }); }
  localStorage.setItem("devoc:favs", JSON.stringify(favs));
  return favs.some(key);
}

function highlightSymbols(text){
  if(typeof text !== "string") return text;
  return text.replace(/(✠|℣\.|℟\.)/g, '<span class="lit-symbol">$1</span>');
}

function findCategory(catId){ return CATEGORIES.find(c => c.id === catId); }
function findPrayer(catId, prayerId){
  const cat = findCategory(catId);
  if(!cat) return null;
  return cat.prayers.find(p => p.id === prayerId);
}

function render(){
  if(focusModeCleanup){ focusModeCleanup(); focusModeCleanup = null; }
  document.body.classList.remove("chrome-hidden");

  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);

  if(parts.length === 0){ renderHome(); }
  else if(parts[0] === "cat" && parts[1]){ renderCategory(parts[1]); }
  else if(parts[0] === "oracao" && parts[1] && parts[2]){ renderPrayer(parts[1], parts[2]); }
  else if(parts[0] === "favoritos"){ renderFavorites(); }
  else if(parts[0] === "rosario"){ renderRosario(); }
  else if(parts[0] === "mana"){ renderMana(); }
  else if(parts[0] === "diarias"){ renderDiarias(); }
  else if(parts[0] === "missa"){ renderMissa(); }
  else if(parts[0] === "config"){ renderConfig(); }
  else if(parts[0] === "buscar"){ renderSearch(""); }
  else { renderHome(); }

  updateTabbar();
  window.scrollTo(0, 0);

  const view = $app.querySelector(".view");
  if(view){
    view.classList.remove("active");
    requestAnimationFrame(()=> requestAnimationFrame(()=> view.classList.add("active")));
  }
}

function setTopbar(title, showBack){
  $topbarTitle.textContent = title;
  $btnBack.classList.toggle("hidden", !showBack);
}

function updateTabbar(){
  const hash = location.hash || "#/";
  $tabbar.querySelectorAll(".tab-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.tab === hash || (btn.dataset.tab === "#/" && hash === "#/"));
  });
}

/* ---------- Home ---------- */
function getUserName(){ return localStorage.getItem("devoc:nome") || "Peregrino"; }
function setUserName(n){ localStorage.setItem("devoc:nome", n); updateUserBadge(); }

function getUserInitials(){
  const partes = getUserName().trim().split(/\s+/).filter(Boolean);
  if(partes.length === 0) return "P";
  if(partes.length === 1) return partes[0][0].toUpperCase();
  return (partes[0][0] + partes[1][0]).toUpperCase();
}
function updateUserBadge(){
  if($userBadge) $userBadge.textContent = getUserInitials();
}
updateUserBadge();

function getTheme(){ return localStorage.getItem("devoc:tema") || "light"; }
function setTheme(t){
  localStorage.setItem("devoc:tema", t);
  document.documentElement.setAttribute("data-theme", t);
}
setTheme(getTheme());

function renderHome(){
  setTopbar(`Olá, ${getUserName()}!`, false);

  const jac = JACULATORIAS[Math.floor(Math.random() * JACULATORIAS.length)];

  const shortcuts = [
    { label: "Exame de Consciência", glyph: "†", href: "#/oracao/confissao/exame-consciencia-confissao" },
    { label: "Favoritos", glyph: "♡", href: "#/favoritos" },
    { label: "Guia do Terço", glyph: "AM", href: "#/rosario" },
    { label: "Ato de Contrição", glyph: "†", href: "#/oracao/oracoes-diarias/ato-contricao-avulso" },
    { label: "Comunhão Espiritual", glyph: "*", href: "#/oracao/santissimo-sacramento/comunhao-espiritual-avulsa" }
  ].map(s => `
    <button class="shortcut-card" data-href="${s.href}">
      <span class="shortcut-glyph">${s.glyph}</span>
      <span class="shortcut-label">${s.label}</span>
    </button>
  `).join("");

  $app.innerHTML = `
    <div class="view active">
      <div class="shortcuts-row">${shortcuts}</div>

      <div class="jaculatoria-card">
        <div class="jaculatoria-eyebrow">Jaculatória do momento</div>
        <p class="jaculatoria-texto">${highlightSymbols(jac.texto)}</p>
        <div class="jaculatoria-fonte">${jac.fonte}</div>
      </div>

      <div id="install-banner" class="install-banner hidden">
        <div class="glyph">⇩</div>
        <div class="txt"><strong>Leve para o bolso</strong>Instale na tela inicial e reze mesmo sem internet.</div>
        <button id="btn-install">Instalar</button>
      </div>

      <div class="hero-banners">
        <a class="hero-banner hero-banner--rosario" data-href="#/rosario">
          <div class="hero-banner-frame"></div>
          <div class="hero-banner-glyph">AM</div>
          <div class="hero-banner-text">
            <div class="hero-banner-eyebrow">Reze hoje</div>
            <h2>Santo Rosário</h2>
            <p>Contemple os mistérios, dezena por dezena.</p>
          </div>
        </a>
        <a class="hero-banner hero-banner--diarias" data-href="#/diarias">
          <div class="hero-banner-frame"></div>
          <div class="hero-banner-glyph">IHS</div>
          <div class="hero-banner-text">
            <div class="hero-banner-eyebrow">Manhã e noite</div>
            <h2>Orações Diárias</h2>
            <p>As preces tradicionais para começar e encerrar o dia.</p>
          </div>
        </a>
      </div>

      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  $app.querySelectorAll(".shortcut-card, .hero-banner").forEach(el=>{
    el.addEventListener("click", ()=> location.hash = el.dataset.href.slice(1));
  });

  wireInstallBanner();
}

function renderMana(){
  setTopbar("Maná", false);

  const cards = CATEGORIES.map(cat => `
    <div class="cat-card" data-href="#/cat/${cat.id}">
      <div class="icon-badge"><span class="icon-glyph">${CATEGORY_GLYPH[cat.id] || "†"}</span></div>
      <h3>${cat.title}</h3>
      <div class="count">${cat.prayers.length ? cat.prayers.length + " oraç" + (cat.prayers.length === 1 ? "ão" : "ões") : "em breve"}</div>
    </div>
  `).join("");

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>Maná</h2>
        <div class="sub">Todas as orações do livro, por capítulo.</div>
      </div>
      <div class="grid">${cards}</div>
      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  $app.querySelectorAll(".cat-card").forEach(el=>{
    el.addEventListener("click", ()=> location.hash = el.dataset.href.slice(1));
  });
}

/* ---------- Categoria ---------- */
function renderCategory(catId){
  const cat = findCategory(catId);
  if(!cat){ location.hash = "#/"; return; }
  setTopbar(cat.title, true);

  const items = cat.prayers.map((p, i) => `
    <li class="prayer-item${p.pending ? " is-pending" : ""}" data-href="#/oracao/${cat.id}/${p.id}">
      <span class="num">${String(i+1).padStart(2,"0")}</span>
      <span class="title">${p.title}</span>
      ${p.pending ? '<span class="tag-pending">a incluir</span>' : ""}
      <span class="chev">›</span>
    </li>
  `).join("");

  const empty = cat.prayers.length === 0
    ? `<div class="empty-note">${cat.note || "Seção ainda sem orações — em breve."}</div>`
    : "";

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>${cat.title}</h2>
        <div class="sub">${cat.note || ""}</div>
      </div>
      ${empty}
      <ul class="prayer-list">${items}</ul>
    </div>
  `;

  $app.querySelectorAll(".prayer-item").forEach(el=>{
    el.addEventListener("click", ()=> location.hash = el.dataset.href.slice(1));
  });
}

/* ---------- Leitor de oração ---------- */
function renderPrayer(catId, prayerId){
  const cat = findCategory(catId);
  const prayer = findPrayer(catId, prayerId);
  if(!cat || !prayer){ location.hash = "#/"; return; }
  setTopbar(cat.title, true);

  const fav = isFavorite(catId, prayerId);
  const paras = prayer.pending
    ? `<div class="pending-note">Esta oração ainda não foi digitada. Envie o texto ou uma foto da página <strong>${prayer.title}</strong> do devocionário que eu incluo aqui.</div>`
    : prayer.text.map((t) => {
        if (t && typeof t === "object" && "quem" in t && "pt" in t && "lt" in t) {
          return `<p class="ladainha-linha"><span class="fala-quem fala-quem--${t.quem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}">${t.quem}</span><span class="lingua-pt">${highlightSymbols(t.pt)}</span><span class="lingua-lt">${highlightSymbols(t.lt)}</span></p>`;
        }
        if (t && typeof t === "object" && "quem" in t) {
          return `<p><span class="fala-quem fala-quem--${t.quem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}">${t.quem}</span>${highlightSymbols(t.texto)}</p>`;
        }
        if (t && typeof t === "object" && "pt" in t && "lt" in t) {
          return `<p class="ladainha-linha"><span class="lingua-pt">${highlightSymbols(t.pt)}</span><span class="lingua-lt">${highlightSymbols(t.lt)}</span></p>`;
        }
        if (t && typeof t === "object" && "section" in t) {
          return `<div class="misterio-peticao-titulo">${t.section}</div>`;
        }
        if (t && typeof t === "object" && "note" in t) {
          return `<p class="rubric">${highlightSymbols(t.note)}</p>`;
        }
        return `<p>${highlightSymbols(t)}</p>`;
      }).join("");

  $app.innerHTML = `
    <div class="view active">
      <div class="reader">
        <div class="eyebrow-row">
          <div class="eyebrow">${cat.title}</div>
          <button id="btn-fav" class="fav-btn${fav ? " is-fav" : ""}" aria-label="Favoritar">${fav ? "♥" : "♡"}</button>
        </div>
        <h1>${prayer.title}</h1>
        ${prayer.attribution ? `<div class="attribution">${prayer.attribution}</div>` : ""}
        ${!prayer.pending ? `
        <div class="reader-controls">
          <button id="size-down" aria-label="Diminuir texto">A−</button>
          <span class="label">Tamanho</span>
          <button id="size-up" aria-label="Aumentar texto">A+</button>
        </div>` : ""}
        <div class="prayer-text" id="prayer-text" style="--reader-size:${readerSize}rem">
          ${paras}
        </div>
      </div>
      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  const sizeUp = document.getElementById("size-up");
  const sizeDown = document.getElementById("size-down");
  if(sizeUp) sizeUp.addEventListener("click", ()=> changeSize(0.08));
  if(sizeDown) sizeDown.addEventListener("click", ()=> changeSize(-0.08));

  document.getElementById("btn-fav").addEventListener("click", (e)=>{
    const nowFav = toggleFavorite(catId, prayerId);
    e.target.textContent = nowFav ? "♥" : "♡";
    e.target.classList.toggle("is-fav", nowFav);
  });

  if(!prayer.pending){ focusModeCleanup = setupFocusMode(); }
}

function setupFocusMode(){
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{
      const y = window.scrollY;
      const goingDown = y > lastY;
      const pastThreshold = y > 40;

      if(goingDown && pastThreshold){
        document.body.classList.add("chrome-hidden");
      } else if(!goingDown || y <= 40){
        document.body.classList.remove("chrome-hidden");
      }
      lastY = y;
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

function changeSize(delta){
  readerSize = Math.min(1.6, Math.max(0.92, readerSize + delta));
  localStorage.setItem("devoc:size", readerSize);
  const el = document.getElementById("prayer-text");
  if(el) el.style.setProperty("--reader-size", readerSize + "rem");
}

/* ---------- Favoritos ---------- */
function renderFavorites(){
  setTopbar("Favoritos", false);
  const favs = getFavorites();
  const items = favs.map(f=>{
    const cat = findCategory(f.cat);
    const prayer = cat ? findPrayer(f.cat, f.id) : null;
    if(!cat || !prayer) return "";
    return `
      <li class="prayer-item" data-href="#/oracao/${f.cat}/${f.id}">
        <span class="num">♥</span>
        <span class="title">${prayer.title}</span>
        <span class="chev">›</span>
      </li>`;
  }).join("");

  const empty = favs.length === 0
    ? `<div class="empty-note">Você ainda não favoritou nenhuma oração. Toque no coração ao abrir uma oração para guardá-la aqui.</div>`
    : "";

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>Favoritos</h2>
        <div class="sub">Suas orações guardadas para acesso rápido.</div>
      </div>
      ${empty}
      <ul class="prayer-list">${items}</ul>
    </div>
  `;

  $app.querySelectorAll(".prayer-item").forEach(el=>{
    el.addEventListener("click", ()=> location.hash = el.dataset.href.slice(1));
  });
}

/* ---------- Busca ---------- */
function renderSearch(query){
  setTopbar("Buscar", true);

  const q = (query || "").trim().toLowerCase();
  let results = [];
  if(q.length > 0){
    CATEGORIES.forEach(cat=>{
      cat.prayers.forEach(p=>{
        if(p.title.toLowerCase().includes(q)){
          results.push({ cat, prayer: p });
        }
      });
    });
  }

  const items = results.map(({cat, prayer})=> `
    <li class="prayer-item${prayer.pending ? " is-pending" : ""}" data-href="#/oracao/${cat.id}/${prayer.id}">
      <span class="num">${CATEGORY_GLYPH[cat.id] || "†"}</span>
      <span class="title-col">
        <span class="title">${prayer.title}</span>
        <span class="title-sub">${cat.title}</span>
      </span>
      ${prayer.pending ? '<span class="tag-pending">a incluir</span>' : ""}
      <span class="chev">›</span>
    </li>
  `).join("");

  const empty = q.length === 0
    ? `<div class="empty-note">Digite o nome de uma oração, por exemplo "Salve Rainha" ou "São José".</div>`
    : results.length === 0
      ? `<div class="empty-note">Nenhuma oração encontrada para "${query}".</div>`
      : "";

  $app.innerHTML = `
    <div class="view active">
      <div class="search-wrap">
        <div class="search-bar">
          <span class="ico">⚲</span>
          <input type="text" id="search-input" placeholder="Buscar uma oração..." value="${query ? query.replace(/"/g,'&quot;') : ""}" autofocus>
        </div>
      </div>
      ${empty}
      <ul class="prayer-list" style="margin-top:1rem">${items}</ul>
    </div>
  `;

  $app.querySelectorAll(".prayer-item").forEach(el=>{
    el.addEventListener("click", ()=> location.hash = el.dataset.href.slice(1));
  });

  const input = document.getElementById("search-input");
  input.addEventListener("input", (e)=> renderSearch(e.target.value));
  input.focus();
}

/* ---------- Rosário ---------- */
function grupoDoDia(){
  const dow = new Date().getDay(); // 0=Dom ... 6=Sáb
  return Object.entries(ROSARIO.mistérios).find(([, g]) => g.dias.includes(dow))?.[0] || "gozosos";
}

const ORDEM_MISTERIOS = ["gozosos", "dolorosos", "gloriosos"];
let rosarioSelecao = null; // null = mistério do dia; "completo" = todos; ou chave do grupo

function renderPrayerBlock(entry){
  if(entry.pending){
    return `<p class="pending-note">Esta oração ainda não foi digitada. Envie o texto de <strong>${entry.titulo}</strong> para eu incluir aqui.</p>`;
  }
  return entry.text.map(t => {
    if(t && typeof t === "object" && "greetingSlot" in t){
      const tempo = tempoLiturgico();
      const saudacao = SAUDACOES_TEMPO[tempo] || SAUDACOES_TEMPO["Tempo Comum"];
      return `<p><span class="fala-quem fala-quem--sacerdote">Sacerdote</span>${highlightSymbols(saudacao)}</p><p><span class="fala-quem fala-quem--povo">Povo</span>Bendito seja Deus, que nos reuniu no amor de Cristo.</p>`;
    }
    if(t && typeof t === "object" && "quem" in t && "pt" in t && "lt" in t){
      return `<p class="ladainha-linha"><span class="fala-quem fala-quem--${t.quem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}">${t.quem}</span><span class="lingua-pt">${highlightSymbols(t.pt)}</span><span class="lingua-lt">${highlightSymbols(t.lt)}</span></p>`;
    }
    if(t && typeof t === "object" && "quem" in t){
      return `<p><span class="fala-quem fala-quem--${t.quem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}">${t.quem}</span>${highlightSymbols(t.texto)}</p>`;
    }
    if(t && typeof t === "object" && "pt" in t && "lt" in t){
      return `<p class="ladainha-linha"><span class="lingua-pt">${highlightSymbols(t.pt)}</span><span class="lingua-lt">${highlightSymbols(t.lt)}</span></p>`;
    }
    if(t && typeof t === "object" && "pessoal" in t){
      return `<div class="oracao-pessoal-box"><div class="oracao-pessoal-eyebrow">Reze em silêncio</div><p>${highlightSymbols(t.pessoal)}</p></div>`;
    }
    if(t && typeof t === "object" && "explicacao" in t){
      return `<p class="explicacao-inline">${highlightSymbols(t.explicacao)}</p>`;
    }
    if(t && typeof t === "object" && "section" in t){
      return `<div class="misterio-peticao-titulo">${t.section}</div>`;
    }
    if(t && typeof t === "object" && "note" in t){
      return `<p class="rubric">${highlightSymbols(t.note)}</p>`;
    }
    return `<p>${highlightSymbols(t)}</p>`;
  }).join("");
}

function renderMisterioBloco(gid, { destaque = false } = {}){
  const grupo = ROSARIO.mistérios[gid];
  const dezenas = grupo.dezenas.map(d => {
    if(d.pending){
      return `
        <div class="misterio-dezena">
          <div class="misterio-titulo"><span class="tag-pending">a incluir</span> ${d.titulo}</div>
        </div>`;
    }
    return `
      <div class="misterio-dezena">
        <div class="misterio-titulo">${d.titulo}</div>
        <p class="misterio-contemplacao">${highlightSymbols(d.contemplacao)}</p>
        <p class="misterio-peticao">${highlightSymbols(d.peticao)}</p>
        <p class="rubric rubric-dezena">${highlightSymbols(ROSARIO.rubricaDezena)}</p>
      </div>`;
  }).join("");
  return `
    <section class="misterio-bloco${destaque ? " is-destaque" : ""}">
      ${destaque ? `<div class="misterio-eyebrow">Mistério de hoje</div>` : ""}
      <h2>${grupo.titulo}</h2>
      ${dezenas}
    </section>
  `;
}

function renderRosario(){
  setTopbar("Rosário", false);

  const grupoHoje = grupoDoDia();
  const selecaoAtual = rosarioSelecao || grupoHoje;
  const isCompleto = selecaoAtual === "completo";

  const chips = [
    { key: null, label: "Hoje" },
    ...ORDEM_MISTERIOS.map(g => ({ key: g, label: ROSARIO.mistérios[g].titulo.replace("Mistérios ", "") })),
    { key: "completo", label: "Rosário Completo" }
  ].map(c => {
    const active = (c.key === null && !rosarioSelecao) || (c.key === rosarioSelecao);
    return `<button class="chip${active ? " active" : ""}" data-sel="${c.key === null ? "" : c.key}">${c.label}</button>`;
  }).join("");

  const gruposParaRenderizar = isCompleto ? ORDEM_MISTERIOS : [selecaoAtual];
  const blocosMisterios = gruposParaRenderizar
    .map(g => renderMisterioBloco(g, { destaque: g === grupoHoje && (isCompleto || !rosarioSelecao) }))
    .join("");

  const introducaoHtml = renderPrayerBlock(ROSARIO.introducao);
  const encerramentoHtml = renderPrayerBlock(ROSARIO.encerramento);

  const guiaOracaoHtml = ROSARIO.comoRezar.pending
    ? `<p class="pending-note">O passo a passo tradicional ainda não foi digitado. Envie o texto de <strong>${ROSARIO.comoRezar.titulo}</strong> para eu incluir aqui.</p>`
    : `<ol class="como-rezar-passos">${ROSARIO.comoRezar.passos.map(p => `<li>${highlightSymbols(p)}</li>`).join("")}</ol>`;

  const opcionais = ROSARIO.oracoesOpcionais.map(o => `
    <details class="oracao-collapse">
      <summary>${o.titulo}</summary>
      <div class="oracao-collapse-body">${renderPrayerBlock(o)}</div>
    </details>
  `).join("");

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>Rosário</h2>
        <div class="sub">${isCompleto ? "Todos os mistérios, em sequência." : (selecaoAtual === grupoHoje && !rosarioSelecao ? "" : "Navegação livre.")}</div>
      </div>

      <details class="guia-oracao">
        <summary>Guia de Oração</summary>
        <div class="guia-oracao-body">${guiaOracaoHtml}</div>
      </details>

      <div class="chip-row">${chips}</div>

      <div class="reader rosario-fluxo">
        <section class="misterio-bloco rosario-introducao">
          <h2>Orações Iniciais</h2>
          ${introducaoHtml}
        </section>

        ${blocosMisterios}

        <section class="misterio-bloco rosario-encerramento">
          <h2>Salve-Rainha</h2>
          ${encerramentoHtml}
        </section>
      </div>

      <div class="list-header" style="padding-top:.5rem">
        <h2 style="font-size:1.4rem">Orações Opcionais</h2>
      </div>
      <div class="oracoes-integradas">${opcionais}</div>
      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  $app.querySelectorAll(".chip").forEach(el=>{
    el.addEventListener("click", ()=>{
      rosarioSelecao = el.dataset.sel || null;
      renderRosario();
    });
  });
}

$btnBack.addEventListener("click", ()=> history.back());

/* ---------- Gesto de voltar (arrastar da borda esquerda) ---------- */
function setupSwipeBack(){
  const EDGE = 24;       // zona sensível na borda esquerda, em px
  const THRESHOLD = 90;  // distância mínima de arrasto pra confirmar o "voltar"
  let startX = 0, startY = 0, tracking = false, dragging = false;

  document.addEventListener("touchstart", (e)=>{
    if($btnBack.classList.contains("hidden")) return; // só ativa quando há "pra onde voltar"
    const t = e.touches[0];
    if(t.clientX <= EDGE){
      startX = t.clientX; startY = t.clientY;
      tracking = true; dragging = false;
    }
  }, { passive: true });

  document.addEventListener("touchmove", (e)=>{
    if(!tracking) return;
    const t = e.touches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if(!dragging && Math.abs(dx) > 10){
      dragging = Math.abs(dx) > Math.abs(dy); // confirma que é gesto horizontal, não scroll vertical
      if(!dragging) tracking = false;
    }
    if(dragging){
      const view = $app.querySelector(".view");
      if(view) view.style.transform = `translateX(${Math.max(0, Math.min(dx, 130))}px)`;
    }
  }, { passive: true });

  document.addEventListener("touchend", (e)=>{
    if(!tracking) return;
    tracking = false;
    const view = $app.querySelector(".view");
    if(dragging && view){
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      view.style.transition = "transform .2s ease";
      view.style.transform = "";
      if(dx > THRESHOLD){ history.back(); }
      setTimeout(()=>{ view.style.transition = ""; }, 220);
    }
    dragging = false;
  }, { passive: true });
}
setupSwipeBack();
$btnSearch.addEventListener("click", ()=> location.hash = "#/buscar");
$userBadge.addEventListener("click", ()=> location.hash = "#/config");

/* ---------- Configurações ---------- */
function renderConfig(){
  setTopbar("Configurações", false);

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>Configurações</h2>
        <div class="sub">Personalize sua experiência de oração.</div>
      </div>

      <div class="config-section">
        <label class="config-label" for="config-nome">Como devemos te chamar?</label>
        <input type="text" id="config-nome" class="config-input" value="${getUserName()}" maxlength="40">
      </div>

      <div class="config-section">
        <div class="config-label">Tamanho do texto de leitura</div>
        <div class="reader-controls" style="position:static; margin:0;">
          <button id="config-size-down" aria-label="Diminuir texto">A−</button>
          <span class="label">Tamanho</span>
          <button id="config-size-up" aria-label="Aumentar texto">A+</button>
        </div>
      </div>

      <div class="config-section">
        <div class="config-label">Aparência</div>
        <button id="config-theme-toggle" class="theme-toggle" aria-pressed="${getTheme() === "dark"}">
          <span class="theme-toggle-label">Modo Escuro</span>
          <span class="theme-toggle-switch"><span class="theme-toggle-knob"></span></span>
        </button>
      </div>

      <div class="config-section">
        <div class="config-label">Atalhos</div>
        <ul class="prayer-list">
          <li class="prayer-item" data-href="#/favoritos"><span class="num">♡</span><span class="title">Favoritos</span><span class="chev">›</span></li>
          <li class="prayer-item" data-href="#/buscar"><span class="num">⚲</span><span class="title">Buscar uma oração</span><span class="chev">›</span></li>
        </ul>
      </div>

      <div class="config-section">
        <div class="config-label">Sobre</div>
        <p class="config-about">Devocionário — baseado em <em>Maná ou Alimento da Alma Devota</em>, de Frei Ambrósio Johanning, O.F.M., XXII edição, Editora Vozes, 1965.</p>
      </div>

      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  document.getElementById("config-nome").addEventListener("change", (e)=>{
    setUserName(e.target.value.trim() || "Peregrino");
  });
  document.getElementById("config-theme-toggle").addEventListener("click", (e)=>{
    const novo = getTheme() === "dark" ? "light" : "dark";
    setTheme(novo);
    e.currentTarget.setAttribute("aria-pressed", novo === "dark");
  });
  document.getElementById("config-size-up").addEventListener("click", ()=> changeSize(0.08));
  document.getElementById("config-size-down").addEventListener("click", ()=> changeSize(-0.08));
  $app.querySelectorAll(".prayer-item").forEach(el=>{
    el.addEventListener("click", ()=> location.hash = el.dataset.href.slice(1));
  });
}

/* ---------- Orações Diárias ---------- */
let diariasSelecao = "manha";

function renderDiarias(){
  setTopbar("Orações Diárias", false);

  const lista = ORACOES_DIARIAS[diariasSelecao];

  const chips = [
    { key: "manha", label: "Manhã" },
    { key: "noite", label: "Noite" }
  ].map(c => `<button class="chip${c.key === diariasSelecao ? " active" : ""}" data-sel="${c.key}">${c.label}</button>`).join("");

  const blocos = lista.map(o => `
    <section class="misterio-bloco">
      <h2>${o.titulo}</h2>
      ${renderPrayerBlock(o)}
    </section>
  `).join("");

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>Orações Diárias</h2>
        <div class="sub">${diariasSelecao === "manha" ? "Preces tradicionais ao despertar." : "Exame de consciência e preces antes de dormir."}</div>
      </div>
      <div class="chip-row">${chips}</div>
      <div class="reader rosario-fluxo">${blocos}</div>
      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  $app.querySelectorAll(".chip").forEach(el=>{
    el.addEventListener("click", ()=>{
      diariasSelecao = el.dataset.sel;
      renderDiarias();
    });
  });
}

/* ---------- Missa ---------- */
let missaSelecao = "tridentina";

/* ---------- Calendário litúrgico ---------- */
function dataPascoa(ano){
  // Algoritmo do Cômputo Gregoriano (Meeus/Jones/Butcher)
  const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100;
  const d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19*a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2*e + 2*i - h - k) % 7;
  const m = Math.floor((a + 11*h + 22*l) / 451);
  const mes = Math.floor((h + l - 7*m + 114) / 31);
  const dia = ((h + l - 7*m + 114) % 31) + 1;
  return new Date(ano, mes - 1, dia);
}

function tempoLiturgico(hoje = new Date()){
  const ano = hoje.getFullYear();
  const somaDias = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
  const soDatas = (a, b) => a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();

  const pascoaEsteAno = dataPascoa(ano);
  const pascoaAnoAnterior = dataPascoa(ano - 1);
  const pascoaProxAno = dataPascoa(ano + 1);

  // Advento: começa no 4º domingo antes do Natal (25/dez)
  const natalEsteAno = new Date(ano, 11, 25);
  const natalAnoAnterior = new Date(ano - 1, 11, 25);
  function inicioAdvento(natal){
    const dow = natal.getDay(); // 0=dom
    const voltarAteDomingo = dow; // dias até o domingo anterior (ou o próprio, se já for domingo)
    const domingoAntesNatal = somaDias(natal, -voltarAteDomingo);
    return somaDias(domingoAntesNatal, -21); // 3 domingos antes desse
  }
  const adventoEsteAnoInicio = inicioAdvento(natalEsteAno);
  const adventoAnoAnteriorInicio = inicioAdvento(natalAnoAnterior);

  // Batismo do Senhor (fim do tempo do Natal): domingo após 6/jan (aprox.)
  function fimTempoNatal(natal){
    const epifania = new Date(natal.getFullYear() + (natal.getMonth()===11?1:0), 0, 6);
    const dow = epifania.getDay();
    const somar = dow === 0 ? 7 : (7 - dow);
    return somaDias(epifania, somar);
  }

  const quartaCinzas = somaDias(pascoaEsteAno, -46);
  const pentecostes = somaDias(pascoaEsteAno, 49);

  if(hoje >= adventoEsteAnoInicio && hoje < natalEsteAno) return "Advento";
  if(hoje >= adventoAnoAnteriorInicio && hoje < natalAnoAnterior) return "Advento";
  if(hoje >= natalAnoAnterior && hoje < fimTempoNatal(natalAnoAnterior)) return "Natal";
  if(hoje >= natalEsteAno) return "Natal";
  if(hoje >= quartaCinzas && hoje < pascoaEsteAno) return "Quaresma";
  if(hoje >= pascoaEsteAno && hoje <= pentecostes) return "Páscoa";
  const quartaCinzasAnoAnterior = somaDias(pascoaAnoAnterior, -46);
  if(hoje < fimTempoNatal(natalAnoAnterior)) return "Natal";
  return "Tempo Comum";
}

const SAUDACOES_TEMPO = {
  "Advento": "O Senhor, que vem salvar-nos, esteja convosco.",
  "Natal": "A paz e o amor de Deus Pai, que se manifestaram em Cristo, nascido para nossa salvação, estejam convosco.",
  "Quaresma": "A graça e o amor de Jesus Cristo, que nos chama à conversão, estejam convosco.",
  "Páscoa": "O Deus da vida, que ressuscitou Jesus Cristo, destruindo as cadeias da morte, esteja convosco.",
  "Tempo Comum": "A graça de nosso Senhor Jesus Cristo, o amor do Pai e a comunhão do Espírito Santo estejam convosco."
};

function renderMissa(){
  setTopbar("Ordinário da Missa", false);

  const lista = MISSA[missaSelecao];
  const tempo = tempoLiturgico();

  const chips = [
    { key: "tridentina", label: "Tridentina" },
    { key: "novoOrdo", label: "Novo Ordo" }
  ].map(c => `<button class="chip${c.key === missaSelecao ? " active" : ""}" data-sel="${c.key}">${c.label}</button>`).join("");

  const avisoTempo = missaSelecao === "novoOrdo" ? `
    <section class="misterio-bloco is-destaque">
      <div class="misterio-eyebrow">Hoje é Tempo Litúrgico de</div>
      <h2>${tempo}</h2>
      <p class="misterio-contemplacao">Saudação de hoje: “${SAUDACOES_TEMPO[tempo] || SAUDACOES_TEMPO["Tempo Comum"]}”</p>
    </section>
  ` : "";

  const blocos = lista.map(o => `
    <section class="misterio-bloco">
      <h2>${o.titulo}</h2>
      ${renderPrayerBlock(o)}
    </section>
  `).join("");

  $app.innerHTML = `
    <div class="view active">
      <div class="list-header">
        <h2>Ordinário da Missa</h2>
        <div class="sub">${
          missaSelecao === "tridentina" ? "Rito de 1962/1965, bilíngue latim/português — texto, postura e explicação juntos." :
          "Missal Romano atual — texto, postura, explicação e orações pessoais juntos."
        }</div>
      </div>
      <div class="chip-row">${chips}</div>
      <div class="reader rosario-fluxo${missaSelecao === "tridentina" ? " rito-tridentino" : ""}">
        ${avisoTempo}
        ${blocos}
      </div>
      <div class="candle-rule"><div class="line"></div>✦<div class="line"></div></div>
    </div>
  `;

  $app.querySelectorAll(".chip").forEach(el=>{
    el.addEventListener("click", ()=>{
      missaSelecao = el.dataset.sel;
      renderMissa();
    });
  });
}

$tabbar.querySelectorAll(".tab-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> location.hash = btn.dataset.tab.slice(1));
});

window.addEventListener("hashchange", render);
function paintStaticIcons(){
  const flame = document.getElementById("brand-flame");
  if(flame) flame.innerHTML = ICONS.flame;
  if($btnBack) $btnBack.innerHTML = ICONS.back;
  if($btnSearch) $btnSearch.innerHTML = ICONS.search;
  document.querySelectorAll(".ico[data-icon]").forEach(el=>{
    el.innerHTML = ICONS[el.dataset.icon] || "";
  });
}
paintStaticIcons();

window.addEventListener("DOMContentLoaded", render);

/* ---------- PWA: prompt de instalação ---------- */
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById("install-banner");
  if(banner) banner.classList.remove("hidden");
});

function wireInstallBanner(){
  const btn = document.getElementById("btn-install");
  if(!btn) return;
  btn.addEventListener("click", async ()=>{
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.getElementById("install-banner").classList.add("hidden");
  });
}

/* ---------- Service worker ---------- */
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}
