import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'

// The way into the 3D site (01_Website/living3 at /living/experience), after the idea it builds. Plain links: the 3D
// site is its own page, outside the app. The still is the scene itself, on the same cream as the page.
export function ExperienceTeaser() {
	return (
		<section className={c('section')} aria-labelledby="xp-h">
			<div className={c('wrap split')}>
				<div>
					<h2 className={c('ruled')} id="xp-h">The idea, built in 3D.</h2>
					<p className={c('lede')} style={{ marginTop: 22 }}>Scroll through the FHS Living mark as an architect&apos;s model: a street of nine asset classes, a tower run like a hotel, the Dubai room, the founding advisors and your seat in Paris.</p>
					<div className={c('actions')} style={{ marginTop: 28 }}><a className={c('btn')} href={R.experience}>Explore in 3D</a></div>
				</div>
				<a className={c('xp__fig')} href={R.experience} tabIndex={-1} aria-hidden="true">
					<img src={img('photo/experience.jpg')} width="1600" height="1200" alt="" loading="lazy" />
				</a>
			</div>
		</section>
	)
}
