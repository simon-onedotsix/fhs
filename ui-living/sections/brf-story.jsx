import { c } from '../lib/c'
import { TeaserBody } from './dubai-teaser'

// Where FHS Living comes from (Ahmed, 8 Nov 2026: "we have been doing Branded Residences Forum for a while now"): the BRF
// editions as one timeline, then a short look at the first FHS Living day in Dubai. Keeps the old #dubai anchor.
export function BrfStory({ brf, dubai, concl }) {
	return (
		<section className={c('section dark')} id="dubai" aria-labelledby="brf-h">
			<div className={c('wrap')}>
				<div className={c('head')}>
					<h2 className={c('ruled')} id="brf-h">From Branded Residences Forum to FHS Living.</h2>
					<p>Four editions in Dubai, Bangkok and Riyadh since 2024. In August 2026 the forum became FHS Living, across nine asset classes.</p>
				</div>
				<ol className={c('brf')}>
					{brf.editions.map(e => (
						<li key={e.when + e.city} className={c('brf__item', e.now && 'brf__item--now')}>
							<i aria-hidden="true"></i>
							<b>{e.when}</b>
							<h3>{e.city}</h3>
							<p>{e.line}</p>
						</li>
					))}
				</ol>
				<div className={c('brf__day')}>
					<h3 className={c('brf__day-h')}>A full day on the Summit Stage at FHS World.</h3>
					<p>The first FHS Living, {concl.venue}, {concl.date.replace(/ /g, '\u00A0')}.</p>
				</div>
				<TeaserBody dubai={dubai} concl={concl} />
			</div>
		</section>
	)
}
