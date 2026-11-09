import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'

// Every partner logo in tier order, at 80% of its visual-weight size (tools/build.py logo_heights).
export function PartnerStrip({ partners, style }) {
	return (
		<ul className={c('strip')} style={style}>
			{partners.tiers.flatMap(t => t.items.map(it => (
				<li key={it.logo}><img src={img(/^https?:/.test(it.logo) ? it.logo : `partners/${it.logo}`)} alt={`${it.name}, ${t.tier}`} width={Math.round(it.w * 0.8)} height={Math.round(it.h * 0.8)} loading="lazy" /></li>
			)))}
		</ul>
	)
}

// The logos under their own headline, high on both home pages (Ahmed, 9 Nov 2026); `children` follow the strip
export function PartnerSection({ partners, bg, children }) {
	return (
		<section className={c('section', bg)} aria-labelledby="partners-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="partners-h">The partners behind FHS Living.</h2><p><Link href={R.partners} prefetch={false}><a className={c('link')}>Meet the partners</a></Link></p></div>
				<PartnerStrip partners={partners} />
				{children}
			</div>
		</section>
	)
}
