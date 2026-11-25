// Any page the team builds in Craft's "FHS Living Pages" section, read for pages/living/[slug].jsx and drawn in the
// Living design by ../sections/craft-blocks.jsx (24 Nov 2026: Sally's Exhibitor Manual came out in the old theme).
// Reading only: nothing here writes to Craft. The page's block list is cleaned on the server (house style, pasted
// markup, shouted capitals) and grouped into sections at each heading, so the browser gets small, tidy HTML.
import { gql } from '@apollo/client'
import craftApolloClient from '../../pages/api/apollo'

const SITE = process.env.SITE_HANDLE_LIVING || 'fhsLiving'
const B = process.env.NEXT_PUBLIC_CONTENT_BLOCKS_HANDLE || 'fhis'

// a photo at the sizes the Living blocks draw it (Craft makes and caches the file)
const IMG = `id url width height alt: title
	wide: url @transform(width: 1600) half: url @transform(width: 1200) thumb: url @transform(width: 720)`

// Every block type of the shared Content Blocks field that makes sense on a Living page. Field names follow
// Simon's graphql/queries.jsx; the photos ask Craft for sized files instead of the uploaded original.
const BLOCKS = `
	__typename
	... on ${B}ContentBlocks_text_BlockType { id theme columns center anchorId textBlocks { ... on textBlocks_BlockType { id body } } }
	... on ${B}ContentBlocks_dividerHeading_BlockType { id anchorId heading }
	... on ${B}ContentBlocks_flipFlops_BlockType { id flipStartOrder anchorId flipFlops { ... on flipFlops_BlockType { id caption body hero { ${IMG} } } } }
	... on ${B}ContentBlocks_floaters_BlockType { id flipStartOrder anchorId floaters { ... on floaters_BlockType { id heading body hero { ${IMG} } } } }
	... on ${B}ContentBlocks_cards_BlockType { id columns anchorId cards { ... on cards_card_BlockType { id body hero { ${IMG} } } } }
	... on ${B}ContentBlocks_images_BlockType { id columns anchorId images { ${IMG} } }
	... on ${B}ContentBlocks_billboard_BlockType { id anchorId body hero { ${IMG} } }
	... on ${B}ContentBlocks_billboardSlider_BlockType { id anchorId slides { ... on slides_BlockType { id body hero { ${IMG} } } } }
	... on ${B}ContentBlocks_bannerImage_BlockType { id hero { ${IMG} } }
	... on ${B}ContentBlocks_impactFigures_BlockType { id anchorId impactFigures { ... on impactFigures_BlockType { id figure label } } }
	... on ${B}ContentBlocks_video_BlockType { id anchorId videoShareUrl }
	... on ${B}ContentBlocks_hubspotForm_BlockType { id anchorId body hubspotForm { ... on hubspotForm_BlockType { id formId } } }
	... on ${B}ContentBlocks_profilesCarousel_BlockType { id anchorId heading text
		ctaButton { ... on ctaButton_BlockType { id buttonLabel buttonLink } }
		profiles { ... on profiles_profile_Entry { id title positions { ... on positions_BlockType { jobTitle organisation } }
			avatar { url thumb: url @transform(width: 480, height: 586, mode: "crop") } } } }
	... on ${B}ContentBlocks_testimonials_BlockType { id testimonials { ... on testimonials_testimonial_BlockType { id quote fullName jobTitle organisation } } }
	... on ${B}ContentBlocks_ticker_BlockType { id ticker { ... on ticker_BlockType { id text hyperlink } } }
	... on ${B}ContentBlocks_hoverPopups_BlockType { id hoverPopups { ... on hoverPopups_popup_BlockType { id message popup } } }
	... on ${B}ContentBlocks_videoTestimonials_BlockType { id videoTestimonials { ... on videoTestimonials_videoTestimonial_Entry { id videoShareUrl fullName jobTitle organisation } } }
	... on ${B}ContentBlocks_partners_BlockType { id anchorId heading body partners { ... on partners_partner_Entry { id title website partnerLogo { url } } } }
	... on ${B}ContentBlocks_partnerGroups_BlockType { id partnerGroups { id title ... on partnerGroups_default_Entry {
		partners { ... on partners_partner_Entry { id title website partnerLogo { url } } } } } }
	... on ${B}ContentBlocks_passes_BlockType { id passes {
		... on passes_pass_BlockType { id passTitle passDescription passValue hyperlink }
		... on passes_passNew_BlockType { id passTitle passDescription passButtonLabel passButtonUrl passSoldOut } } }
`

