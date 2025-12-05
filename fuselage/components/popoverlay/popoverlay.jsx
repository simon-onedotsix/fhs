import { useState, useEffect } from 'react'

import CSS from './popoverlay.module.css'

export const PopOverlay = ({ children, id }) => {

    const [ showPopover, setShowPopover ] = useState( false )

    useEffect( () => {
        if ( localStorage.getItem(id) !== "false" ) {
            setTimeout( () => {
                setShowPopover(true)
            }, "3000")
        }
    }, [])

	const rejectPopover = ( e ) => {
		e.preventDefault()
		console.log('popover rejected')

        setShowPopover(false)
        localStorage.setItem(id, "false")
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