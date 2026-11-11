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
    <a href="/fhs-club" aria-current="page">FHS Club</a>
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
      <h1 class="phero__title" id="page-title">FHS Club</h1><p class="phero__lede">The loyalty programme for the people who keep coming back to Future Hospitality Summit. Attend two or more editions and your tier, with its benefits, follows automatically.</p>
    </div>
  </div>
</section>

<section class="club-tiers" aria-labelledby="tiers-title">
  <div class="wrap shead ">
  <h2 class="h2" id="tiers-title">Three <br>tiers</h2><p class="shead__intro">Your tier follows the number of FHS editions you have attended, counted over the fifteen most recent. The more you attend, the more you receive.</p>
</div>
  <div class="wrap club-table-wrap">
    <table class="club-table">
      <caption class="sr-only">FHS Club benefits by tier</caption>
      <thead>
        <tr>
          <td></td>
          <th scope="col" class="club-tier club-tier--member">
            <img src="/corporate/assets/img/club/pin-member.png" alt="" width="150" height="170" loading="lazy">
            <span class="club-tier__name">Member</span>
            <span class="club-tier__crit">2 FHS editions</span>
          </th>
          <th scope="col" class="club-tier club-tier--silver">
            <img src="/corporate/assets/img/club/pin-silver.png" alt="" width="150" height="170" loading="lazy">
            <span class="club-tier__name">Silver</span>
            <span class="club-tier__crit">3 or 4 FHS editions</span>
          </th>
          <th scope="col" class="club-tier club-tier--gold">
            <img src="/corporate/assets/img/club/pin-gold.png" alt="" width="150" height="170" loading="lazy">
            <span class="club-tier__name">Gold</span>
            <span class="club-tier__crit">5 or more FHS editions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ticket discount</th>
          <td>5% on standard tickets</td>
          <td>7% on standard tickets</td>
          <td>10% on delegate tickets</td>
        </tr>
        <tr>
          <th scope="row">Colleague and friend tickets</th>
          <td>5% off</td>
          <td>5% off</td>
          <td>10% off</td>
        </tr>
        <tr>
          <th scope="row">Industry reports and event content</th>
          <td>Access</td>
          <td>Access</td>
          <td>Access</td>
        </tr>
        <tr>
          <th scope="row">Loyalty pins or badges on site</th>
          <td class="is-none"><span class="sr-only">Not included</span><span aria-hidden="true">–</span></td>
          <td>Yes</td>
          <td>Yes, with event preparation kits</td>
        </tr>
        <tr>
          <th scope="row">Hotel, restaurant or activity vouchers from sponsors and partners</th>
          <td class="is-none"><span class="sr-only">Not included</span><span aria-hidden="true">–</span></td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Priority access to site tours and on-site activities</th>
          <td class="is-none"><span class="sr-only">Not included</span><span aria-hidden="true">–</span></td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Networking receptions at FHS and other Bench conferences</th>
          <td class="is-none"><span class="sr-only">Not included</span><span aria-hidden="true">–</span></td>
          <td>Access</td>
          <td>Full access</td>
        </tr>
        <tr>
          <th scope="row">Featured on the FHS website</th>
          <td class="is-none"><span class="sr-only">Not included</span><span aria-hidden="true">–</span></td>
          <td class="is-none"><span class="sr-only">Not included</span><span aria-hidden="true">–</span></td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
  </div>
  <ol class="wrap club-stack" aria-label="FHS Club tiers">
    <li class="club-stack__tier">
      <img src="/corporate/assets/img/club/pin-member.png" alt="" width="150" height="170" loading="lazy">
      <p class="club-tier__name">Member</p>
      <p class="club-tier__crit">2 FHS editions</p>
      <ul class="club-stack__list" role="list">
        <li><span>Ticket discount</span>5% on standard tickets</li>
        <li><span>Colleague and friend tickets</span>5% off</li>
        <li><span>Industry reports and event content</span>Access</li>
      </ul>
    </li>
    <li class="club-stack__tier">
      <img src="/corporate/assets/img/club/pin-silver.png" alt="" width="150" height="170" loading="lazy">
      <p class="club-tier__name">Silver</p>
      <p class="club-tier__crit">3 or 4 FHS editions</p>
      <ul class="club-stack__list" role="list">
        <li><span>Ticket discount</span>7% on standard tickets</li>
        <li><span>Colleague and friend tickets</span>5% off</li>
        <li><span>Industry reports and event content</span>Access</li>
        <li><span>Loyalty pins or badges on site</span>Yes</li>
        <li><span>Hotel, restaurant or activity vouchers from sponsors and partners</span>Yes</li>
        <li><span>Priority access to site tours and on-site activities</span>Yes</li>
        <li><span>Networking receptions at FHS and other Bench conferences</span>Access</li>
      </ul>
    </li>
    <li class="club-stack__tier">
      <img src="/corporate/assets/img/club/pin-gold.png" alt="" width="150" height="170" loading="lazy">
      <p class="club-tier__name">Gold</p>
      <p class="club-tier__crit">5 or more FHS editions</p>
      <ul class="club-stack__list" role="list">
        <li><span>Ticket discount</span>10% on delegate tickets</li>
        <li><span>Colleague and friend tickets</span>10% off</li>
        <li><span>Industry reports and event content</span>Access</li>
        <li><span>Loyalty pins or badges on site</span>Yes, with event preparation kits</li>
        <li><span>Hotel, restaurant or activity vouchers from sponsors and partners</span>Yes</li>
        <li><span>Priority access to site tours and on-site activities</span>Yes</li>
        <li><span>Networking receptions at FHS and other Bench conferences</span>Full access</li>
        <li><span>Featured on the FHS website</span>Yes</li>
      </ul>
    </li>
  </ol>
