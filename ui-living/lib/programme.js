import { ampm } from './format.js' // with .js so the self-check (site/tools/check_port_lib.mjs) runs it in plain Node

// Swapcard's sessions for FHS Living Paris -> the running order the Programme page lists and the chart draws to scale.
// Swapcard holds the titles, the times as typed (Paris time) and the rooms; the day themes and the status line are ours
// (ui-living/data/programme.json). Speakers are not read until the first set is announced.

// A session's kind, from its title and then its room. The chart colours and the format tags follow it.
function kind(s) {
	if (/reception|dinner|drinks/i.test(s.title)) return 'Reception'
	if (/site visit/i.test(s.title)) return 'Site visits'
	if (/investor meeting/i.test(s.title)) return 'Meetings'
	if (/\b(coffee|lunch|breakfast|break)\b/i.test(s.title)) return 'Break'
	return /^workshop/i.test(s.place || '') ? 'Workshops' : 'Main stage'
}

const hm = t => t.slice(11, 16) // '2027-02-23 09:30:00' -> '09:30'
const byStart = (a, b) => (a.start > b.start) - (a.start < b.start)

// the end most sessions of a group share, the earliest on a tie
function commonEnd(ends) {
	const count = e => ends.filter(x => x === e).length
	return [...ends].sort().reduce((best, e) => (count(e) > count(best) ? e : best))
}

// `firstDay`: the event's first day ('2027-02-23 ...'), so a session the evening before would be Day 0
export function parseProgramme(sessions, firstDay, { status, themes }) {
	const open = sessions.filter(s => !s.isPrivate && s.beginsAt && s.endsAt).map(s => ({
		date: s.beginsAt.slice(0, 10), start: hm(s.beginsAt), end: hm(s.endsAt), title: s.title.trim(), place: s.place || '', format: kind(s),
	}))
	if (!open.length) throw new Error('no public sessions')
	const day1 = Date.parse(firstDay.slice(0, 10))
	return {
		status,
		days: [...new Set(open.map(s => s.date))].sort().map(date => {
			const mine = open.filter(s => s.date === date)
			const items = mine.filter(s => s.format !== 'Workshops').map(({ start, end, title, format }) => ({ start, end, title, format }))
			// workshops that start together are one slot of parallel sessions, listed by room
			const workshops = mine.filter(s => s.format === 'Workshops')
			for (const start of new Set(workshops.map(s => s.start))) {
				const group = workshops.filter(s => s.start === start).sort((a, b) => a.place.localeCompare(b.place, 'en', { numeric: true }))
				if (group.length === 1) {
					const { end, title, format } = group[0]
					items.push({ start, end, title, format })
					continue
				}
				const end = commonEnd(group.map(s => s.end))
				items.push({ start, end, title: 'Parallel sessions', format: 'Workshops', parallel: group.map(s => (s.end === end ? s.title : `${s.title} (until ${ampm(s.end)})`)) })
			}
			return {
				n: String(Math.round((Date.parse(date) - day1) / 864e5) + 1).padStart(2, '0'),
				date: new Date(date + 'T12:00:00Z').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }),
				theme: themes[date] || '',
				items: items.sort(byStart),
			}
		}),
	}
}
