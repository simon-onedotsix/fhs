import { useEffect, useRef } from 'react'

import { c } from '../lib/c'

// "Who would you like to network with?": the concierge block. The block itself is public/living/meet/widget.js, generated
// by who-to-meet-demo/build_widget.py from the demo page; it mounts into a Shadow DOM so neither stylesheet touches the
// other. Its searches go through the /living/meet-api rewrite (next.config.js) to our server, its images come from there.
export function MeetBlock({ bg }) {
	const box = useRef(null)
	useEffect(() => {
		const mount = () => window.WTMMount && window.WTMMount(box.current, { api: '/living/meet-api', assets: 'https://meet.futurehospitality.com' })
		if (window.WTMMount) return mount()
		const s = document.createElement('script')
		s.src = '/living/meet/widget.js'
		s.async = true
		s.onload = mount
		document.body.appendChild(s)
	}, [])
	return (
		<section className={c('section', bg)} aria-labelledby="meet-h" id="meet">
			<div className={c('wrap')}>
				<div className={c('head')}><h2 className={c('ruled')} id="meet-h">Who would you like to network with?</h2><p>Two minutes. A shortlist of who to meet, then your plan for both days.</p></div>
				<div ref={box} />
			</div>
		</section>
	)
}
