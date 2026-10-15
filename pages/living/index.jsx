import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { priceBand } from '../../ui-living/lib/format'
import { LayersHero, FILM_POSTER } from '../../ui-living/sections/layers-hero'
import { Idea } from '../../ui-living/sections/idea'
import { Classdex } from '../../ui-living/sections/classdex'
import { MapLayer, EditionsRail } from '../../ui-living/sections/atlas'
import { DubaiProof } from '../../ui-living/sections/dubai-proof'
import { AdvisorsWall } from '../../ui-living/sections/advisors-wall'
import { PartnersReads } from '../../ui-living/sections/partners-reads'
import { Closer } from '../../ui-living/sections/closer'

import facts from '../../ui-living/data/facts.json'
import atlas from '../../ui-living/data/atlas.json'
import editions from '../../ui-living/data/editions.json'
import dubai from '../../ui-living/data/dubai.json'
import concl from '../../ui-living/data/conclusions.json'
import { loadAdvisors, loadPartners, loadPasses } from '../../ui-living/lib/cms'
import { HIGH } from '../../ui-living/lib/attrs'

// FHS World, Saudi Arabia and Egypt's Living pages import these from here (see ui-living/data/legacy.js)
export { THEMES_DATA, TESTIMONIALS_DATA } from '../../ui-living/data/legacy'

const COLLAGE = [
	['stage-oneone', 'A conversation on the FHS Living stage, FHS World, Dubai, 1 October 2026'],
	['stage-podium', 'A speaker at the FHS Living podium, FHS World, Dubai'],
	['audience-gulf', 'Delegates in the FHS Living session room'],
	['stage-panel', 'A panel on the FHS Living stage'],
	['lounge-meeting', 'A meeting in a lounge at FHS World, Dubai'],
]

export default function Living(p) {
	return (
		<LivingPage
			page="index"
			title="FHS Living | Where hospitality reimagines real estate"
			description="FHS Living is Future Hospitality Summit's platform for the hotelisation of real estate, with editions in Dubai, Cairo, Paris and Riyadh."
			head={<link rel="preload" href={FILM_POSTER} as="image" {...HIGH} />}
		>
			<LayersHero />
			<Idea />
			<Classdex classes={p.classes} counts={p.counts} bg="tint" />

			<section className={c('atlas')} aria-labelledby="ed-h">
				<div className={c('atlas__stage')}>
					<div className={c('atlas__copy')}>
						<h2 className={c('ruled')} id="ed-h">One platform. Four cities.</h2>
						<p className={c('lede')} style={{ marginTop: 22 }}>A dedicated FHS Living programme inside Future Hospitality Summit events in Dubai, Cairo and Riyadh, and a standalone Founding Edition in Paris.</p>
					</div>
					<MapLayer atlas={p.atlas} />
				</div>
				<div className={c('wrap')}><EditionsRail editions={p.editions} /></div>
			</section>

			<DubaiProof dubai={p.dubai} concl={p.concl} collage={COLLAGE} />
			<AdvisorsWall advisors={p.advisors} />
			<PartnersReads partners={p.partners} report={p.dubai.report} />
			<Closer price={p.price} />
		</LivingPage>
	)
}
Living.theme = 'living'

export async function getStaticProps() {
	const [advisors, partners, passes] = await Promise.all([loadAdvisors(), loadPartners(), loadPasses()])
	return {
		props: {
			classes: facts.classes,
			counts: advisors.counts,
			advisors: advisors.people,
			atlas,
			editions,
			dubai,
			concl,
			partners,
			price: priceBand(passes.passes.find(x => x.title.startsWith('Delegate'))).current,
		},
	}
}
