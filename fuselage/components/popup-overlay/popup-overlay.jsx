import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

import CloseIcon from './img/icon-close.svg'

import CSS from './popup-overlay.module.css'

export function PopupOverlay({ show, onClose, children, decal }) {
    const [isBrowser, setIsBrowser] = useState(false)
  
    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleCloseClick = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = (
        <div className={`${CSS.modal} ${show && CSS.active}`}>
                
            <div className={`${CSS.container} bg-white`}>
                <button className={CSS.closeButton} onClick={handleCloseClick}><CloseIcon/></button>
                <div className={CSS.content}>
                    { children }
                </div>
            </div>

        </div>
    )


    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modalRoot")
        )

    } else {
        return null

    }    
  
}
