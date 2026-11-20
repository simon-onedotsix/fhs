import { useState } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller' 
import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_AFRICA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { PageHeader } from '../../../fuselage-africa/blocks/page-header/page-header'
import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../lib/seomatic'

import { getFieldValueByID } from "../../../lib/swapcard/get-custom-field-by-id"
import { getAllSpecialFields } from '../../../lib/swapcard/get-all-special-fields'

import { orderByLastName, customOrderById } from '../../../lib/swapcard/speaker-utilities'

import CSS from '../../../css/app/speakers.module.css'



const PRIORITY_SPEAKER_IDS = [
	'RXZlbnRQZW9wbGVfNDkzODk4NzM=',
	'RXZlbnRQZW9wbGVfNDkzODk2NzE=',
	'RXZlbnRQZW9wbGVfNDkzODkyODc=',
	'RXZlbnRQZW9wbGVfNDk1MDIzOTY=',
	'RXZlbnRQZW9wbGVfNDkzOTAzOTQ='
]


function Speakers({ speakers }) {



	// console.log('contentBlocks:', contentBlocks)
	// console.log('speakers found:', speakers.length)
	// console.log('speaker data:', speakers)



	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />
			
			<PageHeader>
				<div className="formatted">
					<h1>2027 Speakers</h1>
					<p>Our speakers are chosen for their industry knowledge and insight. If you would like to be considered as a speaker for FHS Africa 2027 please contact <a href="mailto:mala.patel@thebench.com" target="_blank" rel="noreferrer noopener">mala.patel@thebench.com</a></p>
				</div>
			</PageHeader>

			<section className="block">
				<div className="container">

					{/* swapcard speakers */}					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							customOrderById( orderByLastName(speakers), PRIORITY_SPEAKER_IDS).map( speaker => {

								return (
									<div key={speaker.id}>
										<Link href={`/africa/speakers/${speaker.id}`}>
											<a className={CSS.avatar}>
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
												{/* <p><small style={{ fontSize: 10}}>{speaker.id}</small></p> */}
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

Speakers.theme = 'africa'



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
						"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2027,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF82NzYyNzk="
						}
					}
			}
			)
		}
	)

	// console.log(swapcardData)
	
	const speakerData =  await swapcardData.json()


	return {
		props: { 
			speakers: speakerData.data.eventPerson.nodes
		}
	}
}

export default Speakers


