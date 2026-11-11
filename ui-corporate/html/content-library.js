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
    <a href="/content-library" aria-current="page">Content library</a>
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
  <picture class="phero__photo"><source srcset="/corporate/assets/img/room/panel.webp" type="image/webp"><img src="/corporate/assets/img/room/panel.jpg" alt="Four panellists in conversation on an FHS stage" width="2400" height="1350"></picture>
  <div class="phero__panel">
    <div class="phero__copy">
      <h1 class="phero__title" id="page-title">Content library</h1><p class="phero__lede">Session films, the FHS Podcast, press releases and insight from the people shaping hospitality’s next decade.</p>
    </div>
  </div>
</section>

<section class="lib" aria-labelledby="lib-lead"><!--slot:library-->
	<div class="wrap lib__lead">
		<a class="lead" href="/egypt/content-library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-at-the-heart-of-history-in-front-of-the-grand-egyptian-museum">
			<figure class="lead__img"><picture><source srcset="/corporate/assets/img/library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-a.webp" type="image/webp"><img src="/corporate/assets/img/library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-a.jpg" alt="" width="960" height="540"></picture></figure>
			<div class="lead__text">
				<p class="meta"><span>Press room</span><time datetime="2026-11-10">10 November 2026</time></p>
				<h2 class="lead__title" id="lib-lead">MAD Signs MoU with Brassbell Hospitality Group to Elevate Hospitality Landmark at the Heart of History in Front of the Grand Egyptian Museum</h2>
				<p class="lead__ex">The MoU was signed at Future Hospitality Summit Egypt 2026, following a hospitality advisory and partner-selection process supported by HVS 


