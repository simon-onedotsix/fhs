import React from 'react'
import PropTypes from 'prop-types'

import HubspotForm from '../../components/hubspot-form/hubspot-form'

export const Form = ({ portalId, formId, theme, maxWidth, children }) => {
    return (

        <section className={`block bg-${theme}`}>
            <div className={`container maxw-${maxWidth} ${children ? 'columns-2 gap-lg' : null}`}>

                {
                    children ?
                        <div className='formatted' dangerouslySetInnerHTML={{__html: children }} />
                    : null
                }

                <HubspotForm portalId={portalId} formId={formId} />
                
            </div>
        </section>

    )
}

Form.propTypes = {
    portalId: PropTypes.string,
    formId: PropTypes.string,
    theme: PropTypes.string,
    maxWidth: PropTypes.string
}