async function craft(query, preview, previewData) {
	const { data } = await craftApolloClient(preview, previewData).query({ query: gql(query), fetchPolicy: 'no-cache' })
	return data
}

// the slugs of every published Living page in Craft
export async function listCraftPages() {
	const d = await craft(`{ entries(site: "${SITE}", section: "${SITE}Pages", limit: 200) { slug } }`)
	return d.entries.map(e => e.slug)
}

// one page, cleaned and grouped, or null when Craft has no published page at that slug
export async function loadCraftPage(slug, preview, previewData) {
	const d = await craft(`{ entry(site: "${SITE}", section: "${SITE}Pages", slug: ${JSON.stringify(slug)}) {
		... on ${SITE}Pages_page_Entry { id title slug fhisContentBlocks { ${BLOCKS} }
			seomatic(asArray: true) { metaTitleContainer metaTagContainer } } } }`, preview, previewData)
	return d.entry ? shapePage(d.entry) : null
}

// ---------------------------------------------------------------- text the team writes in Craft

// Shouted capitals become sentence case (design principles rule 7: caps only on short labels). Names, days, months
// and acronyms keep their capitals.
const KEEP = new Set('FHS EU UK UAE KSA USA PBSA AV VIP FAQ FAQS TBC PPE VAT CEO HR IT ID QR M1 M2 M3 CFL-S1 MICE'.split(' '))
const PROPER = new Set(('monday tuesday wednesday thursday friday saturday sunday january february march april may june july ' +
	'august september october november december paris france pullman montparnasse accor bench hubspot swapcard').split(' '))

export function sentenceCase(text) {
	let start = true, afterFHS = false
	return text.replace(/[A-Za-z][A-Za-z0-9'’-]*|[.!?]/g, w => {
		if (/^[.!?]$/.test(w)) { start = true; return w }
		const up = w.toUpperCase(), low = w.toLowerCase()
		let out
		if (KEEP.has(up)) out = up
		else if (afterFHS || PROPER.has(low)) out = low[0].toUpperCase() + low.slice(1)
		else out = start ? low[0].toUpperCase() + low.slice(1) : low
		start = false
		afterFHS = up === 'FHS'
		return out
	})
}
// nearly all capitals ("BY 22:00 ON MONDAY, 22nd FEBRUARY" still counts)
const shouting = t => { const l = t.replace(/[^A-Za-z]/g, ''); return l.length > 3 && l.replace(/[^A-Z]/g, '').length / l.length >= .85 }

