import { useEffect, useState } from 'react'

import { c } from '../lib/c'
import facts from '../data/facts.json'

let loader  // one HubSpot script for every form, also across client-side navigation

function loadHubspot() {
	loader = loader || new Promise((resolve, reject) => {
		if (window.hbspt) return resolve()
		const s = document.createElement('script')
		s.src = 'https://js.hsforms.net/forms/embed/v2.js'
		s.async = true
		s.onload = resolve
		s.onerror = () => {
			loader = null
			reject()
		}
		document.head.appendChild(s)
	})
	return loader
}

// Same contract as fuselage/components/hubspot-form, plus the accessibility fix and a fallback if HubSpot is blocked.
export function HubspotForm({ formId, id, className }) {
	const [failed, setFailed] = useState(false)

	useEffect(() => {
		let live = true
		loadHubspot().then(() => {
			if (!live) return
			window.hbspt.forms.create({
				region: facts.hubspot.region,
				portalId: facts.hubspot.portal,
				formId,
				target: `#${id}`,
				css: '',
				// HubSpot puts role="checkbox" on checkbox lists and their items (invalid ARIA); the real inputs carry
				// the semantics. Dependent fields render after a change, so strip again then.
				onFormReady: f => {
					const el = f.jquery ? f[0] : f
					const strip = () => el.querySelectorAll('.inputs-list[role], .inputs-list > li[role]').forEach(n => n.removeAttribute('role'))
					strip()
					el.addEventListener('change', () => setTimeout(strip, 0))
				},
			})
		}, () => live && setFailed(true))
		return () => { live = false }
	}, [formId, id])

	if (failed) {
		return (
			<div id={id} className={className}>
				<p>The form could not load. Email <a className={c('link')} href={`mailto:${facts.contact.email}`}>{facts.contact.email}</a> and we will take it from there.</p>
			</div>
		)
	}
	return <div id={id} className={className} />
}
