// What the team edits outside the code and the corporate pages show: the content library (every FHS site in
// Craft), award winners (entry 137082), the ESG page (200346), the partner opportunities (292503) and the FHS team
// (About, 201286). Read when the app is built ("Deploy FHS frontend") and again by each page on the live site at most
// every REVALIDATE seconds, so an edit shows within about 5 minutes without a deploy.
// A page is its saved markup (ui-corporate/html) with these sections filled in. When a source cannot be read, the
// build keeps the saved section, so an outage never stops the build for every event; a refresh on the live site
// fails instead, and Next keeps serving the page's last good version.
import { fill } from './slots.mjs'
import { fetchLibrary, renderHomePodcasts, renderHomeNews, renderLibrary } from './library.mjs'
import { fetchAwards, renderAwardsLatest, renderAwardsIndexHead, renderAwardsCount, renderAwardsYears } from './awards.mjs'
import { fetchEsg, renderEsg } from './esg.mjs'
import { fetchPartner, renderOpportunities } from './partner.mjs'
import { fetchTeam, renderTeam } from './team.mjs'
import librarySaved from '../data/library.json'
import awardsSaved from '../data/awards.json'
import esgSaved from '../data/esg.json'
import partnerSaved from '../data/partner.json'
import teamSaved from '../data/team.json'

// seconds between a page's refreshes on the live site (Next's incremental static regeneration)
export const REVALIDATE = 300
const BUILDING = process.env.NEXT_PHASE === 'phase-production-build'

// Craft's public GraphQL endpoint, published content only (the same endpoint as pages/api/apollo.js)
async function craft(query) {
	const res = await fetch('https://cms.thebench.com/api', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query }) })
	const { data, errors } = await res.json()
	if (errors) throw new Error(errors[0].message)
	return data
}

// At build: one read per build worker, shared by the pages that need it; a failed read gives null (saved section).
// On the live site: a fresh read at each refresh; a failed one throws.
function source(name, read) {
	if (process.env.NODE_ENV === 'production' && !BUILDING) return read
	let pending
	return () => pending || (pending = read().catch(e => {
		console.warn(`FHS corporate: ${name} from the saved page (${e.message})`)
		return null
	}))
}

// Articles whose own page fails on the live site: left out so nothing links to an error page. Remove a slug once
// its page loads (checked 11 Nov 2026: 500 on /content-library/ and /egypt/content-library/).
const BROKEN = ['fhs-podcast-from-investment-to-impact-rethinking-hotel-technology']

const library = source('content library', async () => (await fetchLibrary(craft, librarySaved)).filter(i => !BROKEN.includes(i.slug)))
const awards = source('award winners', () => fetchAwards(craft, awardsSaved))
const esg = source('ESG', () => fetchEsg(craft, esgSaved))
const partner = source('partner opportunities', () => fetchPartner(craft, partnerSaved))
const team = source('FHS team', () => fetchTeam(craft, teamSaved))

// props for <CorporatePage>: the saved page with its sections rendered from `data` (none when the read failed)
const props = (page, data, sections) => ({ ...page, html: data ? fill(page.html, sections(data)) : page.html })

export const homeProps = async page => props(page, await library(), d => ({ podcasts: renderHomePodcasts(d), news: renderHomeNews(d) }))
export const libraryProps = async page => props(page, await library(), d => ({ library: renderLibrary(d) }))
export const awardsProps = async page => props(page, await awards(), d => ({
	awardsLatest: renderAwardsLatest(d), awardsIndexHead: renderAwardsIndexHead(d), awardsCount: renderAwardsCount(d), awardsYears: renderAwardsYears(d),
}))
export const esgProps = async page => props(page, await esg(), d => ({ esg: renderEsg(d) }))
export const partnerProps = async page => props(page, await partner(), d => ({ opportunities: renderOpportunities(d) }))
export const aboutProps = async page => props(page, await team(), d => ({ team: renderTeam(d) }))
