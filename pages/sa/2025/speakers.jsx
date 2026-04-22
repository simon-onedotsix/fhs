import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_SA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"


import CSS from '../../../css/app/speakers-sa-2024.module.css'




// hard-coded legacy data

import { speakers } from "../../../data/legacy/sa/2025/sc-speakers"



export default function Speakers() {

	// console.log('speakers:', speakers)

	// sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
	// console.log('ordered:', orderedSpeakers)

	// customise order (VIP speakers to top of list)
	let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.firstName == 'HH Prince Bandar bin Saud bin Khalid' && speaker.lastName === 'Al Saud' ? 0 : 1),
		(speaker => speaker.firstName == 'Mahmoud' && speaker.lastName === 'Abdulhadi' ? 0 : 1),
		(speaker => speaker.firstName == 'Sultan Bader' && speaker.lastName === 'Al-Otaibi' ? 0 : 1),
		(speaker => speaker.firstName == 'Nick' && speaker.lastName === 'Candy' ? 0 : 1),
		(speaker => speaker.firstName == 'Maud' && speaker.lastName === 'Bailly' ? 0 : 1),
		(speaker => speaker.firstName == 'Jerry' && speaker.lastName === 'Inzerillo' ? 0 : 1),
		
		(speaker => speaker.firstName == 'Elie' && speaker.lastName === 'Younes' ? 0 : 1),
		(speaker => speaker.firstName == 'Gregory' && speaker.lastName === 'Djerejian' ? 0 : 1),
		(speaker => speaker.firstName == 'Serena' && speaker.lastName === 'Lim' ? 0 : 1),
		
		(speaker => speaker.firstName == 'Shaikha Al' && speaker.lastName === 'Nowais' ? 0 : 1),
		(speaker => speaker.firstName == 'Hossam' && speaker.lastName === 'Al-Basrawi' ? 0 : 1),
		(speaker => speaker.firstName == 'Sean' && speaker.lastName === 'Hehir' ? 0 : 1),
		(speaker => speaker.firstName == 'Amin' && speaker.lastName === 'Ismail' ? 0 : 1),
		(speaker => speaker.firstName == 'Omar' && speaker.lastName === 'Romero De Francisco' ? 0 : 1),
		(speaker => speaker.firstName == 'Wahdan' && speaker.lastName === 'AlKadi' ? 0 : 1),
	] )
	// console.log('customOrderedSpeakers:', customOrderedSpeakers)

	return (
		<div className="bg-default">

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

			<section className="block bg-default">
				<div className="container">

					<p className='fs-1 fw-600 c-secondary lh-1 maxw-40'>2025 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							customOrderedSpeakers.map( speaker => {
								if ( speaker.type ) return (
									<div key={speaker.id}>
										<div className={CSS.avatar}>
											{
												speaker.photoUrl ? 
												<Image 
													src={speaker.photoUrl} 
													width={370} 
													height={370} 
														alt=""
														unoptimized
												/>
												: 
												<Image 
													src='/assets/ui/avatar-fallback.png' 
													width={370} 
													height={370} 
													alt=""
													unoptimized
												/>
											}
										</div>
										
										<div>
											<p className='mt-xs'>
												<span className='fw-600'>{speaker.firstName} {speaker.lastName}</span> 
												<br/>{speaker.jobTitle} 
												<br/>{speaker.organization}
											</p>
										</div>
									</div>
								)
							})
						}
					</SpeakerGrid>
			
				</div>
				
			</section>

			<Footer />
			<LenisScroller />

		</div>
	)
}

Speakers.theme = 'sa-2025'

