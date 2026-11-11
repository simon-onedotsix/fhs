// The content library: the latest items across every FHS site in Craft, and the three page sections they feed
// (the homepage podcast list, the homepage news list, the content library page).
// Ported from the design sample: tools/fetch_library.py for the data, src/pages/index.html and
// src/pages/content-library/index.html for the markup. tools/port/check_library.mjs there compares the two.
import { esc, date, pic, CHEV } from './html.mjs'

const TYPES = { 'podcast': 'Podcast', 'podcasts': 'Podcast', 'video insights': 'Video insights', 'press room': 'Press room', 'industry news': 'Industry news' }
// the filter each type sits under on the library page; every other type is "insight"
const GROUP = { 'Podcast': 'podcast', 'Press room': 'press', 'Video insights': 'video' }

const QUERY = `{ entries(section: "contentLibrary", site: ["fhis", "fhisAe", "fhisSa", "fhsEgypt", "ahif", "fhsLiving"], unique: true, limit: 48, orderBy: "postDate DESC") {
	... on contentLibrary_article_Entry { slug title postDate excerpt url
		contentLibraryHero { width filename thumb: url @transform(width: 960, height: 540, mode: "crop") }
		contentTypes { ... on contentLibrary_Category { title } } } } }`

// Craft reports /<site>/<slug>; the live route is /<site>/content-library/<slug>
const liveUrl = u => u.replace(/^https:\/\/(?:www\.)?futurehospitality\.com\/([a-z]+)\/(?!content-library\/)/, 'https://futurehospitality.com/$1/content-library/')

function kind(e) {
	const t = (e.contentTypes || []).filter(Boolean).map(c => c.title)
	return t.length ? TYPES[t[0].trim().toLowerCase()] || t[0] : 'Article'
}

// screenshots and WhatsApp forwards are not good enough to lead a page; real photos are large JPEGs
function realPhoto(h) {
	const name = (h.filename || '').toLowerCase()
	return !!h.width && h.width >= 1600 && !name.endsWith('.png') && !['whatsapp', 'screenshot', 'thumbnail'].some(w => name.includes(w))
}

// The latest items from Craft, in the shape of the saved snapshot (`saved`, the sample's data/library/items.json).
// An item the snapshot already has keeps its prepared local thumbnail; a newer one takes Craft's own crop.
export async function fetchLibrary(craft, saved = []) {
	const local = new Map(saved.map(s => [s.slug, s.img]))
	const items = [], seen = new Set()
	for (const e of (await craft(QUERY)).entries) {
		const title = e.title.trim().split(/\s+/).join(' ')
		if (seen.has(title.toLowerCase())) continue // the same release is often filed on two event sites
		seen.add(title.toLowerCase())
		const type = kind(e), ep = title.match(/(?:Episode|Podcast|Ep\.?)\s*(\d{2,4})/i)
		const h = (e.contentLibraryHero || [])[0]
		items.push({
			slug: e.slug, title, date: e.postDate.slice(0, 10), type,
			episode: ep && type === 'Podcast' ? +ep[1] : null,
			excerpt: (e.excerpt || '').trim(),
			url: liveUrl(e.url || `https://futurehospitality.com/living/${e.slug}`), // Craft's Living site has a broken base URL: url is null
			img: local.get(e.slug) || (h && h.thumb) || null,
			photo: h ? realPhoto(h) : false,
		})
	}
	if (!items.length) throw new Error('Craft returned no content library items')
	return items
}

const isPodcast = i => i.type === 'Podcast'
const cut = (s, part) => s.split(part).join('')
const when = i => `<time datetime="${i.date}">${date(i.date)}</time>`

// homepage, "The FHS Podcast": the three newest episodes that have a picture
export function renderHomePodcasts(items) {
	return items.filter(i => isPodcast(i) && i.img).slice(0, 3).map(i => `
		<li><a href="${esc(i.url)}"><img src="${/^https?:/.test(i.img) ? esc(i.img) : `${i.img}.webp`}" alt="" loading="lazy" width="960" height="540"><span class="reads__t">${esc(cut(i.title, 'FHS Podcast '))}</span>${when(i)}</a></li>`).join('')
}

