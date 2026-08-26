import { useState } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller' 
import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_WORLD as header } from '../../../fixtures/nav'

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
		(speaker => speaker.firstName == 'H․E. Abdulla' && speaker.lastName === 'bin Touq Al Marri' ? 0 : 1),
		(speaker => speaker.firstName == 'Marc' && speaker.lastName === 'Dardenne' ? 0 : 1),
		(speaker => speaker.firstName == 'Sonu' && speaker.lastName === 'Shivdasani' ? 0 : 1),
		(speaker => speaker.firstName == 'Philippe' && speaker.lastName === 'Zuber' ? 0 : 1),
		(speaker => speaker.firstName == 'Sameh' && speaker.lastName === 'Muhtadi' ? 0 : 1),

		(speaker => speaker.firstName == 'David' && speaker.lastName === 'Xiaoou Chen' ? 0 : 1),
		(speaker => speaker.firstName == 'Artur' && speaker.lastName === 'Gerber' ? 0 : 1),
		(speaker => speaker.firstName == 'Hamza' && speaker.lastName === 'Farooqui' ? 0 : 1),
		(speaker => speaker.firstName == 'Ina' && speaker.lastName === 'Plunien' ? 0 : 1),
		(speaker => speaker.firstName == 'Amit' && speaker.lastName === 'Arora' ? 0 : 1),

		(speaker => speaker.firstName == 'Samer' && speaker.lastName === 'AlKharashi' ? 0 : 1),
		(speaker => speaker.firstName == 'Georgette' && speaker.lastName === 'Davey' ? 0 : 1),
		(speaker => speaker.firstName == 'Dimitris' && speaker.lastName === 'Manikis' ? 0 : 1),
		(speaker => speaker.firstName == 'Barbara' && speaker.lastName === 'Muckermann' ? 0 : 1),
		(speaker => speaker.firstName == 'Maya' && speaker.lastName === 'Ziade' ? 0 : 1),
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

			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{handleSeomaticMeta(seomatic)}
            </Head>

			<EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

			<section className="block">
				<div className="container">

					{/* swapcard speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2026 SPEAKERS</p>
					
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
						"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF82NTQ4MTQ="
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


