import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'
import { PartnerStrip } from './partner-strip'
import { NEW_TAB } from '../lib/attrs'

// Three reads from the content library, then every partner logo, sized by visual weight (tools/build.py logo_heights).
export function PartnersReads({ partners, report }) {
	return (
		<section className={c('section tint')} aria-labelledby="reads-h">
			<div className={c('wrap')}>
				<div className={c('head')}>
					<h2 className={c('ruled')} id="reads-h">From the FHS Living room.</h2>
					<p>Articles, reports and news from FHS Living. <Link href={R['content-library']} prefetch={false}><a className={c('link')}>Content library</a></Link></p>
				</div>
				<ul className={c('reads')}>
					<li><Link href="/living/content-library/the-hotelisation-of-real-estate-inside-the-fhs-living-advisory-board-at-maslows-kensington" prefetch={false}><a className={c('read')}><figure><img src={img('library/hotelisation.jpg')} width="1200" height="800" alt="" loading="lazy" /></figure><h3>The hotelisation of real estate</h3><span className={c('read__meta')}>Article, September 2026</span><p>Inside the FHS Living Advisory Board at Maslow&apos;s Kensington, London.</p></a></Link></li>
					<li><Link href="/living/content-library/the-bench-rebrands-branded-residences-forum-as-fhs-living" prefetch={false}><a className={c('read')}><figure><img src={img('library/rebrand.jpg')} width="1200" height="675" alt="" loading="lazy" /></figure><h3>Branded Residences Forum is now FHS Living</h3><span className={c('read__meta')}>Press release, August 2026</span><p>Why the forum widened from one asset class to nine.</p></a></Link></li>
					<li><a className={c('read')} href={report} {...NEW_TAB}><figure><img src={img('dubai/800/stage-mc.jpg')} width="1600" height="900" alt="" loading="lazy" /></figure><h3>The day report from Dubai</h3><span className={c('read__meta')}>Report, 1 October 2026</span><p>AI summaries of all 15 sessions on the FHS Living stage at FHS World.</p></a></li>
				</ul>
				<PartnerStrip partners={partners} style={{ marginTop: 'clamp(56px,6vw,88px)' }} />
			</div>
		</section>
	)
}
