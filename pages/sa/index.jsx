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
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { VideoTestimonial } from '../../fuselage/theme/2025/sa/components/video-testimonial/video-testimonial'
import { ImpactCard } from "../../ui/components/impact-card"
import { BarChart, Field } from '../../ui/components/bar-chart'
import { GlobalMap, Region, Bubble } from '../../ui/components/global-map'


import CSS from '../../fuselage/theme/2025/sa/css/homepage.module.css'


import { THEMES_DATA, THEMES_DATA_AR } from "./themes"




export const ARTICLE_DATA = [
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/RM206283.jpg',
        title: 'Blacksand and Marriott International Announce Landmark Deal to Open 10 Hotels in Saudi Arabia',
        excerpt: 'Plans include the development of hotels across Marriott’s luxury, premium, select and long-stay brands.',
        url: '/sa/content-library/blacksand-and-marriott-international-announce-landmark-deal-to-open-10-hotels-in-saudi-arabia',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/IMG_4161.jpg',
        title: 'Shaza Hotels Expands Saudi Arabia Portfolio with Signing of Shaza Riyadh Stables Resort',
        excerpt: 'Shaza Hotels has signed an HMA with FSM Hospitality Company for Shaza Riyadh Stables Resort, a luxury equestrian and lifestyle destination in Al Jubailah, Riyadh.',
        url: '/sa/content-library/shaza-hotels-expands-saudi-arabia-portfolio-with-signing-of-shaza-riyadh-stables-resort',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/AY24762-copy.jpg.jpeg',
        title: 'Sophos Hotels Co. and SAS Hotels Co. expand Partnership with Four Points by Sheraton Hafar Al Batin',
        excerpt: 'Sophos Hotels Co. and SAS Hotels Co. have announced a new agreement to manage Four Points by Sheraton Hafar Al Batin, set to open in July 2026.',
        url: '/sa/content-library/sophos-hotels-co-and-sas-hotels-co-expand-partnership-with-four-points-by-sheraton-hafar-al-batin',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/AY24508.jpg',
        title: 'Al Khozama to Operate Prime Club in Riyadh’s Al Nakheel District',
        excerpt: 'Al Khozama has signed an Operating Agreement with Tharawat and Mawan Real Estate Development to operate Prime Club in Riyadh’s Al Nakheel district.',
        url: '/sa/content-library/al-khozama-to-operate-prime-club-in-riyadhs-al-nakheel-district',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/AY24590.jpg',
        title: 'Al Khozama and Mishal bin Abdullah Al Rajhi Investment Company Sign an Agreement to Develop and Operate Maraya Al Faisaliah in Wadi Hanifah',
        excerpt: 'Al Khozama has signed an agreement with Mishal bin Abdullah Al Rajhi Investment Company to develop and operate Maraya Al Faisaliah in Wadi Hanifah, Riyadh.',
        url: '/sa/content-library/al-khozama-and-mishal-bin-abdullah-al-rajhi-investment-company-sign-an-agreement-to-develop-and-operate-maraya-al-faisaliah-in-wadi-hanifah',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/AY24474.jpg',
        title: 'Al Khozama and Ethar Al Jawdah Develop The Mark in Riyadh’s Al Ghadeer District',
        excerpt: 'Al Khozama, in partnership with Ethar Al Jawdah, has announced The Mark, a mixed-use destination in Riyadh’s Al Ghadeer District.',
        url: '/sa/content-library/al-khozama-and-ethar-al-jawdah-develop-the-mark-in-riyadhs-al-ghadeer-district',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/Handwritten.jpg',
        title: 'Accor and Amsa Hospitality Expand Handwritten Collection in Saudi Arabia with First Opening in Qassim',
        excerpt: 'Accor and Amsa Hospitality have announced the signing of The Palm Qassim – Handwritten Collection, the first Handwritten Collection property in Saudi Arabia.',
        url: '/sa/content-library/accor-and-amsa-hospitality-expand-handwritten-collection-in-saudi-arabia-with-first-opening-in-qassim',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/Unknown_2026-06-24-071324_vmle.jpeg',
        title: 'Amsa Hospitality and Radisson Hotel Group Announce Hotel Apartments and Villas in Riyadh’s Diplomatic Quarte',
        excerpt: 'Amsa Hospitality and Radisson Hotel Group have announced the signing of AMSA VUE Riyadh Diplomatic Quarter, a Member of Radisson Individuals, at FHS Saudi Arabia 2026.',
        url: '/sa/content-library/amsa-hospitality-and-radisson-hotel-group-announce-hotel-apartments-and-villas-in-riyadhs-diplomatic-quarte',
    },

]
const SPEAKER_DATA = [
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDcxMzA0NTQ=",
        photoUrl: "https://static.swapcard.com/public/images/5ffc67d0faa04b8dadfd1fe2268b5eeb.png",
        fullName: "HRH Prince Turki AlFaisal Bin Abdulaziz Al Saud",
        jobTitle: "Chairman of Board of Directors",
        company: "King Faisal Center for Research and Islamic Studies",
    },
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDY5NDA4MTE=",
        photoUrl: "https://static.swapcard.com/public/images/f44090065da44732b82bc5f269b2bbb0.png",
        fullName: "Mahmoud Abdulhadi",
        jobTitle: "Deputy Minister, Destination Enablement",
        company: "Ministry of Tourism of Saudi Arabia",
    },
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
const INVESTORS_AR = [
    { title: "آينا للضيافة"},
    { title: "شركة الراجحي المالية"},
    { title: "شركة الأمين للتطوير"},
    { title: "المصباح"},
    { title: "مجموعة أوار"},
    { title: "إيه كيو آر - رفاد العقارية"},
    { title: "أربيريو كابيتال"},
    { title: "شركة عسير للاستثمار"},
    { title: "أصيل القابضة"},
    { title: "مجموعة بودابست"},
    { title: "بلاك ساند"},
    { title: "بقشان للاستثمار"},
    { title: "كوربيه هيريتيج"},
    { title: "شركة دان"},
    { title: "إزدهار"},
    { title: "شركة فيرست بروجيكتس"},
    { title: "جلوبال ميوتشال"},
    { title: "منظمة مديري أصول الضيافة في الشرق الأوسط وإفريقيا"},
    { title: "جبل أحد القابضة"},
    { title: "شركة جبل عمر للتطوير"},
    { title: "جي بي مورغان"},
    { title: "ماجد الفطيم للتطوي"},
    { title: "مجموعة ميلات"},
    { title: "شركة نايف الراجحي الاستثمارية"},
    { title: "المربع الجديد"},
    { title: "بوليس لإدارة الأصول ش.م.ع"},
    { title: "فنادق ومنتجعات بالس"},
    { title: "رادار القابضة"},
    { title: "آر جي"},
    { title: "آر في كابيتال"},
    { title: "إس إيه بي للاستثمار"},
    { title: "مجموعة سعود العريفي"},
    { title: "سدكو كابيتال"},
    { title: "سوبكو"},
    { title: "شركة السودة للتطوير"},
    { title: "ثمين العقارية"},
    { title: "توينتي 14 القابضة"},
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
const THOUGHT_LEADERSHIP = [
    {
        "__typename": "contentLibrary_article_Entry",
        "id": "310910",
        "slug": "fhs-podcast-episode-141-title-saudi-arabias-tourism-transformation-through-the-eyes-of-rotana",
        "title": "FHS Podcast Episode 141: Saudi Arabia’s Tourism Transformation Through the Eyes of Rotana",
        "postDate": "2026-05-25T07:32:00+01:00",
        "excerpt": "In this episode of the FHS podcast, Eddy Tannous, Chief Operating Officer, Rotana Hotels, shares Rotana's expansion strategy in the Kingdom. From expansion into secondary cities to bringing the world to Saudi Arabia with events like the Expo and the World Cup, Saudi Arabia is planning the next chapter of global hospitality, and Rotana is spearheading this transformation.",
        "contentLibraryHero": [
            {
                "__typename": "contentLibrary_Asset",
                "id": "310911",
                "url": "https://cms.thebench.com/assets/content-library/img/FHS-SA/Eddy-Tannous_Thumbnail_16x9.jpg",
                "width": 1920,
                "height": 1080
            }
        ],
        "contentTypes": [
            {
                "__typename": "contentLibrary_Category",
                "id": "7701",
                "title": "Podcast",
                "slug": "podcast"
            }
        ]
    },
    {
        "__typename": "contentLibrary_article_Entry",
        "id": "310543",
        "slug": "fhs-saudi-arabia-pre-event-feature-hospitality-investment-outlook",
        "title": "FHS Saudi Arabia Pre-event feature: hospitality investment outlook",
        "postDate": "2026-05-21T13:58:00+01:00",
        "excerpt": "Saudi Arabia is set to deliver 358,000 new hotel rooms to meet rising tourism demand and prepare for major upcoming global events, unleashing a wealth of hospitality investment opportunities in the Kingdom.",
        "contentLibraryHero": [
            {
                "__typename": "contentLibrary_Asset",
                "id": "310544",
                "url": "https://cms.thebench.com/assets/content-library/img/FHS-SA/pre-event-feature.png",
                "width": 1280,
                "height": 720
            }
        ],
        "contentTypes": [
            {
                "__typename": "contentLibrary_Category",
                "id": "7702",
                "title": "Press room",
                "slug": "press-room"
            }
        ]
    },
    {
        "__typename": "contentLibrary_article_Entry",
        "id": "310245",
        "slug": "fhs-podcast-episode-138-the-attention-economy-of-hospitality-with-michael-cirino",
        "title": "FHS Podcast Episode 138: The Attention Economy of Hospitality with Michael Cirino",
        "postDate": "2026-05-19T07:15:00+01:00",
        "excerpt": "In this episode of FHS Podcast, we talk about the attention economy of hospitality; it’s no longer enough to build beautiful spaces. The real challenge is creating moments that capture attention, spark emotion, and stay with people long after they leave.\nJoining us is Michael Cirino, Founder and Chief Creative Officer of House of Attention, an award-winning creative studio redefining what hospitality experiences can be. With over two decades of work at the intersection of storytelling, technology, and physical space, Michael has built immersive concepts that blur the lines between dining, entertainment, art, and brand.",
        "contentLibraryHero": [
            {
                "__typename": "contentLibrary_Asset",
                "id": "310246",
                "url": "https://cms.thebench.com/assets/content-library/img/FHS-SA/Michael-Cirino_Thumbnail_16x9.jpg",
                "width": 1920,
                "height": 1080
            }
        ],
        "contentTypes": [
            {
                "__typename": "contentLibrary_Category",
                "id": "7701",
                "title": "Podcast",
                "slug": "podcast"
            }
        ]
    }
]
const THOUGHT_LEADERSHIP_AR = [
    {
        "__typename": "contentLibrary_article_Entry",
        "id": "310910",
        "slug": "fhs-podcast-episode-141-title-saudi-arabias-tourism-transformation-through-the-eyes-of-rotana",
        "title": "بودكاست قمة مستقبل الضيافة – الحلقة 141: تحوّل السياحة في السعودية من منظور مجموعة روتانا",
        "postDate": "2026-05-25T07:32:00+01:00",
        "excerpt": "In this episode of the FHS podcast, Eddy Tannous, Chief Operating Officer, Rotana Hotels, shares Rotana's expansion strategy in the Kingdom. From expansion into secondary cities to bringing the world to Saudi Arabia with events like the Expo and the World Cup, Saudi Arabia is planning the next chapter of global hospitality, and Rotana is spearheading this transformation.",
        "contentLibraryHero": [
            {
                "__typename": "contentLibrary_Asset",
                "id": "310911",
                "url": "https://cms.thebench.com/assets/content-library/img/FHS-SA/Eddy-Tannous_Thumbnail_16x9.jpg",
                "width": 1920,
                "height": 1080
            }
        ],
        "contentTypes": [
            {
                "__typename": "contentLibrary_Category",
                "id": "7701",
                "title": "Podcast",
                "slug": "استمع الآن"
            }
        ]
    },
    {
        "__typename": "contentLibrary_article_Entry",
        "id": "310543",
        "slug": "fhs-saudi-arabia-pre-event-feature-hospitality-investment-outlook",
        "title": "مقال ما قبل قمة مستقبل الضيافة بالمملكة العربية السعودية: نظرة على آفاق الاستثمار في قطاع الضيافة",
        "postDate": "2026-05-21T13:58:00+01:00",
        "excerpt": "Saudi Arabia is set to deliver 358,000 new hotel rooms to meet rising tourism demand and prepare for major upcoming global events, unleashing a wealth of hospitality investment opportunities in the Kingdom.",
        "contentLibraryHero": [
            {
                "__typename": "contentLibrary_Asset",
                "id": "310544",
                "url": "https://cms.thebench.com/assets/content-library/img/FHS-SA/pre-event-feature.png",
                "width": 1280,
                "height": 720
            }
        ],
        "contentTypes": [
            {
                "__typename": "contentLibrary_Category",
                "id": "7702",
                "title": "Press room",
                "slug": "اقرأ الآن"
            }
        ]
    },
    {
        "__typename": "contentLibrary_article_Entry",
        "id": "310245",
        "slug": "fhs-podcast-episode-138-the-attention-economy-of-hospitality-with-michael-cirino",
        "title": "بودكاست قمة مستقبل الضيافة – الحلقة 138: اقتصاد جذب الانتباه في قطاع الضيافة مع مايكل سيرينو",
        "postDate": "2026-05-19T07:15:00+01:00",
        "excerpt": "In this episode of FHS Podcast, we talk about the attention economy of hospitality; it’s no longer enough to build beautiful spaces. The real challenge is creating moments that capture attention, spark emotion, and stay with people long after they leave.\nJoining us is Michael Cirino, Founder and Chief Creative Officer of House of Attention, an award-winning creative studio redefining what hospitality experiences can be. With over two decades of work at the intersection of storytelling, technology, and physical space, Michael has built immersive concepts that blur the lines between dining, entertainment, art, and brand.",
        "contentLibraryHero": [
            {
                "__typename": "contentLibrary_Asset",
                "id": "310246",
                "url": "https://cms.thebench.com/assets/content-library/img/FHS-SA/Michael-Cirino_Thumbnail_16x9.jpg",
                "width": 1920,
                "height": 1080
            }
        ],
        "contentTypes": [
            {
                "__typename": "contentLibrary_Category",
                "id": "7701",
                "title": "Podcast",
                "slug": "استمع الآن"
            }
        ]
    }
]
const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/sa/homepage/fhs-2026-01.jpg",
                "width": 800,
                "height": 533
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/sa/homepage/fhs-2026-02.jpg",
                "width": 800,
                "height": 533
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/sa/homepage/fhs-2026-03.jpg",
                "width": 800,
                "height": 533
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/sa/homepage/fhs-2026-04.jpg",
                "width": 800,
                "height": 533
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/sa/homepage/fhs-2026-05.jpg",
                "width": 800,
                "height": 533
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/sa/homepage/fhs-2026-06.jpg",
                "width": 800,
                "height": 533
            }
        ]
    },
]
const INDUSTRY_DATA = [
    {
        label: 'Hotel Operator / Management',
        value: 34
    },
    {
        label: 'Consultant / Advisor / Lawyer',
        value: 12
    },
    {
        label: 'Investors',
        value: 9
    },
    {
        label: 'Architecture & Design / Construction',
        value: 9
    },
    {
        label: 'Government / Tourism Official',
        value: 7
    },
    {
        label: 'Hotel Developer',
        value: 7
    },
    {
        label: 'Supplier (Technology / Wellness & Spa / FF&E)',
        value: 7
    },
    {
        label: 'Other',
        value: 5
    },
    {
        label: 'Asset Manager',
        value: 3
    },
    {
        label: 'Branded Residences',
        value: 2
    },
    {
        label: 'Education',
        value: 2
    },
    {
        label: 'Media & PR',
        value: 2
    },
    {
        label: 'Tourism (Leisure / Entertainment)',
        value: 2
    },
    
]
const JOB_FUNCTION_DATA = [
    {
        label: 'Board Level / Owner / Partner / Chair / Founder',
        value: 18.4
    },
    {
        label: 'C-Level',
        value: 16.5
    },    
    {
        label: 'Director / VP / Head / Principal',
        value: 32.6
    },
    {
        label: 'Manager',
        value: 24.1
    },
    {
        label: 'Not Specified',
        value: 8.5
    },
]



