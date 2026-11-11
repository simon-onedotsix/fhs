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
    <a href="/award-winners">Award winners</a>
    <a href="/fhs-club">FHS Club</a>
    <a class="top__partner" href="/fhs-marketing-opportunities">Partner with FHS</a>
  </nav>
  <button class="top__menu" type="button" aria-expanded="false" aria-controls="menu" data-menu>
    <span class="top__menu-label">Menu</span><span class="top__menu-bars" aria-hidden="true"></span>
  </button>
</header>

<main id="main">

<section class="phero phero--mark" aria-labelledby="page-title">
  <svg class="phero__mark" viewBox="0 0 178.265 199.329" aria-hidden="true" focusable="false"><path class="f-l" d="M29.004 199.329L0 182.584L0.007 16.739L52.294 46.927L28.999 60.442L29.004 111.999L81.299 142.192L57.971 155.688L29.004 138.961L29.004 199.329Z"/>
<path class="f-l" d="M102.549 102.931L52.288 73.888L75.64 60.406L102.58 75.96L102.549 102.931Z"/>
<path class="f-t" d="M0.007 16.739L28.998 0L178.265 86.182L125.923 116.402L125.93 89.441L75.64 60.406L28.998 87.334L28.998 60.442L52.294 46.927L0.007 16.739Z"/>
<path class="f-t" d="M102.549 102.931L57.931 128.701L81.299 142.192L102.58 129.88L102.549 102.931Z"/>
<path class="f-r" d="M178.265 86.182L178.265 113.147L29.004 199.329L29.004 138.961L57.971 155.688L102.58 129.879L102.58 75.959L125.93 89.44L125.924 116.401L178.265 86.182Z"/>
<path class="f-r" d="M57.931 128.7L57.971 77.172L52.288 73.888L28.999 87.334L29.004 111.999L57.931 128.7Z"/></svg>
  <div class="phero__panel">
    <div class="phero__copy">
      <h1 class="phero__title" id="page-title">Contact</h1><p class="phero__lede">Talk to the team behind Future Hospitality Summit. For anything about a single summit, its own contact page is the quickest route.</p>
    </div>
  </div>
</section>

<section class="ct-main on-white" aria-labelledby="ct-title">
  <div class="wrap ct-general">
    <h2 class="ct-general__h" id="ct-title">General and registration</h2>
    <a class="ct-general__mail" href="mailto:hello@thebench.com">hello@thebench.com</a>
    <p class="ct-general__note">Registration and general questions about any FHS summit.</p>
  </div>
  <div class="wrap ct-groups">
    <div class="ct-group">
      <h3 class="ct-group__h">Partnerships</h3>
      <ul class="ct-people" role="list">
        <li class="ct-person">
          <p class="ct-person__name">Matthew Weihs</p>
          <p class="ct-person__title">Chief Development Officer</p>
          <p class="ct-person__lines"><a href="mailto:matthew.weihs@thebench.com">matthew.weihs@thebench.com</a>
</p>
        </li>
      </ul>
    </div>
    <div class="ct-group">
      <h3 class="ct-group__h">Investor relations</h3>
      <ul class="ct-people" role="list">
        <li class="ct-person">
          <p class="ct-person__name">Marina Franolic</p>
          <p class="ct-person__title">Investor Relations Director</p>
          <p class="ct-person__lines"><a href="mailto:marina.franolic@thebench.com">marina.franolic@thebench.com</a>
</p>
        </li>
      </ul>
    </div>
    <div class="ct-group">
      <h3 class="ct-group__h">Marketing and PR</h3>
      <ul class="ct-people" role="list">
        <li class="ct-person">
          <p class="ct-person__name">Muhammad Ahmed</p>
          <p class="ct-person__title">Head of Marketing</p>
          <p class="ct-person__lines"><a href="mailto:muhammad.ahmed@thebench.com">muhammad.ahmed@thebench.com</a>
