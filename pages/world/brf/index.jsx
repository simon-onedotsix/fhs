import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'


import { motion } from "framer-motion"

import { Header } from '../../../fuselage/theme/2025/brf/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'
import { HeroUnitVideo } from "../../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../../fuselage/theme/2025/brf/components/button/button"

import { Pop, Fade } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { Callout } from '../../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'

import { QuoteSlider } from '../../../fuselage/theme/2024/world/components/quote-slider/quote-slider'
import { SpeakerCarousel } from '../../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../../../fuselage/components/speaker-card/speaker-card'
import { AgendaSpeakerCard } from '../../../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import { ThemesSlider } from "../../../fuselage/theme/2024/world/components/themes-slider/themes-slider"


import CSS from '../../../css/app/agenda-world-2024.module.css'


const THEMES_DATA = [
    {
        id: '01',
        iconUrl: '/assets/img/brf/icons/2025/real-estate.svg',
        title: 'Branded Real Estate Investment',
    },
    {
        id: '02',
        iconUrl: '/assets/img/brf/icons/2025/hospitality.svg',
        title: 'Hospitality Market Spotlights',
    },
    {
        id: '03',
        iconUrl: '/assets/img/brf/icons/2025/branding-strategies.svg',
        title: 'Brand Strategy & Residential Marketing',
    },
    {
        id: '04',
        iconUrl: '/assets/img/brf/icons/2025/legal.svg',
        title: 'Legal & Contractual Frameworks',
    },
    {
        id: '05',
        iconUrl: '/assets/img/brf/icons/2025/sustainability.svg',
        title: 'Design & Sustainable Development',
    },
    {
        id: '06',
        iconUrl: '/assets/img/brf/icons/2025/cross-sector.svg',
        title: 'Cross-Sector Brand Expansion',
    },
    {
        id: '07',
        iconUrl: '/assets/img/brf/icons/2025/loyalty.svg',
        title: 'Loyalty, Lifestyle & Living',
    },

]



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

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/brf-2025-asia.mp4'} poster={'/assets/video/brf-2025-asia.jpg'}>
                <p className='fs-0 fw-600 caps lh-1 center maxw-50 mx-auto'>Where brands shape the future of living</p>

                <p className='fs-4 fw-600 c-white caps center mt-sm'>29 October 2025</p>


                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    Held adjacently with <strong>FHS World</strong>, this exclusive one-day forum explores the thriving sector of Branded Residences.
                </motion.p>

                <Pop>
                    <div className="container maxw-60 pt-lg columns-3 gap-md">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Founder Sponsor</p>
                            <div style={{ width: 300, maxWidth: '70vw', margin: '0 auto' }}>
                                <img src="/assets/img/brf/accor-one-living.svg" alt="logo" />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Strategic Partner</p>
                            <div style={{ width: 150, maxWidth: '30vw', margin: '0 auto' }}>
                                <img src="/assets/img/brf/global-branded-residences.svg" alt="logo" />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Sponsor</p>
                            <div style={{ width: 627, maxWidth: '13vw', margin: '0 auto' }}>
                                <img src="/assets/img/brf/marriott.svg" alt="logo" />
                            </div>
                        </section>
                    </div>
                </Pop>

            </HeroUnitVideo>


            <section className="block bg-default">
                <div className="container formatted maxw-90">
                    <Callout 
                        image={{ url:'/assets/img/brf/brf-2024-image-08.jpg', width:2000, height:1333 }}
                        caption={"The Rixos Dubai Islands Residences"}
                    >
                        <Fade>
                            <p className='fs-2 fw-600 lh-2'>Market Overview</p>
                            <p className="fs-4 c-white">The branded residences sector has grown <strong>180% globally in the past decade</strong>, with 788 projects currently running and an additional <strong>900+</strong> launching globally (or in pipeline) over the next 5 to 6 years.</p>
                        </Fade>
                    </Callout>
                </div>
            </section>




            {/* FEATURED SPEAKERS */}
            {
                sessions &&
                <SpeakerCarousel 
                    heading={`2024 Speakers`} 
                    color={'white'}
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
                                    color={'white'}
                                />
                            </Pop>
                        ))
                    }
                </SpeakerCarousel>
            }


            {/* AWARDS */}
            <section className="block">
                <div className="container formatted center maxw-50">
                    <p className="fs-1 fw-600 lh-1">World Branded Residences Awards 2025</p>
                    <p className='fs-5 mt-sm'>The World Branded Residences Awards recognise excellence and outstanding achievement among brokerages and individual brokers operating in the global branded residences market.</p>
                </div>
                <div className="container center">
                    <Button href={'/world/brf/broker-award'}>Learn More</Button>
                </div>
            </section>
            

            {/* THEMES */}
            <section className="block bg-default">
                <ThemesSlider 
                    data={THEMES_DATA} 
                    heading={"2025 Branded Residences Forum Themes"}
                    link={'/world/brf/agenda-2024'} 
                    linkLabel={'View 2024 Agenda'} 
                />
            </section>



            {/* TESTIMONIALS */}
            <section className="block bg-secondary">
                <div className="container maxw-70">

                    <QuoteSlider 
                        color={'white'}
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



            {/* FORM */}
            <section id="form" className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-600">Register Your Interest</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='8f2cb55c-9a3a-417e-a88f-d2fb7a8b68e1' />
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