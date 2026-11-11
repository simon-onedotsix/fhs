// ESG page: the initiatives from Craft fhsPages entry 200346 (site fhis), and the HTML of the page's "esg" slot.
import { esc, pic } from './html.mjs'

const QUERY = `{ entry(site: "fhis", id: 200346) { dateUpdated ... on fhsPages_page_Entry { fhisContentBlocks {
	... on fhisContentBlocks_billboard_BlockType { typeHandle hero { crop: url @transform(width: 2400, height: 1350, mode: "crop") } }
	... on fhisContentBlocks_flipFlops_BlockType { typeHandle flipFlops { ... on flipFlops_BlockType { hero { width crop: url @transform(width: 1200, height: 900, mode: "crop") } body } } }
} } } }`

// `saved` is the snapshot (esg.json); the result has the same shape: { updated, hero, items: [{ title, body, img }] }
export async function fetchEsg(craft, saved) {
	const entry = (await craft(QUERY))?.entry
	const blocks = (entry?.fhisContentBlocks || []).filter(Boolean)
	const rows = blocks.find(b => b.typeHandle === 'flipFlops')?.flipFlops || []
	if (!rows.length) throw new Error('ESG: Craft entry 200346 returned no initiatives')
	const items = rows.map((row, n) => {
		// each row's rich text opens with its title as an <h1>
		const m = (row.body || '').match(/^\s*<h1>([\s\S]*?)<\/h1>([\s\S]*)/)
		if (!m) throw new Error(`ESG: initiative ${n + 1} has no <h1> title`)
		const title = m[1].trim()
		const body = m[2].trim()
			.replaceAll('towards have more women', 'towards having more women') // typo only
			.replace(/\s+<\/p>/g, '</p>')
		const hero = row.hero?.[0]
		// a photo needs 1000px or more (the Net Zero row only has a small logo, so it runs without one)
		// shortcut: a saved photo is kept for a row with the same title, so a photo swapped in Craft does not show until the snapshot is refreshed
		const img = hero?.width >= 1000 ? saved?.items?.find(i => i.title === title)?.img || hero.crop : null
		return { title, body, img }
	})
	const hero = blocks.find(b => b.typeHandle === 'billboard')?.hero?.[0]
	return { updated: entry.dateUpdated.slice(0, 10), hero: saved?.hero || hero?.crop || null, items }
}

// rows with a photo alternate sides in one list; rows without run below as text bands
export function renderEsg(data) {
	const photos = data.items.filter(i => i.img)
	const rest = data.items.filter(i => !i.img)
	return `<section class="esg" aria-label="Initiatives">
	<ol class="wrap esg__list">${photos.map((i, n) => `
		<li class="esg__item${n % 2 ? ' esg__item--flip' : ''}">
			<figure class="esg__img">${pic(i.img, { w: 1200, h: 900 })}</figure>
			<div class="esg__text">
				<h2 class="esg__title">${esc(i.title)}</h2>
				<div class="esg__body">${i.body}</div>
			</div>
		</li>`).join('')}
	</ol>
</section>${rest.map((i, n) => `
<section class="pledge" aria-labelledby="pledge-${n + 1}">
	<div class="wrap pledge__grid">
		<h2 class="h2" id="pledge-${n + 1}">${esc(i.title)}</h2>
		<div class="pledge__body">${i.body}</div>
	</div>
</section>`).join('')}`
}
