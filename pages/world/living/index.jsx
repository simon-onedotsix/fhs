import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import useCustomMediaQuery from '../../../hooks/useCustomMediaQuery'

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

import { motion } from "framer-motion"


// BEGIN new static nav
import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { LIVING_FHS_WORLD as header } from '../../../fixtures/nav'

// END new static nav


import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'
import { HeroUnitVideo } from "../../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../../ui/buttons/button"

import { Pop, Fade } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { Callout } from '../../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'

import { Quotation } from "../../../fuselage/theme/2025/sa/components/quotation/quotation"
import { QuoteSlider } from '../../../fuselage/theme/2024/world/components/quote-slider/quote-slider'
import { SpeakerCarousel } from '../../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../../../fuselage/components/speaker-card/speaker-card'
import { AgendaSpeakerCard } from '../../../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import { ThemesSlider } from "../../../ui/modules/themes-slider"
import { EventCard } from "../../../ui/components/event-card"
import { Slider } from '../../../ui/components/slider'

import Ticker from 'framer-motion-ticker'


import CSS from '../../../css/app/agenda-world-2024.module.css'



const CONFIRMED_SPEAKER_DATA = [
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDY1MDgzNTg=`,
        photoUrl: "https://static.swapcard.com/public/images/03a47481a1344b03a90e04c057017377.jpeg",
        fullName: "Ho Kwon Ping",
        jobTitle: "Founder and Executive Chairman",
        company: "Banyan Group",
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA3OTg1MTY=`,
        photoUrl: 'https://static.swapcard.com/public/images/0a8fedf8c19444388ccf07bf5208b2c7.jpeg',
        fullName: 'Riyan Itani',
        jobTitle: 'Director and Founder',
        company: 'Global Branded Residences Ltd.',
    },
    {
        url: "/world/speakers/RXZlbnRQZW9wbGVfNDY4MTM0MDA=",
        photoUrl: "https://static.swapcard.com/public/images/22a5723e4e294c73987b5bee25753722.jpeg",
        fullName: "Jaidev Menezes",
        jobTitle: "RVP Mixed-Use Development EMEA",
        company: "Marriott International",
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDY0NDczMzk=`,
        fullName: "Rahul Salgia",
        jobTitle: "Founder & CEO",
        company: "DigiValet",
        photoUrl: "https://static.swapcard.com/public/images/e2225a6fcb174f869dec0029e844b5b7.jpeg",
    }
]
const QUOTES_DATA = [
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/avatars/Jeff-Tisdall.jpeg',
        quote: "The market is still fragmented. Large events are too broad, and niche ones don't have the right scale.",
        fullName: "Jeff Tisdall",
        title: "Chief Business Officer, Accor One Living"
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/avatars/Dirk-Bakker.jpg',
        quote: "A conference that brings all of this together would be a huge success.",
        fullName: "Dirk Bakker",
        title: "Chief Executive Officer, Necron Hospitality",
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/avatars/kasper-ravn-wigen.webp',
        quote: "I wish there was a business event that brings together key living categories across European real estate in a single place.",
        fullName: "Kasper Ravn Wigen",
        title: "Global Marketing Director, Yugo",
    }
]
import { THEMES_DATA } from '../../living'
import { TESTIMONIALS_DATA } from '../../living'
import { ASSET_CLASS_DATA } from '../../living/why-now'
import { EVENT_DATA } from '../..'
const livingEventIds = new Set(['246252', '259029', '314682', '246252333'])
const FHS_EVENTS = EVENT_DATA.filter(event => !livingEventIds.has(event.id))
const LIVING_EVENTS = EVENT_DATA.filter(event => livingEventIds.has(event.id))


export default function Page ({ sessions, speakers }) {

    const lenis = useLenis()
    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

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


    // prioritise speakers in slider
	// let prioritySpeakersArray = [
	// 	(speaker => speaker.firstName == 'Pier Paolo' && speaker.lastName === 'Righi' ? 0 : 1),
	// 	(speaker => speaker.firstName == 'Charlie' && speaker.lastName === 'Walsh' ? 0 : 1),
	// 	(speaker => speaker.firstName == 'Husni Al' && speaker.lastName === 'Bayari' ? 0 : 1),
	// 	(speaker => speaker.firstName == 'George' && speaker.lastName === 'Azar' ? 0 : 1),
	// 	(speaker => speaker.firstName == 'Jeff' && speaker.lastName === 'Tisdall' ? 0 : 1),
	// ]
    
    
    // console.log('sessions:', sessions)
    // console.log('speakers:', speakers)
    // console.log('ordered:', orderedSpeakers)
    
    // console.dir( getSessionsByTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ))
    // console.log('BRF speakers:', getSpeakersBySessionTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ) )
	// console.log('customOrderedSpeakers:', prioritiseSpeakers( getSpeakersBySessionTopicID( sessions, "RmllbGRWYWx1ZV8yNDIzOTQ1MA==" ), prioritySpeakersArray ))


    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg" property="og:image"></meta>
                <title>FHS Living Dubai</title>
                <meta name="description" content="Held adjacently with FHS World, this exclusive one-day forum explores the thriving sector of Branded Residences."></meta>
            </Head>
            
            <EventsBar site={'/world/living'} />
            <Header
                site={`/world/living`}
                parentSite={`/world`}
                region={`At FHS World`}
                parentHandle={`FHS World`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />



            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/brf-2025-asia.mp4'} poster={'/assets/video/brf-2025-asia.jpg'}>

                <p className='fs-0 fw-600 caps lh-1 center maxw-50 mx-auto'>FHS Living</p>
                <p className='fs-4 fw-600 c-white caps center mt-sm'>1st October 2026</p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    Held adjacently with <strong>FHS World</strong>, this exclusive one-day forum explores the alternative asset classes in the living sector.
                </motion.p>

                <div className="mt-sm center">
                    <Pop>
                        <Button href={'/world/living/agenda'} label={`View Agenda`} inverse/>
                    </Pop>
                </div>


                {/* transition boxout */}
                <section style={{ position: `absolute`, top: `var(--space-sm)`, left: `var(--space-sm)` }}>
                    <Pop>
                        <div style={{ width: `16rem`, padding: `1.5rem 2rem`, backgroundColor: `var(--burgundy)`, borderRadius: `1rem`, textAlign: `center` }}>    
                     
                            <Pop delay={.1}>
                                <p className='fs-5 lh-2'><strong>Branded Residences Forum</strong> has been rebranded to <strong>FHS&nbsp;Living</strong></p>
                            </Pop>
                           
                        </div>
                    </Pop>
                </section>


            </HeroUnitVideo>

            
            {/* SPONSORS */}
            <section className="block" style={{ position: `relative`, zIndex: 2 }}>
                <div className="container center">
                    <p className='fs-1 fw-600'>2026 Partners</p>
                </div>
                <Pop>
                    <div className="container pt-lg">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Founder Partner</p>
                            <div style={{ width: `100%`, maxWidth: '22rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/accor-one-living.svg" alt="logo" width={`100%`} />
                            </div>
                        </section>
                    </div>
                    <div className="container pt-sm columns-3 gap-md maxw-60">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Strategic Partner</p>
                            <div style={{ width: 150, maxWidth: '30vw', margin: '0 auto' }}>
                                <img src="/assets/img/brf/global-branded-residences.svg" alt="logo" />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/digivalet.png" alt="logo" width={`100%`} />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/sectorlight.svg" alt="logo" />
                            </div>
                        </section>
                    </div>
                    <div className="container">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Media Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/bresi.png" alt="logo" width={`100%`} />
                            </div>
                        </section>
                    </div>
                </Pop>
            </section>
               

            {/* MARKET OVERVIEW */}
            {/* <section className="block bg-default">
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
            </section> */}

            
            {/* WHY LIVING? */}
            <section className="block pt-md">
                <div className="container center">
                    <p className="fs-1 fw-600">Why Living?</p>
                </div>

                <div className="container columns-3 gap-md">
                    {
                        ASSET_CLASS_DATA.map((card, index) => (
                            <article key={index} className="formatted">
                                <Pop>
                                    <img src={card.imageUrl} alt="" width={`100%`} style={{ borderRadius: `1rem`}} />
                                </Pop>
                                <p className="fs-4 fw-600 mt-xxs">{card.heading}</p>
                                <p>{card.body}</p>
                            </article>
                        ))
                    }
                </div>
            </section>
            

            {/*ASSET CLASSES */}
            <section className={`block bg-secondary`}>
                <div className="container center pb-sm">
                    <p className="fs-1 fw-600">Asset Classes</p>
                </div>

                <ThemesSlider
                    heading={`Asset Classes` }
                    data={THEMES_DATA}
                    link={''}
                    linkLabel={''}
                />
            </section>


            {/* TESTIMONIALS */}
            <section className="block bg-default">
                <div className="container maxw-70">

                    <QuoteSlider 
                        color={'white'}
                        heading={"Testimonials"}
                        testimonials={TESTIMONIALS_DATA} />

                </div>
            </section>



            {/* QUOTES */}
            {/* <section className="block bg-secondary o-hidden">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">What the industry is saying</p>
                </div>

                <div className={`container columns-3 gap-md`}>
                    {
                        QUOTES_DATA.map((quote, index) => (
                            <Quotation
                                key={index}
                                avatarUrl={quote.avatarUrl}
                                quote={quote.quote}
                                fullName={quote.fullName}
                                title={quote.title}
                            />
                        ))
                    }
                </div>
            </section> */}


                        
            {/* FHS EVENTS */}
            <section className="block bg-primary">

                {/* LIVING */}
                <div className="container center">
                    <p className="fs-2 fw-500 caps">Upcoming FHS Living Events</p>
                </div>

                <div className="container columns-1 maxw-35 gap-xs">
                    {
                        _.orderBy(LIVING_EVENTS, 'startDate').map(event => {
                            // console.log(event)
                            return (
                                <div key={event.id} className={`columns-1 gap-xs`}>                                
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCard
                                                key={stream.id}
                                                heading={event.heading}
                                                title={stream.heading}
                                                dates={{ startDate: event.startDate, endDate: event.endDate}}
                                                venue={event.venue}
                                                logo={stream.logo[0]}
                                                passLink={stream.purchasePassLink} 
                                                websiteLink={stream.websiteLink} 
                                                theme={event.theme} 
                                                dateOverride={event.dateOverride}
                                                landscape={true}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                
                {/* OTHER FHS */}
                {/* <div className="container center">
                    <p className="fs-2 fw-500 caps">FHS Around the World</p>
                </div>

                <div className="container columns-3 maxw-55 gap-xs">
                    {
                        FHS_EVENTS.map(event => {
                            // console.log(event)
                            return (
                                <div key={event.id} className={`columns-1 gap-xs`}>                                
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCard
                                                key={stream.id}
                                                heading={event.heading}
                                                title={stream.heading}
                                                dates={{ startDate: event.startDate, endDate: event.endDate}}
                                                venue={event.venue}
                                                logo={stream.logo[0]}
                                                passLink={stream.purchasePassLink} 
                                                websiteLink={stream.websiteLink} 
                                                theme={event.theme} 
                                                dateOverride={event.dateOverride}
                                                landscape={false}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div> */}
            </section>
            



            {/* FORM */}
            {/* <section id="form" className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-600">Register Your Interest</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='8f2cb55c-9a3a-417e-a88f-d2fb7a8b68e1' />
                </div>
            </section> */}


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'living'





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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}") {
									eventProfile {
										type
										withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
					"page": 1
				}
			})
		}
	)
	const event = await eventQuery.json()
	
	

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