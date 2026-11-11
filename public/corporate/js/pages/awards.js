/* Award index filter: every honour is in the HTML; this only hides rows. */
(() => {
  const box = document.querySelector('[data-aw-filter]');
  if (!box) return;
  box.hidden = false;
  const rows = [...document.querySelectorAll('.aw-row')], years = [...document.querySelectorAll('[data-aw-year]')];
  const count = document.querySelector('[data-aw-count]');
  const state = { series: 'all', kind: 'all' };
  box.addEventListener('click', e => {
    const b = e.target.closest('button[data-f]');
    if (!b) return;
    state[b.dataset.f] = b.dataset.v;
    box.querySelectorAll(`[data-f="${b.dataset.f}"]`).forEach(x => x.setAttribute('aria-pressed', x === b));
    let n = 0;
    rows.forEach(r => {
      const on = (state.series === 'all' || r.dataset.series === state.series) && (state.kind === 'all' || r.dataset.kind === state.kind);
      r.hidden = !on; n += on;
    });
    years.forEach(y => { y.hidden = !y.querySelector('.aw-row:not([hidden])'); });
    count.textContent = n === rows.length ? `Showing all ${n} honours` : `Showing ${n} of ${rows.length} honours`;
  });
})();
