import { c } from '../lib/c'
import { useInView } from '../lib/use-in-view'

// European living investment as two bars, with either the 96% intent waffle or (shortfall) the homes shortfall.
export function Market({ hid, title, intro, bg, shortfall }) {
	const [ref, inView] = useInView()
	return (
		<section className={c('section', bg)} aria-labelledby={hid}>
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id={hid}>{title}</h2><p>{intro}</p></div>
				<div ref={ref} className={c('chart', shortfall && 'chart--lead', inView && 'is-in')} data-inview>
					{shortfall && (
						<div>
							<p className={c('waffle__val')}>{shortfall.text.split(' homes')[0]}</p>
							<p className={c('muted')} style={{ margin: 0 }}>homes short across Europe.</p>
							<p className={c('source')}>Source: CBRE.</p>
						</div>
					)}
					<div>
						<div className={c('bars')} role="img" aria-label="European living investment: 62.2 billion euros in 2025, more than 70 billion forecast for 2026">
							<div className={c('bar')} style={{ '--h': '88.9%' }}><span className={c('bar__fill')}></span><span className={c('bar__val')}>€62.2bn</span><span className={c('bar__lab')}>2025 invested, up 22%</span></div>
							<div className={c('bar bar--fc')} style={{ '--h': '100%' }}><span className={c('bar__fill')}></span><span className={c('bar__val')}>€70bn+</span><span className={c('bar__lab')}>2026 forecast</span></div>
						</div>
						<p className={c('source')} style={{ marginTop: 56 }}>Source: JLL 2026.</p>
					</div>
					{!shortfall && (
						<div>
							<ul className={c('waffle')} aria-hidden="true">{Array.from({ length: 100 }, (_, i) => <li key={i} className={c(i >= 96 && 'off')}></li>)}</ul>
							<p className={c('waffle__val')}>96%</p>
							<p className={c('muted')} style={{ margin: 0 }}>of institutional investors in European living plan to raise their allocation.</p>
							<p className={c('source')}>Source: Cushman &amp; Wakefield European Living Investor Survey 2026.</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
