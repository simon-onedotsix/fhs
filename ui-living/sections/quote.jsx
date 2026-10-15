import { c } from '../lib/c'
import { img } from '../lib/format'
import { useInView } from '../lib/use-in-view'

export function Quote({ text, photo, name, role, style }) {
	const [ref, inView] = useInView()
	return (
		<blockquote ref={ref} className={c('quote', inView && 'is-in')} style={style} data-reveal>
			<p>{text}</p>
			<footer>{photo && <img src={img(photo)} width="56" height="56" alt="" />}<span><b>{name}</b>{role}</span></footer>
		</blockquote>
	)
}
