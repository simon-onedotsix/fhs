import Layout from '../../fuselage/templates/ae/layout'

import { useEffect } from 'react'

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'

export default function Register () {

    useEffect( () => {
        (function(){var bz=document.createElement("script");bz.type="text/javascript";bz.async=true;bz.src="https://organizer.bizzabo.com/widgets/tickets/tickets.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bz,s);})();
    }, [])

    return (
        <>
            <Header compact shim theme={{ primary: 'white', secondary: 'var(--accent-ae)', overlayBg: `var(--secondary)`, text: 'white' }} />

            <section className="block bg-theme">

                <div className="container">
                    <p className="fs-0 fw-600">Register</p>
                </div>

                <div className="container">
                    <div className="bizzabo-tickets-widget" data-event-id="443032" data-params="isInMinisite=true&widgetId=222524"></div>
                </div>
            </section> 

            <Footer />
        </>
    )
}

Register.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}