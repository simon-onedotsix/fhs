import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'

// The nine asset classes as an index; pointing at a class shows its photo (CSS only).
export function Classdex({ classes, counts, bg }) {
	return (
		<section className={c('section', bg)} id="classes" aria-labelledby="classes-h">
			<div className={c('wrap')}>
				<div className={c('head')}>
					<h2 className={c('ruled')} id="classes-h">Nine asset classes. One room.</h2>
					<p>Nine classes that have merged with hospitality into one investment layer. Each earns on how it is built and run. <span className={c('hint-hover')}>Hover a class to see it.</span></p>
				</div>
				<div className={c('classdex')}>
					<ul className={c('classdex__list')}>
						{classes.map(cl => {
							const n = counts[cl.name] || 0
							return (
								<li key={cl.slug} className={c('classdex__item')}>
									<Link href={`${R['who-is-in-the-room']}#directory`} prefetch={false}>
										<a>
											<span className={c('classdex__name')}>{cl.name}</span>
											{n > 0 && <span className={c('classdex__adv')}>{n} advisor{n !== 1 && 's'}</span>}
											<span className={c('classdex__line')}>{cl.line}</span>
										</a>
									</Link>
								</li>
							)
						})}
					</ul>
					<div className={c('classdex__media')} aria-hidden="true">
						{classes.map((cl, i) => (
							<figure key={cl.slug} className={c('classdex__photo')}>
								<img src={img(`classes/${cl.slug}.jpg`)} width="1200" height="900" alt="" loading={i === 0 ? 'eager' : 'lazy'} />
								<figcaption>{cl.name}</figcaption>
							</figure>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
