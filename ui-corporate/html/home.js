// The page's markup, as designed in the FHS corporate sample (generated once by its tools/port/sync_app.py, then
// edited here). <!--slot:name--> pairs mark the sections ui-corporate/lib/cms.js fills from the CMS; what is
// saved between them shows whenever the CMS cannot be read. Server-side only: import it in getStaticProps.
const html = String.raw`<a class="skip" href="#main">Skip to content</a>

<header class="top" data-top>
  <a class="top__logo" href="/" aria-label="Future Hospitality Summit, home">
    <img src="/corporate/assets/logos/fhs-logo-reversa.svg" alt="" width="96" height="38">
  </a>
  <nav class="top__nav" id="menu" aria-label="Main">
    <a href="/#season">Events</a>
    <a href="/about-fhs">About</a>
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


<!-- HERO: the room first; scrolling pulls back until the film sits inside the FHS mark (it is a play button) -->
<section class="hero" aria-labelledby="hero-title" data-hero>
  <div class="hero__stage" data-stage>
    <video class="hero__film" data-film muted playsinline loop preload="none" aria-hidden="true"
           poster="/corporate/assets/img/film/poster.webp">
      <source data-src="https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1/fhs-film-1080.mp4" data-src-mid="https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1/fhs-film-720.mp4" data-src-small="https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1/fhs-film-540.mp4" type="video/mp4">
      <source data-src="https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1/fhs-film-1080.webm" data-src-mid="https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1/fhs-film-720.webm" data-src-small="https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1/fhs-film-540.webm" type="video/webm">
    </video>

    <div class="hero__veil" data-veil aria-hidden="true"></div>
    <svg class="hero__art" data-art viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g data-mark transform="translate(864.4 -317.5) scale(4.5687)">
        <path class="veil" fill-rule="evenodd" d="M-3000 -3000H3000V3000H-3000Z M57.971 77.172L57.931 128.7L102.549 102.931Z"/>
        <path class="f-l" d="M29.004 199.329L0 182.584L0.007 16.739L52.294 46.927L28.999 60.442L29.004 111.999L81.299 142.192L57.971 155.688L29.004 138.961L29.004 199.329Z"/>
        <path class="f-l" d="M102.549 102.931L52.288 73.888L75.64 60.406L102.58 75.96L102.549 102.931Z"/>
        <path class="f-t" d="M0.007 16.739L28.998 0L178.265 86.182L125.923 116.402L125.93 89.441L75.64 60.406L28.998 87.334L28.998 60.442L52.294 46.927L0.007 16.739Z"/>
        <path class="f-t" d="M102.549 102.931L57.931 128.701L81.299 142.192L102.58 129.88L102.549 102.931Z"/>
        <path class="f-r" d="M178.265 86.182L178.265 113.147L29.004 199.329L29.004 138.961L57.971 155.688L102.58 129.879L102.58 75.959L125.93 89.44L125.924 116.401L178.265 86.182Z"/>
        <path class="f-r" d="M57.931 128.7L57.971 77.172L52.288 73.888L28.999 87.334L29.004 111.999L57.931 128.7Z"/>
      </g>
    </svg>

    <div class="hero__over" data-panel>
      <h1 class="hero__title" id="hero-title">Where hospitality <br>meets capital</h1>
      <p class="hero__lede">Future Hospitality Summit brings the investors, owners, operators and governments who shape hospitality into one room. Six summits on four continents this season.</p>
        <dl class="figs" aria-label="The FHS series in 2025">
          <div><dt>C-level decision-makers</dt><dd>3,000+</dd></div>
          <div><dt>Investors</dt><dd>621</dd></div>
          <div><dt>Assets under management</dt><dd>USD 11tn</dd></div>
          <div><dt>Hotel signings on stage</dt><dd>29</dd></div>
        </dl>
        <p class="figs__src">The FHS series in 2025</p>
    </div>

    <nav class="hero__bar" aria-label="The 2026–27 season" data-bar>
      <ol class="bar">
        <li data-ends="2026-11-11" style="--ev:#F5812C"><a class="bar__item is-next" href="/egypt">
          <img class="bar__logo bar__logo--egypt" src="/corporate/assets/logos/events/fhs-egypt.png" alt="FHS Egypt" width="392" height="200">
          <span class="bar__city">Cairo<span class="bar__flag">Next</span></span><time datetime="2026-11-10">10–11 November 2026</time></a></li>
        <li data-ends="2027-02-24" style="--ev:#9F007E"><a class="bar__item" href="/living">
          <img class="bar__logo bar__logo--living" src="/corporate/assets/logos/events/fhs-living.png" alt="FHS Living" width="392" height="200">
          <span class="bar__city">Paris</span><time datetime="2027-02-23">23–24 February 2027</time></a></li>
        <li data-ends="2027-03-16" style="--ev:#C89868"><a class="bar__item" href="https://brahic.com/">
          <img class="bar__logo bar__logo--brahic" src="/corporate/assets/logos/events/brahic.png" alt="BRAHIC" width="816" height="200">
          <span class="bar__city">Rio de Janeiro</span><time datetime="2027-03-15">15–16 March 2027</time></a></li>
        <li data-ends="2027-04-14" style="--ev:#DFA46E"><a class="bar__item" href="/sa">
          <img class="bar__logo bar__logo--sa" src="/corporate/assets/logos/events/fhs-saudi-arabia-madinah.png" alt="FHS Saudi Arabia Madinah Edition" width="562" height="200">
          <span class="bar__city">Madinah</span><time datetime="2027-04-13">13–14 April 2027</time></a></li>
        <li data-ends="2027-04-29" style="--ev:#FC4C02"><a class="bar__item" href="/africa">
          <img class="bar__logo bar__logo--africa" src="/corporate/assets/logos/events/fhs-africa.png" alt="FHS Africa" width="392" height="200">
          <span class="bar__city">Kampala</span><time datetime="2027-04-28">28–29 April 2027</time></a></li>
        <li data-ends="2027-11-30" style="--ev:#EF3340"><a class="bar__item" href="/world">
          <img class="bar__logo bar__logo--world" src="/corporate/assets/logos/events/fhs-world.png" alt="FHS World" width="392" height="200">
          <span class="bar__city">Ras Al Khaimah</span><time datetime="2027-11">November 2027</time></a></li>
      </ol>
    </nav>

    <p class="hero__cover" data-cover aria-hidden="true"><span class="hero__cover-t">Invest in <br>our future</span><span class="hero__cover-d">The 2026–27 season</span></p>
    <button class="film-toggle" type="button" data-film-toggle aria-pressed="false" hidden>
      <svg viewBox="0 0 12 12" aria-hidden="true"><path class="i-pause" d="M2 1h3v10H2zM7 1h3v10H7z"/><path class="i-play" d="M2.2 .8L2.2 11.2L11.2 6Z"/></svg>
      <span data-film-label>Pause film</span>
    </button>
  </div>
</section>

<!-- THE SEASON -->
<section class="season" id="season" aria-labelledby="season-title">
  <div class="wrap season__head">
    <h2 class="h2" id="season-title">The 2026–27 <br>season</h2>
    <p class="season__intro">One platform, six rooms on four continents. Each summit is built for its market, with its own programme, investors and partners. Choose yours.</p>
  </div>
  <div class="wrap season__body">
    <ol class="index" data-index>
      <li class="index__item is-active" data-ends="2026-11-11" data-photo="cairo" style="--ev:#F5812C">
        <a class="index__link" href="/egypt">
          <span class="index__city">Cairo</span>
          <span class="index__meta">
            <img class="index__logo" src="/corporate/assets/logos/events/fhs-egypt.png" alt="FHS Egypt" width="392" height="200" loading="lazy">
            <time datetime="2026-11-10">10–11 November 2026</time>
            <span class="index__venue">Sofitel Downtown Cairo Nile</span>
          </span>
          <span class="index__note">First edition. FHS Living day on 11 November.</span>
          <span class="index__go">Visit FHS Egypt <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
        </a>
        <div class="index__thumb"><picture><source srcset="/corporate/assets/img/season/cairo-1.webp" type="image/webp"><img src="/corporate/assets/img/season/cairo-1.jpg" alt="Five panellists in conversation on an open-air stage in Cairo, the FHS Egypt panel screen behind them" loading="lazy" width="1400" height="933"></picture><picture><source srcset="/corporate/assets/img/season/cairo-2.webp" type="image/webp"><img src="/corporate/assets/img/season/cairo-2.jpg" alt="Two women in conversation with drinks at the FHS Egypt launch reception terrace in Cairo" loading="lazy" width="900" height="600"></picture><picture><source srcset="/corporate/assets/img/season/cairo-3.webp" type="image/webp"><img src="/corporate/assets/img/season/cairo-3.jpg" alt="Guests seated on an open-air terrace in Cairo watching a presentation at the FHS Egypt launch reception" loading="lazy" width="900" height="600"></picture></div>
      </li>
      <li class="index__item" data-ends="2027-02-24" data-photo="paris" style="--ev:#9F007E">
        <a class="index__link" href="/living">
          <span class="index__city">Paris</span>
          <span class="index__meta">
            <img class="index__logo" src="/corporate/assets/logos/events/fhs-living.png" alt="FHS Living" width="392" height="200" loading="lazy">
            <time datetime="2027-02-23">23–24 February 2027</time>
            <span class="index__venue">Pullman Paris Montparnasse</span>
          </span>
          <span class="index__note">Founding Edition. Where hospitality reimagines real estate.</span>
          <span class="index__go">Visit FHS Living <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
        </a>
        <div class="index__thumb"><picture><source srcset="/corporate/assets/img/season/paris-1.webp" type="image/webp"><img src="/corporate/assets/img/season/paris-1.jpg" alt="Two speakers in a fireside conversation on the FHS Living session stage" loading="lazy" width="1400" height="933"></picture><picture><source srcset="/corporate/assets/img/season/paris-2.webp" type="image/webp"><img src="/corporate/assets/img/season/paris-2.jpg" alt="A man and a woman in conversation at the FHS Living advisory board reception" loading="lazy" width="900" height="600"></picture><picture><source srcset="/corporate/assets/img/season/paris-3.webp" type="image/webp"><img src="/corporate/assets/img/season/paris-3.jpg" alt="An advisory board member speaks into a microphone during the FHS Living advisory board session" loading="lazy" width="900" height="600"></picture></div>
      </li>
      <li class="index__item" data-ends="2027-03-16" data-photo="rio" style="--ev:#C89868">
        <a class="index__link" href="https://brahic.com/">
          <span class="index__city">Rio de <br class="br-wide">Janeiro</span>
          <span class="index__meta">
            <img class="index__logo index__logo--brahic" src="/corporate/assets/logos/events/brahic.png" alt="BRAHIC" width="816" height="200" loading="lazy">
            <time datetime="2027-03-15">15–16 March 2027</time>
            <span class="index__venue">Rio de Janeiro, Brazil</span>
          </span>
          <span class="index__note">First edition. The Brazil Hospitality, Tourism and Real Estate Investment Forum, created by SAHIC.</span>
          <span class="index__go">Visit BRAHIC <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
        </a>
        <div class="index__thumb"><picture><source srcset="/corporate/assets/img/season/rio-1.webp" type="image/webp"><img src="/corporate/assets/img/season/rio-1.jpg" alt="Four panellists on the SAHIC stage in Rio de Janeiro discussing branded residences in Latin America" loading="lazy" width="1400" height="933"></picture><picture><source srcset="/corporate/assets/img/season/rio-2.webp" type="image/webp"><img src="/corporate/assets/img/season/rio-2.jpg" alt="Three delegates smiling and toasting with sparkling wine at the SAHIC evening reception in Rio" loading="lazy" width="900" height="600"></picture><picture><source srcset="/corporate/assets/img/season/rio-3.webp" type="image/webp"><img src="/corporate/assets/img/season/rio-3.jpg" alt="A delegate speaks into a microphone from the audience during an interactive SAHIC session" loading="lazy" width="900" height="600"></picture></div>
      </li>
      <li class="index__item" data-ends="2027-04-14" data-photo="riyadh" style="--ev:#DFA46E">
        <a class="index__link" href="/sa">
          <span class="index__city">Madinah</span>
          <span class="index__meta">
            <img class="index__logo" src="/corporate/assets/logos/events/fhs-saudi-arabia-madinah.png" alt="FHS Saudi Arabia Madinah Edition" width="562" height="200" loading="lazy">
            <time datetime="2027-04-13">13–14 April 2027</time>
            <span class="index__venue">DoubleTree by Hilton at Madinah Gate</span>
          </span>
          <span class="index__note">The Kingdom’s hospitality investment summit comes to Madinah for the first time.</span>
          <span class="index__go">Visit FHS Saudi Arabia <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
        </a>
        <div class="index__thumb"><picture><source srcset="/corporate/assets/img/season/riyadh-1.webp" type="image/webp"><img src="/corporate/assets/img/season/riyadh-1.jpg" alt="A speaker addresses a packed Summit Stage hall at FHS Saudi Arabia in Riyadh" loading="lazy" width="1400" height="933"></picture><picture><source srcset="/corporate/assets/img/season/riyadh-2.webp" type="image/webp"><img src="/corporate/assets/img/season/riyadh-2.jpg" alt="Delegates networking in the evening inside a glass-lattice walkway at FHS Saudi Arabia" loading="lazy" width="900" height="600"></picture><picture><source srcset="/corporate/assets/img/season/riyadh-3.webp" type="image/webp"><img src="/corporate/assets/img/season/riyadh-3.jpg" alt="Two smiling women hold cards with their names written in Arabic calligraphy at FHS Saudi Arabia" loading="lazy" width="900" height="600"></picture></div>
      </li>
      <li class="index__item" data-ends="2027-04-29" data-photo="kampala" style="--ev:#FC4C02">
        <a class="index__link" href="/africa">
          <span class="index__city">Kampala</span>
          <span class="index__meta">
            <img class="index__logo" src="/corporate/assets/logos/events/fhs-africa.png" alt="FHS Africa" width="392" height="200" loading="lazy">
            <time datetime="2027-04-28">28–29 April 2027</time>
            <span class="index__venue">Speke Resort Convention Centre, Munyonyo</span>
          </span>
          <span class="index__note">Africa’s hotel investment summit, formerly AHIF. Host partner: Uganda Tourism Board.</span>
          <span class="index__go">Visit FHS Africa <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
        </a>
        <div class="index__thumb"><picture><source srcset="/corporate/assets/img/season/kampala-1.webp" type="image/webp"><img src="/corporate/assets/img/season/kampala-1.jpg" alt="A speaker addresses a full room from the red FHS Africa Summit Stage" loading="lazy" width="1400" height="933"></picture><picture><source srcset="/corporate/assets/img/season/kampala-2.webp" type="image/webp"><img src="/corporate/assets/img/season/kampala-2.jpg" alt="Three women delegates in conversation beside the Summit Stage sign at FHS Africa" loading="lazy" width="900" height="600"></picture><picture><source srcset="/corporate/assets/img/season/kampala-3.webp" type="image/webp"><img src="/corporate/assets/img/season/kampala-3.jpg" alt="Group of delegates in orange FHS Africa shirts cheering on a stadium running track" loading="lazy" width="900" height="600"></picture></div>
      </li>
      <li class="index__item" data-ends="2027-11-30" data-photo="rak" style="--ev:#EF3340">
        <a class="index__link" href="/world">
          <span class="index__city">Ras Al <br class="br-wide">Khaimah</span>
          <span class="index__meta">
            <img class="index__logo" src="/corporate/assets/logos/events/fhs-world.png" alt="FHS World" width="392" height="200" loading="lazy">
            <time datetime="2027-11">November 2027</time>
            <span class="index__venue">Wynn Al Marjan Island</span>
          </span>
          <span class="index__note">The flagship moves from Dubai to Ras Al Khaimah for 2027.</span>
          <span class="index__go">Visit FHS World <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
        </a>
        <div class="index__thumb"><picture><source srcset="/corporate/assets/img/season/rak-1.webp" type="image/webp"><img src="/corporate/assets/img/season/rak-1.jpg" alt="Four panellists on the FHS World Summit Stage in front of an audience" loading="lazy" width="1400" height="933"></picture><picture><source srcset="/corporate/assets/img/season/rak-2.webp" type="image/webp"><img src="/corporate/assets/img/season/rak-2.jpg" alt="A group of delegates laughing and posing together at an FHS World evening networking event" loading="lazy" width="900" height="600"></picture><picture><source srcset="/corporate/assets/img/season/rak-3.webp" type="image/webp"><img src="/corporate/assets/img/season/rak-3.jpg" alt="Delegates walking through the warm-lit Madinat Jumeirah arcade at FHS World" loading="lazy" width="900" height="600"></picture></div>
      </li>
    </ol>
    <div class="season__view" aria-hidden="true" data-view>
      <div class="season__frame"></div>
    </div>
  </div>
</section>

<!-- SIGNED ON STAGE -->
<section class="signed" aria-labelledby="signed-title">
  <div class="wrap signed__head">
    <h2 class="h2" id="signed-title">Signed <br>on stage</h2>
    <p class="signed__sum">In 2025 the FHS series brought together <strong>3,000+</strong> C-level decision-makers, including <strong>621 investors</strong> representing over <strong>USD 11tn</strong> in assets under management. It facilitated <strong>USD 3bn</strong> in business opportunities, and <strong>29 hotel signings</strong> were announced on stage. These are some of the latest.</p>
  </div>
  <div class="wrap signed__body">
    <figure class="signed__photo" data-deal-photos aria-hidden="true">
      <picture data-deal="blacksand" class="is-on"><source srcset="/corporate/assets/img/deals/blacksand-marriott.webp" type="image/webp"><img src="/corporate/assets/img/deals/blacksand-marriott.jpg" alt="" loading="lazy" width="1200" height="800"></picture>
      <picture data-deal="shaza"><source srcset="/corporate/assets/img/deals/shaza-riyadh.webp" type="image/webp"><img src="/corporate/assets/img/deals/shaza-riyadh.jpg" alt="" loading="lazy" width="1200" height="800"></picture>
      <picture data-deal="erbil"><source srcset="/corporate/assets/img/deals/movenpick-erbil.webp" type="image/webp"><img src="/corporate/assets/img/deals/movenpick-erbil.jpg" alt="" loading="lazy" width="1200" height="800"></picture>
    </figure>
    <ol class="ledger" data-ledger>
      <li><a href="/sa/content-library/blacksand-and-marriott-international-announce-landmark-deal-to-open-10-hotels-in-saudi-arabia" data-deal-key="blacksand">
        <span class="ledger__who">Blacksand and Marriott International</span>
        <span class="ledger__what">Ten hotels across Saudi Arabia, from luxury to long-stay</span><span class="ledger__fig">USD 1.33bn</span><span class="ledger__ed">FHS Saudi Arabia 2026</span></a></li>
      <li><a href="/sa/content-library/minor-hotels-signs-first-nh-hotels-resorts-property-in-the-middle-east-with-debut-in-saudi-arabia">
        <span class="ledger__who">Minor Hotels and Heyazah</span>
        <span class="ledger__what">The first NH Hotels &amp; Resorts property in the Middle East, Riyadh</span><span class="ledger__fig">121 keys</span><span class="ledger__ed">FHS Saudi Arabia 2026</span></a></li>
      <li><a href="/sa/content-library/shaza-hotels-expands-saudi-arabia-portfolio-with-signing-of-shaza-riyadh-stables-resort" data-deal-key="shaza">
        <span class="ledger__who">Shaza Hotels and FSM Hospitality</span>
        <span class="ledger__what">Shaza Riyadh Stables Resort, an equestrian resort in Al Jubailah</span><span class="ledger__fig">120 keys</span><span class="ledger__ed">FHS Saudi Arabia 2026</span></a></li>
      <li><a href="/world/content-library/accor-and-krd-holding-sign-m%C3%B6venpick-erbil-gomaspan-resort-a-landmark-lakefront-destination-in-iraq" data-deal-key="erbil">
        <span class="ledger__who">Accor and KRD Holding</span>
        <span class="ledger__what">Mövenpick Erbil Gomaspan Resort, a lakefront resort in Iraq</span><span class="ledger__fig">150 keys</span><span class="ledger__ed">FHS World 2026</span></a></li>
      <li><a href="/world/content-library/ihg-hotels-resorts-to-bring-its-midscale-brand-garner-hotels-to-the-middle-east-with-a-dual-signing-in-the-uae">
        <span class="ledger__who">IHG Hotels &amp; Resorts</span>
        <span class="ledger__what">Garner Hotels comes to the Middle East: Dubai and Ras Al Khaimah</span><span class="ledger__fig">2 hotels</span><span class="ledger__ed">FHS World 2026</span></a></li>
      <li><a href="/world/content-library/knowledge-economic-city-signs-exclusive-brokerage-agreements-with-keller-williams-saudi-arabia-and-re-max-smart-concept-at-fhs-world-2026">
        <span class="ledger__who">Knowledge Economic City, Keller Williams and RE/MAX</span>
        <span class="ledger__what">Exclusive brokerage for about 368 residences at Al Alyaa, Madinah</span><span class="ledger__fig">368 homes</span><span class="ledger__ed">FHS World 2026</span></a></li>
      <li><a href="/world/content-library/accor-and-mayan-properties-sign-master-development-agreement-for-five-hotels-in-africa">
        <span class="ledger__who">Accor and Mayan Properties</span>
        <span class="ledger__what">Five hotels across Sub-Saharan Africa</span><span class="ledger__fig">1,100 keys</span><span class="ledger__ed">FHS World 2025</span></a></li>
      <li><a href="/world/content-library/accor-expands-its-luxury-portfolio-in-saudi-arabia-with-the-signing-of-sofitel-jabal-omar-makkah">
        <span class="ledger__who">Accor</span>
        <span class="ledger__what">Sofitel Jabal Omar Makkah, within walking distance of the Holy Mosque</span><span class="ledger__fig">1,141 rooms</span><span class="ledger__ed">FHS World 2025</span></a></li>
    </ol>
  </div>
  <p class="wrap signed__src">2025 series totals: The Bench, June 2026. Signings as announced in the FHS press room.</p>
</section>

<!-- THE ROOM: a ribbon of real FHS photography -->
<section class="ribbon" aria-label="Moments from FHS summits">
  <div class="ribbon__track">
    <ul class="ribbon__set" role="list">
      <li><picture><source srcset="/corporate/assets/img/ribbon/03.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/03.jpg" alt="The opening of FHS Saudi Arabia 2026 under stage lights, a packed hall" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/09.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/09.jpg" alt="Sir Tim Clark, President of Emirates, in conversation on the FHS World 2026 stage" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/28.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/28.jpg" alt="Delegates turned in their seats, mid-conversation, at FHS World 2026" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/19.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/19.jpg" alt="The First Group Hospitality and Marriott International sign on stage at FHS World 2025" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/36.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/36.jpg" alt="The FHS World 2025 beach party with a live band, the Burj Al Arab lit behind" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/04.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/04.jpg" alt="A full house for the plenary at FHS Africa 2026" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/13.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/13.jpg" alt="Mahmoud Abdulhadi, Deputy Minister of Tourism, in conversation at FHS Saudi Arabia 2026" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/29.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/29.jpg" alt="Two delegates sharing a laugh at the FHS Africa 2026 evening reception" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/31.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/31.jpg" alt="H.E. Abdulla bin Touq Al Marri receives the FHS Leadership Award at FHS World 2026" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/21.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/21.jpg" alt="Pen to paper on the FHS Africa 2026 stage" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/30.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/30.jpg" alt="Old friends greeting at the FHS Living launch reception" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/40.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/40.jpg" alt="A golden-hour rooftop reception in Cairo at the FHS Egypt launch" loading="lazy" width="1100" height="733"></picture></li>
    </ul>
    <ul class="ribbon__set" role="list" aria-hidden="true">
      <li><picture><source srcset="/corporate/assets/img/ribbon/03.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/03.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/09.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/09.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/28.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/28.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/19.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/19.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/36.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/36.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/04.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/04.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/13.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/13.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/29.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/29.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/31.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/31.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/21.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/21.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/30.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/30.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
      <li><picture><source srcset="/corporate/assets/img/ribbon/40.webp" type="image/webp"><img src="/corporate/assets/img/ribbon/40.jpg" alt="" loading="lazy" width="1100" height="733"></picture></li>
    </ul>
  </div>
</section>

<!-- WHO TAKES THE STAGE -->
<section class="stage" aria-labelledby="stage-title">
  <div class="wrap stage__head">
    <h2 class="h2" id="stage-title">Who takes <br>the stage</h2>
    <p class="stage__intro">Royalty, a prime minister, ministers and the chief executives of Hilton, Accor, Emirates and Emaar have taken the FHS stage. Titles as of October 2026.</p>
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
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/juliana-kagwa.webp" type="image/webp"><img src="/corporate/assets/img/speakers/juliana-kagwa.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">Juliana Kagwa</p><p class="face__role">Chief Executive Officer, Uganda Tourism Board</p><p class="face__at">FHS Africa 2026</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/christopher-j-nassetta.webp" type="image/webp"><img src="/corporate/assets/img/speakers/christopher-j-nassetta.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">Christopher J. Nassetta</p><p class="face__role">President and CEO, Hilton</p><p class="face__at">AHIC 2017</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/s-bastien-bazin.webp" type="image/webp"><img src="/corporate/assets/img/speakers/s-bastien-bazin.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">Sébastien Bazin</p><p class="face__role">Chairman and CEO, Accor</p><p class="face__at">FHS World 2024</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/mohamed-alabbar.webp" type="image/webp"><img src="/corporate/assets/img/speakers/mohamed-alabbar.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">H.E. Mohamed Alabbar</p><p class="face__role">Founder and Managing Director, Emaar Properties; Chairman, Eagle Hills</p><p class="face__at">FHS 2023</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/john-pagano.webp" type="image/webp"><img src="/corporate/assets/img/speakers/john-pagano.jpg" alt="" loading="lazy" width="478" height="597"></picture><p class="face__name">John Pagano</p><p class="face__role">Group Chief Executive Officer, Red Sea Global</p><p class="face__at">FHS 2020</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/jerry-inzerillo.webp" type="image/webp"><img src="/corporate/assets/img/speakers/jerry-inzerillo.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">Jerry Inzerillo</p><p class="face__role">Group CEO, Diriyah Company</p><p class="face__at">FHS Saudi Arabia 2025</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/william-e-heinecke.webp" type="image/webp"><img src="/corporate/assets/img/speakers/william-e-heinecke.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">William E. Heinecke</p><p class="face__role">Founder and Chairman, Minor International</p><p class="face__at">FHS 2023</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/federico-j-gonz-lez.webp" type="image/webp"><img src="/corporate/assets/img/speakers/federico-j-gonz-lez.jpg" alt="" loading="lazy" width="499" height="624"></picture><p class="face__name">Federico J. González</p><p class="face__role">Chief Executive Officer, Radisson Hotel Group</p><p class="face__at">FHS Saudi Arabia 2022</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/puneet-chhatwal.webp" type="image/webp"><img src="/corporate/assets/img/speakers/puneet-chhatwal.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">Puneet Chhatwal</p><p class="face__role">Managing Director and CEO, The Indian Hotels Company Limited (IHCL)</p><p class="face__at">FHS World 2024</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/james-riley.webp" type="image/webp"><img src="/corporate/assets/img/speakers/james-riley.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">James Riley</p><p class="face__role">Former Group Chief Executive, Mandarin Oriental Hotel Group</p><p class="face__at">FHS Saudi Arabia 2023</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/ren-nijhof.webp" type="image/webp"><img src="/corporate/assets/img/speakers/ren-nijhof.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">René Nijhof</p><p class="face__role">Chairman of the Board of Directors, Kempinski Hotels SA</p><p class="face__at">FHS World 2026</p></li>
  <li class="face"><picture><source srcset="/corporate/assets/img/speakers/nasser-al-nowais.webp" type="image/webp"><img src="/corporate/assets/img/speakers/nasser-al-nowais.jpg" alt="" loading="lazy" width="560" height="700"></picture><p class="face__name">Nasser Al Nowais</p><p class="face__role">Chairman, Rotana Hotel Management Corporation</p><p class="face__at">FHS World 2025</p></li>
</ul>
  <p class="wrap stage__more"><a class="link" href="/award-winners">Award winners since 2005 <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a></p>
</section>

<!-- BETWEEN SUMMITS -->
<section class="between" aria-labelledby="between-title">
  <div class="wrap between__head">
    <h2 class="h2" id="between-title">Between <br>summits</h2>
    <p class="between__intro">The conversation keeps going. Session films, the FHS Podcast and news from the people building hospitality’s next decade.</p>
  </div>
  <div class="wrap between__grid">
    <div class="films">
      <div class="film" data-yt="hOCycDUSUyw" data-yt-title="Skin in the game: the future of hospitality operating models">
        <button class="film__play" type="button" aria-label="Play the session film: Skin in the Game">
          <picture><source srcset="/corporate/assets/img/films/hOCycDUSUyw.webp" type="image/webp"><img src="/corporate/assets/img/films/hOCycDUSUyw.jpg" alt="" loading="lazy" width="1280" height="720"></picture>
          <span class="film__btn" aria-hidden="true"><svg viewBox="57.9 77.1 44.7 51.6"><path d="M57.971 77.172L57.931 128.7L102.549 102.931Z"/></svg></span>
        </button>
      </div>
      <h3 class="film__title">Skin in the game: the future of hospitality operating models</h3>
      <p class="film__meta">Session film · 36 minutes</p>
      <ul class="films__more" role="list">
        <li><a href="https://www.youtube.com/watch?v=BWO3lREu544"><picture><source srcset="/corporate/assets/img/films/BWO3lREu544.webp" type="image/webp"><img src="/corporate/assets/img/films/BWO3lREu544.jpg" alt="" loading="lazy" width="960" height="540"></picture><span>Winning the owner: the new rules of global development</span></a></li>
        <li><a href="https://www.youtube.com/watch?v=8_S7L47S8Zo"><picture><source srcset="/corporate/assets/img/films/8_S7L47S8Zo.webp" type="image/webp"><img src="/corporate/assets/img/films/8_S7L47S8Zo.jpg" alt="" loading="lazy" width="960" height="540"></picture><span>Hospitality REITs: a new investment architecture for the Middle East</span></a></li>
      </ul>
    </div>
    <div class="reads">
      <h3 class="reads__h">The FHS Podcast</h3>
      <ul class="reads__list" role="list"><!--slot:podcasts-->
        <li><a href="/world/content-library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospitality-investment"><img src="/corporate/assets/img/library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospita.webp" alt="" loading="lazy" width="960" height="540"><span class="reads__t">Episode 171: Beyond the Numbers: Risk, Resilience & the Future of Hospitality Investment</span><time datetime="2026-11-08">08 November 2026</time></a></li>
        <li><a href="/egypt/content-library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience"><img src="/corporate/assets/img/library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience.webp" alt="" loading="lazy" width="960" height="540"><span class="reads__t">Episode 172: Rethinking Luxury Travel: Why Emotion Beats Experience</span><time datetime="2026-11-06">06 November 2026</time></a></li>
        <li><a href="/egypt/content-library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-middle-east-and-africa"><img src="/corporate/assets/img/library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-m.webp" alt="" loading="lazy" width="960" height="540"><span class="reads__t">Episode 170: Scaling to 100 Hotels - Aleph Hospitality's Blueprint for Middle East and Africa</span><time datetime="2026-11-05">05 November 2026</time></a></li><!--/slot:podcasts-->
      </ul>
      <h3 class="reads__h">News</h3>
      <ul class="reads__list reads__list--text" role="list"><!--slot:news-->
        <li><a href="/egypt/content-library/radisson-hotel-group-targets-30-properties-in-egypt-by-2030-with-expansion-across-greater-cairo-the-north-coast-and-the-red-sea"><span class="reads__t">Radisson Hotel Group targets 30 properties in Egypt by 2030 with expansion across Greater Cairo, the North Coast and the Red Sea</span><time datetime="2026-11-10">10 November 2026</time></a></li>
        <li><a href="/egypt/content-library/paragon-adeer-and-hilton-sign-cairos-first-canopy-at-sumoublvd"><span class="reads__t">PARAGON | ADEER and Hilton Sign Cairo’s First Canopy at SumouBlvd</span><time datetime="2026-11-10">10 November 2026</time></a></li>
        <li><a href="/egypt/content-library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-at-the-heart-of-history-in-front-of-the-grand-egyptian-museum"><span class="reads__t">MAD Signs MoU with Brassbell Hospitality Group to Elevate Hospitality Landmark at the Heart of History in Front of the Grand Egyptian Museum</span><time datetime="2026-11-10">10 November 2026</time></a></li><!--/slot:news-->
      </ul>
      <a class="link link--dark" href="/content-library">The content library <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a>
    </div>
  </div>
</section>

<!-- HISTORY -->
<section class="history" aria-labelledby="history-title">
  <div class="wrap history__head">
    <h2 class="h2" id="history-title">From Berlin <br>to Rio</h2>
    <p class="history__intro">Almost three decades of building the rooms where hospitality capital meets, from the first investment forum in Berlin to six summits on four continents.</p>
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

<!-- ORGANISED BY THE BENCH -->
<section class="bench" aria-labelledby="bench-title">
  <svg class="bench__mark" viewBox="0 0 178.265 199.329" aria-hidden="true" focusable="false">
    <path class="f-l" d="M29.004 199.329L0 182.584L0.007 16.739L52.294 46.927L28.999 60.442L29.004 111.999L81.299 142.192L57.971 155.688L29.004 138.961L29.004 199.329Z"/>
    <path class="f-l" d="M102.549 102.931L52.288 73.888L75.64 60.406L102.58 75.96L102.549 102.931Z"/>
    <path class="f-t" d="M0.007 16.739L28.998 0L178.265 86.182L125.923 116.402L125.93 89.441L75.64 60.406L28.998 87.334L28.998 60.442L52.294 46.927L0.007 16.739Z"/>
    <path class="f-t" d="M102.549 102.931L57.931 128.701L81.299 142.192L102.58 129.88L102.549 102.931Z"/>
    <path class="f-r" d="M178.265 86.182L178.265 113.147L29.004 199.329L29.004 138.961L57.971 155.688L102.58 129.879L102.58 75.959L125.93 89.44L125.924 116.401L178.265 86.182Z"/>
    <path class="f-r" d="M57.931 128.7L57.971 77.172L52.288 73.888L28.999 87.334L29.004 111.999L57.931 128.7Z"/>
  </svg>
  <div class="wrap bench__grid">
    <h2 class="h2" id="bench-title">Organised by <br>The Bench</h2>
    <div class="bench__copy">
      <p class="bench__lead">The Bench builds the rooms where hospitality’s owners, investors, operators and governments meet, across the Middle East, Africa, Europe and Latin America.</p>
      <p>The Bench has organised hospitality investment events for more than 25 years. Our summits are built with the governments and companies that shape each market: Saudi Arabia’s Ministry of Tourism, the UAE Ministry of Economy and Tourism, the Uganda Tourism Board and, since July 2026, UN Tourism.</p>
      <ul class="bench__people" role="list">
        <li><span>Jonathan Worsley</span>Chairman</li>
        <li><span>Ali Shahid</span>Chief Executive Officer</li>
        <li><span>Matthew Weihs</span>Chief Development Officer</li>
      </ul>
      <p class="bench__links">
        <a class="link" href="/about-fhs">About FHS <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a>
        <a class="link" href="/fhs-club">FHS Club <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a>
        <a class="link" href="/esg">ESG impact <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a>
      </p>
    </div>
  </div>
</section>

<!-- CLOSE -->
<section class="close" aria-labelledby="close-title">
  <div class="wrap close__grid">
    <h2 class="h2" id="close-title">News from <br>the summits</h2>
    <div class="signup">
      <p class="signup__label">Speaker announcements, signings and the next edition’s programme, by email.</p>
      <div class="hsform" id="hs-signup" data-hs-form="0ac4994e-2ec5-4018-aba0-ffb6996bf762"></div>
    </div>
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
	title: "Future Hospitality Summit | Hospitality investment summits",
	description: "Future Hospitality Summit brings hospitality’s investors, owners, operators and governments together at six summits on four continents. Organised by The Bench.",
	css: [],
	js: [],
	html,
}

export default page
