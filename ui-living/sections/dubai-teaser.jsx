import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'
import { NEW_TAB } from '../lib/attrs'

export function DubaiTeaser({ dubai, concl }) {
	return (
		<section className={c('section dark')} aria-labelledby="dxb-h">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="dxb-h">A first look in Dubai.</h2><p>On {concl.date} FHS Living took over the Summit Stage at FHS World in Dubai: {dubai.sessions.length} sessions, {dubai.people.length} speakers and {dubai.n_orgs} organisations.</p></div>
				<div className={c('teaser')}>
					<div className={c('teaser__photos')}>
						<figure><img src={img('dubai/stage-oneone.jpg')} width="1600" height="900" alt="A conversation on the FHS Living stage, FHS World, Dubai" loading="lazy" /></figure>
						<figure><img src={img('dubai/800/audience-room.jpg')} width="1600" height="900" alt="The FHS Living session room at FHS World, Dubai" loading="lazy" /></figure>
						<figure><img src={img('dubai/800/stage-podium.jpg')} width="1600" height="900" alt="A speaker at the FHS Living podium" loading="lazy" /></figure>
					</div>
					<div>
						<h3 className={c('teaser__h')}>What the room concluded</h3>
						<ul className={c('teaser__list')}>
							{concl.conclusions.slice(0, 3).map(v => <li key={v.headline}><b>{v.headline}</b><span>{v.class}{v.who && ` · ${v.who}`}</span></li>)}
						</ul>
						<div className={c('actions')}><Link href={`${R.index}#dubai`} prefetch={false}><a className={c('btn btn--light')}>See the day in Dubai</a></Link><a className={c('btn btn--line-light')} href={dubai.report} {...NEW_TAB}>Read the day report</a></div>
					</div>
				</div>
			</div>
		</section>
	)
}
