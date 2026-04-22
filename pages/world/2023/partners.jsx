import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_WORLD as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'

import { GetLegacyBzPartners } from "../../../lib/legacy-bz-partners"



// legacy data
import { bzPartners, bzPartnerCategories } from "../../../data/legacy/ae/2023/bz-partners"


function Partners() {

	return (
		<div className='bg-white'>

            <EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
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

Partners.theme = 'world-2024'



export default Partners


