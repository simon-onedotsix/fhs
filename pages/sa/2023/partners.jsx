import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_SA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'

import { GetLegacyBizzaboPartners } from "../../../lib/bizzabo-partners"
import { bzPartnerCategories, bzPartners } from '../../../data/legacy/sa/2023/bz-partners'


function Partners() {

	return (
		<div className='bg-white'>

            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

			<section className="block bg-default">

				<div className='container center formatted'>
					<p className='fs-1 fw-600 c-primary'>2023 Partners</p>
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

Partners.theme = 'sa-2025'



export default Partners


