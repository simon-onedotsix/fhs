import Link from 'next/link'

import { c } from '../lib/c'
import { ampm, mins } from '../lib/format'
import { useInView } from '../lib/use-in-view'

const KIND = { Meetings: 'meet', Workshops: 'table', Break: 'break', Reception: 'social', 'Site visits': 'social' }
// the word a block carries when it is an hour or longer
const WORD = { Meetings: 'Investor meetings', Reception: 'Reception', 'Site visits': 'Site visits' }
// sessions that overlap go on lanes below the first: the stage and breaks first, then workshops, then hosted meetings
// (from 9 Nov 2026 the Living Lab runs on the stage while the workshops run)
const ORDER = { Workshops: 1, Meetings: 2 }
function lanes(items) {
	const rows = []
	return [...items].sort((a, b) => (ORDER[a.format] || 0) - (ORDER[b.format] || 0) || mins(a.start) - mins(b.start)).map(it => {
		let lane = rows.findIndex(r => r.every(x => mins(x.end) <= mins(it.start) || mins(x.start) >= mins(it.end)))
		if (lane < 0) lane = rows.push([]) - 1
		rows[lane].push(it)
		return { it, lane }
	})
}

// Every day of the programme on one axis, from the hour of the first session to the hour after the last, each block
// at its true length.
export function Glance({ programme, link, linkLabel, cta, bg = 'tint' }) {
	const [ref, inView] = useInView()
	const all = programme.days.flatMap(d => d.items)
	const t0 = Math.floor(Math.min(...all.map(it => mins(it.start))) / 60) * 60
	const span = Math.ceil(Math.max(...all.map(it => mins(it.end))) / 60) * 60 - t0
	const pct = m => Math.round((m - t0) / span * 10000) / 100
	const hours = []
	for (let h = t0 / 60; h < (t0 + span) / 60; h += 2) hours.push(h)
	return (
		<section className={c('section', bg)} aria-labelledby="glance-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="glance-h">The programme, drawn to scale.</h2><p>{programme.status} <Link href={link} prefetch={false}><a className={c('link')}>{linkLabel}</a></Link></p></div>
				<div ref={ref} className={c('glance', inView && 'is-in')} data-inview>
					{programme.days.map(d => [d, lanes(d.items)]).map(([d, segs]) => (
						<div key={d.date} className={c('glance__row')}>
							<p className={c('glance__day')}>Day {Number(d.n)}<span>{d.date}</span></p>
							<div className={c('glance__bar')} style={{ height: 52 + 40 * Math.max(...segs.map(x => x.lane)) }}>
								{segs.map(({ it, lane }) => {
									const s = mins(it.start)
									const e = mins(it.end)
									const word = e - s < 60 ? '' : WORD[it.format] || (/lunch/i.test(it.title) ? 'Lunch' : it.title.split(':')[0])
									return (
										<span key={it.start + it.title} className={c('glance__seg', `glance__seg--${KIND[it.format] || 'stage'}`, e - s >= 150 && 'glance__seg--wide', lane > 0 && 'glance__seg--sub')}
											style={{ left: `${pct(s)}%`, width: `${(e - s) / span * 100 - 0.3}%`, top: lane && 8 + 40 * lane }} title={it.parallel ? it.parallel.join('\n') : it.title}>{word}</span>
									)
								})}
							</div>
						</div>
					))}
					<div className={c('glance__axis')} aria-hidden="true">
						{hours.map(h => <span key={h} style={{ left: `${pct(h * 60)}%` }}>{ampm(`${h}:00`)}</span>)}
					</div>
					<p className={c('glance__key')}>
						<span><i style={{ background: 'var(--purple)' }}></i>Main stage</span>
						<span><i style={{ background: 'var(--magenta)' }}></i>Workshops</span>
						<span><i style={{ background: 'var(--burgundy)' }}></i>Hosted investor meetings</span>
						<span><i style={{ background: 'var(--rose)' }}></i>Reception and site visits</span>
					</p>
				</div>
				{cta && <div className={c('actions')} style={{ marginTop: 32 }}><Link href={link} prefetch={false}><a className={c('btn')}>{cta}</a></Link></div>}
			</div>
		</section>
	)
}
