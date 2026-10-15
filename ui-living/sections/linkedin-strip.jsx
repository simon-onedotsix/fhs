import { c } from '../lib/c'
import { img } from '../lib/format'

// Four curated LinkedIn posts (read through the LinkedIn connector), not a live feed.
export function LinkedinStrip({ linkedin }) {
	return (
		<section className={c('section')} aria-labelledby="li-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="li-h">Lately on LinkedIn.</h2><p>Founding Advisors, partners and the first Advisory Board. <a className={c('link')} href={linkedin.page}>Follow FHS Living</a></p></div>
				<ul className={c('social')}>
					{linkedin.posts.map(p => (
						<li key={p.url}>
							<a className={c('social__post')} href={p.url}>
								<figure className={c(p.logo && 'social__logo')}><img src={img(p.image)} alt={p.alt} loading="lazy" /></figure>
								<p>{p.text}</p>
								<span className={c('social__meta')}>{p.kind}, {p.date}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
