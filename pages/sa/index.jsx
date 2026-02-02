import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"
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

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"
import Ticker from 'framer-motion-ticker'

import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import useCustomMediaQuery from "../../hooks/useCustomMediaQuery"

import _ from 'lodash'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { FixedBackgroundImage } from "../../fuselage/theme/2025/ais/blocks/fixed-background-image/fixed-background-image"
import { ImpactGrid, ImpactFigure, TitleBlock, ImageBlock } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"
import { SectionHeading } from "../../fuselage/theme/2025/sa/components/section-heading/section-heading"
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { Logo } from "../../fuselage/theme/2025/sa/blocks/logo-ticker/logo-ticker"
import { ArticleScroller, Article } from "../../fuselage/theme/2025/sa/blocks/article-scroller/article-scroller"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { ImageGallery } from "../../fuselage/components/image-gallery/image-gallery"

import { VideoSection, Section } from '../../fuselage/theme/2026/sa/blocks/section'
import { ThemeGraphic } from '../../fuselage/theme/2026/sa/theme/theme-graphic'


import CSS from '../../fuselage/theme/2025/sa/css/homepage.module.css'


import { THEMES_DATA, THEMES_DATA_AR } from "./themes"

export const ARTICLE_DATA = [
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
export const ARTICLE_DATA_AR = [
    {
        heroUrl: '/assets/img/sa/press-release-1.webp',
        title: `رؤى المدينة القابضة توقّع اتفاقية مع هيلتون لافتتاح ثلاث فنادق ضمن مشروع رُوى المدينة`,
        excerpt: `أعلنت شركة رؤى المدينة القابضة عن توقيع اتفاقية مع مجموعة هيلتون لافتتاح ثلاث فنادق تضم أكثر من 1600 غرفة.`,
        url: '/sa/content-library/rua-al-madinah-holding-signs-agreement-with-hilton-to-open-three-hotels-at-rua-al-madinah-project',
    },
    {
        heroUrl: '/assets/img/sa/press-release-2.webp',
        title: `مجموعة فنادق راديسون تُسرّع استراتيجية التوسع في المملكة العربية السعودية مع التركيز على مكة والمدينة المنورة.`,
        excerpt: `تواصل مجموعة فنادق راديسون تكثيف جهودها في المملكة العربية السعودية، تماشيًا مع رؤية السعودية 2030 لقطاع الضيافة.`,
        url: '/sa/content-library/radisson-hotel-group-accelerates-expansion-strategy-in-saudi-arabia-with-focus-on-holy-cities',
    },
    {
        heroUrl: '/assets/img/sa/press-release-3.webp',
        title: `مجموعة أكور تتصدر توسع الضيافة في جميع أنحاء المملكة العربية السعودية`,
        excerpt: `بصفتها أكبر مشغل فنادق في المملكة، تتصدر أكور عملية التحول الاستراتيجي لقطاع السياحة، لتعلن بذلك بداية عصر جديد للضيافة في المملكة.`,
        url: '/sa/content-library/accor-spearheads-hospitality-expansion-throughout-saudi-arabia-2',
    },
    {
        heroUrl: '/assets/img/sa/press-release-4.webp',
        title: `ماريوت الدولية و"القمة للضيافة" يوقعان اتفاقية لافتتاح فندق جي دبليو ماريوت في جدة`,
        excerpt: `أعلنت شركة ماريوت الدولية والقمة للضيافة (إحدى الشركات التابعة لشركة بن داود التجارية) عن توقيع اتفاقية لإطلاق علامة جي دبليو ماريوت في مدينة جدة. سويف يقام فندق جي دبليو ماريوت على كورنيش جدة، ومن المتوقع أن يكون ملاذًا فاخرًا للمسافرين الباحثين عن تجربة إقامة فاخرة على الواجهة البحرية، مع خدمات استثنائية وتجارب شاملة للعافية والرفاهية.`,
        url: '',
    }
]

const SPEAKER_DATA_SHORT = [
    {
        url: `/sa/speakers/profile/khalid-saud-abu-haimed`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Abu-Haimed_Khalid-Saud_pic2.jpg',
        fullName: 'Khalid Saud Abu Haimed',
        jobTitle: 'Chief Executive Officer',
        company: 'Al Khozama Investment Company',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ1OTg=`,
        photoUrl: 'https://static.swapcard.com/public/images/b742f087d4d243e78bb70a6c54f13f67.png',
        fullName: 'Sarmad Zok',
        jobTitle: 'Chief Executive Officer',
        company: 'Kingdom Hotel Investments',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ1NzA=`,
        photoUrl: 'https://static.swapcard.com/public/images/23164303eb9249b998d1cad542746fba.jpeg',
        fullName: 'Dr. Aradhana Khowala',
        jobTitle: 'Chief Executive Officer & Founder',
        company: 'Aptamind Partners',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ2MzQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/144a200935cd4bdfa2c5abf157ce8a37.png',
        fullName: 'Muin Serhan',
        jobTitle: 'Chief Executive Officer',
        company: 'Amsa Hospitality',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQxOTMxMjE=`,
        photoUrl: 'https://static.swapcard.com/public/images/8744509ba8354d31abfb050affddc9ed.jpeg',
        fullName: 'Samer Sabra',
        jobTitle: 'Chief Hospitality Officer',
        company: 'Jabal Omar Development Company',
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
const AB_DATA_AR = [
    {
        url: `/sa/speakers/profile/mohammad-al-athel`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Athel_Mohammad_photo.jpg',
        fullName: 'محمد العذل',
        jobTitle: 'المؤسس والرئيس التنفيذي',
        company: 'شركة أمسا للضيافة',
    },
    {
        url: `/sa/speakers/profile/sultan-alotaibi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Taiba-INvestments.jpg',
        fullName: 'سلطان العتيبي',
        jobTitle: 'الرئيس التنفيذي',
        company: 'طيبة للاستثمار',
    },
    {
        url: `/sa/speakers/profile/sarah-gasim`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Gasim_Sarah_red.jpg',
        fullName: 'سارة قاسم',
        jobTitle: 'نائبة الرئيس الأولى ورئيسة قسم مجموعة فنادق السعودية',
        company: 'شركة جيه إل إل',
    },
    {
        url: `/sa/speakers/profile/haifaa-alzahrani`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/IMG_3406.jpeg',
        fullName: 'هيفاء الزهراني',
        jobTitle: 'رئيسة إدارة أصول الضيافة والشراكات',
        company: 'ذاخر للتطوير',
    },
    {
        url: `/sa/speakers/profile/hassan-ahdab`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Ahdab_Hassan.jpg',
        fullName: 'حسن أحدب',
        jobTitle: 'الرئيس التنفيذي للتشغيل الفندقي',
        company: 'طيبة للاستثمار',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzk0MjU2ODU=`,
        photoUrl: 'https://cdn-api.swapcard.com/public/images/5d687c7d1bd34fe383f0c0a3ba7da1c4.jpeg',
        fullName: 'سيباستيان كاري',
        jobTitle: 'رئيس قطاع العمليات الفندقية للمجموعة',
        company: 'البحر الأحمر الدولية',
    },
    {
        url: `/sa/speakers/profile/wahdan-alkadi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/WAHDAN.webp',
        fullName: 'وهدان القاضي',
        jobTitle: 'الرئيس التنفيذي',
        company: 'صندوق الفعاليات الاستثماري',
    },
    {
        url: `/sa/speakers/profile/samer-sabra`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/322541D7-4233-48BA-8AB5-766F54358317.jpeg',
        fullName: 'سامر صبرا',
        jobTitle: 'رئيس قطاع الضيافة',
        company: 'شركة جبل عمر للتطوير',
    },
    
]

const QUOTES_DATA = [
    {
        avatarUrl: 'https://static.swapcard.com/public/images/9cf68577bdff4a38be44c9fbf2850f25.jpeg',
        quote: "Being at FHS is like an obligation now! We attend both Saudi Arabia and World to present our company's developments, network and meet with colleagues and investors. This year was much stronger and more effective.",
        fullName: "Hassan Ahdab",
        title: "Chief Hospitality Operations Officer, Taiba Investments"
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        quote: "It's a blessing. Very energizing, very dynamic, very busy. Lots of beautiful encounters so far.",
        fullName: "Maud Bailly",
        title: "Chief Executive Officer, Sofitel Legend, Sofitel, MGallery & Emblems",
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/0ea10113e8f64d0795d891c9d1769812.jpeg',
        quote: "As in every Future Hospitality Summit, we get quality conversations rather than the big quantities that we find in other exhibitions. So, this has been a really good exhibition so far. We've had some quality discussions.",
        fullName: "Eddy Tannous",
        title: "Chief Operating Officer, Rotana",
    }
]
const QUOTES_DATA_AR = [
    {
        avatarUrl: 'https://static.swapcard.com/public/images/9cf68577bdff4a38be44c9fbf2850f25.jpeg',
        quote: "لقد أصبح التواجد في قمة مستقبل الضيافة أمرًا لا بد منه حيث نشارك في قمة مستقبل الضيافة بالمملكة العربية السعودية مرةً أخرى. الحضور في قمة مستقبل الضيافة أصبح أشبه بالالتزام الآن، حيث نشارك في نسختيّ السعودية والعالمية لعرض مشاريع شركتنا، وبناء شبكة علاقات قوية، والالتقاء بالزملاء والمستثمرين. لقد كانت نسخة هذا العام أقوى وأكثر فاعلية وتأثيرًا.",
        fullName: "حسن أحدب",
        title: "الرئيس التنفيذي للتشغيل الفندقي، طيبة للاستثمار"
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        quote: "إنّ هذا الحدث نعمة حقيقية؛ فالطاقة والحيوية، والتفاعل والنشاط يفوق الخيال. لقد شهدنا حتى الآن العديد من اللقاءات الجميلة والمثمرة.",
        fullName: "مود بيلي",
        title: "الرئيسة التنفيذية، سوفيتيل ليجند، سوفيتيل، إم غاليري، إمبليمز",
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/0ea10113e8f64d0795d891c9d1769812.jpeg',
        quote: "كما هو الحال في كل نسخة من قمة مستقبل الضيافة، يمتاز الحدث بنقاشات وحوارات متميزة تهتم بجودة المحتوى بدلًا من الجلسات الكثيرة التي نراها في المؤتمرات الأخرى. تميزت القمة حتى الآن بمستوى رفيع للغاية، وقد أجرينا نقاشات مثمرة وذات قيمة كبيرة.",
        fullName: "إدي طنوس",
        title: "الرئيس التنفيذي للعمليات، روتانا",
    }
]




export default function Page({ seomatic, partners }) {
    
    const { locale } = useRouter()

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <div>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( seomatic ) }
            </Head>

            <Header overlaid />

            

            {/* INTRO */}
            <VideoSection
                backgroundClass={`bg-primary`}
                video={'https://cms.thebench.com/assets/video/fhs-2025-sa-wrap-up-opt.mp4'}
                poster={'/assets/video/fhs-2025-sa-wrap-up-poster.jpg'}
                minHeight={`100vh`}
                themeGraphics={
                    <div>
                        {
                            isDesktop
                            ?
                                <ThemeGraphic
                                    src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                                    width={`45vw`}
                                    coordinates={{ top: `50vh` }}
                                />
                            :
                                <ThemeGraphic
                                    src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                                    width={`50vw`}
                                    coordinates={{ top: `33vh` }}
                                />
                        }
                    </div>
                }
            >
               
                <div style={{ height: isDesktop ? `30vh` : `45vh`}}/>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`${CSS.headline} fs-xl fw-900 c-white lh-1 center mx-auto`}
                >
                    {
                        locale === 'ar'
                            ? <>حيث تلتقي الفرص برأس المال</>
                            : <>Where Opportunity Meets&nbsp;Capital</>
                    }
                </motion.p>
                
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 fw-300 c-white center mt-sm`} 
                >
                    {
                        locale === 'ar'
                            ? `20-22 أبريل 2026، فندق ماندارين أورينتال الفيصلية، الرياض`
                            : `20-22 April 2026, Mandarin Oriental Al Faisaliah, Riyadh`
                    }
                </motion.p>

                <Fade>
                    <div className="mt-md center button-grid w-100pc">
                        <Pop inline>
                            <Button 
                                href={'/sa/post-event-resources-2025'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >{ locale === 'ar' ? `الموارد الرقمية 2025` : `2025 Digital Resources`}</Button>
                        </Pop>
                        <Pop inline>
                            <Button 
                                href={'/sa/prospectus-download'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >{ locale === 'ar' ? `كتيب 2026` : `2026 Prospectus`}</Button>
                        </Pop>
                    </div>
                </Fade>


                <section className="mt-lg">
                    <div className={CSS.boxout}>

                        {/* HOST SPONSOR */}
                       
                        <div className="center">
                            <p className="fs-4 fw-600 c-accent caps pb-xs">{locale === 'ar' ? "الجهات الراعية المستضيفة" : "Host Sponsors"}</p>
                        
                            <Pop>
                                <div className={`${CSS.hostSponsorLogoWrapper} mx-auto px-xs`}>
                                    <div className={CSS.hostSponsorLogo}>
                                        <Image src={`/assets/site/sa/mandarin-oriental-al-faisaliah-logo-update.png`} layout="fill"/>
                                    </div>
                                    <div className={CSS.hostSponsorLogo}>
                                        <Image src={`/assets/site/sa/al-khozama-logo-2025.png`} layout="fill"/>
                                    </div>
                                </div>
                            </Pop>
                        </div>
                      


                        {/* PATRONAGE */}
                    
                        <div className="">
                            <p className="fs-4 fw-600 c-accent caps pb-xs center balance lh-1">{ locale === 'ar' ? "تحت رعاية" : "Under the Patronage of" }</p>

                            <div className={CSS.patronBox}>

                                    <Pop>
                                <div className={CSS.patronBoxAvatar}>
                                        <div className={CSS.avatar}>
                                            <Image src={"https://static.swapcard.com/public/images/77e27e150ec94e1d8c549fbb6e6f065b.jpeg"} layout='fill' alt="" unoptimized />
                                        </div>
                                </div>
                                    </Pop>

                                <div className={CSS.patronBoxContent}>
                                    <Pop>
                                        {
                                            locale === 'ar'
                                            ?
                                                <>
                                                    <p className="fs-5 fw-600">صاحب السمو الأمير بندر بن سعود بن خالد آل سعود</p>
                                                    <p className="mt-xxs">
                                                        الأمين العام لمؤسسة الملك فيصل (KFF)
                                                    <br/>
                                                        رئيس مجلس إدارة الخزامى
                                                    </p>
                                                    <p className="mt-xxss">
                                                        <Link href={'/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU='}>
                                                            <a className="uLink c-accent">عرض السيرة الذاتية</a>
                                                        </Link>
                                                    </p>
                                                </>
                                            :
                                                <>
                                                    <p className="fs-5 fw-600 balance">HH Prince Bandar bin Saud bin Khalid Al Saud</p>
                                                    <p className="mt-xxs">
                                                        Secretary General King Faisal Foundation&nbsp;(KFF)<br/>
                                                        Chairman of the Board of Directors Al&nbsp;Khozama
                                                    </p>
                                                    <p className="mt-xxss">
                                                        <Link href={'/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU='}>
                                                            <a className="uLink c-accent">View biography</a>
                                                        </Link>
                                                    </p>
                                                </>
                                        }
                                        

                                    </Pop>
                                </div>
                            </div>
                            
                        </div>
                      

                    </div>
                </section>




            </VideoSection>

            

            {/* ADVISORY BOARD */}
            {/* <FixedBackgroundImage
                backgroundImageUrl={`/assets/img/sa/homepage/ab-meeting-2025-group.jpg`}
                overlay={`hsl(from var(--primary) h s l / .85)`}
            >

                <div className="container c-white center  maxw-60">
                        <Pop>
                        <p className="fs-1 fw-600 lh-1">
                            {
                                locale === 'ar'
                                    ? "جدول الأعمال – رؤى السوق الخمسة من المجلس الاستشاري لقمة مستقبل الضيافة بالمملكة العربية السعودية"
                                    : "Setting the Agenda – 5 Market Insights from FHS Saudi Arabia Advisory Board"
                            }
                        </p>
                        </Pop>
                </div>

                <div className="container columns-2 gap-md ai-center">
                    <section>
                        <Pop>
                            <ImageGallery
                                images={[
                                    {src: "/assets/img/sa/homepage/ab-meeting-2025-01.jpg", alt: ""},
                                    {src: "/assets/img/sa/homepage/ab-meeting-2025-02.jpg", alt: ""},
                                    {src: "/assets/img/sa/homepage/ab-meeting-2025-03.jpg", alt: ""},
                                    {src: "/assets/img/sa/homepage/ab-meeting-2025-04.jpg", alt: ""},
                                    {src: "/assets/img/sa/homepage/ab-meeting-2025-05.jpg", alt: ""},
                                    {src: "/assets/img/sa/homepage/ab-meeting-2025-06.jpg", alt: ""}
                                ]}
                            />
                        </Pop>
                    </section>

                    <section className="formatted c-white">

                        {
                            locale === 'ar'
                                ? (
                                    <>
                                        <Pop><p className="fs-5 pb-sm" dir="rtl">اجتمع مجلسنا الاستشاري مؤخرًا لتحديد أبرز التحديات والفرص التي ترسم المشهد العام لقطاع الضيافة في المملكة العربية السعودية. ومع اقتراب موعد انعقاد قمة مستقبل الضيافة بالمملكة العربية السعودية 2026، دعونا نستعرض معًا خمس نقاط استراتيجية تقود دفة النقاش:</p></Pop>

                                        <ul dir="rtl">
                                            <Pop><li>تنوع رأس المال: يتجه القطاع إلى تجاوز حدود التمويل المصرفي التقليدي، واستكشاف هياكل تمويل وأسواق رأس المال البديلة لدعم النمو المستقبلي.</li></Pop>

                                            <Pop><li>تحفيز الاستثمار الأجنبي المباشر: إنّ توضيح أنظمة تملك الأجانب للعقارات في المملكة يعتبر خطوة مهمة لتسريع نمو سوق الوحدات السكنية ذات العلامات التجارية واستقطاب المستثمرين الدوليين.</li></Pop>

                                            <Pop><li>ما بعد تجارب السفر لأغراض الأعمال: مع الأداء القوي لقطاع الشركات والمؤسسات، بدأ التركيز يتحول نحو تنشيط السياحة الترفيهية وزيادة نسب الإشغال في عطلات نهاية الأسبوع بالمدن الكبرى مثل الرياض.</li></Pop>

                                            <Pop><li>إحياء الأصول القائمة: بالتوازي مع صعود المشاريع العملاقة، بدأت تبرز الحاجة الملحّة إلى تحديث وإعادة توظيف الفنادق القائمة لضمان مواصلة قدرتها على التنافس والامتثال.</li></Pop>

                                            <Pop><li>تعزيز الهوية المحلية: في ظل توسّع العلامات الفاخرة العالمية، تتزايد الدعوات لدعم العلامات السعودية المحلية وتطوير الكفاءات والمواهب الوطنية لرسم مستقبل يعكس هوية المملكة الفريدة.</li></Pop>
                                        </ul>
                                    </>  
                                )
                                : (
                                    <>
                                        <Pop><p className="fs-5 pb-sm">Our Advisory Board recently convened to identify the critical challenges and opportunities shaping the Kingdom&apos;s hospitality landscape. As we look toward FHS Saudi Arabia 2026, here are the five strategic takeaways driving the conversation:</p></Pop>

                                        <ul>
                                            <Pop><li><strong>Diversifying Capital:</strong> The industry is looking to move beyond traditional banking reliance, exploring alternative finance structures and capital markets to fuel future growth.</li></Pop>

                                            <Pop><li><strong>Unlocking FDI:</strong> Clarifying foreign ownership regulations is seen as a crucial step to accelerate the booming market for branded residences and attract international investors.</li></Pop>

                                            <Pop><li><strong>Beyond Business Travel:</strong> With high performance in corporate sectors, the focus is shifting toward activating leisure tourism and boosting weekend occupancy in major cities like Riyadh.</li></Pop>

                                            <Pop><li><strong>Revitalizing Legacy Assets:</strong> As new giga-projects rise, there is a critical need to refurbish and repurpose existing hotels to ensure they remain competitive and compliant.</li></Pop>

                                            <Pop><li><strong>Championing Local Identity:</strong> While international luxury expands, there is a growing call to cultivate homegrown Saudi brands and nurture local talent to define the Kingdom&apos;s unique future.</li></Pop>
                                        </ul>
                                    </>   
                                )
                        }

                        

                    </section>
                </div>


                <div className="container center">
                    <div className="button-grid">
                        <Pop>
                            <ArrowButton 
                                href={ 'https://www.flickr.com/photos/benchevents/albums/72177720330222142/' } 
                                theme={{ arrow: `white`, border: `white`, label: `white` }}
                                target={`_blank`}
                            >
                                { locale === 'ar' ? `عرض المعرض الكامل` : `View Full Gallery`}
                            </ArrowButton>
                        </Pop>
                        <Pop>
                            <ArrowButton 
                                href={ '/sa/advisory-board' } 
                                theme={{ arrow: `white`, border: `white`, label: `white`}}
                            >
                                { locale === 'ar' ? `عرض جميع الأعضاء` : `View All Members`}
                            </ArrowButton>
                        </Pop>
                    </div>
                </div>
            </FixedBackgroundImage> */}
            


            {/* SPEAKERS */}
            <Section
                backgroundClass={`bg-primary-2-dark`}
                themeGraphics={
                    isDesktop
                    ?   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            width={`60vw`}
                            opacity={.4}
                            coordinates={{ bottom: 0, right: `-30vh`}}
                        />
                    :   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            width="180vw"
                            coordinates={{ top: `30%`}}
                        />
                }
            > 

                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 c-white">2026 Speakers</p>
                    </Fade>
                </div>
                <div className="container columns-5 gap-sm maxw-75" dir={ locale === 'ar' ? 'rtl' : ''}>
                    {
                        SPEAKER_DATA_SHORT.map( (profile, index) => (
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
                    <div className="button-grid">
                        <Pop>
                            <ArrowButton 
                                href={ '/sa/fhs-speakers' } 
                                theme={{ arrow: `white`, border: `white`, label: `white` }}
                                target={`_blank`}
                            >
                               View Past FHS Speakers
                            </ArrowButton>
                        </Pop>
                        <Pop>
                            <ArrowButton 
                                href={ '/sa/speakers' } 
                                theme={{ arrow: `white`, border: `white`, label: `white`}}
                            >
                                View 2026 Speakers
                            </ArrowButton>
                        </Pop>
                    </div>
                </div>
    
                
            </Section>

            

            {/* TICKER */}
            <div className="bg-secondary py-xs" dir={`ltr`}>
                {
                    locale === 'ar'
                        ? (
                            <Ticker direction={1}>
                                <p className="fs-4">&ensp;&bull;&ensp;• صفقات وفرص تجارية مُحققة بقيمة 1.6 مليار دولار في قمة مستقبل الضيافة 2025</p>
                                <p className="fs-4">&ensp;&bull;&ensp;• صفقات وفرص تجارية مُحققة بقيمة 1.6 مليار دولار في قمة مستقبل الضيافة 2025</p>
                            </Ticker>
                        ) : (
                            <Ticker>
                                <p className="fs-4">&ensp;&bull;&ensp;<strong>$1.6BN</strong> in business opportunities and deal volume gained in 2025 edition</p>
                                <p className="fs-4">&ensp;&bull;&ensp;<strong>$1.6BN</strong> in business opportunities and deal volume gained in 2025 edition</p>
                            </Ticker>
                        )
                }
            </div>


            
            {/* IN NUMBERS */}
            <Section
                flush
                backgroundClass={`bg-white`}
                themeGraphics={
                    <ThemeGraphic
                        src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                        width={`80vw`}
                        coordinates={{ left: `30vw`, top: `-20vh` }}
                        opacity={.25}
                    />
                }
            >
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
                                >{ locale === 'ar' ? `تحميل قائمة الحضور` : `Download Attendee List`}</Button>
                            </Pop>
                        </div>
                    </TitleBlock>

                    <ImpactFigure decal={'bg-neutral-01'} figure={1106} impact={ locale === 'ar' ? "مشاركًا" : 'Attendees'}  />
                    <ImpactFigure decal={'bg-neutral-02'} figure={37} impact={ locale === 'ar' ? "دولة" : 'Countries'}  />
                    <ImpactFigure decal={'bg-neutral-02'} figure={153} impact={ locale === 'ar' ? "متحدثًا" : 'Speakers'}  />
                    <ImpactFigure decal={'bg-neutral-01'} figure={85} impact={ locale === 'ar' ? "عدد الشركاء والجهات الراعية" : 'Sponsors & Partners'}  />
                    <ImpactFigure decal={'bg-neutral-02'} figure={68} unit={'%'} impact={ locale === 'ar' ? "من كبار المديرين التنفيذيين، ونواب الرؤساء، والمديرين" : 'C-Level Executives, VP & Directors'}  />
                    <ImpactFigure />
                    <ImpactFigure decal={'bg-neutral-01'} figure={24} unit={'%'} impact={ locale === 'ar' ? `من المستثمرين` : 'Investors'} />
                    <ImpactFigure decal={'bg-neutral-02'} prefix={'$'} figure={5.6} unit={'tn'} impact={ locale === 'ar' ? `تريليون دولار أمريكي إجمالي الأصول المُدارة` : 'AUM'} />
                    <ImageBlock imageUrl={'/assets/img/sa/impact-hero.jpg'} />
                </ImpactGrid>
            </Section>
            


            {/* TESTIMONIALS */}
            <Section
                backgroundClass={`bg-primary-dark`}
                themeGraphics={
                    isDesktop
                    ?   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            coordinates={{ top: `-50%`}}
                        />
                    :   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            width="150vw"
                            coordinates={{ top: `30%`}}
                        />
                        
                }
            >
                <div className={`container columns-3 gap-md`}>
                    {
                        (locale === 'ar' ? QUOTES_DATA_AR : QUOTES_DATA).map((quote, index) => (
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
            </Section>

            

            {/* THEMES */}
            <Section
                backgroundClass={`bg-primary`}
                themeGraphics={
                    isDesktop
                    ?   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            coordinates={{ top: `-20vh` }}
                            opacity={.25}
                        />
                    :   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            width="50vw"
                            coordinates={{ top: `-5vh`}}
                        />
                }
            >
                <ThemesSlider
                    heading={locale === 'ar' ? `محاور فعالية 2026` : `2026 Event Themes` }
                    data={locale === 'ar' ? THEMES_DATA_AR : THEMES_DATA}
                    link={'/sa/ai-session-summaries-2025'}
                    linkLabel={locale === 'ar' ? `تحميل ملخصات جلسات بالذكاء الاصطناعي` : 'Download AI Session Summaries'}
                />
            </Section>


            
            {/* SPONSORS */}
            <section className="block pb-0">
                <div className="container center">
                    <Pop><p className="fs-1 fw-600 c-primary balance">{locale === 'ar' ? `الشركاء الجدد` : `Partners Joining Us`}</p></Pop>
                </div>
            </section>
            <div className="py-xs mt-sm mb-lg" dir={`ltr`}>
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
            <Section
                backgroundClass={`bg-white`}
                themeGraphics={
                    <ThemeGraphic
                        src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                        width={`80vw`}
                        coordinates={{ left: 0, top: `20vh` }}
                        opacity={.25}
                    />
                }
            >
                <div className={`${CSS.highlightVideoGrid} container`}>
                    <Slide>
                        {
                            locale === 'ar' ? (
                                <p className='fs-1 fw-700 lh-1 c-secondary'>أبرز أحداث قمة مستقبل الضيافة بالمملكة العربية السعودية 2025</p>
                            ): (
                                <p className='fs-0 fw-700 lh-1'>Highlights from <span className='c-secondary'>FHS Saudi Arabia 2025</span></p>   
                            )
                        }
                    </Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://cms.thebench.com/assets/video/fhs-2025-sa-highlights.mp4`}  poster={'https://cms.thebench.com/assets/video/fhs-2025-sa-highlights-poster.jpg'} controls={true} />
                </div>

                <div className={`${CSS.photoGrid} container`}>
                    <Slide>
                        {
                            locale === 'ar' ? (
                                <p className='fs-0 fw-700 lh-1 mt-lg c-secondary'>2025 في صور</p>
                            ): (
                                <p className='fs-0 fw-700 lh-1 mt-lg'>2025 in <span className='c-secondary'>Photos</span></p> 
                            )
                        }
                    </Slide>
                    
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
                            <ArrowButton
                                href={`https://www.flickr.com/photos/benchevents/albums/`}
                                target='_blank'
                                theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)` }}
                            >{locale === 'ar' ? `عرض المعرض الكامل` : `View Full Gallery`}</ArrowButton>
                        </p>
                    </div>

                </div>
            </Section>


            <Footer />
            <LenisScroller />

        </div>
    )
}

Page.theme = 'sa-2025'


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