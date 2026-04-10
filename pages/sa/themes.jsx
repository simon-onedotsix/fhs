import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'
import Script from "next/script"

import _ from 'lodash'
import parse from 'html-react-parser'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { HeroUnitImage } from '../../fuselage/theme/2024/world/blocks/hero-unit-image/hero-unit-image'
import { Button } from '../../fuselage/theme/2024/world/components/button/button'
import { PopOverlay } from "../../fuselage/components/popoverlay/popoverlay"

import CSS from '../../fuselage/theme/2024/world/css/themes.module.css'



export const THEMES_DATA = [
    {
        id: '1',
        imageUrl: '/assets/img/sa/event-themes/investment.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/investment.svg',
        title: 'Investment & Real Estate',
        body: '<p>Explore the latest opportunities and trends in Saudi hospitality investments, including innovative funding models and landmark real estate projects driving national growth.</p>'
    },
    {
        id: '2',
        imageUrl: '/assets/img/sa/event-themes/wellness.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/wellness.svg',
        title: 'Wellness & Lifestyle',
        body: '<p>Discover how hospitality in Saudi Arabia is embracing holistic wellness, integrating health tech, personalised experiences, and lifestyle-focused amenities to meet evolving guest expectations.</p>'
    },
    {
        id: '25',
        imageUrl: '/assets/img/sa/event-themes/technology.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/technology.svg',
        title: 'Technology & Innovation',
        body: '<p>Uncover how AI, robotics, and smart solutions are reshaping guest experiences and operations, with Saudi properties leading regional adoption of cutting-edge hospitality technologies.</p>'
    },
    {
        id: '4',
        imageUrl: '/assets/img/sa/event-themes/food.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/food.svg',
        title: 'F&B and Experiences',
        body: '<p>Celebrate the rise of experiential dining and culinary excellence, as Saudi hotels and venues blend local flavors, creative concepts, and immersive events to redefine hospitality experiences.</p>'
    },
    {
        id: '6',
        imageUrl: '/assets/img/sa/event-themes/talent.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/talent.svg',
        title: 'Talent & Education',
        body: '<p>Learn how Saudi Arabia is developing its hospitality workforce through modern training, education partnerships, and programs that align academic skills with industry needs.</p>'
    },
    {
        id: '7',
        imageUrl: '/assets/img/sa/event-themes/branded-residences.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/branded-residences.svg',
        title: 'Branded Residences Forum',
        body: '<p>Examine the growth of luxury branded residences in Saudi Arabia, where top hotel brands offer private homes with premium services, creating new benchmarks in high-end living.</p>'
    }
    
]
export const THEMES_DATA_AR = [
    {
        id: '1',
        imageUrl: '/assets/img/sa/event-themes/investment.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/investment.svg',
        title: 'الاستثمار والعقارات',
        body: '<p>Explore the latest opportunities and trends in Saudi hospitality investments, including innovative funding models and landmark real estate projects driving national growth.</p>'
    },
    {
        id: '2',
        imageUrl: '/assets/img/sa/event-themes/wellness.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/wellness.svg',
        title: 'الرفاهية وأسلوب الحياة',
        body: '<p>Discover how hospitality in Saudi Arabia is embracing holistic wellness, integrating health tech, personalised experiences, and lifestyle-focused amenities to meet evolving guest expectations.</p>'
    },
    {
        id: '25',
        imageUrl: '/assets/img/sa/event-themes/technology.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/technology.svg',
        title: 'التقنية والابتكار',
        body: '<p>Uncover how AI, robotics, and smart solutions are reshaping guest experiences and operations, with Saudi properties leading regional adoption of cutting-edge hospitality technologies.</p>'
    },
    {
        id: '4',
        imageUrl: '/assets/img/sa/event-themes/food.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/food.svg',
        title: 'المأكولات والمشروبات والتجارب',
        body: '<p>Celebrate the rise of experiential dining and culinary excellence, as Saudi hotels and venues blend local flavors, creative concepts, and immersive events to redefine hospitality experiences.</p>'
    },
    {
        id: '6',
        imageUrl: '/assets/img/sa/event-themes/talent.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/talent.svg',
        title: 'المواهب والتعليم',
        body: '<p>Learn how Saudi Arabia is developing its hospitality workforce through modern training, education partnerships, and programs that align academic skills with industry needs.</p>'
    },
    {
        id: '7',
        imageUrl: '/assets/img/sa/event-themes/branded-residences.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/branded-residences.svg',
        title: 'منتدى الوحدات السكنية ذات العلامات الفندقية',
        body: '<p>Examine the growth of luxury branded residences in Saudi Arabia, where top hotel brands offer private homes with premium services, creating new benchmarks in high-end living.</p>'
    }
    
]



