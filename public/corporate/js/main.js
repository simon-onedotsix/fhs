/* futurehospitality.com sample (every page). Enhancements only: pages read and work with JavaScript off.
   Each block runs only where its markup exists. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection && navigator.connection.saveData;

  /* ---------- summits: once one has ended it moves to the end of every list and "Next" passes on (data-ends = last day) ---------- */
  const today = new Date().toLocaleDateString('en-CA');
  $$('[data-ends]').filter(li => li.dataset.ends < today).forEach(li => { li.classList.add('is-past'); li.parentNode.append(li); });
  const flag = $('.bar__flag'), next = $('.bar > li:not(.is-past) .bar__city');
  if (flag && next) {
    $('.bar__item.is-next').classList.remove('is-next');
    next.append(flag); next.parentNode.classList.add('is-next');
  }
  const first = $('.index__item:not(.is-past)');
  if (first) { $$('.index__item.is-active').forEach(i => i.classList.remove('is-active')); first.classList.add('is-active'); }

  /* ---------- header: solid on inner pages; on the homepage once the scroll starts ---------- */
  const top = $('[data-top]');
  const menuBtn = $('[data-menu]');
  const hero = $('[data-hero]');
  const setSolid = () => top.classList.toggle('is-solid', !hero || scrollY > 2 || top.classList.contains('is-open'));
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', open);
    top.classList.toggle('is-open', open);
  });
  $$('#menu a').forEach(a => a.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    top.classList.remove('is-open');
  }));
  addEventListener('keydown', e => { if (e.key === 'Escape' && top.classList.contains('is-open')) { menuBtn.click(); menuBtn.focus(); } });

  if (hero) {
  /* ---------- hero: the room first; scrolling pulls back until the film sits in the mark's triangle ---------- */
    const stage = $('[data-stage]'), art = $('[data-art]'), mark = $('[data-mark]');
    const panel = $('[data-panel]'), bar = $('[data-bar]'), cover = $('[data-cover]'), veil = $('[data-veil]');
    const film = $('[data-film]'), toggle = $('[data-film-toggle]'), toggleLabel = $('[data-film-label]');
    // inner "play" triangle of the mark (mark units) and its centroid
    const T = [[57.971, 77.172], [57.931, 128.7], [102.549, 102.931]];
    const G = [(T[0][0] + T[1][0] + T[2][0]) / 3, (T[0][1] + T[1][1] + T[2][1]) / 3];
    const MARK_W = 178.265;
    let W = 0, H = 0, base = null, sEnd = 1;

    // Agency cover crop (deck template, 1920x1080): left 1152.6, top -423.3, width 1086, anchored top-right.
    // Phones: the same crop logic scaled for a portrait screen, mark cut by the top and right edges.
    function layout() {
      W = stage.clientWidth; H = stage.clientHeight;
      art.setAttribute('viewBox', `0 0 ${W} ${H}`);
      const portrait = W / H < 1;
      const w = portrait ? .95 * W : 1086 / 1920 * W;
      const t0 = top.offsetHeight;  // the cover crop is measured from the header's foot, so the triangle clears it
      base = portrait
        ? { s: w / MARK_W, x: .33 * W, y: t0 - .22 * W }
        : { s: w / MARK_W, x: 1152.6 / 1920 * W, y: t0 - 423.3 / 1920 * W };
      // smallest scale at which the triangle, centred on the screen, covers every corner of it (+6%)
      sEnd = 0;
      for (let i = 0; i < 3; i++) {
        const a = T[i], b = T[(i + 1) % 3];
        let nx = b[1] - a[1], ny = a[0] - b[0];
        const len = Math.hypot(nx, ny); nx /= len; ny /= len;
        let d = nx * (a[0] - G[0]) + ny * (a[1] - G[1]);
        if (d < 0) { nx = -nx; ny = -ny; d = -d; }
        for (const [vx, vy] of [[W / 2, H / 2], [-W / 2, H / 2], [W / 2, -H / 2], [-W / 2, -H / 2]])
          sEnd = Math.max(sEnd, (nx * vx + ny * vy) / d);
      }
      sEnd *= 1.06;
      render();
    }

    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const span = (p, a, b) => clamp((p - a) / (b - a));
    const easeInOut = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    function progress() {
      const run = hero.offsetHeight - H;
      return run > 0 ? clamp((scrollY - hero.offsetTop) / run) : 0;
    }

    function render() {
      const p = reduce.matches ? 0 : progress();
      // z = 1: the triangle fills the screen (the film, full bleed); z = 0: the agency cover crop
      const z = 1 - easeInOut(span(p, .14, .84));
      const s = base.s * Math.pow(sEnd / base.s, z);
      const c0x = base.x + base.s * G[0], c0y = base.y + base.s * G[1];
      const cx = c0x + (W / 2 - c0x) * z, cy = c0y + (H / 2 - c0y) * z;
      mark.setAttribute('transform', `translate(${(cx - s * G[0]).toFixed(2)} ${(cy - s * G[1]).toFixed(2)}) scale(${s.toFixed(4)})`);
      // the film's centre rides with the triangle, so the window frames the middle of each shot, then the screen
      // clamped so the shifted film still covers the part of the triangle that is on screen
      const tx = T.map(([x]) => cx + s * (x - G[0])), ty = T.map(([, y]) => cy + s * (y - G[1]));
      const fit = (want, lo, hi, size) => clamp(want, Math.min(size, hi) - size, Math.max(0, lo));
      const dx = fit(cx - W / 2, Math.min(...tx), Math.max(...tx), W);
      const dy = fit(cy - H / 2, Math.min(...ty), Math.max(...ty), H);
      film.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      const out = easeInOut(span(p, .02, .3));
      panel.style.transform = `translateY(${(-out * 8).toFixed(2)}vh)`;
      panel.style.opacity = 1 - out;
      panel.style.visibility = out >= 1 ? 'hidden' : '';
      veil.style.opacity = (.38 * (1 - easeInOut(span(p, .1, .5)))).toFixed(3);
      setSolid();
      bar.style.transform = `translateY(${(out * 100).toFixed(2)}%)`;
      bar.style.visibility = out >= 1 ? 'hidden' : '';
      cover.style.opacity = span(p, .64, .84);
    }

    let ticking = false;
    addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; render(); }); }
    }, { passive: true });
    addEventListener('resize', layout);
    reduce.addEventListener('change', layout);
    layout();

    // film: loaded only when it can play (no reduced motion, no data saving); paused off screen
    let userPaused = reduce.matches, loaded = false;
    function loadFilm() {
      if (loaded) return; loaded = true;
      // large screens get the full-resolution file; phones and tablets the 720 one; Save-Data the smallest
      const tier = saveData ? 'srcSmall' : innerWidth >= 1200 ? 'src' : 'srcMid';
      $$('source', film).forEach(s => { s.src = s.dataset[tier]; });
      film.load();
    }
    function setToggle() {
      const paused = film.paused;
      toggle.setAttribute('aria-pressed', paused);
      toggleLabel.textContent = paused ? 'Play film' : 'Pause film';
    }
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      loadFilm();
      if (film.paused) { userPaused = false; film.play().catch(() => {}); } else { userPaused = true; film.pause(); }
    });
    film.addEventListener('play', setToggle);
    film.addEventListener('pause', setToggle);
    setToggle();
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !userPaused && !saveData) { loadFilm(); film.play().catch(() => {}); }
      else if (!e.isIntersecting) film.pause();
    }, { threshold: .01 }).observe(stage);

  
  }

  if ($('.season__frame')) {
  /* ---------- the season: the photo frame follows the active edition ---------- */
    const frame = $('.season__frame');
    const items = $$('[data-index] .index__item');
    items.forEach(li => {
      const pic = $('.index__thumb', li).cloneNode(true);
      pic.className = 'index__thumb' + (li.classList.contains('is-active') ? ' is-on' : '');
      pic.dataset.key = li.dataset.photo;
      $$('img', pic).forEach(i => { i.loading = 'lazy'; i.alt = ''; });  // the list's own mosaic carries the alt text
      frame.append(pic);
      const activate = () => {
        items.forEach(o => o.classList.toggle('is-active', o === li));
        [...frame.children].forEach(p => p.classList.toggle('is-on', p.dataset.key === li.dataset.photo));
      };
      li.addEventListener('mouseenter', activate);
      li.addEventListener('focusin', activate);
      li._activate = activate;
    });
    // while scrolling, the row crossing the middle of the screen leads
    const mid = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target._activate()),
      { rootMargin: '-40% 0px -40% 0px' });
    items.forEach(li => mid.observe(li));

    const first = items.find(o => o.classList.contains('is-active'));
    if (first) first._activate();

  
  }

  if ($('[data-tl-track]')) {
  /* ---------- timeline: arrows and a progress bar on a native scroller ---------- */
    const track = $('[data-tl-track]'), prev = $('[data-tl-prev]'), next = $('[data-tl-next]'), fill = $('[data-tl-fill]');
    const tlState = () => {
      const max = track.scrollWidth - track.clientWidth;
      fill.style.width = `${max > 0 ? (track.scrollLeft / max) * 100 : 100}%`;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    };
    const step = dir => track.scrollBy({ left: dir * track.clientWidth * .75, behavior: reduce.matches ? 'auto' : 'smooth' });
    prev.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));
    track.addEventListener('scroll', () => requestAnimationFrame(tlState), { passive: true });
    addEventListener('resize', tlState);
    tlState();

  
  }

  /* ---------- signed on stage: rows with a photo bring it forward ---------- */
  const dealPics = $$('[data-deal-photos] picture');
  $$('[data-deal-key]').forEach(a => {
    const show = () => dealPics.forEach(p => p.classList.toggle('is-on', p.dataset.deal === a.dataset.dealKey));
    a.addEventListener('mouseenter', show);
    a.addEventListener('focus', show);
  });

  /* ---------- session film: click to load YouTube (no third-party request before that) ---------- */
  $$('[data-yt]').forEach(box => {
    $('button', box).addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${box.dataset.yt}?autoplay=1&rel=0`;
      f.title = box.dataset.ytTitle || 'FHS session film';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      box.replaceChildren(f);
      f.focus();
    });
  });

  /* ---------- HubSpot forms: the live forms, embedded as on futurehospitality.com (they have CAPTCHA on, so HubSpot
     takes submissions only from its own embed). Loaded when a form nears the screen. ---------- */
  const forms = $$('[data-hs-form]');
  if (forms.length) {
    const fail = () => forms.forEach(f => { f.innerHTML = '<p>The form could not load. Email <a href="mailto:hello@thebench.com">hello@thebench.com</a> and we will take it from there.</p>'; });
    const io = new IntersectionObserver(es => {
      if (!es.some(e => e.isIntersecting)) return;
      io.disconnect();
      const sc = document.createElement('script');
      sc.src = 'https://js.hsforms.net/forms/embed/v2.js';
      sc.onload = () => forms.forEach(f => hbspt.forms.create({ portalId: '14527187', formId: f.dataset.hsForm, target: '#' + f.id, css: '' }));
      sc.onerror = fail;
      document.head.append(sc);
    }, { rootMargin: '800px' });
    forms.forEach(f => io.observe(f));
    /* sign-up: ticking a summit also ticks its current edition (the hidden "27 FHS World"-type options pinned on the HubSpot form),
       so the contact gets brand + edition like every other form. Next year: re-pin the form's options, no code change. */
    document.addEventListener('change', e => {
      const b = e.target;
      if (!b.matches('.hsform input[name="product_interest_type"]') || /^\d/.test(b.value)) return;
      const ed = $$('input[name="product_interest_type"]', b.form).find(i => /^\d\d /.test(i.value) && b.value.startsWith(i.value.slice(3)));
      if (ed && ed.checked !== b.checked) ed.click();
    });
  }
})();