الاتفاقية تأتي عقب عملية استشارية لاختيار الشريك المناسب، بدعم من شركة HVS، ضمن مشاركة &quot;مصر أبو ظبي&quot; في قمة مستقبل الضيافة - مصر 2026</p>
				<span class="lead__go">Read the release <svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg></span>
			</div>
		</a>
	</div>

	<div class="pod" aria-labelledby="pod-title">
		<div class="wrap pod__head">
			<h2 class="h2" id="pod-title">The FHS <br>Podcast</h2>
			<p class="pod__intro">Conversations with the owners, operators, investors and ministers building the industry. 12 recent episodes, newest first.</p>
		</div>
		<ol class="pod__track" tabindex="0" aria-label="Recent FHS Podcast episodes">
			<li class="pod__ep"><a href="/world/content-library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospitality-investment">
				<span class="pod__no">171</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospita.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospita.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Beyond the Numbers: Risk, Resilience &amp; the Future of Hospitality Investment</span>
				<time datetime="2026-11-08">08 November 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience">
				<span class="pod__no">172</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Rethinking Luxury Travel: Why Emotion Beats Experience</span>
				<time datetime="2026-11-06">06 November 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-middle-east-and-africa">
				<span class="pod__no">170</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-m.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-m.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Scaling to 100 Hotels - Aleph Hospitality's Blueprint for Middle East and Africa</span>
				<time datetime="2026-11-05">05 November 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/fhs-podcast-episode-168-beyond-the-numbers-the-reality-of-egypts-hotel-boom">
				<span class="pod__no">168</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-168-beyond-the-numbers-the-reality-of-egypts-hotel-boom.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-168-beyond-the-numbers-the-reality-of-egypts-hotel-boom.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Beyond the Numbers: The Reality of Egypt’s Hotel Boom</span>
				<time datetime="2026-10-21">21 October 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/fhs-podcast-from-hotel-rooms-to-destinations-rethinking-hospitality-in-egypt">
				<span class="pod__no">167</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-from-hotel-rooms-to-destinations-rethinking-hospitality-in-egypt.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-from-hotel-rooms-to-destinations-rethinking-hospitality-in-egypt.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">From Hotel Rooms to Destinations - Rethinking Hospitality in Egypt</span>
				<time datetime="2026-10-19">19 October 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/beyond-five-star-hotels-where-egypts-real-hospitality-opportunities-lie">
				<span class="pod__no">166</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/beyond-five-star-hotels-where-egypts-real-hospitality-opportunities-lie.webp" type="image/webp"><img src="/corporate/assets/img/library/beyond-five-star-hotels-where-egypts-real-hospitality-opportunities-lie.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Beyond Five-Star Hotels: Where Egypt's Real Hospitality Opportunities Lie</span>
				<time datetime="2026-10-18">18 October 2026</time></a></li>
			<li class="pod__ep"><a href="/world/content-library/fhs-podcast-episode-165-the-master-builder-alison-grinnell">
				<span class="pod__no">165</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-165-the-master-builder-alison-grinnell.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-165-the-master-builder-alison-grinnell.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">The Master Builder: Alison Grinnell</span>
				<time datetime="2026-10-15">15 October 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/fhs-podcast-episode-164-beyond-co-working-why-workspace-belongs-in-egypts-mixed-use-destinations">
				<span class="pod__no">164</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-164-beyond-co-working-why-workspace-belongs-in-egypts-mixed-.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-164-beyond-co-working-why-workspace-belongs-in-egypts-mixed-.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Beyond Co-Working - Why Workspace Belongs in Egypt’s Mixed-Use Destinations</span>
				<time datetime="2026-10-12">12 October 2026</time></a></li>
			<li class="pod__ep"><a href="/world/content-library/fhs-podcast-episode-163-five-worlds-one-vision-marc-dardenne-ceo-modon-hospitality-unveils-afiniti">
				<span class="pod__no">163</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-163-five-worlds-one-vision-marc-dardenne-ceo-modon-hospitali.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-163-five-worlds-one-vision-marc-dardenne-ceo-modon-hospitali.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Five Worlds, One Vision, Marc Dardenne, CEO, Modon Hospitality, Unveils Afiniti</span>
				<time datetime="2026-09-30">30 September 2026</time></a></li>
			<li class="pod__ep"><a href="/world/content-library/fhs-podcast-161-the-uaes-next-chapter-a-conversation-on-tourism-and-investment">
				<span class="pod__no">161</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-161-the-uaes-next-chapter-a-conversation-on-tourism-and-investment.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-161-the-uaes-next-chapter-a-conversation-on-tourism-and-investment.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">The UAE's Next Chapter: A Conversation on Tourism and Investment</span>
				<time datetime="2026-09-25">25 September 2026</time></a></li>
			<li class="pod__ep"><a href="/world/content-library/fhs-podcast-episode-162-madinahs-new-investment-story-building-a-destination-for-the-world">
				<span class="pod__no">162</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-162-madinahs-new-investment-story-building-a-destination-for.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-162-madinahs-new-investment-story-building-a-destination-for.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Madinah’s New Investment Story: Building a Destination for the World</span>
				<time datetime="2026-09-24">24 September 2026</time></a></li>
			<li class="pod__ep"><a href="/egypt/content-library/fhs-podcast-episode-160-lars-geweyer-chief-executive-officer-add-properties-hospitality-division">
				<span class="pod__no">160</span><span class="pod__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-160-lars-geweyer-chief-executive-officer-add-properties-hosp.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-160-lars-geweyer-chief-executive-officer-add-properties-hosp.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="pod__t">Lars Geweyer, Chief Executive Officer, ADD Properties - Hospitality Division</span>
				<time datetime="2026-09-22">22 September 2026</time></a></li>
		</ol>
	</div>

	<div class="wrap lib__all">
		<div class="lib__bar">
			<h2 class="h2 lib__h">Latest</h2>
			<div class="filters" role="group" aria-label="Show" data-filters hidden>
				<button type="button" aria-pressed="true" data-f="all">All <span>47</span></button>
				<button type="button" aria-pressed="false" data-f="press">Press room <span>19</span></button>
				<button type="button" aria-pressed="false" data-f="podcast">FHS Podcast <span>12</span></button>
				<button type="button" aria-pressed="false" data-f="video">Video insights <span>13</span></button>
				<button type="button" aria-pressed="false" data-f="insight">Insight <span>3</span></button>
			</div>
		</div>
		<ol class="rows" data-rows aria-live="polite">
			<li class="row" data-type="insight"><a href="/egypt/content-library/hvs-mea-egypt-hospitality-market-report"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/hvs-mea-egypt-hospitality-market-report.webp" type="image/webp"><img src="/corporate/assets/img/library/hvs-mea-egypt-hospitality-market-report.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Reports</span><time datetime="2026-11-10">10 November 2026</time></span>
					<span class="row__t">HVS MEA Egypt Hospitality &amp; Market Report</span><span class="row__ex">HVS Middle East &amp; Africa Survey Reveals Strong Investor Confidence in Egypt's Hospitality Sector as Focus Shifts from Demand to Delivery. 97% of industry participants positive on Egypt's hospitality investment outlook, with connectivity, capital access and execution emerging as key priorities.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/egypt/content-library/radisson-hotel-group-targets-30-properties-in-egypt-by-2030-with-expansion-across-greater-cairo-the-north-coast-and-the-red-sea"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/radisson-hotel-group-targets-30-properties-in-egypt-by-2030-with-expansion-acros.webp" type="image/webp"><img src="/corporate/assets/img/library/radisson-hotel-group-targets-30-properties-in-egypt-by-2030-with-expansion-acros.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-11-10">10 November 2026</time></span>
					<span class="row__t">Radisson Hotel Group targets 30 properties in Egypt by 2030 with expansion across Greater Cairo, the North Coast and the Red Sea</span><span class="row__ex">Radisson Hotel Group is reinforcing its commitment to Egypt, with an ambition to reach 30 hotels, resort, serviced apartments and branded residences in operation and under development by 2030. With five hotels currently operating and eight under development, the Group is expanding across Greater Cairo, the New Administrative Capital, the North Coast and the Red Sea.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/egypt/content-library/paragon-adeer-and-hilton-sign-cairos-first-canopy-at-sumoublvd"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/paragon-adeer-and-hilton-sign-cairos-first-canopy-at-sumoublvd.webp" type="image/webp"><img src="/corporate/assets/img/library/paragon-adeer-and-hilton-sign-cairos-first-canopy-at-sumoublvd.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-11-10">10 November 2026</time></span>
					<span class="row__t">PARAGON | ADEER and Hilton Sign Cairo’s First Canopy at SumouBlvd</span><span class="row__ex">PARAGON | ADEER has signed an agreement with Hilton to open Canopy Cairo SumouBlvd and Canopy Residences Cairo SumouBlvd, marking the lifestyle brand’s debut in the Egyptian capital.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/egypt/content-library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-at-the-heart-of-history-in-front-of-the-grand-egyptian-museum"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-a.webp" type="image/webp"><img src="/corporate/assets/img/library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-a.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-11-10">10 November 2026</time></span>
					<span class="row__t">MAD Signs MoU with Brassbell Hospitality Group to Elevate Hospitality Landmark at the Heart of History in Front of the Grand Egyptian Museum</span><span class="row__ex">The MoU was signed at Future Hospitality Summit Egypt 2026, following a hospitality advisory and partner-selection process supported by HVS 


الاتفاقية تأتي عقب عملية استشارية لاختيار الشريك المناسب، بدعم من شركة HVS، ضمن مشاركة &quot;مصر أبو ظبي&quot; في قمة مستقبل الضيافة - مصر 2026</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/world/content-library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospitality-investment"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospita.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-171-beyond-the-numbers-risk-resilience-the-future-of-hospita.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 171</span><time datetime="2026-11-08">08 November 2026</time></span>
					<span class="row__t">FHS Podcast Episode 171: Beyond the Numbers: Risk, Resilience &amp; the Future of Hospitality Investment</span><span class="row__ex">In this episode of the FHS Podcast, Hala Matar Choufany, President of HVS Middle East, Africa and South Asia, shares insights from more than two decades of advising hospitality investors, developers and hotel owners across global markets. From navigating geopolitical uncertainty and understanding investment risk to translating hotel performance data into smarter decisions, Hala explores what drives long-term value in hospitality. The conversation also examines emerging investment opportunities in Egypt, the resilience of the UAE market and the evolving role of women in hospitality leadership, drawing on her own journey and the lessons that have shaped her career.</span>
				</span></a></li>
			<li class="row" data-type="insight"><a href="/world/content-library/from-tech-stack-to-performance-stack"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/from-tech-stack-to-performance-stack.webp" type="image/webp"><img src="/corporate/assets/img/library/from-tech-stack-to-performance-stack.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Reports</span><time datetime="2026-11-08">08 November 2026</time></span>
					<span class="row__t">From Tech Stack to Performance Stack - Whitepaper by ExploreTECH</span><span class="row__ex">What changes when the systems work together?

