import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { img } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'
import { HIGH } from '../../../ui-living/lib/attrs'
import { SpeakerGrid } from '../../../ui-living/sections/speakers'

import facts from '../../../ui-living/data/facts.json'
import { loadSpeakers, REVALIDATE } from '../../../ui-living/lib/cms'

// The Swapcard "Speakers" group for Paris in the team's order, refreshed like every Living page.
export default function Speakers({ f, speakers }) {
	const n = speakers.people.length
	return (
		<LivingPage page="speakers" title="FHS Living | Speakers" description={`The speakers at the FHS Living Europe Edition, Paris, ${f.event.dates}.`}>
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">The voices <span className={c('accent')}>in the room.</span></h1>
						<p className={c('lede')}>Speakers at the FHS Living Europe Edition, Paris, {f.event.dates}. More are announced as they are confirmed.</p>
						<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><Link href={R.programme} prefetch={false}><a className={c('btn btn--ghost')}>See the programme</a></Link></div>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('dubai/stage-living-economy.jpg')} width="1600" height="783" alt="The New Living Economy panel on the FHS Living stage at FHS World, Dubai" {...HIGH} /></div></figure>
				</div>
			</section>

			<section className={c('section')} aria-labelledby="sp-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="sp-h">{n} speakers confirmed.</h2><p>Investors, operators, developers and advisors.</p></div>
					<SpeakerGrid people={speakers.people} />
				</div>
			</section>
		</LivingPage>
	)
}
Speakers.theme = 'living'

export async function getStaticProps() {
	return { props: { f: facts, speakers: await loadSpeakers() }, revalidate: REVALIDATE }
}
