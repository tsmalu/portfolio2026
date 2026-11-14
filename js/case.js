/* Template de case: abre no topo e mantém o título em uma linha */
  // Título em uma linha: reduz a fonte até caber na coluna (acima de 760px)
  const t = document.getElementById("case-title");
  if (t) {
  const fit = () => {
    t.style.fontSize = "";
    if (matchMedia("(max-width: 760px)").matches) return;
    const box = t.parentElement.clientWidth, base = parseFloat(getComputedStyle(t).fontSize);
    if (t.scrollWidth > box) t.style.fontSize = Math.floor(base * box / t.scrollWidth) + "px";
  };
  fit();
  if (document.fonts) document.fonts.ready.then(fit);
  if ("ResizeObserver" in window) new ResizeObserver(fit).observe(t.parentElement);
  }