The paper follows information from the underlying architecture to the guest relationship, operating decisions and owner return. Each stage combines relevant partner arguments with evidence and a shared industry question.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-172-rethinking-luxury-travel-why-emotion-beats-experience.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 172</span><time datetime="2026-11-06">06 November 2026</time></span>
					<span class="row__t">FHS Podcast Episode 172: Rethinking Luxury Travel: Why Emotion Beats Experience</span><span class="row__ex">In this FHS Egypt Podcast feature, Kerten Hospitality Chief Experience Officer Anthony Duce breaks down the shift from standard hotel amenities to emotional storytelling, local community integration, and year-round destination programming. 

Discover how Egypt's hospitality sector is evolving across the North Coast and Red Sea, and why memorable stays begin with employee-first leadership.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/vincent-miccolis-managing-director-middle-east-africa-and-türkiye-the-ascott-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/vincent-miccolis-managing-director-middle-east-africa-and-turkiye-the-ascott-at-.webp" type="image/webp"><img src="/corporate/assets/img/library/vincent-miccolis-managing-director-middle-east-africa-and-turkiye-the-ascott-at-.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-11-06">06 November 2026</time></span>
					<span class="row__t">Vincent Miccolis, Managing Director - Middle East, Africa and Türkiye, The Ascott at FHS World 2026</span><span class="row__ex">At FHS World, Vincent discusses how Ascott is rethinking the extended-stay model by combining the space and flexibility of residential accommodation with the service and experience of a hotel.

He also explains why the model works commercially, from shifting between short and long stays to support occupancy to choosing markets based on sustainable demand rather than growth for its own sake.   
The conversation also covers Ascott’s expansion across Saudi Arabia, including its target of 15,000 units by 2030, and why the UAE continues to attract hospitality investment and long-term growth.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-middle-east-and-africa"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-m.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-170-scaling-to-100-hotels-aleph-hospitalitys-blueprint-for-m.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 170</span><time datetime="2026-11-05">05 November 2026</time></span>
					<span class="row__t">FHS Podcast Episode 170: Scaling to 100 Hotels - Aleph Hospitality's Blueprint for Middle East and Africa</span><span class="row__ex">Egypt is becoming a central growth market for Aleph Hospitality as the company works toward 100 operating hotels by 2029. In this FHS Egypt podcast, Bani Haddad, Founder and Co-CEO of Aleph Hospitality, discusses why Egypt stands out within Africa’s hotel pipeline, where he sees opportunity across Cairo, the Red Sea and North Coast, and what makes a project commercially viable from the start. He also explains why local market knowledge, strong owner relationships and early operator involvement matter when turning hotel developments into long-term operating businesses.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/philippe-zuber-ceo-kerzner-international-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/philippe-zuber-ceo-kerzner-international-at-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/philippe-zuber-ceo-kerzner-international-at-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-11-04">04 November 2026</time></span>
					<span class="row__t">Philippe Zuber, CEO, Kerzner International at FHS World 2026</span><span class="row__ex">In this FHS World conversation, Philippe Zuber of Kerzner International discusses how the group is building wellness into the full guest journey, differentiating brands such as One&amp;Only, SIRO, Atlantis and Rare Finds, and balancing distinctive experiences with commercial performance. He also explains why access to talent remains one of the biggest risks in hotel development and why strong owner alignment matters when building luxury hospitality for the long term</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/living/content-library/fhs-living-reveals-first-speakers-for-paris-edition-as-hotelisation-reshapes-europes-real-estate-sector"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-living-reveals-first-speakers-for-paris-edition-as-hotelisation-reshapes-eur.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-living-reveals-first-speakers-for-paris-edition-as-hotelisation-reshapes-eur.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-11-04">04 November 2026</time></span>
					<span class="row__t">FHS Living Reveals First Speakers for Paris Edition as Hotelisation Reshapes Europe's Real Estate Sector</span><span class="row__ex">Brookfield, Nuveen Real Estate, Aroundtown, Realstar Group, Candy Capital and Accor One Living among the first names confirmed for Pullman Paris Montparnasse on 23–24 February 2027</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/eddy-tannous-chief-operating-officer-at-rotana-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/eddy-tannous-chief-operating-officer-at-rotana-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/eddy-tannous-chief-operating-officer-at-rotana-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-11-03">03 November 2026</time></span>
					<span class="row__t">Eddy Tannous, Chief Operating Officer at Rotana FHS World 2026</span><span class="row__ex">Eddy Tannous, COO, Rotana Hotels, joins us for a candid conversation at FHS World 2026. He talks about Rotana's aggressive expansion policy and emerging markets that are going to lead the industry in the next few years.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/dima-ladizhenski-regional-sales-and-business-development-executive-fairmas-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/dima-ladizhenski-regional-sales-and-business-development-executive-fairmas-at-fh.webp" type="image/webp"><img src="/corporate/assets/img/library/dima-ladizhenski-regional-sales-and-business-development-executive-fairmas-at-fh.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-11-02">02 November 2026</time></span>
					<span class="row__t">Dima Ladizhenski, Regional Sales and Business Development Executive, Fairmas at FHS World 2026</span><span class="row__ex">Hotel technology often starts with operations, but owners and investors need the same level of visibility into how an asset is performing.

