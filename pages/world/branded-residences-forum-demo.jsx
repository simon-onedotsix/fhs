import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'
import parse from 'html-react-parser'

import { motion, useScroll, useTransform } from "framer-motion"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitVideo } from "../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"

import { Pop, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Callout } from '../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'

import { Quote } from '../../fuselage/theme/2024/world/components/quote/quote'
import { StopwatchIcon } from "../../fuselage/components/icons/icons"

import CSS from '../../css/app/agenda-world-2024.module.css'






export default function Page ({ sessions }) {

    const lenis = useLenis()


    console.log('sessions:', sessions)


    const getSessionsByTopic = ( sessionData, topicID ) => {

        if ( !sessionData || !topicID ) return
		
        const filteredSessions = []
        
        sessionData.forEach( session => {
            if ( session.fields.some( field => field.id == topicID )) filteredSessions.push(session)
        })
       
        // console.log('BRF sessions found:', filteredSessions.length ? filteredSessions.length : sessionData.length )
        return filteredSessions.length ? filteredSessions : sessionData
    }

    const convertSeconds = (seconds) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
	
		const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''
		const minuteString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''
	
		if ( hours > 0 ) {
			return `${hourString} ${ minutes > 0 ? minuteString : ''}`

		} else if ( !hours && minutes > 0 ) {
			return `${minuteString}`

		}
	
		return
	}

    // console.dir( getSessionsByTopic( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ))


    return (
        <>
            <Header overlaid inverse />

            <HeroUnitVideo video={'/assets/video/fhs-2024-world-beanded-residences-opt.mp4'} poster={'/assets/video/fhs-2024-world-beanded-residences-opt.jpg'}>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Branded Residences Forum
                </motion.p>

                <Pop>
                    <div className='mt-sm mb-md'>
                        <p className='c-secondary center pb-sm caps ls-2'>Brought to you by</p>
                        <div style={{ width: 400, maxWidth: '40vw', margin: '0 auto' }}>
                            <img src="/assets/img/brf/accor-one-living.svg" alt="logo" />
                        </div>
                    </div>
                </Pop>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 c-secondary center mt-xs maxw-45 mx-auto caps ls-2`} 
                >
                    2 October 2024<br/>
                    Madinat Jumeirah, Dubai
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 c-white center mt-sm maxw-45 mx-auto`} 
                >
                    Held adjacently with <strong>FHS World</strong>, this exclusive one-day forum will explore the thriving sector of Branded Residences.
                </motion.p>

                <Fade>
                    <div className="mt-sm center">
                        <Pop inline>
                            {/* <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Your Pass</Button> */}
                            <Button 
                                href={`/world/purchase-pass`} 
                                theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} 
                                decal={`fs-5 fw-600`}
                            >Purchase Pass</Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>



            <section className="block pt-md">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/brf/brf-2024-image-06.jpg', width:2000, height:1333 }}>
                        <Fade>
                            <p className='fs-2 fw-600 c-secondary'>Key Topics</p>
                            <p className="fs-5">The forum will feature workshops and conference sessions around key topics including:</p> 
                            <ul className='mt-xs'>
                                <li>Dynamic Co-working Concepts</li>
                                <li>How Shared Living is Evolving</li>
                                <li>Serviced Apartments / Extended Stay  - Demand Continues to Exceed Supply</li>
                                <li>How Private Clubs are Becoming The Fastest Growing Workplace </li>
                                <li>How Investors Can Leverage Unprecedented ROIs</li>
                                <li>Operator&apos;s Perspective - Diversifying Revenue Streams with Security</li>
                                <li>Demystifying Legal Structures and Concepts in Branded Residences</li>
                                <li>Lifestyle Branded Residences - Design, Innovation & Wellness</li>
                                <li>Strategies to Align Interests and Navigate Complexities in Rental Programs</li>
                                <li>Future Opportunities and Potential in Branded Residences</li>
                            </ul>
                        </Fade>
                    </Callout>
                </div>
            </section>

            <section className="block">
                <div className="container formatted maxw-90">
                    <Callout image={{ url:'/assets/img/brf/brf-2024-image-04.jpg', width:2000, height:1331 }}>
                        <Fade>
                            <p className='fs-2 fw-600 lh-2 c-secondary'>Unprecedented Growth Trends</p>
                            <p className="fs-4">The branded residences sector is experiencing a period of unprecedented growth, globally.</p> 
                            <p className="fs-4">The sector has grown more than 160% over the last decade with approximately 1,300 branded residential projects globally as of&nbsp;2023.</p>
                        </Fade>
                    </Callout>
                </div>
            </section>

            <section className="block">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/brf/brf-2024-image-05.jpg', width:2000, height:1428 }}>
                        <Fade>
                            <p className='fs-2 fw-600 lh-2 c-secondary'>Accor One Living and FHS World Partnership</p>
                            <p>To host this forum, FHS World has partnered with Accor One Living, a dedicated mixed-use platform from Accor that has been at the forefront of driving the branded residences sector, showcasing an impressive portfolio that spans a diverse collection of brands throughout ultra-prime urban locations and the most sought-after resort destinations.</p> 
                            <p>Each residential community supported by Accor One Living is meticulously designed and serviced to meet the demanding standards of the Accor brand it represents. The Branded Residences Forum by Accor One Living is an opportunity to engage with industry leaders, learn more about the branded residential sector, and explore the Accor One Living platform, its participating brands and communities as well as its promising pipeline.</p>
                            <p className='mt-sm'>
                                <a className='button center' href={ 'https://accor-residences.com/' } target={ '_blank' } rel="noreferrer">
                                    Learn more about Accor&nbsp;One&nbsp;Living
                                </a>
                            </p>
                        </Fade>
                    </Callout>
                </div>
            </section>
            
            
            
            <section className="block bg-default">
                <div className="container maxw-70 center">
                    <p className='fs-1 fw-600 c-secondary'>Branded Residences Forum Agenda</p>
                </div>
            </section>

            <section className="block bg-default">
                <div className="container maxw-70 columns-1 gap-xs">
                    
                    {
                        sessions &&
                        getSessionsByTopic( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ).map( session => (
                            <div key={session.id} className={CSS.sessionsWrapper}>
                                <div className={CSS.session}>

                                    <div className={`${CSS.sessionHeader} fw-500 c-white bg-medium`}>
                                        {
                                            session.beginsAt && session.endsAt ?
                                                <div>
                                                    {format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
                                                    &ensp;<StopwatchIcon fill={'var(--accent)'}/> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }
                                                </div>
                                            : null
                                        }

                                        {/* {
                                            getSessionFields( session, 'Location').length ?
                                                <div className={CSS.sessionTagGrid}>
                                                    {session.fields.length ? <LocationIcon fill={'var(--accent)'}/> : null }
                                                    {getSessionLocation( session )}
                                                </div>
                                            : null
                                        } */}
                                    </div>

                                    <div className={`${CSS.sessionContent} | columns-1 gap-xs`}>

                                        {/* <small style={{ color: 'orange'}}>{session.id}</small> */}
                                        
                                        <p className={`fs-5 fw-600 lh-1 c-white caps`}>
                                            { session.titleTranslations[0].value }
                                        </p>
                                     
                                        {/* {
                                            getSessionFields( session, 'Topics').length ?
                                                <div className={CSS.sessionTagGrid}>
                                                    <TagIcon fill={`var(--accent)`} />
                                                    {getSessionFields( session, 'Topics')}
                                                </div>
                                            : null
                                        } */}

                                        {
                                            session.descriptionTranslations.length ?
                                                parse( session.descriptionTranslations[0].value )
                                            : null
                                        }
                                        
                                        {/* { sortSpeakers(session.speakers) } */}
                                    </div>

                                    </div>
                            </div>
                        ))
                    }

                </div>

                <div className="container maxw-70 formatted">
                    <p className='fs-4 fw-600 c-secondary'>Pass Enquiries:</p>
                    <p className='fs-6'>If you have any questions related to your access to the Branded Residences Forum 2024, please contact us on: <a href="mailto:usama.aslam@thebench.com">usama.aslam@thebench.com</a></p>
                </div>
            </section>



            <section className="block">
                <div className="container columns-2 gap-md">
                    <Quote 
                        quote={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        name={"Firstname Lastname"}
                        title={"Job Title"}
                        company={"Organisation"}
                    />
                    <Quote 
                        quote={"Duis aute irure dolor excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                        name={"Firstname Lastname"}
                        title={"Job Title"}
                        company={"Organisation"}
                    />
                </div>
            </section>

            


            <section id="form" className="block">
                <div className="container center">
                    <p className="fs-1 fw-600">Register Your Interest</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='b27737f1-fdbb-438d-a39a-27ff6c12d24c' />
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'world-2024'





// BRF topic id: RmllbGRWYWx1ZV8yNDIzOTQ1MA==

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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AE}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AE}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE,
					"page": 1
				}
			})
		}
	)

	const result = await eventQuery.json()
	

	// console.log('RESULT', result)
	// console.log('TEST plannings', result.data.event.planningsPlaces)
	// console.log('TEST sessions', result.data.plannings)
  

    if ( result.data ) return { 
        props: { 
            sessions: result.data.plannings,
			locations: result.data.event.planningsPlaces
        } 
    }

	return { props: {} }
}