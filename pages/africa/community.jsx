import { useEffect } from 'react'

import Head from 'next/head'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

export default function Community () {

    useEffect( () => {
        (function() {
			var bz = document.createElement('script');
			bz.type = 'text/javascript';
			bz.async = true;
			bz.src = 'https://organizer.bizzabo.com/widgets/webcommunity/webcommunity.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(bz, s);
		})();
    }, [])

    return (
		<>
			<Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
			</Head>
			
            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            <section className="block">
				<div className="container center">
					<p className='fs-1 fw-600'>AHIF Community</p>
				</div>
                <div className="container">
					<div 
						name="bizzabo-web-community" 
						data-unique-name="441072" 
						data-internal-website-base-url="https://events.bizzabo.com/441072"
					/>
                </div>
			</section> 
			
			<Footer/>

        </>
    )
}
Community.theme = 'africa'