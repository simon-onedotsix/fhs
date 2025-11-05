import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import _ from 'lodash'

import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { HeroUnitVideo } from "../../fuselage/theme/2025/sa/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { ArticleScroller, Article } from "../../fuselage/theme/2025/sa/blocks/article-scroller/article-scroller"
import { SectionHeading } from "../../fuselage/theme/2025/sa/components/section-heading/section-heading"
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { ImpactGrid, ImpactFigure, TitleBlock, ImageBlock } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { Award } from "../../fuselage/icons/award"
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { Logo } from "../../fuselage/theme/2025/sa/blocks/logo-ticker/logo-ticker"
import { PopOver } from "../../fuselage/components/popover/popover"

import Ticker from 'framer-motion-ticker'

import { FixedBackgroundImage } from "../../fuselage/theme/2025/ais/blocks/fixed-background-image/fixed-background-image"


import { 
    QueryText, 
    QueryFlipFlops, 
    QueryFloaters, 
    QueryBillboards, 
    QueryBillboardSliders, 
    QueryImpactFigures, 
    QueryVideos,
    QueryForm,
	QueryProfileCarousel,
	QueryCards,
    QuerySEO,
    QueryImages,
	QueryPartnerGroups
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'

import CSS from '../../fuselage/theme/2025/sa/css/homepage.module.css'

import { THEMES_DATA } from "./themes"

const ARTICLE_DATA = [
    {
        heroUrl: '/assets/img/sa/press-release-1.webp',
        title: 'Rua Al Madinah Holding Signs Agreement With Hilton To Open Three Hotels At Rua Al Madinah Project',
        excerpt: 'Rua Al Madinah Holding has signed an agreement with Hilton to open three hotels comprising of over 1600 keys.',
        url: '/sa/content-library/rua-al-madinah-holding-signs-agreement-with-hilton-to-open-three-hotels-at-rua-al-madinah-project',
    },
    {
        heroUrl: '/assets/img/sa/press-release-2.webp',
        title: 'Radisson Hotel Group accelerates expansion strategy in Saudi Arabia with focus on holy cities',
        excerpt: 'Radisson Hotel Group continues to intensify its efforts in the Kingdom of Saudi Arabia, aligning with the Saudi 2030 vision for hospitality.',
        url: '/sa/content-library/radisson-hotel-group-accelerates-expansion-strategy-in-saudi-arabia-with-focus-on-holy-cities',
    },
    {
        heroUrl: '/assets/img/sa/press-release-3.webp',
        title: 'Accor spearheads hospitality expansion throughout Saudi Arabia',
        excerpt: "As the largest hotel operator in Saudi Arabia, Accor is spearheading a strategic transformation of the country's tourism sector, marking a new era of hospitality in the Kingdom.",
        url: '/sa/content-library/accor-spearheads-hospitality-expansion-throughout-saudi-arabia-2',
    },
    {
        heroUrl: '/assets/img/sa/press-release-4.webp',
        title: 'Marriott International and Al Qimmah Hospitality Sign Agreement to Open a JW Marriott Hotel in Jeddah',
        excerpt: 'Marriott International, Inc. and Al Qimmah Hospitality (a subsidiary of BinDawood Trading) today announced the signing of an agreement to introduce the JW Marriott brand in Jeddah. Situated on the Jeddah Corniche, JW Marriott Hotel Jeddah is anticipated to be a haven for travelers who seek a luxury escape to the waterfront destination, paired with exceptional service and holistic well-being experiences.',
        url: '',
    }
]
const ARTICLE_DATA_AR = [
    {
        heroUrl: '/assets/img/sa/press-release-1.webp',
        title: 'شركة رؤى المدينة القابضة توقع اتفاقية مع هيلتون لافتتاح ثلاثة فنادق في مشروع رؤى المدينة',
        excerpt: 'وقّعت شركة رؤى المدينة القابضة اتفاقية مع هيلتون لافتتاح ثلاثة فنادق تضم أكثر من 1600 غرفة.',
        url: '/sa/content-library/rua-al-madinah-holding-signs-agreement-with-hilton-to-open-three-hotels-at-rua-al-madinah-project',
    },
    {
        heroUrl: '/assets/img/sa/press-release-2.webp',
        title: 'مجموعة فنادق راديسون تسرّع استراتيجيتها التوسعية في المملكة العربية السعودية مع التركيز على المدن المقدسة',
        excerpt: 'تواصل مجموعة فنادق راديسون تكثيف جهودها في المملكة العربية السعودية، بما يتماشى مع رؤية السعودية 2030 لقطاع الضيافة.',
        url: '/sa/content-library/radisson-hotel-group-accelerates-expansion-strategy-in-saudi-arabia-with-focus-on-holy-cities',
    },
    {
        heroUrl: '/assets/img/sa/press-release-3.webp',
        title: 'أكور تقود عملية توسع قطاع الضيافة في جميع أنحاء المملكة العربية السعودية',
        excerpt: "بصفتها أكبر مشغل فنادق في المملكة، تقود أكور تحولًا استراتيجيًا في قطاع السياحة، مما يمثل عهدًا جديدًا من الضيافة في المملكة.",
        url: '/sa/content-library/accor-spearheads-hospitality-expansion-throughout-saudi-arabia-2',
    },
    {
        heroUrl: '/assets/img/sa/press-release-4.webp',
        title: 'ماريوت الدولة والقمّة للضيافة توقعان اتفاقية لافتتاح فندق جي دبليو ماريوت في جدة',
        excerpt: 'أعلنت شركة ماريوت الدولية، بالشراكة مع القمّة للضيافة (إحدى شركات مجموعة بن داود القابضة)، عن توقيع اتفاقية لإطلاق علامة جي دبليو ماريوت في جدة. سيتمتع الفندق بموقع مميز على كورنيش جدة، ليكون وجهة فاخرة للمسافرين الباحثين عن تجربة إقامة راقية على الواجهة البحرية تجمع بين الفخامة والخدمات المتميزة والرفاهية الشاملة.',
        url: '',
    }
]
const SPEAKER_DATA = [
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU=`,
        photoUrl: 'https://static.swapcard.com/public/images/0f3466754aec406ab2b64862743c639f.jpeg',
        fullName: 'HH Prince Bandar bin Saud bin Khalid Al Saud',
        jobTitle: 'Secretary General, King Faisal Foundation (KFF) | Chairman of the Board of Directors, Al Khozama Investment Company',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzk1MDI0MTI=`,
        photoUrl: 'https://static.swapcard.com/public/images/56724beae060457ea3b07e98cba20646.jpeg',
        fullName: 'Mahmoud Abdulhadi',
        jobTitle: 'Deputy Minister, Destination Enablement',
        company: 'Ministry of Tourism of Saudi Arabia',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzY5MzgxNzg=`,
        photoUrl: 'https://static.swapcard.com/public/images/ab06795985174d609056ebd5d02c872e.jpeg',
        fullName: 'Hossam Al-Basrawi',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzcwNDU3NDA=`,
        photoUrl: 'https://static.swapcard.com/public/images/be577fb8e2b044c98cc51dc0dc10fb55.jpeg',
        fullName: 'Nikolina Angelkova',
        jobTitle: 'Former Minister Tourism, Bulgaria | Owner and CEO, Angelkova law and Consultancy office',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1ODUwMzU=`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Inzerillo_Jerry_cr.jpg',
        fullName: 'Jerry Inzerillo',
        jobTitle: 'Group Chief Executive Officer, Diriyah Gate Company Limited | Vice Chairman, Forbes Travel Guide',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc5MDEyNjk=`,
        photoUrl: 'https://static.swapcard.com/public/images/7ffaec8014ff4f33bd453f98c0e67b51.jpeg',
        fullName: 'Nick Candy',
        jobTitle: 'Chief Executive Officer',
        company: 'Candy Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1OTk1ODI=`,
        photoUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        fullName: 'Maud Bailly',
        jobTitle: 'Chief Executive Officer',
        company: 'Sofitel Legend, Sofitel, MGallery & Emblems',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1ODUwMzU=`,
        photoUrl: 'https://static.swapcard.com/public/images/a96df3d5f0c84807a351df07dfc4e15c.jpeg',
        fullName: 'Dr. Abeer Alamri',
        jobTitle: 'Skills Development and Talent Optimization Expert',
        company: '',
    },
    {
        url: `/sa/speakers/profile/khalid-saud-abu-haimed`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Abu-Haimed_Khalid-Saud_pic2.jpg',
        fullName: 'Khalid Saud Abu Haimed',
        jobTitle: 'Chief Executive Officer',
        company: 'Al Khozama Investment Company',
    },
    {
        url: `/sa/speakers/profile/mae-al-mozaini`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Mozaini_Mae_hi-res-photo.jpeg',
        fullName: 'Mae Al Mozaini',
        jobTitle: 'Founder & CEO',
        company: 'The Arab Institute for Women’s Empowerment - Nusf',
    },
    {
        url: `/sa/speakers/profile/norah-al-tamimi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Tamimi_Norah_sq.jpg',
        fullName: 'Norah Al Tamimi',
        jobTitle: 'Co-Founder',
        company: 'AWN',
    },
    {
        url: `/sa/speakers/profile/qusai-al-fakhri`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/MicrosoftTeams-image-1.png',
        fullName: 'Qusai Al-Fakhr',
        jobTitle: 'Chief Executive Officer',
        company: 'Tourism Development Fund',
    },
    
]
const PHOTOS_DATA = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/sa/photos/2025-01.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/sa/photos/2025-02.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/sa/photos/2025-03.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/sa/photos/2025-04.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/sa/photos/2025-05.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/sa/photos/2025-06.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/sa/photos/2025-07.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/sa/photos/2025-08.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/sa/photos/2025-09.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    }
]
const AB_DATA = [
    {
        url: `/sa/speakers/profile/mohammad-al-athel`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Athel_Mohammad_photo.jpg',
        fullName: 'Mohammad Alathel',
        jobTitle: 'Founder and Managing Director',
        company: 'Amsa Hospitality',
    },
    {
        url: `/sa/speakers/profile/sultan-alotaibi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Taiba-INvestments.jpg',
        fullName: 'Sultan Alotaibi',
        jobTitle: 'Chief Executive Officer',
        company: 'Taiba Investments',
    },
    {
        url: `/sa/speakers/profile/sarah-gasim`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Gasim_Sarah_red.jpg',
        fullName: 'Sarah Gasim',
        jobTitle: 'Senior Vice President - Head of Hotels and Hospitality KSA',
        company: 'JLL',
    },
    {
        url: `/sa/speakers/profile/haifaa-alzahrani`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/IMG_3406.jpeg',
        fullName: 'Haifaa Alzahrani',
        jobTitle: 'Head of Hospitality Asset Management and Partnership',
        company: 'Thakher Development',
    },
    {
        url: `/sa/speakers/profile/hassan-ahdab`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Ahdab_Hassan.jpg',
        fullName: 'Hassan Ahdab',
        jobTitle: 'Chief Hospitality Operations Officer',
        company: 'Taiba Investments',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzk0MjU2ODU=`,
        photoUrl: 'https://cdn-api.swapcard.com/public/images/5d687c7d1bd34fe383f0c0a3ba7da1c4.jpeg',
        fullName: 'Sebastian Carre',
        jobTitle: 'Group Head of Hospitality-Operations',
        company: 'Red Sea Globa',
    },
    {
        url: `/sa/speakers/profile/wahdan-alkadi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/WAHDAN.webp',
        fullName: 'Wahdan Alkadi',
        jobTitle: 'Chief Executive Officer',
        company: 'Events Investment Fund',
    },
    {
        url: `/sa/speakers/profile/samer-sabra`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/322541D7-4233-48BA-8AB5-766F54358317.jpeg',
        fullName: 'Samer Sabra',
        jobTitle: 'Chief of Hospitality Officer',
        company: 'Jabal Omar Development Company',
    },
    
]

export default function Home ({ entry, seomatic, contentBlocks, partners, abVideos }) {


    const { locale } = useRouter()

    // console.log('entry:', entry)
    // console.log('partners:', partners)


    // scroll animation
    let introRef = useRef(null)
    let headerScroll = useScroll({ 
        target: introRef,
        offset: ["start 100%", "end 0%"]
    })
    let g1 = useTransform( headerScroll.scrollYProgress, [0, 1], ["-15%", "20%"])
    let g2 = useTransform( headerScroll.scrollYProgress, [0, 1], ["-15%", "40%"])


    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
			</Head>
        
            <Header overlaid inverse />


            {/* INTRO */}
            <div ref={introRef} className={CSS.themeWrapper}>
                {/* <motion.img className={CSS.deco01} src="/assets/theme/sa-2025/gfk-01.svg" alt="" style={{ y: g1 }}/>
                <motion.img className={CSS.deco02} src="/assets/theme/sa-2025/gfk-01.svg" alt="" style={{ y: g2 }}/> */}

                <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2025-sa-wrap-up-opt.mp4'} poster={'/assets/video/fhs-2025-sa-wrap-up-poster.jpg'}>
                    
                    <motion.p 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                        className={`${CSS.headline} fs-xl fw-900 c-white lh-1 center mx-auto`}
                    >
                        Where Opportunity Meets&nbsp;Capital
                        
                    </motion.p>

                    <motion.p 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                        className={`fs-4 fw-300 c-white center mt-xs`} 
                    >
                        20-22 April 2026, Mandarin Oriental Al Faisaliah, Riyadh
                        
                    </motion.p>

                    <Fade>
                        <div className="mt-md center button-grid w-100pc">
                            <Pop inline>
                                <Button 
                                    href={'/sa/post-event-resources-2025'} 
                                    theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                    decal={'fs-5 fw-600'} 
                                    accent
                                >2025 Digital Resources</Button>
                            </Pop>
                            <Pop inline>
                                <Button 
                                    href={'/sa/post-event-report-2025'} 
                                    theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                    decal={'fs-5 fw-600'} 
                                    accent
                                >Post-Event Report</Button>
                            </Pop>
                        </div>
                    </Fade>
                </HeroUnitVideo>


                {/* HOST SPONSOR */}
                <section className="block bg-primary">
                    <div className="container center">
                        <p className="fs-3 fw-600 c-accent caps">{ locale === 'ar' ? "الجهات الراعية المضيفة" : "Host Sponsors" }</p>
                            <Pop>
                                <div className={`${CSS.hostSponsorLogoWrapper} mt-sm mx-auto`}>
                                    <Image src={`/assets/site/sa/mandarin-oriental-al-faisaliah-logo-update.png`} width={800} height={800}/>
                                    <Image src={`/assets/site/sa/al-khozama-logo-2025.png`} width={830} height={427}/>
                                </div>
                            </Pop>
                    </div>
                </section>


                {/* PATRONAGE */}
                <section className="block bg-primary">
                    <div className="container center">
                        <p className="fs-3 fw-600 c-accent caps pb-sm">{ locale === 'ar' ? "تحت رعاية" : "Under the Patronage of" }</p>

                        <div className={CSS.patronBox}>

                            <div className={CSS.patronBoxAvatar}>
                                <Pop>
                                    <div className={CSS.avatar}>
                                        <Image src={"https://static.swapcard.com/public/images/77e27e150ec94e1d8c549fbb6e6f065b.jpeg"} layout='fill' alt="" unoptimized />
                                    </div>
                                </Pop>
                            </div>

                            <div className={CSS.patronBoxContent}>
                                <Pop>
                                    {
                                        locale === 'ar'
                                        ?
                                            <>
                                                <p className="fs-4 fw-600">صاحب السمو الأمير بندر بن سعود بن خالد آل سعود</p>
                                                <p className="fs-5 mt-xxs">
                                                    الأمين العام لمؤسسة الملك فيصل (KFF)
                                                <br/>
                                                    رئيس مجلس إدارة الخزامى
                                                </p>
                                            </>
                                        :
                                            <>
                                                <p className="fs-4 fw-600">HH Prince Bandar bin Saud bin Khalid Al Saud</p>
                                                <p className="fs-5 mt-xxs">
                                                    Secretary General King Faisal Foundation&nbsp;(KFF)<br/>
                                                    Chairman of the Board of Directors Al&nbsp;Khozama
                                                </p>
                                            </>
                                    }
                                    

                                </Pop>
                            </div>
                        </div>
                        
                        <p className="mt-xs caps fs-sm c-accent">
                            <Link href={'/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU='}>
                                <a className="uLink">{ locale === 'ar' ? "عرض السيرة الذاتية" : "View biography" }</a>
                            </Link>
                        </p>
                    </div>
                </section>
            </div>

            

            {/* ADVISORY BOARD */}
            <FixedBackgroundImage
                backgroundImageUrl={`/assets/img/sa/homepage/ab-meeting-2025-2.jpg`}
                overlay={`hsl(from var(--primary) h s l / .85)`}
            >

                <div className="container center pt-sm">
                    <Fade>
                        <Pop><p className="fs-1 fw-600 c-white">Advisory Board Members</p></Pop>
                    </Fade>
                </div>

                <div className="container columns-4 gap-sm maxw-65">
                    {
                        AB_DATA.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    url={profile.url}
                                    photoUrl={profile.photoUrl}
                                    fullName={profile.fullName}
                                    jobTitle={profile.jobTitle}
                                    company={profile.company}
                                    color={'c-white'}
                                />
                            </Pop>
                        ))
                    }
                </div>

                <div className="container center">
                    <Pop>
                        <ArrowButton 
                            href={ '/sa/advisory-board' } 
                            theme={{ arrow: `white`, border: `white`, label: `white`}}
                        >
                            View All Members
                        </ArrowButton>
                    </Pop>
                </div>

            </FixedBackgroundImage>


            <div className="bg-secondary py-xs">
                <Ticker>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$1.6BN</strong> in business opportunities and deal volume gained in 2025 edition</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$1.6BN</strong> in business opportunities and deal volume gained in 2025 edition</p>
                </Ticker>
            </div>


            {/* IN NUMBERS */}
            <ImpactGrid>
                <TitleBlock>
                    <SectionHeading heading={ locale === 'ar' ? "2025 بالأرقام" : '2025 in Numbers'} decal={'c-secondary'} />
                    <div style={{ marginTop: `var(--space-sm)`, marginLeft: `var(--space-md)`}}>
                        <Pop inline>
                            <Button 
                                href={'/sa/attendee-list-2025'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >Download Attendee List</Button>
                        </Pop>
                    </div>
                </TitleBlock>
                <ImpactFigure decal={'bg-neutral-01'} figure={1106} impact={ locale === 'ar' ? "عدد الحضور" : 'Attendees'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={37} impact={ locale === 'ar' ? "دولة" : 'Countries'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={153} impact={ locale === 'ar' ? "عدد المتحدثين" : 'Speakers'}  />
                <ImpactFigure decal={'bg-neutral-01'} figure={85} impact={ locale === 'ar' ? "الجهات الراعية والشركاء" : 'Sponsors & Partners'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={68} unit={'%'} impact={ locale === 'ar' ? "كبار المديرين التنفيذيين ونواب الرؤساء والمديرين" : 'C-Level Executives, VP & Directors'}  />
                <ImpactFigure />
                <ImpactFigure decal={'bg-neutral-01'} figure={24} unit={'%'} impact={'Investors'} />
                <ImpactFigure decal={'bg-neutral-02'} prefix={'$'} figure={5.6} unit={'tn'} impact={'AUM'} />
                <ImageBlock imageUrl={'/assets/img/sa/impact-hero.jpg'} />
            </ImpactGrid>


            {/* QUOTES */}
            <section className="block bg-primary o-hidden ">
                <div className={`container columns-3 gap-md`}>
                    <Quotation
                        avatarUrl={'https://static.swapcard.com/public/images/9cf68577bdff4a38be44c9fbf2850f25.jpeg'}
                        quote={"Being at FHS is like an obligation now! We attend both Saudi Arabia and World to present our company's developments, network and meet with colleagues and investors. This year was much stronger and more effective."}
                        fullName={"Hassan Ahdab"}
                        title={"Chief Hospitality Operations Officer, Taiba Investments"}
                    />
                    <Quotation
                        avatarUrl={'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg'}
                        quote={"It's a blessing. Very energizing, very dynamic, very busy. Lots of beautiful encounters so far."}
                        fullName={"Maud Bailly"}
                        title={"Chief Executive Officer, Sofitel Legend, Sofitel, MGallery & Emblems"}
                    />
                    <Quotation
                        avatarUrl={'https://static.swapcard.com/public/images/0ea10113e8f64d0795d891c9d1769812.jpeg'}
                        quote={"As in every Future Hospitality Summit, we get quality conversations rather than the big quantities that we find in other exhibitions. So, this has been a really good exhibition so far. We've had some quality discussions."}
                        fullName={"Eddy Tannous"}
                        title={"Chief Operating Officer, Rotana"}
                    />
                </div>
            </section>


            {/* SPEAKERS */}
            <section className="block bg-primary-2-dark">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 c-white">FHS Speakers</p>
                    </Fade>
                </div>
                <div className="container columns-4 gap-sm maxw-65">
                    {
                        SPEAKER_DATA.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    url={profile.url}
                                    photoUrl={profile.photoUrl}
                                    fullName={profile.fullName}
                                    jobTitle={profile.jobTitle}
                                    company={profile.company}
                                    color={'white'}
                                />
                            </Pop>
                        ))
                    }
                </div>
                <div className="container center">
                    <Pop>
                        <ArrowButton 
                            href={ '/sa/speakers' } 
                            theme={{ arrow: `white`, border: `white`, label: `white`}}
                        >
                            { locale === 'ar' ? "عرض جميع المتحدثين" : "View All Speakers"}
                        </ArrowButton>
                    </Pop>
                </div>
            </section>


            {/* THEMES */}
            <section className="block bg-primary no-print" style={{ position: 'relative', zIndex: 2}}>
                <ThemesSlider data={THEMES_DATA} link={'/sa/ai-session-summaries-2025'} linkLabel={'Download AI Session Summaries'} />
            </section>


            {/* SPONSORS */}
            <section className="block pb-0">
                <div className="container center">
                    <Pop><p className="fs-1 fw-600 c-primary balance">Partners Joining Us</p></Pop>
                </div>
            </section>
            <div className="py-xs mt-sm mb-lg">
                <Ticker duration={25}>
                    {
                        partners.map(partner => (
                            <div key={partner.id} style={{ marginRight: 10 }}>
                                <Logo logoUrl={partner.logoUrl} />
                            </div>
                        ))
                    }
                </Ticker>
            </div>


            {/* ANNOUNCEMENTS */}
            <ArticleScroller>
                {
                    ( locale === 'ar' ? ARTICLE_DATA_AR : ARTICLE_DATA)
                    .map(( article, index ) => <Article key={index} heroUrl={article.heroUrl} title={article.title} excerpt={article.excerpt} url={article.url} />)
                }
            </ArticleScroller>



            {/* VIDEO + PHOTO HIGHLIGHTS */}
            <section className="block o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.highlightVideoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1'>Highlights from <span className='c-secondary'>FHS Saudi Arabia 2025</span></p></Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://cms.thebench.com/assets/video/fhs-2025-sa-highlights.mp4`}  poster={'https://cms.thebench.com/assets/video/fhs-2025-sa-highlights-poster.jpg'} controls={true} />
                </div>

                <div className={`${CSS.photoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1 mt-lg'>2025 in <span className='c-secondary'>Photos</span></p></Slide>
                    
                    <div className="columns-3 gap-xs mt-md">
                        {
                            PHOTOS_DATA.map( (photo, index) => (
                                <Pop key={index}>
                                    <div key={photo.id} style={{ position: `relative`}}>
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" />
                                    </div>
                                </Pop>
                            ))
                        }
                        <p className="mt-xs">
                            <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View Full Gallery</ArrowButton>
                        </p>
                    </div>

                </div>
            </section>


            

            
            {/* POPOVER */}
            <PopOver>
                <div className="formatted">
                    <p className="fs-3 fw-600 lh-1 c-primary">Looking to attend?</p>
                    <p>Register before 10th November.</p>
                    <Pop inline>
                        <Button 
                            href={'/sa/purchase-pass'} 
                            theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                            decal={'fw-600'} 
                            accent
                        >Purchase Pass</Button>
                    </Pop>
                </div>
            </PopOver>

            
            <Footer />
            <LenisScroller />
        </div>
    )
}
Home.theme = 'sa-2025'



export const InvestorImpact = ({ prefix, figure, unit, label }) => {
    return (
        <Pop>
            <div className={CSS.investorImpact}>
                <p className={CSS.investorImpactFigure}>{prefix}<AnimatedCounter from={0} to={figure} />{unit}</p>
                <p className={CSS.investorImpactLabel}>{label}</p>
            </div>
        </Pop>
    )
}

export const StartupPromo = () => {
    return (
        <div className="formatted">
            <p className="fs-3 fw-600 c-primary lh-1">Startups - Discounted Exhibition Stand</p>
            <p>Showcase your innovative product/solution at FHS &amp; connect with investors, hospitality leaders, and decision-makers for just <strong>$2500!</strong></p>
            <ul className={`${CSS.tickboxList} fw-500`}>
                <li>Branded Exhibition Stand (1x0.5m)</li>
                <li>Full-Access Delegate Pass</li>
                <li>Attendee List Acccess</li>
            </ul>
            <p className="fs-sm pb-xs"><TickIcon/>&nbsp;Revenue &lt; $1M | <TickIcon/>&nbsp;2-30 employees | <TickIcon/>&nbsp;Seed-stage funding | <TickIcon/>&lt;&nbsp;3 years in operation</p>
            <Pop>
                <Button 
                    href={'https://share.hsforms.com/1Z4wBBQkfQ8ej6EySFQJh6w8nd8z'} 
                    target={'_blank'}
                    decal={'fs-6 fw-600'} 
                >
                    APPLY NOW
                </Button>
            </Pop>
        </div>
    )
}

const TickIcon = () => <img src="/assets/ui/icon-tick.svg" alt="" style={{ height: 12, marginRight: 1 }} />

const AwardWinner = ({ winner }) => {
    return (
        <Pop>
            <div className={CSS.awardCard}>
                <header>
                    <Award />
                    <p className="fs-4 caps lh-1">{winner.awardTitle}</p>
                </header>

                <Pop delay={.1}>
                    <section>
                        <img src={winner.avatarUrl} alt="" />
                    </section>
                </Pop>

                <footer>
                    <p className="fs-4 fw-600">{winner.fullName}</p>
                    <p className="mt-xxs">{winner.title}</p>
                    <p className="fw-600">{winner.organisation}</p>
                </footer>
            </div>
        </Pop>
    )
}




export async function getStaticProps({ preview, previewData, locale }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE_SA}") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
				entry(site: "fhisSa", id: 63852) {
					id
					title
					... on fhisSaHomepage_fhisSaHomepage_Entry {
						id
						${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryProfileCarousel}
							${QueryCards}
							${QueryForm}
							${QueryImages}
							${QueryPartnerGroups}
						}
						${QuerySEO}
					}
				}
                abVideos: entry(site: "${process.env.SITE_HANDLE_SA}", id: "227427" limit: 4) {
					... on fhsSaAdvisoryBoard_fhsSaAdvisoryBoard_Entry {
					id
					slug
					title
					videos {
						... on videos_video_BlockType {
							id
							videoShareUrl
							fullName
							jobTitle
							organisation
							testimonial
							}
						}
					}
				}
			}
			
        `
    })
    const pageData = data

    const swapcardData2026 = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2026}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2026,
					"page": 1
				}
			})
		}
	)
	const partnerData2026 =  await swapcardData2026.json()


    return { 
		props: { 
			globals: pageData.data.globalSet,
			entry: pageData.data.entry,
			seomatic: pageData.data.entry.seomatic,
			contentBlocks: pageData.data.entry.fhisContentBlocks,
            partners: partnerData2026.data.exhibitors,
            abVideos: pageData.data.abVideos.videos,
		}
	}
}
