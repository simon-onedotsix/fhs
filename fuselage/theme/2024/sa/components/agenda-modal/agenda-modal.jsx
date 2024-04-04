import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

import CloseIcon from './img/icon-close.svg'

import CSS from './agenda-modal.module.css'

export function AgendaModal({ show, onClose, children }) {
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
                
            <button className={CSS.closeButton} onClick={handleCloseClick}><CloseIcon/></button>

            <div className={CSS.content}>

                <aside>
                    <p className="fs-5 fw-500">Thomas Emanuel is a Director at STR. He is based in London, and leads a team focused on driving business with industry partners.</p>
                </aside>

                <main>
                    <div class="formatted pr-xs">
                        <p>Thomas Emanuel is a Director at STR. He is based in London, and leads a team focused on driving business with industry partners.</p>
                        <p>He has spent his entire career in the hotel industry, beginning in 2000 with Miki Travel, before joining Hyatt Hotel &amp; Resorts, where he gained experience in corporate sales at both the worldwide sales office and at the property level. Thomas then led the corporate sales function for Hazlitt’s Hotels, a group of independent boutique hotels in London.</p>
                        <p>In 2006, Thomas joined the Deloitte HotelBenchmark team, where he was responsible for creating and leading the department’s business development function. He held this role until the international expansion of STR in March 2008 and has since focused on overseeing STR’s rapid growth outside North America. Throughout his time with STR, Thomas has gained a wealth of experience working with hotels, investors, developers, consultants, banks, governments, destination management companies and many others.</p>
                        <p>Thomas has been a guest lecturer at Ecole hôtelière de Lausanne, and been invited and participated in the OECD's high-level meetings on tourism policies.</p>
                        <p>Traveling extensively, Thomas has worked in over 45 countries across 6 continents and regularly speaks at major hospitality conferences around the world. He is also frequently interviewed for his insights on the hotel industry by media outlets including CNN, Bloomberg, CNBC, and The Times, as well as various tourism and hospitality publications.</p>
                    </div>
                    <div class="mt-md">
                        <p class="fs-6 fw-400 c-accent mb-xs">See Thomas Emanuel speak in the following sessions:</p><div class="mb-xs"><p class="c-accent fs-sm">Tuesday 24 March: 13:30 - 14:00</p><p class="fs-6 fw-600 c-white">Hotel Performance in Africa</p></div><div class="mb-xs"><p class="c-accent fs-sm">Tuesday 18 February: 13:15 - 13:30</p><p class="fs-6 fw-600 c-white">Hotel performance overview – from global to local</p></div><div class="mb-xs"><p class="c-accent fs-sm">Tuesday 18 February: 18:45 - 19:30</p><p class="fs-6 fw-600 c-white">Belgrade – Ljubljana – Zagreb</p></div><div class="mb-xs"><p class="c-accent fs-sm">Monday 25 September: 15:50 - 16:05</p><p class="fs-6 fw-600 c-white">What are the Numbers Telling Us? A Look at Hotel Performance Across the Middle East</p></div><div class="mb-xs"><p class="c-accent fs-sm">Tuesday 30 April: 11:30 - 11:45</p><p class="fs-6 fw-600 c-white">Setting the Scene for New Destination Development in Saudi Arabia</p></div><div class="mb-xs"><p class="c-accent fs-sm">Monday 29 April: 16:55 - 17:10</p><p class="fs-6 fw-600 c-white">Data Talks: Setting the Scene for Hotel Performance in Saudi Arabia</p></div>
                    </div>
                </main>


                {/* { children } */}
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
