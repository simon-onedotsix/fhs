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
    <a href="/about-fhs">About</a>
    <a href="/content-library">Content library</a>
    <a href="/award-winners" aria-current="page">Award winners</a>
    <a href="/fhs-club">FHS Club</a>
    <a class="top__partner" href="/fhs-marketing-opportunities">Partner with FHS</a>
  </nav>
  <button class="top__menu" type="button" aria-expanded="false" aria-controls="menu" data-menu>
    <span class="top__menu-label">Menu</span><span class="top__menu-bars" aria-hidden="true"></span>
  </button>
</header>

<main id="main">

<section class="phero phero--photo" aria-labelledby="page-title">
  <picture class="phero__photo"><source srcset="/corporate/assets/img/awards/hero.webp" type="image/webp"><img src="/corporate/assets/img/awards/hero.jpg" alt="Award winners on the FHS Saudi Arabia stage" width="2400" height="1350"></picture>
  <div class="phero__panel">
    <div class="phero__copy">
      <h1 class="phero__title" id="page-title">Award winners</h1><p class="phero__lede">Since 2005, Future Hospitality Summit has honoured the people shaping hospitality, from founders and ministers to the leaders of tomorrow.</p>
    </div>
  </div>
</section>

<section class="aw-latest" aria-labelledby="latest-title">
  <!--slot:awardsLatest--><div class="wrap shead ">
  <h2 class="h2" id="latest-title">The 2026 <br>honours</h2><p class="shead__intro">Presented on the FHS World stage in Dubai and the FHS Saudi Arabia stage in Riyadh.</p>
</div>
  <ul class="wrap aw-latest__list" role="list">
    <li class="aw-star">
      <picture class="aw-star__photo"><source srcset="/corporate/assets/img/awards/2026-his-excellency-abdulla-bin-touq-al-marri.webp" type="image/webp"><img src="/corporate/assets/img/awards/2026-his-excellency-abdulla-bin-touq-al-marri.jpg" alt="" width="440" height="550"></picture>
      <p class="aw-star__award">Leadership Award</p>
      <p class="aw-star__name">His Excellency Abdulla bin Touq Al Marri</p><p class="aw-star__role">Minister of Economy and Tourism, UAE</p>
      <p class="aw-star__at">FHS World 2026</p>
    </li>
    <li class="aw-star">
      <picture class="aw-star__photo"><source srcset="/corporate/assets/img/awards/2026-sir-tim-clark.webp" type="image/webp"><img src="/corporate/assets/img/awards/2026-sir-tim-clark.jpg" alt="" width="288" height="360"></picture>
      <p class="aw-star__award">Lifetime Achievement Award</p>
      <p class="aw-star__name">Sir Tim Clark</p><p class="aw-star__role">President, Emirates Airline</p>
      <p class="aw-star__at">FHS World 2026</p>
    </li>
    <li class="aw-star">
      <picture class="aw-star__photo"><source srcset="/corporate/assets/img/awards/2026-muin-serhan.webp" type="image/webp"><img src="/corporate/assets/img/awards/2026-muin-serhan.jpg" alt="" width="440" height="550"></picture>
      <p class="aw-star__award">Leadership Award</p>
      <p class="aw-star__name">Muin Serhan</p><p class="aw-star__role">Chief Executive Officer, Amsa Hospitality</p>
      <p class="aw-star__at">FHS Saudi Arabia 2026</p>
    </li>
  </ul><!--/slot:awardsLatest-->
</section>

<section class="aw-index on-white" aria-labelledby="index-title">
  <!--slot:awardsIndexHead--><div class="wrap shead ">
  <h2 class="h2" id="index-title">Every honour <br>since 2005</h2><p class="shead__intro">37 honours in 18 years, at the UAE summit from AHIC to FHS World and at FHS Saudi Arabia. Titles as FHS records them.</p>
