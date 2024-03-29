import Image from "next/image"
import Link from "next/link"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { HeaderShim } from '../../../fuselage/global-sa/header/header'

import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import { sortSessions, toHoursAndMinutes } from "../../../lib/agenda-utils"
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
	const handleRelatedSessions = () => {
		let relatedSessions = []

		sessions.map( session => {
			if ( session.speakers && session.speakers.find( item => item.speakerId === speaker.id ) ){
				relatedSessions.push(session)
			}
		})
		
		if ( relatedSessions.length ) {
			let sessions = sortSessions(relatedSessions)
			console.log(sessions)
			return (
				<div className="mt-sm bt-1 bc-accent pt-sm">
					<p className="fs-5 fw-400 c-accent mb-xs">See {speaker.firstname} {speaker.lastname} speak in the following sessions:</p>
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
				<p className='fs-6 fw-400 c-white'>
					{formatInTimeZone(new Date( day ), 'Asia/Dubai', 'EEEE dd MMMM')}
				</p>
			)
		}
		
		function renderSessions ( sessions ) {
			return (
				sessions.map( session => {
					return (
						<div key={session.id} className="mt-xs">
							<p className='c-accent'>
								{ session.startMinute && toHoursAndMinutes(session.startMinute) }
								{ session.endMinute && ` - ${toHoursAndMinutes(session.endMinute)}` }
							</p>
							<Link href={`/sa/agenda#session-${session.id}`}><a className='fw-600 c-white'>{ session.title }</a></Link>
						</div>
					)
				})
			)
		}
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
	return {
		paths: [],
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {

	console.log('params',params)
	
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
								createdAt
								firstName
								id
								lastName
								jobTitle
								organization
								userId
								biography
								photoUrl
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