// Craft's editor lets tags overlap ("<strong>…MUST<strong> be submitted", bold left open at the end of a paragraph).
// Browsers repair that by carrying the bold into the NEXT blocks, so the page they build differs from the server's and
// React throws the whole page away (hydration). Balanced here: bold opened inside bold closes it (what the editor
// meant), a closing tag with nothing open is dropped, and a block (paragraph, list, heading) closes what is still open.
const INLINE = new Set(['strong', 'b', 'em', 'i', 'u', 'span', 'a', 'sup', 'sub', 's'])
const BLOCK = new Set(['p', 'li', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'figure', 'figcaption', 'hr', 'section'])
const VOID = new Set(['br', 'hr', 'img', 'wbr'])
function balance(html) {
	const out = [], stack = []
	let p = false
	const closeTo = n => { while (stack.length) { const t = stack.pop(); out.push(`</${t}>`); if (t === n) break } }
	const closeAll = () => { while (stack.length) out.push(`</${stack.pop()}>`) }
	for (const m of html.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>|[^<]+|</g)) {
		const tok = m[0], name = (m[1] || '').toLowerCase(), closing = tok[1] === '/'
		if (!name) { out.push(tok); continue }
		if (INLINE.has(name)) {
			if (closing) { if (stack.includes(name)) closeTo(name) }
			else if ((name === 'strong' || name === 'b') && stack.includes(name)) closeTo(name)
			else { out.push(tok); stack.push(name) }
			continue
		}
		if (BLOCK.has(name)) {
			closeAll()
			if (name === 'p') {
				if (closing) { if (p) { out.push(tok); p = false } continue }
				if (p) out.push('</p>')
				p = true
			} else if (p && !closing && name !== 'li') { out.push('</p>'); p = false }  // a list or heading cannot sit inside a paragraph
			out.push(tok)
			continue
		}
		out.push(tok)
		if (VOID.has(name)) continue
	}
	closeAll()
	if (p) out.push('</p>')
	return out.join('')
}

