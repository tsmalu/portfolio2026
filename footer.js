/* =========================================================
   RODAPÉ — componente compartilhado
   Uso: <footer id="site-footer"></footer> + footer.css + este script.
   Para mudar links ou projetos, edite só FOOTER abaixo.
   ========================================================= */
(function () {
  const FOOTER = {
    brand: { mark: "Malu", tagline: ["Product", "Designer"], href: "./" },
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tsmalu/", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/ts-malu", icon: "github" },
      { label: "Behance", href: "https://www.behance.net/ts_malu", icon: "behance" },
    ],
    nav: [
      { label: "Início", href: "./" },
      { label: "Projetos", href: "projetos.html" },
      { label: "Blog", href: "blog.html" },
    ],
    projects: [
      { label: "Plataforma jurídica CBRdoc", href: "case-cbrdoc.html" },
      { label: "Plataforma ESG", href: "case-esg.html" },
      { label: "Jogo de xadrez", href: "case-xadrez.html" },
    ],
  };

  const ICONS = {
    linkedin: '<img src="assets/icons/linkedin.png" alt="" width="28" height="28">',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    behance: '<img src="assets/icons/behance.png" alt="" width="28" height="28" style="border-radius:50%">',
  };

  const link = (i) => `<li><a href="${i.href}">${i.label}</a></li>`;
  const ext = (i) => `<li><a href="${i.href}" target="_blank" rel="noopener" aria-label="${i.label}">${ICONS[i.icon]}</a></li>`;

  const el = document.getElementById("site-footer");
  if (!el) return;
  el.classList.add("site-footer");
  el.innerHTML = `
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <a class="site-footer__logo" href="${FOOTER.brand.href}" aria-label="${FOOTER.brand.mark}, início">
          <span class="site-footer__mark">${FOOTER.brand.mark}</span>
          <span class="site-footer__tagline">${FOOTER.brand.tagline.join("<br>")}</span>
        </a>
        <ul class="site-footer__social">${FOOTER.social.map(ext).join("")}</ul>
      </div>
      <nav aria-label="Rodapé"><ul class="site-footer__list">${FOOTER.nav.map(link).join("")}</ul></nav>
      <nav aria-label="Projetos"><ul class="site-footer__list">${FOOTER.projects.map(link).join("")}</ul></nav>
    </div>`;
})();
