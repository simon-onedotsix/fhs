import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'

import parse from 'html-react-parser'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitImage } from '../../fuselage/theme/2024/world/blocks/hero-unit-image/hero-unit-image'

import { ThemesSlider } from '../../fuselage/theme/2024/world/components/themes-slider/themes-slider'

import CSS from '../../fuselage/theme/2024/world/css/themes.module.css'



const THEMES_DATA = [
    {
        imageUrl: '/assets/img/brf/themes/global-investment.jpg',
        iconUrl: '/assets/img/brf/icons/global-investments.svg',
        title: 'Global Investments',
        body: '<p>Global investments shape the future of hospitality. With Country Pavilions, the industry will be able to dive into the trends, opportunities, and strategic decisions driving investment in key markets, setting the stage for sustained industry growth at FHS World 2024.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/projects.jpg',
        iconUrl: '/assets/img/brf/icons/projects-destinations.svg',
        title: 'Projects & Destinations',
        body: '<p>Learn about the big projects and destination tourism initiatives redefining the global hospitality landscape. Our event features focus on this theme to highlight development strategies and market trends that are creating the next generation of must-visit locations.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/wellness.jpg',
        iconUrl: '/assets/img/brf/icons/wellness-tourism.svg',
        title: 'Wellness & Medical Tourism',
        body: '<p>Dubai&apos;s broader tourism strategy aims to attract 500,000 medical tourists by the end of 2025. This niche is brimming with potential but what is required to truly leverage its benefits and popularity? We will delve into innovations that are redefining health-focused travel, making it a cornerstone of the global hospitality landscape.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/branding.jpg',
        iconUrl: '/assets/img/brf/icons/branding-strategies.svg',
        title: 'Branding Strategies',
        body: '<p>The hospitality industry is a crowded marketplace like any other. Effective branding is crucial to survive. This theme focuses on the strategies that build powerful brands, creating a legacy and driving loyalty in the competitive hospitality sector.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/sustainability.jpg',
        iconUrl: '/assets/img/brf/icons/sustainability.svg',
        title: 'Sustainability & Innovation',
        body: '<p>Exploring the intersection of sustainability and innovation, with this theme we aim to highlight how cutting-edge solutions are being implemented to meet the growing demand for eco-friendly practices. FHS World 2024 will deconstruct their growth trends, demand and integration from a dynamic perspective.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/technology.jpg',
        iconUrl: '/assets/img/brf/icons/technology.svg',
        title: 'Technology & AI',
        body: '<p>Technology and AI are transforming hospitality at every level. Join us to examine the latest advancements, from AI-driven customer service to smart hotel management systems, and how they are revolutionising guest experiences, hotel properties and hospitality investments.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/branded-residences.jpg',
        iconUrl: '/assets/img/brf/icons/branded-residences.svg',
        title: 'Branded Residences',
        body: '<p>The Branded Residences sector is expanded exponentially. As part of our agenda and the Branded Residences Forum, we&apos;re focused on covering the strategies behind their success. FHS World is the place to be to discover on how they combine the prestige of renowned brands with the comforts of home to create unparalleled residential experiences.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/restaurant.jpg',
        iconUrl: '/assets/img/brf/icons/restaurant-investment.svg',
        title: 'Restaurant Investment',
        body: '<p>Investing in the future of dining, this theme focuses on the opportunities and challenges in the restaurant sector, from emerging trends to the business models driving growth in a rapidly evolving market.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/woman-leader.jpg',
        iconUrl: '/assets/img/brf/icons/women-leadership.svg',
        title: 'Women Leadership',
        body: '<p>Join us in creating a better and stronger future as we concentrate efforts on advancing women in hospitality. We want to highlight the impact of women leaders in hospitality and facilitate more women leaders to break past the &apos;broken rung&apos;.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/education.jpg',
        iconUrl: '/assets/img/brf/icons/education-investment.svg',
        title: 'Education Investment',
        body: '<p>Investing in education is investing in the future. FHS World will focus on the critical role of education in hospitality, from talent development to leadership training, ensuring the industry&apos;s continued growth and success.</p>'
    },
    {
        imageUrl: '/assets/img/brf/themes/green-city.jpg',
        iconUrl: '/assets/img/brf/icons/green-construction.svg',
        title: 'Green Construction & Smart Cities',
        body: '<p>Pioneering the future of urban living, our agenda will dive into the nuances of integrating green construction and smart technologies. Green construction has kickstarted the transformation of cities into sustainable, intelligent environments that enhance the quality of life and drive long-term growth. Join us to explore how this change is adapted by the hospitality industry.</p>'
    }
]




export default function Themes () {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>
        
            <Header compact />


            <HeroUnitImage imageUrl={'/assets/site/ae/hero-about-fhs-world.jpg'}>
                <p className='fs-1 fw-600 center'>FHS 2024 Themes</p>
            </HeroUnitImage>

            <ThemesLayout>
                { THEMES_DATA.map( (theme, index) => <ThemeCard key={index} imageUrl={theme.imageUrl} iconUrl={theme.iconUrl} title={theme.title} body={theme.body} />) }
            </ThemesLayout>


            <ThemesSlider data={THEMES_DATA} />


            <Footer />
            <LenisScroller />
        </>
    )
}

Themes.theme = 'world-2024'





// COMPONENTS –––––––––––––––––––––––––––––––––––––––––


export const ThemesLayout = ({ children }) => {
    return (
        <section className="block pt-0" style={{ position: 'relative', zIndex: 5 }}>

            <p className='fs-5 fw-400 c-secondary ls-3 center'>EXPLORE</p>
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
                                <path vectorEffect="non-scaling-stroke" d="M2577.47,884.939L2597.97,925.943L2556.97,925.943L2577.47,884.939Z" style={{ fill:'none', stroke:'rgb(226,53,66)', strokeWidth: 1 }}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export const ThemeCard = ({ iconUrl, imageUrl, title, body }) => {
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
                    className='fs-2 fw-400 lh-1 c-secondary mb-sm'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25, delay: 0.1 }}
                >
                    {title}
                </motion.p>

                <motion.div 
                    className="formatted fs-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25, delay: 0.2 }}
                >
                    { body && parse(body) }
                </motion.div>
            </div>

        </div>
    )
}