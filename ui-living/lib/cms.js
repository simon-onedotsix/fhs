// What the FHS Living team edits outside the code: the Founding Advisors, pass prices, articles, the travel page and
// the case studies in Craft, partners and the programme in Swapcard. Read when the app is built ("Deploy FHS
// frontend"), and again by each Living page on the live site at most every REVALIDATE seconds, so an edit shows within
// about 5 minutes without a deploy. Each loader returns the shape of its saved snapshot in ui-living/data plus `source`.
// When a source cannot be read, the build falls back to that snapshot, so an outage never stops the build for every
// event, and a refresh on the live site fails, so Next keeps serving the page's last good version.
import { gql } from '@apollo/client'
import craftApolloClient from '../../pages/api/apollo'
import { parseCases } from './cases'
import { parseProgramme } from './programme'
import advisorsSaved from '../data/advisors.json'
import passesSaved from '../data/passes.json'
import librarySaved from '../data/library.json'
import partnersSaved from '../data/partners.json'
import casesSaved from '../data/cases.json'
import programmeSaved from '../data/programme.json'

// seconds between a Living page's refreshes on the live site (Next's incremental static regeneration)
export const REVALIDATE = 300
const BUILDING = process.env.NEXT_PHASE === 'phase-production-build'

const SITE = process.env.SITE_HANDLE_LIVING || 'fhsLiving'
// the editorial rules the prototype applies to the roster (site/tools/build.py)
const FOCUS_FIX = { 'Co-living': 'Co-Living', 'Hotel & Resorts': 'Hotels & Resorts', 'Mixed-Use': 'Mixed Use', 'Student Accommodation': 'Student Accommodation (PBSA)' }
const CLASSES = Object.keys(advisorsSaved.counts)
// house style for text written in the CMS: no em dashes, a spaced en dash instead
const tidy = s => s.replace(/\s*—\s*/g, ' – ')

async function craft(query) {
	const { data } = await craftApolloClient().query({ query: gql(query), fetchPolicy: 'no-cache' })
	return data
}

// At build: one read per build worker, shared by every page that needs it. On the live site: a fresh read each refresh.
function loader(name, read, saved) {
	const live = () => read().then(data => ({ ...data, source: 'live' }))
	if (process.env.NODE_ENV === 'production' && !BUILDING) return live
	let pending
	return () => pending || (pending = live().catch(e => {
		console.warn(`FHS Living: ${name} from the saved snapshot (${e.message})`)
		return { ...saved, source: 'snapshot' }
	}))
}

// Swapcard's organiser API; `query` is given the Living 2027 event's id
async function swapcard(query) {
	const event = process.env.SWAPCARD_EVENT_ID_LIVING_2027
	if (!event || !process.env.SWAPCARD_AUTH_KEY) throw new Error('Swapcard is not configured in this environment')
	const res = await fetch('https://developer.swapcard.com/event-admin/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Authorization: process.env.SWAPCARD_AUTH_KEY },
		body: JSON.stringify({ query: query(event) }),
	})
	const { data, errors } = await res.json()
	if (errors) throw new Error(errors[0].message)
	return data
}

