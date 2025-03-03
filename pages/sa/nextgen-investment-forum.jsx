import { useRef } from 'react'

import Image from 'next/image'

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
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'
import { ButtonKeyline } from '../../fuselage/theme/2024/world/components/button-keyline/button-keyline'


import CSS from '../../fuselage/theme/2025/sa/css/nextgen-investment-forum.module.css'


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




export default function Page () {

    // scroll animation
    let introRef = useRef(null)
    let headerScroll = useScroll({ 
        target: introRef,
        offset: ["start 100%", "end 0%"]
    })
    let g1 = useTransform( headerScroll.scrollYProgress, [0, 1], ["-15%", "20%"])
    let g2 = useTransform( headerScroll.scrollYProgress, [0, 1], ["-15%", "40%"])


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

                            <div className="container">
                                <p className='fs-5 caps center'>Co-located with:</p>
                                <Pop>
                                    <FhsLockup 
                                        inverse 
                                        sectorLabel={"Saudi Arabia"} 
                                        sectorColor={"var(--accent)"} 
                                        topColor={"var(--secondary)"}
                                    />
                                </Pop>
                            </div>
                        </PageHeroImage>
                    </div>

                


                    {/* challenges */}

                    <section className="block bg-primary" style={{ width: '100%', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div className="container">
                                <p className='fs-0 center'>Hospitality Education: Challenges</p>
                            </div>
                            <div className={`${CSS.challengeCards} container maxw-60 pt-sm`}>
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
                    </section>

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


                <section className="block bg-theme">
                    <div className="container center">
                        <p className='fs-0'>Featured Speakers</p>
                    </div>
                    <div className="container center columns-5 gap-md">
                        <Pop>
                            <SpeakerCard
                            color={'c-accent'}
                                photoUrl={'/assets/img/sa/nextgen-forum/abeer-green.jpg'}
                                fullName={'Dr. Abeer A. Alamri'}
                                jobTitle={'Strategic Planning and Monitoring Deputyship'}
                                company={'Ministry of Tourism'}
                            />
                        </Pop>
                        <Pop delay={.05}>
                            <SpeakerCard
                            color={'c-accent'}
                                photoUrl={'/assets/img/sa/nextgen-forum/dr-fabien.jpg'}
                                fullName={'Dr. Abeer A. Alamri'}
                                jobTitle={'CEO'}
                                company={'Riyadh School of Tourism and Hospitality'}
                            />
                        </Pop>
                        <Pop delay={.1}>
                            <SpeakerCard
                            color={'c-accent'}
                                photoUrl={'/assets/img/sa/nextgen-forum/aj-singh.jpg'}
                                fullName={'A.J Singh'}
                                jobTitle={'Founding Director'}
                                company={'Hospitality and Tourism Management'}
                            />
                        </Pop>
                        <Pop delay={.2}>
                            <SpeakerCard
                            color={'c-accent'}
                                photoUrl={'https://static.swapcard.com/public/images/6f7ac5e6899849429e30e768190d52aa.jpeg'}
                                fullName={'Lameese Damiri'}
                                jobTitle={'Head of Education'}
                                company={'UN Tourism'}
                            />
                        </Pop>
                        <Pop delay={.15}>
                            <SpeakerCard
                            color={'c-accent'}
                                photoUrl={'https://cdn-api.swapcard.com/public/images/3e48bf508a3f4f5a855d9b179a19b4ec.jpeg'}
                                fullName={'Louis Nicolas Barrios'}
                                jobTitle={'Regional Manager, Innovation, Education and Investment'}
                                company={'UN Tourism'}
                            />
                        </Pop>
                        
                    </div>
                    <div className="container center">
                        <Pop inline>
                            <ButtonKeyline 
                                href={'/sa/speakers'} 
                                decal={'fs-5 fw-600'} 
                                color={'var(--secondary)'}
                            >
                                View All Speakers
                            </ButtonKeyline>
                        </Pop>
                    </div>
                </section>


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
                       <Slide> <p className='fs-4 fw-600'>EIF Main Stage Program</p></Slide>
                        <SessionGroup>
                            <Session times={"15:00 - 15:10"} title={"Welcome Remarks to NextGen: Investing in Saudi's Hospitality Education"} />
                            <Session times={"15:10 - 15:20"} title={"Keynote - Hospitality Talent in Saudi Arabia: A Data-Driven Overview"}/>
                            <Session times={"15:20 - 15:40"} title={"Education Meets Industry - Key Skills for the Future of Saudi Workforce"}/>
                            <Session times={"15:40 - 16:00"} title={"Hospitality Workforce of the Future: Anticipating Trends and Building Resilience"}/>
                        </SessionGroup>
                        
                        <div>
                            <Slide><p className='fs-4 fw-600 mt-xs'>Series of Round Tables</p></Slide>
                            <Slide delay={.1}><p className='fs-5 fw-400 c-accent mt-xxs'><strong>Future Stage</strong>: Enhancing strategies for talent retention</p></Slide>
                        </div>
                        <SessionGroup>
                            <Session times={"16:00 - 16:45"} title={"How Can We Rebrand Hospitality Careers to Attract Saudi Youth?"}/>
                            <Session times={"17:00 - 17:45"} title={"How Can Public-Private Partnerships in Hospitality Training Help Build Saudi Arabia's Workforce of the Future?"}/>
                        </SessionGroup>
                        
                        <Slide><p className='fs-5 fw-400 c-accent mt-xxs'><strong>Meeting Room 1</strong>: Hospitality Education and Real Estate Investment</p></Slide>
                        <SessionGroup>
                            <Session times={"16:00 - 16:45"} title={"Where Are the Investment Opportunities in Hospitality Education Real Estate?"}/>
                            <Session times={"17:00 - 17:45"} title={"How Can Student Housing Be Designed to Meet the Needs of Future Hospitality Professionals?"}/>
                        </SessionGroup>
                        
                        <Slide><p className='fs-5 fw-400 c-accent mt-xxs'><strong>Meeting Room 2</strong>: Deep dive into training</p></Slide>
                        <SessionGroup>
                            <Session times={"16:00 - 16:45"} title={"How Can Hospitality Schools Adapt Their Curriculum to Meet Industry Trends and Standards?"}/>
                            <Session times={"16:45 - 17:15"} title={"How Can Technology Enhance Hospitality Training and Skill Development?"}/>
                            <Session times={"17:15 - 18:00"} title={"What Are the Best Models for Ongoing Professional Development in Hospitality?"}/>
                        </SessionGroup>
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
                    <p className='fs-xl lh-1 fw-300 c-accent'>{bigImpact}</p>
                    <p className='fs-1 lh-1 fw-300 c-accent'>{impact}</p>
                </Slide>
            
                <Slide delay={.2} direction='up'><p className='fs-5'>{parse(body)}</p></Slide>
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

const SessionGroup = ({ children }) => {
    return (
        <Pop>
            <div className={CSS.sessionGroup}>
                { children }
            </div>
        </Pop>
    )
}

const Session = ({ times, title }) => {
    return (
        <div className={CSS.session}>
            <div className={CSS.sessionTimes}>
                <p>{times}</p>
            </div>
            <div className={CSS.sessionBody}>
                <p className='fs-5 fw-400'>{title}</p>
            </div>
        </div>
    )
}
