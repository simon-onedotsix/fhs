/* Content library filters. Every item is in the HTML; without JavaScript the bar stays hidden and all show. */
(() => {
  const bar = document.querySelector('[data-filters]');
  if (!bar) return;
  const buttons = [...bar.querySelectorAll('button')];
  const rows = [...document.querySelectorAll('[data-rows] .row')];
  bar.hidden = false;
  bar.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    buttons.forEach(o => o.setAttribute('aria-pressed', o === b));
    rows.forEach(r => { r.hidden = b.dataset.f !== 'all' && r.dataset.type !== b.dataset.f; });
  });
})();