In this FHS World conversation, Dima from Fairmas explains how the company connects hotel operators with owners and investors through a single source of verified financial and operational data. He discusses why spreadsheet-based budgeting and reporting can create problems around consolidation, collaboration, and version control, and how better data can support faster, more precise decision-making.

The conversation also looks at why financial planning and asset reporting deserve a place alongside guest-facing technology, and why Fairmas continues to use FHS as a platform to stay close to hotel owners, operators, and investors across the region.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/hamza-farooqui-ceo-millat-group-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/hamza-farooqui-ceo-millat-group-at-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/hamza-farooqui-ceo-millat-group-at-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-28">28 October 2026</time></span>
					<span class="row__t">Hamza Farooqui, CEO, Millat Group at FHS World 2026</span><span class="row__ex">In this FHS World 2026 interview, the CEO of Millat Group discusses his conviction in the region, why Africa’s growing middle-income traveller could become an increasingly important source market, and why tourism investment needs to account for its wider economic impact beyond traditional real estate metrics.

He also shares his perspective on the UAE as a long-term hospitality hub and the role FHS plays in connecting investors, operators and decision-makers across emerging markets.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/saurabh-tiwari-vice-president-middle-east-sri-lanka-maldives-ihcl-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/saurabh-tiwari-vice-president-middle-east-sri-lanka-maldives-ihcl-at-fhs-world-2.webp" type="image/webp"><img src="/corporate/assets/img/library/saurabh-tiwari-vice-president-middle-east-sri-lanka-maldives-ihcl-at-fhs-world-2.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-27">27 October 2026</time></span>
					<span class="row__t">Saurabh Tiwari, Vice President - Middle East, Sri Lanka &amp; Maldives, IHCL at FHS World 2026</span><span class="row__ex">How does a hospitality group with deep Indian roots translate its identity for the Middle East?

In this FHS interview, Saurabh Tiwari, Vice President - Middle East, Sri Lanka &amp; Maldives at IHCL, discusses the group’s priorities in the region, how IHCL adapts its heritage and hospitality philosophy for the UAE market, and the role digital transformation plays in supporting its growth.

He also shares why forums such as the Future Hospitality Summit remain important for industry collaboration and exchange.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/david-goodman-vp-sales-emea-duetto"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/david-goodman-vp-sales-emea-duetto.webp" type="image/webp"><img src="/corporate/assets/img/library/david-goodman-vp-sales-emea-duetto.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-23">23 October 2026</time></span>
					<span class="row__t">David Goodman, VP Sales EMEA, Duetto</span><span class="row__ex">David Goodman, VP Sales EMEA at Duetto, shares his perspective on how technology and smarter revenue strategy are changing the way hotels approach pricing, demand, and profitability.

As operators work with more data and faster-moving market conditions, the focus is shifting toward making better commercial decisions in real time while keeping long-term performance in view.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/africa/content-library/fhs-africa-announces-new-dates-for-2027-aligning-with-poate-and-afcon"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-africa-announces-new-dates-for-2027-aligning-with-poate-and-afcon.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-africa-announces-new-dates-for-2027-aligning-with-poate-and-afcon.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-10-22">22 October 2026</time></span>
					<span class="row__t">FHS Africa Announces New Dates for 2027, Aligning with POATE &amp; AFCON to Amplify Uganda’s Tourism and Investment Opportunities</span><span class="row__ex">FHS Africa will now take place on 28–29 April 2027 at Speke Resort Munyonyo, Kampala, Uganda, aligning with the Pearl of Africa Tourism Expo (POATE) to create greater synergies between hospitality investment, tourism promotion and business development across the region. The summit was originally scheduled for 2–3 February 2027.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/fhs-podcast-episode-168-beyond-the-numbers-the-reality-of-egypts-hotel-boom"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-168-beyond-the-numbers-the-reality-of-egypts-hotel-boom.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-168-beyond-the-numbers-the-reality-of-egypts-hotel-boom.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 168</span><time datetime="2026-10-21">21 October 2026</time></span>
					<span class="row__t">FHS Podcast Episode 168: Beyond the Numbers: The Reality of Egypt’s Hotel Boom</span><span class="row__ex">Egypt’s hotel sector is attracting significant attention, but headline growth figures only tell part of the story.

In this episode of the FHS Podcast, Eddy Tannous, Chief Operating Officer at Rotana, looks beyond the pipeline to examine what is actually driving hotel demand, where the strongest opportunities are emerging, and what operators need to get right as competition and supply increase.

He also explores the realities behind Egypt’s hotel boom, from market fundamentals and operational performance to the factors that will determine which projects succeed over the long term.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/mansoor-khan-vice-president-worldvue-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/mansoor-khan-vice-president-worldvue-at-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/mansoor-khan-vice-president-worldvue-at-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-20">20 October 2026</time></span>
					<span class="row__t">Mansoor Khan, Vice President, WorldVue at FHS World 2026</span><span class="row__ex">Hotel technology is moving from a collection of standalone systems to a connected operational ecosystem, with cloud solutions, AI, cybersecurity, and seamless guest technology becoming central to how properties are designed and run.

In this FHS World conversation, Mansoor Aman Khan, VP &amp; GM, Middle East, Africa and Indian Ocean at WorldVue, discusses why owners need to invest in the infrastructure behind the guest experience, how technology requirements differ between city hotels and remote resorts, and why Saudi Arabia and the UAE are leading adoption across the region.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/nasser-al-nowais-chairman-rotana-hotels-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/nasser-al-nowais-chairman-rotana-hotels-at-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/nasser-al-nowais-chairman-rotana-hotels-at-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-20">20 October 2026</time></span>
					<span class="row__t">Nasser Al Nowais, Chairman, Rotana Hotels at FHS World 2026</span><span class="row__ex">From helping shape Abu Dhabi’s early tourism sector to building Rotana into one of the Arab world’s leading homegrown hotel management companies, Nasser Al Nowais has witnessed the region’s hospitality industry transform from the ground up.

