import { useState } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller' 
import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'
import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../lib/seomatic'

import { getFieldValueByID } from "../../../lib/swapcard/get-custom-field-by-id"
import { getAllSpecialFields } from '../../../lib/swapcard/get-all-special-fields'

import CSS from '../../../css/app/speakers.module.css'




function Speakers({ seomatic, speakers }) {

	const [ filter, setFilter ] = useState( null )

	

	// sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ], ['asc'])
	

	// customise order (VIP speakers to top of list)
	let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.firstName == 'HH Sheikh' && speaker.lastName === 'Ahmed bin Saeed Al Maktoum' ? 0 : 1),
		(speaker => speaker.firstName == 'His Excellency' && speaker.lastName === 'Abdulla bin Touq Al Marri' || speaker.id == "RXZlbnRQZW9wbGVfNDEwMzg5NzY=" ? 0 : 1),
		(speaker => speaker.firstName == 'Naser' && speaker.lastName === 'Mohamed Ali Naser Alnuwais' || speaker.id == "RXZlbnRQZW9wbGVfNDA3MTM1NzY=" ? 0 : 1),
		(speaker => speaker.firstName == 'Abdullah' && speaker.lastName === 'Ahmed Al Moosa' || speaker.id == "RXZlbnRQZW9wbGVfNDEyMzM5MDM=" ? 0 : 1),
		(speaker => speaker.firstName == 'Her Excellency Shaikha' && speaker.lastName === 'Nasser Al Nowais' || speaker.id == "RXZlbnRQZW9wbGVfNDA2MDQ1NDk=" ? 0 : 1),
		
		(speaker => speaker.firstName == 'Alan' && speaker.lastName === 'Faena' ? 0 : 1),
		(speaker => speaker.firstName == 'H.E. Ahmed' && speaker.lastName === 'Obaid Al Qaseer' || speaker.id == "RXZlbnRQZW9wbGVfNDIwNzM2NzA=" ? 0 : 1),
		(speaker => speaker.firstName == 'Eleonora' && speaker.lastName === 'Srugo' ? 0 : 1),
		(speaker => speaker.firstName == 'Nick' && speaker.lastName === 'Candy' ? 0 : 1),
		(speaker => speaker.firstName == 'Pansy' && speaker.lastName === 'Ho' || speaker.id == "RXZlbnRQZW9wbGVfNDI1NTAwNjI=" ? 0 : 1),
		
		(speaker => speaker.firstName == 'Marc' && speaker.lastName === 'Dardenne' ? 0 : 1),
		(speaker => speaker.firstName == 'Oliver' && speaker.lastName === 'Hogg' ? 0 : 1),
		(speaker => speaker.firstName == 'Christoph' && speaker.lastName === 'Hoffmann' ? 0 : 1),
		(speaker => speaker.firstName == 'Marc' && speaker.lastName === 'Socker' ? 0 : 1),
		(speaker => speaker.firstName == 'Abdulla Rashed' && speaker.lastName === 'Al Abdouli' ? 0 : 1),
		
		(speaker => speaker.firstName == 'Thomas' && speaker.lastName === 'B. Meier' ? 0 : 1),
		(speaker => speaker.firstName == 'Neil' && speaker.lastName === 'Benjelloun' ? 0 : 1),
		(speaker => speaker.firstName == 'Stephen' && speaker.lastName === 'Sackur' ? 0 : 1),
		(speaker => speaker.firstName == 'Markus' && speaker.lastName === 'Venzin' ? 0 : 1),
		(speaker => speaker.firstName == 'Saurabh' && speaker.lastName === 'Bakshi' ? 0 : 1),
		
		(speaker => speaker.firstName == 'Philip' && speaker.lastName === 'Martin Barnes' ? 0 : 1),
		(speaker => speaker.firstName == 'Faizal' && speaker.lastName === 'Kottikollon' ? 0 : 1),
		(speaker => speaker.firstName == 'Hans' && speaker.lastName === 'Meyer' ? 0 : 1),
		(speaker => speaker.firstName == 'Gregory' && speaker.lastName === 'Lanter' ? 0 : 1),
		(speaker => speaker.firstName == 'Dimitris' && speaker.lastName === 'Manikis' ? 0 : 1),
		(speaker => speaker.firstName == 'Haitham' && speaker.lastName === 'Mattar' ? 0 : 1),
	] )
	
	
	
	// console.log('speakers:', speakers)
	// console.log('speakers found:', speakers.length)
	// console.log('ordered:', orderedSpeakers)
	// console.log('customOrderedSpeakers:', customOrderedSpeakers)


	const moveTaggedSpeakersToEnd = ( speakerArray ) => {

		if ( !speakerArray ) return

		const targettedSpeakers = []

		speakerArray.map( speaker => {
			speaker.withEvent.fields.map(field => {
				// target the special field
				if ( field.definition?.id === "RmllbGREZWZpbml0aW9uXzgzNzE0Mw==" ) {
					// target young leader && tech startup && new brands (allow for typo duplicates in swapcard)
					if ( field.id === "RmllbGRWYWx1ZV8yODc1OTI1MA==" || field.id === "RmllbGRWYWx1ZV8yODcxNjY5Ng==" || field.id === "RmllbGRWYWx1ZV8yODc5OTM4Nw==" || field.id === "RmllbGRWYWx1ZV8yODc5OTM3Mw==" ) {
						
						// cut from speakerArray and push to targettedSpeakers
						const index = speakerArray.indexOf(speaker)
						if (index > -1) {
							speakerArray.splice(index, 1)
							targettedSpeakers.push({ ...speaker, tag: field.value })
						}
					}
				}
			})
		})
		// console.log('speakers to move to end:', targettedSpeakers.length)
		// console.log('remaining speakers:', speakerArray.length)
		// console.log('speakers:', _.orderBy(targettedSpeakers, (i) => i.tag))

		const reorderedSpeakers = _.orderBy(targettedSpeakers, (i) => i.tag)
		
		return [...speakerArray, ...reorderedSpeakers]

	}

	// moveTaggedSpeakersToEnd( customOrderedSpeakers )

	const shuffledSpeakers = moveTaggedSpeakersToEnd( customOrderedSpeakers )
	
	// console.log('shuffled:', shuffledSpeakers.length)

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
            </Head>

            <Header compact />

			<section className="block">
				<div className="container">

					{/* swapcard speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2025 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							shuffledSpeakers.map( speaker => {

								return (
									<div key={speaker.id}>
										<Link href={`/world/speakers/${speaker.id}`}>
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
											<p className='mt-xs' >
									
												{/* swapcard special field */}
												{
													getAllSpecialFields(speaker) &&
													getAllSpecialFields(speaker).map((field, index) => (
														<p key={index} className="fw-600 mb-xxs" style={{ color: field.color }}>
															{field.value}
														</p>
													))
												}
												
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

