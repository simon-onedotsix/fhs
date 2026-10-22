import { useEffect, useState } from 'react'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { priceBand } from '../../../ui-living/lib/format'
import { HIGH } from '../../../ui-living/lib/attrs'
import { CaseRow } from '../../../ui-living/sections/case-studies'
import { Closer } from '../../../ui-living/sections/closer'
import { loadAdvisors, loadCases, loadPasses, REVALIDATE } from '../../../ui-living/lib/cms'

const LEAD = 'Projects led by FHS Living Founding Advisors, from serviced living in Amsterdam to care residences in London. Each one answers a question the sector will put on the table in Paris.'

// The case studies, filterable by asset class. The filter needs JavaScript, so it stays hidden until the page is
// running; without it every case is listed.
export default function CaseStudies({ lead, cases, order, price }) {
	const [ready, setReady] = useState(false)
	const [filter, setFilter] = useState('*')
	useEffect(() => setReady(true), [])
	const count = cl => cases.filter(k => k.classes.includes(cl)).length
	const shown = cases.filter(k => filter === '*' || k.classes.includes(filter))
	const hero = cases.find(k => k.image)

	return (
		<LivingPage page="case-studies" title="FHS Living | Case studies"
			description="Projects led by FHS Living Founding Advisors, from serviced living in Amsterdam to care residences in London, and the questions they bring to Paris.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h"><span className={c('accent')}>Living,</span> in practice.</h1>
						<p className={c('lede')}>{lead || LEAD}</p>
					</div>
					{hero && <figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={hero.image.card} width="1200" height="900" alt={hero.project} {...HIGH} /></div></figure>}
				</div>
			</section>

			<section className={c('section')} aria-label="The case studies">
				<div className={c('wrap')}>
					{cases.length === 0 && <p className={c('lede')}>The first case studies are being prepared.</p>}
					{cases.length > 1 && (
						<>
							<div className={c('rail-filter')} role="group" aria-label="Filter by asset class" hidden={!ready}>
								<button type="button" aria-pressed={filter === '*'} onClick={() => setFilter('*')}>All<span>{cases.length}</span></button>
								{order.filter(count).map(cl => (
									<button key={cl} type="button" aria-pressed={filter === cl} onClick={() => setFilter(cl)}>{cl}<span>{count(cl)}</span></button>
								))}
							</div>
							<p className={c('readout')} aria-live="polite">{filter === '*' ? '' : `${shown.length} case ${shown.length === 1 ? 'study' : 'studies'} in ${filter}.`}</p>
						</>
					)}
					<ol className={c('cs-list')}>
						{shown.map((k, i) => <li key={k.slug}><CaseRow k={k} flip={i % 2 === 1} /></li>)}
					</ol>
				</div>
			</section>

			<Closer price={price} />
		</LivingPage>
	)
}
CaseStudies.theme = 'living'

export async function getStaticProps() {
	const [{ lead, cases }, advisors, passes] = await Promise.all([loadCases(), loadAdvisors(), loadPasses()])
	return {
		revalidate: REVALIDATE,
		props: {
			lead,
			cases,
			order: advisors.order,
			price: priceBand(passes.passes.find(x => x.title.startsWith('Delegate'))).current,
		},
	}
}