</p>
        </li>
        <li class="ct-person">
          <p class="ct-person__name">Anne Bleeker</p>
          <p class="ct-person__title">Managing Partner, In2 Consulting</p>
          <p class="ct-person__lines"><a href="mailto:anne@in2consulting.com">anne@in2consulting.com</a>
</p>
        </li>
      </ul>
    </div>
    <div class="ct-group">
      <h3 class="ct-group__h">Operations</h3>
      <ul class="ct-people" role="list">
        <li class="ct-person">
          <p class="ct-person__name">Sally Marwaha</p>
          <p class="ct-person__title">Operations Director</p>
          <p class="ct-person__lines"><a href="mailto:sally.marwaha@thebench.com">sally.marwaha@thebench.com</a>
</p>
        </li>
        <li class="ct-person">
          <p class="ct-person__name">Mala Patel</p>
          <p class="ct-person__title">Event Director – Africa | COO, AviaDev<span class="ct-person__scope">FHS Africa and FHS Egypt</span></p>
          <p class="ct-person__lines"><a href="mailto:mala.patel@thebench.com">mala.patel@thebench.com</a>
</p>
        </li>
        <li class="ct-person">
          <p class="ct-person__name">Asma Eladaoui</p>
          <p class="ct-person__title">Account Manager</p>
          <p class="ct-person__lines"><a href="mailto:asma.eladaoui@thebench.com">asma.eladaoui@thebench.com</a>
</p>
        </li>
      </ul>
    </div>
    <div class="ct-group">
      <h3 class="ct-group__h">Programme</h3>
      <ul class="ct-people" role="list">
        <li class="ct-person">
          <p class="ct-person__name">Tanja Millner</p>
          <p class="ct-person__title">Production Director</p>
          <p class="ct-person__lines"><a href="mailto:tanja.millner@thebench.com">tanja.millner@thebench.com</a>
</p>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="ab-season" aria-labelledby="summit-title">
  <div class="wrap shead ">
  <h2 class="h2" id="summit-title">Summit <br>contacts</h2><p class="shead__intro">Registration, programme and partnership teams for each summit, on each summit’s own site.</p>
</div>
  <ul class="wrap summits" role="list">
    <li data-ends="2026-11-11"><a class="summits__item" href="/egypt/contact-us">
      <img src="/corporate/assets/logos/events/fhs-egypt.png" alt="FHS Egypt" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Cairo</span>
      <span class="summits__go">Contact FHS Egypt <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-02-24"><a class="summits__item" href="/living/contact">
      <img src="/corporate/assets/logos/events/fhs-living.png" alt="FHS Living" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Paris</span>
      <span class="summits__go">Contact FHS Living <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-03-16"><a class="summits__item" href="https://brahic.com/">
      <img src="/corporate/assets/logos/events/brahic.png" alt="BRAHIC" width="816" height="200" loading="lazy" class="summits__logo summits__logo--brahic">
      <span class="summits__city">Rio de Janeiro</span>
      <span class="summits__go">Contact BRAHIC <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-04-14"><a class="summits__item" href="/sa/contact-us">
      <img src="/corporate/assets/logos/events/fhs-saudi-arabia-madinah.png" alt="FHS Saudi Arabia" width="562" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Madinah</span>
      <span class="summits__go">Contact FHS Saudi Arabia <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-04-29"><a class="summits__item" href="/africa/contact-us">
      <img src="/corporate/assets/logos/events/fhs-africa.png" alt="FHS Africa" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Kampala</span>
      <span class="summits__go">Contact FHS Africa <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
    <li data-ends="2027-11-30"><a class="summits__item" href="/world/contact-us">
      <img src="/corporate/assets/logos/events/fhs-world.png" alt="FHS World" width="392" height="200" loading="lazy" class="summits__logo">
      <span class="summits__city">Ras Al Khaimah</span>
      <span class="summits__go">Contact FHS World <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span></a></li>
  </ul>
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
	title: "Contact | Future Hospitality Summit",
	description: "Contact the Future Hospitality Summit team: registration, partnerships, programme, investor relations, marketing and media.",
	css: ["pages/about.css"],
	js: [],
	html,
}

export default page
