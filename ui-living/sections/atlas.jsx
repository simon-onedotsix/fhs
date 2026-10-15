import { c } from '../lib/c'
import { img } from '../lib/format'

const pinLine = p => p.state === 'founding' ? `Founding Edition, ${p.dates}` : p.state !== 'tbc' ? p.dates : `${p.dates}, details to follow`

// The editions map: diamond-dot landmass, the route between the cities in calendar order, one pin per edition.
export function MapLayer({ atlas }) {
	return (
		<div className={c('atlas__map')}>
			<img className={c('atlas__dots')} src={img('map/emea-light.svg')} alt="" width="1200" height="560" />
			<svg className={c('atlas__svg')} viewBox={atlas.crop_box.join(' ')} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
				{atlas.route.map(d => <path key={d} className={c('atlas__route')} d={d} />)}
			</svg>
			{atlas.pins.map((p, i) => (
				<a key={p.id} className={c('pin', `pin--${p.state}`, `pin--${p.id}`, `pin--d${i + 1}`, p.side === 'left' && 'pin--left')} href={p.url} style={{ left: `${p.px}%`, top: `${p.py}%` }}>
					<span className={c('pin__mark')}></span>
					{p.state === 'founding' && <svg className={c('pin__ring')} viewBox="0 0 46 52" aria-hidden="true"><polygon points="23,1 45,22.49 45,29.26 23,51 1,29.26 1,22.49" /></svg>}
					<span className={c('pin__label')}><b>{p.city}</b><span>{pinLine(p)}</span></span>
				</a>
			))}
		</div>
	)
}

export function EditionsRail({ editions }) {
	return (
		<nav className={c('rail')} aria-label="FHS Living editions">
			{editions.map(e => (
				<a key={e.city} className={c(e.state === 'founding' ? 'is-founding' : e.state === 'past' && 'is-past')} href={e.url}>
					<span className={c('rail__city')}>{e.city}</span>
					<span className={c('rail__meta')}><b>{e.state !== 'tbc' ? e.dates : `${e.dates}, details to follow`}</b>{e.label}{e.venue !== 'Details to follow' && `, ${e.venue}`}</span>
					<span className={c('rail__go')}>{e.link_label}</span>
				</a>
			))}
		</nav>
	)
}
