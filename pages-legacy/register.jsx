import { useEffect } from 'react'

import { Header } from '../fuselage/global/header/header'

export default function Register () {


    useEffect( () => {
        (function(){var bz=document.createElement("script");bz.type="text/javascript";bz.async=true;bz.src="https://organizer.bizzabo.com/widgets/tickets/tickets.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bz,s);})();
    }, [])

    return (
        <>
            <Header compact shim />

            <section className="block bg-theme">

                <div className="container">
                    <p className="fs-0 fw-600">Register</p>
                </div>

                <div className="container">
                    <div className="bizzabo-tickets-widget" data-event-id="378241" data-params="isInMinisite=true&widgetId=161702"></div>
                </div>
            </section> 
        </>
    )
}
