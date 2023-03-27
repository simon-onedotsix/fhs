import { useState, useEffect } from 'react'

import AbuDahbi from './img/fhs-abu-dahbi.svg'
import SaudiArabia from './img/fhs-saudi-arabia.svg'

import CSS from './portal-popup.module.css'

export const PortalPopup = () => {

    useEffect( () => {
        let showPortal = localStorage.getItem('hideFhsPortal')
        showPortal != 'true' ? setActive(true) : setActive(false)

    }, [])

    const [ active, setActive ] = useState(false)

    const handlePortalPopup = () => {
        setActive(false)
        localStorage.setItem('hideFhsPortal', true)
    }
    
    return (
        <div className={`${CSS.container} ${active && CSS.active}`}>

            <div className={CSS.layout}>
                <section className={`${CSS.box} bg-white p-sm center fw-400`}>
                    <p className={`${CSS.logo} maxw-10 mx-auto mb-xs`}>
                        <SaudiArabia />
                    </p>
                    <p className='fs-3 fw-600 lh-2' style={{ color: `rgb(10, 94, 10)`}}>Future Hospitality Summit <br/>Saudi Arabia</p>
                    <p className='mt-xs c-black'>28 February - 2 March 2023
                    <br/>Al Faisaliah Hotel, Riyadh</p>
                    <p className="mt-xs">
                        <a className={CSS.buttonOffsite} href={`https://sa.futurehospitalitysummit.com`} target={`_blank`}>Visit website</a>
                    </p>
                </section>

                <section className={`${CSS.box} bg-white p-sm center fw-400`}>
                    <p className={`${CSS.logo} maxw-10 mx-auto mb-xs`}>
                        <AbuDahbi />
                    </p>
                    <p className='fs-3 fw-600 lh-2 c-secondary'>Future Hospitality Summit</p>
                    <p className='mt-xs c-black'>25-27 September 2023<br/>Hilton Abu Dhabi Yas Island</p>
                    <p className="mt-xs" onClick={ ()=> handlePortalPopup() }>
                        <a className={CSS.button}>Visit website</a>
                    </p>
                </section>
            </div>

        </div>
    )
}