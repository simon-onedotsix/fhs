import Link from 'next/link'

import { c } from '../lib/c'
import { ampm, mins } from '../lib/format'
import { useInView } from '../lib/use-in-view'

const T0 = 540   // 9:00am
const SPAN = 780 // to 10:00pm
const pct = m => Math.round((m - T0) / SPAN * 10000) / 100

const KIND = { Meetings: 'meet', Roundtable: 'table', Break: 'break', Reception: 'social' }

function label(it, s, e) {
	if (e - s < 60) return ''
	if (!it.end) return 'Dinners'
	if (it.title.includes('unch')) return 'Lunch'
	return it.format === 'Meetings' ? 'Investor meetings' : it.title
}

// The two conference days and Day 0 on one 9:00am-10:00pm axis, every block at its true length.
export function Glance({ programme, link, linkLabel, bg = 'tint' }) {
	const [ref, inView] = useInView()
	const z = programme.day_zero
	const zs = mins(z.time)
	return (
		<section className={c('section', bg)} aria-labelledby="glance-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="glance-h">The programme, drawn to scale.</h2><p>{programme.status} <Link href={link} prefetch={false}><a className={c('link')}>{linkLabel}</a></Link></p></div>
				<div ref={ref} className={c('glance', inView && 'is-in')} data-inview>
					<div className={c('glance__row')}>
						<p className={c('glance__day')}>Day 0<span>{z.date}</span></p>
						<div className={c('glance__bar glance__bar--eve')}>
							<span className={c('glance__seg glance__seg--social glance__seg--wide')} style={{ left: `${pct(zs)}%`, width: `${Math.round(((T0 + SPAN - zs) / SPAN * 100 - 0.3) * 100) / 100}%` }} title={z.title}>{z.title}</span>
						</div>
					</div>
					{programme.days.map((d, i) => (
						<div key={d.date} className={c('glance__row')}>
							<p className={c('glance__day')}>Day {i + 1}<span>{d.date}</span></p>
							<div className={c('glance__bar')}>
								{d.items.map(it => {
									const s = mins(it.start)
									const e = it.end ? mins(it.end) : T0 + SPAN
									if (s - T0 >= SPAN) return null
									return (
										<span key={it.start + it.title} className={c('glance__seg', `glance__seg--${KIND[it.format] || 'stage'}`, e - s >= 150 && 'glance__seg--wide')}
											style={{ left: `${pct(s)}%`, width: `${(Math.min(e, T0 + SPAN) - s) / SPAN * 100 - 0.3}%` }} title={it.title}>{label(it, s, e)}</span>
									)
								})}
							</div>
						</div>
					))}
					<div className={c('glance__axis')} aria-hidden="true">
						{[9, 11, 13, 15, 17, 19, 21].map(h => <span key={h} style={{ left: `${pct(h * 60)}%` }}>{ampm(`${h}:00`)}</span>)}
					</div>
					<p className={c('glance__key')}>
						<span><i style={{ background: 'var(--purple)' }}></i>Main stage</span>
						<span><i style={{ background: 'var(--magenta)' }}></i>Roundtables and masterclasses</span>
						<span><i style={{ background: 'var(--burgundy)' }}></i>Hosted investor meetings</span>
						<span><i style={{ background: 'var(--rose)' }}></i>Dinners and receptions</span>
					</p>
				</div>
			</div>
		</section>
	)
}
