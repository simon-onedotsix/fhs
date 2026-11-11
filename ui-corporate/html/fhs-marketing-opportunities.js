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
    <a class="top__partner" href="/fhs-marketing-opportunities" aria-current="page">Partner with FHS</a>
  </nav>
  <button class="top__menu" type="button" aria-expanded="false" aria-controls="menu" data-menu>
    <span class="top__menu-label">Menu</span><span class="top__menu-bars" aria-hidden="true"></span>
  </button>
</header>

<main id="main">

<section class="phero phero--photo" aria-labelledby="page-title">
  <picture class="phero__photo"><source srcset="/corporate/assets/img/partner/hero.webp" type="image/webp"><img src="/corporate/assets/img/partner/hero.jpg" alt="Delegates and partner stands on the FHS Saudi Arabia exhibition floor" width="2400" height="1350"></picture>
  <div class="phero__panel">
    <div class="phero__copy">
      <h1 class="phero__title" id="page-title">Partner with FHS</h1><p class="phero__lede">Put your brand in the rooms where hospitality capital meets. Six summits on four continents, and an audience that keeps listening between them.</p>
    </div>
  </div>
</section>

<!-- WHY PARTNER -->
<section class="pwhy" aria-labelledby="why-title">
  <div class="wrap shead ">
  <h2 class="h2" id="why-title">The room <br>you join</h2><p class="shead__intro">Future Hospitality Summit brings together the owners, investors, operators and governments who decide where hospitality capital goes. This is who was in the room across the 2025 series.</p>
</div>
  <dl class="wrap pfigs">
    <div class="pfigs__row"><dt>C-level decision-makers across the 2025 series</dt><dd>3,000+</dd></div>
    <div class="pfigs__row"><dt>investors, representing over USD 11tn in assets under management</dt><dd>621</dd></div>
    <div class="pfigs__row"><dt>in business opportunities facilitated</dt><dd>USD 3bn</dd></div>
    <div class="pfigs__row"><dt>hotel signings announced on stage</dt><dd>29</dd></div>
  </dl>
  <p class="wrap pwhy__src">The FHS series in 2025. Source: The Bench, June 2026.</p>
</section>

<!-- CHOOSE A SUMMIT -->
<section class="psum" aria-labelledby="summits-title">
  <div class="wrap shead ">
  <h2 class="h2" id="summits-title">Choose your <br>summit</h2><p class="shead__intro">Each summit has its own programme, audience and partnership team. Start with the market you want to reach.</p>
</div>
  <ol class="wrap psum__list">
    <li data-ends="2026-11-11"><a class="psum__row" href="/egypt/why-partner">
      <img class="psum__logo" src="/corporate/assets/logos/events/fhs-egypt.png" alt="FHS Egypt" width="392" height="200" loading="lazy">
      <span class="psum__city">Cairo</span>
      <time class="psum__date">10–11 November 2026</time>
      <span class="psum__go">Partner with FHS Egypt <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
    </a></li>
    <li data-ends="2027-02-24"><a class="psum__row" href="/living/partners">
      <img class="psum__logo" src="/corporate/assets/logos/events/fhs-living.png" alt="FHS Living" width="392" height="200" loading="lazy">
      <span class="psum__city">Paris</span>
      <time class="psum__date">23–24 February 2027</time>
      <span class="psum__go">Partner with FHS Living <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
    </a></li>
    <li data-ends="2027-03-16"><a class="psum__row" href="https://brahic.com/seja-um-patrocinador">
      <img class="psum__logo psum__logo--wide" src="/corporate/assets/logos/events/brahic.png" alt="BRAHIC" width="816" height="200" loading="lazy">
      <span class="psum__city">Rio de Janeiro</span>
      <time class="psum__date">15–16 March 2027</time>
      <span class="psum__go">Partner with BRAHIC <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
    </a></li>
    <li data-ends="2027-04-14"><a class="psum__row" href="/sa/why-partner">
      <img class="psum__logo" src="/corporate/assets/logos/events/fhs-saudi-arabia-madinah.png" alt="FHS Saudi Arabia" width="562" height="200" loading="lazy">
      <span class="psum__city">Madinah</span>
      <time class="psum__date">13–14 April 2027</time>
      <span class="psum__go">Partner with FHS Saudi Arabia <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
    </a></li>
    <li data-ends="2027-04-29"><a class="psum__row" href="/africa/partner-with-fhs-africa-2027">
      <img class="psum__logo" src="/corporate/assets/logos/events/fhs-africa.png" alt="FHS Africa" width="392" height="200" loading="lazy">
      <span class="psum__city">Kampala</span>
      <time class="psum__date">28–29 April 2027</time>
      <span class="psum__go">Partner with FHS Africa <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
    </a></li>
    <li data-ends="2027-11-30"><a class="psum__row" href="/world/why-partner">
      <img class="psum__logo" src="/corporate/assets/logos/events/fhs-world.png" alt="FHS World" width="392" height="200" loading="lazy">
      <span class="psum__city">Ras Al Khaimah</span>
      <time class="psum__date">November 2027</time>
      <span class="psum__go">Partner with FHS World <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
    </a></li>
  </ol>
</section>

