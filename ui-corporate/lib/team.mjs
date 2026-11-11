// The About page's team section. People, names and job titles come from Craft (entry 201286 on site fhis, the
// "FHS Team" profiles block); the teams, their order and the prepared portraits come from the saved snapshot
// (data/about/team.json in the design sample, written by its tools/fetch_about.py).
import { esc } from './html.mjs'
import { hidden } from './hidden.mjs'

const QUERY = `{
	entry(site: "fhis", id: "201286") {
		... on fhsAboutUs_fhsAboutUs_Entry {
			contentBlocksFhsGlobal {
				... on contentBlocksFhsGlobal_profiles_BlockType {
					heading
					profiles {
						... on profiles_profile_Entry {
							title
							avatar @transform(width: 480, height: 600, mode: "crop", position: "top-center") { url width height }
							positions { ... on positions_BlockType { jobTitle } }
						}
					}
				}
			}
		}
	}
}`

// partners who are not in Craft's team list: they stay as the snapshot has them
const PARTNERS = ['anne-bleeker']
const IMG = '/assets/img/about/team/'

const slugOf = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
// Craft text defects: a corrupted dash, no-break spaces, a spaced hyphen (house style is a spaced en dash)
const clean = t => (t || '').replace(/\uFFFD/g, '–').replace(/\u00A0/g, ' ').replace(/ - /g, ' – ').trim()

// craft(query) returns the GraphQL `data`; saved is the parsed team.json. Returns the snapshot's shape:
// [{ label, people: [{ slug, name, title, w, h }] }], plus `img` (a Craft URL) on people the snapshot does not know.
export async function fetchTeam(craft, saved) {
	const data = await craft(QUERY)
	const block = (data?.entry?.contentBlocksFhsGlobal || []).find(b => b.heading === 'FHS Team')
	if (!block?.profiles?.length) throw new Error('Craft returned no FHS team (entry 201286, block "FHS Team")')
	const live = new Map()
	for (const p of block.profiles) {
		const name = (p.title || '').trim(), slug = slugOf(name)
		if (slug && !hidden(slug, true)) live.set(slug, { slug, name, title: clean(p.positions?.[0]?.jobTitle), avatar: p.avatar?.[0] })
	}
	const groups = saved.map(g => ({
		label: g.label,
		people: g.people.flatMap(s => {
			const p = live.get(s.slug)
			live.delete(s.slug)
			return p ? [{ ...s, name: p.name, title: p.title }] : PARTNERS.includes(s.slug) ? [s] : []
		}),
	})).filter(g => g.people.length)
	// shortcut: Craft has no team field, so people new in Craft go in one closing group (and need an avatar to be
	// shown); give them a team and a prepared portrait by re-running fetch_about.py in the design sample
	const added = [...live.values()].filter(p => p.avatar?.url).map(({ avatar, ...p }) => ({ ...p, w: avatar.width, h: avatar.height, img: avatar.url }))
	if (added.length) groups.push({ label: 'Also on the team', people: added })
	return groups
}

// attribute order is the template's (alt, loading, width, height), which is why this is not html.mjs's pic()
const face = p => {
	const tail = `alt="" loading="lazy" width="${p.w}" height="${p.h}"`
	const img = p.img
		? `<img src="${esc(p.img)}" ${tail}>`
		: `<source srcset="${IMG}${p.slug}.webp" type="image/webp"><img src="${IMG}${p.slug}.jpg" ${tail}>`
	return `
			<li class="face"><picture>${img}</picture><p class="face__name">${esc(p.name)}</p><p class="face__role">${esc(p.title)}</p></li>`
}

// the HTML between <!--slot:team--> and <!--/slot:team--> on the About page
export function renderTeam(data) {
	return data.map((g, i) => `
	<div class="wrap ab-team__group${i ? '' : ' ab-team__group--lead'}">
		<h3 class="ab-team__h">${esc(g.label)}</h3>
		<ul class="faces ab-faces" role="list">${g.people.map(face).join('')}
		</ul>
	</div>`).join('')
}
