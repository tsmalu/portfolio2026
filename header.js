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
  };
  const el = document.getElementById("site-header");
  if (!el) return;
  el.classList.add("site-header");
  el.id = "top";
  el.innerHTML = `
    <div class="site-header__inner">
      <a class="logo" href="${HEADER.brand.href}" aria-label="${HEADER.brand.label}, início">${HEADER.brand.label}</a>
      <nav class="nav" aria-label="Principal">
        <ul class="nav__list">
          ${HEADER.nav.map(n => `<li><a class="nav__link" href="${n.href}"${n.external ? ' target="_blank" rel="noopener"' : ""}>${n.label}</a></li>`).join("")}
        </ul>
      </nav>
    </div>`;
})();
