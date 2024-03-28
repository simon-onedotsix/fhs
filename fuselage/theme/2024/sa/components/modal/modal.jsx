import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

import CloseIcon from './img/icon-close.svg'

import CSS from './modal.module.css'

export function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false)
  
    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleCloseClick = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = (
        <div className={`${CSS.modal} ${show && CSS.active}`} onClick={handleCloseClick}>
                
            <div className={CSS.content}>
                <button className={CSS.closeButton} onClick={handleCloseClick}><CloseIcon/></button>
                { children }
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
