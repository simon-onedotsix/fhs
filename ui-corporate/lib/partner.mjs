// Partner with FHS: the content partnership options from Craft entry 292503 (site fhis), and the HTML of the
// page's "opportunities" slot. The figures, the summits list and the contact lines are kept by hand in the snapshot.
import { esc } from './html.mjs'

const QUERY = `{ entry(site: "fhis", id: "292503") { ... on fhsPages_page_Entry { fhisContentBlocks {
	... on fhisContentBlocks_floaters_BlockType { floaters { ... on floaters_BlockType { heading body hero { crop: url @transform(width: 1200, height: 675, mode: "crop") } } } }
} } } }`

const text = html => html.replace(/<br\s*\/?>|<\/p>/gi, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
// example links lose their share tracking (utm_*, LinkedIn's rcm)
const clean = href => href.replace(/&amp;/g, '&').replace(/[?&](?:utm_\w+|rcm)=[^&#]*/g, '').replace(/^([^?#&]*)&/, '$1?')

// `saved` is the snapshot (page.json); the result is the same object with `options` read from Craft.
// From Craft: which options there are, their order, names and example links. An option the snapshot already has
// (same name) keeps its house-style description, its prepared image and alt text, and a link it already has
// keeps its label; anything new comes from Craft as written, with Craft's own image cropped to 1200 x 675.
// shortcut: a description reworded in Craft does not show for an option already in the snapshot; to lift this, keep Craft's wording beside each option in page.json and compare
export async function fetchPartner(craft, saved) {
	const blocks = (await craft(QUERY))?.entry?.fhisContentBlocks || []
	const rows = blocks.find(b => b?.floaters?.length)?.floaters || []
	if (!rows.length) throw new Error('Partner: Craft entry 292503 returned no options')
	const options = rows.map(row => {
		const name = (row.heading || '').trim()
		const body = row.body || ''
		const old = saved.options.find(o => o.name === name)
		const examples = [...body.matchAll(/<a\b[^>]*\bhref="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map(([, href, label]) => {
			const url = clean(href)
			return [old?.examples.find(e => e[1] === url)?.[0] || text(label), url]
		})
		return {
			name,
			text: old?.text || text(body.replace(/<a\b[\s\S]*?<\/a>/g, '')),
			examples,
			img: old?.img || row.hero?.[0]?.crop || '',
			img_alt: old?.img_alt || '',
		}
	})
	return { ...saved, options }
}

// `img` is a prepared image's name under /assets/img/partner (.webp and .jpg both exist) or a full Craft URL
export function renderOpportunities(data) {
	return data.options.map(o => {
		const src = `/assets/img/partner/${o.img}`
		const tail = `alt="${esc(o.img_alt)}" loading="lazy" width="1200" height="675"`
		const img = !o.img ? ''
			: /^https?:/.test(o.img) ? `<picture class="popt__img"><img src="${esc(o.img)}" ${tail}></picture>`
			: `<picture class="popt__img"><source srcset="${src}.webp" type="image/webp"><img src="${src}.jpg" ${tail}></picture>`
		return `
		<li class="popt__row">
			${img}
			<h3 class="popt__name">${esc(o.name)}</h3>
			<p class="popt__text">${esc(o.text)}</p>
			<p class="popt__ex"><span>See an example:</span>${o.examples.map(([label, url]) => ` <a href="${esc(url)}">${esc(label)}</a>`).join(',')}</p>
		</li>`
	}).join('')
}
