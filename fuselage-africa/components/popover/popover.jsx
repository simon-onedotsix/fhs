import { useState, useRef, useEffect } from 'react'
import HubspotForm from '../hubspot-form/hubspot-form'

import CSS from './popover.module.css'

export const PopOver = ({ children }) => {

    const [ showPopover, setShowPopover ] = useState( false )

    useEffect( () => {
        if ( localStorage.getItem("ahifPopover") !== "false" ) {
            setTimeout( () => {
                setShowPopover(true)
            }, "3000")
        }
    }, [])




	const handleForm = ( e ) => {
		e.preventDefault()
		console.log('form submitted')
	}
	const handleRejection = ( e ) => {
		e.preventDefault()
		console.log('popover rejected')

        setShowPopover(false)
        localStorage.setItem("ahifPopover", "false")
	}





    return (
        <div className={`${CSS.overlay} ${ showPopover && CSS.active }`}>
            <div className={CSS.container}>
                <button className={CSS.closeButton} onClick={() => setShowPopover(false)}>&times;</button>
                <div className={CSS.content}>
                    
                    <div className="maxw-40 formatted">
                        {/* <p className="fs-2 fw-400 caps c-primary lh-1">Stay updated with all things&nbsp;Aviadev!</p> */}

                        <HubspotForm portalId={"14527187"} formId={"7b20fa87-a727-4dc9-9a55-5565ebcd0914"} />

                        <p className='mt-sm'>
                            <button className={CSS.rejectButton} onClick={handleRejection}>&times;</button>
                            &ensp;Dismiss and don't show me this again.</p>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}