import Link from 'next/link'

import { c } from '../lib/c'
import { R } from '../lib/routes'

// Speaker cards in the team's order (data/speaker-order.json), each to the speaker's page.
export function SpeakerGrid({ people }) {
	return (
		<ul className={c('directory')}>
			{people.map(p => (
				<li key={p.slug} className={c('person')}>
					<Link href={`${R.speakers}/${p.slug}`} prefetch={false}>
						<a>
							<figure>
								<div className={c('window')}>{p.photo && <img src={p.photo} width="360" height="440" alt={p.name} loading="lazy" />}</div>
								<figcaption><b>{p.name}</b><span>{p.title}</span><span>{p.company}</span></figcaption>
							</figure>
						</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

// The first 10 speakers and the way to all of them (both homes; no city in the heading, 11 Nov 2026).
export function SpeakerStrip({ people, total, bg }) {
	return (
		<section className={c('section', bg)} aria-labelledby="spk-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="spk-h">First speakers confirmed.</h2><p>For the Europe Edition, 23–24 February 2027.</p></div>
				<SpeakerGrid people={people} />
				<div className={c('actions')} style={{ marginTop: 32 }}><Link href={R.speakers} prefetch={false}><a className={c('btn')}>View All Speakers</a></Link></div>
			</div>
		</section>
	)
}
