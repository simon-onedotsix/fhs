import { useRef, useState } from 'react'

import Image from 'next/image'

import _ from 'lodash'
import { format } from 'date-fns'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import { SmartTicker } from 'react-smart-ticker'
import parse from 'html-react-parser'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { FhsLockup } from '../../fuselage/theme/2025/sa/components/logos/fhs-brand'
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { TagIcon, CompassIcon, StopwatchIcon } from "../../fuselage/components/icons/icons"
import { Modal } from "../../fuselage/theme/2024/sa/components/modal/modal"


import CSS from '../../fuselage/theme/2025/sa/css/nextgen-investment-forum.module.css'
import agendaCSS from '../../fuselage/theme/2025/sa/css/agenda-compact.module.css'


const CHALLENGE_CARD_DATA = [
    {
        imageUrl: "/assets/img/sa/nextgen-forum/challenge-1.jpg",
        title: "Skill Gap in Hospitality",
        bigImpact: "1 million",
        impact: "new jobs",
        body: "in tourism by 2030 <strong>yet there are skill gaps in specialised areas</strong> like <strong>hospitality management</strong>, digital competencies, and vocational training in tourism."
    },
    {
        imageUrl: "/assets/img/sa/nextgen-forum/challenge-2.jpg",
        title: "Women in the Industry",
        bigImpact: "8.1%",
        impact: "of women in entire workforce",
        body: "the “Regional Report on Women in Tourism in the Middle East” revealed that the proportion of <strong>Saudi women employed in the tourism industry in SA is 8.1%</strong> of the entire workforce."
    },
    {
        imageUrl: "/assets/img/sa/nextgen-forum/challenge-3.jpg",
        title: "Youth Unemployment",
        bigImpact: "16%",
        impact: "unemployment",
        body: "Despite efforts, Saudi Arabia's youth <strong>unemployment rate remains around 16%</strong>, with limited vocational pathways in hospitality for young Saudis."
    }
]

const OBJECTIVE_CARD_DATA = [
    {
        heading: "Building a Community of Educators and Industry Experts",
        body: "Creating a network of hospitality educators, industry practitioners, and potential employers who can collaborate and share insights on best practices, further enriching the learning environment."
    },
    {
        heading: "Pathways to Career Growth",
        body: "Creating direct career opportunities through mentorship programs, networking events, and partnerships that connect emerging talent with industry leaders and potential employers."
    },
    {
        heading: "Bridging the Skills Gap",
        body: "Offering insights on industry-aligned ducation and practical training tailored to the needs of Saudi Arabia's fast-growing hospitality sector."
    },
    {
        heading: "Empowering Saudi Nationals",
        body: "Emphasizing local talent development with a particular focus on increasing female participation in the hospitality workforce, in line with Vision 2030’s inclusivity goals."
    },
    {
        heading: "Public-Private Collaboration",
        body: "Fostering partnerships with key government agencies, giga-projects (like NEOM and Red Sea Global), and private sector leaders to align educational programs with real-world industry demands."
    }
]

const COMPONENT_CARD_DATA = [
    {
        imageUrl: "/assets/img/sa/nextgen-forum/components-1.jpg",
        heading: "Focus on Education",
        body: "Saudi Arabia's education sector is experiencing significant growth, driven by a strong demand for both general and hospitality education. The Kingdom's Vision 2030 emphasises the importance of developing a knowledgeable and capable workforce to support the sustainable growth of the hospitality industry. The NextGen Investment Forum aims to address these needs by bringing together key stakeholders."
    },
    {
        imageUrl: "/assets/img/sa/nextgen-forum/components-2.jpg",
        heading: "Partners",
        body: "We will partner with government entities, giga projects, educational institutions, and international education industry leaders - along with innovative tech companies that are disrupting education through AI, VR and hybrid/remote learning. The forum aims to create a comprehensive ecosystem that supports education and career development."
    },
    {
        imageUrl: "/assets/img/sa/nextgen-forum/components-3.jpg",
        heading: "Public-Private Partnerships",
        body: "Strong public-private partnerships are essential for driving innovation and investment in education. We will facilitate these collaborations to ensure that educational programs are aligned with industry needs and provide students with the skills required for future job markets."
    },
    {
        imageUrl: "/assets/img/sa/nextgen-forum/components-4.jpg",
        heading: "Solution Driven",
        body: "The format of this forum is designed to encourage delegates to collaborate and address the most pressing and important questions related to education and training in Saudi Arabia's hospitality industry."
    }
]




