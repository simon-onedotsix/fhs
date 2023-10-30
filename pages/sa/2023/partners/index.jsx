import { Header } from '../../../../fuselage/theme/2023/sa/global/header/header'
import { Footer } from '../../../../fuselage/global-sa/footer/footer'

import { GetLegacyBizzaboPartners } from "../../../../lib/bizzabo-partners"
import { bzPartnerCategories, bzPartners } from '../../../../data/legacy/sa/2023/bz-partners'


function Partners() {

	return (
		<div className='bg-white'>

			<Header 
				compact 
				shim
				path={'/partners'}
				theme={{ 
					primary: 'white', 
					secondary: 'var(--secondary)', 
					text: 'white',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: 'linear-gradient(90deg, #7A4AFF 0%, var(--secondary) 73%)',
					overlayBg: 'var(--primary)',
				}}
			/>

			<section className="block bg-default">

				<div className='container center formatted'>
					<p className='fs-1 fw-600 c-primary'>2023 Sponsors & Partners</p>
				</div>
			

				<div className='container'>
					{
						bzPartnerCategories &&
						bzPartnerCategories.map( cat => {
							return (
								<div key={cat.id} className={`mb-lg`}>
									{ GetLegacyBizzaboPartners ( 
										bzPartners, 
										cat.sponsorshipLevel, 
										cat.sponsorshipType, 
										cat.heading, 
										cat.size,
										'sa'
									)}
								</div>
							)
						})
					}
				</div>

			</section>

			<Footer />
		
		</div>
	)
}

Partners.theme = 'sa-2023'



export default Partners