In this FHS World conversation, the Founder and Chairman of Rotana reflects on the company’s beginnings, the importance of developing regional hospitality talent, Rotana’s growth to more than 120 hotels, and the principles that have shaped its long-term relationships with owners.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/fhs-podcast-from-hotel-rooms-to-destinations-rethinking-hospitality-in-egypt"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-from-hotel-rooms-to-destinations-rethinking-hospitality-in-egypt.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-from-hotel-rooms-to-destinations-rethinking-hospitality-in-egypt.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 167</span><time datetime="2026-10-19">19 October 2026</time></span>
					<span class="row__t">FHS Podcast Episode 167: From Hotel Rooms to Destinations - Rethinking Hospitality in Egypt</span><span class="row__ex">Egypt’s hospitality market is showing clear appetite for lifestyle-led concepts, but growth will depend on more than adding hotel inventory.

In this FHS interview, Aman Malhotra, CFO of Kerten Hospitality, discusses why Egypt is a strategic market for the group, how changing traveller expectations are creating demand for more distinctive hospitality products, and why the focus should shift from simply adding rooms to creating destinations with stronger experiences and long-term commercial value.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/beyond-five-star-hotels-where-egypts-real-hospitality-opportunities-lie"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/beyond-five-star-hotels-where-egypts-real-hospitality-opportunities-lie.webp" type="image/webp"><img src="/corporate/assets/img/library/beyond-five-star-hotels-where-egypts-real-hospitality-opportunities-lie.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 166</span><time datetime="2026-10-18">18 October 2026</time></span>
					<span class="row__t">FHS Podcast Episode 166: Beyond Five-Star Hotels: Where Egypt's Real Hospitality Opportunities Lie</span><span class="row__ex">Hala Matar Choufany, President of HVS Middle East, Africa and South Asia, explores where Egypt’s hospitality opportunities lie beyond five-star hotels, the potential of underserved market segments, and how evolving demand could shape the country’s next phase of hospitality development.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/world/content-library/fhs-podcast-episode-165-the-master-builder-alison-grinnell"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-165-the-master-builder-alison-grinnell.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-165-the-master-builder-alison-grinnell.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 165</span><time datetime="2026-10-15">15 October 2026</time></span>
					<span class="row__t">FHS Podcast Episode 165: The Master Builder: Alison Grinnell</span><span class="row__ex">Ras Al Khaimah is no longer just adding hotels. It is building an entire destination around how people live, work, stay, and play.

In this episode of the FHS Podcast, Alison Grinnell of Marjan explores the emirate’s next phase of growth, from integrated master planning and destination resilience to Marjan Island, Marjan Beach and RAK Central.
She also discusses the upcoming Wynn Al Marjan Island, why collaboration across the emirate matters, and how Ras Al Khaimah is creating a hospitality proposition that is distinctly its own.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/minor-hotels-accelerates-colbert-collection-growth-with-dubai-islands-signing"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/minor-hotels-accelerates-colbert-collection-growth-with-dubai-islands-signing.webp" type="image/webp"><img src="/corporate/assets/img/library/minor-hotels-accelerates-colbert-collection-growth-with-dubai-islands-signing.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-10-15">15 October 2026</time></span>
					<span class="row__t">Minor Hotels Accelerates Colbert Collection Growth with Dubai Islands Signing</span><span class="row__ex">Minor Hotels has signed Ampersand Beach House, a 111-key boutique lifestyle hotel under Colbert Collection on Dubai Islands. Set to open in late 2029, the project will bring Ampersand’s London-born concept to Dubai with a focus on design-led, personalised and experience-driven luxury.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/elias-hayek-shareholder-co-chair-greenberg-traurig-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/elias-hayek-shareholder-co-chair-greenberg-traurig-at-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/elias-hayek-shareholder-co-chair-greenberg-traurig-at-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-12">12 October 2026</time></span>
					<span class="row__t">Elias Hayek, Shareholder &amp; Co-Chair, Greenberg Traurig at FHS World 2026</span><span class="row__ex">In branded residences, the biggest tension often sits between control, standards and exit.

At FHS World 2026, Elias Hayek, Shareholder &amp; Co-Chair, Middle East and European Hospitality Group, Greenberg Traurig, joined us to discuss his session “Terms, Tensions, and Trade-offs” and the key challenges shaping branded residential development.

Elias shared how brands look to protect long-term standards and maintain a relationship with owners’ associations, while developers often seek to monetise and exit once the residential product is sold.

It is a critical conversation for anyone involved in branded residences, mixed-use development and hospitality investment.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/fhs-podcast-episode-164-beyond-co-working-why-workspace-belongs-in-egypts-mixed-use-destinations"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-164-beyond-co-working-why-workspace-belongs-in-egypts-mixed-.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-164-beyond-co-working-why-workspace-belongs-in-egypts-mixed-.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 164</span><time datetime="2026-10-12">12 October 2026</time></span>
					<span class="row__t">FHS Podcast Episode 164: Beyond Co-Working - Why Workspace Belongs in Egypt’s Mixed-Use Destinations</span><span class="row__ex">Michael Aldridge, Founder and CEO of KOFISI, explains how hotel-grade hospitality is reshaping the workplace, why KOFISI is opening three buildings in New Cairo, and why Egypt can leapfrog to tomorrow’s standards.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/ayman-ezzeddine-senior-director-of-development-radisson-hotel-group-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/ayman-ezzeddine-senior-director-of-development-radisson-hotel-group-at-fhs-world.webp" type="image/webp"><img src="/corporate/assets/img/library/ayman-ezzeddine-senior-director-of-development-radisson-hotel-group-at-fhs-world.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-08">08 October 2026</time></span>
					<span class="row__t">Ayman Ezzeddine, Senior Director of Development, Radisson Hotel Group at FHS World 2026</span><span class="row__ex">Hospitality growth often starts in markets others are only beginning to notice.

At FHS World 2026, we sat down with Ayman Ezzeddine, Senior Director of Development, Radisson Hotel Group, to discuss Radisson’s regional expansion, from Egypt and Saudi Arabia’s secondary cities to emerging opportunities in Iraq, Syria and Libya.

