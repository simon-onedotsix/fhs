import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'

import parse from 'html-react-parser'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitImage } from '../../fuselage/theme/2024/world/blocks/hero-unit-image/hero-unit-image'

import CSS from '../../fuselage/theme/2024/world/css/themes.module.css'




const THEMES_DATA = [
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Green Construction & Smart Cities',
        body: '<p>Pioneering the future of urban living, our agenda will dive into the nuances of integrating green construction and smart technologies. Green construction has kickstarted the transformation of cities into sustainable, intelligent environments that enhance the quality of life and drive long-term growth. Join us to explore how this change is adapted by the hospitality industry.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Wellness & Medical Tourism',
        body: '<p>Dubai&apos;s broader tourism strategy aims to attract 500,000 medical tourists by the end of 2025. This niche is brimming with potential but what is required to truly leverage its benefits and popularity? We will delve into innovations that are redefining health-focused travel, making it a cornerstone of the global hospitality landscape.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Branding Strategies',
        body: '<p>The hospitality industry is a crowded marketplace like any other. Effective branding is crucial to survive. This theme focuses on the strategies that build powerful brands, creating a legacy and driving loyalty in the competitive hospitality sector.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Sustainability & Innovation',
        body: '<p>Exploring the intersection of sustainability and innovation, with this theme we aim to highlight how cutting-edge solutions are being implemented to meet the growing demand for eco-friendly practices. FHS World 2024 will deconstruct their growth trends, demand and integration from a dynamic perspective.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Technology & AI',
        body: '<p>Technology and AI are transforming hospitality at every level. Join us to examine the latest advancements, from AI-driven customer service to smart hotel management systems, and how they are revolutionising guest experiences, hotel properties and hospitality investments.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Branded Residences',
        body: '<p>The Branded Residences sector is expanded exponentially. As part of our agenda and the Branded Residences Forum, we&apos;re focused on covering the strategies behind their success. FHS World is the place to be to discover on how they combine the prestige of renowned brands with the comforts of home to create unparalleled residential experiences.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Restaurant Investment',
        body: '<p>Investing in the future of dining, this theme focuses on the opportunities and challenges in the restaurant sector, from emerging trends to the business models driving growth in a rapidly evolving market.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Women Leadership',
        body: '<p>Join us in creating a better and stronger future as we concentrate efforts on advancing women in hospitality. We want to highlight the impact of women leaders in hospitality and facilitate more women leaders to break past the &apos;broken rung&apos;.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Global Investments',
        body: '<p>Global investments shape the future of hospitality. With Country Pavilions, the industry will be able to dive into the trends, opportunities, and strategic decisions driving investment in key markets, setting the stage for sustained industry growth at FHS World 2024.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Projects & Destinations',
        body: '<p>Learn about the big projects and destination tourism initiatives redefining the global hospitality landscape. Our event features focus on this theme to highlight development strategies and market trends that are creating the next generation of must-visit locations.</p>'
    },
    {
        imageUrl: '/image',
        iconUrl: '/icon',
        title: 'Education Investment',
        body: '<p>Investing in education is investing in the future. FHS World will focus on the critical role of education in hospitality, from talent development to leadership training, ensuring the industry&apos;s continued growth and success.</p>'
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


            <Footer />
            <LenisScroller />
        </>
    )
}

Themes.theme = 'world-2024'




export const ThemesLayout = ({ children }) => {
    return (
        <section className="block pt-0">

            <p className='fs-5 fw-400 c-secondary ls-3 center'>EXPLORE</p>
            
            <div className={`${CSS.layout} container`}>
                <span className={CSS.keyline} />
                {children}
            </div>
        </section>
    )
}




export const ThemeCard = ({ iconUrl, imageUrl, title, body }) => {
    return (
        <div className={CSS.card}>
            <div className={CSS.iconWrapper}>{iconUrl}</div>

            <div className={CSS.image}>
                <div className={CSS.imageWrapper}>
                    {imageUrl}
                </div>
            </div>

            <div className={CSS.content}>
                <p className='fs-3 fw-400 c-secondary mb-xs'>{title}</p>
                <div className="formatted">
                    { body && parse(body) }
                </div>
            </div>

        </div>
    )
}