export default function Page({ seomatic, partners }) {
    
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
                    Thank You For Joining Us!
                </motion.p>
                
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 fw-300 c-white center mt-xs`} 
                >
                    See you in March 2027
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
                                href={'/sa/attending-investors-2026'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >{ locale === 'ar' ? `2026 Investor Attendees` : `2026 Investor Attendees`}</Button>
                        </Pop>

                        <Pop inline>
                            <Button 
                                href={'/sa/post-event-resources'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >2026 Post-event Resources</Button>
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
                       
                        <div className="center">
                            <p className="fs-4 fw-600 c-accent caps pb-xs">{locale === 'ar' ? "Strategic Enabler" : "Strategic Enabler"}</p>
                        
                            <Pop>
                                <div className={`${CSS.hostSponsorLogoWrapper} mx-auto px-xs`}>
                                    <div className={CSS.hostSponsorLogo}>
                                        <Image src={`/assets/site/sa/ministry-of-tourism.png`} layout="fill"/>
                                    </div>
                                </div>
                            </Pop>
                        </div>                      

                    </div>
                </section>




            </VideoSection>



            {/* WHO ATTENDED */}
            <section className="block bg-primary-2-dark">
                <div className="container center">
                    <p className="fs-2 fw-600 c-white">Who Attended</p>
                </div>

                <div className="container columns-5 gap-sm mt-md">
                    <ImpactCard figure={2} prefix={"$"} unit={"bn+"} label={"Worth of Deals Signed"} />
                    <ImpactCard figure={4.8} prefix={"$"} unit={"tn"} label={"in AUM"} />
                    <ImpactCard figure={1000} label={"Attendees"} />
                    <ImpactCard figure={20} unit={"%"} label={"Investor Audience"} />
                    <ImpactCard figure={32} label={"Countries"} />
                </div>

                <div className="container center">
                    <p className="fs-2 fw-600 c-white">Attendee Breakdown</p>
                </div>

                <div className="container columns-2 gap-md">
                    <section>
                        <p className="fs-4 fw-500 pb-sm">By Industry:</p>
                        <BarChart>
                            {
                                INDUSTRY_DATA &&
                                INDUSTRY_DATA.map(( field, index) => <Field key={index} compact label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 34 }} />)
                            }
                        </BarChart>
                    </section>
                    
                    <section>
                        <p className="fs-4 fw-500 pb-sm">By Job Function:</p>
                        <BarChart>
                            {
                                JOB_FUNCTION_DATA &&
                                JOB_FUNCTION_DATA.map(( field, index) => <Field key={index} compact label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 32.6 }} />)
                            }
                        </BarChart>

                        <p className="fs-4 fw-500 mt-sm pb-sm">By Geography:</p>
                        <GlobalMap>
                            <Region label={'Middle East'} value={90} unit={'%'} position={{ x: '58%', y: '35%' }} delay={0.3}/>
                            <Region label={'Europe'} value={6} unit={'%'} position={{ x: '40%', y: '28%' }} delay={0.1}/>
                            <Region label={'Asia'} value={1} unit={'%'} position={{ x: '80%', y: '50%' }} delay={0.5}/>
                            <Region label={'Americas'} value={2} unit={'%'} position={{ x: '20%', y: '50%' }} delay={0.2}/>
                            <Region label={'Africa'} value={1} unit={'%'} position={{ x: '45%', y: '60%' }} delay={0.4} />
                            <Bubble size={ isDesktop ? `5rem`: `2.75rem`} position={{ x: '65%', y: '17%' }}>
                                67% from Saudi Arabia
                            </Bubble>
                        </GlobalMap>
                    </section>
                </div>

                <div className="container mt-xs center">
                    <Pop><ArrowButton href={`https://youtu.be/LSqHtk9V-zg`} target='_blank' theme={{ arrow: `white`, border: `white`, label: `white`}}>Watch Highlights</ArrowButton></Pop>
                </div>
            </section>

            

            {/* VIDEO HIGHLIGHTS */}
            {/* <section className="block bg-primary-2 o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.highlightVideoGrid} container`}>
                    <Slide><p className='fs-1 fw-700 lh-1'>Highlights from FHS Saudi Arabia 2026</p></Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://youtu.be/LSqHtk9V-zg`} />
                </div>
            </section> */}

            
            {/* SIGNINGS & ANNOUNCEMENTS */}
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
                                    ? `إعلانات وتوقيعات عام 2026`
                                    : `2026 Signings & Announcements`
                            }
                        </p>
                    </Fade>
                </div>

                <div className={`container columns-4 gap-xs`}>
                    {
                        ARTICLE_DATA.map((article, index) => (
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

            
            {/* PHOTOS */}
            <Section backgroundClass={`bg-primary-2`}>
                <div className="container center">
                    <Fade>
                        <p className="fs-2 fw-600 c-white">2026 in Photos</p>
                    </Fade>
                </div>

                <div className="container columns-3 gap-xs mt-md">
                    {
                        photos.map( (photo, index) => (
                            <Pop key={index}>
                                <div key={photo.id} style={{ position: `relative`}}>
                                    <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" style={{ borderRadius: `.5rem`}} />
                                </div>
                            </Pop>
                        ))
                    }
                </div>

                <div className="container mt-xs center">
                    <Pop><ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `white`, border: `white`, label: `white`}}>Event photos</ArrowButton></Pop>
                </div>
            </Section>


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
                        <p className="fs-2 fw-600 c-white">2026 Speakers</p>
                    </Fade>
                </div>

                <div className="container columns-5 gap-sm" dir={ locale === 'ar' ? 'rtl' : ''}>
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
                    <div className="button-grid">
                        <Pop>
                            <ArrowButton 
                                href={ '/sa/speakers' } 
                                theme={{ arrow: `white`, border: `white`, label: `white`}}
                            >View all 2026 Speakers</ArrowButton>
                        </Pop>
                    </div>
                </div>
    
                
            </Section>



            {/* PARTNERS */}
            <section className="block">
                <div className="container center">
                    <Pop><p className="fs-2 fw-600 c-primary balance">Thank You to Our Partners</p></Pop>
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


            {/* PARTNER TESTIMONIALS */}
            <Section
                backgroundClass={`bg-primary`}
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
                <div className="container center">
                    <p className="fs-1 fw-600">Partner Testimonials</p>
                </div>

                <div className={`container columns-3 gap-md`}>
                    <VideoTestimonial entry={{
                        "id": "223023",
                        "videoShareUrl": "https://www.youtube.com/watch?v=Ro4k0OytXig",
                        "fullName": "Omar Al-Abdullatif",
                        "jobTitle": "Chief Executive Officer",
                        "organisation": "Blacksand",
                        "testimonial": "Honestly, it's the biggest hospitality summit we know. It's a great event and very much B2B."
                    }} />
                   
                    <VideoTestimonial entry={{
                        "id": "223023",
                        "videoShareUrl": "https://www.youtube.com/watch?v=mMAbGByBfJE",
                        "fullName": "Marko Vucinic",
                        "jobTitle": "Executive Director - Investment & Asset Management",
                        "organisation": "Knowledge Economic City",
                        "testimonial": "We love the platform. It connected us to a lot of partners that we deal with on day-to-day basis."
                    }} />
                   
                    <VideoTestimonial entry={{
                        "id": "223023",
                        "videoShareUrl": "https://www.youtube.com/watch?v=97dsiYGJHmc",
                        "fullName": "Khalid Saud Abuhaimed",
                        "jobTitle": "Chief Executive Officer",
                        "organisation": "Al Khozama Investment Company",
                        "testimonial": "We host the Future Hospitality Summit every year because I believe the deals that shape this industry need a home, a place where opportunity meets capital."
                    }} />
                </div>
            </Section>

            

            {/* INVESTORS */}
            <section className="bg-primary-2">        
                <div className="container py-md" dir={`ltr`}>
                    <Pop><p className="fs-2 fw-600 balance center pb-sm">Investors Who Joined Us</p></Pop>
                    {
                        locale === 'ar'
                        ?
                            <Ticker duration={40} direction={1}>
                                {
                                    INVESTORS_AR.map((investor, index) => (
                                        <div key={index} style={{ marginRight: 10 }}>
                                            <p className="fs-5 fw-500"><span className="c-accent">&bull;</span> {investor.title}</p>
                                        </div>
                                    ))
                                }
                            </Ticker>
                        :
                            <Ticker duration={40}>
                                {
                                    INVESTORS.map((investor, index) => (
                                        <div key={index} style={{ marginRight: 10 }}>
                                            <p className="fs-5 fw-500"><span className="c-accent">&bull;</span> {investor.title}</p>
                                        </div>
                                    ))
                                }
                            </Ticker>
                    }
                </div>
            </section>
     

            
            {/* WHO ATTENDS */}
            <section className="block bg-primary-2">
                <div className="container center">
                    <p className="fs-2 fw-500">Who Attended</p>
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
                    // link={'/sa/ai-session-summaries-2025'}
                    // linkLabel={locale === 'ar' ? `تحميل ملخصات جلسات بالذكاء الاصطناعي` : 'Download AI Session Summaries'}
                />
            </Section>



            {/* THOUGHT LEADERSHIP */}
            <section className="block bg-primary-2">
                <div className="container center">
                    <Pop><p className="fs-2 fw-600 balance">{locale === 'ar' ? 'القيادة الفكرية في قلب الحدث' : 'Thought Leadership in Action'}</p></Pop>
                </div>

                <div className="container columns-3 gap-sm" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {
                        (locale === 'ar' ? THOUGHT_LEADERSHIP_AR : THOUGHT_LEADERSHIP).map((entry, index) => (
                            <Post
                                key={index}
                                url={`/egypt/content-library/${entry.slug}`}
                                heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                heading={entry.title}
                                // excerpt={entry.excerpt}
                                contentTypes={entry.contentTypes}
                                postDate={entry.postDate}
                                type={entry.contentTypes[0].slug}
                            />
                        ))
                    }
                </div>

                <div className="container center">
                    <div className="button-grid">
                        <Pop>
                            <ArrowButton href={ '/sa/content-library/category/industry-news' } theme={{ arrow: `white`, border: `white`, label: `white`}} >
                                {locale === 'ar' ? 'أخبار القطاع' : 'Industry News'}
                            </ArrowButton>
                        </Pop>
                        <Pop>
                            <ArrowButton href={ '/sa/content-library/category/podcast' } theme={{ arrow: `white`, border: `white`, label: `white`}} >
                                {locale === 'ar' ? 'البودكاست' : 'Podcasts'}
                            </ArrowButton>
                        </Pop>
                        <Pop>
                            <ArrowButton href={ '/sa/content-library/category/press-room' } theme={{ arrow: `white`, border: `white`, label: `white`}} >
                                {locale === 'ar' ? 'غرفة المؤتمرات الصحفية' : 'Press Room'}
                            </ArrowButton>
                        </Pop>
                    </div>
                </div>
            </section>



            



            


            


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