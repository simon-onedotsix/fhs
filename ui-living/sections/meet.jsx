import { useEffect, useRef } from 'react'

import { c } from '../lib/c'

export const MEET_PATH = '/living/who-to-meet'

// "Who would you like to network with?": the concierge. The tool itself is public/living/meet/widget.js, generated
// by who-to-meet-demo/build_widget.py from the demo page; it mounts into a Shadow DOM so neither stylesheet touches the
// other. Its searches go through the /living/meet-api rewrite (next.config.js) to our server, its images come from there.
// `page` set = teaser: the search bar only, and a search opens that page with the tool running (?q=...).
export function MeetWidget({ page }) {
	const box = useRef(null)
	useEffect(() => {
		const mount = () => window.WTMMount && window.WTMMount(box.current, { api: '/living/meet-api', assets: 'https://meet.futurehospitality.com', page })
		if (window.WTMMount) return mount()
		const s = document.createElement('script')
		s.src = '/living/meet/widget.js'
		s.async = true
		s.onload = mount
		document.body.appendChild(s)
	}, [page])
	return <div ref={box} />
}

// The homepage teaser (Ahmed, 17 Nov 2026): the tool lives on its own page, which the team can also share directly.
export function MeetBlock({ bg }) {
	return (
		<section className={c('section', bg)} aria-labelledby="meet-h" id="meet">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="meet-h">Who would you like to network with?</h2><p>Two minutes. A shortlist of who to meet, then your plan for both days.</p></div>
				<MeetWidget page={MEET_PATH} />
				<p style={{ margin: '0 auto', maxWidth: 'none', textAlign: 'center' }}><a className={c('link')} href={`${MEET_PATH}?flow=profile`}>Or start from your role and company</a></p>
			</div>
		</section>
	)
}
