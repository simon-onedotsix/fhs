import React from "react"

import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { format } from 'date-fns'

import { Header } from '../../../ui/site/header'
import { FHS_WORLD as header } from '../../../fixtures/nav'

import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'
import { Sidebar } from "../../../fuselage/layout/sidebar/sidebar"
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'


import { groupSessionsByDays } from "../../../lib/swapcard/agenda-utils"
import { getFieldValueByID } from "../../../lib/swapcard/get-custom-field-by-id"


import CSS from '../../../fuselage/theme/2024/world/css/speaker.module.css'


function Speaker({ speaker }) {
	// console.log('speaker data:', speaker)
	// console.log('speaker sessions:', speaker.withEvent.speakerOnPlannings)
	// console.log('session days:', groupSessionsByDays(speaker.withEvent.speakerOnPlannings))


	const handleRelatedSessions = ( speakerData ) => {

		if ( !speakerData.withEvent.speakerOnPlannings.length ) return
		
		return (
			<div className="mt-sm bt-1 bc-secondary pt-sm">
				<p className="fs-5 fw-400 mb-xs">See {speaker.firstName} {speaker.lastName} speak in the following sessions:</p>
				{
					groupSessionsByDays(speaker.withEvent.speakerOnPlannings).map( day => (
						<React.Fragment key={day.timeCode}>
							<p key={day.timeCode} className={CSS.dayDivider}>{day.day}</p>
							{ day.sessions?.map( session => {
								return (
									<div key={session.id} className={CSS.session}>
										<p className={CSS.timing}>
											{ session.beginsAt && format( new Date(session.beginsAt), "HH:mm" ) }
											{ session.endsAt && ` - ${format( new Date(session.endsAt), "HH:mm" )}` }
										</p>
										<Link href={`/world/agenda#${session.id.slice(0, -2)}`}>
											<a className={CSS.titleLink}>{ session.title }</a>
										</Link>
									</div>
								)
							})}
						</React.Fragment>
					))
				}
			</div>
		)

	}



	return (

		<>
				<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>


			<Header
				site={`/world`}
				handle={`World`}
				event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>

			<section className="block">
				<div className="container">
					<Sidebar size='medium'>

						<aside className="formatted">
						<p className="fw-600">
                                <ArrowLink 
                                    theme={{ color: `white`, stroke: `var(--accent)` }} 
                                    href="/world/speakers"
                                >
                                    View All Speakers
                                </ArrowLink>
                            </p>
							<p className={`${CSS.avatar} mt-sm`}>
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
									/>
								}
							</p>

							<p className="fw-600 c-accent maxw-15">
								{ getFieldValueByID( speaker, "RmllbGRWYWx1ZV8yODE3MjMyNA==" ) }
							</p>
						</aside>

						<main className="maxw-60">
							<p className='fs-4 fw-600 lh-1 c-accent maxw-40'>Profile</p>
							<p className="fs-3 fw-600 c-white caps mt-sm">{speaker.firstName} {speaker.lastName}</p>
							<p className='c-white'>
								{speaker.jobTitle}
								<br/>
								<span className="fw-500">
									{ speaker.organization }
								</span>
							</p>
							<p className="mt-sm maxw-50 c-white" style={{ whiteSpace: `pre-line` }}>{ speaker.biography }</p>

							{ handleRelatedSessions( speaker ) }
						</main>

					</Sidebar>
				</div>
			</section>


			
			<Footer />
			<LenisScroller />
		
		</>
	)
}

Speaker.theme = 'world-2024'






export async function getStaticPaths() {

	const result = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson($eventId: ID!, $cursor: CursorPaginationInput, $filters: [EventPersonFilter!] ) {
						eventPerson(eventId: $eventId, cursor: $cursor, filters:$filters ) {
							nodes {
								id
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
			})
		}
	)

	const speakersData = await result.json()

	// console.log(speakersData.data.eventPerson.nodes)


	return {
		// paths: speakersData.data.eventPerson.nodes.map( speaker => ({ params: { id: speaker.id } })),
        // fallback: false
		paths: [],
		fallback: 'blocking',
    }
}

export async function getStaticProps({ params }) {

	// console.log('params',params)
	
	const result = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson($eventId: ID!, $filters: [EventPersonFilter!]) {
						eventPerson(eventId: $eventId, filters: $filters) {
							nodes {
								id
								firstName
								lastName
								jobTitle
								organization
								biography
								photoUrl
								withEvent(eventId: $eventId) {
									speakerOnPlannings {
									  id
									  title
									  beginsAt
									  endsAt
									}
									fields {
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
					"filters": {
						"eventPeopleIds": [ params.id ],
						"shouldBeInGroups": "RXZlbnRHcm91cF81ODU5ODM="
					}
				}
			})
		}
	)

	const speakerData = await result.json()

	return {
		props: { speaker: speakerData.data.eventPerson.nodes[0] }
	}
}

export default Speaker


