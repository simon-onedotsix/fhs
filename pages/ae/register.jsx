import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { useEffect } from 'react'

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'

export default function Register () {

    useEffect( () => {
        (function(){var bz=document.createElement("script");bz.type="text/javascript";bz.async=true;bz.src="https://organizer.bizzabo.com/widgets/tickets/tickets.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bz,s);})();
    }, [])

    return (
        <>
            <ThemeBg />

            <Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

            <section className="block bg-theme">

                <div className="container">
                    <p className="fs-0 fw-600">Register</p>
                </div>

                <div className="container">
                    <div className="bizzabo-tickets-widget" data-event-id="443032" data-params="isInMinisite=true&widgetId=222524"></div>
                </div>
            </section> 

            <Footer theme={{ footerBg: 'bg-white-90' }} />
        </>
    )
}
Register.theme = 'ae-2023'