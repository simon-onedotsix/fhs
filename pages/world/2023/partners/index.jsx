import { Header, HeaderShim } from '../../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from '../../../../fuselage/global-ae/footer/footer'

import { GetLegacyBzPartners } from "../../../../lib/legacy-bz-partners"



// legacy data
import { bzPartners, bzPartnerCategories } from "../../../../data/legacy/ae/2023/bz-partners"


function Partners() {

	return (
		<div className='bg-white'>

			<Header 
				compact 
				shim 
				theme={{ 
					primary: 'var(--primary)', 
					secondary: 'var(--secondary)', 
					text: 'var(--primary)',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: '#ffffffee',
					overlayBg: 'var(--primary)',
				}}
				path={`/partners`}
			/>

			<section className="block bg-default">

				<div className='container center formatted'>
					<p className='fs-2 fw-600 c-primary'>2023 Sponsors &amp; Partners</p>
				</div>

				<div className='container'>
					{
						bzPartnerCategories &&
						bzPartnerCategories.map( cat => {
							return (
								<div key={cat.id} className={`mb-lg`}>
									{ GetLegacyBzPartners ( 
										bzPartners, 
										cat.sponsorshipLevel, 
										cat.sponsorshipType, 
										cat.heading, 
										cat.size,
										'ae',
										2023
									) }
								</div>
							)
						})
					}
				</div>

			</section>

			<Footer theme={{ footerBg: 'bg-white-90' }} />
		
		</div>
	)
}

Partners.theme = 'ae-2023'



export default Partners


