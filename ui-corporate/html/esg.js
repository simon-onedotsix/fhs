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

<section class="phero phero--photo" aria-labelledby="page-title">
  <picture class="phero__photo"><source srcset="/corporate/assets/img/esg/hero.webp" type="image/webp"><img src="/corporate/assets/img/esg/hero.jpg" alt="Delegates planting mangroves during an FHS sustainability activity" width="2400" height="1350"></picture>
  <div class="phero__panel">
    <div class="phero__copy">
      <h1 class="phero__title" id="page-title">ESG impact</h1><p class="phero__lede">Women’s participation, sourcing, programme curation, partnerships and carbon: how FHS events work.</p>
    </div>
  </div>
</section>



<!--slot:esg--><section class="esg" aria-label="Initiatives">
  <ol class="wrap esg__list">
    <li class="esg__item">
      <figure class="esg__img"><picture><source srcset="/corporate/assets/img/esg/item-1.webp" type="image/webp"><img src="/corporate/assets/img/esg/item-1.jpg" alt="" width="1200" height="900" loading="lazy"></picture></figure>
      <div class="esg__text">
        <h2 class="esg__title">#FHSWomenPower</h2>
        <div class="esg__body"><p>With #FHSWomenPower, we are committed to facilitating women in the hospitality industry to access the educational, business and networking opportunities at FHS with complimentary passes.</p>
<p>At FHS Saudi Arabia 2024, under the initiative, attendance of women at the event improved from 18% to 29%.</p></div>
      </div>
    </li>
    <li class="esg__item esg__item--flip">
      <figure class="esg__img"><picture><source srcset="/corporate/assets/img/esg/item-2.webp" type="image/webp"><img src="/corporate/assets/img/esg/item-2.jpg" alt="" width="1200" height="900" loading="lazy"></picture></figure>
      <div class="esg__text">
        <h2 class="esg__title">Collaboration with Fresh on Table</h2>
        <div class="esg__body"><p>Across FHS events, we collaborate with Fresh on Table and other third parties to ensure food choices at the events are sustainable and ethically sourced.</p>
<p>FHS Saudi Arabia 2024 exclusively featured Melitta Coffee, chosen for its strong commitment to sustainability, aligning with our environmental values.</p></div>
      </div>
    </li>
    <li class="esg__item">
      <figure class="esg__img"><picture><source srcset="/corporate/assets/img/esg/item-3.webp" type="image/webp"><img src="/corporate/assets/img/esg/item-3.jpg" alt="" width="1200" height="900" loading="lazy"></picture></figure>
      <div class="esg__text">
        <h2 class="esg__title">Programme Curation</h2>
        <div class="esg__body"><p>At FHS, we are continuously working towards having more women representation in our agenda and focusing on a diverse speaker lineup.</p></div>
      </div>
    </li>
    <li class="esg__item esg__item--flip">
      <figure class="esg__img"><picture><source srcset="/corporate/assets/img/esg/item-4.webp" type="image/webp"><img src="/corporate/assets/img/esg/item-4.jpg" alt="" width="1200" height="900" loading="lazy"></picture></figure>
      <div class="esg__text">
        <h2 class="esg__title">Responsible Collaborations</h2>
        <div class="esg__body"><p>We are deeply committed to fostering a sustainable future for the hospitality industry. We collaborate with partners who prioritise sustainability, adhering to strict guidelines and ambitious targets to minimise environmental impact.</p></div>
      </div>
    </li>
  </ol>
</section>
<section class="pledge" aria-labelledby="pledge-1">
  <div class="wrap pledge__grid">
    <h2 class="h2" id="pledge-1">Net Zero Carbon Events Initiative</h2>
    <div class="pledge__body"><p>FHS is consistently shaped by its dedication to the “Net Zero Carbon Events” pledge, a joint commitment across the events and meetings industry to achieve the targets laid out in the Paris Climate Accord.</p>
<p>The Bench is pleased to be joining this initiative, as it will be through continued collaborative work throughout the events sector that we will be able to make swift and essential progress towards reducing the overall carbon footprint of events.</p></div>
  </div>
</section><!--/slot:esg-->

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
	title: "ESG impact | Future Hospitality Summit",
	description: "Future Hospitality Summit on women’s participation, food sourcing, programme curation, responsible partnerships and the Net Zero Carbon Events pledge.",
	css: ["pages/esg.css"],
	js: [],
	html,
}

export default page
