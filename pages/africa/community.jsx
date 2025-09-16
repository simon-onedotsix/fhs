import { useEffect } from 'react'

import Script from 'next/script';

import { Header } from '../../fuselage/theme/2025/africa/common/header/header'
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
			<Header compact />

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