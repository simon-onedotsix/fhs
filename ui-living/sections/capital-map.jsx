import { useState } from 'react'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { useInView } from '../lib/use-in-view'

// Middle East -> Europe corridors from the sourced deal list. Pointing at an origin lights its corridors.
export function CapitalMap({ flows: fl, hid, title, intro, bg }) {
	const [ref, inView] = useInView()
	const [active, setActive] = useState(null)
	const on = id => active === id && 'is-on'
	const [, , bw, bh] = fl.box_world
	return (
		<section className={c('section', bg)} aria-labelledby={hid}>
			<div className={c('wrap flows')}>
				<div className={c('flows__copy')}>
					<h2 className={c('ruled')} id={hid}>{title}</h2>
					<p className={c('lede')} style={{ marginTop: 20 }}>{intro}</p>
				</div>
				<div className={c('flows__list')}>
					<ul className={c('corridors')}>
						{fl.origins.map(o => (
							<li key={o.id} data-o={o.id} onMouseEnter={() => setActive(o.id)} onMouseLeave={() => setActive(null)}><b>{o.label}</b><span>{o.to.join(', ')}</span></li>
						))}
					</ul>
					<p className={c('flows__stat')}><b>{fl.stat.value}</b><span>{fl.stat.text}. <a className={c('link')} href={fl.stat.url}>HVS</a></span></p>
				</div>
				<div className={c('flows__fig')}>
					<div ref={ref} className={c('flows__map', inView && 'is-in', active && 'has-active')} data-inview aria-hidden="true" style={{ '--flows-ar': `${bw} / ${bh}` }}>
						<img className={c('flows__dots')} src={img('map/flows-light.svg')} alt="" width="1200" height={Math.round(1200 * bh / bw)} loading="lazy" />
						<svg className={c('flows__svg')} viewBox={fl.box_world.join(' ')} preserveAspectRatio="none">
							{fl.arcs.map((a, i) => <path key={a.d} className={c('flow', `flow--${i % 5}`, on(a.o))} data-o={a.o} d={a.d} />)}
							{fl.origins.filter(o => o.leader).map(o => [
								<path key={`${o.id}-d`} className={c('flows__leader flows__leader--d')} d={o.leader} />,
								<path key={`${o.id}-m`} className={c('flows__leader flows__leader--m')} d={o.leader_m} />,
							])}
						</svg>
						{fl.destinations.map(p => (
							<span key={p.id} className={c('fpt')} style={{ left: `${p.px}%`, top: `${p.py}%` }}><i></i><span className={c('fpt__l', `fpt__l--${p.side || 'right'}`)}>{p.label}</span></span>
						))}
						{fl.origins.map(p => [
							<span key={p.id} className={c('fpt fpt--o', on(p.id))} data-o={p.id} style={{ left: `${p.px}%`, top: `${p.py}%` }}><i></i>{p.side !== 'col' && <span className={c('fpt__l', `fpt__l--${p.side}`)}>{p.label}</span>}</span>,
							p.side === 'col' && <span key={`${p.id}-l`} className={c('fpt__l fpt__l--col')} style={{ left: `${p.lx}%`, '--ly': `${p.ly}%`, '--lym': `${p.ly_m}%` }}>{p.label}</span>,
						])}
					</div>
					<p className={c('source flows__src')}>Selected deals in hotels, branded residences, housing and student beds reported from 2023 to 2026. Not every deal is shown.</p>
					<details className={c('deals')}>
						<summary>The {fl.deals.length} deals behind the map</summary>
						<ul>
							{fl.deals.map(x => <li key={x.url + x.what}><span className={c('deals__route')}>{x.route}, {x.year}</span>{x.who}: {x.what}. <a className={c('link')} href={x.url}>{x.src}</a></li>)}
						</ul>
					</details>
				</div>
			</div>
		</section>
	)
}