export const loadAdvisors = loader('Founding Advisors', async () => {
	const d = await craft(`{ group: entry(site: "${SITE}", section: "profileGroups", id: "310153") { ... on profileGroups_default_Entry {
		profiles { ... on profiles_profile_Entry { slug title focus geographies
			avatar { url @transform(width: 720, height: 880, mode: "crop", position: "top-center") }
			positions { ... on positions_BlockType { jobTitle organisation } } } } } } }`)
	const saved = Object.fromEntries(advisorsSaved.people.map(p => [p.slug, p.photo]))
	const people = d.group.profiles.filter(p => p.title).map(p => {
		const pos = (p.positions || [])[0] || {}
		return {
			name: p.title.trim().replace(/\b(Dr|Prof|Mr|Mrs|Ms)\. /g, '$1 '),
			slug: p.slug,
			title: tidy((pos.jobTitle || '').trim()),
			company: tidy((pos.organisation || '').trim()),
			focus: (p.focus || '').split('\n').map(f => f.trim()).filter(Boolean).map(f => FOCUS_FIX[f] || f).filter(f => CLASSES.includes(f)),
			geographies: (p.geographies || '').trim(),
			// our eye-aligned portrait where we have one; an advisor added later shows the CMS photo
			photo: saved[p.slug] || (p.avatar || [])[0]?.url || null,
		}
	})
	if (!people.length) throw new Error('the roster came back empty')
	return {
		people,
		counts: Object.fromEntries(CLASSES.map(k => [k, people.filter(p => p.focus.includes(k)).length])),
		order: CLASSES,
		featured: advisorsSaved.featured.filter(slug => people.some(p => p.slug === slug)),
	}
}, advisorsSaved)

export const loadPasses = loader('pass prices', async () => {
	const d = await craft(`{ entry(site: "*", id: 321756) { fhisContentBlocks { ... on fhisContentBlocks_passes_BlockType {
		passes { ... on passes_passNew_BlockType { passTitle passTaxRate passButtonUrl passPriceBands { startDate endDate value } } } } } } }`)
	const today = new Date().toISOString().slice(0, 10)
	const passes = d.entry.fhisContentBlocks.flatMap(b => b.passes || []).map(p => {
		const bands = p.passPriceBands.map(b => ({ start: b.startDate.slice(0, 10), end: b.endDate.slice(0, 10), ex_vat: Math.round(Number(b.value) / (1 + p.passTaxRate / 100)) }))
		const current = bands.find(b => b.start <= today && today < b.end) || bands[bands.length - 1]
		return { title: p.passTitle, url: p.passButtonUrl, vat_rate: p.passTaxRate, bands, current, next: bands.find(b => b.start >= current.end) || null }
	})
	if (!passes.length) throw new Error('no passes on entry 321756')
	return { read: today, cms_entry: 321756, passes }
}, passesSaved)

// Articles as the CMS lists them, newest first, then the AI event reports we link to (they live outside the CMS)
export const loadLibrary = loader('content library', async () => {
	const d = await craft(`{ entries(site: "${SITE}", section: "contentLibrary", orderBy: "postDate DESC") { ... on contentLibrary_article_Entry {
		slug title postDate excerpt contentTypes { title }
		contentLibraryHero { url @transform(width: 1200) width @transform(width: 1200) height @transform(width: 1200) } } } }`)
	const saved = Object.fromEntries(librarySaved.items.map(i => [i.url, i]))
	const items = d.entries.map(e => {
		const url = `/living/content-library/${e.slug}`
		const hero = (e.contentLibraryHero || [])[0]
		const mine = saved[url]
		return {
			category: (e.contentTypes || [])[0]?.title || 'Article',
			date: new Date(e.postDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'Europe/London' }),
			title: tidy(e.title),
			excerpt: tidy((e.excerpt || '').replace(/<[^>]+>/g, '').trim()),
			url,
			...(mine ? { image: mine.image, w: mine.w, h: mine.h } : hero ? { image: hero.url, w: hero.width, h: hero.height } : { image: 'photo/exhibition.jpg', w: 1600, h: 958 }),
		}
	})
	if (!items.length) throw new Error('no articles')
	return { items: [...items, ...librarySaved.items.filter(i => /^https?:/.test(i.url))] }
}, librarySaved)

