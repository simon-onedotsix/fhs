import Link from 'next/link'

import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { dayBefore, humanDate, img, money } from '../../ui-living/lib/format'
import { R } from '../../ui-living/lib/routes'
import { useInView } from '../../ui-living/lib/use-in-view'
import { Passes, passOffer } from '../../ui-living/sections/passes'

import facts from '../../ui-living/data/facts.json'
import { loadPasses } from '../../ui-living/lib/cms'

// The Delegate Pass staircase: the band that closed, the one on sale, the next one. Only while a rise is scheduled.
function Rate({ delegate }) {
	const [ref, inView] = useInView()
	const { previous: past, current, next } = delegate
	if (!past || !next) return null
	const h = band => `${Math.round(band.ex_vat / next.ex_vat * 1000) / 10}%`
	const from = humanDate(next.start)
	return (
		<figure ref={ref} className={c('rate', inView && 'is-in')} data-inview
			aria-label={`Delegate Pass, excluding VAT: ${money(past.ex_vat)} until ${dayBefore(past.end)}, ${money(current.ex_vat)} until ${dayBefore(current.end)}, ${money(next.ex_vat)} from ${from}`}>
			<div className={c('rate__bars')} aria-hidden="true">
				<div className={c('rate__bar is-past')} style={{ '--h': h(past) }}><b>{money(past.ex_vat)}</b><span>Closed {dayBefore(past.end)}</span></div>
				<div className={c('rate__bar is-now')} style={{ '--h': h(current) }}><b>{money(current.ex_vat)}</b><span>Now, until {dayBefore(current.end)}</span></div>
				<div className={c('rate__bar')} style={{ '--h': '100%' }}><b>{money(next.ex_vat)}</b><span>From {from.slice(0, from.lastIndexOf(' '))}</span></div>
			</div>
			<figcaption>Delegate Pass, excluding VAT.</figcaption>
		</figure>
	)
}

export default function PassesPage({ f, delegate, investor }) {
	return (
		<LivingPage page="passes" title="FHS Living | Register to attend" description="Delegate and Investor Passes for the FHS Living Founding Edition, Paris, 23–24 February 2027. Prices, what is included and when the rate rises.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Book your place in <span className={c('accent')}>Paris.</span></h1>
						<p className={c('lede')}>Two days at {f.event.venue}, {f.event.dates}.{delegate.next && ` The Delegate Pass rises on ${humanDate(delegate.next.start)}.`}</p>
						<div className={c('actions')}><a className={c('btn')} href={delegate.url}>Book a Delegate Pass</a><a className={c('btn btn--ghost')} href={investor.url}>Apply for an Investor Pass</a></div>
					</div>
					<Rate delegate={delegate} />
				</div>
			</section>

			<section className={c('section band')} aria-labelledby="pass-h">
				<div className={c('wrap')}>
					<h2 className={c('sr')} id="pass-h">Passes</h2>
					<Passes delegate={delegate} investor={investor} />
					<p className={c('source')}>Prices exclude VAT at {delegate.vat_rate}%. Bookings are handled by our registration partner on eventbooking.uk.com.</p>
				</div>
			</section>

			<section className={c('section')} aria-labelledby="faq-h">
				<div className={c('wrap split split--top')}>
					<div>
						<h2 className={c('ruled')} id="faq-h">Before you book.</h2>
						<div className={c('photo photo--wide')} style={{ marginTop: 36 }}><img src={img('photo/meeting-lounge.jpg')} width="1200" height="900" alt="Two delegates in a private meeting at a Future Hospitality Summit event" loading="lazy" /></div>
					</div>
					<div className={c('faq')}>
						<details><summary>Who qualifies for the Investor Pass?</summary><p>Capital allocators: family offices, sovereign wealth funds, private equity, asset managers, pension funds, REITs and lenders investing across FHS Living&apos;s nine asset classes. Apply through the investor route and our investor relations team will be in touch.</p></details>
						<details><summary>How does the Investor Pass refund work?</summary><p>You pay {money(investor.current.ex_vat)} + VAT when you book. It is refunded once your scheduled meetings at the event take place.</p></details>
						<details><summary>Can I send a colleague in my place?</summary><p>Yes. Name changes are possible before the event. Contact the team at {f.contact.email}.</p></details>
						<details><summary>I am a Founding Advisor. Do I need a pass?</summary><p>Founding Advisors attend as our guests. Use the code shared with you by the team when you register.</p></details>
						<details><summary>What about partners and exhibitors?</summary><p>Partner packages include passes. See <Link href={R.partners} prefetch={false}><a className={c('link')}>partnership options</a></Link> or contact Matthew Weihs.</p></details>
					</div>
				</div>
			</section>

			<section className={c('section tint section--tight')} aria-label="Other ways in">
				<div className={c('wrap')}><div className={c('close')}>
					<div><h3>Not ready to book?</h3><p>Register your interest and we will send the programme and names as they are confirmed.</p><Link href={R.register} prefetch={false}><a className={c('btn btn--ghost')}>Register your interest</a></Link></div>
					<div><h3>Questions about the event?</h3><p>Write to the team. Matthew, Tanja, Marina and Ahmed are listed on the contact page.</p><Link href={R.contact} prefetch={false}><a className={c('btn btn--ghost')}>Contact the team</a></Link></div>
				</div></div>
			</section>
		</LivingPage>
	)
}
PassesPage.theme = 'living'

const pass = (passes, title) => passes.passes.find(x => x.title.startsWith(title))

export async function getStaticProps() {
	const passes = await loadPasses()
	return { props: { f: facts, delegate: passOffer(pass(passes, 'Delegate')), investor: passOffer(pass(passes, 'Investor')) } }
}
