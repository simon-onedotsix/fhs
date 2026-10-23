import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { img } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'
import { Market } from '../../../ui-living/sections/market'
import { MixBar } from '../../../ui-living/sections/mix-bar'
import { CapitalMap } from '../../../ui-living/sections/capital-map'
import { AdvisorsWall } from '../../../ui-living/sections/advisors-wall'
import { Glance } from '../../../ui-living/sections/glance'
import { DubaiTeaser } from '../../../ui-living/sections/dubai-teaser'
import { LinkedinStrip } from '../../../ui-living/sections/linkedin-strip'
import { Passes, passOffer, bookBefore } from '../../../ui-living/sections/passes'
import { Quote } from '../../../ui-living/sections/quote'
import { PartnerStrip } from '../../../ui-living/sections/partner-strip'

import facts from '../../../ui-living/data/facts.json'
import flows from '../../../ui-living/data/flows.json'
import dubai from '../../../ui-living/data/dubai.json'
import concl from '../../../ui-living/data/conclusions.json'
import linkedin from '../../../ui-living/data/linkedin.json'
import { loadAdvisors, loadPartners, loadPasses, loadProgramme, REVALIDATE } from '../../../ui-living/lib/cms'
import { HIGH } from '../../../ui-living/lib/attrs'

const COMES = {
	Capital: 'Family offices including from the Middle East, sovereign wealth funds, private equity, asset managers, pension funds and lenders.',
	Developers: 'Residential, mixed-use and hospitality developers building across Europe.',
	'Operators and owners': 'Branded residences, student, senior, serviced and co-living operators, and hotel groups through their living arms.',
	Enablers: 'Advisors, brokers, lawyers, designers and technology, selected.',
}

function Room({ f }) {
	const claim = f.size_claim.text
	return (
		<section className={c('section tint')} aria-labelledby="room-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="room-h">Who you&apos;ll meet.</h2><p>{claim[0].toUpperCase() + claim.slice(1)}, with capital at the centre of the room.</p></div>
				<MixBar mix={f.mix} />
				<div className={c('groups')}>
					{f.mix.map(g => <div key={g.group} className={c('group')}><h3><i aria-hidden="true"></i>{g.group}<span className={c('group__n')}> {g.pct}%</span></h3><p>{COMES[g.group]}</p></div>)}
				</div>
			</div>
		</section>
	)
}

export default function Paris(p) {
	const { f, delegate } = p
	const theme = n => (p.programme.days.find(d => d.n === n) || {}).theme
	return (
		<LivingPage page="paris" title="FHS Living Paris | Founding Edition, 23–24 February 2027" description="The Founding Edition of FHS Living: two days at Pullman Paris Montparnasse where capital from Europe and the Middle East meets hospitality-led real estate.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Where hospitality <span className={c('accent')}>reimagines real&nbsp;estate.</span></h1>
						<p className={c('page-hero__when')}>Paris, {f.event.dates}<span>{f.event.venue}</span></p>
						<p className={c('lede')}>The Founding Edition of FHS Living: two days where real estate capital from Europe and the Middle East meets the operators and developers who make hospitality-led real estate perform.</p>
						<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><Link href={R.investors} prefetch={false}><a className={c('btn btn--ghost')}>Investor? Start here</a></Link><a className={c('link')} href={R.experience}>Explore FHS Living in 3D</a></div>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('photo/paris-diamond.jpg')} width="1220" height="860" alt="Paris from above, the Eiffel Tower and the Seine" {...HIGH} /></div></figure>
				</div>
			</section>

			<Market hid="mkt-h" title={`${f.largest.text}.`} intro="Investment rose 22% in 2025, and almost every institutional investor in the sector plans to put more in." bg="tint" />

			<CapitalMap flows={p.flows} hid="flow-h" title="Middle East capital, flowing into Europe."
				intro={`Since 2023, investors from the UAE, Saudi Arabia, Qatar, Kuwait and Bahrain have backed hotels, branded residences, housing and student beds in ${p.flows.n_dest} European countries. Future Hospitality Summit has spent ${f.relationships.years} years building relationships with Gulf capital.`} />

			<Room f={f} />

			<AdvisorsWall advisors={p.advisors} />

			<section className={c('section tint')} aria-labelledby="fmt-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="fmt-h">See it. Work it. Meet.</h2><p>The stage opens each day. Roundtables and hosted investor meetings follow.</p></div>
					<ol className={c('steps')}>
						<li className={c('step')}><figure><img src={img('dubai/800/stage-panel.jpg')} width="1600" height="792" alt="A panel on the FHS Living stage" loading="lazy" /></figure><h3>Keynotes and panels</h3><p>{theme('01')} on day one. {theme('02')} on day two.</p></li>
						<li className={c('step')}><figure><img src={img('photo/roundtable-room.jpg')} width="1600" height="1065" alt="A roundtable at a Future Hospitality Summit event" loading="lazy" /></figure><h3>Roundtables and masterclasses</h3><p>Underwriting, regulation and operations, in small rooms rather than panels watched from row nine.</p></li>
						<li className={c('step')}><figure><img src={img('dubai/800/lounge-meeting.jpg')} width="1600" height="900" alt="Delegates in 1:1 meetings at FHS World" loading="lazy" /></figure><h3>Matched 1:1 meetings</h3><p>AI-powered matchmaking books your meetings on your investment criteria. Hosted investor meetings run on both days.</p></li>
					</ol>
				</div>
			</section>

			<Glance programme={p.programme} link={R.programme} linkLabel="The full running order" bg="" />
			<DubaiTeaser dubai={p.dubai} concl={p.concl} />
			<LinkedinStrip linkedin={p.linkedin} />

			<section className={c('section band')} aria-labelledby="pass-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="pass-h">One price. One date it rises.</h2><p>{bookBefore(delegate)}</p></div>
					<Passes delegate={delegate} investor={p.investor} />
				</div>
			</section>

			<section className={c('section')} aria-labelledby="partners-h">
				<div className={c('wrap')}>
					<Quote text={f.quote_partner.text} photo="advisors/jeff-tisdall.jpg" name={f.quote_partner.name} role={`${f.quote_partner.role}, ${f.quote_partner.note}`} />
					<h2 className={c('sr')} id="partners-h">Partners</h2>
					<PartnerStrip partners={p.partners} style={{ marginTop: 56 }} />
				</div>
			</section>

			<figure className={c('fullbleed')} aria-labelledby="venue-h">
				<img src={img('photo/paris.jpg')} width="1600" height="1116" alt="Paris from above" loading="lazy" />
				<figcaption className={c('fullbleed__card')}>
					<h2 id="venue-h">{f.event.venue}</h2>
					<p>{f.event.address}. Beside Gare Montparnasse.</p>
					<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><Link href={R.venue} prefetch={false}><a className={c('link')}>Venue and travel</a></Link></div>
				</figcaption>
			</figure>
		</LivingPage>
	)
}
Paris.theme = 'living'

const pass = (passes, title) => passes.passes.find(x => x.title.startsWith(title))

export async function getStaticProps() {
	const [advisors, partners, passes, programme] = await Promise.all([loadAdvisors(), loadPartners(), loadPasses(), loadProgramme()])
	return {
		revalidate: REVALIDATE,
		props: {
			f: facts,
			advisors: advisors.people,
			flows,
			programme,
			dubai,
			concl,
			linkedin,
			partners,
			delegate: passOffer(pass(passes, 'Delegate')),
			investor: passOffer(pass(passes, 'Investor')),
		},
	}
}
