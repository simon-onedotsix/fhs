import Link from 'next/link'

import { c } from '../lib/c'
import { R } from '../lib/routes'
import editions from '../data/editions.json'

// The way in from the FHS Living pages (/living and the case studies): every edition, then Register Interest. The pass
// and its price live on the Paris pages (11 Nov 2026: /living is about FHS Living, not one edition).
export function Closer() {
	return (
		<section className={c('section band')} aria-labelledby="close-h">
			<div className={c('wrap closer')}>
				<div>
					<h2 className={c('ruled')} id="close-h">Choose your edition.</h2>
					<p className={c('lede')} style={{ marginTop: 22 }}>Register your interest and hear about every edition first.</p>
					<div className={c('actions')} style={{ marginTop: 28 }}><Link href={R.register} prefetch={false}><a className={c('btn btn--light')}>Register Interest</a></Link></div>
				</div>
				<ol className={c('closer__eds')}>
					{editions.map(e => (
						<li key={e.city}><a href={e.url}><b>{e.city}</b><span>{e.state === 'founding' ? e.state_label : e.label}, {e.dates}</span></a></li>
					))}
				</ol>
			</div>
		</section>
	)
}
