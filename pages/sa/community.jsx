import Layout from '../../fuselage/templates/sa/layout'

import { useEffect } from 'react'

import Head from 'next/head'

import { Header } from '../../fuselage/global-sa/header/header'
import { Footer } from '../../fuselage/global-sa/footer/footer'
import { PassBox, PassBoxGrid, PassBoxActions } from '../../fuselage/components/pass-box/pass-box' 
import { Button } from '../../fuselage/components/button/button'

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

			<Header compact shim />

            <section className="block bg-theme">
				<div className="container center">
					<p className='fs-1 fw-600'>FHS Community</p>
				</div>
                <div className="container">
					<div name="bizzabo-web-community" data-unique-name="437114" data-internal-website-base-url="https://events.bizzabo.com/437114"></div>
                </div>
            </section> 

			<Footer/>
        </>
    )
}


Community.getLayout = function getLayout( page ) {
	return (
		<Layout>
			{ page }
		</Layout>
	)
}