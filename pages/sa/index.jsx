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
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { Logo } from "../../fuselage/theme/2025/sa/blocks/logo-ticker/logo-ticker"




import CSS from '../../fuselage/theme/2025/sa/css/homepage.module.css'
import M from '../../fuselage/theme/2027/sa/css/homepage.module.css'


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
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/hossam-al-basrawi.jpg',
        fullName: 'Hossam Al-Basrawi',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ2Mjc=`,
        photoUrl: 'https://static.swapcard.com/public/images/7b395ba5c8d146cb970582231d498e01.jpeg',
        fullName: 'Sultan Bader Al-Otaibi',
        jobTitle: 'Chief Executive Officer',
        company: 'TAIBA',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDU4NzkyMDQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/712a64a2e79245bfbe56770cc0001b6b.jpeg',
        fullName: 'Ragad Al-Nasser',
        jobTitle: 'Chief Investment Officer',
        company: 'Jabal Ohod Holding',
    },
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDQ4NDEzNDk=",
        photoUrl: "https://static.swapcard.com/public/images/f227dbf17e4d4d29b4b9356884540bf6.jpeg",
        fullName: "Elie Younes",
        jobTitle: "Global Chief Development Officer",
        company: "Radisson Hotel Group",
    },
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDQ1MjQzNzQ=",
        photoUrl: "https://static.swapcard.com/public/images/d88108daca3e4bc9a44a4cbe24dedf7e.jpeg",
        fullName: "Neil Gallagher",
        jobTitle: "Chief Executive Officer",
        company: "Soneva",
    },
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDQ3OTY2NjE=",
        photoUrl: "https://static.swapcard.com/public/images/7d34e14c50844c798e3f50bbe5d8412d.jpeg",
        fullName: "Amin Ismail",
        jobTitle: "Managing Director",
        company: "Certares",
    },
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDQ3NzcwMjA=",
        photoUrl: "https://static.swapcard.com/public/images/db4f3f2f6e1c4593a93f44e02468e4a6.jpeg",
        fullName: "Dr. Stephan Hungeling",
        jobTitle: "Chief Executive Officer",
        company: "H World International",
    },
    {
        url: "/sa/speakers/RXZlbnRQZW9wbGVfNDU1NTg2NDA=",
        photoUrl: "https://static.swapcard.com/public/images/f3093718477246cf8be606a2b027aea4.jpeg",
        fullName: "Michael Levie",
        jobTitle: "Co-Founder",
        company: "citizenM",
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



const AUDIENCE_DATA = [
    {
        title: `Developers`,
        titleAr: `المطورون`,
        image: `/assets/img/sa/homepage/attends-01.jpg`,
        items: [`Mega-project development companies`, `Secondary cities development teams`, `Branded residences developers`, `Mixed-use and masterplan developers`],
        itemsAr: [`شركات تطوير المشاريع العملاقة`, `فرق تطوير المدن الثانوية`, `مطورو الوحدات السكنية ذات العلامات الفندقية`, `مطورو المشاريع متعددة الاستخدامات والمخططات الرئيسية`],
    },
    {
        title: `Investors`,
        titleAr: `المستثمرون`,
        image: `/assets/img/sa/homepage/attends-investors.jpg`,
        items: [`Institutional hotel investors`, `Banks`, `Family offices`, `Private equity funds`, `Sovereign wealth funds`],
        itemsAr: [`المستثمرون في قطاع الفنادق من المؤسسات`, `البنوك`, `المكاتب العائلية`, `صناديق الأسهم الخاصة`, `صناديق الثروة السيادية`],
    },
    {
        title: `Operators`,
        titleAr: `المشغّلون`,
        image: `/assets/img/sa/homepage/attends-03.jpg`,
        items: [`Saudi-owned hotel operators`, `International hotel chains`, `Boutique and lifestyle brands`, `Wellness and spa brands`],
        itemsAr: [`مشغلو الفنادق السعوديون`, `سلاسل الفنادق الدولية`, `فنادق البوتيك والعلامات التجارية الخاصة بأسلوب الحياة`, `العلامات التجارية في مجال العافية والسبا`],
    },
    {
        title: `Government officials`,
        titleAr: `الجهات الحكومية`,
        image: `/assets/img/sa/homepage/attends-govt.jpg`,
        items: [`Ministry of Tourism`, `Ministry of Investment`, `Saudi Tourism Authority`, `Royal Commissions`],
        itemsAr: [`وزارة السياحة`, `وزارة الاستثمار`, `الهيئة السعودية للسياحة`, `الهيئات الملكية`],
    },
    {
        title: `Enablers and advisors`,
        titleAr: `مُمكّنو القطاع والمستشارون`,
        image: `/assets/img/sa/homepage/attends-enablers.jpg`,
        items: [`Lawyers`, `Consultants`, `Designers`],
        itemsAr: [`المحامون`, `المستشارون`, `المصممون`],
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
                logo={`/assets/site/sa/fhs-sa-madinah-edition-logo.png`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            


            {/* HERO */}
            <section className={M.hero}>
                <video className={M.heroImage} poster="/assets/img/sa/madinah/hero-poster.jpg" autoPlay muted loop playsInline>
                    <source src="https://cms.thebench.com/assets/video/fhs-2025-sa-wrap-up-opt.mp4" type="video/mp4" />
                </video>

                <div className={`${M.wrap} ${M.heroContent}`}>
                    <p className={M.heroKicker}>Future Hospitality Summit Saudi Arabia</p>
                    <h1 className={M.heroTitle}>The Kingdom’s hospitality investment forum comes to Madinah</h1>

                    <div className={M.heroMeta}>
                        <div>
                            <p className={M.heroDate}>13-14 April 2027</p>
                            <p className={M.heroPlace}>Madinah, Saudi Arabia</p>
                        </div>

                        <div className={M.heroHost}>
                            <p>{locale === 'ar' ? 'الشريك المستضيف' : 'Host Partner'}</p>
                            <img src="/assets/site/sa/knowledge-economic-city-logo.png" alt="Knowledge Economic City" />
                        </div>

                        <div className={M.heroActions}>
                            <Link href="/sa/register-interest"><a className={M.buttonSolid}>Register interest</a></Link>
                            <Link href="/sa/become-a-partner"><a className={M.buttonGhost}>Become a partner</a></Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* WHY MADINAH */}
            <section className={M.why}>
                <div className={`${M.wrap} ${M.whyGrid}`}>
                    <figure className={M.whyFigure}>
                        <img src="/assets/img/sa/madinah/madinah-gate-day.jpg" alt="Madinah Gate beside the Haramain High-Speed Rail station" />
                        <figcaption className={M.caption}>Madinah Gate, Knowledge Economic City, beside the Haramain High-Speed Rail station</figcaption>
                    </figure>

                    <div>
                        <h2 className={M.heading}>Why Madinah, and why now</h2>
                        <p className={M.lede}>For the first time, FHS Saudi Arabia meets in Madinah. Investors, developers and operators will see the opportunity where it is being built.</p>

                        <ul className={M.reasons}>
                            <li>
                                <p className={M.reasonTitle}>Ownership has opened</p>
                                <p className={M.reasonText}>Knowledge Economic City has been designated as one of Madinah’s zones for non-Saudi real estate ownership, subject to the applicable eligibility requirements.</p>
                            </li>
                            <li>
                                <p className={M.reasonTitle}>Demand is proven</p>
                                <p className={M.reasonText}>Madinah welcomed 10.4 million visitors in the first half of 2025, and hotel occupancy stood at 76% in early 2026.</p>
                            </li>
                            <li>
                                <p className={M.reasonTitle}>Delivery is under way</p>
                                <p className={M.reasonText}>SAR 24bn is committed across the masterplan, with 13 hotels and 5,142 keys signed with Hilton, Marriott, IHG, Radisson and Archipelago.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>



            {/* HOST PARTNER */}
            <section className={M.host}>
                <img className={M.hostImage} src="/assets/img/sa/madinah/kec-masterplan.jpg" alt="Knowledge Economic City masterplan in Madinah at night" loading="lazy" />

                <div className={M.hostIntro}>
                    <div className={M.wrap}>
                        <h2 className={M.heading}>Inside Knowledge Economic City</h2>
                        <p className={M.lede}>Our Host Partner is building a 6.8 million sqm city within Madinah. Its four destinations are the setting for the summit.</p>
                    </div>
                </div>

                <div className={M.wrap}>
                    <ul className={M.districts}>
                        <li>
                            <p className={M.districtName}>Madinah Gate</p>
                            <p className={M.districtText}>A transit-oriented development linked to the Haramain High-Speed Rail station, with a 325-room DoubleTree by Hilton now open.</p>
                        </li>
                        <li>
                            <p className={M.districtName}>Multaqa AlMadinah</p>
                            <p className={M.districtText}>A SAR 2.2bn mixed-use centre for the city. Phase one includes a 390-room Hilton and a 750-seat conference hall.</p>
                        </li>
                        <li>
                            <p className={M.districtName}>Islamic World District</p>
                            <p className={M.districtText}>980,000 sqm planned for more than 20,000 hotel rooms, with the first 13 hotels signed to five operators.</p>
                        </li>
                        <li>
                            <p className={M.districtName}>Al Alyaa</p>
                            <p className={M.districtText}>A SAR 2.6bn residential-led district with a 177-room hotel and 480 serviced apartments.</p>
                        </li>
                    </ul>
                </div>
            </section>



            {/* RIYADH EDITIONS */}
            <section className={M.riyadh}>
                <div className={`${M.wrap} ${M.riyadhGrid}`}>
                    <div className={M.mosaic}>
                        <img src="/assets/img/sa/homepage/sa-03.jpg" alt="Guests outside Al Faisaliah in Riyadh during FHS Saudi Arabia" />
                        <img src="/assets/img/sa/homepage/fhs-2025-04.jpg" alt="The Summit Stage at FHS Saudi Arabia" />
                        <img src="/assets/img/sa/homepage/fhs-2025-05.jpg" alt="Delegates networking at FHS Saudi Arabia" />
                    </div>

                    <div>
                        <ul className={M.years}>
                            <li>2023</li>
                            <li>2024</li>
                            <li>2025</li>
                            <li>2026</li>
                        </ul>
                        <h2 className={M.heading}>Four editions in Riyadh</h2>
                        <p className={M.lede}>Since 2023, FHS Saudi Arabia has brought the Kingdom’s hospitality investment community together in Riyadh. Investors, developers, operators and government leaders have met here to turn Saudi Arabia’s tourism pipeline into partnerships and investment.</p>

                        <div className={M.thanks}>
                            <img src="/assets/site/sa/al-khozama-logo-2025.png" alt="Al Khozama Investment Company" />
                            <p>Our thanks to Al Khozama Investment Company, Host Partner of FHS Saudi Arabia in Riyadh, for its support.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 2026 IN NUMBERS */}
            <section className={M.numbers}>
                <div className={M.wrap}>
                    <div className={M.sectionHead}>
                        <h2 className={M.heading}>The 2026 edition in numbers</h2>
                        <div className={M.links}>
                            <Link href="/sa/about-fhs-saudi"><a className={M.link}>Attendance breakdown</a></Link>
                            <Link href="/sa/post-event-report-2026"><a className={M.link}>Post-event report</a></Link>
                            <Link href="/sa/post-event-resources"><a className={M.link}>Post-event resources</a></Link>
                        </div>
                    </div>

                    <ul className={M.figures}>
                        <li><p className={M.figure}>$2bn+</p><p className={M.figureLabel}>worth of deals signed</p></li>
                        <li><p className={M.figure}>$4.8tn</p><p className={M.figureLabel}>in assets under management</p></li>
                        <li><p className={M.figure}>1,000+</p><p className={M.figureLabel}>attendees</p></li>
                        <li><p className={M.figure}>20%</p><p className={M.figureLabel}>investor audience</p></li>
                        <li><p className={M.figure}>32</p><p className={M.figureLabel}>countries</p></li>
                    </ul>
                </div>
            </section>



            {/* SIGNINGS & ANNOUNCEMENTS */}
            <section className={`${M.section} ${M.dark}`}>
                <div className={M.wrap}>
                    <div className={M.sectionHead}>
                        <h2 className={M.heading}>{locale === 'ar' ? `إعلانات وتوقيعات عام 2026` : `Signed on stage in 2026`}</h2>
                        <div className={M.links}>
                            <Link href="/sa/content-library/category/press-room"><a className={M.link}>{locale === 'ar' ? `أخر الأخبار والمستجدات` : `Latest news and updates`}</a></Link>
                        </div>
                    </div>

                    <ul className={M.news}>
                        {
                            ARTICLE_DATA.map((article, index) => (
                                <li key={index}>
                                    <Link href={article.url}>
                                        <a className={M.newsItem}>
                                            <img src={article.heroUrl} alt="" loading="lazy" />
                                            <p className={M.newsTitle}>{article.title}</p>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>



            {/* PHOTOS */}
            <section className={`${M.section} ${M.darker}`}>
                <div className={M.wrap}>
                    <div className={M.sectionHead}>
                        <h2 className={M.heading}>2026 in photos</h2>
                        <div className={M.links}>
                            <a className={M.link} href="https://www.flickr.com/photos/benchevents/albums/" target="_blank" rel="noreferrer">All event photos</a>
                        </div>
                    </div>

                    <div className={M.photoGrid}>
                        {
                            photos.map((photo, index) => (
                                <img key={index} src={photo.hero[0].url} alt="" loading="lazy" />
                            ))
                        }
                    </div>
                </div>
            </section>



            {/* SPEAKERS */}
            <section className={`${M.section} ${M.mid}`}>
                <div className={M.wrap}>
                    <div className={M.sectionHead}>
                        <div>
                            <h2 className={M.heading}>On stage in 2026</h2>
                            <p className={M.lede}>Saudi government and capital, alongside international operators and investors.</p>
                        </div>
                        <div className={M.links}>
                            <Link href="/sa/speakers"><a className={M.link}>All 2026 speakers</a></Link>
                        </div>
                    </div>

                    <ul className={M.speakers} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                        {
                            SPEAKER_DATA.map((profile, index) => (
                                <li key={index}>
                                    <Link href={profile.url}>
                                        <a className={M.speaker}>
                                            <img src={profile.photoUrl} alt="" loading="lazy" />
                                            <p className={M.speakerName}>{profile.fullName}</p>
                                            <p className={M.speakerRole}>{profile.jobTitle}</p>
                                            <p className={M.speakerCompany}>{profile.company}</p>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>



            {/* PARTNERS */}
            <section className={`${M.section} ${M.light}`}>
                <div className={M.wrap}>
                    <div className={M.sectionHead}>
                        <h2 className={M.heading}>Thank you to our 2026 partners</h2>
                        <div className={M.links}>
                            <Link href="/sa/become-a-partner"><a className={M.link}>Become a partner</a></Link>
                        </div>
                    </div>

                    <ul className={M.logos}>
                        {
                            partners.filter(partner => partner.logoUrl).map(partner => (
                                <li key={partner.id}><img src={partner.logoUrl} alt={partner.name} loading="lazy" /></li>
                            ))
                        }
                    </ul>
                </div>
            </section>



            {/* PARTNER TESTIMONIALS */}
            <section className={`${M.section} ${M.dark}`}>
                <div className={`${M.wrap} ${M.quotes}`}>
                    <figure className={M.quote}>
                        <blockquote>“Honestly, it’s the biggest hospitality summit we know. It’s a great event and very much B2B.”</blockquote>
                        <figcaption>
                            <p className={M.quoteName}>Omar Al-Abdullatif</p>
                            <p className={M.quoteRole}>Chief Executive Officer, Blacksand</p>
                            <a className={M.link} href="https://www.youtube.com/watch?v=Ro4k0OytXig" target="_blank" rel="noreferrer">Watch the interview</a>
                        </figcaption>
                    </figure>

                    <figure className={M.quote}>
                        <blockquote>“We love the platform. It connected us to a lot of partners that we deal with on day-to-day basis.”</blockquote>
                        <figcaption>
                            <p className={M.quoteName}>Marko Vucinic</p>
                            <p className={M.quoteRole}>Executive Director - Investment & Asset Management, Knowledge Economic City</p>
                            <a className={M.link} href="https://www.youtube.com/watch?v=mMAbGByBfJE" target="_blank" rel="noreferrer">Watch the interview</a>
                        </figcaption>
                    </figure>
                </div>
            </section>



            {/* WHO ATTENDS */}
            <section className={`${M.section} ${M.mid}`}>
                <div className={M.wrap}>
                    <h2 className={M.heading}>Who was in the room in 2026</h2>
                    <p className={M.tickerLabel}>Investors who joined us</p>
                </div>

                <div className={M.ticker} dir={`ltr`}>
                    <Ticker duration={40} direction={locale === 'ar' ? 1 : -1}>
                        {
                            (locale === 'ar' ? INVESTORS_AR : INVESTORS).map((investor, index) => (
                                <p key={index} className={M.tickerItem}>{investor.title}</p>
                            ))
                        }
                    </Ticker>
                </div>

                <div className={M.wrap}>
                    <ul className={M.audience} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                        {
                            AUDIENCE_DATA.map((group, index) => (
                                <li key={index}>
                                    <img src={group.image} alt="" loading="lazy" />
                                    <p className={M.audienceTitle}>{locale === 'ar' ? group.titleAr : group.title}</p>
                                    <ul>
                                        {
                                            (locale === 'ar' ? group.itemsAr : group.items).map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>



            {/* THEMES */}
            <section className={`block bg-primary ${M.themes}`}>
                <ThemesSlider
                    heading={locale === 'ar' ? `محاور فعالية 2026` : `2026 Event Themes` }
                    data={locale === 'ar' ? THEMES_DATA_AR : THEMES_DATA}
                />
            </section>



            {/* THOUGHT LEADERSHIP */}
            <section className={`${M.section} ${M.mid}`}>
                <div className={M.wrap}>
                    <div className={M.sectionHead}>
                        <h2 className={M.heading}>{locale === 'ar' ? 'القيادة الفكرية في قلب الحدث' : 'Thought leadership in action'}</h2>
                        <div className={M.links}>
                            <Link href="/sa/content-library/category/industry-news"><a className={M.link}>{locale === 'ar' ? 'أخبار القطاع' : 'Industry news'}</a></Link>
                            <Link href="/sa/content-library/category/podcast"><a className={M.link}>{locale === 'ar' ? 'البودكاست' : 'Podcasts'}</a></Link>
                            <Link href="/sa/content-library/category/press-room"><a className={M.link}>{locale === 'ar' ? 'غرفة المؤتمرات الصحفية' : 'Press room'}</a></Link>
                        </div>
                    </div>

                    <ul className={M.posts} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                        {
                            (locale === 'ar' ? THOUGHT_LEADERSHIP_AR : THOUGHT_LEADERSHIP).map((entry, index) => (
                                <li key={index}>
                                    <Link href={`/sa/content-library/${entry.slug}`}>
                                        <a className={M.newsItem}>
                                            {
                                                entry.contentLibraryHero && entry.contentLibraryHero[0] &&
                                                <img src={entry.contentLibraryHero[0].url} alt="" loading="lazy" />
                                            }
                                            <p className={M.postType}>{entry.contentTypes[0].slug === 'podcast' ? 'Listen' : 'Read'}</p>
                                            <p className={M.newsTitle}>{entry.title}</p>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>



            <Footer/>
            <LenisScroller />

        </div>
    )
}

Page.theme = 'sa-2025'




export const PartnerGroup = ({ partnerData, start, end }) => {
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