import { c } from '../lib/c'
import { img } from '../lib/format'
import { NEW_TAB } from '../lib/attrs'
import { Quote } from './quote'

// FHS World's own Living page carries the full Dubai day (to be revamped there, Ahmed 9 Nov 2026)
const WORLD_LIVING = '/world/living'

// Three photos of the room, the Shamal Holding quote and the ways to the day in full. Shared by the Paris page and the
// homepage's Branded Residences Forum section.
export function TeaserBody({ dubai, concl }) {
	return (
		<div className={c('teaser')}>
			<div className={c('teaser__photos')}>
				<figure><img src={img('dubai/stage-panel-wide.jpg')} width="1600" height="800" alt="A panel on the FHS Living stage at FHS World, Dubai" loading="lazy" /></figure>
				<figure><img src={img('dubai/800/audience-wide.jpg')} width="800" height="450" alt="Delegates in the FHS Living session room at FHS World, Dubai" loading="lazy" /></figure>
				<figure><img src={img('dubai/800/audience-gulf.jpg')} width="800" height="450" alt="A delegate listening to an FHS Living session" loading="lazy" /></figure>
			</div>
			<div>
				<Quote text={concl.quote.text} photo="speakers/abdulla-binhabtoor.jpg" name={concl.quote.name} role={concl.quote.role} />
				<div className={c('actions')} style={{ marginTop: 32 }}><a className={c('btn btn--light')} href={WORLD_LIVING}>FHS Living at FHS World</a><a className={c('btn btn--line-light')} href={dubai.report} {...NEW_TAB}>Read the day report</a></div>
			</div>
		</div>
	)
}

export function DubaiTeaser({ dubai, concl }) {
	return (
		<section className={c('section dark')} aria-labelledby="dxb-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="dxb-h">FHS Living in Dubai.</h2><p>On {concl.date.replace(/ /g, '\u00A0')} the first FHS Living took over the Summit Stage at FHS World for a full day.</p></div>
				<TeaserBody dubai={dubai} concl={concl} />
			</div>
		</section>
	)
}
