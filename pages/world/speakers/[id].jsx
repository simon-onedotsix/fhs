import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'
import { Sidebar } from "../../../fuselage/layout/sidebar/sidebar"
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { OffsiteLink } from "../../../fuselage/components/offsite-link/offsite-link"
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import { sortSessions, toHoursAndMinutes } from "../../../lib/agenda-utils"
import { formatInTimeZone } from 'date-fns-tz'

import CSS from '../../../css/app/partners.module.css'


function Speaker({ speaker, sessions }) {

	// console.log('bizzabo speaker data:', speaker)
	// console.log('bizzabo sessions data:', sessions)

	const handleLinkedIn = () => {
		if  ( speaker.linkedIn ) {
			return (
				<>
					<ButtonSocial 
						icon='linkedin' 
						url={speaker.linkedIn} 
						alt='linkedin'
						target='_blank'
						rel='noreferrer'
					/>&ensp;
				</>
			)
		}
	}
	const handleTwitter = () => {
		if ( speaker.twitterHandle ) {
			return (
				<ButtonSocial 
					icon='twitter' 
					url={`https://www.twitter.com/${speaker.twitterHandle}`} 
					alt='twitter'
					target='_blank'
					rel='noreferrer'
				/>
			)
		}
	}
	const handleCompany = () => {
		if( speaker.web ) {
			return (
				<OffsiteLink href={speaker.web} direction='right' target='_blank'>
					{speaker.company}
				</OffsiteLink>
			)
		}
		return speaker.company
		
	}


	const handleRelatedSessions = () => {

		// speaker id: 3098821
		// session id: 1198611

		let relatedSessions = []

		sessions.map( session => {
			if ( session.speakers && session.speakers.find( item => item.speakerId === speaker.id ) ){
				relatedSessions.push(session)
			}
		})
		
		if ( relatedSessions.length ) {
			let sessions = sortSessions(relatedSessions)
			return (
				<div className="mt-sm bt-1 bc-secondary pt-sm">
					<p className="fs-5 fw-400 mb-xs">See {speaker.firstname} {speaker.lastname} speak in the following sessions:</p>
					{
						sessions.map( (day, index) => (
							<div key={index} className='mb-xs'>
								{ renderDivider( day[0].startDate ) }
								{ renderSessions( day ) }
							</div>
						))
					}
				</div>
			)
		}
		
		// helpers
		
		function renderDivider ( day ) {
			return (
				<p className='fs-6 fw-400 c-secondary'>
					{formatInTimeZone(new Date( day ), 'Asia/Dubai', 'EEEE dd MMMM')}
				</p>
			)
		}
		
		function renderSessions ( sessions ) {
			return (
				sessions.map( session => {
					return (
						<div key={session.id} className="mt-xs">
							<p>
								{ session.startMinute && toHoursAndMinutes(session.startMinute) }
								{ session.endMinute && ` - ${toHoursAndMinutes(session.endMinute)}` }
							</p>
							<Link href={`/ae/agenda#session-${session.id}`}><a className='fw-600'>{ session.title }</a></Link>
						</div>
					)
				})
			)
		}
	}
	

	return (

		<>
			<Head><link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" /></Head>

			<Header compact />

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
							{ handleLinkedIn() }
							{ handleTwitter() }
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

							{/* { handleRelatedSessions() } */}
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE,
					"cursor": {
						"first": 300
					},
					"filters": {
						"shouldBeInGroups": "RXZlbnRHcm91cF80MDIzNTQ="
					}
				}
			})
		}
	)

	const speakersData = await result.json()

	console.log(speakersData.data.eventPerson.nodes)


	return {
        paths: speakersData.data.eventPerson.nodes.map( speaker => ({ params: { id: speaker.id } })),
        fallback: false
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
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AE,
					"filters": {
						"eventPeopleIds": [ params.id ],
						"shouldBeInGroups": "RXZlbnRHcm91cF80MDIzNTQ="
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


