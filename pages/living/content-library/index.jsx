import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { img } from '../../../ui-living/lib/format'

import { loadLibrary } from '../../../ui-living/lib/cms'
import { NEW_TAB } from '../../../ui-living/lib/attrs'

export default function ContentLibrary({ items }) {
	return (
		<LivingPage page="content-library" title="FHS Living | Content library" description="Articles, press releases and session reports from FHS Living, Future Hospitality Summit's platform for the hotelisation of real estate.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<h1 id="hero-h">The thinking behind <span className={c('accent')}>FHS Living.</span></h1>
					<p className={c('lede')}>Articles, press releases and reports, from the first Advisory Board in London to the day on the stage in Dubai.</p>
				</div>
			</section>
			<section className={c('section section--tight')} aria-labelledby="lib-h">
				<div className={c('wrap')}>
					<h2 className={c('sr')} id="lib-h">Articles and reports</h2>
					<ul className={c('library')}>
						{items.map((it, i) => (
							<li key={it.url}>
								<a className={c('read')} href={it.url} {...(it.pdf ? NEW_TAB : {})}>
									<figure className={c(it.contain && 'read__plate')}><img src={img(it.image)} width={it.w} height={it.h} alt="" loading={i ? 'lazy' : undefined} /></figure>
									<span className={c('read__meta')}>{it.category}, {it.date}</span>
									<h3>{it.title}</h3>
									<p>{it.excerpt}</p>
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</LivingPage>
	)
}
ContentLibrary.theme = 'living'

export async function getStaticProps() {
	const library = await loadLibrary()
	return { props: { items: library.items, source: library.source } }
}
