import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import useCustomMediaQuery from '../../../hooks/useCustomMediaQuery'

import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script"

import { motion } from "framer-motion"


import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { LIVING_FHS_SA as header } from '../../../fixtures/nav'

// import { Header } from '../../../fuselage/theme/2025/brf/sa/common/header/header'
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
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDAwNjUwMTI=`,
        photoUrl: 'https://static.swapcard.com/public/images/41573afd40d44444bbfe98f32c26109f.jpeg',
        fullName: 'Hans Meyer',
        jobTitle: 'Co Founder & Managing Director',
        company: 'Zoku',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDAzNDU2NjM=`,
        photoUrl: 'https://static.swapcard.com/public/images/cd2f0cf8c3f8428e86d86e922f7b64fb.png',
        fullName: 'Nick Candy',
        jobTitle: 'Chief Executive Officer',
        company: 'Candy Capital',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDAxNjkwNzY=`,
        photoUrl: 'https://static.swapcard.com/public/images/27aa2c09769341c8a333b8ab30e3d2f8.png',
        fullName: 'Eleonora Srugo',
        jobTitle: 'Licensed Associated Real Estate Broker, Douglas Elliman',
        company: 'Star of Netflix’s Selling the City',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzg0MDMyOTQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/cb22de0ff76c48e080aa1ad8b770b936.jpeg',
        fullName: 'Amit Arora',
        jobTitle: 'Chief Operating Officer',
        company: 'Arada',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA0MjQxMDI=`,
        photoUrl: 'https://static.swapcard.com/public/images/9977ec1893ef4679ac9bfdd4ad74be93.jpeg',
        fullName: 'Barry Landsberg',
        jobTitle: 'Principal',
        company: 'Landsberg Residential Consulting Inc.',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA0ODY2NTM=`,
        photoUrl: 'https://static.swapcard.com/public/images/665f0d09e03b46308f0adb0fb8011c4e.png',
        fullName: 'Jeff Tisdall',
        jobTitle: 'Chief Business Officer',
        company: 'Accor One Living',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA3OTg1MTY=`,
        photoUrl: 'https://static.swapcard.com/public/images/0a8fedf8c19444388ccf07bf5208b2c7.jpeg',
        fullName: 'Riyan Itani',
        jobTitle: 'Director and Founder',
        company: 'Global Branded Residences Ltd.',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA1OTkxMjM=`,
        photoUrl: 'https://cdn-api.swapcard.com/public/images/5cf473e2ddec40608d2edc80e017428d.jpeg',
        fullName: 'Daniel von Barloewen',
        jobTitle: 'Senior Vice President, Global Mixed-Use Development',
        company: 'Accor',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzk0MjE1OTU=`,
        photoUrl: 'https://static.swapcard.com/public/images/a1f87efa02b24fe8a1f202b05b2dc5a5.jpeg',
        fullName: 'Jaidev Menezes',
        jobTitle: 'RVP Mixed Use Development EMEA',
        company: 'Marriott International',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDAwNjI1NDM=`,
        photoUrl: 'https://static.swapcard.com/public/images/192e3af65e8443a7bbaccec1513a2d08.png',
        fullName: 'Stefano Saporetti',
        jobTitle: 'Director of Brand Diversification',
        company: 'Aston Martin',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzg0MDMzMDM=`,
        photoUrl: 'https://static.swapcard.com/public/images/08f9fc81218941db8921678dc03d98ca.jpeg',
        fullName: 'Rosa Piro',
        jobTitle: 'Chief Investment Officer',
        company: 'Arada',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA2MzI2OTc=`,
        photoUrl: 'https://static.swapcard.com/public/images/26ed7f8d9cf34cf8b785dd00b71ab676.jpeg',
        fullName: 'Paul Saba',
        jobTitle: 'Vice President and Senior Counsel - EMEA',
        company: 'Marriott International',
    },
    
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
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg" property="og:image"></meta>
                <title>FHS Living Saudi Arabia</title>
                <meta name="description" content="Held adjacently with FHS Saudi Arabia, this exclusive one-day forum explores the thriving sector of Branded Residences."></meta>
            </Head>
            
            <EventsBar site={'/sa/living'} />
            <Header
                site={`/sa/living`}
                parentSite={`/sa`}
                region={`At FHS Saudi Arabia`}
                parentHandle={`FHS Saudi Arabia`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/brf-2025-asia.mp4'} poster={'/assets/video/brf-2025-asia.jpg'}>
                
                {/* transition boxout */}
                <section style={
                    isDesktop
                        ? { position: `absolute`, top: `var(--space-sm)`, left: `var(--space-sm)` }
                        : { paddingBottom: `2rem` }
                }>
                    <Pop>
                        <div style={{ width: isDesktop ? `16rem` : `100%`, padding: `1.5rem 2rem`, backgroundColor: `var(--burgundy)`, borderRadius: `1rem`, textAlign: `center` }}>    
                        
                            <Pop delay={.1}>
                                <p className='fs-5 lh-2'><strong>Branded Residences Forum</strong> has been rebranded to <strong>FHS&nbsp;Living</strong></p>
                            </Pop>
                            
                        </div>
                    </Pop>
                </section>

                <p className='fs-0 fw-600 caps lh-1 center maxw-50 mx-auto'>FHS Living</p>
                <p className='fs-3 fw-600 c-white caps center mt-sm'>23 March 2027</p>
                <p className='fs-4 fw-600 center'>Mandarin Oriental Al Faisaliah, Saudi Arabia</p>


                {/* <div className="mt-md center">
                    <Pop>
                        <Button href={'/sa/living/agenda'} label={`View FHS Living 2026 Agenda`} inverse/>
                    </Pop>
                </div> */}


            </HeroUnitVideo>


            
            {/* SPONSORS */}
            <section className="block" style={{ position: `relative`, zIndex: 2}}>
                <div className="container center">
                    <p className='fs-1 fw-600'>2026 Partners</p>
                </div>
                
                <div className="container maxw-70 py-md" style={{ display: `flex`, gap: `var(--space-md)`, justifyContent: `center`, flexWrap: `wrap` }}>
                    <PartnerLogo logoUrl={`/assets/img/brf/jabal-omar.svg`} maxWidth={8} />
                    <PartnerLogo logoUrl={`/assets/img/brf/accor-one-living.svg`} maxWidth={16} />
                    {/* <PartnerLogo logoUrl={`/assets/img/brf/marriott.svg`} maxWidth={12} /> */}
                    <PartnerLogo logoUrl={`/assets/img/brf/sectorlight-inverse.png`} maxWidth={12} />
                </div>

                <div className="container center">
                    <p className='fs-4 fw-600'>Media Partner</p>
                </div>
                <div className="container maxw-70" style={{ display: `flex`, gap: `var(--space-md)`, justifyContent: `center`, flexWrap: `wrap` }}>
                    <PartnerLogo logoUrl={`/assets/img/brf/bresi.png`} maxWidth={12} />
                </div>
            </section>


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



            {/* ASSET CLASSES? */}
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
                    <p className="fs-2 fw-500 caps lh-1">Upcoming FHS Living Events</p>
                </div>

                <div className="container columns-4 gap-xs">
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
                                                landscape={false}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </section>

            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'living'




const PartnerLogo = ({ logoUrl, maxWidth }) => {
    return (
        <div style={{ display: `flex`, width: `21rem`, maxWidth: maxWidth ? `${maxWidth}rem` : `12rem` , alignItems: `center`, justifyContent: `center` }}>
            <img src={logoUrl} alt="logo" width={`100%`} />
        </div>
    )
}



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