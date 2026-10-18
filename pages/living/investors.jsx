import Link from 'next/link'

import { LivingPage } from '../../ui-living/site/page'
import { HubspotForm } from '../../ui-living/site/hubspot-form'
import { c } from '../../ui-living/lib/c'
import { img, money } from '../../ui-living/lib/format'
import { R } from '../../ui-living/lib/routes'
import { useInView } from '../../ui-living/lib/use-in-view'
import { CapitalMap } from '../../ui-living/sections/capital-map'
import { Quote } from '../../ui-living/sections/quote'
import { passOffer } from '../../ui-living/sections/passes'

import facts from '../../ui-living/data/facts.json'
import flows from '../../ui-living/data/flows.json'
import { loadAdvisors, loadPasses } from '../../ui-living/lib/cms'
import { HIGH } from '../../ui-living/lib/attrs'

// Investor mix by type (Marina Franolic, 16 Oct 2026, modelled on FHS World); HNWI (1%) folded into family offices.
const MIX = [
	['Investment companies', 23], ['Developers', 15], ['Private equity', 13], ['Investment funds', 12], ['REITs', 8],
	['Sovereign wealth and pension funds', 7], ['Family offices and private investors', 7], ['Asset managers', 6],
	['Owner-operators', 5], ['Banks and financial services', 4],
]

// The mix as rows of faceted diamonds, one per cent each, largest first; they fill in when the chart comes into view.
function InvestorMix() {
	const [ref, inView] = useInView()
	return (
		<figure ref={ref} className={c('imix', inView && 'is-in')} data-inview>
			<ol>
				{MIX.map(([type, pct], i) => (
					<li key={type} style={{ '--i': i }}>
						<span>{type}</span><span className={c('imix__val')}>{pct}%</span>
						<span className={c('imix__units')} aria-hidden="true">{Array.from({ length: pct }, (_, k) => <span key={k} style={{ '--k': k }}></span>)}</span>
					</li>
				))}
			</ol>
			<figcaption>Each diamond is 1% of investors. Expected mix for Paris, modelled on FHS World 2026.</figcaption>
		</figure>
	)
}