<!-- CONTENT PARTNERSHIPS -->
<section class="popt on-white" aria-labelledby="options-title">
  <div class="wrap shead ">
  <h2 class="h2" id="options-title">Between <br>the summits</h2><p class="shead__intro">Content partnerships put your leaders in front of the FHS audience all year: on the FHS Podcast, on FHS channels and in the films we make at each summit.</p>
</div>
  <ol class="wrap popt__list"><!--slot:opportunities-->
    <li class="popt__row">
      <picture class="popt__img"><source srcset="/corporate/assets/img/partner/opt-podcast.webp" type="image/webp"><img src="/corporate/assets/img/partner/opt-podcast.jpg" alt="An FHS Podcast episode card with its guest" loading="lazy" width="1200" height="675"></picture>
      <h3 class="popt__name">Online Podcast</h3>
      <p class="popt__text">A 10 to 30 minute one-to-one conversation with a senior Bench representative on an agreed topic, capturing your insights, positioning and value proposition.</p>
      <p class="popt__ex"><span>See an example:</span> <a href="/sa/content-library/category/podcast">Online podcasts</a>, <a href="https://www.youtube.com/watch?v=i3LFNwS1UHY">In-person podcast</a></p>
    </li>
    <li class="popt__row">
      <picture class="popt__img"><source srcset="/corporate/assets/img/partner/opt-insight.webp" type="image/webp"><img src="/corporate/assets/img/partner/opt-insight.jpg" alt="A Four questions with insight card for FHS Egypt" loading="lazy" width="1200" height="675"></picture>
      <h3 class="popt__name">Thought Leadership Insights</h3>
      <p class="popt__text">Short digital or written insights from your company’s thought leader, published on FHS social media channels.</p>
      <p class="popt__ex"><span>See an example:</span> <a href="https://www.linkedin.com/posts/future-hospitality-summit_hassan-ahdab-at-fhs-world-2024-activity-7244966922419621889-_dLr">Written insights</a>, <a href="https://www.linkedin.com/posts/future-hospitality-summit_alain-debare-hvs-at-fhs-world-2024-activity-7242784372414660608-tBhQ">Video insights</a></p>
    </li>
    <li class="popt__row">
      <picture class="popt__img"><source srcset="/corporate/assets/img/partner/opt-speaker.webp" type="image/webp"><img src="/corporate/assets/img/partner/opt-speaker.jpg" alt="An FHS World 2026 speaker card" loading="lazy" width="1200" height="675"></picture>
      <h3 class="popt__name">Speaker Profiling</h3>
      <p class="popt__text">A dedicated social media post on your company’s speaker on the FHS agenda, showcasing their expertise and promoting their session.</p>
      <p class="popt__ex"><span>See an example:</span> <a href="https://www.linkedin.com/posts/future-hospitality-summit_futurehospitalitysummit-fhssaudiarabia2025-activity-7291055731863150592-_KNY">Speaker post</a></p>
    </li>
    <li class="popt__row">
      <picture class="popt__img"><source srcset="/corporate/assets/img/partner/opt-interview.webp" type="image/webp"><img src="/corporate/assets/img/partner/opt-interview.jpg" alt="A video interview recorded on the FHS World exhibition floor" loading="lazy" width="1200" height="675"></picture>
      <h3 class="popt__name">On-site Video Interview</h3>
      <p class="popt__text">A video interview with your company’s speaker or representative during the event, published on social media as part of the post-event campaign. Questions are agreed in advance.</p>
      <p class="popt__ex"><span>See an example:</span> <a href="https://www.linkedin.com/posts/future-hospitality-summit_fhssaudiarabia-sustainability-futurehospitalitysummit-activity-7269326724855648256-jql6">Video interview</a></p>
    </li>
    <li class="popt__row">
      <picture class="popt__img"><source srcset="/corporate/assets/img/partner/opt-snippet.webp" type="image/webp"><img src="/corporate/assets/img/partner/opt-snippet.jpg" alt="A speaker on the FHS World stage, from a session recording" loading="lazy" width="1200" height="675"></picture>
      <h3 class="popt__name">Stage Session Snippet</h3>
      <p class="popt__text">A one to three minute snippet cut from the recording of your speaker’s stage session, published on social media as part of the post-event campaign.</p>
      <p class="popt__ex"><span>See an example:</span> <a href="https://www.linkedin.com/posts/future-hospitality-summit_fhs-fhsworld-fhsksa-activity-7354476768445005824-IQTr">Session snippet</a></p>
    </li><!--/slot:opportunities-->
  </ol>
</section>

<!-- TALK TO US -->
<section class="pcta" aria-labelledby="cta-title">
  <div class="wrap pcta__grid">
    <h2 class="h2" id="cta-title">Talk <br>to us</h2>
    <div class="pcta__copy">
      <p>For a summit partnership, choose the summit above and its team will take it from there. For content partnerships, or if you are not sure where to start, write to The Bench and we will connect you with the right person.</p>
      <p class="pcta__mail"><a href="mailto:hello@thebench.com">hello@thebench.com</a></p>
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
	title: "Partner with FHS | Future Hospitality Summit",
	description: "Partner with Future Hospitality Summit: six summits on four continents, and content partnerships that reach the FHS audience between them.",
	css: ["pages/partner.css"],
	js: [],
	html,
}

export default page
