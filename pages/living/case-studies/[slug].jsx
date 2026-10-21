import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { priceBand } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'
import { HIGH } from '../../../ui-living/lib/attrs'
import { CaseBy, CaseFacts, CaseFoot, CaseStory, CaseStrip, casePath } from '../../../ui-living/sections/case-studies'
import { Closer } from '../../../ui-living/sections/closer'
import { loadCases, loadPasses } from '../../../ui-living/lib/cms'

// One case study on its own URL, so it can be shared with its own title and photo.
export default function CaseStudy({ k, more, price }) {
	const desc = k.what && (k.what.length > 155 ? k.what.slice(0, k.what.lastIndexOf(' ', 152)) + '…' : k.what)
	return (
		<LivingPage page="case-studies" path={casePath(k)} image={k.image && k.image.og} title={`${k.project} | FHS Living`}
			description={desc || `${k.project}, a case study from FHS Living.`}>
			<section className={c('page-hero cs-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">{k.project}</h1>
						<CaseBy a={k.advisor} />
						<CaseFacts k={k} />
					</div>
					{k.image && <figure className={c('cs-hero__fig')}><img src={k.image.card} width="1200" height="900" alt={k.project} {...HIGH} /></figure>}
				</div>
			</section>

			<section className={c('section')} aria-label={`${k.project}: the case`}>
				<div className={c('wrap cs-body')}>
					<CaseStory k={k} />
					<div className={c('cs-body__side')}>
						<CaseFoot k={k} />
						<p className={c('cs__share')}><Link href={R['case-studies']} prefetch={false}><a className={c('link')}>All case studies</a></Link></p>
					</div>
				</div>
			</section>

			{more.length > 0 && <CaseStrip cases={more} id="more-h" title="More case studies." bg="tint" />}
			<Closer price={price} />
		</LivingPage>
	)
}
CaseStudy.theme = 'living'

export async function getStaticPaths() {
	const { cases } = await loadCases()
	return { paths: cases.map(k => ({ params: { slug: k.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
	const [{ cases }, passes] = await Promise.all([loadCases(), loadPasses()])
	const k = cases.find(x => x.slug === params.slug)
	if (!k) return { notFound: true }
	// three more: same asset class first, then in Craft's order
	const others = cases.filter(x => x !== k)
	const more = [...others.filter(x => x.classes.some(cl => k.classes.includes(cl))), ...others].filter((x, i, a) => a.indexOf(x) === i).slice(0, 3)
	return { props: { k, more, price: priceBand(passes.passes.find(x => x.title.startsWith('Delegate'))).current } }
}
