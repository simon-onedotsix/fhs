import { c } from '../lib/c'

// Display type on hand-set lines (design principles rule 6: shrink the type rather than add a line; the tagline sets
// on two lines, never three). Each line stays whole and the type shrinks until the longest line fits the column:
// `em` is that line's width at a font size of 1em, measured in the browser. `strict` keeps the lines on phones too
// (the tagline); other headlines may re-wrap on a phone at no less than 34px.
export function FitTitle({ id = 'hero-h', lines, em, strict }) {
	return (
		<div className={c('fit', strict && 'fit--strict')}>
			<h1 id={id} className={c('fit__h')} style={{ '--em': em }}>
				{lines.map((l, i) => <span key={i} className={c('fit__l')}>{l}{i < lines.length - 1 ? ' ' : ''}</span>)}
			</h1>
		</div>
	)
}

// a name of several words on two lines that end at about the same width (partner names come from Swapcard)
export function twoLines(name) {
	const w = name.split(' ')
	if (w.length < 2 || name.length <= 16) return null
	let best = null
	for (let i = 1; i < w.length; i++) {
		const a = w.slice(0, i).join(' '), b = w.slice(i).join(' ')
		const m = Math.max(a.length, b.length)
		if (!best || m < best.m) best = { m, lines: [a, b] }
	}
	return { lines: best.lines, em: +(best.m * 0.5).toFixed(2) }  // about 0.47em a character in Neue Haas Text Medium tracked -0.032em (measured), 0.5 for headroom
}
