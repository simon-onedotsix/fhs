import { c } from '../lib/c'
import { dayBefore, humanDate, money, priceBand } from '../lib/format'

// The pass a page shows: its booking link and the bands around the day the site is built. `next` is null once the
// last band is on sale, so every "from <date>" line must allow for it (a crash here would fail the whole app build).
export const passOffer = pass => ({ url: pass.url, vat_rate: pass.vat_rate, ...priceBand(pass) })

// "Book before 14 November 2026 for the current rate." while a rise is scheduled
export const bookBefore = delegate => delegate.next ? `Book before ${humanDate(delegate.next.start)} for the current rate.` : ''

export function Passes({ delegate, investor }) {
	return (
		<div className={c('passes')}>
			<div className={c('pass')}>
				<h3>Delegate Pass</h3>
				<p className={c('pass__for')}>For everyone</p>
				<p className={c('pass__price')}>{money(delegate.current.ex_vat)}<small>+ VAT</small></p>
				<p className={c('pass__rise')}>Until {dayBefore(delegate.current.end)}.{delegate.next && ` From ${humanDate(delegate.next.start)} the price is ${money(delegate.next.ex_vat)} + VAT.`}</p>
				<ul>
					<li>All keynotes, panels, roundtables and masterclasses</li>
					<li>AI-powered matchmaking app for pre-scheduled meetings</li>
					<li>Networking receptions and daily lunches</li>
					<li>Exhibition and partner showcases</li>
					<li>AI-generated session summaries, recordings and presentations</li>
					<li>Investor site tours and partner reports, subject to availability</li>
				</ul>
				<a className={c('btn btn--light')} href={delegate.url}>Book a Delegate Pass</a>
			</div>
			<div className={c('pass')}>
				<h3>Investor Pass</h3>
				<p className={c('pass__for')}>For capital allocators</p>
				<p className={c('pass__price')}>{money(investor.current.ex_vat)}<small>+ VAT</small></p>
				<p className={c('pass__rise')}>Refunded once your scheduled meetings take place.</p>
				<ul>
					<li>Access to the Investors Lounge</li>
					<li>Pre-arranged 1:1 meetings with operators, developers and asset managers</li>
					<li>Invitations to closed-door investor sessions within 12 months</li>
				</ul>
				<a className={c('btn btn--line-light')} href={investor.url}>Apply for an Investor Pass</a>
			</div>
		</div>
	)
}