// House style and pasted-markup clean-up for a Craft rich-text field
export function cleanHtml(html) {
	if (!html) return ''
	let h = String(html)
		.replace(/<(script|style|iframe)[\s\S]*?<\/\1>/gi, '')
		.replace(/\s(on\w+|style|dir|data-[\w-]+)="[^"]*"/gi, '')
		.replace(/\sclass="(?!c-secondary")[^"]*"/gi, '')
		.replace(/https:\/\/[a-z0-9]+\.safelinks\.protection\.outlook\.com\/\?url=([^&"]+)[^"]*/g, (_, u) => decodeURIComponent(u))
		.replace(/\s*—\s*/g, ' – ')  // no em dashes: a spaced en dash
		.replace(/&nbsp;/g, ' ')
	h = balance(h)
	for (let i = 0; i < 3; i++) h = h.replace(/<(strong|b|em|span)>(\s*)<\/\1>/g, '$2')  // bold wrapped round nothing
		.replace(/(\s*<br\s*\/?>)+\s*(?=<\/(h\d|p|li|strong|b|span)>)/gi, '')  // line breaks left at the end of a line
		.replace(/<(p|h\d|li)>(\s|<br\s*\/?>)*<\/\1>/gi, '')                  // empty paragraphs and headings
		.replace(/<(ul|ol)>\s*<\/\1>/gi, '')
		.replace(/<a ([^>]*target="_blank"[^>]*)>/gi, (m, a) => /rel=/.test(a) ? m : `<a ${a} rel="noopener noreferrer">`)
		.replace(/<h1>/gi, '<h2>').replace(/<\/h1>/gi, '</h2>')
	// a small label heading (h5, h6) is for a few words; a sentence written as one becomes an ordinary heading
	h = h.replace(/<(h[56])>([\s\S]*?)<\/\1>/gi, (m, tag, inner) => text(inner).split(/\s+/).length > 4 ? `<h4>${inner}</h4>` : m)
	// capitals: every heading, and any run of more than four words, in sentence case; short labels stay as written
	h = h.replace(/<(h[2-4])>([\s\S]*?)<\/\1>/gi, (m, tag, inner) => `<${tag}>${inner.replace(/>([^<]+)</g, (x, t) => `>${shouting(t) ? sentenceCase(t) : t}<`).replace(/^([^<]+)/, t => shouting(t) ? sentenceCase(t) : t)}</${tag}>`)
	h = h.replace(/>([^<]+)</g, (m, t) => shouting(t) && t.trim().split(/\s+/).length > 4 ? `>${sentenceCase(t)}<` : m)
	return h.trim()
}

const text = html => (html || '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()
export const slugify = s => s.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// ---------------------------------------------------------------- the page

const kind = b => b.__typename.replace(/^.*ContentBlocks_|_BlockType$/g, '')
const photo = h => h && h[0] ? { url: h[0].half || h[0].url, wide: h[0].wide || h[0].url, thumb: h[0].thumb || h[0].url, width: h[0].width, height: h[0].height, alt: h[0].alt || '' } : null

// A block that opens a section: a Divider Heading, or a Text block whose single text starts with a large heading
// (anything written after that heading becomes the section's introduction).
function heading(b) {
	if (kind(b) === 'dividerHeading' && b.heading) return { title: b.heading, intro: '' }
	if (kind(b) !== 'text' || (b.textBlocks || []).length !== 1) return null
	const m = /^\s*<h[12][^>]*>([\s\S]*?)<\/h[12]>([\s\S]*)$/i.exec(b.textBlocks[0].body || '')
	return m && text(m[1]) ? { title: text(m[1]), intro: m[2] } : null
}

// the props each block's drawing needs, cleaned
function shapeBlock(b) {
	const k = kind(b)
	const base = { kind: k, id: b.id, anchor: b.anchorId || null }
	switch (k) {
		case 'text': {
			const items = (b.textBlocks || []).map(t => cleanHtml(t.body)).filter(Boolean)
			// three columns of long text read cramped beside the index: two when the texts are long
			const long = items.length && items.reduce((n, h) => n + text(h).length, 0) / items.length > 420
			return { ...base, cols: Math.max(1, Math.min(+b.columns || 1, long ? 2 : 3)), items }
		}
		case 'flipFlops': return { ...base, flip: !!b.flipStartOrder, rows: (b.flipFlops || []).map(f => ({ id: f.id, body: cleanHtml(f.body), caption: text(f.caption), photo: photo(f.hero) })) }
		case 'floaters': return { ...base, kind: 'flipFlops', flip: !!b.flipStartOrder, rows: (b.floaters || []).map(f => ({ id: f.id, body: cleanHtml((f.heading ? `<h3>${f.heading}</h3>` : '') + (f.body || '')), photo: photo(f.hero) })) }
		case 'cards': return { ...base, cols: Math.max(1, Math.min(+b.columns || 3, 4)), cards: (b.cards || []).map(x => ({ id: x.id, body: cleanHtml(x.body), photo: photo(x.hero) })) }
		case 'images': return { ...base, cols: Math.max(1, Math.min(+b.columns || 2, 4)), images: (b.images || []).map(i => photo([i])) }
		case 'billboard': return { ...base, slides: [{ id: b.id, body: cleanHtml(b.body), photo: photo(b.hero) }] }
		case 'billboardSlider': return { ...base, kind: 'billboard', slides: (b.slides || []).map(x => ({ id: x.id, body: cleanHtml(x.body), photo: photo(x.hero) })) }
		case 'bannerImage': return { ...base, kind: 'billboard', slides: [{ id: b.id, body: '', photo: photo(b.hero) }] }
		case 'impactFigures': return { ...base, figures: (b.impactFigures || []).map(f => ({ id: f.id, figure: text(f.figure), label: text(f.label) })) }
		case 'video': return { ...base, url: b.videoShareUrl || '' }
		case 'hubspotForm': return { ...base, body: cleanHtml(b.body), formId: (b.hubspotForm || [])[0]?.formId || null }
		case 'profilesCarousel': return { ...base, kind: 'people', title: text(b.heading), body: cleanHtml(b.text),
			cta: (b.ctaButton || [])[0] ? { label: b.ctaButton[0].buttonLabel, href: b.ctaButton[0].buttonLink } : null,
			people: (b.profiles || []).map(p => ({ id: p.id, name: p.title, role: [(p.positions || [])[0]?.jobTitle, (p.positions || [])[0]?.organisation].filter(Boolean).join(', '), photo: p.avatar?.[0]?.thumb || p.avatar?.[0]?.url || null })) }
		case 'testimonials': return { ...base, quotes: (b.testimonials || []).map(q => ({ id: q.id, quote: text(q.quote), who: q.fullName, role: [q.jobTitle, q.organisation].filter(Boolean).join(', ') })) }
		case 'ticker': return { ...base, items: (b.ticker || []).map(t => ({ id: t.id, text: text(t.text), href: t.hyperlink || null })).filter(t => t.text) }
		case 'hoverPopups': return { ...base, kind: 'faq', items: (b.hoverPopups || []).map(p => ({ id: p.id, q: text(p.message), a: cleanHtml(p.popup) })) }
		case 'videoTestimonials': return { ...base, videos: (b.videoTestimonials || []).map(v => ({ id: v.id, url: v.videoShareUrl, who: v.fullName, role: [v.jobTitle, v.organisation].filter(Boolean).join(', ') })) }
		case 'partners': return { ...base, kind: 'logos', groups: [{ title: text(b.heading), body: cleanHtml(b.body), logos: logos(b.partners) }] }
		case 'partnerGroups': return { ...base, kind: 'logos', groups: (b.partnerGroups || []).map(g => ({ title: g.title, body: '', logos: logos(g.partners) })) }
		case 'passes': return { ...base, passes: (b.passes || []).filter(p => p.passTitle).map(p => ({ id: p.id, title: p.passTitle, body: cleanHtml(p.passDescription), href: p.passButtonUrl || p.hyperlink || null, label: p.passButtonLabel || 'Book this pass', soldOut: !!p.passSoldOut })) }
		default: return null  // a block type with no Living drawing yet is left out rather than drawn in the old theme
	}
}
const logos = list => (list || []).filter(p => p.partnerLogo?.[0]?.url).map(p => ({ id: p.id, name: p.title, href: p.website || null, src: p.partnerLogo[0].url }))

const seo = (entry, key) => { try { return JSON.parse(entry.seomatic?.[key] || '{}') } catch (e) { return {} } }

export function shapePage(entry) {
	const raw = entry.fhisContentBlocks || []
	let rest = raw
	// a page that opens with a Flip Flops row: its first row becomes the page's introduction, beside the title
	let hero = null
	if (raw[0] && kind(raw[0]) === 'flipFlops' && (raw[0].flipFlops || []).length) {
		const [first, ...more] = raw[0].flipFlops
		hero = { body: cleanHtml(first.body), photo: photo(first.hero) }
		rest = more.length ? [{ ...raw[0], flipFlops: more }, ...raw.slice(1)] : raw.slice(1)
	}
	// sections open at each heading block
	const sections = []
	let cur = { title: null, intro: '', blocks: [] }
	for (const b of rest) {
		const h = heading(b)
		if (h) {
			if (cur.title || cur.blocks.length) sections.push(cur)
			cur = { title: h.title, intro: cleanHtml(h.intro), blocks: [] }
			continue
		}
		const s = shapeBlock(b)
		if (s) cur.blocks.push(s)
	}
	if (cur.title || cur.blocks.length) sections.push(cur)
	const used = new Set()
	sections.forEach(s => {
		if (!s.title) return
		s.title = sentenceCase(s.title) === s.title || !shouting(s.title) ? s.title : sentenceCase(s.title)
		let id = slugify(s.title) || 'section'
		while (used.has(id)) id += '-2'
		used.add(id)
		s.id = id
	})
	// the page's title and description: Craft's SEO title when one was written, the page's own words otherwise (the
	// SEO description Craft falls back to is the site-wide line, not about the page)
	const t = seo(entry, 'metaTitleContainer').title?.title
	const tags = seo(entry, 'metaTagContainer')
	const first = text(hero?.body.replace(/<h\d[\s\S]*?<\/h\d>/gi, '') || '') || text(sections.flatMap(s => [s.intro, ...s.blocks.flatMap(b => b.items || [])]).join(' '))
	const description = first.length > 158 ? first.slice(0, 158).replace(/\s+\S*$/, '') + '…' : first
	return {
		slug: entry.slug,
		title: entry.title,
		seoTitle: t && t.length <= 60 ? t : `FHS Living | ${entry.title}`.slice(0, 60),
		description: description || `${entry.title}, from FHS Living by Future Hospitality Summit.`,
		noindex: /noindex|none/.test(tags.robots?.content || ''),
		hero,
		sections,
	}
}