// Partner tiers in the order of the Swapcard partner-group field, as Simon's original page grouped them
export const loadPartners = loader('partners', async () => {
	const data = await swapcard(event => `{
		event(id: "${event}") { fieldDefinitions { ... on SelectFieldDefinition { id optionsValues { id value translations { language value } } } } }
		exhibitors(eventId: "${event}", page: 1, pageSize: 200) { name logoUrl fields { ... on SelectField { id } } }
	}`)
	const groups = data.event.fieldDefinitions.find(f => f.id === 'RmllbGREZWZpbml0aW9uXzI5NjgyNg==').optionsValues
	const saved = Object.fromEntries(partnersSaved.tiers.flatMap(t => t.items).map(i => [i.name.toLowerCase(), i]))
	const tiers = groups.map(g => {
		const items = data.exhibitors.filter(x => x.fields.some(f => f.id === g.id))
			// our trimmed, optically sized logo where we have one; a new partner shows its Swapcard logo
			.map(x => saved[x.name.toLowerCase()] || { name: x.name, logo: x.logoUrl, w: 160, h: 64 })
		// the group's English name in Swapcard ("Headline Partners"), singular when it holds one partner
		const label = ((g.translations || []).find(t => t.language === 'en_US') || {}).value?.trim() || g.value
		return { tier: items.length === 1 ? label.replace(/([^s])s$/, '$1') : label, items }
	}).filter(t => t.items.length)
	if (!tiers.length) throw new Error('no partner groups')
	return { tiers }
}, partnersSaved)

// The Paris running order as the programme team keeps it in Swapcard (rules in ./programme.js)
export const loadProgramme = loader('programme', async () => {
	const d = await swapcard(event => `{ event(id: "${event}") { beginsAt }
		plannings(eventId: "${event}", page: 1, pageSize: 500) { title place beginsAt endsAt isPrivate } }`)
	return parseProgramme(d.plannings, d.event.beginsAt, programmeSaved)
}, programmeSaved)

// The "Where to stay" text the team keeps on Craft's Travel & Accommodation page. Outlook SafeLinks wrappers,
// pasted from email, are unwrapped to the real address so no mailbox details reach the public page.
export const loadTravel = loader('travel page', async () => {
	const d = await craft(`{ entry(site: "${SITE}", slug: "travel-and-accommodation") { ... on ${SITE}Pages_page_Entry {
		fhisContentBlocks { ... on fhisContentBlocks_flipFlops_BlockType { flipFlops { ... on flipFlops_BlockType { body } } } } } } }`)
	const html = d.entry.fhisContentBlocks.flatMap(b => b.flipFlops || []).map(f => f.body).join('\n')
	if (!html.trim()) throw new Error('no text')
	return { html: tidy(html).replace(/https:\/\/[a-z0-9]+\.safelinks\.protection\.outlook\.com\/\?url=([^&"]+)[^"]*/g, (_, u) => decodeURIComponent(u)) }
}, { html: null })

// The case studies: Craft's "Case studies" Living page (slug case-studies), one Flip Flops module per case, written,
// hidden and reordered there (format in ./cases.js). Until that page is published, previews and local review show
// the saved drafts; production shows only what Craft publishes.
const DRAFTS_OK = process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development'
export const loadCases = loader('case studies', async () => {
	const [{ people }, d] = await Promise.all([loadAdvisors(), craft(`{ entry(site: "${SITE}", slug: "case-studies") {
		... on ${SITE}Pages_page_Entry { fhisContentBlocks {
			... on fhisContentBlocks_text_BlockType { textBlocks { ... on textBlocks_BlockType { body } } }
			... on fhisContentBlocks_flipFlops_BlockType { anchorId flipFlops { ... on flipFlops_BlockType { caption body hero {
				card: url @transform(width: 1200, height: 900, mode: "crop") tile: url @transform(width: 800, height: 1000, mode: "crop")
				og: url @transform(width: 1200, height: 630, mode: "crop") } } } } } } } }`)])
	if (!d.entry) {
		if (DRAFTS_OK) throw new Error('the Craft page is not published yet')
		return { lead: null, cases: [] }
	}
	return parseCases(d.entry.fhisContentBlocks, people, CLASSES, tidy)
}, casesSaved)
