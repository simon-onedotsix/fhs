import { useState, useRef, useEffect } from 'react'
import HubspotForm from '../hubspot-form/hubspot-form'

import CSS from './popover.module.css'

export const PopOver = ({ children }) => {

    const [ showPopover, setShowPopover ] = useState( false )

    useEffect( () => {
        if ( localStorage.getItem("fhsSaPopover") !== "false" ) {
            setTimeout( () => {
                setShowPopover(true)
            }, "3000")
        }
    }, [])




	const handleForm = ( e ) => {
		e.preventDefault()
		console.log('form submitted')
	}
	const rejectPopover = ( e ) => {
		e.preventDefault()
		console.log('popover rejected')

        setShowPopover(false)
        localStorage.setItem("fhsSaPopover", "false")
	}





    return (
        <div className={`${CSS.overlay} ${ showPopover && CSS.active }`}>
            <div className={CSS.container}>
                <button className={CSS.closeButton} onClick={rejectPopover}>&times;</button>
                <div className={CSS.content}>
                    
                    { children }

                </div>
            </div>
        </div>
    )
}