</section>

<section class="club-count" aria-labelledby="count-title">
  <div class="wrap shead ">
  <h2 class="h2" id="count-title">Fifteen editions <br>count</h2><p class="shead__intro">Your status is based on the five most recent editions of each of our three series.</p>
</div>
  <div class="wrap club-series">
    <div class="club-series__col">
      <h3 class="club-series__name"><img class="club-series__logo" src="/corporate/assets/logos/events/fhs-world.png" alt="FHS World" width="392" height="200" loading="lazy"></h3>
      <ul class="club-series__list" role="list"><li>FHS World 2026</li><li>FHS World 2025</li><li>FHS World 2024</li><li>FHS Abu Dhabi 2023</li><li>FHS Middle East 2022</li>
      </ul>
    </div>
    <div class="club-series__col">
      <h3 class="club-series__name"><img class="club-series__logo" src="/corporate/assets/logos/events/fhs-saudi-arabia.png" alt="FHS Saudi Arabia" width="562" height="200" loading="lazy"></h3>
      <ul class="club-series__list" role="list"><li>FHS Saudi Arabia 2026</li><li>FHS Saudi Arabia 2025</li><li>FHS Saudi Arabia 2024</li><li>FHS Saudi Arabia 2023</li><li>FHS Saudi Arabia 2022</li>
      </ul>
    </div>
    <div class="club-series__col">
      <h3 class="club-series__name"><img class="club-series__logo" src="/corporate/assets/logos/events/fhs-africa.png" alt="FHS Africa" width="392" height="200" loading="lazy"></h3>
      <ul class="club-series__list" role="list"><li>FHS Africa 2026</li><li>FHS Africa 2025</li><li>AHIF 2024</li><li>AHIF 2023</li><li>AHIF 2022</li>
      </ul>
    </div>
  </div>
</section>

<section class="club-join on-white" aria-labelledby="join-title">
  <div class="wrap shead ">
  <h2 class="h2" id="join-title">How to <br>join</h2><p class="shead__intro">There is nothing to apply for. Membership is assigned from your attendance record.</p>
</div>
  <div class="wrap club-join__grid">
    <ol class="club-steps">
      <li><span class="club-steps__n" aria-hidden="true">1</span><p>Attend two or more of the fifteen editions listed above.</p></li>
      <li><span class="club-steps__n" aria-hidden="true">2</span><p>Your tier is assigned automatically from your own attendance record. Keep attending FHS editions to move up through the tiers and unlock more benefits.</p></li>
      <li><span class="club-steps__n" aria-hidden="true">3</span><p>Check your membership status below. Your tier is reviewed after each FHS edition and can only go up. We will always let you know before anything changes.</p></li>
    </ol>
    <div class="club-check">
      <h3 class="club-check__label">Check your tier</h3>
      <p class="club-check__hint">Use the email address you registered with.</p>
      <div class="hsform" id="hs-club" data-hs-form="975e52f2-15f8-4f34-bfd8-b251c814c288"></div>
    </div>
  </div>
</section>

<section class="club-terms on-white" aria-labelledby="terms-title">
  <div class="wrap club-terms__grid">
    <h2 class="club-terms__h" id="terms-title">Terms</h2>
    <dl class="club-terms__list">
      <div><dt>Eligibility</dt><dd>The FHS Club is open to everyone who has attended at least two editions of Future Hospitality Summit. Membership is assigned automatically from edition attendance.</dd></div>
      <div><dt>Validity</dt><dd>Membership and its benefits are valid until the next FHS edition and are updated twice a year.</dd></div>
      <div><dt>Using benefits</dt><dd>Discounts and vouchers are non-transferable, can only be used by the member and must be redeemed within the stated time frames.</dd></div>
      <div><dt>Changes</dt><dd>FHS may change or end the FHS Club, including its benefits and terms, at any time without notice.</dd></div>
      <div><dt>Privacy</dt><dd>Members' personal information is handled under the FHS privacy policy.</dd></div>
      <div><dt>Contact</dt><dd>Questions about the FHS Club: hello@thebench.com</dd></div>
    </dl>
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
	title: "FHS Club | Future Hospitality Summit",
	description: "The FHS Club rewards returning delegates: attend two or more FHS editions and your tier, Member, Silver or Gold, follows automatically.",
	css: ["pages/club.css"],
	js: [],
	html,
}

export default page
