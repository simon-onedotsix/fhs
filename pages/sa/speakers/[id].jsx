import Image from "next/image"
import Link from "next/link"

import _ from 'lodash'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'

import { HeaderShim } from '../../../fuselage/global-sa/header/header'

import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

import CSS from '../../../css/app/speakers.module.css'

function Speaker({ speaker, sessions }) {

	// console.log('speaker data:', speaker)

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
	const handleRelatedSessions = ( speakerData) => {

		if ( !speakerData.withEvent.speakerOnPlannings.length ) return

		return (
			<div className="mt-sm bt-1 bc-accent pt-sm">
				<p className="fs-5 fw-400 c-accent mb-xs">See {speaker.firstName} {speaker.lastName} speak in the following sessions:</p>
				{
					speakerData.withEvent.speakerOnPlannings.length &&
					_.orderBy(speakerData.withEvent.speakerOnPlannings, 'beginsAt').map( (day, index) => (
						<div key={index} className='mb-xs'>
							<p className="c-accent">
								{format(new Date( day.beginsAt ), 'EEEE dd MMMM: HH:mm')} - {format(new Date( day.endsAt ), 'HH:mm')}
							</p>
							{/* <p>{day.id} ---> {day.id.slice(0, -2)}</p> */}
							<Link href={`/sa/agenda?session=${day.id.slice(0, -2)}`}><span className="fs-5 fw-600 c-white uLink">{ day.title }</span></Link>
						</div>
					))
				}
			</div>
		)

	}
	

	return (

		<>
			<Header compact />

			<ThemeBg />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600">
                                <ArrowLink 
                                    theme={{ color: `white`, stroke: `var(--accent)` }} 
                                    href="/sa/speakers"
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
							<HeaderShim/>
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

					</StickySidebar>

				</div>
			</section>

			<Footer />
			<LenisScroller />
		</>
	)
}


Speaker.theme = 'sa-2014'



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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA,
					"cursor": {
						"first": 300
					},
					"filters": {
						"shouldBeInGroups": "RXZlbnRHcm91cF8zOTI4MDg="
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA,
					"filters": {
						"eventPeopleIds": [ params.id ],
						"shouldBeInGroups": "RXZlbnRHcm91cF8zOTI4MDg="
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