</div><!--/slot:awardsIndexHead-->
  <div class="wrap aw-filter" data-aw-filter hidden>
    <div class="aw-filter__group" role="group" aria-label="Summit">
      <button type="button" data-f="series" data-v="all" aria-pressed="true">All summits</button>
      <button type="button" data-f="series" data-v="uae" aria-pressed="false">AHIC and FHS World</button>
      <button type="button" data-f="series" data-v="sa" aria-pressed="false">FHS Saudi Arabia</button>
    </div>
    <div class="aw-filter__group" role="group" aria-label="Award">
      <button type="button" data-f="kind" data-v="all" aria-pressed="true">All awards</button>
      <button type="button" data-f="kind" data-v="leadership" aria-pressed="false">Leadership</button>
      <button type="button" data-f="kind" data-v="lifetime" aria-pressed="false">Lifetime Achievement</button>
      <button type="button" data-f="kind" data-v="future" aria-pressed="false">Future leaders</button>
      <button type="button" data-f="kind" data-v="other" aria-pressed="false">Other honours</button>
    </div>
    <!--slot:awardsCount--><p class="aw-filter__count" role="status" aria-live="polite" data-aw-count>Showing all 37 honours</p><!--/slot:awardsCount-->
  </div>
  <!--slot:awardsYears--><div class="wrap aw-years">
    <section class="aw-year" aria-labelledby="y2026" data-aw-year>
      <h3 class="aw-year__n" id="y2026">2026</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2026-his-excellency-abdulla-bin-touq-al-marri.webp" type="image/webp"><img src="/corporate/assets/img/awards/2026-his-excellency-abdulla-bin-touq-al-marri.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">His Excellency Abdulla bin Touq Al Marri</p><p class="aw-row__role">Minister of Economy and Tourism, UAE</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2026-sir-tim-clark.webp" type="image/webp"><img src="/corporate/assets/img/awards/2026-sir-tim-clark.jpg" alt="" loading="lazy" width="288" height="360"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Sir Tim Clark</p><p class="aw-row__role">President, Emirates Airline</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="sa" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2026-muin-serhan.webp" type="image/webp"><img src="/corporate/assets/img/awards/2026-muin-serhan.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Muin Serhan</p><p class="aw-row__role">Chief Executive Officer, Amsa Hospitality</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS Saudi Arabia</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2025" data-aw-year>
      <h3 class="aw-year__n" id="y2025">2025</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2025-abdullah-ahmed-al-moosa.webp" type="image/webp"><img src="/corporate/assets/img/awards/2025-abdullah-ahmed-al-moosa.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Abdullah Ahmed Al Moosa</p><p class="aw-row__role">Founder & Chairman, A. A. Al Moosa Enterprises | ARENCO Group</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2025-fadi-alaseri.webp" type="image/webp"><img src="/corporate/assets/img/awards/2025-fadi-alaseri.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Fadi Alaseri</p><p class="aw-row__role">Senior Director Education and Capability Building, Red Sea Global</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="future">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2025-veronica-asthana.webp" type="image/webp"><img src="/corporate/assets/img/awards/2025-veronica-asthana.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Veronica Asthana</p><p class="aw-row__role">Managing Director, miniMAX Hospitality</p>
          </div>
          <p class="aw-row__award">Future Leader Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="sa" data-kind="future">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2025-lama-alqawasmi.webp" type="image/webp"><img src="/corporate/assets/img/awards/2025-lama-alqawasmi.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Lama AlQawasmi</p><p class="aw-row__role">Co-Founder & COO, Hospitality Talents</p>
          </div>
          <p class="aw-row__award">Future Leader Award</p>
          <p class="aw-row__at">FHS Saudi Arabia</p>
        </li>
        <li class="aw-row" data-series="sa" data-kind="other">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2025-narjes-fallatah.webp" type="image/webp"><img src="/corporate/assets/img/awards/2025-narjes-fallatah.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Narjes Fallatah</p><p class="aw-row__role">Revenue Manager, Makkah Clock Royal Tower, A Fairmont Hotel</p>
          </div>
          <p class="aw-row__award">Impact Leader Award</p>
          <p class="aw-row__at">FHS Saudi Arabia</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2024" data-aw-year>
      <h3 class="aw-year__n" id="y2024">2024</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="future">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2024-errikos-christodoulou.webp" type="image/webp"><img src="/corporate/assets/img/awards/2024-errikos-christodoulou.jpg" alt="" loading="lazy" width="290" height="363"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Errikos Christodoulou</p><p class="aw-row__role">Hotel Operations Manager, MarBella Collection</p>
          </div>
          <p class="aw-row__award">Future Leader Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2024-rizwan-kazim.webp" type="image/webp"><img src="/corporate/assets/img/awards/2024-rizwan-kazim.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Rizwan Kazim</p><p class="aw-row__role">Founder & Managing Partner, RIKAS Hospitality Group</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2024-selim-el-zyr.webp" type="image/webp"><img src="/corporate/assets/img/awards/2024-selim-el-zyr.jpg" alt="" loading="lazy" width="183" height="229"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Selim El Zyr</p><p class="aw-row__role">Vice Chairman and Co-Founder, Rotana</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">FHS World</p>
        </li>
        <li class="aw-row" data-series="sa" data-kind="future">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2024-aseel-bondagjy.webp" type="image/webp"><img src="/corporate/assets/img/awards/2024-aseel-bondagjy.jpg" alt="" loading="lazy" width="216" height="270"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Aseel Bondagjy</p><p class="aw-row__role">Hotel Talent Development Manager, NEOM</p>
          </div>
          <p class="aw-row__award">Leaders of Tomorrow Award</p>
          <p class="aw-row__at">FHS Saudi Arabia</p>
        </li>
        <li class="aw-row" data-series="sa" data-kind="future">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2024-muteb-bin-jumaiah.webp" type="image/webp"><img src="/corporate/assets/img/awards/2024-muteb-bin-jumaiah.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Muteb Bin Jumaiah</p><p class="aw-row__role">Section Head, Organisation Development, Taiba Investments</p>
          </div>
          <p class="aw-row__award">Leaders of Tomorrow Award</p>
          <p class="aw-row__at">FHS Saudi Arabia</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2023" data-aw-year>
      <h3 class="aw-year__n" id="y2023">2023</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2023-amine-e-moukarzel.webp" type="image/webp"><img src="/corporate/assets/img/awards/2023-amine-e-moukarzel.jpg" alt="" loading="lazy" width="280" height="350"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Amine E. Moukarzel</p><p class="aw-row__role">President, Louvre Hotels Group/Golden Tulip MENA & Flamingo Hospitality Management</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS Abu Dhabi</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2023-guido-e-de-wilde.webp" type="image/webp"><img src="/corporate/assets/img/awards/2023-guido-e-de-wilde.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Guido E. De Wilde</p><p class="aw-row__role">Hospitality Advisor, Wasl Hospitality</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS Abu Dhabi</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2022" data-aw-year>
      <h3 class="aw-year__n" id="y2022">2022</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="other">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2022-assia-riccio.webp" type="image/webp"><img src="/corporate/assets/img/awards/2022-assia-riccio.jpg" alt="" loading="lazy" width="373" height="466"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Assia Riccio</p><p class="aw-row__role">Founder, Evolvin’ Women</p>
          </div>
          <p class="aw-row__award">Be The Change Award</p>
          <p class="aw-row__at">FHS Middle East</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2022-amit-nayak.webp" type="image/webp"><img src="/corporate/assets/img/awards/2022-amit-nayak.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Amit Nayak</p><p class="aw-row__role">Vice President, Hospitality Asset Managers Association Middle East and Africa</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">FHS Middle East</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2022-ranjan-nadarajah.webp" type="image/webp"><img src="/corporate/assets/img/awards/2022-ranjan-nadarajah.jpg" alt="" loading="lazy" width="238" height="298"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Ranjan Nadarajah</p>
          </div>
          <p class="aw-row__award">Lifetime Award for Services to the Industry</p>
          <p class="aw-row__at">FHS Middle East</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2020" data-aw-year>
      <h3 class="aw-year__n" id="y2020">2020</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2020-rudi-jagersbacher.webp" type="image/webp"><img src="/corporate/assets/img/awards/2020-rudi-jagersbacher.jpg" alt="" loading="lazy" width="299" height="374"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Rudi Jagersbacher</p><p class="aw-row__role">Non-Executive Chairman, Middle East, Africa & Turkey, Hilton</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2020-helal-saeed-almarri.webp" type="image/webp"><img src="/corporate/assets/img/awards/2020-helal-saeed-almarri.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Helal Saeed Almarri</p><p class="aw-row__role">Director General, Department of Economy and Tourism - Dubai</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2019" data-aw-year>
      <h3 class="aw-year__n" id="y2019">2019</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="other">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2019-ali-hamad-lakhraim-alzaabi.webp" type="image/webp"><img src="/corporate/assets/img/awards/2019-ali-hamad-lakhraim-alzaabi.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Ali Hamad Lakhraim Alzaabi</p><p class="aw-row__role">Chief Executive Officer, Lakhraim Business Group</p>
          </div>
          <p class="aw-row__award">Creating Impact Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2019-h-h-sheikh-saud-bin-saqr-al-qasimi.webp" type="image/webp"><img src="/corporate/assets/img/awards/2019-h-h-sheikh-saud-bin-saqr-al-qasimi.jpg" alt="" loading="lazy" width="280" height="350"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">H.H. Sheikh Saud Bin Saqr Al Qasimi</p><p class="aw-row__role">Supreme Council Member, UAE</p>
          </div>
          <p class="aw-row__award">Outstanding Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2017" data-aw-year>
      <h3 class="aw-year__n" id="y2017">2017</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="other">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2017-he-sheikh-mubarak-al-abdullah-al-mubarak-al-sabah.webp" type="image/webp"><img src="/corporate/assets/img/awards/2017-he-sheikh-mubarak-al-abdullah-al-mubarak-al-sabah.jpg" alt="" loading="lazy" width="235" height="294"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">HE Sheikh Mubarak Al-Abdullah Al-Mubarak Al-Sabah</p><p class="aw-row__role">Founder and Non-Executive Chairman, Action Hotels</p>
          </div>
          <p class="aw-row__award">Industry Pioneer Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2017-ghaith-al-ghaith.webp" type="image/webp"><img src="/corporate/assets/img/awards/2017-ghaith-al-ghaith.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Ghaith Al Ghaith</p><p class="aw-row__role">Chief Executive Officer, Flydubai</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2016" data-aw-year>
      <h3 class="aw-year__n" id="y2016">2016</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2016-ahmed-ramdan.webp" type="image/webp"><img src="/corporate/assets/img/awards/2016-ahmed-ramdan.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Ahmed Ramdan</p><p class="aw-row__role">Group CEO & Founder, Roya International</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="other">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2016-ron-hilvert.webp" type="image/webp"><img src="/corporate/assets/img/awards/2016-ron-hilvert.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Ron Hilvert</p><p class="aw-row__role">Founder and Managing Director, The Emirates Academy of Hospitality Management (EAHM)</p>
          </div>
          <p class="aw-row__award">Outstanding Service to the Industry Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2014" data-aw-year>
      <h3 class="aw-year__n" id="y2014">2014</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2014-hrh-prince-sultan-bin-salman-bin-abdul-aziz.webp" type="image/webp"><img src="/corporate/assets/img/awards/2014-hrh-prince-sultan-bin-salman-bin-abdul-aziz.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">HRH Prince Sultan Bin Salman Bin Abdul Aziz</p><p class="aw-row__role">President, Saudi Commission for Tourism and Antiquities (SCTA)</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2013" data-aw-year>
      <h3 class="aw-year__n" id="y2013">2013</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2013-khalaf-al-habtoor.webp" type="image/webp"><img src="/corporate/assets/img/awards/2013-khalaf-al-habtoor.jpg" alt="" loading="lazy" width="412" height="515"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Khalaf Al Habtoor</p><p class="aw-row__role">The Chairman, Al Habtoor Group</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2012" data-aw-year>
      <h3 class="aw-year__n" id="y2012">2012</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2012-talal-jassim-al-bahar.webp" type="image/webp"><img src="/corporate/assets/img/awards/2012-talal-jassim-al-bahar.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Talal Jassim Al-Bahar</p><p class="aw-row__role">Vice Chairman and CEO, IFA Hotels & Resort</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2011" data-aw-year>
      <h3 class="aw-year__n" id="y2011">2011</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="other">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2011-h-h-sheikh-ahmed-bin-saeed-al-maktoum.webp" type="image/webp"><img src="/corporate/assets/img/awards/2011-h-h-sheikh-ahmed-bin-saeed-al-maktoum.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">H.H. Sheikh Ahmed bin Saeed Al Maktoum</p><p class="aw-row__role">Founding Patron, AHIC/FHS</p>
          </div>
          <p class="aw-row__award">Outstanding Achievement Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2011-gerald-lawless.webp" type="image/webp"><img src="/corporate/assets/img/awards/2011-gerald-lawless.jpg" alt="" loading="lazy" width="419" height="524"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Gerald Lawless</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2011-nasser-al-nowais.webp" type="image/webp"><img src="/corporate/assets/img/awards/2011-nasser-al-nowais.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Nasser Al Nowais</p><p class="aw-row__role">Chairman of the Board of Directors, Rotana Hotel Management Corporation P.J.S.C</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2010" data-aw-year>
      <h3 class="aw-year__n" id="y2010">2010</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2010-hh-sheikh-sultan-bin-tahnoon-al-nahyan.webp" type="image/webp"><img src="/corporate/assets/img/awards/2010-hh-sheikh-sultan-bin-tahnoon-al-nahyan.jpg" alt="" loading="lazy" width="420" height="525"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">HH Sheikh Sultan Bin Tahnoon Al Nahyan</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2009" data-aw-year>
      <h3 class="aw-year__n" id="y2009">2009</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2009-he-sultan-ahmed-bin-sulayem.webp" type="image/webp"><img src="/corporate/assets/img/awards/2009-he-sultan-ahmed-bin-sulayem.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">HE Sultan Ahmed Bin Sulayem</p><p class="aw-row__role">Chairman, Dubai World</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2008" data-aw-year>
      <h3 class="aw-year__n" id="y2008">2008</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2008-h-e-mohamed-ali-rashed-alabbar.webp" type="image/webp"><img src="/corporate/assets/img/awards/2008-h-e-mohamed-ali-rashed-alabbar.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">H.E. Mohamed Ali Rashed Alabbar</p><p class="aw-row__role">Founder & Managing Director of Emaar Properties, Founder & Director of Noon.com; Chairman of Eagle Hills; Chairman of Americana Group</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2007" data-aw-year>
      <h3 class="aw-year__n" id="y2007">2007</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="leadership">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2007-maurice-flanagan.webp" type="image/webp"><img src="/corporate/assets/img/awards/2007-maurice-flanagan.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Maurice Flanagan</p><p class="aw-row__role">Vice Chairman and Group President, Emirates</p>
          </div>
          <p class="aw-row__award">Leadership Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
    <section class="aw-year" aria-labelledby="y2005" data-aw-year>
      <h3 class="aw-year__n" id="y2005">2005</h3>
      <ul class="aw-year__list" role="list">
        <li class="aw-row" data-series="uae" data-kind="lifetime">
          <picture class="aw-row__photo"><source srcset="/corporate/assets/img/awards/2005-prince-al-waleed-bin-talal-bin-abdulaziz-al-saud.webp" type="image/webp"><img src="/corporate/assets/img/awards/2005-prince-al-waleed-bin-talal-bin-abdulaziz-al-saud.jpg" alt="" loading="lazy" width="440" height="550"></picture>
          <div class="aw-row__who">
            <p class="aw-row__name">Prince Al Waleed bin Talal bin Abdulaziz Al Saud</p><p class="aw-row__role">CEO, Saudi Arabia’s Kingdom Holding Company</p>
          </div>
          <p class="aw-row__award">Lifetime Achievement Award</p>
          <p class="aw-row__at">AHIC</p>
        </li>
      </ul>
    </section>
  </div><!--/slot:awardsYears-->
</section>

<section class="aw-close" aria-labelledby="close-aw">
  <div class="wrap aw-close__grid">
    <h2 class="h2" id="close-aw">The next <br>stage</h2>
    <p class="aw-close__copy">The 2026–27 season opens in Cairo on 10 November 2026. <a class="link" href="/#season">See the six summits <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></a></p>
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
	title: "Award winners | Future Hospitality Summit",
	description: "Every FHS award since 2005: the Leadership, Lifetime Achievement and Future Leader honours presented at AHIC, FHS World and FHS Saudi Arabia.",
	css: ["pages/awards.css"],
	js: ["pages/awards.js"],
	html,
}

export default page
