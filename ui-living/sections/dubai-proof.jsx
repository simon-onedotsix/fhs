import { useEffect, useRef, useState } from 'react'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { Quote } from './quote'
import { NEW_TAB } from '../lib/attrs'

const Session = ({ s }) => (
	<li>
		<time>{s.start_label}</time>
		<div>{s.title}<span>{s.people_line}</span><a className={c('link')} href={s.summary} {...NEW_TAB}>Read summary</a></div>
	</li>
)

// The day on the FHS Living stage, drawn to scale. Pointing at a block shows the session; the day plays itself
// while it is on screen and nobody is pointing at it.
function Day({ dubai, concl }) {
	const ref = useRef(null)
	const held = useRef(0)
	const [active, setActive] = useState(0)
	const n = dubai.sessions.length

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
		let visible = false
		const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0.3 })
		io.observe(ref.current)
		const timer = setInterval(() => {
			if (visible && Date.now() - held.current >= 9000) setActive(k => (k + 1) % n)
		}, 3200)
		return () => {
			io.disconnect()
			clearInterval(timer)
		}
	}, [n])

	const pick = k => () => {
		held.current = Date.now()
		setActive(k)
	}
	const s = dubai.sessions[active]

	return (
		<div ref={ref} className={c('day')} data-day>
			<div className={c('day__title')}><h3>The day on the FHS Living stage</h3><span>{concl.date} · {concl.venue} · <a className={c('link')} href={dubai.report} {...NEW_TAB}>Read the day report</a></span></div>
			<div className={c('day__axis')} aria-hidden="true">{dubai.axis.map(a => <span key={a.label} style={{ left: `${a.left}%` }}>{a.label}</span>)}</div>
			<div className={c('day__track')}>
				<span className={c('day__lunch')} style={{ left: `${dubai.lunch.left}%`, width: `${dubai.lunch.width}%` }}>Lunch</span>
				{dubai.sessions.map((x, k) => (
					<button key={k} type="button" className={c('day__block', x.low && 'is-low', k === active && 'is-active')} style={{ left: `${x.left}%`, width: `${x.width}%` }}
						onMouseEnter={pick(k)} onFocus={pick(k)} onClick={pick(k)}>
						<span className={c('sr')}>{x.time_label}, {x.title}</span>
					</button>
				))}
			</div>
			<div className={c('day__detail')} aria-live="polite">
				<div><h4>{s.title}</h4><p>{s.time_label} · {s.people_line}</p><a className={c('link')} href={s.summary} {...NEW_TAB}>Read summary</a></div>
				<div className={c('day__faces')}>{s.faces.map(f => <img key={f} src={img(f)} width="60" height="60" alt="" />)}</div>
			</div>
			<ol className={c('day__list')}>{dubai.sessions.slice(0, 5).map(x => <Session key={x.title} s={x} />)}</ol>
			<details className={c('day__more')}>
				<summary>All {n} sessions</summary>
				<ol className={c('day__list')} start="6">{dubai.sessions.slice(5).map(x => <Session key={x.title} s={x} />)}</ol>
			</details>
		</div>
	)
}

export function DubaiProof({ dubai, concl, collage }) {
	return (
		<section className={c('section dark')} id="dubai" aria-labelledby="dubai-h">
			<div className={c('wrap')}>
				<div className={c('head')}>
					<h2 className={c('ruled')} id="dubai-h">Dubai proved the room.</h2>
					<p>FHS Living took over the Summit Stage at FHS World on {concl.date}: {dubai.sessions.length} sessions and {dubai.people.length} speakers, from Accor, Radisson and The Ascott to DAMAC, Rotana and Knight Frank.</p>
				</div>
				<div className={c('proof__collage')}>
					{collage.map(([name, cap], i) => (
						<figure key={name}>
							<img src={img(`dubai/${i ? '800/' : ''}${name}.jpg`)} width="1600" height="900" alt={cap} loading="lazy" />
							{i === 0 && <figcaption>{cap}</figcaption>}
						</figure>
					))}
				</div>

				<Day dubai={dubai} concl={concl} />

				<ul className={c('speakers')} aria-label="Speakers at FHS Living, Dubai">
					{dubai.people.map(p => (
						<li key={p.slug}><img src={img(`speakers/${p.slug}.jpg`)} width="160" height="160" alt={`${p.name}, ${p.org}`} loading="lazy" /><span className={c('tip')}><b>{p.name}</b>{p.org}</span></li>
					))}
				</ul>
				<p className={c('orgs')}>{dubai.people.length} speakers from {dubai.n_orgs} organisations, including {dubai.orgs_short}.</p>

				<div style={{ marginTop: 'clamp(56px,6vw,96px)' }}>
					<h3 className={c('ruled')} style={{ color: '#fff', marginBottom: 28 }}>What the room concluded</h3>
					<ul className={c('verdicts')}>
						{concl.conclusions.map(v => (
							<li key={v.headline} className={c('verdict')}>
								<figure className={c('verdict__img')}><img src={img(v.image.replace('dubai/', 'dubai/800/'))} width="1600" height="900" alt="" loading="lazy" /></figure>
								<div className={c('verdict__body')}>
									<h3>{v.headline}</h3>
									<span className={c('verdict__who')}>{v.class}{v.who && ` · ${v.who}`}</span>
								</div>
								{v.number && <p className={c('verdict__num')}><b>{v.number.value}</b>{v.number.label}</p>}
							</li>
						))}
					</ul>
					<p className={c('source')}>Figures as reported from the FHS Living stage, FHS World, Dubai, 1 October 2026.</p>
				</div>

				<Quote text={concl.quote.text} photo="speakers/abdulla-binhabtoor.jpg" name={concl.quote.name} role={concl.quote.role} style={{ marginTop: 'clamp(64px,7vw,112px)' }} />
			</div>
		</section>
	)
}
