import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { NEW_TAB, HIGH } from '../lib/attrs'
import { R } from '../lib/routes'

// The recap pages of FHS Living inside other FHS events (/world/living, /egypt/living, 17 Nov 2026), in the FHS Living
// design. Each part is plain markup on the classes the Living pages already use.

const Go = ({ a, cls }) => a.ext
	? <a className={c(cls)} href={a.href} {...NEW_TAB}>{a.label}</a>
	: <Link href={a.href} prefetch={false}><a className={c(cls)}>{a.label}</a></Link>

// Cream hero with the photo in the faceted diamond, as on the Living inner pages.
export function RecapHero({ title, accent, when, venue, lede, photo, alt, actions }) {
	return (
		<section className={c('page-hero')} aria-labelledby="hero-h">
			<div className={c('wrap')}>
				<div>
					<h1 id="hero-h">{title} <span className={c('accent')}>{accent}</span></h1>
					<p className={c('page-hero__when')}>{when}<span>{venue}</span></p>
					<p className={c('lede')}>{lede}</p>
					<div className={c('actions')}>{actions.map((a, i) => <Go key={a.href} a={a} cls={i ? 'btn btn--ghost' : 'btn'} />)}</div>
				</div>
				<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img(photo)} width="1420" height="1000" alt={alt} {...HIGH} /></div></figure>
			</div>
		</section>
	)
}

// The Dubai day drawn to scale (from the v3 design, 12 Oct 2026): one block per session; pointing at a block, or the
// day playing itself while on screen, shows its title, speakers and summary. Phones and no-JS get the list.
export function DayChart({ dubai, concl }) {
	const ref = useRef(null)
	const [i, setI] = useState(0)
	const held = useRef(0)
	const pick = k => { held.current = Date.now(); setI(k) }
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
		let visible = false
		const io = new IntersectionObserver(es => { visible = es[0].isIntersecting }, { threshold: 0.3 })
		io.observe(ref.current)
		const t = setInterval(() => { if (visible && Date.now() - held.current > 9000) setI(k => (k + 1) % dubai.sessions.length) }, 3200)
		return () => { io.disconnect(); clearInterval(t) }
	}, [dubai.sessions.length])
	const s = dubai.sessions[i]
	const row = x => <li key={x.start}><time>{x.start_label}</time><div>{x.title}<span>{x.people_line}</span><a className={c('link')} href={x.summary} {...NEW_TAB}>Read the summary</a></div></li>
	return (
		<div ref={ref} className={c('day')}>
			<div className={c('day__title')}><h3>The day on the FHS Living stage</h3><span>{concl.date} · {concl.venue}</span></div>
			<div className={c('day__axis')} aria-hidden="true">{dubai.axis.map(a => <span key={a.label} style={{ left: `${a.left}%` }}>{a.label}</span>)}</div>
			<div className={c('day__track')}>
				<span className={c('day__lunch')} style={{ left: `${dubai.lunch.left}%`, width: `${dubai.lunch.width}%` }}>Lunch</span>
				{dubai.sessions.map((x, k) => (
					<button key={x.start} type="button" className={c('day__block', x.low && 'is-low', k === i && 'is-active')} style={{ left: `${x.left}%`, width: `${x.width}%` }}
						onMouseEnter={() => pick(k)} onFocus={() => pick(k)} onClick={() => pick(k)}>
						<span className={c('sr')}>{x.time_label}, {x.title}</span>
					</button>
				))}
			</div>
			<div className={c('day__detail')} aria-live="polite">
				<div><h4>{s.title}</h4><p>{s.time_label} · {s.people_line}</p><a className={c('link')} href={s.summary} {...NEW_TAB}>Read the summary</a></div>
				<div className={c('day__faces')}>{s.faces.map(f => <img key={f} src={img(f)} width="60" height="60" alt="" />)}</div>
			</div>
			<ol className={c('day__list')}>{dubai.sessions.slice(0, 5).map(row)}</ol>
			<details className={c('day__more')}>
				<summary>All {dubai.sessions.length} sessions</summary>
				<ol className={c('day__list')} start="6">{dubai.sessions.slice(5).map(row)}</ol>
			</details>
		</div>
	)
}

// What the room concluded: one row per asset class, with the figure reported from the stage.
export function Verdicts({ concl }) {
	return (
		<div>
			<h3 className={c('ruled')} style={{ color: '#fff', marginBottom: 28 }}>What the room concluded</h3>
			<ul className={c('verdicts')}>
				{concl.conclusions.map(v => (
					<li key={v.headline} className={c('verdict')}>
						<figure className={c('verdict__img')}><img src={img(v.image.replace('dubai/', 'dubai/800/'))} width="800" height="450" alt="" loading="lazy" /></figure>
						<div className={c('verdict__body')}><h3>{v.headline}</h3><span className={c('verdict__who')}>{v.class}{v.who && ` · ${v.who}`}</span></div>
						{v.number && <p className={c('verdict__num')}><b>{v.number.value}</b>{v.number.label}</p>}
					</li>
				))}
			</ul>
			<p className={c('source')}>Figures as reported from the FHS Living stage, FHS World, Dubai, {concl.date}.</p>
		</div>
	)
}

