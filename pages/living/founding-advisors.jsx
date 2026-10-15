import { useEffect, useState } from 'react'
import Link from 'next/link'

import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { img } from '../../ui-living/lib/format'
import { R } from '../../ui-living/lib/routes'
import { MixBar } from '../../ui-living/sections/mix-bar'

import facts from '../../ui-living/data/facts.json'
import { loadAdvisors } from '../../ui-living/lib/cms'
import { HIGH } from '../../ui-living/lib/attrs'

const LINES = {
	Capital: 'Family offices including from the Gulf, sovereign wealth funds, private equity, asset managers, pension funds, REITs and lenders.',
	Developers: 'Residential, mixed-use and hospitality developers building across Europe.',
	'Operators and owners': 'Branded residences, student, senior, serviced and co-living operators, and hotel groups through their living arms.',
	Enablers: 'Advisors, brokers, lawyers, designers and technology, selected.',
}

// The Founding Advisors, filterable by the asset classes they focus on. The filter needs JavaScript, so it stays
// hidden until the page is running; without it every advisor is listed.
function Directory({ people, order, counts }) {
	const [ready, setReady] = useState(false)
	const [filter, setFilter] = useState('*')
	useEffect(() => setReady(true), [])
	const shown = p => filter === '*' || p.focus.includes(filter)
	const n = people.filter(shown).length
	return (
		<>
			<div className={c('rail-filter')} role="group" aria-label="Filter by asset class" hidden={!ready}>
				<button type="button" aria-pressed={filter === '*'} onClick={() => setFilter('*')}>All<span>{people.length}</span></button>
				{order.filter(cl => counts[cl]).map(cl => (
					<button key={cl} type="button" aria-pressed={filter === cl} onClick={() => setFilter(cl)}>{cl}<span>{counts[cl]}</span></button>
				))}
			</div>
			<p className={c('readout')} aria-live="polite">{filter === '*' ? '' : `${n} Founding Advisor${n === 1 ? '' : 's'} focused on ${filter}.`}</p>
			<ul className={c('directory')}>
				{people.map(a => (
					<li key={a.slug} className={c('person')} data-focus={a.focus.join('|')} hidden={!shown(a)}>
						<figure>
							<div className={c('window')}><img src={img(a.photo)} width="360" height="440" alt={a.name} loading="lazy" /></div>
							<figcaption><b>{a.name}</b><span>{a.title}</span><span>{a.company}</span>{a.focus.length > 0 && <span className={c('focus')}>{a.focus.join(' · ')}</span>}</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</>
	)
}

export default function WhoIsInTheRoom({ f, adv }) {
	const n = adv.people.length
	const claim = f.size_claim.text
	return (
		<LivingPage page="who-is-in-the-room" title="FHS Living | Who's in the room" description={`Who you will meet at FHS Living: capital, developers, operators and enablers, and the ${n} Founding Advisors who shaped the Founding Edition.`}>
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Who <span className={c('accent')}>you&apos;ll meet.</span></h1>
						<p className={c('lede')}>{claim[0].toUpperCase() + claim.slice(1)} across four groups, with capital at the centre of the room.</p>
						<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><a className={c('btn btn--ghost')} href="#directory">The Founding Advisors</a></div>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('photo/auditorium.jpg')} width="1200" height="630" alt="The plenary room at a Future Hospitality Summit event" {...HIGH} /></div></figure>
				</div>
			</section>

			<section className={c('section')} aria-labelledby="mix-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="mix-h">Four groups. One room.</h2><p>The mix is set by design, so every operator meets capital and every investor meets the people who run the assets.</p></div>
					<MixBar mix={f.mix} />
					<div className={c('groups')}>
						{f.mix.map(g => <div key={g.group} className={c('group')}><p className={c('group__pct')}>{g.pct}%</p><h3><i aria-hidden="true"></i>{g.group}</h3><p>{LINES[g.group]}</p></div>)}
					</div>
					<p className={c('note-line')}>Speakers are announced as they are confirmed. Investors: <Link href={R.investors} prefetch={false}><a className={c('link')}>see how meetings are matched</a></Link>.</p>
				</div>
			</section>

			<section className={c('section tint')} id="directory" aria-labelledby="fa-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="fa-h">{n} Founding Advisors shaped the Founding Edition.</h2><p>Investors, developers, operators and advisors from across hospitality and real estate. Filter by the asset classes they focus on.</p></div>
					<Directory people={adv.people} order={adv.order} counts={adv.counts} />
				</div>
			</section>

			<section className={c('section')} aria-labelledby="ab-h">
				<div className={c('wrap split')}>
					<div className={c('photo photo--wide')}><img src={img('photo/ab-talk.jpg')} width="800" height="533" alt="Founding Advisors at the FHS Living Advisory Board in London" loading="lazy" /></div>
					<div>
						<h2 className={c('ruled')} id="ab-h">The board met at Maslow&apos;s Kensington.</h2>
						<p className={c('lede')} style={{ marginTop: 20 }}>London, September 2026. Their conclusion shaped the programme: real estate has a great deal to learn from how hospitality operates, and hospitality from how real estate underwrites.</p>
						<Link href="/living/content-library/the-hotelisation-of-real-estate-inside-the-fhs-living-advisory-board-at-maslows-kensington" prefetch={false}><a className={c('link')}>Read what the board concluded</a></Link>
					</div>
				</div>
			</section>

			<section className={c('section band section--tight')} aria-labelledby="meet-h">
				<div className={c('wrap split')}>
					<h2 id="meet-h">Meet them in Paris, {f.event.dates}.</h2>
					<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn btn--light')}>Register to attend</a></Link><Link href={R.register} prefetch={false}><a className={c('btn btn--line-light')}>Register your interest</a></Link></div>
				</div>
			</section>
		</LivingPage>
	)
}
WhoIsInTheRoom.theme = 'living'

export async function getStaticProps() {
	return { props: { f: facts, adv: await loadAdvisors() } }
}
