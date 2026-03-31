import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'
import HTMLReactParser from 'html-react-parser'

import Head from 'next/head'
import Script from 'next/script'

import { HeaderBRF } from '../../../ui/site/header-brf'
import { BRF_FHS_WORLD as header } from '../../../fixtures/nav'

import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'

import { Button } from '../../../fuselage/theme/2025/brf/components/button/button'

import { Pop } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { StopwatchIcon } from "../../../fuselage/components/icons/icons"
import { AgendaSpeakerCard } from '../../../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import { convertSeconds } from '../../../lib/agenda-utils'

import { getAllTopics } from '../../../lib/swapcard/get-all-topics'
import { filterSessionsByTopic } from '../../../lib/swapcard/agenda-utils'


import CSS from '../../../fuselage/theme/2025/brf/css/agenda-brf.module.css'
import CSSlite from '../../../fuselage/theme/2025/brf/css/agenda-brf-aag.module.css'



export default function Page ({ sessions }) {

    const lenis = useLenis()


	// console.log(sessions)
    // console.log('topics:', getAllTopics(sessions))
	// console.log('sessions:', filterSessionsByTopic(sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA=="))


	
	const getBrfSessions = (sessions) => {
		const brfSessions = []
		filterSessionsByTopic(sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==").map(session => brfSessions.push(session))
		return brfSessions
	}

	const getBrfRelatedSessions = (sessions) => {
		const relatedSessions = []
		sessions.map(session => {
			if (
				session.id === "UGxhbm5pbmdfMjkwMTU4Mw==" ||
				session.id === "UGxhbm5pbmdfMjYyODkwMQ==" ||
				session.id === "UGxhbm5pbmdfMjYyODkxMQ==" ||
				session.id === "UGxhbm5pbmdfMjYyODkwOA=="
			){
				relatedSessions.push({...session, tag: "fhs"})
			}
		})
		return relatedSessions
	}

	const compiledAgenda = [...getBrfSessions(sessions), ...getBrfRelatedSessions(sessions)]
	// console.log('compiled:', _.orderBy(compiledAgenda, 'beginsAt'))



    const sortSpeakers = ( speakerData, tag ) => {

		if ( !speakerData ) return

		let moderators = []
        let speakers = []

		_.orderBy(speakerData, 'lastName').forEach( speaker => {
			speaker.withEvent.eventProfile.type === 'Moderator' ? moderators.push( speaker ) : speakers.push( speaker )
		})


		if ( moderators.length && speakers.length ) return (
			<>
				{
					moderators.length ?
						<div>
							<p className="c-secondary pb-xs" style={{ color: tag === "fhs" ? '#71CFEB' : 'c-secondary'}}>{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
							<div className={CSS.sessionSpeakerGrid}>
								{ moderators.map( moderator => <AgendaSpeakerCard key={moderator.id} color={'white'} speaker={moderator}/> ) }
							</div>
							{
								speakers.length ?
									<p style={{ color: tag === "fhs" ? '#71CFEB' : 'var(--accent)', padding: `10px 0 0 0`}}>In conversation with</p>
								: null
							}
						</div>
					: null
				}
				<div className={CSS.sessionSpeakerGrid}>
					{ speakers.map( speaker => <AgendaSpeakerCard key={speaker.id} color={'white'} speaker={speaker}/> ) }
				</div>
			</>
		)

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ speakerData.map( speaker => <AgendaSpeakerCard key={speaker.id} color={'white'} speaker={speaker}/> ) }
			</div>
		)
	}



    return (
		<>
			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

            <HeaderBRF
				site={`/world/brf`}
				parentSite={`/world`}
				handle={`At FHS World`}
				parentHandle={`FHS World`}
				event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>
            
            <section className="block bg-default">
                <div className="container maxw-70 center">
                    <p className='fs-1 fw-600 c-secondary'>2025 Branded Residences Forum Agenda</p>
                    <p className='fs-4 mt-sm'>Wednesday 29 October</p>
                </div>
            </section>

            <section className="block bg-default">
                <div className="container maxw-50 columns-1 gap-xs">
                    
                    {
                        sessions &&
                        _.orderBy(compiledAgenda, 'beginsAt').map( session => (

                            <Pop key={session.id}>
                                <div className={CSS.sessionsWrapper}>
                                    <div className={`${CSSlite.session} ${session.id === 'UGxhbm5pbmdfMjAyNzgxOA==' && `bg-primary-2 caps`} `}>

                                        <div className={`${CSSlite.sessionHeader} fw-300 c-white`}>
                                            {
                                                session.beginsAt && session.endsAt ?
                                                    <>
                                                        {format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
                                                        <p className='mt-xxs'>
                                                            <StopwatchIcon fill={session.tag === "fhs" ? '#71CFEB' : 'var(--accent)'}/>
															<span className='fs-sm fw-500 c-secondary' style={{ color: session.tag === "fhs" ? '#71CFEB' : 'c-secondary'}}> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }</span>
                                                        </p>                                                    
                                                    </>
                                                : null
                                            }
                                        </div>

                                        <div className={`${CSSlite.sessionContent} | columns-1 gap-xs`}>

											{/* <small style={{ color: 'orange'}}>{session.id}</small> */}
											
											{
												session.tag === "fhs" &&
												<p style={{ color: '#71CFEB', fontWeight: 600 }}>FHS session FREE for BRF pass holders</p>
											}
                                            
                                            <p className={`fs-4 fw-500 c-white`}>
                                                { session.titleTranslations[0].value }
                                            </p>

                                            {
                                                session.descriptionTranslations.length ?
                                                    HTMLReactParser( session.descriptionTranslations[0].value )
                                                : null
                                            }
                                            
                                            { sortSpeakers(session.speakers, session.tag) }
                                        </div>

                                        </div>
                                </div>
                            </Pop>
                        ))
                    }

                </div>

                <div className="container center">
                                    <p>
                                        <Pop>
                                            <Button href={`/world/agenda`}>View Full FHS Agenda</Button>
                                        </Pop>
                                    </p>
                                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'brf'





// BRF topic id: RmllbGRWYWx1ZV8yNDIzOTQ1MA==

// peir paolo righi id: "RXZlbnRQZW9wbGVfMzE4NDk5Mzg=",

export async function getStaticProps() {

	const eventQuery = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query EventById($eventId: ID!) {

						event(id: $eventId) {
							planningsPlaces {
								id
								name
								value
							}
						}

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2025}", page: 1, pageSize: 500) {
							id
							titleTranslations {
								value
								language
							}
							beginsAt
							endsAt
							descriptionTranslations {
								value
								language
							}
							format
							fields {
								... on SelectField {
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
							speakers {
								firstName
								id
								jobTitle
								lastName
								photoUrl
								organization
								biography
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2025}") {
									eventProfile {
										type
										withEvent(eventId: "RXZlbnRfMTczOTgzMg==") {
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
							categories
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2025,
					"page": 1
				}
			})
		}
	)
	const event = await eventQuery.json()
	
  

    if ( event.data ) return { 
        props: { 
            sessions: event.data.plannings,
			locations: event.data.event.planningsPlaces
        } 
    }

	return { props: {} }
}