// Photos of the day: the first one large, the rest beside it.
export function Collage({ photos }) {
	return (
		<div className={c('proof__collage')}>
			{photos.map((p, k) => <figure key={p.photo}><img src={img(p.photo)} width="1600" height="900" alt={p.alt} loading="lazy" />{k === 0 && p.caption && <figcaption>{p.caption}</figcaption>}</figure>)}
		</div>
	)
}

// The day's sessions as one sideways row: photo (or the speakers' faces), time, title, speakers, summary.
export function SessionRow({ sessions, label }) {
	const row = useRef(null)
	const [ends, setEnds] = useState([true, false])
	useEffect(() => {
		const el = row.current
		const check = () => setEnds([el.scrollLeft < 4, el.scrollLeft + el.clientWidth > el.scrollWidth - 4])
		check()
		el.addEventListener('scroll', check, { passive: true })
		window.addEventListener('resize', check)
		return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check) }
	}, [])
	const go = dir => {
		const el = row.current
		const card = el.firstElementChild.getBoundingClientRect().width
		const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
		el.scrollBy({ left: dir * (card + 22), behavior: smooth ? 'smooth' : 'auto' })
	}
	return (
		<>
			<ul ref={row} className={c('cairo__row')} aria-label={label}>
				{sessions.map(s => (
					<li key={s.start + s.title}>
						<figure><img src={img(s.photo)} width="1200" height="800" alt={s.alt} loading="lazy" /></figure>
						<p className={c('cairo__time')}>{s.time}</p>
						<h4>{s.title}</h4>
						<ul className={c('cairo__who')}>{s.people.map(p => <li key={p}>{p}</li>)}</ul>
						<a className={c('link')} href={s.summary} {...NEW_TAB}>Read the summary</a>
					</li>
				))}
			</ul>
			<div className={c('cairo__nav')}>
				<button type="button" onClick={() => go(-1)} disabled={ends[0]} aria-label="Previous sessions">←</button>
				<button type="button" onClick={() => go(1)} disabled={ends[1]} aria-label="Next sessions">→</button>
			</div>
		</>
	)
}

// Everyone who spoke, each to their profile on the event's site.
export function PeopleGrid({ people }) {
	return (
		<ul className={c('directory')}>
			{people.map(p => (
				<li key={p.url} className={c('person')}>
					<Link href={p.url} prefetch={false}>
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

// Partner tiers on a dark ground (the event logos are white files). An SVG sized 100% by its file needs `w` too.
export function PartnerTiers({ tiers }) {
	return (
		<div className={c('tiers tiers--dark')}>
			{tiers.map(t => (
				<div key={t.tier} className={c('tier')}>
					<p className={c('label accent')}>{t.tier}</p>
					<ul className={c('tier__logos')}>{t.logos.map(l => <li key={l.src}><img src={l.src} alt={l.name} style={{ height: l.h || 40, width: l.w || 'auto' }} loading="lazy" /></li>)}</ul>
				</div>
			))}
		</div>
	)
}

// The way on: the next editions, then FHS Living itself.
const NEXT = [
	{ city: 'Paris', line: 'Europe Edition, 23–24 February 2027, Pullman Paris Montparnasse', href: R.paris },
	{ city: 'Madinah', line: 'FHS Living at FHS Saudi Arabia, 14 April 2027, DoubleTree by Hilton at Madinah Gate', href: '/sa/living' },
]
export function NextEditions() {
	return (
		<section className={c('section band')} aria-labelledby="next-h">
			<div className={c('wrap closer')}>
				<div>
					<h2 className={c('ruled')} id="next-h">Where FHS Living goes next.</h2>
					<p className={c('lede')} style={{ marginTop: 22 }}>The conference for the hotelisation of real estate, across nine asset classes.</p>
					<div className={c('actions')} style={{ marginTop: 28 }}><Link href={R.index} prefetch={false}><a className={c('btn btn--light')}>About FHS Living</a></Link></div>
				</div>
				<ol className={c('closer__eds')}>
					{NEXT.map(e => <li key={e.city}><Link href={e.href} prefetch={false}><a><b>{e.city}</b><span>{e.line}</span></a></Link></li>)}
				</ol>
			</div>
		</section>
	)
}
