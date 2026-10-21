// Case studies as the team writes them in Craft, on the "Case studies" Living page: one Flip Flops module per case.
// Anchor ID = the case's URL (made from the caption when empty), caption = project, photo = hero, and a body that
// opens with "Advisor:", "Asset class:", "Where:" and "Stage:" lines, then h3 sections "What it is", "The gap",
// "The answer", "Key figure" (the number in bold, then its label) and "The conversation". A text module, if any,
// holds the page's lead line. Anything missing is left out, never guessed. Pure functions: used by cms.js at build
// time and by site/tools/seed_case_studies.mts to write the saved snapshot.

const ENT = { amp: '&', nbsp: ' ', quot: '"', apos: "'", lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', ndash: '–', mdash: '—', hellip: '…', eacute: 'é', euro: '€', pound: '£' }
const decode = s => s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => e[0] === '#'
	? String.fromCodePoint(parseInt(e.slice(1).replace(/^x/i, ''), e[1].toLowerCase() === 'x' ? 16 : 10))
	: ENT[e.toLowerCase()] ?? m)
export const text = html => decode((html || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()
export const slugify = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f'\u2019]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const key = s => s.toLowerCase().replace(/&/g, 'and').replace(/\(.*?\)/g, '').replace(/-/g, ' ').replace(/\s+/g, ' ').trim()
const FACTS = { advisor: 'advisor', 'asset class': 'classes', 'asset classes': 'classes', where: 'where', stage: 'stage' }
const PARTS = { 'what it is': 'what', 'the gap': 'gap', 'the answer': 'answer', 'key figure': 'figure', 'the conversation': 'conversation' }

// One case from a Flip Flops row. `people` = the Founding Advisors roster (for the headshot), `classes` = the nine
// asset classes in their fixed order, `tidy` = house style for CMS text.
export function parseCase({ anchorId, caption, body = '', hero }, people, classes, tidy = s => s) {
	const project = tidy(text(caption))
	const k = { slug: slugify(anchorId || project), project, classes: [], where: null, stage: null, advisor: null, what: null, gap: null, answer: null, figure: null, conversation: null }
	for (const [, label, value] of body.matchAll(/<p[^>]*>\s*<(?:strong|b)>\s*([a-z ]+?)\s*:?\s*<\/(?:strong|b)>\s*:?\s*([\s\S]*?)<\/p>/gi)) {
		const f = FACTS[label.toLowerCase()]
		if (!f) continue
		const v = tidy(text(value))
		if (f === 'classes') k.classes = classes.filter(cl => v.split(/[,;/]/).some(x => key(x) && key(cl) === key(x)))
		else if (f === 'advisor') {
			const [name, ...role] = v.split(', ')
			const p = people.find(x => x.name.toLowerCase() === name.toLowerCase())
			k.advisor = { name: p ? p.name : name, role: role.join(', '), photo: p ? p.photo : null }
		} else k[f] = v
	}
	for (const part of body.split(/<h3[^>]*>/i).slice(1)) {
		const [h, rest = ''] = part.split(/<\/h3>/i)
		const f = PARTS[text(h).toLowerCase()]
		if (!f) continue
		if (f === 'figure') {
			const m = rest.match(/<(?:strong|b)>([\s\S]*?)<\/(?:strong|b)>([\s\S]*)/i)
			k.figure = m ? { value: tidy(text(m[1])), label: tidy(text(m[2])) } : null
		} else k[f] = tidy(text(rest)) || null
	}
	const h = hero && hero[0]
	k.image = h ? { card: h.card, tile: h.tile, og: h.og } : null
	return k
}

// The page from Craft's module list: the lead line and the cases in Craft's order, one per URL.
export function parseCases(blocks, people, classes, tidy) {
	const lead = blocks.flatMap(b => b.textBlocks || []).map(t => tidy(text(t.body))).find(Boolean) || null
	const seen = new Set()
	const cases = blocks.filter(b => b.flipFlops).flatMap(b => b.flipFlops.slice(0, 1).map(row => parseCase({ anchorId: b.anchorId, ...row }, people, classes, tidy)))
		.filter(k => k.slug && k.project)
		.map(k => { let s = k.slug, i = 2; while (seen.has(s)) s = `${k.slug}-${i++}`; seen.add(s); return { ...k, slug: s } })
	return { lead, cases }
}
