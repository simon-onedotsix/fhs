import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { LayersHero, FILM_POSTER } from '../../ui-living/sections/layers-hero'
import { Idea } from '../../ui-living/sections/idea'
import { Classdex } from '../../ui-living/sections/classdex'
import { MapLayer, EditionsRail } from '../../ui-living/sections/atlas'
import { BrfStory } from '../../ui-living/sections/brf-story'
import { AdvisorsWall } from '../../ui-living/sections/advisors-wall'
import { PartnersReads } from '../../ui-living/sections/partners-reads'
import { PartnerSection } from '../../ui-living/sections/partner-strip'
import { Closer } from '../../ui-living/sections/closer'
import { CaseStrip } from '../../ui-living/sections/case-studies'
import { SpeakerStrip } from '../../ui-living/sections/speakers'

import facts from '../../ui-living/data/facts.json'
import atlas from '../../ui-living/data/atlas.json'
import editions from '../../ui-living/data/editions.json'
import dubai from '../../ui-living/data/dubai.json'
import concl from '../../ui-living/data/conclusions.json'
import brf from '../../ui-living/data/brf.json'
import { loadAdvisors, loadCases, loadPartners, loadSpeakers, REVALIDATE } from '../../ui-living/lib/cms'
import { HIGH } from '../../ui-living/lib/attrs'

// FHS World, Saudi Arabia and Egypt's Living pages import these from here (see ui-living/data/legacy.js)
export { THEMES_DATA, TESTIMONIALS_DATA } from '../../ui-living/data/legacy'

export default function Living(p) {
	return (
		<LivingPage
			page="index"
			title="FHS Living | Where hospitality reimagines real estate"
			description="FHS Living is Future Hospitality Summit's conference for the hotelisation of real estate, with editions in Dubai, Cairo, Paris and Riyadh."
			head={<link rel="preload" href={FILM_POSTER} as="image" {...HIGH} />}
		>
			<LayersHero />
			<Idea />
			<Classdex classes={p.classes} bg="tint" />

			<section className={c('atlas')} id="editions" aria-labelledby="ed-h">
				<div className={c('atlas__stage')}>
					<div className={c('atlas__copy')}>
						<h2 className={c('ruled')} id="ed-h">One conference. Four cities.</h2>
						<p className={c('lede')} style={{ marginTop: 22 }}>A dedicated FHS Living programme inside Future Hospitality Summit events in Dubai, Cairo and Riyadh, and a standalone Europe Edition in Paris.</p>
					</div>
					<MapLayer atlas={p.atlas} />
				</div>
				<div className={c('wrap')}><EditionsRail editions={p.editions} /></div>
			</section>

			<BrfStory brf={p.brf} dubai={p.dubai} concl={p.concl} />
			<AdvisorsWall advisors={p.advisors} bg="tint" />
			{p.speakers.length > 0 && <SpeakerStrip people={p.speakers.slice(0, 10)} total={p.speakers.length} />}
			<PartnerSection partners={p.partners} bg="tint" />
			{p.cases.length > 0 && <CaseStrip cases={p.cases} />}
			<PartnersReads report={p.dubai.report} />
			<Closer />
		</LivingPage>
	)
}
Living.theme = 'living'

export async function getStaticProps() {
	const [advisors, partners, { cases }, { people: speakers }] = await Promise.all([loadAdvisors(), loadPartners(), loadCases(), loadSpeakers()])
	return {
		revalidate: REVALIDATE,
		props: {
			classes: facts.classes,
			advisors: advisors.people,
			speakers,
			atlas,
			editions,
			dubai,
			concl,
			brf,
			partners,
			cases: cases.length >= 3 ? cases.slice(0, 3) : [],  // the strip shows once three cases are published
		},
	}
}