Ayman also shared why FHS continues to be an important platform for reconnecting with the industry, exploring new markets and building long-term partnerships.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/awad-bajsair-investment-manager-kingdom-economic-city-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/awad-bajsair-investment-manager-kingdom-economic-city-at-fhs-world-2026.webp" type="image/webp"><img src="/corporate/assets/img/library/awad-bajsair-investment-manager-kingdom-economic-city-at-fhs-world-2026.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-10-08">08 October 2026</time></span>
					<span class="row__t">Awad Bajsair, Investment Manager, Kingdom Economic City at FHS World 2026</span><span class="row__ex">Investment in Madinah is moving beyond traditional demand drivers.
At FHS World 2026, Michelle Turney of The Bench sat down with Awad Bajsair, Investment Manager, Knowledge Economic City, to discuss the investment outlook for Madinah and how Knowledge Economic City is helping shape the city’s next phase of growth.

The conversation explored how new residential, hospitality, retail and mixed-use developments are creating fresh demand beyond religious tourism, while strengthening Madinah’s appeal as a place to live, invest and do business.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/africa/content-library/fhs-africa-launched-ahead-of-2027-hospitality-investment-conference-in-kampala"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-africa-launched-ahead-of-2027-hospitality-investment-conference-in-kampala.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-africa-launched-ahead-of-2027-hospitality-investment-conference-in-kampala.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-10-07">07 October 2026</time></span>
					<span class="row__t">FHS- Africa Launched Ahead of 2027 Hospitality Investment Conference in Kampala</span><span class="row__ex">Uganda has officially begun the countdown to FHS Africa 2027, with Uganda Tourism Board and Kampala Serena Hotel hosting a launch reception ahead of the summit in Kampala on 2–3 February 2027. The event brought together investors, operators, government representatives and tourism leaders, highlighting Uganda’s growing hospitality investment potential and the wider opportunities across tourism, aviation, destination development and local enterprise.</span>
				</span></a></li>
			<li class="row" data-type="insight"><a href="/egypt/content-library/four-questions-with-mohamed-amer"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/four-questions-with-mohamed-amer.webp" type="image/webp"><img src="/corporate/assets/img/library/four-questions-with-mohamed-amer.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Industry news</span><time datetime="2026-10-06">06 October 2026</time></span>
					<span class="row__t">4 Questions with: Mohamed Amer, CEO, El Gouna Red Sea, Managing Director Commercial Activities, Orascom Development Egypt</span><span class="row__ex">Mohamed Amer, CEO of El Gouna Red Sea and Managing Director at Orascom Development Egypt, shares how El Gouna evolved from a resort concept into a fully-fledged town of 25,000+ residents from more than 50 nationalities. He discusses the destination’s focus on long-term placemaking, quality-led growth, sustainability, hospitality and residential development, including Marina Island by Tuban and the new Sofitel partnership. At the heart of El Gouna’s strategy is a simple principle: every new addition should strengthen the town’s identity, community and long-term liveability rather than simply add scale.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/knowledge-economic-city-signs-exclusive-brokerage-agreements-with-keller-williams-saudi-arabia-and-re-max-smart-concept-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/knowledge-economic-city-signs-exclusive-brokerage-agreements-with-keller-william.webp" type="image/webp"><img src="/corporate/assets/img/library/knowledge-economic-city-signs-exclusive-brokerage-agreements-with-keller-william.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-10-02">02 October 2026</time></span>
					<span class="row__t">Knowledge Economic City Signs Exclusive Brokerage Agreements with Keller Williams Saudi Arabia and RE/MAX Smart Concept at FHS World 2026</span><span class="row__ex">Knowledge Economic City (KEC) has signed two exclusive brokerage agreements with Keller Williams Saudi Arabia and RE/MAX Smart Concept for selected residential buildings within its Al Alyaa project in Madinah. Covering approximately 368 residences, the agreements will support Al Alyaa’s sales strategy and expand its reach among qualified local and international buyers and investors. The agreements were signed during FHS World 2026 in Dubai.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/fhs-world-to-return-to-ras-al-khaimah-in-2027"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-world-to-return-to-ras-al-khaimah-in-2027.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-world-to-return-to-ras-al-khaimah-in-2027.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-10-01">01 October 2026</time></span>
					<span class="row__t">FHS World to Return to Ras Al Khaimah in 2027</span><span class="row__ex">FHS World will return to Ras Al Khaimah in November 2027, taking place at Wynn Al Marjan Island through a joint initiative between RAKTDA, Marjan and The Bench. The event is expected to welcome around 1,200 delegates, 250 investors and 200 speakers from 60+ countries, with a programme focused on hospitality investment, destination development, wellness, branded residences, sustainability, technology and AI.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/world/content-library/fhs-podcast-episode-163-five-worlds-one-vision-marc-dardenne-ceo-modon-hospitality-unveils-afiniti"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-163-five-worlds-one-vision-marc-dardenne-ceo-modon-hospitali.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-163-five-worlds-one-vision-marc-dardenne-ceo-modon-hospitali.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 163</span><time datetime="2026-09-30">30 September 2026</time></span>
					<span class="row__t">FHS Podcast Episode 163: Five Worlds, One Vision, Marc Dardenne, CEO, Modon Hospitality, Unveils Afiniti</span><span class="row__ex">Marc Dardenne, CEO of Modon Hospitality, discusses how hospitality is shifting from destination-led travel to experience-led stays, and introduces Afiniti, Modon’s new hospitality brand built around curated experiences including family, adults-only, adventure, urban resort and wellness concepts. He also shares plans for branded residences, expansion beyond Abu Dhabi, and the long-term ambition to build Afiniti into a recognised global hospitality brand.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/student-accommodation-and-senior-living-among-key-assets-shaping-gccs-future-real-estate-market-cavendish-maxwell"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/student-accommodation-and-senior-living-among-key-assets-shaping-gccs-future-rea.webp" type="image/webp"><img src="/corporate/assets/img/library/student-accommodation-and-senior-living-among-key-assets-shaping-gccs-future-rea.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-30">30 September 2026</time></span>
					<span class="row__t">Student accommodation and senior living among key assets shaping GCC’s future real estate market – Cavendish Maxwell</span><span class="row__ex">Cavendish Maxwell identifies student accommodation, senior living and co-living as major emerging opportunities set to shape the GCC real estate market over the next decade. As the lines between residential, hospitality and lifestyle continue to blur, developers and investors are being encouraged to focus on flexible, professionally managed living concepts built around community, services, convenience and changing demographic needs.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/aleph-hospitality-signs-nine-hotels-with-over-1-300-keys-year-to-date"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/aleph-hospitality-signs-nine-hotels-with-over-1-300-keys-year-to-date.webp" type="image/webp"><img src="/corporate/assets/img/library/aleph-hospitality-signs-nine-hotels-with-over-1-300-keys-year-to-date.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-30">30 September 2026</time></span>
					<span class="row__t">Aleph Hospitality signs nine hotels with over 1,300 keys year to date</span><span class="row__ex">Aleph Hospitality has secured 1,330 keys across nine properties in six countries in 2026, bringing the company closer to its target of managing 100 hotels by the end of 2029. The year’s growth spans new agreements in Nigeria, Pakistan, the UAE, Rwanda, Tanzania and Ivory Coast, while also reflecting a wider shift toward flexible independent hotel management and franchise-led operating models across Africa.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/gcc-set-to-deliver-nearly-126-000-new-hotel-rooms-by-2030-taking-total-supply-to-616-000-keys-cavendish-maxwell"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/gcc-set-to-deliver-nearly-126-000-new-hotel-rooms-by-2030-taking-total-supply-to.webp" type="image/webp"><img src="/corporate/assets/img/library/gcc-set-to-deliver-nearly-126-000-new-hotel-rooms-by-2030-taking-total-supply-to.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">GCC set to deliver nearly 126,000 new hotel rooms by 2030, taking total supply to 616,000 keys – Cavendish Maxwell</span><span class="row__ex">Cavendish Maxwell’s latest GCC hospitality research, released at FHS World 2026, projects nearly 126,000 new hotel rooms across the GCC by 2030, taking total regional inventory to around 616,000 rooms. Saudi Arabia leads the development pipeline, followed by the UAE, while the report also examines 2026 occupancy and rate performance across the region amid shifting travel demand and market conditions.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/fhs-world-2026-officially-opens-in-dubai"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-world-2026-officially-opens-in-dubai.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-world-2026-officially-opens-in-dubai.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">FHS WORLD 2026 OFFICIALLY OPENS IN DUBAI</span><span class="row__ex">Dubai, UAE, 29 September 2026: Future Hospitality Summit – FHS World 2026 has officially opened in Dubai today, with an esteemed line up of speakers addressing 1,000 delegates from 50 countries across the globe on the first day of the Middle East’s most influential hospitality investment forum.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/radisson-hotel-group-strengthens-middle-east-and-northeast-africa-growth-with-landmark-signings-openings-and-branded-residences"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/radisson-hotel-group-strengthens-middle-east-and-northeast-africa-growth-with-la.webp" type="image/webp"><img src="/corporate/assets/img/library/radisson-hotel-group-strengthens-middle-east-and-northeast-africa-growth-with-la.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">Radisson Hotel Group strengthens Middle East and Northeast Africa growth with landmark signings, openings, and branded residences</span><span class="row__ex">Radisson Hotel Group is highlighting a strong 12 months of development activity across the Middle East, and Northeast Africa, marked by new signings, openings, strategic conversions, and continued expansion across the region. The momentum reflects sustained owner confidence in the Group’s brands and operating platforms, as well as demand for hospitality products that respond to the region’s expanding business, leisure, religious tourism, and residential markets.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/ihg-hotels-resorts-to-bring-its-midscale-brand-garner-hotels-to-the-middle-east-with-a-dual-signing-in-the-uae"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/ihg-hotels-resorts-to-bring-its-midscale-brand-garner-hotels-to-the-middle-east-.webp" type="image/webp"><img src="/corporate/assets/img/library/ihg-hotels-resorts-to-bring-its-midscale-brand-garner-hotels-to-the-middle-east-.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">IHG Hotels &amp; Resorts to bring its midscale brand, Garner Hotels to the Middle East with a dual signing in the UAE</span><span class="row__ex">Garner Hotel Dubai Al Jaddaf and Garner Hotel Ras Al Khaimah Downtown are expected to open in 2026, introducing IHG’s fastest-scaling brand to the region</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/accor-and-krd-holding-sign-mövenpick-erbil-gomaspan-resort-a-landmark-lakefront-destination-in-iraq"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/accor-and-krd-holding-sign-movenpick-erbil-gomaspan-resort-a-landmark-lakefront-.webp" type="image/webp"><img src="/corporate/assets/img/library/accor-and-krd-holding-sign-movenpick-erbil-gomaspan-resort-a-landmark-lakefront-.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">Accor and KRD Holding sign Mövenpick Erbil Gomaspan Resort, a Landmark Lakefront Destination in Iraq</span><span class="row__ex">THE 150-KEY LAKEFRONT RESORT IS SET TO BECOME A LANDMARK DESTINATION FOR LEISURE, WEDDINGS AND BUSINESS EVENTS WITH MORE THAN 1,300 SQUARE METERS OF EVENT SPACE.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/accor-and-cityview-developments-expand-their-partnership-with-pullman-residences-offices-dubai-meydan"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/accor-and-cityview-developments-expand-their-partnership-with-pullman-residences.webp" type="image/webp"><img src="/corporate/assets/img/library/accor-and-cityview-developments-expand-their-partnership-with-pullman-residences.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">Accor and CITYVIEW Developments expand their partnership with Pullman Residences &amp; Offices Dubai Meydan</span><span class="row__ex">Accor and CITYVIEW Developments have announced Pullman Residences &amp; Offices Dubai Meydan, a new mixed-use development set to open in 2029. The project will feature 282 Pullman branded residences alongside Accor’s first-ever branded offices for sale globally, marking a major expansion of the Pullman brand into commercial real estate. Located in Meydan Horizon, the development will combine residential, workplace, wellness and lifestyle spaces within one integrated destination.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/oman-to-deliver-700-new-hotel-rooms-by-year-end-with-winter-season-expected-to-boost-tourism-recovery-cavendish-maxwell"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/oman-to-deliver-700-new-hotel-rooms-by-year-end-with-winter-season-expected-to-b.webp" type="image/webp"><img src="/corporate/assets/img/library/oman-to-deliver-700-new-hotel-rooms-by-year-end-with-winter-season-expected-to-b.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">Oman to deliver 700 new hotel rooms by year end with winter season expected to boost tourism recovery – Cavendish Maxwell</span><span class="row__ex">Seasonal uplift key driver in H2 following softer performance in H1.</span>
				</span></a></li>
			<li class="row" data-type="press"><a href="/world/content-library/aleph-hospitality-accelerates-dubai-expansion-with-the-management-of-the-landmark-mövenpick-grand-al-bustan"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/aleph-hospitality-accelerates-dubai-expansion-with-the-management-of-the-landmar.webp" type="image/webp"><img src="/corporate/assets/img/library/aleph-hospitality-accelerates-dubai-expansion-with-the-management-of-the-landmar.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Press room</span><time datetime="2026-09-29">29 September 2026</time></span>
					<span class="row__t">Aleph Hospitality accelerates Dubai expansion with the management of the landmark Mövenpick Grand Al Bustan</span><span class="row__ex">Aleph Hospitality is expanding its Dubai portfolio with the management of the landmark Mövenpick Grand Al Bustan, marking its third hotel agreement with West F5 Investments LLC. The deal further strengthens the long-term partnership between the two companies and reflects Aleph Hospitality’s continued growth in the UAE.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/world/content-library/fhs-podcast-161-the-uaes-next-chapter-a-conversation-on-tourism-and-investment"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-161-the-uaes-next-chapter-a-conversation-on-tourism-and-investment.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-161-the-uaes-next-chapter-a-conversation-on-tourism-and-investment.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 161</span><time datetime="2026-09-25">25 September 2026</time></span>
					<span class="row__t">FHS Podcast 161: The UAE's Next Chapter: A Conversation on Tourism and Investment</span><span class="row__ex">In this episode of the FHS Podcast, Mohammed Al Ahbabi, Director of Tourism Development at the UAE Ministry of Economy and Tourism, joins us to discuss the UAE’s continued strength as a global tourism and investment hub.