export default function Investors({ f, flows, investor, nAdv }) {
	const price = `${money(investor.current.ex_vat)} + VAT`
	return (
		<LivingPage page="investors" title="FHS Living | For investors" description="Meet the operators and developers who make hospitality-led real estate perform, in meetings matched to your criteria. Pass refunded after your meetings.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Built around the capital <span className={c('accent')}>in the room.</span></h1>
						<p className={c('lede')}>You meet the operators and developers who make hospitality-led real estate perform, in meetings matched to what you invest in. Then you decide what to underwrite.</p>
						<div className={c('actions')}><a className={c('btn')} href={investor.url}>Apply for an Investor Pass</a><a className={c('btn btn--ghost')} href="#talk">Talk to us first</a></div>
						<p className={c('page-hero__facts')}><span><b>Investor Pass {price}</b> refunded once your meetings take place</span></p>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('photo/meeting-gulf.jpg')} width="1600" height="1066" alt="A 1:1 meeting between delegates at a Future Hospitality Summit event" {...HIGH} /></div></figure>
				</div>
			</section>

			<CapitalMap flows={flows} hid="corr-h" title="Where Middle East capital is going." bg="tint"
				intro={`Sovereign funds, family offices, developers and banks from five Gulf states have backed hotels, branded residences, housing and student beds across Europe since 2023. Future Hospitality Summit has spent ${f.relationships.years} years building relationships with Gulf capital.`} />

			<section className={c('section')} aria-labelledby="types-h">
				<div className={c('wrap capstack')}>
					<div>
						<h2 className={c('ruled')} id="types-h">Every layer of the capital stack.</h2>
						<p className={c('lede')} style={{ marginTop: 20 }}>From sovereign wealth funds to lenders, from Europe and the Middle East. FHS Living puts every layer of capital in one room with the operators and developers who make hospitality-led real estate perform.</p>
					</div>
					<InvestorMix />
				</div>
			</section>

			<section className={c('section tint')} aria-labelledby="match-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="match-h">Your criteria set the agenda.</h2><p>Hosted investor meetings run on both days, alongside the roundtables.</p></div>
					<ol className={c('steps')}>
						<li className={c('step')}><figure><img src={img('photo/ab-guests.jpg')} width="800" height="533" alt="Founding Advisors in conversation at the FHS Living Advisory Board, London" loading="lazy" /></figure><h3>Tell us what you invest in</h3><p>Asset class, geography, ticket size and the partners you want to meet: operators, developers or co-investors.</p></li>
						<li className={c('step')}><figure><img src={img('photo/roundtable-table.jpg')} width="1200" height="800" alt="Pre-scheduled meetings under way at a Future Hospitality Summit event" loading="lazy" /></figure><h3>We propose the meetings</h3><p>Our AI-powered matchmaking app suggests the people worth your time. You accept, decline or ask for more.</p></li>
						<li className={c('step')}><figure><img src={img('photo/meeting-lounge.jpg')} width="1200" height="900" alt="A private meeting between two delegates" loading="lazy" /></figure><h3>Meet in private</h3><p>Pre-scheduled 1:1s in dedicated meeting rooms, plus the Investors Lounge and closed-door investor sessions.</p></li>
					</ol>
				</div>
			</section>

			<section className={c('section')} aria-label="What the room said">
				<div className={c('wrap')}>
					<Quote text={f.quote_brookfield.text} name={f.quote_brookfield.name} role={f.quote_brookfield.role} />
				</div>
			</section>

			<section className={c('section band')} aria-labelledby="ipass-h">
				<div className={c('wrap split')}>
					<div>
						<h2 className={c('ruled')} id="ipass-h">{price}. Refunded after your meetings.</h2>
						<p style={{ marginTop: 20 }}>The pass covers the full programme, the Investors Lounge, pre-arranged 1:1 meetings and invitations to closed-door investor sessions within 12 months of registration.</p>
					</div>
					<div className={c('actions')}><a className={c('btn btn--light')} href={investor.url}>Apply for an Investor Pass</a><Link href={R.passes} prefetch={false}><a className={c('btn btn--line-light')}>Compare passes</a></Link></div>
				</div>
			</section>

			<section className={c('section')} id="talk" aria-labelledby="talk-h">
				<div className={c('wrap split split--top')}>
					<div>
						<h2 className={c('ruled')} id="talk-h">Tell us what you are looking for.</h2>
						<p className={c('lede')} style={{ marginTop: 20 }}>Marina Franolic leads investor relations for FHS Living. Share your criteria and she will come back with the operators, developers and opportunities that fit.</p>
						<div className={c('contact-card')}><img src={img('team/marina.jpg')} width="600" height="750" alt="" loading="lazy" /><span><b>Marina Franolic</b><a className={c('link')} href="mailto:marina.franolic@thebench.com">marina.franolic@thebench.com</a></span></div>
					</div>
					<div className={c('formbox')}>
						<HubspotForm id="hs-investor" formId={f.hubspot.investor_form} />
						<noscript><p>The investor form needs JavaScript. Email <a href="mailto:marina.franolic@thebench.com">marina.franolic@thebench.com</a> instead.</p></noscript>
					</div>
				</div>
			</section>

			<section className={c('section tint section--tight')} aria-label="Keep reading">
				<div className={c('wrap')}><div className={c('close')}>
					<div><h3>See who you will meet</h3><p>Operators, developers and {nAdv} Founding Advisors, by asset class.</p><Link href={R['who-is-in-the-room']} prefetch={false}><a className={c('btn btn--ghost')}>Who&apos;s in the room</a></Link></div>
					<div><h3>See the programme</h3><p>Two days on where capital is moving and how deals get done.</p><Link href={R.programme} prefetch={false}><a className={c('btn btn--ghost')}>The programme</a></Link></div>
				</div></div>
			</section>
		</LivingPage>
	)
}
Investors.theme = 'living'

export async function getStaticProps() {
	const [advisors, passes] = await Promise.all([loadAdvisors(), loadPasses()])
	return {
		props: {
			f: facts,
			flows,
			nAdv: advisors.people.length,
			investor: passOffer(passes.passes.find(x => x.title.startsWith('Investor'))),
		},
	}
}
