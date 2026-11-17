import { c } from '../lib/c'
import { ampm } from '../lib/format'
import { SessionRow } from './recap'
import cairo from '../data/cairo.json'

// FHS Living at FHS Egypt, 11 November 2026, as session cards ({ time, title, people, photo, alt, summary }).
export const cairoSessions = cairo.sessions.map(s => ({ ...s, time: ampm(s.start) }))

// The five Cairo sessions as one sideways row (Ahmed, 17 Nov 2026: "one row with a scroller"), under the Dubai day on
// both homes.
export function CairoRow() {
	return (
		<div className={c('cairo')}>
			<div className={c('brf__day')}>
				<h3 className={c('brf__day-h')}>Five sessions on the Summit Stage at FHS Egypt.</h3>
				<p>{cairo.venue}, {cairo.date.replace(/ /g, ' ')}. <a className={c('link')} href={cairo.url}>FHS Living at FHS Egypt</a></p>
			</div>
			<SessionRow sessions={cairoSessions} label="FHS Living sessions at FHS Egypt" />
		</div>
	)
}