The conversation explores what is driving the country’s resilience, how the Ministry is supporting long-term tourism growth, and where the next opportunities are emerging across investment, destination development, infrastructure, talent and lifestyle.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/world/content-library/fhs-podcast-episode-162-madinahs-new-investment-story-building-a-destination-for-the-world"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-162-madinahs-new-investment-story-building-a-destination-for.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-162-madinahs-new-investment-story-building-a-destination-for.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 162</span><time datetime="2026-09-24">24 September 2026</time></span>
					<span class="row__t">FHS Podcast Episode 162: Madinah’s New Investment Story: Building a Destination for the World</span><span class="row__ex">In this episode, Dr. Moath Alyahya, Chief Executive Officer of Knowledge Economic City, explores how Madinah is evolving into a broader investment, hospitality and mixed-use destination. The conversation looks at KEC’s expansion strategy, major developments including Knowledge Gardens and the Islamic World District, changing demand beyond religious tourism, and how new partnerships and investment structures are helping shape the city’s next chapter under Vision 2030.</span>
				</span></a></li>
			<li class="row" data-type="video"><a href="/world/content-library/dimitris-mankis-president-emea-wyndham-hotels-resorts-on-his-participation-at-fhs-world-2026"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/dimitris-mankis-president-emea-wyndham-hotels-resorts-on-his-participation-at-fh.webp" type="image/webp"><img src="/corporate/assets/img/library/dimitris-mankis-president-emea-wyndham-hotels-resorts-on-his-participation-at-fh.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Video insights</span><time datetime="2026-09-22">22 September 2026</time></span>
					<span class="row__t">Dimitris Mankis, President EMEA, Wyndham Hotels &amp; Resorts on his participation at FHS World 2026</span><span class="row__ex">Dimitris Mankis shares his excitement about FHS World 2026 and how the market is showing signs of recovery and resilience.</span>
				</span></a></li>
			<li class="row" data-type="podcast"><a href="/egypt/content-library/fhs-podcast-episode-160-lars-geweyer-chief-executive-officer-add-properties-hospitality-division"><span class="row__img"><picture><source srcset="/corporate/assets/img/library/fhs-podcast-episode-160-lars-geweyer-chief-executive-officer-add-properties-hosp.webp" type="image/webp"><img src="/corporate/assets/img/library/fhs-podcast-episode-160-lars-geweyer-chief-executive-officer-add-properties-hosp.jpg" alt="" width="960" height="540" loading="lazy"></picture></span>
				<span class="row__text">
					<span class="meta"><span>Podcast · Episode 160</span><time datetime="2026-09-22">22 September 2026</time></span>
					<span class="row__t">FHS Podcast Episode 160: Lars Geweyer, Chief Executive Officer, ADD Properties - Hospitality Division</span><span class="row__ex">Lars Geweyer, CEO of ADD Properties, joins the FHS Egypt Podcast to discuss Egypt’s hospitality growth story, the challenge of converting pipeline into delivered supply, the rise of branded residences, ADD Properties’ partnership with Hyatt and the growing potential of Cairo West. He also shares what is needed to unlock the next wave of hospitality investment across Egypt.</span>
				</span></a></li>
		</ol>
	</div><!--/slot:library-->
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
	title: "Content library | Future Hospitality Summit",
	description: "Session films, the FHS Podcast, press releases and insight from Future Hospitality Summit and its six summits.",
	css: ["pages/library.css"],
	js: ["pages/library.js"],
	html,
}

export default page
