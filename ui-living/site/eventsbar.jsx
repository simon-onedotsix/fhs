import { c } from '../lib/c'
import { R } from '../lib/routes'

// Plain links: these are other event sites, so no client-side prefetching of their pages.
const EVENTS = [['/', 'FHS'], ['/world', 'FHS World'], ['/sa', 'FHS Saudi Arabia'], ['/africa', 'FHS Africa'], ['/egypt', 'FHS Egypt']]

export function EventsBar() {
	return (
		<nav className={c('eventsbar')} aria-label="Future Hospitality Summit events">
			<div className={c('wrap')}>
				<span className={c('by')}>Brought to you by The Bench</span>
				<ul>
					{EVENTS.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
					<li><a href={R.index} aria-current="true">FHS Living</a></li>
				</ul>
			</div>
		</nav>
	)
}
