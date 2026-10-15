import Link from 'next/link'

import { c } from '../lib/c'
import { dayBefore, money } from '../lib/format'
import { R } from '../lib/routes'

// The two ways in. `price` is the Delegate Pass band on sale when the site was built.
export function Closer({ price }) {
	return (
		<section className={c('section band')} aria-labelledby="close-h">
			<div className={c('wrap closer')}>
				<div>
					<h2 className={c('ruled')} id="close-h">Choose your room.</h2>
					<p className={c('lede')} style={{ marginTop: 22 }}>Four editions, one platform. The Founding Edition opens in Paris on 23 February 2027.</p>
				</div>
				<div className={c('closer__ways')}>
					<div>
						<h3>Paris, the Founding Edition</h3>
						<p>Delegate Pass {money(price.ex_vat)} + VAT until {dayBefore(price.end)}.</p>
						<Link href={R.passes} prefetch={false}><a className={c('btn btn--light')}>Register to attend</a></Link>
					</div>
					<div>
						<h3>Not ready to book?</h3>
						<p>Register your interest and hear about every edition first.</p>
						<Link href={R.register} prefetch={false}><a className={c('btn btn--line-light')}>Register your interest</a></Link>
					</div>
				</div>
			</div>
		</section>
	)
}
