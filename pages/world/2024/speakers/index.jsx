import { useState } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../../../api/apollo"


import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller' 
import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../../fuselage/theme/2024/world/common/footer/footer'
import { SpeakerGrid } from "../../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../../lib/seomatic'

import CSS from '../../../../css/app/speakers.module.css'


// import legacy data
import { bzSpeakers as speakers } from "../../../../data/legacy/ae/2024/bz-speakers"


function Speakers() {

	const [ filter, setFilter ] = useState( null )

	

	// sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ], ['asc'])
	

	// customise order (VIP speakers to top of list)
	let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.firstName == 'His Excellency Abdulla bin Touq Al' && speaker.lastName === 'Marri' ? 0 : 1),
		(speaker => speaker.firstName == 'His Excellency Issam AbdulRahim' && speaker.lastName === 'Kazim' ? 0 : 1),
		(speaker => speaker.firstName == 'Fatim-Zahra' && speaker.lastName === 'Ammor' ? 0 : 1),
		(speaker => speaker.firstName == 'Sébastien' && speaker.lastName === 'Bazin' ? 0 : 1),
		(speaker => speaker.firstName == 'Paul' && speaker.lastName === 'Griffiths' ? 0 : 1),
		(speaker => speaker.firstName == 'Philip' && speaker.lastName === 'Barnes' ? 0 : 1),
		(speaker => speaker.firstName == 'Puneet' && speaker.lastName === 'Chhatwal' ? 0 : 1),
		(speaker => speaker.firstName == 'Kevin' && speaker.lastName === 'Goh' ? 0 : 1),
		(speaker => speaker.firstName == 'Pier Paolo' && speaker.lastName === 'Righi' ? 0 : 1),
		(speaker => speaker.firstName == 'Satya' && speaker.lastName === 'Anand' ? 0 : 1),
		(speaker => speaker.firstName == 'Artur' && speaker.lastName === 'Gerber' ? 0 : 1),
		(speaker => speaker.firstName == 'Michael' && speaker.lastName === 'Dyke' ? 0 : 1),
		(speaker => speaker.firstName == 'Greg' && speaker.lastName === 'Djerejian' ? 0 : 1),
		(speaker => speaker.firstName == 'Elie' && speaker.lastName === 'Younes' ? 0 : 1),
		(speaker => speaker.firstName == 'Haitham' && speaker.lastName === 'Mattar' ? 0 : 1),
		(speaker => speaker.firstName == 'Guy' && speaker.lastName === 'Hutchinson' ? 0 : 1),
		(speaker => speaker.firstName == 'Dr. Fahad' && speaker.lastName === 'bin Mushayt' ? 0 : 1),
		(speaker => speaker.firstName == 'Thomas' && speaker.lastName === 'B. Meier' ? 0 : 1),
		(speaker => speaker.firstName == 'Duncan' && speaker.lastName === "O’Rourke" ? 0 : 1),
		(speaker => speaker.firstName == 'Dr. Marinos' && speaker.lastName === 'Giannopoulos' ? 0 : 1),
	] )
	
	
	
	// console.log('speakers:', speakers)
	// console.log('speakers found:', speakers.length)
	// console.log('ordered:', orderedSpeakers)
	// console.log('customOrderedSpeakers:', customOrderedSpeakers)



	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header compact />

			<section className="block">
				<div className="container">

					{/* swapcard speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2024 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							customOrderedSpeakers.map( speaker => {

								let BRFspeaker = false

								speaker.speakerOnPlannings?.forEach( planning => {
									if ( planning.fields.some( field => field.id == "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ) ) BRFspeaker = true
								})
								// console.log(BRFspeaker)

								return (
									<div key={speaker.id}>

											<span className={CSS.avatar}>
												{
													speaker.photoUrl ? 
													<Image 
														src={speaker.photoUrl} 
														width={370} 
														height={370} 
														alt=""
													/>
													: 
													<Image 
														src='/assets/ui/avatar-fallback.png' 
														width={370} 
														height={370} 
														alt=""
													/>
												}
											</span>

										<div>
											<p className='mt-xs'>
												<span className='fw-600'>{speaker.firstName} {speaker.lastName}</span> 
												<br/>{speaker.jobTitle} 
												<br/>{speaker.organization}

												{
													// filter out specific speakers then show BRF tag
													BRFspeaker && speaker.id !== "RXZlbnRQZW9wbGVfMzIxMTkyODQ=" && speaker.id !== "RXZlbnRQZW9wbGVfMzE4NDk5Mzg=" ? 
														<p className="fs-sm fw-600 c-accent mt-xxs">Speaking at the Branded Residences&nbsp;Forum</p>
													: null 
												}
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
		</>
	)
}

Speakers.theme = 'world-2024'



export default Speakers