export default function Page ({ sessions, locations }) {

    // console.log('sessions:', sessions)

    let NEXTGEN_SESSIONS = []

	sessions.map(session => {
		if (session.fields.find( field => field.id === 'RmllbGRWYWx1ZV8yNjYzMzYxMQ==')) {
			NEXTGEN_SESSIONS.push(session)
		}
	})

    // console.log('NEXTGEN_SESSIONS:', NEXTGEN_SESSIONS)



    // scroll animation
    let introRef = useRef(null)
    let headerScroll = useScroll({ 
        target: introRef,
        offset: ["start 100%", "end 0%"]
    })
    let g1 = useTransform( headerScroll.scrollYProgress, [0, 1], ["-15%", "20%"])
    let g2 = useTransform( headerScroll.scrollYProgress, [0, 1], ["-15%", "40%"])


    // BUILD AGENDA
		
	const buildAgenda = ( sessionsData ) => {

		if ( !sessionsData ) return 

		const timeslots = _.groupBy(sessionsData, 'beginsAt')	


		// calculate event days

		const getUniqueDays = ( sessionData ) => {

			const groupedStartTimes = _.groupBy(sessionData, 'beginsAt')
			const timeCodes = Object.keys(groupedStartTimes)
			const eventDays = _.uniqBy( timeCodes, string => string.slice(0, 10) )
	
			return eventDays
		}
		
		const agendaDays = []
		getUniqueDays( sessionsData ).map((timestring, index) => {
			agendaDays.push({ 
				day: format( new Date(timestring), "eeee dd MMMM" ), 
				time: timestring.slice(0, 10), 
				timeslots: [] 
			})
		})


		// group sessions (and apply filters)

		const filteredTimeslots = _.groupBy(sessionsData, 'beginsAt')
		
	
		// build agenda
	
		const agenda = []
		agendaDays.map( day => {
			let slots = []
			for ( const key in filteredTimeslots ) {
				if ( key.slice(0, 10) === day.time.slice(0, 10) ) {
					slots.push({ 
						beginsAt: filteredTimeslots[key][0].beginsAt, 
						endsAt: filteredTimeslots[key][0].endsAt, 
						sessions: filteredTimeslots[key]
					})
				}
			}
	
			agenda.push( { ...day , timeslots: slots } )
		})

		return agenda
	}

	const getLocationTitleById = ( session ) => {
		const location = session.fields.find( field => field.definition.name === 'Location' )
		if ( !location ) return
		return location.translations[0].value
	}



    return (
        <>
            <Header compact />

                {/* intro */}

                <div ref={introRef} className={CSS.themeWrapper}>
                    <motion.img className={CSS.deco01} src="/assets/theme/sa-2025/gfk-01.svg" alt="" style={{ y: g1 }}/>
                    <motion.img className={CSS.deco02} src="/assets/theme/sa-2025/gfk-01.svg" alt="" style={{ y: g2 }}/>

                    <div className="bg-primary">
                        <PageHeroImage hero={{ url: '/assets/img/sa/nextgen-forum/bg-1.jpg', width: 2000, height: 1334 }} >
                            <div className="container maxw-60 pb-md c-white center">
                                <Reveal>
                                    <h1 className='fs-0'>NextGen: Investment Forum</h1>
                                </Reveal>
        
                                <Fade delay={.1}>
                                    <p className='fs-4 fw-500 mt-sm'>11 May 2025, Mandarin Oriental Al Faisaliah, Riyadh</p>
                                </Fade>
                            </div>

                            <div className="container columns-2 gap-sm">
                                <section>
                                    <p className='fs-5 c-accent caps center pb-xs'>Co-located with:</p>
                                    <Pop>
                                        <FhsLockup 
                                            inverse 
                                            sectorLabel={"Saudi Arabia"} 
                                            sectorColor={"var(--accent)"} 
                                            topColor={"var(--secondary)"}
                                        />
                                    </Pop>
                                </section>
                                <section style={{ maxWidth: '15rem'}}>
                                    <p className='fs-5 c-accent caps center'>Sponsored by:</p>
                                    <Pop>
                                        <Image src={'/assets/img/sa/nextgen-forum/baraka-logo.png'} width={1000} height={499} layout='responsive' />
                                    </Pop>
                                </section>
                            </div>
                        </PageHeroImage>
                    </div>

                


                    {/* challenges */}

                    {/* <section className="block bg-primary" style={{ width: '100%', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div className="container">
                                <p className='fs-0 center'>Hospitality Education: Challenges</p>
                            </div>
                            <div className={`${CSS.challengeCards} container pt-sm`}>
                                {
                                    CHALLENGE_CARD_DATA.map( (card, index) => (
                                        <ChallengeCard 
                                            key={index} 
                                            imageUrl={card.imageUrl} 
                                            title={card.title} 
                                            bigImpact={card.bigImpact} 
                                            impact={card.impact} 
                                            body={card.body} 
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section> */}

                </div>



                {/* objectives */}

                <section className={`${CSS.objectivesSection} bg-primary`}>
                    <div className={CSS.objectivesSectionBG}>
                        <Image src={'/assets/img/sa/nextgen-forum/bg-2.jpg'} layout={`responsive`} width={1680} height={900} alt=''/>
                    </div>

                    <SmartTicker speed={180}>
                        <p className='fs-0 caps'>• Our Objectives • Our Objectives • Our Objectives • Our Objectives • Our Objectives • Our Objectives • Our Objectives • Our Objectives </p>
                    </SmartTicker>
                    
                    <section className="block">
                        <div className={`${CSS.objectiveCards} container`}>
                            {
                                OBJECTIVE_CARD_DATA &&
                                OBJECTIVE_CARD_DATA.map( (card, index) => (
                                    <ObjectiveCard 
                                        key={index} 
                                        heading={card.heading} 
                                        body={card.body} 
                                        delay={index * 0.1}
                                    />
                                ))
                            }
                        </div>
                    </section>
                </section>



                {/* featured speakers */}

                <SpeakerCarousel 
                    heading={`Featured Speakers`} 
                    color={`c-white`}
                    text={``}
                    decal={'bg-theme'}
                    ctaLink={'/sa/speakers'}
                    ctaLabel={'View All Speakers'}
                >
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'/assets/img/sa/nextgen-forum/abeer-green.jpg'}
                            fullName={'Dr. Abeer Alamri'}
                            jobTitle={'Skills Development and Talent Optimization Expert'}
                            company={''}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://static.swapcard.com/public/images/6f7ac5e6899849429e30e768190d52aa.jpeg'}
                            fullName={'Lameese Damiri'}
                            jobTitle={'Head of Education'}
                            company={'UN Tourism'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://cdn-api.swapcard.com/public/images/3e48bf508a3f4f5a855d9b179a19b4ec.jpeg'}
                            fullName={'Louis Nicolas Barrios'}
                            jobTitle={'Regional Manager, Innovation, Education and Investment'}
                            company={'UN Tourism'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'/assets/img/sa/nextgen-forum/dr-fabien.jpg'}
                            fullName={'Dr. Fabien Fresnel'}
                            jobTitle={'CEO'}
                            company={'Riyadh School of Tourism and Hospitality'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://static.swapcard.com/public/images/839a45698a0e4ad6b590ac1fdf344483.jpeg'}
                            fullName={'Adrian Artimov'}
                            jobTitle={'VP Enrollment'}
                            company={'Sommet Education'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://cdn-api.swapcard.com/public/images/431472c4cc334203850dac4f47ff261d.jpeg'}
                            fullName={'Glenn Mandziuk'}
                            jobTitle={'Chief Executive Officer'}
                            company={'World Sustainable Hospitality Alliance'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://cdn-api.swapcard.com/public/images/e83e40532f97441986d87e699f53d5e6.jpeg'}
                            fullName={'Paul Griep'}
                            jobTitle={'Director of alumni & Industry'}
                            company={'Hotelschool The Hague'}
                        />
                    </Pop>
                    
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://cms.thebench.com/assets/img/avatars/Andre_2024-07-18-073246_blrk.jpg'}
                            fullName={'Andre Wiringa'}
                            jobTitle={'Chief Reverse Engineer'}
                            company={'Start Reverse'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'/assets/img/sa/nextgen-forum/aj-singh.jpg'}
                            fullName={'A.J Singh'}
                            jobTitle={'Founding Director'}
                            company={'Hospitality and Tourism Management'}
                        />
                    </Pop>
                    <Pop>
                        <SpeakerCard
                        color={'c-accent'}
                            photoUrl={'https://cdn-api.swapcard.com/public/images/92f3ad3bab5d49eebb2b626ffb308ba2.jpeg'}
                            fullName={'Joe Tabet'}
                            jobTitle={'CEO & Managing Director'}
                            company={'JT+Partners'}
                        />
                    </Pop>
                </SpeakerCarousel>



                {/* components */}

                <section className="bg-pattern-blue pt-md">
                    <SmartTicker speed={180}>
                        <p className='fs-0 c-secondary caps'>• Key Components • Key Components • Key Components • Key Components • Key Components • Key Components • Key Components • Key Components </p>
                    </SmartTicker>

                    <div className="block">
                        <div className="container columns-4 gap-sm">
                            {
                                COMPONENT_CARD_DATA &&
                                COMPONENT_CARD_DATA.map( (card, index) => (
                                    <ComponentCard 
                                        key={index} 
                                        imageUrl={card.imageUrl} 
                                        heading={card.heading} 
                                        body={card.body} 
                                        delay={index * 0.05}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>



                {/* goals */}

                <section className="bg-theme pt-md">
                    <SmartTicker speed={180}>
                        <p className='fs-0 caps'>• Key Goals • Key Goals • Key Goals • Key Goals • Key Goals • Key Goals • Key Goals • Key Goals </p>
                    </SmartTicker>

                    <div className="block">
                        <div className="container maxw-45 center formatted fs-5">
                            <p className=' fw-600'>The NextGen Investment Forum aims to inspire top leaders to come together and tackle the most pressing questions surrounding education, training, and talent retention in Saudi Arabia&apos;s hospitality industry.</p>
                            <p>The afternoon will feature a dynamic series of roundtable discussions centered on key themes:</p>
                        </div>
                        <div className="container columns-4 gap-sm">
                            <GoalCard body={"Investing in Our People for a Future-Ready Hospitality Industry"}/>
                            <GoalCard body={"Bridging the Gap Between Academia and Industry Needs"} delay={.05}/>
                            <GoalCard body={"Exploring Funding and Investment Opportunities in Hospitality Education"} delay={.1}/>
                            <GoalCard body={"Enhancing the Industry's Appeal to Retain Talent and Reduce Turnover"} delay={.15}/>
                        </div>
                        <div className="container maxw-45 center fs-5">
                            <p>This engaging format will foster collaboration and actionable insights to shape the future of the sector.</p>
                        </div>
                    </div>
                </section>



                {/* agenda */}

                <section className="block bg-primary" style={{ width: '100%', overflow: 'hidden' }}>
                    <div className="container center">
                        <Pop><p className='fs-1 fw-600 c-accent'>2025 NextGen Forum Programme</p></Pop>
                    </div>
                    <div className="container columns-1 gap-sm maxw-50">
                       {
						buildAgenda(NEXTGEN_SESSIONS).map( (day, index) => (
							<section key={index}>
							
									<aside>
										<Pop>
											<p className={agendaCSS.dayDivider}>{ day.day }</p>
										</Pop>
									</aside>

									<main className='mt-sm'>
										<div className={agendaCSS.sessions}>
											<SessionGroup>
												{
													day.timeslots.map( timeslot => (
														<Timeslot
															key={timeslot.time}
															startTime={timeslot.beginsAt} 
															endTime={timeslot.endsAt}
														>
															{
																timeslot.sessions.map( session => (
																	<Session 
																		key={session.id}
																		id={session.id}
																		title={session.titleTranslations[0].value}
																		location={getLocationTitleById(session)}
																		description={session.descriptionTranslations.length && session.descriptionTranslations[0].value}
																		speakers={session.speakers}
																	/>
																))
															}
														</Timeslot>
													))
												}
											</SessionGroup> 
										</div>
									</main>
							
							</section>
						))
					}
                    </div>
                </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'sa-2025'




const ChallengeCard = ({ imageUrl, title, bigImpact, impact, body }) => {
    return (
        <div className={CSS.challengeCardLayout}>
            <div className={CSS.challengeCardImage}>
                {
                    imageUrl &&
                    <Pop>
                        <div className={CSS.challengeCardImageContainer}>
                            <Image src={imageUrl} layout='fill'/>
                        </div>
                    </Pop>
                }
            </div>
            <div className={CSS.challengeCardContent}>
                <Pop><p className='fs-3 fw-600'>{title}</p></Pop>
            
                <Slide>
                    <p className='fs-0 lh-1 fw-300 c-accent'>{bigImpact}</p>
                    <p className='fs-2 lh-1 fw-300 c-accent'>{impact}</p>
                </Slide>
            
                <Slide delay={.2} direction='up'><p className='fs-6'>{parse(body)}</p></Slide>
            </div>
        </div>
    )
}

const ObjectiveCard = ({ heading, body, delay }) => {
    return (
        <motion.div 
            className={CSS.objectiveCardLayout}
            initial={{ scale: .25, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.25, delay }}
        >
            <div className={CSS.pulse}>
                <div className={CSS.pulseRing} />
            </div>
            
            <div className={CSS.objectiveCardHeader}>
                <p className='fs-4 fw-500 lh-3'>{heading}</p>
            </div>
            <div className={CSS.objectiveCardBody}>
                <p>{body}</p>
            </div>
        </motion.div>
    )
}

const ComponentCard = ({ imageUrl, heading, body, delay }) => {
    return (
        <motion.div 
            className={CSS.componentCardLayout}
            initial={{ scale: .25, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.25, delay }}
        >
            <div className={CSS.componentCardImage}>
                <Image src={imageUrl} layout='fill'/>
            </div>
            <div className={CSS.componentCardBody}>
                <p className='fs-5 fw-600 c-secondary lh-1'>{heading}</p>
                <p className='mt-xs'>{body}</p>
            </div>
        </motion.div>
    )
}

const GoalCard = ({ body, delay }) => {

    if (!body) return

    return (
        <Pop delay={delay}>
            <div className={CSS.goalCardLayout}>
                <p className='fs-5 fw-600 center'>{ body }</p>
            </div>
        </Pop>
    )
}

export const SessionGroup = ({ location, children }) => {

	if ( !children ) return

	return (
		<div className={agendaCSS.sessionGroupContainer} style={{ borderColor: location?.color, backgroundColor: location?.color }}>
			{
				location?.title &&
				<p className={`${agendaCSS.sessionGroupHeader} | fs-5`}>{ location.title }</p>
			}

			<div className={agendaCSS.sessionGroup}>
				{ children }
			</div>
		</div> 
	)
}

export const Session = ({ id, startTime, endTime, title, trackID, location, description, speakers }) => {

	return (
		<div className={agendaCSS.sessionsWrapper}>
			<div className={agendaCSS.session}>
				<div className={agendaCSS.sessionHeader}>
					<Duration startTime={startTime} endTime={endTime} />
					{ trackID && <Track trackID={trackID} />}
					{ location && <Location locationTitle={location}/>}
				</div>
				
				<div className={agendaCSS.sessionContent}>
					<Fade>
						<p className={`${agendaCSS.sessionTitle} | fs-5 fw-500 lh-1-1 c-white`}>
							{ title }
						</p>
					</Fade>
					{ description && description !== "<br />" ? parse(description) : null }
					{ speakers.length ? sortSpeakers(speakers) : null }
				</div>
			</div>
		</div>
	)
}

export const Timeslot = ({ startTime, endTime, trackID, children }) => {

	return (
		<div className={agendaCSS.timeslotWrapper}>
			{
				startTime ?
					<div className={agendaCSS.timeslotHeader}>
						<Duration startTime={startTime} endTime={endTime} />
						{ trackID && <Track trackID={trackID} />}
					</div>
				: null
			}
			{ children }
		</div>
	)
}

export const Feature = ({ children }) => {
	return (
		<div className={agendaCSS.featureWrapper}>
			{ children }
		</div>
	)
}

export const Duration = ({ startTime, endTime }) => {

	const convertSeconds = (seconds) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
	
		const hourString = hours > 0 ? `${hours}h` : ''
		const minuteString = minutes > 0 ? `${minutes}m` : ''
	
		if ( hours > 0 ) {
			return `${hourString} ${ minutes > 0 ? minuteString : ''}`

		} else if ( !hours && minutes > 0 ) {
			return `${minuteString}`

		}
	
		return
	}


	return (
		<>
			{ startTime && format( new Date(startTime), "HH:mm" ) } { startTime && endTime && "-"} { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				startTime &&  endTime ?
				<span>&ensp;<StopwatchIcon fill={'var(--primary-3)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
				: null
			}
		</>
	)
}

export const Track = ({ trackID }) => {

	const t = tracks.find( track => track.id === trackID )

	if ( !t ) return
	
	return (
		<p className={agendaCSS.tag} style={{ backgroundColor: t.color }}><TagIcon fill={'var(--primary'} />{ t.title }</p>
	)
}

export const Location = ({ locationTitle }) => {

	if ( !locationTitle ) return
	
	return (
		<Pop><p className={agendaCSS.tag} style={{ backgroundColor: 'white' }}><CompassIcon fill={'var(--primary'} />{ locationTitle }</p></Pop>
	)
}

export const Theme = ({ children }) => {
	return (
		<p className={agendaCSS.theme}>THEME: { children }</p>
	)
}




const SpeakerCard = ({ speaker, type }) => {

    if ( !speaker ) return

	const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

	return (
		<Pop>

			<div key={speaker.id} className={agendaCSS.sessionSpeaker}>
				{ type ? <p className="c-secondary fw-500 pb-xs">{ type }</p> : null }
				{
					speaker.photoUrl 
					?	<div className={`${agendaCSS.speakerPhoto} ${speaker.biography && agendaCSS.bio}`}
							onClick={() => {
								if ( speaker.biography ) {
									setModalContent({
										avatar: speaker.photoUrl,
										name: `${speaker.firstName} ${speaker.lastName}`,
										title: speaker.jobTitle,
										company: speaker.organization,
										bio: speaker.biography
									})
									setShowModal(true)
								}
							}}>
							{speaker.biography && <span><ProfileIcon /></span>}
							<img src={speaker.photoUrl} alt="" />
						</div>
					:	<div className={agendaCSS.speakerPhoto}><img src={`/assets/ui/avatar-fallback.png`} alt="" /></div>

				}
				<p className="fw-600">{ speaker.firstName } { speaker.lastName }</p>
				<p className="fs-sm lh-1">{ speaker.jobTitle }<br />{ speaker.organization }</p>
			</div>

			<Modal onClose={() => setShowModal(false)} show={showModal}>
				<div style={{ maxHeight: '80vh', overflowY: 'scroll', paddingRight: 10 }}>
					<p className="fs-5 fw-600">{ modalContent.name }</p>
					<p className="fs-sm">{ modalContent.title }<br />{ modalContent.company }</p>
					<p className="mt-xs">{modalContent.bio}</p>
				</div>
			</Modal>
		</Pop>
	)
}

const ProfileIcon = ({ color = 'var(--primary)' }) => {

	return (
		<svg width="100%" height="100%" viewBox="0 0 24 15" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit: 1.5 }}>
			<g id="icon-profile">
				<g id="icon-author">
					<circle cx="7.517" cy="5.135" r="3.763" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
					<path d="M1.351,12.932C2.39,10.558 4.761,8.897 7.517,8.897C10.273,8.897 12.644,10.558 13.684,12.932" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
				</g>
				<path d="M13.739,2.244L21.996,2.244" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
				<path d="M13.739,6.649L21.996,6.649" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
				<path d="M15.918,11.054L21.996,11.054" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
			</g>
		</svg>
	)
}

const sortSpeakers = ( speakerData ) => {

	if ( !speakerData ) return

	// console.log('speakerData:', speakerData)

	let moderators = []
	let speakers = []

	speakerData.forEach( speaker => {
		speaker.withEvent?.eventProfile.type !== 'Speaker' ? moderators.push( speaker ) : speakers.push( speaker )
	})


	if ( moderators.length && speakers.length ) return (
		<section>
			{
				moderators.length ?
					<div>
						<p className="fw-500 c-accent" style={{ padding: `0 0 15px 0`}}>Moderator{ moderators.length > 1 && 's'}</p>
						<div className={agendaCSS.sessionSpeakerGrid}>
							{ moderators.map( moderator => <SpeakerCard key={moderator.id} speaker={moderator} /> ) }
						</div>
					</div>
				: null
			}
			<div>
				{
					moderators.length && speakers.length ?
						<p className="fw-500 mt-xxs c-accent" style={{ padding: `0 0 15px 0`}}>In conversation with</p>
					: null
				}
				<div className={agendaCSS.sessionSpeakerGrid}>
					{ speakers.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
				</div>
			</div>

		</section>
	)

	return (
		<div className={agendaCSS.sessionSpeakerGrid}>
			{ speakerData.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2025,
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