export default function Themes ({ sessions }) {

    // get agenda topics
    const groupFieldGroupsByName = ( sessionsData, fieldHandle ) => {
		if ( !sessionsData || !fieldHandle ) return []

		const fieldIds = []
		const fieldObjects = []
		const distilledFieldObjects = []

		// build arrays
		sessionsData.forEach( (session) => {
			let topics = session.fields.filter( (field) => field.definition.name === fieldHandle )
			topics.forEach( (field) => {
				fieldIds.push(field.id)
				fieldObjects.push({ id: field.id, name: field.translations[0].value })
			})
		})

		// for unique IDs, search the field object array to find the related name
		_.uniq(fieldIds).forEach( (id) => {
			distilledFieldObjects.push(fieldObjects.find( (obj) => obj.id === id ))
		})

		return distilledFieldObjects
	}
    const TRACKS = _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc'])
    


    const getSessionsByTopic = ( sessionData, topicID ) => {
        const sessionGroup = []

        sessionData.forEach( session => {
            session.fields.forEach( field => {
                if ( field.id === topicID ) sessionGroup.push(session)
            })
        })

        return sessionGroup
    }
     
    
    // console.log('sessions [total]:', sessions.length)
    // console.log('sessions:', sessions)
    // console.log('development session:', getSessionsByTopic( sessions, "RmllbGRWYWx1ZV8yNDIzNzQxMQ==" ))
    // console.log('tracks (topics)', TRACKS)


    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

            <div className='bg-primary'>
                
                <EventsBar site={'/sa'} />
                <Header
                    site={`/sa`}
                    handle={`Saudi Arabia`}
                    event={header.data.event}
                    mainMenu={header.data.mainMenu}
                    ctas={header.data.event.headerCtas}
                />


                <HeroUnitImage imageUrl={'/assets/site/ae/hero-about-fhs-world.jpg'}>
                    <p className='fs-1 fw-600 center'>2026 Event Themes</p>
                </HeroUnitImage>

                <ThemesLayout>
                    { THEMES_DATA.map( (theme, index) => (
                        <ThemeCard 
                            key={index}
                            themeId={theme.id} 
                            imageUrl={theme.imageUrl} 
                            iconUrl={theme.iconUrl} 
                            title={theme.title} 
                            body={theme.body} 
                            sessions={ getSessionsByTopic( sessions, theme.id ) }
                        />
                    )) }
                </ThemesLayout>
            </div>
        
            
            <PopOverlay id={"sa2026prospectus"}>
                <div className="formatted p-xs center">
                    <img src="/assets/img/sa/2026-prospectus-cover.png" alt="" width={300} />
                    <p className="fs-2 fw-600 c-primary lh-1 mt-sm">FHS Saudia Arabia 2026 Prospectus</p>
                    <p className="mt-sm"><Button href={`/sa/prospectus-download`}>Download</Button></p>
                </div>
            </PopOverlay>


            <Footer />
            <LenisScroller />
        </>
    )
}

Themes.theme = 'sa-2025'




// COMPONENTS –––––––––––––––––––––––––––––––––––––––––


export const ThemesLayout = ({ children }) => {
    return (
        <section className="block pt-0" style={{ position: 'relative', zIndex: 5 }}>

            <p className='fs-5 fw-400 c-accent ls-3 center'>EXPLORE</p>
            <ThemesExploreArrow />
            <div className={`${CSS.layout} container`}>
                <span className={CSS.keyline} />
                {children}
            </div>
        </section>
    )
}

export const ThemesExploreArrow = () => {
    return (
        <div className={CSS.keylineArrow}>
            <svg width="100%" height="100%" viewBox="0 0 42 42" style={{ fillRule:'evenodd', clipRule:'evenodd', strokeMiterlimit:3 }}>
                <g transform="matrix(1,0,0,1,0,-304)">
                    <g id="arrow" transform="matrix(1,0,0,0.907972,0,27.4585)">
                        <rect x="0" y="304.571" width="42.117" height="45.771" style={{ fill:'none' }}/>
                        <clipPath id="_clip1">
                            <rect x="0" y="304.571" width="42.117" height="45.771"/>
                        </clipPath>
                        <g clipPath="url(#_clip1)">
                            <g transform="matrix(-1,-1.34877e-16,1.22465e-16,-1.10136,2598.53,1324.97)">
                                <path vectorEffect="non-scaling-stroke" d="M2577.47,884.939L2597.97,925.943L2556.97,925.943L2577.47,884.939Z" style={{ fill:'none', stroke:'var(--accent)', strokeWidth: 1 }}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export const ThemeCard = ({ iconUrl, imageUrl, themeId, title, body, sessions }) => {
    return (
        <div className={CSS.card}>
            <motion.div 
                className={CSS.iconWrapper}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.25 }}
            >
                <img src={iconUrl} alt="" />
            </motion.div>

            <div className={CSS.image}>
                <motion.div 
                    className={CSS.imageWrapper}
                    initial={{ width: '0%', opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25, delay: .2 }}
                >
                    <img src={imageUrl} alt="" />
                </motion.div>
            </div>

            <div className={CSS.content}>
                <motion.p 
                    className='fs-2 fw-400 lh-1 c-accent mb-sm'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25, delay: 0.1 }}
                >
                    {title}
                </motion.p>

                <motion.div 
                    className="formatted fs-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25, delay: 0.2 }}
                >
                    { body && parse(body) }
                </motion.div>

                {/* {
                    sessions?.length &&
                    <div className="formatted">
                        <details className='mt-sm'>
                            <summary  className='fw-600 fs-6 c-accent'>
                                {title} Sessions
                            </summary>
                            <ul className='mt-xs'>
                                { sessions.map( session => (
                                    <motion.li key={session.id}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ type: "spring", bounce: 0.25, delay: 0.2 }}
                                    >
                                        { session.titleTranslations[0].value }
                                    </motion.li> 
                                )) }
                            </ul>
                            
                            <p className='mt-sm'>
                                <Button 
                                    href={`/world/agenda?track=${themeId}`}
                                    theme={{ background: `var(--primary-2)`, hover: `var(--primary-2-dark)`, color: `white`}}
                                >Go to Agenda</Button>
                            </p>
                        </details>

                    </div>
                } */}
            </div>

        </div>
    )
}









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