import { useEffect } from 'react'

import PropTypes from 'prop-types'

import CSS from './hubspot-form.module.css'

export default function HubspotForm({ portalId, formId }) {

	useEffect( () => {
		const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

		script.addEventListener('load', () => {
			window.hbspt.forms.create({
				portalId: portalId,
				formId: formId,
				target: `#hubspotForm${formId}`
			})
        })
	}, [])

	return <div id={`hubspotForm${formId}`} className={`form ${CSS.overrides}`}></div>
}

HubspotForm.propTypes = {
	portalId: PropTypes.string.isRequired,
	formId: PropTypes.string.isRequired
}