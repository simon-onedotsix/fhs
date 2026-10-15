import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'

// Two counter-drifting rows of portraits. Each row is rendered twice for a seamless loop; the copy is hidden from
// assistive tech, and without motion (reduced motion, JS off) the CSS shows one set that scrolls.
export function AdvisorsWall({ advisors, bg }) {
	const half = Math.ceil(advisors.length / 2)
	const rows = [advisors.slice(0, half), advisors.slice(half)]
	return (
		<section className={c('section', bg)} id="advisors" aria-labelledby="adv-h">
			<div className={c('wrap')}>
				<div className={c('head')}>
					<h2 className={c('ruled')} id="adv-h">{advisors.length} Founding Advisors shape the platform.</h2>
					<p>Investors, developers, operators and advisors from across hospitality and real estate. <Link href={R['who-is-in-the-room']} prefetch={false}><a className={c('link')}>See everyone, by asset class</a></Link></p>
				</div>
			</div>
			<div className={c('wall')} role="region" aria-label="Founding Advisors" tabIndex={0}>
				{rows.map((row, r) => (
					<div key={r} className={c('wall__row', r === 1 && 'wall__row--rev')}>
						{[0, 1].map(rep => row.map(a => (
							<figure key={`${rep}-${a.slug}`} aria-hidden={rep ? 'true' : undefined}>
								<div className={c('window mono')}><img src={img(a.photo)} width="360" height="440" alt={rep ? '' : a.name} loading="lazy" /></div>
								<figcaption><b>{a.name}</b>{a.company}</figcaption>
							</figure>
						)))}
					</div>
				))}
			</div>
		</section>
	)
}
