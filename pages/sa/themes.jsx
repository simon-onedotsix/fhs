import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'

import _ from 'lodash'
import parse from 'html-react-parser'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { HeroUnitImage } from '../../fuselage/theme/2024/world/blocks/hero-unit-image/hero-unit-image'

import { Button } from '../../fuselage/theme/2024/world/components/button/button'

import CSS from '../../fuselage/theme/2024/world/css/themes.module.css'



export const THEMES_DATA = [
    {
        id: '1',
        imageUrl: '/assets/img/sa/event-themes/nextgen-talent.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/nextgen-talent.svg',
        title: 'NextGen Talent & Hospitality Education',
        body: '<p>Explore how Saudi Arabia is nurturing the next generation of hospitality leaders. Sessions in this track focus on bridging academic curricula with real-world industry demands, rebranding hospitality careers to attract youth, and leveraging public-private partnerships for workforce development. From innovative training models to tech-enhanced learning, discover strategies to equip tomorrow&apos;s talent with the skills and mindset to drive the Kingdom&apos;s hospitality sector forward.</p>'
    },
    {
        id: '2',
        imageUrl: '/assets/img/sa/event-themes/investment.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/investment.svg',
        title: 'Investment, Financing & Real Estate',
        body: '<p>Delve into the financial landscape shaping Saudi Arabia&apos;s hospitality market. This track covers everything from raising capital and de-risking investments to innovative asset management and real estate opportunities. Hear from investors, developers, and financial experts as they share strategies, success stories, and market forecasts that will help you navigate—and thrive in—this vibrant, rapidly evolving industry.</p>'
    },
    {
        id: '3',
        imageUrl: '/assets/img/sa/event-themes/religious-tourism.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/religious-tourism.svg',
        title: 'Religious Tourism',
        body: '<p>Gain insights into the unique dynamics of Saudi Arabia&apos;s religious travel sector, a cornerstone of the Kingdom&apos;s hospitality landscape. Sessions in this track examine the future of pilgrimage management, the development of Mecca and Medina, and how technology and innovation can enhance experiences for millions of visitors. Learn how religious tourism can serve as a catalyst for broader destination growth and investment.</p>'
    },
    {
        id: '4',
        imageUrl: '/assets/img/sa/event-themes/destination-development.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/destination-development.svg',
        title: 'Destination Development',
        body: '<p>Discover how Saudi Arabia is transforming itself into a global tourism powerhouse through large-scale projects and forward-thinking urban planning. This track offers a deep dive into emerging destinations, mega-events, and tourism transformations reshaping cities like Riyadh and beyond. Uncover strategies for infrastructure growth, place-making, and leveraging heritage and cultural experiences to attract visitors from around the world.</p>'
    },
    {
        id: '5',
        imageUrl: '/assets/img/sa/event-themes/technology.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/technology.svg',
        title: 'Technology & Innovation',
        body: 'Stay ahead of the curve by exploring the cutting-edge technologies reshaping hospitality. This track highlights how AI, data analytics, and other digital tools can optimize operations, enhance guest experiences, and drive workforce training. From smart hotels to startup pitches, learn how innovation is revolutionizing Saudi Arabia&apos;s hospitality sector and positioning it for long-term success.</p>'
    },
    {
        id: '6',
        imageUrl: '/assets/img/sa/event-themes/luxury.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/luxury.svg',
        title: 'Luxury, F&B, and Experiential Hospitality',
        body: '<p>Step into the realm of high-end accommodations, world-class dining, and unforgettable guest experiences. In this track, industry leaders and innovators discuss how to build strong hospitality brands, deliver culinary excellence, and create immersive concepts that meet evolving consumer expectations. Whether exploring upscale resorts or alternative lodging, discover the strategies powering Saudi Arabia&apos;s move into the global luxury spotlight.</p>'
    },
    {
        id: '7',
        imageUrl: '/assets/img/sa/event-themes/sustainability.jpg',
        iconUrl: '/assets/img/sa/event-themes/icons/sustainability.svg',
        title: 'Sustainability & ESG',
        body: '<p>Explore the role of environmentally responsible and socially conscious practices in Saudi Arabia&apos;s booming hospitality sector. This track dives into topics like sustainable design, resource management, and community engagement, examining how hotels and destinations can balance growth with ethical stewardship. Join the conversation to learn best practices, innovative frameworks, and the latest ESG strategies shaping the future of hospitality.</p>'
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
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

            <div className='bg-primary'>
                <Header compact />


                <HeroUnitImage imageUrl={'/assets/site/ae/hero-about-fhs-world.jpg'}>
                    <p className='fs-1 fw-600 center'>2025 Event Themes</p>
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