const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Prototype asset path ('assets/img/dubai/x.jpg', 'dubai/x.jpg', 'assets/brand/x.svg') -> the app's public URL.
// Every JPG was shipped as its WebP twin.
// our optimised copies; a full address (a photo or logo straight from Craft or Swapcard) passes through
export const img = path => /^https?:/.test(path) ? path : '/assets/img/living/v3/' + path.replace(/^assets\//, '').replace(/^img\//, '').replace(/\.jpg$/, '.webp')

export const mins = t => {
	const [h, m] = t.split(':').map(Number)
	return h * 60 + m
}

// '13:30' -> '1:30pm'
export function ampm(t) {
	if (!t) return ''
	const [h, m] = t.split(':').map(Number)
	return `${h % 12 || 12}:${String(m).padStart(2, '0')}${h < 12 ? 'am' : 'pm'}`
}

// '9:00'-'10:30' -> '9:00–10:30am'; the shared suffix is written once
export function trange(a, b) {
	if (!b) return ampm(a)
	let sa = ampm(a)
	const sb = ampm(b)
	if (sa.slice(-2) === sb.slice(-2)) sa = sa.slice(0, -2)
	return `${sa}–${sb}`
}

export const money = n => '€' + n.toLocaleString('en-GB')

const utc = iso => new Date(iso + 'T12:00:00Z')

// '2027-02-23' -> '23 February 2027'
export function humanDate(iso) {
	const d = utc(iso)
	return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

// '2026-11-14' -> '13 November' (a band "ends" on the first day of the next one)
export function dayBefore(iso) {
	const d = utc(iso)
	d.setUTCDate(d.getUTCDate() - 1)
	return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`
}

// The price band on sale on a given day. A band runs from `start` up to, not including, `end`.
// Before the first band the first one shows; after the last, the last one. `previous` is the band that closed last.
export function priceBand(pass, today = new Date().toISOString().slice(0, 10)) {
	const bands = pass.bands
	let k = bands.findIndex(b => b.start <= today && today < b.end)
	if (k === -1) k = today < bands[0].start ? 0 : bands.length - 1
	return { previous: bands[k - 1] || null, current: bands[k], next: bands[k + 1] || null }
}
