import { gql } from "@apollo/client"
import craftApolloClient from "../../../api/apollo"

import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from "../../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../../lib/seomatic'

import CSS from '../../../../css/app/speakers-sa-2024.module.css'





// hard-coded legacy data

import { speakers } from "../../../../data/legacy/sa/2024/sc-speakers"







function Speakers() {

	// console.log('speakers:', speakers)

	// sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
	// console.log('ordered:', orderedSpeakers)

	// customise order (VIP speakers to top of list)
	let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.lastName === 'Bin Saud Bin Khalid Al Saud' ? 0 : 1),
		(speaker => speaker.lastName === 'Abu Haimed' ? 0 : 1),
		(speaker => speaker.lastName === 'Abdulhadi' ? 0 : 1),
	] )
	// console.log('customOrderedSpeakers:', customOrderedSpeakers)

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact shim />

			<ThemeBg />

			<section className="block bg-theme">
				<div className="container">

					<p className='fs-1 fw-600 lh-1 maxw-40'>2024 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							customOrderedSpeakers.map( speaker => {
								if ( speaker.type ) return (
									<div key={speaker.id}>
										<Link href={`/sa/2024/speakers/${speaker.id}`}>
											<a className={CSS.avatar}>
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
											</a>
										</Link>
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

		</>
	)
}

Speakers.theme = 'sa-2024'





export default Speakers


