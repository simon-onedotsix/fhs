import { c } from '../lib/c'
import { useInView } from '../lib/use-in-view'

const Swatch = ({ kind }) => (
	<svg className={c(`sw sw--${kind}`)} viewBox="0 0 12 13" aria-hidden="true"><polygon points="6,1 11,5.6 11,7.4 6,12 1,7.4 1,5.6" /></svg>
)

// Real estate + hospitality = living: the two faceted diamonds slide together when the figure comes into view.
export function Idea({ bg }) {
	const [fig, inView] = useInView()
	return (
		<section className={c('section', bg)} id="concept" aria-labelledby="concept-h">
			<div className={c('wrap idea')}>
				<div>
					<h2 className={c('ruled')} id="concept-h">Real estate owns the building. Hospitality knows how to run it.</h2>
					<p className={c('lede')}>Living is where the two meet: real estate run with hospitality&apos;s operating know-how, across nine asset classes.</p>
					<p className={c('muted')}>Operational excellence and innovative construction both change what an asset earns. FHS Living puts the people who deliver them in front of real estate capital.</p>
					<div className={c('idea__legend')}>
						<div><b><Swatch kind="re" />Real estate</b><span>Land, capital, development and ownership.</span></div>
						<div><b><Swatch kind="ho" />Hospitality</b><span>Brand, service, operations and community.</span></div>
						<div><b><Swatch kind="li" />Living</b><span>Assets owned like real estate and run like hospitality.</span></div>
					</div>
				</div>
				<figure ref={fig} className={c('idea__fig', inView && 'is-in')} data-inview aria-label="Diagram: real estate and hospitality overlap; the overlap is living">
					<svg viewBox="-20 -16 520 380" role="img" aria-labelledby="dg-t">
						<title id="dg-t">Real estate and hospitality overlap. The overlap is living.</title>
						<g className={c('dg__l')}>
							<polygon className={c('dg__re')} points="160,0 320,137.5 320,180.8 160,320 0,180.8 0,137.5" />
							<g className={c('dg__wl')}>
								<text className={c('dg__word')} x="80" y="132" textAnchor="middle">Land</text>
								<text className={c('dg__word')} x="80" y="164" textAnchor="middle">Capital</text>
								<text className={c('dg__word')} x="80" y="196" textAnchor="middle">Development</text>
							</g>
							<text className={c('dg__name dg__re-name')} x="160" y="352" textAnchor="middle">Real estate</text>
						</g>
						<g className={c('dg__r')}>
							<polygon className={c('dg__ho')} points="320,0 480,137.5 480,180.8 320,320 160,180.8 160,137.5" />
							<g className={c('dg__wr')}>
								<text className={c('dg__word')} x="400" y="132" textAnchor="middle">Brand</text>
								<text className={c('dg__word')} x="400" y="164" textAnchor="middle">Service</text>
								<text className={c('dg__word')} x="400" y="196" textAnchor="middle">Operations</text>
							</g>
							<text className={c('dg__name dg__ho-name')} x="320" y="352" textAnchor="middle">Hospitality</text>
						</g>
						<g className={c('dg__lensg')}>
							<polygon className={c('dg__lens')} points="240,68.75 320,137.5 320,180.8 240,251.25 160,180.8 160,137.5" />
							<text className={c('dg__lens-txt')} x="240" y="168" textAnchor="middle">Living</text>
						</g>
					</svg>
				</figure>
			</div>
		</section>
	)
}