Speakers.theme = 'world-2024'



export async function getStaticProps() {

	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson(
						$eventId: ID!
						$cursor: CursorPaginationInput
						$filters: [EventPersonFilter!]
					){
						eventPerson(eventId: $eventId, cursor: $cursor, filters: $filters) {
							nodes {
								id
								type
								firstName
								lastName
								jobTitle
								organization
								photoUrl

								speakerOnPlannings {
									id
									title
									categories
									fields {
									... on MultipleSelectField {
										id
										definition {
											isDefault
											name
										}
										value
										translations {
											value
										}
									}
									}
								}

								withEvent(eventId: $eventId) {
									fields {
										... on SelectField {
											translations {
												value
												language
											}
											definition {
												id
												translations {
													name
													language
												}
											}
										}
										... on TextField {
											definition {
												name
												translations {
													name
												}
												id
											}
											locale
											value
											id
										}
									}
								}
								}
							}
						}
					`,
					variables: {
						"eventId": process.env.SWAPCARD_EVENT_ID_AE_2025,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF81ODU5ODM="
						}
					}
			}
			)
		}
	)

	// console.log(swapcardData)
	
	const speakerData =  await swapcardData.json()


	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: "11552") {
					title
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })

	return {
		props: { 
			speakers: speakerData.data.eventPerson.nodes,
			seomatic: cmsData.data.entry.seomatic
		}
	}
}

export default Speakers


