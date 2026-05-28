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
import Script from "next/script"

import useCustomMediaQuery from "../../hooks/useCustomMediaQuery"

import _ from 'lodash'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { AnimatedCounter } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { Logo } from "../../fuselage/theme/2025/sa/blocks/logo-ticker/logo-ticker"
import { ArticleScroller, Article } from "../../fuselage/theme/2025/sa/blocks/article-scroller/article-scroller"

import { VideoSection, Section } from '../../fuselage/theme/2026/sa/blocks/section'
import { ThemeGraphic } from '../../fuselage/theme/2026/sa/theme/theme-graphic'

import { ImageGallery } from "../../fuselage/components/image-gallery/image-gallery"
import { SlideoutCard } from "../../fuselage/components/slideout-card/slideout-card"
import { ContentCard } from '../../fuselage/components/content-card/content-card'
import { LayoutGallery } from "../../fuselage/components/layout-gallery/layout-gallery"
import { ContentCard as Post } from "../../fuselage/theme/2024/world/components/content-card/content-card"


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

const SPEAKER_DATA = [
    {
        url: `/sa/speakers/profile/khalid-saud-abu-haimed`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Abu-Haimed_Khalid-Saud_pic2.jpg',
        fullName: 'Khalid Saud Abu Haimed',
        jobTitle: 'Chief Executive Officer',
        company: 'Al Khozama Investment Company',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDU5MjM3ODY=`,
        photoUrl: 'https://static.swapcard.com/public/images/20c5160961534044aaa6f2f8bb4724a8.jpeg',
        fullName: 'Dr. Abdullah Alabdulkarim',
        jobTitle: 'Deputy Minister for Sectorial Human Capability Development',
        company: 'Ministry of Transport and Logistics Services',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDYwNTk5MDI=`,
        photoUrl: 'https://static.swapcard.com/public/images/b8726b4ca45c4ca397593a045c5de2c7.jpeg',
        fullName: 'Omar Alabdullatif',
        jobTitle: 'Chief Executive Officer',
        company: 'Blacksand',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQ1NTIyMzA=`,
        photoUrl: 'https://static.swapcard.com/public/images/e0dd7c51a08843e895efbd901a951270.jpeg',
        fullName: 'Meshari Al Nahari',
        jobTitle: 'Chief Executive Officer',
        company: 'ASFAR & Aseer Investment Company',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDU4NzkyMDQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/712a64a2e79245bfbe56770cc0001b6b.jpeg',
        fullName: 'Ragad Al-Nasser',
        jobTitle: 'Chief Investment Officer',
        company: 'Jabal Ohod Holding',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ2Mjc=`,
        photoUrl: 'https://static.swapcard.com/public/images/7b395ba5c8d146cb970582231d498e01.jpeg',
        fullName: 'Sultan Bader Al-Otaibi',
        jobTitle: 'Chief Executive Officer',
        company: 'TAIBA',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQ1NTIwMTM=`,
        photoUrl: 'https://static.swapcard.com/public/images/fc2becbdfdef4dab87bed93998b8fdfe.jpeg',
        fullName: 'Khalid Al Gahtani',
        jobTitle: 'Chairman & CEO',
        company: 'Rikaz Properties',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/hossam-al-basrawi.jpg',
        fullName: 'Hossam Al-Basrawi',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQxOTMxMjE=`,
        photoUrl: 'https://static.swapcard.com/public/images/8744509ba8354d31abfb050affddc9ed.jpeg',
        fullName: 'Samer Sabra',
        jobTitle: 'Chief Hospitality Officer',
        company: 'Jabal Omar Development Company',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDUwMDY1OTU=`,
        photoUrl: 'https://static.swapcard.com/public/images/3aa57389f5ad4d348d08b5ce7f27808b.jpeg',
        fullName: 'Gregory Djerejian',
        jobTitle: 'Group Head of Investments and Group Chief Legal Officer',
        company: 'Red Sea Global',
    },
]
const SPEAKER_DATA_AR = [
    {
        url: `/sa/speakers/profile/khalid-saud-abu-haimed`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Abu-Haimed_Khalid-Saud_pic2.jpg',
        fullName: 'خالد سعود أبو حيمد',
        jobTitle: 'الرئيس التنفيذي',
        company: 'شركة الخزامى للاستثمار',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDU5MjM3ODY=`,
        photoUrl: 'https://static.swapcard.com/public/images/20c5160961534044aaa6f2f8bb4724a8.jpeg',
        fullName: 'Dr. Abdullah Alabdulkarim',
        jobTitle: 'Deputy Minister for Sectorial Human Capability Development',
        company: 'Ministry of Transport and Logistics Services',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDYwNTk5MDI=`,
        photoUrl: 'https://static.swapcard.com/public/images/b8726b4ca45c4ca397593a045c5de2c7.jpeg',
        fullName: 'Omar Alabdullatif',
        jobTitle: 'Chief Executive Officer',
        company: 'Blacksand',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQ1NTIyMzA=`,
        photoUrl: 'https://static.swapcard.com/public/images/e0dd7c51a08843e895efbd901a951270.jpeg',
        fullName: 'Meshari Al Nahari',
        jobTitle: 'Chief Executive Officer',
        company: 'ASFAR & Aseer Investment Company',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDU4NzkyMDQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/712a64a2e79245bfbe56770cc0001b6b.jpeg',
        fullName: 'Ragad Al-Nasser',
        jobTitle: 'Chief Investment Officer',
        company: 'Jabal Ohod Holding',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ2Mjc=`,
        photoUrl: 'https://static.swapcard.com/public/images/7b395ba5c8d146cb970582231d498e01.jpeg',
        fullName: 'سلطان بدر العتيبي',
        jobTitle: 'الرئيس التنفيذي',
        company: 'شركة طيبة',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQ1NTIwMTM=`,
        photoUrl: 'https://static.swapcard.com/public/images/fc2becbdfdef4dab87bed93998b8fdfe.jpeg',
        fullName: 'خالد القحطاني',
        jobTitle: 'رئيس مجلس الإدارة والرئيس التنفيذي',
        company: 'شركة ركاز العقارية',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/hossam-al-basrawi.jpg',
        fullName: 'Hossam Al-Basrawi',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDQxOTMxMjE=`,
        photoUrl: 'https://static.swapcard.com/public/images/8744509ba8354d31abfb050affddc9ed.jpeg',
        fullName: 'سامر صبرا',
        jobTitle: 'رئيس قطاع الضيافة',
        company: 'شركة جبل عمر للتطوير',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDUwMDY1OTU=`,
        photoUrl: 'https://static.swapcard.com/public/images/3aa57389f5ad4d348d08b5ce7f27808b.jpeg',
        fullName: 'Gregory Djerejian',
        jobTitle: 'Group Head of Investments and Group Chief Legal Officer',
        company: 'Red Sea Global',
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

const INVESTORS = [
    { title: "AINA Hospitality"},
    { title: "Al Rajhi Capital"},
    { title: "Al-Ameen Development Company"},
    { title: "Almusbah"},
    { title: "AOAR Group"},
    { title: "AQR - Refad Real Estate"},
    { title: "Arbireo Capital"},
    { title: "Aseer Investment Company"},
    { title: "Aseel Holding"},
    { title: "BDPST Group"},
    { title: "Blacksand"},
    { title: "Bugshan Investment"},
    { title: "Courbet Heritage"},
    { title: "Dan Company"},
    { title: "Ezdaher"},
    { title: "First Projects Co."},
    { title: "GLOBAL MUTUAL"},
    { title: "HAMA MEA"},
    { title: "Jabal Ohod Holding"},
    { title: "Jabal Omar Development Company"},
    { title: "JP Morgan"},
    { title: "Majid Al Futtaim Development"},
    { title: "Millat Group"},
    { title: "Naif Al Rajhi Investment Company"},
    { title: "New Murabba"},
    { title: "Polis SGR p.A."},
    { title: "Pulse Hotels and Resorts"},
    { title: "Radar Holdings"},
    { title: "RG"},
    { title: "RV Capital"},
    { title: "SAB Invest"},
    { title: "Saud AlArife Group"},
    { title: "SEDCO Capital"},
    { title: "SOBCO"},
    { title: "Soudah Development Company"},
    { title: "Thameen Real Estate"},
    { title: "Twenty14 Holdings"},
]



export default function Page({ seomatic, partners, content }) {
    
    const { locale } = useRouter()

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')


    return (
        <div>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( seomatic ) }
            </Head>

            
            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            


            {/* INTRO */}
            <VideoSection
                backgroundClass={`bg-primary`}
                video={'https://cms.thebench.com/assets/video/fhs-2025-sa-wrap-up-opt.mp4'}
                poster={'/assets/video/fhs-2025-sa-wrap-up-poster.jpg'}
                minHeight={isDesktop ? `100vh` : `50vh`}
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

                {/* <div className="bg-white p-xs center balance" style={{ position: `absolute`, top: 0, right: 0, left: 0 }}>
                    <p><strong>FHS Saudi Arabia is currently going ahead as scheduled.</strong> We place the utmost importance on the safety and wellbeing of our customers, partners and colleagues. The situation in the region is under close review, and we will provide updates here should circumstances change.</p>
                </div> */}
               
                <div style={{ height: isDesktop ? `20vh` : `30vh`}}/>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={` fs-0 fw-600 c-white lh-1 center mx-auto`}
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
                    className={`fs-4 fw-300 c-white center mt-xs`} 
                >
                    {
                        locale === 'ar'
                            ? `22-24 June 2026, Mandarin Oriental Al Faisaliah, Riyadh`
                            : `22-24 June 2026, Mandarin Oriental Al Faisaliah, Riyadh`
                    }
                </motion.p>

                <Fade>
                    <div className="mt-md center button-grid w-100pc">
                        <Pop inline>
                            <Button 
                                href={'/sa/attendee-list-2026'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >{ locale === 'ar' ? `قائمة الحضور لعام 2026` : `2026 Attendee List`}</Button>
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
                            <p className="fs-4 fw-600 c-accent caps pb-xs">{locale === 'ar' ? "الجهات الراعية المستضيفة" : "Host Partners"}</p>
                        
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
                                                    <p className="fs-6 fw-600">صاحب السمو الأمير بندر بن سعود بن خالد آل سعود</p>
                                                    <p className="mt-xxs">
                                                        الأمين العام لمؤسسة الملك فيصل (KFF)
                                                    <br/>
                                                        رئيس مجلس إدارة الخزامى
                                                    </p>
                                                    <p className="mt-xxs">
                                                        <Link href={'/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU='}>
                                                            <a className="uLink c-accent">عرض السيرة الذاتية</a>
                                                        </Link>
                                                    </p>
                                                </>
                                            :
                                                <>
                                                    <p className="fs-6 fw-600 lh-1 balance">HH Prince Bandar bin Saud bin Khalid Al Saud</p>
                                                    <p className="mt-xxs fs-xs">
                                                        Secretary General King Faisal Foundation&nbsp;(KFF)<br/>
                                                        Chairman of the Board of Directors Al&nbsp;Khozama
                                                    </p>
                                                    <p className="mt-xxs">
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



            {/* RESULTS 2025 */}
            <div className="bg-primary-2 py-xs">
                <Ticker duration={15}>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">1106</strong> Attendees</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">$1.6B</strong> Business Opportunities</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">24%</strong> Active Investors</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">$5.6tn</strong> Assets Under Management (AUM)</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">81%</strong> C-Level Representation</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">11</strong> Landmark Deals Announced</p>
                </Ticker>
            </div>



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
                        <p className="fs-2 fw-600 c-white">Thought Leaders Taking The Stage</p>
                    </Fade>
                </div>

                <div className="container columns-5 gap-sm" dir={ locale === 'ar' ? 'rtl' : ''}>
                    {
                        ( locale === 'ar' ? SPEAKER_DATA_AR : SPEAKER_DATA ).map( (profile, index) => (
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
                                href={ '/sa/speakers' } 
                                theme={{ arrow: `white`, border: `white`, label: `white`}}
                            >
                                { locale === 'ar' ? `عرض قائمة المتحدثين في قمة مستقبل الضيافة 2026` : `View 2026 Speakers` }
                            </ArrowButton>
                        </Pop>
                        <Pop>
                            <ArrowButton 
                                href={ '/sa/fhs-speakers' } 
                                theme={{ arrow: `white`, border: `white`, label: `white` }}
                                target={`_blank`}
                            >
                                { locale === 'ar' ? `عرض المتحدثين السابقين في قمة مستقبل الضيافة` : `View Past FHS Speakers` }
                            </ArrowButton>
                        </Pop>
                    </div>
                </div>
    
                
            </Section>



            {/* PARTNERS */}
            <section className="block">
                <div className="container center">
                    <Pop><p className="fs-2 fw-600 c-primary balance">{
                        locale === 'ar'
                            ? `تعرف على شركائنا`
                            : `Meet Our Partners`
                    }</p></Pop>
                </div>

                <div className="container mt-lg">
                    <LayoutGallery>
                        <PartnerGroup partnerData={partners} start={0} end={15} />
                        <PartnerGroup partnerData={partners} start={16} end={30} />
                        <PartnerGroup partnerData={partners} start={31} end={45} />
                        <PartnerGroup partnerData={partners} start={46} end={60} />
                    </LayoutGallery>
                </div>
            </section>




            {/* INVESTORS */}
            <section className="bg-primary">        
                <div className="container py-md" dir={`ltr`}>
                    <Pop><p className="fs-2 fw-600 balance center pb-sm">Capital in the Room</p></Pop>
                    <Ticker duration={40}>
                        {
                            INVESTORS.map((investor, index) => (
                                <div key={index} style={{ marginRight: 10 }}>
                                    <p className="fs-5 fw-500"><span className="c-accent">&bull;</span> {investor.title}</p>
                                </div>
                            ))
                        }
                    </Ticker>
                </div>
            </section>
     

            
            {/* WHO ATTENDS */}
            <section className="block bg-primary-2">
                <div className="container center">
                    <p className="fs-2 fw-500">
                        { locale === 'ar' ? `الحضور` : `Who Attends` }
                    </p>
                </div>

                <div
                    className="container"
                    dir={locale === 'ar' ? 'rtl' : ''}
                    style={{
                        display: `flex`,
                        gap: `var(--space-sm)`,
                        flexWrap: `wrap`,
                        justifyContent: `center`
                    }}
                >

                    <SlideoutCard title={locale === 'ar' ? `المطورون` : `Developers`} imageSrc={`/assets/img/sa/homepage/attends-01.jpg`}>
                        <div className="formatted">
                            {
                                locale === 'ar'
                                    ?
                                    <ul>
                                        <li>شركات تطوير المشاريع العملاقة</li>
                                        <li>فرق تطوير المدن الثانوية</li>
                                        <li>مطورو الوحدات السكنية ذات العلامات الفندقية</li>
                                        <li>مطورو المشاريع متعددة الاستخدامات والمخططات الرئيسية</li>
                                    </ul>
                                    :
                                    <ul>
                                        <li>Mega-Project Development Companies</li>
                                        <li>Secondary Cities Development Teams</li>
                                        <li>Branded Residences Developers</li>
                                        <li>Mixed-Use & Masterplan Developers</li>
                                    </ul>   
                            }
                        </div>
                    </SlideoutCard>

                    <SlideoutCard title={locale === 'ar' ? `المستثمرون` : `Investors`} imageSrc={`/assets/img/sa/homepage/attends-investors.jpg`}>
                        <div className="formatted">
                            {
                                locale === 'ar'
                                    ?
                                    <ul>
                                        <li>المستثمرون في قطاع الفنادق من المؤسسات</li>
                                        <li>البنوك</li>
                                        <li>المكاتب العائلية</li>
                                        <li>صناديق الأسهم الخاصة</li>
                                        <li>صناديق الثروة السيادية</li>
                                    </ul>
                                    :
                                    <ul>
                                        <li>Institutional Hotel Investors</li>
                                        <li>Banks</li>
                                        <li>Family Offices</li>
                                        <li>Private Equity Funds</li>
                                        <li>Sovereign Wealth Funds</li>
                                    </ul>
                            }
                        </div>
                    </SlideoutCard>

                    <SlideoutCard title={locale === 'ar' ? `المشغّلون` : `Operators`} imageSrc={`/assets/img/sa/homepage/attends-03.jpg`}>
                        <div className="formatted">
                            {
                                locale === 'ar'
                                    ?
                                    <ul>
                                        <li>مشغلو الفنادق السعوديون</li>
                                        <li>سلاسل الفنادق الدولية</li>
                                        <li>فنادق البوتيك والعلامات التجارية الخاصة بأسلوب الحياة</li>
                                        <li>العلامات التجارية في مجال العافية والسبا</li>
                                    </ul>
                                    :
                                    <ul>
                                        <li>Saudi-Owned Hotel Operators</li>
                                        <li>International Hotel Chains</li>
                                        <li>Boutique & Lifestyle Brands</li>
                                        <li>Wellness & Spa Brands</li>
                                    </ul>
                            }
                        </div>
                    </SlideoutCard>

                    <SlideoutCard title={locale === 'ar' ? `الجهات الحكومية` : `Government Officials`} imageSrc={`/assets/img/sa/homepage/attends-govt.jpg`}>
                        <div className="formatted">
                            {
                                locale === 'ar'
                                    ?
                                    <ul>
                                        <li>وزارة السياحة</li>
                                        <li>وزارة الاستثمار</li>
                                        <li>الهيئة السعودية للسياحة</li>
                                        <li>الهيئات الملكية</li>
                                    </ul>
                                    :
                                    <ul>
                                        <li>Ministry of Tourism</li>
                                        <li>Ministry of Investment</li>
                                        <li>Saudi Tourism Authority</li>
                                        <li>Royal Commissions</li>
                                    </ul>
                            }
                        </div>
                    </SlideoutCard>

                    <SlideoutCard title={locale === 'ar' ? `مُمكّنو القطاع والمستشارون` : `Enablers & Advisors`} imageSrc={`/assets/img/sa/homepage/attends-enablers.jpg`}>
                        <div className="formatted">
                            {
                                locale === 'ar'
                                    ?
                                    <ul>
                                        <li>المحامون</li>
                                        <li>المستشارون</li>
                                        <li>المصممون</li>
                                    </ul>
                                    :
                                    <ul>
                                        <li>Lawyers</li>
                                        <li>Consultant</li>
                                        <li>Designers</li>
                                    </ul>
                            }
                        </div>
                    </SlideoutCard>
                    
                </div>
            </section>



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


            
            {/* LINKEDIN POSTS */}
            <section className="block bg-primary-2">
                <div className="container center">
                    <Pop><p className="fs-2 fw-600 balance">Join The Buzz</p></Pop>
                </div>

                <div className="container columns-3 gap-sm">
   
                    <Pop><a href="https://www.linkedin.com/posts/coachpedari_fhssaudiarabia-saudiarabia-vision2030-share-7462362617035038720-6TS2" target="_blank" rel="noreferrer"><img src="/assets/img/sa/homepage/linkedin/li-02.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem`, border: `1px solid var(--primary-2)`}} /></a></Pop>
                    
                    <Pop><a href="https://www.linkedin.com/posts/bandaradnan_fhs-futurehospitalitysummit-fhssaudiarabia-share-7459158907719073792-FE3i/" target="_blank" rel="noreferrer"><img src="/assets/img/sa/homepage/linkedin/li-04.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem`, border: `1px solid var(--primary-2)` }} /></a></Pop>
                    
                    <Pop><a href="https://www.linkedin.com/posts/huda-al-kharji-4568a8195_im-excited-to-be-attending-fhs-saudi-arabia-share-7459132983875276800-W93-/" target="_blank" rel="noreferrer"><img src="/assets/img/sa/homepage/linkedin/li-05.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem`, border: `1px solid var(--primary-2)` }} /></a></Pop>
                    
                    <Pop><a href="https://www.linkedin.com/posts/daniel-johansson-b155aa9_im-excited-to-attend-fhs-saudi-arabia-2026-share-7458116318257410049-XaBq" target="_blank" rel="noreferrer"><img src="/assets/img/sa/homepage/linkedin/li-06.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem`, border: `1px solid var(--primary-2)` }} /></a></Pop>
                    
                    <Pop><a href="https://www.linkedin.com/posts/futurehospitalitysummit-fhs-share-7459609101669597184-iH3h" target="_blank" rel="noreferrer"><img src="/assets/img/sa/homepage/linkedin/li-08.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem`, border: `1px solid var(--primary-2)` }} /></a></Pop>
                    
                    <Pop><a href="https://www.linkedin.com/posts/ragad-al-nasser-93327945_fhssaudiarabia-saudileadstheway-share-7459910964583268352-G8K3" target="_blank" rel="noreferrer"><img src="/assets/img/sa/homepage/linkedin/li-09.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem`, border: `1px solid var(--primary-2)` }} /></a></Pop>
                    
                </div>
            </section>



            {/* THOUGHT LEADERSHIP */}
            <section className="block bg-primary">
                <div className="container center">
                    <Pop><p className="fs-2 fw-600 balance">Thought Leadership in Action</p></Pop>
                </div>

                <div className="container columns-3 gap-sm">
                    {
                        content &&
                        content.map((entry, index) => (
                            <Post
                                key={index}
                                url={`/egypt/content-library/${entry.slug}`}
                                heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                heading={entry.title}
                                excerpt={entry.excerpt}
                                contentTypes={entry.contentTypes}
                                postDate={entry.postDate}
                                type={entry.contentTypes[0].slug}
                            />
                        ))
                    }
                </div>
            </section>



            {/* TESTIMONIALS */}
            <Section
                backgroundClass={`bg-primary-2`}
                themeGraphics={
                    isDesktop
                    ?   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            coordinates={{ bottom: `-20%`, right: `-10%`}}
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

                <div className="container center">
                    <Pop>
                        <ArrowButton 
                            href={ 'https://youtu.be/JZtXoVLgCFg?si=CSrqL-V2FsoJjGFd' } 
                            theme={{ arrow: `white`, border: `white`, label: `white` }}
                            target={`_blank`}
                        >
                            { locale === 'ar' ? `اسمع من شركائنا` : `Hear from our partners` }
                        </ArrowButton>
                    </Pop>
                </div>
            </Section>



            {/* ANNOUNCEMENTS */}
            <Section
                backgroundClass={`bg-primary`}
                themeGraphics={
                    isDesktop
                    ?   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            coordinates={{ left: `-20%`, top: `-10%`}}
                        />
                    :   <ThemeGraphic
                            src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                            opacity={.4}
                            width="150vw"
                            coordinates={{ top: `30%`}}
                        />
                        
                }
            >

                <div className="container center">
                    <Fade>
                        <p className="fs-2 fw-600 c-white">
                            {
                                locale === 'ar'
                                    ? `إعلانات وتوقيعات عام 2025`
                                    : `2025 Signings & Announcements`
                            }
                        </p>
                    </Fade>
                </div>

                <div className={`container columns-4 gap-xs`}>
                    {
                        ( locale === 'ar' ? ARTICLE_DATA_AR : ARTICLE_DATA).map((article, index) => (
                            <ContentCard
                                key={index}
                                heroUrl={article.heroUrl}
                                heading={article.title}
                                excerpt={article.excerpt}
                                url={article.url}
                            />
                        ))
                    }
                </div>

                <div className="container center">
                    <Pop>
                        <ArrowButton 
                            href={ '/sa/content-library/category/press-room' } 
                            theme={{ arrow: `white`, border: `white`, label: `white` }}
                            target={`_blank`}
                        >
                            {
                                locale === 'ar'
                                    ? `أخر الأخبار والمستجدات`
                                    : `Latest News & Updates`
                            }
                            
                        </ArrowButton>
                    </Pop>
                </div>
            </Section>


            


            <Footer/>
            <LenisScroller />

        </div>
    )
}

Page.theme = 'sa-2025'




const PartnerGroup = ({ partnerData, start, end }) => {
    return (
        <div
            style={{
                display: `flex`,
                flexWrap: `wrap`,
                gap: `var(--space-sm)`,
                justifyContent: `center`
            }}
        >
            {
                partnerData.slice(start, end).map(partner => (
                    <div key={partner.id} style={{ marginRight: 10 }}>
                        <Logo logoUrl={partner.logoUrl} />
                    </div>
                ))
            }
        </div>
    )
}


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


const Card = ({ children }) => {
    return (
        <Pop>
            <div className="bg-primary-2 p-sm" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center` }}>
                { children }
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

                podcasts: entries(
                    section: "contentLibrary"
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"]
                    id: [ 310910, 310245, 310543 ]
                ){
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        excerpt
                        contentLibraryHero {
                            id
                            url
                            width
                            height
                        }
                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                                slug
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
            content: pageData.data.podcasts,
		}
	}
}