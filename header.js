/* =========================================================
   HEADER — componente compartilhado
   Uso: <header id="site-header"></header> + header.css + este script
   (o script deve vir depois do elemento). Edite os links só aqui.
   ========================================================= */
(function () {
  // Toda página abre no topo (não reaproveita a rolagem da página anterior)
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  const toTop = () => { if (!location.hash || location.hash === "#top") window.scrollTo(0, 0); };
  toTop();
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", (e) => { if (e.persisted) toTop(); });

  const HEADER = {
    brand: { label: "Malu", href: "./#top" },
    nav: [
      { label: "projetos", href: "projetos.html" },
      { label: "contato", href: "https://wa.me/5511953552005?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.", external: true },
    ],
    navEn: [
      { label: "projects", href: "projetos.html" },
      { label: "contact", href: "https://wa.me/5511953552005?text=Hi%21%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project.", external: true },
    ],
  };
  // Idioma: páginas com versão em inglês declaram <html data-lang-alt="arquivo.html">
  const root = document.documentElement;
  const isEn = (root.lang || "").toLowerCase().startsWith("en");
  const alt = root.dataset.langAlt;
  const nav = isEn ? HEADER.navEn : HEADER.nav;
  const langSwitch = alt ? `<li class="lang" aria-label="${isEn ? "Language" : "Idioma"}">
            ${isEn ? `<a class="lang__opt" href="${alt}" hreflang="pt-BR" lang="pt-BR">PT</a><span class="lang__opt is-active" aria-current="true">EN</span>`
                   : `<span class="lang__opt is-active" aria-current="true">PT</span><a class="lang__opt" href="${alt}" hreflang="en" lang="en">EN</a>`}
          </li>` : "";
  const el = document.getElementById("site-header");
  if (!el) return;
  el.classList.add("site-header");
  el.id = "top";
  el.innerHTML = `
    <div class="site-header__inner">
      <a class="logo" href="${HEADER.brand.href}" aria-label="${HEADER.brand.label}, ${isEn ? "home" : "início"}">${HEADER.brand.label}</a>
      <nav class="nav" aria-label="${isEn ? "Main" : "Principal"}">
        <ul class="nav__list">
          ${nav.map(n => `<li><a class="nav__link" href="${n.href}"${n.external ? ' target="_blank" rel="noopener"' : ""}>${n.label}</a></li>`).join("")}
          ${langSwitch}
        </ul>
      </nav>
    </div>`;
})();
