import { toApp } from './paths.mjs'

// A saved page (ui-corporate/html) marks each section the CMS feeds with <!--slot:name--> ... <!--/slot:name-->.
// fill() swaps in freshly rendered sections. A section that is not passed keeps its saved markup, so a page
// always renders, with or without the CMS.
export function fill(html, sections = {}) {
	for (const [name, fresh] of Object.entries(sections)) {
		const open = `<!--slot:${name}-->`, close = `<!--/slot:${name}-->`
		const a = html.indexOf(open), b = html.indexOf(close)
		if (a < 0 || b < a) throw new Error(`the page has no section "${name}"`)
		html = html.slice(0, a + open.length) + toApp(fresh) + html.slice(b)
	}
	return html
}
