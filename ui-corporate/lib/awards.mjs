// Award winners page: Craft entry 137082 (site fhis) -> one row per honour, and the page's four CMS-fed sections.
// A port of the design sample's tools/fetch_awards.py and src/pages/award-winners.html.
import { esc } from './html.mjs'
import { hidden } from './hidden.mjs'

// the avatar comes back as the sample prepares its portraits: 4:5, 440 wide, cut from the top
const QUERY = `{ entry(site: "fhis", id: "137082") { ... on fhsAwardWinners_fhsAwardWinners_Entry { dateUpdated
	awardWinners { ... on awardWinners_yearGroup_BlockType { year winners { ... on winners_BlockType { award event
	recipientProfile { ... on profiles_profile_Entry { id title
	avatar @transform(width: 440, height: 550, mode: "crop", position: "top-center") { url width height }
	positions { ... on positions_BlockType { jobTitle organisation } } } } } } } } } } }`

// the UAE summit's name in that year, as the live FHS Club page lists the editions
const eventName = (site, year) => site === 'fhisSa' ? 'FHS Saudi Arabia'
	: year === 2022 ? 'FHS Middle East' : year === 2023 ? 'FHS Abu Dhabi' : year <= 2021 ? 'AHIC' : 'FHS World'

const slug = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)

// `saved` is the snapshot, winners.json (same shape as the return value). A row keeps the snapshot's
// prepared portrait when its slug (year + name) is there; a row new in Craft carries the Craft image URL
// in `slug` instead, and a profile without an avatar has slug, w and h null.
export async function fetchAwards(craft, saved) {
	const entry = (await craft(QUERY))?.entry
	if (!entry?.awardWinners?.length) throw new Error('Craft returned no award winners (entry 137082)')
	const prepared = new Map((saved?.rows || []).filter(r => r.slug).map(r => [r.slug, r]))
	const rows = []
	for (const group of entry.awardWinners) {
		const year = parseInt(group.year, 10)
		for (const w of group.winners) for (const p of w.recipientProfile) {
			if (hidden(p.title.trim().toLowerCase().replace(/\s+/g, '-'))) continue
			const pos = p.positions?.[0] || {}
			const job = (pos.jobTitle || '').trim(), org = (pos.organisation || '').trim()
			const role = [job, org].filter(x => x && x !== p.title).join(', ') // Craft has one name stored as a title
			const avatar = p.avatar?.[0], had = prepared.get(slug(`${year}-${p.title}`))
			const img = !avatar ? { slug: null, w: null, h: null }
				: had ? { slug: had.slug, w: had.w, h: had.h }
				: { slug: avatar.url, w: avatar.width, h: avatar.height }
			rows.push({ year, award: w.award.trim(), event: eventName(w.event, year), name: p.title.trim(), role, ...img })
		}
	}
	if (!rows.length || rows.some(r => !r.name)) throw new Error('Craft returned no usable award winners (entry 137082)')
	rows.sort((a, b) => b.year - a.year) // stable: Craft's order inside a year is kept
	return { updated: entry.dateUpdated, rows }
}

const years = rows => [...new Set(rows.map(r => r.year))]

const kind = award => award.includes('Lifetime') ? 'lifetime'
	: award.includes('Future Leader') || award.includes('Tomorrow') ? 'future'
	: award.includes('Leadership') ? 'leadership' : 'other'

const head = (id, title, intro) => `<div class="wrap shead ">
	<h2 class="h2" id="${id}">${title}</h2><p class="shead__intro">${intro}</p>
</div>`

// prepared files (webp and jpg) for a snapshot row, the Craft crop for a new one, an empty frame without an avatar
function photo(r, cls, lazy) {
	const tail = `alt=""${lazy ? ' loading="lazy"' : ''} width="${r.w}" height="${r.h}"`
	const img = !r.slug ? ''
		: /^https?:/.test(r.slug) ? `<img src="${esc(r.slug)}" ${tail}>`
		: `<source srcset="/assets/img/awards/${r.slug}.webp" type="image/webp"><img src="/assets/img/awards/${r.slug}.jpg" ${tail}>`
	return `<picture class="${cls}">${img}</picture>`
}

// slot awardsLatest: the heading and the honours of the latest year
export function renderAwardsLatest({ rows }) {
	const year = rows[0].year
	return `${head('latest-title', `The ${year} <br>honours`, 'Presented on the FHS World stage in Dubai and the FHS Saudi Arabia stage in Riyadh.')}
	<ul class="wrap aw-latest__list" role="list">${rows.filter(r => r.year === year).map(r => `
		<li class="aw-star">
			${photo(r, 'aw-star__photo')}
			<p class="aw-star__award">${esc(r.award)}</p>
			<p class="aw-star__name">${esc(r.name)}</p>${r.role ? `<p class="aw-star__role">${esc(r.role)}</p>` : ''}
			<p class="aw-star__at">${esc(r.event)} ${r.year}</p>
		</li>`).join('')}
	</ul>`
}

// slot awardsIndexHead: the index heading, with the counts in its intro
export function renderAwardsIndexHead({ rows }) {
	const ys = years(rows)
	return head('index-title', `Every honour <br>since ${ys[ys.length - 1]}`, `${rows.length} honours in ${ys.length} years, at the UAE summit from AHIC to FHS World and at FHS Saudi Arabia. Titles as FHS records them.`)
}

// slot awardsCount: the filter's status line (js/pages/awards.js rewrites it on a click)
export const renderAwardsCount = ({ rows }) => `<p class="aw-filter__count" role="status" aria-live="polite" data-aw-count>Showing all ${rows.length} honours</p>`

// slot awardsYears: every honour, by year
export function renderAwardsYears({ rows }) {
	return `<div class="wrap aw-years">${years(rows).map(y => `
		<section class="aw-year" aria-labelledby="y${y}" data-aw-year>
			<h3 class="aw-year__n" id="y${y}">${y}</h3>
			<ul class="aw-year__list" role="list">${rows.filter(r => r.year === y).map(r => `
				<li class="aw-row" data-series="${r.event === 'FHS Saudi Arabia' ? 'sa' : 'uae'}" data-kind="${kind(r.award)}">
					${photo(r, 'aw-row__photo', true)}
					<div class="aw-row__who">
						<p class="aw-row__name">${esc(r.name)}</p>${r.role ? `<p class="aw-row__role">${esc(r.role)}</p>` : ''}
					</div>
					<p class="aw-row__award">${esc(r.award)}</p>
					<p class="aw-row__at">${esc(r.event)}</p>
				</li>`).join('')}
			</ul>
		</section>`).join('')}
	</div>`
}
