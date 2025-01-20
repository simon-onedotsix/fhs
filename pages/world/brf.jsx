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
import { QuoteSlider } from '../../fuselage/theme/2024/world/components/quote-slider/quote-slider'
import { StopwatchIcon } from "../../fuselage/components/icons/icons"
import { SpeakerCarousel } from '../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'
import { AgendaSpeakerCard } from '../../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import CSS from '../../css/app/agenda-world-2024.module.css'
import CSSlite from '../../css/app/agenda-world-2024-aag.module.css'






export default function Page ({ sessions, speakers }) {

    const lenis = useLenis()


    

    const getSessionsByTopicID = ( sessionData, topicID ) => {

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

    // sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ], ['asc'])
	

    const sortSpeakers = ( speakerData ) => {

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
							<p className="c-secondary pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
							<div className={CSS.sessionSpeakerGrid}>
								{ moderators.map( moderator => <AgendaSpeakerCard key={moderator.id} color={'white'} speaker={moderator}/> ) }
							</div>
							{
								speakers.length ?
									<p style={{ color: `var(--secondary)`, padding: `10px 0 0 0`}}>In conversation with</p>
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


    const getSpeakersBySessionTopicID = ( sessionData, topicID ) => {
        const speakers = []
        getSessionsByTopicID( sessionData, topicID ).map( session => {
            if ( session.speakers?.length ) {
                session.speakers.forEach( speaker => speakers.push(speaker) )
            }
        })

        let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
        return _.uniqBy(orderedSpeakers, 'id')
    }


    const prioritiseSpeakers = ( speakerData, prioritySpeakersArray ) => {
        let customOrderedSpeakers = _.sortBy( speakerData, prioritySpeakersArray )
        // console.log('prioritisedSpeakers:', customOrderedSpeakers)
        return customOrderedSpeakers
    }


    // prioritise speakers
	let prioritySpeakersArray = [
		(speaker => speaker.firstName == 'Pier Paolo' && speaker.lastName === 'Righi' ? 0 : 1),
		(speaker => speaker.firstName == 'Charlie' && speaker.lastName === 'Walsh' ? 0 : 1),
		(speaker => speaker.firstName == 'Husni Al' && speaker.lastName === 'Bayari' ? 0 : 1),
		(speaker => speaker.firstName == 'George' && speaker.lastName === 'Azar' ? 0 : 1),
		(speaker => speaker.firstName == 'Jeff' && speaker.lastName === 'Tisdall' ? 0 : 1),
	]
    
    
    // console.log('sessions:', sessions)
    // console.log('speakers:', speakers)
    // console.log('ordered:', orderedSpeakers)
    
    // console.dir( getSessionsByTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ))
    // console.log('BRF speakers:', getSpeakersBySessionTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ) )
	// console.log('customOrderedSpeakers:', prioritiseSpeakers( getSpeakersBySessionTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ), prioritySpeakersArray ))


    return (
        <>
            <Header overlaid inverse />

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-world-beanded-residences-opt.mp4'} poster={'/assets/video/fhs-2024-world-beanded-residences-opt.jpg'}>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Branded Residences Forum
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-secondary center mt-sm maxw-45 mx-auto caps ls-2`} 
                >
                    29 October 2025<br/>
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
                            {/* <Button 
                                href={`/world/purchase-pass`} 
                                theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} 
                                decal={`fs-5 fw-600`}
                            >Purchase Pass</Button> */}
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>



            {/* <section className="block pt-md">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/brf/brf-2024-image-09.jpg', width:2000, height:1333 }}>
                        <Fade>
                            <p className='fs-2 fw-600 c-secondary'>Key Topics</p>
                            <p className="fs-5">The forum will feature workshops and conference sessions around key topics including:</p> 
                            <ul className='mt-xs'>
                                <li>How Investors Can Unlock Value in Mixed-Use Developments</li>
                                <li>Operator&apos;s Perspective - Diversifying Revenue Streams with Security</li>
                                <li>Demystifying Legal Structures and Concepts in Branded Residences</li>
                                <li>Lifestyle Branded Residences - Design, Innovation &amp; Wellness</li>
                                <li>Strategies to Align Interests and Navigate Complexities in Rental Programs</li>
                                <li>Future of branded living</li>
                            </ul>
                        </Fade>
                    </Callout>
                </div>
            </section> */}

            

            <section className="block bg-default">
                <div className="container formatted maxw-90">
                    <Callout 
                        image={{ url:'/assets/img/brf/brf-2024-image-08.jpg', width:2000, height:1333 }}
                        caption={"The Rixos Dubai Islands Residences"}
                    >
                        <Fade>
                            <p className='fs-2 fw-600 lh-2 c-secondary'>Unprecedented Growth Trends</p>
                            <p className="fs-4">The branded residences sector is experiencing a period of unprecedented growth, globally.</p> 
                            <p className="fs-4">The sector has grown more than 160% over the last decade with approximately 1,300 branded residential projects globally as of&nbsp;2023.</p>
                        </Fade>
                    </Callout>
                </div>
            </section>




            {/* FEATURED SPEAKERS */}

            {
                sessions &&
                <SpeakerCarousel 
                    heading={`Speakers`} 
                    text={null}
                    decal={'bg-secondary'}
                    ctaLink={null}
                    ctaLabel={null}
                    anchorId={null}
                >
                    {
                        prioritiseSpeakers( getSpeakersBySessionTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ), prioritySpeakersArray ).map( profile => (
                            <Pop key={profile.id}>
                                <SpeakerCard
                                    url={null}
                                    photoUrl={profile.photoUrl }
                                    fullName={`${profile.firstName} ${profile.lastName}`}
                                    jobTitle={profile.jobTitle}
                                    company={profile.organization}
                                />
                            </Pop>
                        ))
                    }
                </SpeakerCarousel>
            }

            
            {/* <section className='block bg-default'>
                <Pop>
                    <div className="container">
                        <p className='c-secondary center pb-sm caps ls-2'>Brought to you by</p>
                        <div style={{ width: 400, maxWidth: '40vw', margin: '0 auto' }}>
                            <img src="/assets/img/brf/accor-one-living.svg" alt="logo" />
                        </div>
                    </div>
                </Pop>
            </section> */}


            {/* AGENDA */}
            
            <section className="block bg-default">
                <div className="container maxw-70 center">
                    <p className='fs-1 fw-600 c-secondary'>2024 Branded Residences Forum Agenda</p>
                </div>
            </section>

            <section className="block bg-default">
                <div className="container maxw-50 columns-1 gap-xs">
                    
                    {
                        sessions &&
                        getSessionsByTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ).map( session => (

                            <Pop key={session.id}>
                                <div className={CSS.sessionsWrapper}>
                                    <div className={`${CSSlite.session} ${session.id === 'UGxhbm5pbmdfMjAyNzgxOA==' && `bg-primary-2 caps`} `}>

                                        <div className={`${CSSlite.sessionHeader} fw-300 c-white`}>
                                            {
                                                session.beginsAt && session.endsAt ?
                                                    <>
                                                        {format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
                                                        <p className='mt-xxs'>
                                                            <StopwatchIcon fill={'var(--secondary)'}/>
                                                            <span className='fs-sm fw-500 c-secondary'> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }</span>
                                                        </p>                                                    
                                                    </>
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

                                        <div className={`${CSSlite.sessionContent} | columns-1 gap-xs`}>

                                            {/* <small style={{ color: 'orange'}}>{session.id}</small> */}
                                            
                                            <p className={`fs-5 fw-4500 c-white`}>
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
                                            
                                            { sortSpeakers(session.speakers) }
                                        </div>

                                        </div>
                                </div>
                            </Pop>
                        ))
                    }

                </div>

                <div className="container maxw-50 formatted">
                    <p className='fs-4 fw-600 c-secondary'>Pass Enquiries:</p>
                    <p className='fs-6'>If you have any questions related to your access to the Branded Residences Forum 2024, please contact us on: <a href="mailto:usama.aslam@thebench.com">usama.aslam@thebench.com</a></p>
                </div>
            </section>



            {/* TESTIMONIALS */}

            <section className="block bg-pattern-blue">
                <div className="container maxw-70">

                    <QuoteSlider 
                        heading={"Testimonials"}
                        testimonials={[
                        {
                            quote: "Success in branded residences requires specialised expertise across multiple disciplines - which is why we see The Branded Residence Forum by Accor One Living as such an essential platform for discussion. At this trailblazing event, we will pull together key-decision makers from across the sector - including residential developers who have executed enormously successful projects, expert lawyers, branding and communication firms, architects, interior designer and other key consultants - the key players who are propelling the success of branded residences globally.",
                            avatar: [
                                {
                                    url: "/assets/img/brf/quotes/jeff.jpg",
                                    width: "800",
                                    height: "800"
                                }
                            ],
                            fullName: "Jeff Tisdall",
                            jobTitle: "CBO",
                            organisation: "Accor One Living"
                        },
                        {
                            quote: "We see The Branded Residences Forum by Accor One Living as an important opportunity for the industry to gather and discuss this ever-expanding sector. Interest is now truly global and standalone branded development activity is accelerating. At the same time, exciting new brands and partnership are emerging - simply put, investors have a lot to consider and share when it comes to branded residences.",
                            avatar: [
                                {
                                    url: "/assets/img/brf/quotes/Itani.jpg",
                                    width: "800",
                                    height: "800"
                                }
                            ],
                            fullName: "Riyan Itani",
                            jobTitle: "Founder",
                            organisation: "Global Branded Residences"
                        },
                        {
                            quote: "FHS World in Dubai is a key gathering for hospitality investors and it is only natural that its scope has been expanded to include a 'must-attend' day-long event for those developing, operating or exploring branded residences. We see this forum as a key opportunity for investors to delve into the key issues and trends, such as rental programs, legal structure, sales and marketing and design.",
                            avatar: [
                                {
                                    url: "/assets/img/brf/quotes/rico.jpg",
                                    width: "800",
                                    height: "800"
                                }
                            ],
                            fullName: "Rico Picenoni",
                            jobTitle: "Head of Savills Global Residential Development Consultancy",
                            organisation: ""
                        }
                    ]} />

                </div>
            </section>



            {/* <section className="block bg-default">
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
            </section> */}
            


            {/* FORM */}

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
	const event = await eventQuery.json()
	

    // const selectedSpeakerQuery = await fetch(
	// 	"https://developer.swapcard.com/event-admin/graphql",
	// 	{
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Authorization": process.env.SWAPCARD_AUTH_KEY
	// 		},
	// 		body: JSON.stringify({
	// 			query: `
	// 				query eventPerson($eventId: ID!, $filters: [EventPersonFilter!]) {
    //                     eventPerson(eventId: $eventId, filters: $filters) {
    //                         nodes {
    //                             id
    //                             photoUrl
    //                             firstName
    //                             lastName
    //                             jobTitle
    //                             organization
    //                             userId
    //                         }
    //                     }
    //                 }
	// 			`,
	// 			variables: {
	// 				"eventId": process.env.SWAPCARD_EVENT_ID_AE,
	// 				"filters": {
    //                     "eventPeopleIds": [
    //                         "RXZlbnRQZW9wbGVfMzE4NDUxMDQ=",
    //                         "RXZlbnRQZW9wbGVfMzIxNTYzMjc=",
    //                         "RXZlbnRQZW9wbGVfMzIwMjkxNjI=",
    //                         "RXZlbnRQZW9wbGVfMzE4NTAyOTI=",
    //                         "RXZlbnRQZW9wbGVfMzIxNTU2ODI=",
    //                         "RXZlbnRQZW9wbGVfMzE4NTA1NDQ=",
    //                         "RXZlbnRQZW9wbGVfMzE4NDkwMDM=",
    //                         "RXZlbnRQZW9wbGVfMzE4NDkxODM=",
    //                         "RXZlbnRQZW9wbGVfMzE5NDczNjg=",
    //                         "RXZlbnRQZW9wbGVfMzE2OTE5Mjc="
    //                     ]
    //                 }
	// 			}
	// 		})
	// 	}
	// )
	// const speakers = await selectedSpeakerQuery.json()
    
    // const selectedSpeakerQuery2 = await fetch(
	// 	"https://developer.swapcard.com/event-admin/graphql",
	// 	{
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Authorization": process.env.SWAPCARD_AUTH_KEY
	// 		},
	// 		body: JSON.stringify({
	// 			query: `
	// 				query eventPerson($eventId: ID!, $filters: [EventPersonFilter!]) {
    //                     eventPerson(eventId: $eventId, filters: $filters) {
    //                         nodes {
    //                             id
    //                             photoUrl
    //                             firstName
    //                             lastName
    //                             jobTitle
    //                             organization
    //                             userId
    //                         }
    //                     }
    //                 }
	// 			`,
	// 			variables: {
	// 				"eventId": process.env.SWAPCARD_EVENT_ID_AE,
	// 				"filters": {
    //                     "eventPeopleIds": [
    //                         "RXZlbnRQZW9wbGVfMzE2Nzg2MzY=",
    //                         "RXZlbnRQZW9wbGVfMzIxNTIyNjQ=",
    //                         "RXZlbnRQZW9wbGVfMzIxNjAyNzA=",
    //                         "RXZlbnRQZW9wbGVfMzE4NTcyMzg=",
    //                         "RXZlbnRQZW9wbGVfMzE3NDAzMzY="
    //                     ]
    //                 }
	// 			}
	// 		})
	// 	}
	// )
	// const speakers2 = await selectedSpeakerQuery2.json()

    // louis abboud: RXZlbnRQZW9wbGVfMzE4NDUxMDQ=
    // Salma Aboul-ela: RXZlbnRQZW9wbGVfMzIxNTYzMjc=
    // Jean-Baptiste Recher: RXZlbnRQZW9wbGVfMzIwMjkxNjI=
    // daniel von barloewen: RXZlbnRQZW9wbGVfMzE4NTAyOTI=
    // Richard Bursby: RXZlbnRQZW9wbGVfMzIxNTU2ODI=
    // lara barrett: RXZlbnRQZW9wbGVfMzE4NTA1NDQ=
    // riyan itan: RXZlbnRQZW9wbGVfMzE4NDkwMDM=
    // ali manzoor: RXZlbnRQZW9wbGVfMzE4NDkxODM=
    // Jaidev Menezes: RXZlbnRQZW9wbGVfMzE5NDczNjg=
    // rico picenoni: RXZlbnRQZW9wbGVfMzE2OTE5Mjc=
    // paul rands: RXZlbnRQZW9wbGVfMzE2Nzg2MzY=
    // Moustafa Said: RXZlbnRQZW9wbGVfMzIxNTIyNjQ=
    // Sudhin Siva: RXZlbnRQZW9wbGVfMzIxNjAyNzA=
    // adrian strittmatter: RXZlbnRQZW9wbGVfMzE4NTcyMzg=
    // jeff tisdall: RXZlbnRQZW9wbGVfMzE3NDAzMzY=

	

	// console.log('RESULT', result)
	// console.log('TEST plannings', result.data.event.planningsPlaces)
	// console.log('TEST sessions', result.data.plannings)
	// console.log('SC speakers', speakers.data.eventPerson.nodes)
  

    if ( event.data ) return { 
        props: { 
            sessions: event.data.plannings,
			locations: event.data.event.planningsPlaces,
            // speakers: [ ...speakers.data.eventPerson.nodes, ...speakers2.data.eventPerson.nodes]
        } 
    }

	return { props: {} }
}