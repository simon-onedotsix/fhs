import { useHubspotForm } from 'next-hubspot'

import CSS from './hubspot-form.module.css'

export default function HubspotForm({ portalId, formId }) {

	const { loaded, error, formCreated } = useHubspotForm({
        portalId: portalId,
		formId: formId,
        target: `#hubspotForm${formId}`
    })

	return <div id={`hubspotForm${formId}`} className={`form ${CSS.overrides}`}></div>
}