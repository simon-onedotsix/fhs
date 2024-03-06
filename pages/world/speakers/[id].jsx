import Image from "next/image"
import Link from "next/link"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'
import { Sidebar } from "../../../fuselage/layout/sidebar/sidebar"
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { OffsiteLink } from "../../../fuselage/components/offsite-link/offsite-link"
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import { sortSessions, toHoursAndMinutes } from "../../../lib/agenda-utils"
import { formatInTimeZone } from 'date-fns-tz'


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
			<Header compact />

			<section className="block">
				<div className="container">
					<Sidebar size='medium'>

						<aside className="formatted">
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `white`, stroke: `var(--secondary)` }} 
									href="/world/speakers"
								>
									View All Speakers
								</ArrowLink>
							</p>
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `white`, stroke: `var(--secondary)` }} 
									href="/world/advisory-board"
								>
									View Advisory Board
								</ArrowLink>
							</p>
							<p className="mt-sm maxw-15">
								{
									speaker.photoSet ? 
									<Image 
										src={speaker.photoSet.large} 
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
							</p>
							{ handleLinkedIn() }
							{ handleTwitter() }
						</aside>

						<main className="maxw-60">
							{/* <p className='fs-1 fw-600 lh-1 c-secondary maxw-40'>SPEAKER</p> */}
							<p className="fs-3 fw-600 caps">{speaker.firstname} {speaker.lastname}</p>
							<p>
								{speaker.title}
								<br/>
								<span className="fw-500">
									{ handleCompany() }
								</span>
							</p>
							<p className="mt-sm maxw-50" style={{ whiteSpace: `pre-line` }}>{speaker.bio}</p>

							{ handleRelatedSessions() }
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

	const res = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID_AE}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const allSpeakers = await res.json()
	// console.log('hello:',allSpeakers)

	return {
		// paths: allSpeakers.content.map( entry => ({ params: { id: String(entry.id) } })),
		paths: [],
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {

	// console.log('params',params)
	
	const res = await fetch(`https://api.bizzabo.com/api/speakers/${params.id}?eventId=${process.env.BIZZABO_EVENT_ID_AE}`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const speakerData = await res.json()

	const sessionsRes = await fetch(`https://api.bizzabo.com/api/agenda/sessions?eventId=${process.env.BIZZABO_EVENT_ID_AE}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
    const sessionsData = await sessionsRes.json()
    const sessions = sessionsData.content || null

	return {
		props: { 
			speaker: speakerData, 
			sessions 
		}
	}
}

export default Speaker


