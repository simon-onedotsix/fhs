import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import { Header } from '../../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from "../../../../fuselage/global-ae/footer/footer"
import { Sidebar } from "../../../../fuselage/layout/sidebar/sidebar"
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'
import { OffsiteLink } from "../../../../fuselage/components/offsite-link/offsite-link"
import { ButtonSocial } from  '../../../../fuselage/components/button-social/button-social'

import { sortSessions, toHoursAndMinutes } from "../../../../lib/agenda-utils"
import { formatInTimeZone } from 'date-fns-tz'

import CSS from '../../../../css/app/speakers.module.css'


// import legacy data
import { bzSpeakers } from "../../../../data/legacy/ae/2022/bz-speakers"
import { bzAgendaSessions } from "../../../../data/legacy/ae/2022/bz-agenda-sessions"



function Speaker() {

	const router = useRouter()

	let speaker = bzSpeakers.content.find( speaker => speaker.id === parseInt(router.query.id))

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
		let relatedSessions = []

		bzAgendaSessions.map( session => {
			if ( session.speakers && session.speakers.find( item => item.speakerId === speaker.id ) ){
				relatedSessions.push(session)
			}
		})
		
		if ( relatedSessions.length ) {
			let sessions = sortSessions(relatedSessions)
			console.log(sessions)
			return (
				<div className="mt-sm bt-1 bc-secondary pt-sm">
					<p className="fs-5 fw-400 mb-xs">See {speaker.firstname} {speaker.lastname} speak in the following 2022 sessions:</p>
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
							<Link href={`/ae/agenda#session-${session.id}`}><a className='fw-600 c-white'>{ session.title }</a></Link>
						</div>
					)
				})
			)
		}
	}
	

	if (speaker) return (

		<>

			<Header 
				compact 
				shim
				path={'/speakers'}
				theme={{ 
					primary: 'white', 
					secondary: 'var(--accent)', 
					text: 'white',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: 'bg-theme',
					overlayBg: 'var(--primary)',
				}} 
			/>



			<section className="block">
				<Sidebar size='medium'>

					<aside className="formatted">
						<p className="fw-600">
							<ArrowLink 
								theme={{ color: `var(--dark)`, stroke: `var(--accent)` }} 
								href="/ae/2022/speakers"
							>
								View All 2022 Speakers
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

						{/* { handleRelatedSessions() } */}
					</main>

				</Sidebar>
			</section>

			
			<Footer theme={{ footerBg: 'bg-theme' }} />
		
		</>
	)

	return <p>[error!]</p>
}

Speaker.theme = 'ae-2022'



export default Speaker