// homepage, "News": the three newest releases
export function renderHomeNews(items) {
	return items.filter(i => i.type === 'Press room' || i.type === 'Industry news').slice(0, 3).map(i => `
		<li><a href="${esc(i.url)}"><span class="reads__t">${esc(i.title)}</span>${when(i)}</a></li>`).join('')
}

// The content library page, everything inside <section class="lib">.
// `lead` names the lead article (needs url, img, type, date, title, excerpt); left out, it is the newest release
// with a real photo. `archiveLink` adds the sample's closing link to the live archive, which this page now is.
export function renderLibrary(items, { lead, archiveLink } = {}) {
	const podcasts = items.filter(isPodcast), count = t => items.filter(i => i.type === t).length
	const art = lead || items.find(i => i.type === 'Press room' && i.photo) || items.find(i => i.img)
	return `${art ? `
	<div class="wrap lib__lead">
		<a class="lead" href="${esc(art.url)}">
			<figure class="lead__img">${pic(art.img, { lazy: false })}</figure>
			<div class="lead__text">
				<p class="meta"><span>${esc(art.type)}</span>${when(art)}</p>
				<h2 class="lead__title" id="lib-lead">${esc(art.title)}</h2>
				<p class="lead__ex">${esc(art.excerpt)}</p>
				<span class="lead__go">Read the release ${CHEV}</span>
			</div>
		</a>
	</div>
` : ''}
	<div class="pod" aria-labelledby="pod-title">
		<div class="wrap pod__head">
			<h2 class="h2" id="pod-title">The FHS <br>Podcast</h2>
			<p class="pod__intro">Conversations with the owners, operators, investors and ministers building the industry. ${podcasts.length} recent episodes, newest first.</p>
		</div>
		<ol class="pod__track" tabindex="0" aria-label="Recent FHS Podcast episodes">${podcasts.map(p => `
			<li class="pod__ep"><a href="${esc(p.url)}">
				<span class="pod__no">${p.episode || ''}</span>${p.img ? `<span class="pod__img">${pic(p.img)}</span>` : ''}
				<span class="pod__t">${esc(cut(cut(p.title, `FHS Podcast Episode ${p.episode}: `), `FHS Podcast ${p.episode}: `))}</span>
				${when(p)}</a></li>`).join('')}
		</ol>
	</div>

	<div class="wrap lib__all">
		<div class="lib__bar">
			<h2 class="h2 lib__h">Latest</h2>
			<div class="filters" role="group" aria-label="Show" data-filters hidden>
				<button type="button" aria-pressed="true" data-f="all">All <span>${items.length}</span></button>
				<button type="button" aria-pressed="false" data-f="press">Press room <span>${count('Press room')}</span></button>
				<button type="button" aria-pressed="false" data-f="podcast">FHS Podcast <span>${podcasts.length}</span></button>
				<button type="button" aria-pressed="false" data-f="video">Video insights <span>${count('Video insights')}</span></button>
				<button type="button" aria-pressed="false" data-f="insight">Insight <span>${items.filter(i => !GROUP[i.type]).length}</span></button>
			</div>
		</div>
		<ol class="rows" data-rows aria-live="polite">${items.map(i => `
			<li class="row" data-type="${GROUP[i.type] || 'insight'}"><a href="${esc(i.url)}">${i.img ? `<span class="row__img">${pic(i.img)}</span>` : ''}
				<span class="row__text">
					<span class="meta"><span>${esc(i.type)}${i.episode ? ` · Episode ${i.episode}` : ''}</span>${when(i)}</span>
					<span class="row__t">${esc(i.title)}</span>${i.excerpt ? `<span class="row__ex">${esc(i.excerpt)}</span>` : ''}
				</span></a></li>`).join('')}
		</ol>${archiveLink ? `
		<p class="lib__more"><a class="link link--dark" href="https://futurehospitality.com/content-library">The full archive on futurehospitality.com ${CHEV}</a></p>` : ''}
	</div>`
}
