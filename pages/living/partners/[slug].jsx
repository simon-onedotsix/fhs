import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { img } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'
import { NEW_TAB } from '../../../ui-living/lib/attrs'

import facts from '../../../ui-living/data/facts.json'
import { loadPartners, partnerList, REVALIDATE } from '../../../ui-living/lib/cms'

// One partner from Swapcard on a URL of its name, as Simon's /world/partners/<id> but named: logo, tier, the profile
// text when Swapcard has one and the partner's website.
export default function Partner({ f, x }) {
	return (
		<LivingPage page="partners" path={`${R.partners}/${x.slug}`} title={`${x.name} | FHS Living`}
			description={`${x.name}, ${x.tier} of the FHS Living Founding Edition, Paris, ${f.event.dates}.`}>
			<section className={c('page-hero cs-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<p className={c('label accent')}>{x.tier}</p>
						<h1 id="hero-h">{x.name}</h1>
						<p className={c('lede')}>{x.tier} of the FHS Living Founding Edition, Paris, {f.event.dates}.</p>
						<div className={c('actions')}>
							{x.url && <a className={c('btn')} href={x.url} {...NEW_TAB}>Visit website</a>}
							{x.linkedin && <a className={c('btn btn--ghost')} href={x.linkedin} {...NEW_TAB}>LinkedIn</a>}
							<Link href={R.partners} prefetch={false}><a className={c('link')}>All partners</a></Link>
						</div>
					</div>
					<figure className={c('pr-logo')}><img src={img(/^https?:/.test(x.logo) ? x.logo : `partners/${x.logo}`)} width={x.w} height={x.h} alt={x.name} /></figure>
				</div>
			</section>

			{x.about && (
				<section className={c('section')} aria-label={`About ${x.name}`}>
					<div className={c('wrap')}><div className={c('pr-about')} dangerouslySetInnerHTML={{ __html: x.about }} /></div>
				</section>
			)}
		</LivingPage>
	)
}
Partner.theme = 'living'

export async function getStaticPaths() {
	return { paths: partnerList(await loadPartners()).map(x => ({ params: { slug: x.slug } })), fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
	const x = partnerList(await loadPartners()).find(p => p.slug === params.slug)
	if (!x) return { notFound: true, revalidate: REVALIDATE }
	return { props: { f: facts, x }, revalidate: REVALIDATE }
}
