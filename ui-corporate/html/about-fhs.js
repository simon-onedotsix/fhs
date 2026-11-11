// The page's markup, as designed in the FHS corporate sample (generated once by its tools/port/sync_app.py, then
// edited here). <!--slot:name--> pairs mark the sections ui-corporate/lib/cms.js fills from the CMS; what is
// saved between them shows whenever the CMS cannot be read. Server-side only: import it in getStaticProps.
const html = String.raw`<a class="skip" href="#main">Skip to content</a>

<header class="top is-solid" data-top>
  <a class="top__logo" href="/" aria-label="Future Hospitality Summit, home">
    <img src="/corporate/assets/logos/fhs-logo-reversa.svg" alt="" width="96" height="38">
  </a>
  <nav class="top__nav" id="menu" aria-label="Main">
    <a href="/#season">Events</a>
    <a href="/about-fhs" aria-current="page">About</a>
    <a href="/content-library">Content library</a>
    <a href="/award-winners">Award winners</a>
    <a href="/fhs-club">FHS Club</a>
    <a class="top__partner" href="/fhs-marketing-opportunities">Partner with FHS</a>
  </nav>
  <button class="top__menu" type="button" aria-expanded="false" aria-controls="menu" data-menu>
    <span class="top__menu-label">Menu</span><span class="top__menu-bars" aria-hidden="true"></span>
  </button>
</header>

<main id="main">

<section class="phero phero--photo" aria-labelledby="page-title">
  <picture class="phero__photo"><source srcset="/corporate/assets/img/room/audience.webp" type="image/webp"><img src="/corporate/assets/img/room/audience.jpg" alt="Delegates listening in the main hall at an FHS summit" width="2400" height="1350"></picture>
  <div class="phero__panel">
    <div class="phero__copy">
      <h1 class="phero__title" id="page-title">About FHS</h1><p class="phero__lede">Future Hospitality Summit is an international platform where the world’s most influential hospitality investment decision-makers connect, exchange knowledge and explore new partnerships.</p>
    </div>
  </div>
</section>

<!-- WHAT FHS IS -->
<section class="ab-intro on-white" aria-labelledby="intro-title">
  <div class="wrap shead ">
  <h2 class="h2" id="intro-title">Invest in <br>our future</h2><p class="shead__intro">Organised by The Bench, FHS brings together the owners, investors, operators, developers and governments who decide where hospitality capital goes next.</p>
</div>
  <div class="wrap ab-intro__grid">
    <dl class="defs">
      <div><dt>Vision</dt><dd>To be a global curator driving investment in the future of hospitality.</dd></div>
      <div><dt>Mission</dt><dd>To guide the future of hospitality towards a better tomorrow.</dd></div>
      <div><dt>Approach</dt><dd>To create notable individual moments of inspiration for investment, connection or ideas.</dd></div>
    </dl>
    <div class="ab-intro__copy">
      <p class="ab-intro__lead">In 2025 the FHS series welcomed more than <strong>3,000</strong> C-level decision-makers, including <strong>621 investors</strong> representing over <strong>USD 11tn</strong> in assets under management. <strong>29 hotel signings</strong> were announced on its stages.</p>
      <p>We cannot foresee the future of hospitality, but we can anticipate it, even create it. Each summit is built for its market, with its own programme, investors and partners.</p>
      <p class="ab-intro__src">2025 series totals: The Bench, June 2026.</p>
    </div>
  </div>
</section>

<!-- THE SEASON -->
<section class="ab-season" aria-labelledby="season-title">
  <div class="wrap shead ">
  <h2 class="h2" id="season-title">Six summits, <br>four continents</h2><p class="shead__intro">One platform across the Middle East, Africa, Europe and Latin America. Every summit has its own site, programme and team.</p>
</div>
  <ul class="wrap summits" role="list">
    <li data-ends="2026-11-11"><a class="summits__item" href="/egypt">
      <img src="/corporate/assets/logos/events/fhs-egypt.png" alt="FHS Egypt" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Cairo</span><span class="summits__date">10–11 November 2026</span>
      <span class="summits__go">Visit FHS Egypt <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-02-24"><a class="summits__item" href="/living">
      <img src="/corporate/assets/logos/events/fhs-living.png" alt="FHS Living" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Paris</span><span class="summits__date">23–24 February 2027</span>
      <span class="summits__go">Visit FHS Living <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-03-16"><a class="summits__item" href="https://brahic.com/">
      <img src="/corporate/assets/logos/events/brahic.png" alt="BRAHIC" width="816" height="200" loading="lazy" class="summits__logo summits__logo--brahic">
      <span class="summits__city">Rio de Janeiro</span><span class="summits__date">15–16 March 2027</span>
      <span class="summits__go">Visit BRAHIC <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-04-14"><a class="summits__item" href="/sa">
      <img src="/corporate/assets/logos/events/fhs-saudi-arabia-madinah.png" alt="FHS Saudi Arabia" width="562" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Madinah</span><span class="summits__date">13–14 April 2027</span>
      <span class="summits__go">Visit FHS Saudi Arabia <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-04-29"><a class="summits__item" href="/africa">
      <img src="/corporate/assets/logos/events/fhs-africa.png" alt="FHS Africa" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Kampala</span><span class="summits__date">28–29 April 2027</span>
      <span class="summits__go">Visit FHS Africa <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-11-30"><a class="summits__item" href="/world">
      <img src="/corporate/assets/logos/events/fhs-world.png" alt="FHS World" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Ras Al Khaimah</span><span class="summits__date">November 2027</span>
      <span class="summits__go">Visit FHS World <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
  </ul>
</section>

<!-- HISTORY -->
<section class="history" aria-labelledby="history-title">
  <div class="wrap shead ">
  <h2 class="h2" id="history-title">From Berlin <br>to Rio</h2><p class="shead__intro">Almost three decades of building the rooms where hospitality capital meets, from the first investment forum in Berlin to six summits on four continents.</p>
</div>
  <div class="tl" data-tl>
    <ol class="tl__track" tabindex="0" aria-label="The Bench and FHS, 1998 to 2027" data-tl-track>
      <li class="tl__item"><span class="tl__year">1998</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">Jonathan Worsley co-founds IHIF, the International Hotel Investment Forum, in Berlin.</p></li>
      <li class="tl__item"><span class="tl__year">2001</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Bench is founded in London as a data benchmarking company.</p></li>
      <li class="tl__item"><span class="tl__year">2006</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">AHIC, the Arabian Hotel Investment Conference, launches in Dubai, hosted by Jumeirah.</p></li>
      <li class="tl__item"><span class="tl__year">2008</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Bench merges with STR Global.</p></li>
      <li class="tl__item"><span class="tl__year">2010</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">AHIF, the Africa Hotel Investment Forum, launches in Casablanca, led by Matthew Weihs.</p></li>
      <li class="tl__item"><span class="tl__year">2012</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Bench opens its Dubai office.</p></li>
      <li class="tl__item"><span class="tl__year">2015</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Bench acquires 50% of SAHIC, the South America Hotel Investment Conference.</p></li>
      <li class="tl__item"><span class="tl__year">2016</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">AviaDev Africa launches in Kigali.</p></li>
      <li class="tl__item"><span class="tl__year">2018</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Saudi Arabia Hospitality Investment Conference launches in Riyadh.</p></li>
      <li class="tl__item"><span class="tl__year">2019</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Bench acquires the Adriatic Hotel Investment Forum, now IDEEA.</p></li>
      <li class="tl__item"><span class="tl__year">2020</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Future Hospitality Hybrid Summit launches with the G20 Secretariat.</p></li>
      <li class="tl__item"><span class="tl__year">2021</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">Startup Den launches at the summit in Dubai.</p></li>
      <li class="tl__item"><span class="tl__year">2022</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">AHIC and GRIF come together as Future Hospitality Summit.</p></li>
      <li class="tl__item"><span class="tl__year">2023</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">FHS Saudi Arabia moves to Al Faisaliah in Riyadh and welcomes more than 1,000 delegates.</p></li>
      <li class="tl__item"><span class="tl__year">2024</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">The Dubai summit becomes FHS World. FHS Saudi Arabia draws 1,300+ delegates.</p></li>
      <li class="tl__item"><span class="tl__year">2025</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">AHIF becomes FHS Africa. FHS World gathers nearly 1,600 leaders from more than 70 countries.</p></li>
      <li class="tl__item is-now"><span class="tl__year">2026</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">FHS Egypt and FHS Living launch, and the Branded Residences Forum becomes FHS Living. The Bench signs a partnership with UN Tourism.</p></li>
      <li class="tl__item is-now"><span class="tl__year">2027</span><svg class="tl__tick" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0L0 12L10 6Z"/></svg><p class="tl__text">FHS World moves to Ras Al Khaimah. FHS Living opens its Founding Edition in Paris and BRAHIC its first edition in Rio de Janeiro.</p></li>
    </ol>
    <div class="wrap tl__nav">
      <button class="tl__btn" type="button" data-tl-prev aria-label="Earlier years"><svg class="chev chev--back" viewBox="0 0 10 16" aria-hidden="true"><path d="M8 1L2 8l6 7"/></svg></button>
      <button class="tl__btn" type="button" data-tl-next aria-label="Later years"><svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></button>
      <span class="tl__bar" aria-hidden="true"><span class="tl__fill" data-tl-fill></span></span>
    </div>
  </div>
  <p class="wrap history__src">Sources: The Bench, Our journey; FHS press releases 2022–2026.</p>
</section>

<!-- THE TEAM -->
<section class="ab-team on-white" aria-labelledby="team-title">
  <div class="wrap shead ">
  <h2 class="h2" id="team-title">The team</h2><p class="shead__intro">The people behind every FHS summit, from partnerships and investor relations to programme, production and marketing.</p>
</div><!--slot:team-->
  <div class="wrap ab-team__group ab-team__group--lead">
    <h3 class="ab-team__h">Leadership</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/jonathan-worsley.webp" type="image/webp"><img src="/corporate/assets/img/about/team/jonathan-worsley.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Jonathan Worsley</p><p class="face__role">Chairman</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/ali-shahid.webp" type="image/webp"><img src="/corporate/assets/img/about/team/ali-shahid.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Ali Shahid</p><p class="face__role">Chief Executive Officer</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/matthew-weihs.webp" type="image/webp"><img src="/corporate/assets/img/about/team/matthew-weihs.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Matthew Weihs</p><p class="face__role">Chief Development Officer</p></li>
    </ul>
  </div>
  <div class="wrap ab-team__group">
    <h3 class="ab-team__h">Partnerships</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/michelle-turney.webp" type="image/webp"><img src="/corporate/assets/img/about/team/michelle-turney.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Michelle Turney</p><p class="face__role">Global Head of Strategic Partnerships</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/roy-bannister.webp" type="image/webp"><img src="/corporate/assets/img/about/team/roy-bannister.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Roy Bannister</p><p class="face__role">Head of Strategic Partnerships – Africa</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/sunita-mahay.webp" type="image/webp"><img src="/corporate/assets/img/about/team/sunita-mahay.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Sunita Mahay</p><p class="face__role">Senior Partnerships Manager</p></li>
    </ul>
  </div>
  <div class="wrap ab-team__group">
    <h3 class="ab-team__h">Investor relations</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/marina-franolic.webp" type="image/webp"><img src="/corporate/assets/img/about/team/marina-franolic.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Marina Franolic</p><p class="face__role">Investor Relations Director</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/joan-calimpong.webp" type="image/webp"><img src="/corporate/assets/img/about/team/joan-calimpong.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Joan Calimpong</p><p class="face__role">Investor Relations Manager</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/mulaika-qureshi.webp" type="image/webp"><img src="/corporate/assets/img/about/team/mulaika-qureshi.jpg" alt="" loading="lazy" width="126" height="156"></picture><p class="face__name">Mulaika Qureshi</p><p class="face__role">Investor Relations Trainee</p></li>
    </ul>
  </div>
  <div class="wrap ab-team__group">
    <h3 class="ab-team__h">Marketing and PR</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/muhammad-ahmed.webp" type="image/webp"><img src="/corporate/assets/img/about/team/muhammad-ahmed.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Muhammad Ahmed</p><p class="face__role">Head of Marketing</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/abdur-raffey.webp" type="image/webp"><img src="/corporate/assets/img/about/team/abdur-raffey.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Abdur Raffey</p><p class="face__role">Senior Marketing Manager</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/lyza-rashid.webp" type="image/webp"><img src="/corporate/assets/img/about/team/lyza-rashid.jpg" alt="" loading="lazy" width="316" height="394"></picture><p class="face__name">Lyza Rashid</p><p class="face__role">Marketing Manager</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/innara-perwaiz.webp" type="image/webp"><img src="/corporate/assets/img/about/team/innara-perwaiz.jpg" alt="" loading="lazy" width="293" height="365"></picture><p class="face__name">Innara Perwaiz</p><p class="face__role">Marketing Lead</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/muhammad-ibrahim-mohsin.webp" type="image/webp"><img src="/corporate/assets/img/about/team/muhammad-ibrahim-mohsin.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Muhammad Ibrahim Mohsin</p><p class="face__role">Marketing Lead</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/anne-bleeker.webp" type="image/webp"><img src="/corporate/assets/img/about/team/anne-bleeker.jpg" alt="" loading="lazy" width="395" height="494"></picture><p class="face__name">Anne Bleeker</p><p class="face__role">Managing Partner, In2 Consulting (PR partner)</p></li>
    </ul>
  </div>
  <div class="wrap ab-team__group">
    <h3 class="ab-team__h">Operations</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/sally-marwaha.webp" type="image/webp"><img src="/corporate/assets/img/about/team/sally-marwaha.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Sally Marwaha</p><p class="face__role">Operations Director</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/mala-patel.webp" type="image/webp"><img src="/corporate/assets/img/about/team/mala-patel.jpg" alt="" loading="lazy" width="232" height="290"></picture><p class="face__name">Mala Patel</p><p class="face__role">Event Director – Africa | COO, AviaDev</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/asma-eladaoui.webp" type="image/webp"><img src="/corporate/assets/img/about/team/asma-eladaoui.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Asma Eladaoui</p><p class="face__role">Account Manager</p></li>
    </ul>
  </div>
  <div class="wrap ab-team__group">
    <h3 class="ab-team__h">Programme</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/tanja-millner.webp" type="image/webp"><img src="/corporate/assets/img/about/team/tanja-millner.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Tanja Millner</p><p class="face__role">Production Director</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/fatimah-ilahi.webp" type="image/webp"><img src="/corporate/assets/img/about/team/fatimah-ilahi.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Fatimah Ilahi</p><p class="face__role">Production Manager</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/felipe-recaman.webp" type="image/webp"><img src="/corporate/assets/img/about/team/felipe-recaman.jpg" alt="" loading="lazy" width="474" height="592"></picture><p class="face__name">Felipe Recaman</p><p class="face__role">Production Manager</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/melissa-ordonez.webp" type="image/webp"><img src="/corporate/assets/img/about/team/melissa-ordonez.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Melissa Ordonez</p><p class="face__role">Production Assistant</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/louis-garthwaite.webp" type="image/webp"><img src="/corporate/assets/img/about/team/louis-garthwaite.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Louis Garthwaite</p><p class="face__role">Production Assistant</p></li>
    </ul>
  </div>
  <div class="wrap ab-team__group">
    <h3 class="ab-team__h">Finance</h3>
    <ul class="faces ab-faces" role="list">
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/daniya-mcnulty.webp" type="image/webp"><img src="/corporate/assets/img/about/team/daniya-mcnulty.jpg" alt="" loading="lazy" width="467" height="585"></picture><p class="face__name">Daniya McNulty</p><p class="face__role">Global Finance Manager</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/laura-james.webp" type="image/webp"><img src="/corporate/assets/img/about/team/laura-james.jpg" alt="" loading="lazy" width="480" height="600"></picture><p class="face__name">Laura James</p><p class="face__role">Finance</p></li>
      <li class="face"><picture><source srcset="/corporate/assets/img/about/team/melody-brown.webp" type="image/webp"><img src="/corporate/assets/img/about/team/melody-brown.jpg" alt="" loading="lazy" width="451" height="564"></picture><p class="face__name">Melody Brown</p><p class="face__role">Senior Accountant</p></li>
    </ul>
  </div><!--/slot:team-->
</section>

<!-- WHO TAKES THE STAGE -->
<section class="stage" aria-labelledby="stage-title">
  <div class="wrap shead ">
  <h2 class="h2" id="stage-title">Who takes <br>the stage</h2><p class="shead__intro">Royalty, a prime minister, ministers and the chief executives of Hilton, Accor, Emirates and Emaar have taken the FHS stage. Titles as of October 2026.</p>
</div>
  <ul class="wrap faces" role="list">
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/sheikh-saud-bin-saqr-al-qasimi.webp" type="image/webp"><img src="/corporate/assets/img/speakers/sheikh-saud-bin-saqr-al-qasimi.jpg" alt="" loading="lazy" width="267" height="334"></picture><p class="face__name">H.H. Sheikh Saud bin Saqr Al Qasimi</p><p class="face__role">UAE Supreme Council Member and Ruler of Ras Al Khaimah</p><p class="face__at">AHIC 2018</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/edouard-ngirente.webp" type="image/webp"><img src="/corporate/assets/img/speakers/edouard-ngirente.jpg" alt="" loading="lazy" width="176" height="220"></picture><p class="face__name">Edouard Ngirente</p><p class="face__role">Former Prime Minister of Rwanda</p><p class="face__at">AHIF 2017</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/sheikh-ahmed-bin-saeed-al-maktoum.webp" type="image/webp"><img src="/corporate/assets/img/speakers/sheikh-ahmed-bin-saeed-al-maktoum.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">H.H. Sheikh Ahmed bin Saeed Al Maktoum</p><p class="face__role">Founding Patron, AHIC and FHS; Chairman and Chief Executive, Emirates Airline and Group</p><p class="face__at">FHS World 2026</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/prince-sultan-bin-salman-bin-abdulaziz-al-saud.webp" type="image/webp"><img src="/corporate/assets/img/speakers/prince-sultan-bin-salman-bin-abdulaziz-al-saud.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">H.R.H. Prince Sultan bin Salman bin Abdulaziz Al Saud</p><p class="face__role">Special Advisor to the Custodian of the Two Holy Mosques</p><p class="face__at">AHIC 2009</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/prince-turki-alfaisal-bin-abdulaziz-al-saud.webp" type="image/webp"><img src="/corporate/assets/img/speakers/prince-turki-alfaisal-bin-abdulaziz-al-saud.jpg" alt="" loading="lazy" width="428" height="535"></picture><p class="face__name">H.R.H. Prince Turki AlFaisal bin Abdulaziz Al Saud</p><p class="face__role">Chairman of the Board of Directors, King Faisal Center for Research and Islamic Studies</p><p class="face__at">FHS Saudi Arabia 2026</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/shaikha-al-nowais.webp" type="image/webp"><img src="/corporate/assets/img/speakers/shaikha-al-nowais.jpg" alt="" loading="lazy" width="516" height="645"></picture><p class="face__name">H.E. Shaikha Al Nowais</p><p class="face__role">Secretary-General, UN Tourism</p><p class="face__at">FHS World 2025</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/abdulla-bin-touq-al-marri.webp" type="image/webp"><img src="/corporate/assets/img/speakers/abdulla-bin-touq-al-marri.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">H.E. Abdulla bin Touq Al Marri</p><p class="face__role">Minister of Economy and Tourism, United Arab Emirates</p><p class="face__at">FHS World 2025</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/patricia-de-lille.webp" type="image/webp"><img src="/corporate/assets/img/speakers/patricia-de-lille.jpg" alt="" loading="lazy" width="248" height="310"></picture><p class="face__name">H.E. Patricia de Lille</p><p class="face__role">Minister of Tourism, Republic of South Africa</p><p class="face__at">FHS World 2025</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/fatim-zahra-ammor.webp" type="image/webp"><img src="/corporate/assets/img/speakers/fatim-zahra-ammor.jpg" alt="" loading="lazy" width="528" height="660"></picture><p class="face__name">Fatim-Zahra Ammor</p><p class="face__role">Former Minister of Tourism, Crafts and Social and Solidarity Economy, Kingdom of Morocco</p><p class="face__at">FHS World 2024</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/peninah-malonza.webp" type="image/webp"><img src="/corporate/assets/img/speakers/peninah-malonza.jpg" alt="" loading="lazy" width="312" height="389"></picture><p class="face__name">Peninah Malonza</p><p class="face__role">Former Cabinet Secretary, Ministry of Tourism, Wildlife and Heritage, Kenya</p><p class="face__at">AHIF 2023</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/mahmoud-abdulhadi.webp" type="image/webp"><img src="/corporate/assets/img/speakers/mahmoud-abdulhadi.jpg" alt="" loading="lazy" width="353" height="442"></picture><p class="face__name">Mahmoud Abdulhadi</p><p class="face__role">Deputy Minister, Destination Enablement, Ministry of Tourism of Saudi Arabia</p><p class="face__at">FHS Saudi Arabia 2026</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/dr-ghada-shalaby.webp" type="image/webp"><img src="/corporate/assets/img/speakers/dr-ghada-shalaby.jpg" alt="" loading="lazy" width="484" height="606"></picture><p class="face__name">H.E. Dr. Ghada Shalaby</p><p class="face__role">Former Vice Minister of Tourism and Antiquities, Arab Republic of Egypt</p><p class="face__at">FHS 2023</p></li>
</ul>
  <p class="wrap stage__more"><a class="link" href="/#stage-title">All 24 speakers <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a> &nbsp; <a class="link" href="/award-winners">Award winners since 2005 <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a></p>
</section>

<!-- CLOSE -->
<section class="ab-close" aria-labelledby="close-title">
  <div class="wrap ab-close__grid">
    <h2 class="h2" id="close-title">Work with <br>FHS</h2>
    <ul class="ab-close__links" role="list">
      <li><a href="/fhs-marketing-opportunities"><span>Partner with FHS</span><span class="ab-close__note">Partnership and content opportunities across the FHS platform</span><svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a></li>
      <li><a href="/contact"><span>Contact the team</span><span class="ab-close__note">Partnerships, investor relations, marketing and PR, programme, operations</span><svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a></li>
      <li><a href="/fhs-club"><span>FHS Club</span><span class="ab-close__note">The loyalty programme for returning delegates</span><svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a></li>
    </ul>
  </div>
</section>

</main>

<footer class="foot">
  <div class="wrap foot__grid">
    <div class="foot__brand">
      <img src="/corporate/assets/logos/fhs-logo-reversa.svg" alt="FHS, Future Hospitality Summit" width="126" height="50">
      <p>Invest in our future</p>
    </div>
    <nav class="foot__col" aria-label="Summits">
      <p class="foot__h">Summits</p>
      <a href="/egypt">FHS Egypt</a>
      <a href="/living">FHS Living</a>
      <a href="https://brahic.com/">BRAHIC</a>
      <a href="/sa">FHS Saudi Arabia</a>
      <a href="/africa">FHS Africa</a>
      <a href="/world">FHS World</a>
    </nav>
    <nav class="foot__col" aria-label="FHS">
      <p class="foot__h">FHS</p>
      <a href="/about-fhs">About FHS</a>
      <a href="/content-library">Content library</a>
      <a href="/award-winners">Award winners</a>
      <a href="/fhs-club">FHS Club</a>
      <a href="/fhs-marketing-opportunities">Partner with FHS</a>
    </nav>
    <nav class="foot__col" aria-label="Follow FHS">
      <p class="foot__h">Follow</p>
      <a href="https://www.linkedin.com/showcase/fhs-future-hospitality-summit/">LinkedIn</a>
      <a href="https://www.youtube.com/channel/UCy0A4W7Y7mJinSJqWOryVQQ">YouTube</a>
      <a href="https://www.instagram.com/futurehospitalitysummit/">Instagram</a>
      <a href="https://twitter.com/FuturHospSummit">X</a>
      <a href="https://www.facebook.com/Future-Hospitality-Investment-Summit-108706592081912">Facebook</a>
    </nav>
  </div>
  <div class="wrap foot__base">
    <p>Future Hospitality Summit is organised by <a href="https://www.thebench.com/">The Bench</a>.</p>
    <p><a href="/contact">Contact</a> · <a href="/fhs-advisory-board-terms">Advisory Board terms</a> · <a href="/code-of-conduct">Code of conduct</a> · <a href="/terms-and-conditions">Terms and conditions</a></p>
  </div>
</footer>
`

const page = {
	title: "About FHS | Future Hospitality Summit",
	description: "Future Hospitality Summit is where hospitality’s investment decision-makers connect, exchange knowledge and explore new partnerships. Organised by The Bench.",
	css: ["pages/about.css"],
	js: [],
	html,
}

export default page
