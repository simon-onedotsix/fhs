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

import { SectionHeading } from "../../fuselage/theme/2025/sa/components/section-heading/section-heading"
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { ImpactGrid, ImpactFigure, TitleBlock, ImageBlock } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { Award } from "../../fuselage/icons/award"

// import { Ticker } from '../../fuselage/theme/2025/sa/components/ticker/ticker'
import Ticker from 'framer-motion-ticker'

import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"


import handleContentBlocks from "../../lib/content-blocks"

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

import { THEMES_DATA, THEMES_DATA_AR } from "./themes"
import { AwardWinnerCard } from "../../fuselage/components/award-winner-card/award-winner-card"

const ARTICLE_DATA = [
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/Picture1_2025-05-13-092721_krhj.jpg',
        title: 'Wyndham and Le Park Concord to Launch 100 Super 8® Hotels Across Saudi Arabia in Landmark 10-Year Deal',
        excerpt: 'With plans to open 100 hotels over the next ten years, the agreement reinforces Wyndham’s long-term commitment to quality, accessible and sustainable hospitality development in the region.',
        url: '/sa/content-library/wyndham-and-le-park-concord-to-launch-100-super-8-hotels-across-saudi-arabia-in-landmark-10-year-deal',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/RM200860.jpg',
        title: 'Baraka and Kerten Hospitality partner to launch The House Residence at Al Salam District in Jeddah',
        excerpt: "In a strategic move to bring soulful, modern living to the forefront of Jeddah’s urban landscape, Baraka for Real Estate Development and Investment Company Ltd has signed a milestone agreement with global lifestyle hospitality operator Kerten Hospitality to launch The House Residence Al Salam District in Jeddah.",
        url: '/sa/content-library/baraka-and-kerten-hospitality-partner-to-launch-the-house-residence-at-al-salam-district-in-jeddah',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/RM106193.jpg',
        title: 'SOPHOS Hotels SA and WATANIAH Business Group to partner for the launch of the first Le Meridien Hotel Tabuk, KSA.',
        excerpt: 'In partnership with WATANIAH Business Group, SOPHOS Hotels SA, one of the leading Third-party hotel operator, is set to manage a Le Meridien, one of Marriott International’s premium brands, in Tabuk.',
        url: '/sa/content-library/sophos-hotels-sa-and-wataniah-business-group-to-partner-for-the-launch-of-the-first-le-meridien-hotel-tabuk-ksa',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/Signing-cermeony-for-The-St.-Regis-Jeddah.jpg',
        title: 'Marriott International Signs Agreement to Bring the Iconic St. Regis Brand to Jeddah, Saudi Arabia',
        excerpt: '“The signing of The St. Regis Jeddah reflects our commitment to expand our portfolio of brands and experiences in the Kingdom,” said Karim Cheltout, Senior Vice President, Development, Middle East & Africa.',
        url: '/sa/content-library/marriott-international-signs-agreement-to-bring-the-iconic-st-regis-brand-to-jeddah-saudi-arabia',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/IHG-X-ASHAD-Signing-1.jpg',
        title: 'IHG Hotels & Resorts and Ashaad Company announces three new hotel signings across Jeddah and Al Khobar',
        excerpt: 'IHG Hotels & Resorts, one of the world’s leading hospitality companies, has announced the signing of three new hotels in the Kingdom of Saudi Arabia at Future Hospitality Summit Riyadh 2025.',
        url: '/sa/content-library/ihg-hotels-resorts-and-ashaad-company-announces-three-new-hotel-signings-across-jeddah-and-al-khobar',
    },
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
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzgzMzQ4Nzk=`,
        photoUrl: 'https://static.swapcard.com/public/images/b844c54d6f3e43f28533f8592e1e9216.jpeg',
        fullName: 'Gregory Djerejian',
        jobTitle: 'Group Head of Investments',
        company: 'Red Sea Global',
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
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc2MDY1NjI=`,
        photoUrl: 'https://static.swapcard.com/public/images/aeeea1ec1faf489f89b37288836b84c9.jpeg',
        fullName: 'Michael Acton Smith',
        jobTitle: 'Co-founder',
        company: 'Calm',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1ODUwMzU=`,
        photoUrl: 'https://static.swapcard.com/public/images/a96df3d5f0c84807a351df07dfc4e15c.jpeg',
        fullName: 'Dr. Abeer Alamri',
        jobTitle: 'Skills Development and Talent Optimization Expert',
        company: '',
    },
]
const SPEAKER_DATA_AR = [
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU=`,
        photoUrl: 'https://static.swapcard.com/public/images/0f3466754aec406ab2b64862743c639f.jpeg',
        fullName: 'صاحب السمو الأمير بندر بن سعود بن خالد آل سعود',
        jobTitle: 'الأمين العام، مؤسسة الملك فيصل | رئيس مجلس إدارة شركة الخزامى للاستثما',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzY5MzgxNzg=`,
        photoUrl: 'https://static.swapcard.com/public/images/ab06795985174d609056ebd5d02c872e.jpeg',
        fullName: 'Hossam Al-Basrawi',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzgzMzQ4Nzk=`,
        photoUrl: 'https://static.swapcard.com/public/images/b844c54d6f3e43f28533f8592e1e9216.jpeg',
        fullName: 'Gregory Djerejian',
        jobTitle: 'Group Head of Investments',
        company: 'Red Sea Global',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzcwNDU3NDA=`,
        photoUrl: 'https://static.swapcard.com/public/images/be577fb8e2b044c98cc51dc0dc10fb55.jpeg',
        fullName: 'نيكولينا أنجيلكوفا',
        jobTitle: 'وزيرة السياحة البلغارية السابقة | المالكة والمديرة التنفيذية لمكتب أنجيلكوفا للمحاماة والاستشارات',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1ODUwMzU=`,
        photoUrl: 'https://static.swapcard.com/public/images/a96df3d5f0c84807a351df07dfc4e15c.jpeg',
        fullName: 'الدكتورة عبير العمري',
        jobTitle: 'وكالة التخطيط الاستراتيجي والمتابعة',
        company: 'وزارة السياحة',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc5MDEyNjk=`,
        photoUrl: 'https://static.swapcard.com/public/images/7ffaec8014ff4f33bd453f98c0e67b51.jpeg',
        fullName: 'نيك كاندي',
        jobTitle: 'الرئيس التنفيذي',
        company: 'كاندي كابيتال',
    },

    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1OTk1ODI=`,
        photoUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        fullName: 'مود بيلي',
        jobTitle: 'الرئيس التنفيذي',
        company: 'سوفيتيل ليجند، سوفيتيل، إم جاليري أند إمبلمز',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc2MDY1NjI=`,
        photoUrl: 'https://static.swapcard.com/public/images/aeeea1ec1faf489f89b37288836b84c9.jpeg',
        fullName: 'مايكل أكتون سميث',
        jobTitle: 'الشريك المؤسس',
        company: 'شركة كالم (Calm)',
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
const AWARD_WINNERS_DATA = [
    {
        awardTitle: "Future Leader Award",
        avatarUrl: "https://static.swapcard.com/public/images/5d27d4543c2a4075b57e2c418d0fbda4.jpeg",
        fullName: "Lama AlQawasmi",
        title: "Co-Founder & COO",
        organisation: "Hospitality Talents"
    },
    {
        awardTitle: "Impact Leader Award",
        avatarUrl: "https://static.swapcard.com/public/images/a8bd1871a3d04d8db3cd7156a77b5bee.jpeg",
        fullName: "Narjes Mohammed",
        title: "Revenue Manager",
        organisation: "Makkah clock Royal Tower. A Fairmont Hotel"
    }
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


            <div ref={introRef} className={CSS.themeWrapper}>
                <motion.img className={CSS.deco01} src="/assets/theme/sa-2025/gfk-01.svg" alt="" style={{ y: g1 }}/>
                <motion.img className={CSS.deco02} src="/assets/theme/sa-2025/gfk-01.svg" alt="" style={{ y: g2 }}/>

                <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-sa-opt.mp4'} poster={'/assets/video/fhs-2024-sa-opt-poster.jpg'}>
                    
                    <motion.p 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                        className={`fs-0 fw-700 c-white lh-1 center`} 
                    >
                        { locale === 'ar' ? "حيث تصنع الرؤية الفرص" : <>WHERE VISION <br/> SHAPES OPPORTUNITY</> }
                        
                    </motion.p>

                    <motion.p 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                        className={`fs-5 fw-500 c-white center mt-xs`} 
                    >
                        { locale === 'ar' ? "13-11 مايو 2026، فندق ماندارين أورينتال الفيصلية، الرياض" : "2026, Mandarin Oriental Al Faisaliah, Riyadh" }
                        
                    </motion.p>

                    <Fade>
                        <div className="mt-md center button-grid w-100pc">
                            <Pop inline>
                                <Button 
                                    href={'/sa/agenda'} 
                                    theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                    decal={'fs-5 fw-600'} 
                                    accent
                                >
                                    { locale === 'ar' ? "برنامج 2025" : "Agenda" }
                                </Button>
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


                {/* SUPPORTERS */}
                <section className="block bg-primary">
                    <div className="container center">
                        <p className="fs-3 fw-600 c-accent caps">{ locale === 'ar' ? "Supporters" : "Supporters" }</p>
                            <Pop>
                                <div className={`${CSS.sponsorLogoWrapper} mt-sm mx-auto`}>
                                    <Image src={`/assets/site/sa/ministry-of-tourism.png`} width={1547} height={556}/>
                                    <Image src={`/assets/site/sa/unt-white.png`} width={800} height={624}/>
                                    <Image src={`/assets/site/sa/wsha-white.png`} width={1000} height={442}/>
                                    <Image src={`/assets/site/sa/wttc-white.png`} width={800} height={712}/>
                                </div>
                            </Pop>
                    </div>
                </section>
            </div>

            <div className="bg-secondary py-xs">
                <Ticker>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$1.6BN</strong> in business opportunities and deal volume gained in 2025 edition</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$1.6BN</strong> in business opportunities and deal volume gained in 2025 edition</p>
                </Ticker>
            </div>

            <ImpactGrid>
                <TitleBlock>
                    <SectionHeading heading={ locale === 'ar' ? "2025 بالأرقام" : '2025 in Numbers'} decal={'c-secondary'} />
                </TitleBlock>
                <ImpactFigure decal={'bg-neutral-01'} figure={1086} impact={ locale === 'ar' ? "عدد الحضور" : 'Attendees'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={37} impact={ locale === 'ar' ? "دولة" : 'Countries'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={153} impact={ locale === 'ar' ? "عدد المتحدثين" : 'Speakers'}  />
                <ImpactFigure decal={'bg-neutral-01'} figure={85} impact={ locale === 'ar' ? "الجهات الراعية والشركاء" : 'Sponsors & Partners'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={68} unit={'%'} impact={ locale === 'ar' ? "كبار المديرين التنفيذيين ونواب الرؤساء والمديرين" : 'C-Level Executives, VP & Directors'}  />
                <ImpactFigure />
                <ImpactFigure decal={'bg-neutral-01'} figure={24} unit={'%'} impact={'Investors'} />
                <ImpactFigure decal={'bg-neutral-02'} prefix={'$'} figure={5.4} unit={'tn'} impact={'AUM'} />
                <ImageBlock />
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
                        <p className="fs-0 fw-600 c-white">Featured Speakers</p>
                    </Fade>
                </div>
                <div className="container columns-5 gap-sm">
                    {
                        (locale === 'ar' ? SPEAKER_DATA_AR : SPEAKER_DATA).map( (profile, index) => (
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




            {/* AWARDS */}
            <section className="block bg-primary">
                <div className="container center">
                    <Fade>
                        <p className="fs-0 fw-600 c-white">2025 Award Winners</p>
                    </Fade>
                </div>
                <div className="container columns-2 gap-md maxw-40">
                    {
                        AWARD_WINNERS_DATA.map( (winner, index ) => <AwardWinner winner={winner} key={index} />)
                    }
                </div>
            </section>


               



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

    const swapcardData2025 = await fetch(
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
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2025,
					"page": 1
				}
			})
		}
	)
	const partnerData2025 =  await swapcardData2025.json()


    return { 
		props: { 
			globals: pageData.data.globalSet,
			entry: pageData.data.entry,
			seomatic: pageData.data.entry.seomatic,
			contentBlocks: pageData.data.entry.fhisContentBlocks,
            partners: partnerData2025.data.exhibitors,
            abVideos: pageData.data.abVideos.videos,
		}
	}
}
