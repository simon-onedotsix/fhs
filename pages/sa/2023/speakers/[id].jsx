import Layout from '../../../../fuselage/templates/sa/layout'

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import { Header, HeaderShim } from '../../../../fuselage/theme/2023/sa/global/header/header'
import { Footer } from '../../../../fuselage/global-sa/footer/footer'
import { StickySidebar } from '../../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'
import { OffsiteLink } from "../../../../fuselage/components/offsite-link/offsite-link"
import { ButtonSocial } from  '../../../../fuselage/components/button-social/button-social'

import { sortSessions, toHoursAndMinutes } from "../../../../lib/agenda-utils"
import { formatInTimeZone } from 'date-fns-tz'


// import legacy data
import { bzSpeakers } from "../../../../data/legacy/sa/2023/bz-speakers"
import { bzAgendaSessions } from "../../../../data/legacy/sa/2023/bz-agenda-sessions"

import CSS from '../../../../css/app/speakers.module.css'

function Speaker() {

	const router = useRouter()
	
	let speaker = bzSpeakers.content.find( speaker => speaker.id === parseInt(router.query.id))

	console.log('bizzabo speaker data:', speaker)
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
				<div className="mt-sm bt-1 bc-accent pt-sm">
					<p className="fs-5 fw-400 mb-xs">See {speaker.firstname} {speaker.lastname} speak in the following 2023 sessions:</p>
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
				<p className='fs-6 fw-400 c-accent'>
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
							<Link href={`/sa/2023/agenda#session-${session.id}`}><a className='fw-600 c-white'>{ session.title }</a></Link>
						</div>
					)
				})
			)
		}
	}
	

	return (

		<div className="bg-theme">
			<Header 
				compact 
				path={'/partners'}
				theme={{ 
					primary: 'white', 
					secondary: 'var(--secondary)', 
					text: 'white',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: 'linear-gradient(90deg, #7A4AFF 0%, var(--secondary) 73%)',
					overlayBg: 'var(--primary)',
				}}
			/>

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600">
                                <ArrowLink 
                                    theme={{ color: `white`, stroke: `var(--accent-sa)` }} 
                                    href="/sa/2023/speakers"
                                >
                                    View All 2023 Speakers
                                </ArrowLink>
                            </p>
							<p className="mt-sm">
								{
									speaker.photoSet ? 
									<Image 
										src={speaker.photoSet.large} 
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
							</p>
							{ handleLinkedIn() }
							{ handleTwitter() }
						</aside>
						
						<main className="maxw-60">
							<HeaderShim/>
							<p className='fs-4 fw-600 lh-1 c-accent maxw-40'>Profile</p>
							<p className="fs-3 fw-600 caps mt-sm">{speaker.firstname} {speaker.lastname}</p>
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

					</StickySidebar>

				</div>
			</section>

			<Footer />
		</div>
	)
}


Speaker.getLayout = function getLayout( page ) {
	return (
		<Layout>
			{ page }
		</Layout>
	)
}




export default Speaker


