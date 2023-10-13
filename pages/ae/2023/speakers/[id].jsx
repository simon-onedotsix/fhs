import { ThemeBg } from "../../../../fuselage/theme/2023/ae/theme-bg"

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import { Header, HeaderShim } from '../../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from "../../../../fuselage/global-ae/footer/footer"
import { Sidebar } from "../../../../fuselage/layout/sidebar/sidebar"
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'
import { OffsiteLink } from "../../../../fuselage/components/offsite-link/offsite-link"
import { ButtonSocial } from  '../../../../fuselage/components/button-social/button-social'

import { sortSessions, toHoursAndMinutes } from "../../../../lib/agenda-utils"
import { formatInTimeZone } from 'date-fns-tz'
import { Container } from "../../../../fuselage/theme/2023/ae/layout/container/container"

import CSS from '../../../../css/app/speakers.module.css'

// import legacy data
import { bzSpeakers } from "../../../../data/legacy/ae/2023/bz-speakers"
import { bzAgendaSessions } from "../../../../data/legacy/ae/2023/bz-agenda-sessions"

console.log('bzSpeakers:', bzSpeakers)

function Speaker() {

	const router = useRouter()
	
	let speaker = bzSpeakers.content.find( speaker => speaker.id === parseInt(router.query.id))



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

		bzAgendaSessions.map( session => {
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
							<Link href={`/ae/2023/agenda#session-${session.id}`}><a className='fw-600'>{ session.title }</a></Link>
						</div>
					)
				})
			)
		}
	}
	

	if (speaker) return (

		<>
			<ThemeBg />

			<Header 
				compact 
				shim 
				theme={{ 
					primary: 'var(--primary)', 
					secondary: 'var(--secondary)', 
					text: 'var(--primary)',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: '#ffffffee',
					overlayBg: 'var(--primary)',
				}} 
				path={`/speakers`}
			/>



			<section className="block flush">
				<Container flushRight maxWidth={`85%`} decal={`bg-white-90 p-md`}>
					<Sidebar size='medium'>

						<aside className="formatted">
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `var(--dark)`, stroke: `var(--accent)` }} 
									href="/ae/2023/speakers"
								>
									View All 2023 Speakers
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
				</Container>
			</section>


			
			<Footer theme={{ footerBg: 'bg-white-90' }} />
		
		</>
	)

	return <p>[error!]</p>
}

Speaker.theme = 'ae-2022'




export default Speaker


