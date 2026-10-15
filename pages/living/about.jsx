import Link from 'next/link'

import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { img } from '../../ui-living/lib/format'
import { R } from '../../ui-living/lib/routes'
import { Market } from '../../ui-living/sections/market'
import { EditionsRail } from '../../ui-living/sections/atlas'

import facts from '../../ui-living/data/facts.json'
import editions from '../../ui-living/data/editions.json'
import { HIGH } from '../../ui-living/lib/attrs'

export default function About({ f, editions }) {
	return (
		<LivingPage page="about" title="FHS Living | About" description="Future Hospitality Summit's platform for the hotelisation of real estate, organised by The Bench. A letter from the Chairman, Jonathan Worsley.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Built by Future Hospitality Summit. <span className={c('accent')}>Built for living.</span></h1>
						<p className={c('lede')}>FHS Living is organised by The Bench, the team behind Future Hospitality Summit in Dubai, Riyadh, Cairo and Africa. It grew out of the Branded Residences Forum and now covers nine asset classes where hospitality meets real estate.</p>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('photo/auditorium-diamond.jpg')} width="894" height="630" alt="The plenary room at a Future Hospitality Summit event" {...HIGH} /></div></figure>
				</div>
			</section>

			<Market hid="why-h" title="Why now." intro={`${f.largest.text}. Demand is structural, and capital is following it.`} bg="tint" shortfall={f.shortfall} />

			<section className={c('section')} aria-labelledby="letter-h">
				<div className={c('wrap split split--top')}>
					<figure style={{ margin: 0 }}>
						<div className={c('window')} style={{ aspectRatio: '4/5', maxWidth: 440 }}><img src={img('photo/chairman.jpg')} width="900" height="872" alt="Jonathan Worsley, Chairman, The Bench" loading="lazy" style={{ objectPosition: 'center top' }} /></div>
						<figcaption className={c('cap')}><strong style={{ color: 'var(--ink)' }}>Jonathan Worsley</strong><br />Chairman, The Bench</figcaption>
					</figure>
					<div className={c('prose')}>
						<h2 className={c('ruled')} id="letter-h" style={{ marginBottom: 28 }}>Hospitality is no longer a standalone asset class.</h2>
						<p className={c('lede')}>It is becoming a layer of value across real estate, influencing how people live, work and experience space.</p>
						<p>Investors are allocating capital into living sectors such as branded residences, student housing, senior living and serviced apartments, and these have become core components of their portfolios. Yet the industry lacks a single platform that brings these asset classes together across Europe in a focused, investment-led environment.</p>
						<p>FHS Living has been created to address this gap. It is designed as a curated forum where global capital meets developers and operators across the full spectrum of living and hospitality assets. A place where operational expertise and real estate ownership converge. A place where deals are initiated, partnerships are formed and new models of living are defined.</p>
					</div>
				</div>
			</section>

			<section className={c('section tint')} aria-labelledby="record-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="record-h">Three decades of hospitality investment forums.</h2><p>{f.heritage.text}. Across the 2025 Future Hospitality Summit series:</p></div>
					<ul className={c('facts')}>
						{f.credentials.map(x => <li key={x.label}><b>{x.value}</b><span>{x.label}</span></li>)}
					</ul>
				</div>
			</section>

			<section className={c('section')} aria-labelledby="story-h">
				<div className={c('wrap split')}>
					<div>
						<h2 className={c('ruled')} id="story-h">From one asset class to nine.</h2>
						<p className={c('lede')} style={{ marginTop: 20 }}>The Branded Residences Forum began with a simple idea: bring the people shaping branded residences into one room. The capital and developers behind those projects moved into student housing, senior living and co-living. In August 2026 the forum became FHS Living, one platform for all of it. Branded residences remain a core pillar.</p>
					</div>
					<div className={c('photo photo--wide')}><img src={img('photo/brf-stage.jpg')} width="1200" height="900" alt="The Branded Residences Forum stage" loading="lazy" /></div>
				</div>
			</section>

			<section className={c('section tint section--tight')} aria-labelledby="ed-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="ed-h">One platform. Four cities.</h2><p>A dedicated programme inside FHS events in Dubai, Cairo and Riyadh, and a standalone Founding Edition in Paris.</p></div>
					<EditionsRail editions={editions} />
				</div>
			</section>

			<section className={c('section band section--tight')} aria-labelledby="tag-h">
				<div className={c('wrap split')}>
					<h2 id="tag-h">{f.tagline.text}</h2>
					<div className={c('actions')}><Link href={R.paris} prefetch={false}><a className={c('btn btn--light')}>The Paris edition</a></Link><Link href={R.contact} prefetch={false}><a className={c('btn btn--line-light')}>Contact the team</a></Link></div>
				</div>
			</section>
		</LivingPage>
	)
}
About.theme = 'living'

export async function getStaticProps() {
	return { props: { f: facts, editions } }
}
