import { c } from '../lib/c'
import { useInView } from '../lib/use-in-view'

// The attendee mix as one proportional bar; it draws itself when it comes into view.
export function MixBar({ mix }) {
	const [ref, inView] = useInView()
	return (
		<div ref={ref} className={c('mix', inView && 'is-in')} role="img" aria-label={`Attendee mix: ${mix.map(g => `${g.group} ${g.pct}%`).join(', ')}`}>
			{mix.map(g => <span key={g.group} style={{ flex: g.pct }}>{g.group} {g.pct}%</span>)}
		</div>
	)
}
