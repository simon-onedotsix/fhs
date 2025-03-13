import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import _ from 'lodash'

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { HeroUnitVideo } from "../../fuselage/theme/2025/sa/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"

import { SectionHeading } from "../../fuselage/theme/2025/sa/components/section-heading/section-heading"
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { ImpactGrid, ImpactFigure, TitleBlock, ImageBlock } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { Ticker } from "../../fuselage/theme/2025/sa/components/ticker/ticker"
import { ArticleScroller, Article } from "../../fuselage/theme/2025/sa/blocks/article-scroller/article-scroller"
import { VideoUnit } from "../../fuselage/theme/2025/sa/blocks/video-unit/video-unit"
import { PhotoGrid, ContentBlock, Photo, Spacer } from "../../fuselage/theme/2025/sa/blocks/photo-grid/photo-grid"
import { CTAButton } from "../../fuselage/theme/2025/sa/components/cta-button/cta-button"
import { LogoTicker, Logo } from "../../fuselage/theme/2025/sa/blocks/logo-ticker/logo-ticker"
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { VideoTestimonialCard } from "./video-testimonials"
import { Avatar } from '../../fuselage/components/avatar/avatar'
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"

import { ActionsTab } from '../../fuselage/components/actions-tab/actions-tab'
import { PopOver } from '../../fuselage/components/popover/popover'

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

const SPEAKER_DATA = [
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU=`,
        photoUrl: 'https://static.swapcard.com/public/images/0f3466754aec406ab2b64862743c639f.jpeg',
        fullName: 'HH Prince Bandar bin Saud bin Khalid Al Saud',
        jobTitle: 'Secretary General, King Faisal Foundation (KFF) | Chairman of the Board of Directors, Al Khozama Investment Company',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc3MDYzMTQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/2d0ccacdbd4a4a5cab7230fab32d2763.jpeg',
        fullName: 'Julia Simpson',
        jobTitle: 'President & CEO',
        company: 'World Travel & Tourism Council',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzgwNjYxMDQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/b946c29ec7c24b2091410172ac1ed515.jpeg',
        fullName: 'Jerry Inzerillo',
        jobTitle: 'Group Chief Executive Officer, Diriyah Company | Vice Chairman, Forbes Travel Guide',
        company: '',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzcwNDU3NDA=`,
        photoUrl: 'https://static.swapcard.com/public/images/be577fb8e2b044c98cc51dc0dc10fb55.jpeg',
        fullName: 'Nikolina Angelkova',
        jobTitle: 'Former Minister Tourism, Bulgaria | Owner and CEO, Angelkova law and Consultancy office',
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
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzY5MzgyNzk=`,
        photoUrl: 'https://static.swapcard.com/public/images/aa283dd8d6b747a3ba4c7db9039e57e2.jpeg',
        fullName: 'Waleed AlRashed AlHumaid',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1OTk1ODI=`,
        photoUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        fullName: 'Maud Bailly',
        jobTitle: 'Chief Executive Officer',
        company: 'Sofitel Legend, Sofitel, MGallery & Emblems',
    },
    {
        url: `/sa/speakers`,
        photoUrl: '',
        fullName: 'Michael Acton Smith',
        jobTitle: 'Co-founder',
        company: 'Calm',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzc1ODUwMzU=`,
        photoUrl: 'https://static.swapcard.com/public/images/a96df3d5f0c84807a351df07dfc4e15c.jpeg',
        fullName: 'Dr. Abeer Alamri',
        jobTitle: 'Strategic Planning & Monitoring Deputyship',
        company: 'Tourism Ministry',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfMzY5MTkzNzc=`,
        photoUrl: 'https://static.swapcard.com/public/images/aed31042fa48418e9ad796226f2b3676.jpeg',
        fullName: 'Steven Greenway',
        jobTitle: 'Chief Executive Officer',
        company: 'flyadeal',
    }
]

export default function Home ({ entry, seomatic, contentBlocks, partners, abVideos }) {

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
        <>
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
                        WHERE VISION <br/>
                        SHAPES OPPORTUNITY
                    </motion.p>

                    <motion.p 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                        className={`fs-5 fw-500 c-white center mt-xs`} 
                    >
                        11-13 May 2025, Mandarin Oriental Al Faisaliah, Riyadh
                    </motion.p>

                    <Fade>
                        <div className="mt-md center">
                            <Pop inline>
                                <Button 
                                    href={'/sa/agenda'} 
                                    theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                    decal={'fs-5 fw-600'} 
                                    accent
                                >
                                    2025 Programme
                                </Button>&ensp;
                                <Button 
                                    href={'/sa/download-prospectus'} 
                                    theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                    decal={'fs-5 fw-600'} 
                                    accent
                                >
                                    Download Prospectus
                                </Button>
                            </Pop>
                        </div>
                    </Fade>
                </HeroUnitVideo>


                {/* HOST SPONSOR */}
                <section className="block bg-primary">
                    <div className="container center">
                        <p className="fs-3 fw-600 c-accent caps">Host Sponsors</p>
                            <Pop>
                                <div className={`${CSS.hostSponsorLogoWrapper} mt-sm mx-auto`}>
                                    <Image src={`/assets/site/sa/mandarin-oriental-al-faisaliah-logo.png`} width={200} height={200}/>
                                    <Image src={`/assets/site/sa/al-khozama-logo-2025.png`} width={830} height={427}/>
                                </div>
                            </Pop>
                    </div>
                </section>


                {/* PATRONAGE */}
                <section className="block bg-primary">
                    <div className="container center">
                        <p className="fs-3 fw-600 c-accent caps pb-sm">Under the Patronage of</p>

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
                                    <p className="fs-4 fw-600">HH Prince Bandar bin Saud bin Khalid Al Saud</p>
                                    <p className="fs-5 mt-xxs">
                                        Secretary General King Faisal Foundation&nbsp;(KFF)<br/>
                                        Chairman of the Board of Directors Al&nbsp;Khozama
                                    </p>

                                </Pop>
                            </div>
                        </div>
                        
                        <p className="mt-xs caps fs-sm c-accent"><Link href={'/sa/speakers/RXZlbnRQZW9wbGVfMzc0OTY5MjU='}><a className="uLink">View biography</a></Link></p>
                    </div>
                </section>


                {/* SUPPORTERS */}
                <section className="block bg-primary">
                    <div className="container center">
                        <p className="fs-3 fw-600 c-accent caps">Supporters</p>
                            <Pop>
                                <div className={`${CSS.sponsorLogoWrapper} mt-sm mx-auto`}>
                                    <Image src={`/assets/site/sa/unt-white.png`} width={800} height={624}/>
                                    <Image src={`/assets/site/sa/wsha-white.png`} width={1000} height={442}/>
                                    <Image src={`/assets/site/sa/wttc-white.png`} width={800} height={712}/>
                                </div>
                            </Pop>
                    </div>
                </section>
            </div>


            {/* TICKER */}
            <div className="bg-secondary">
                <Ticker>
                    <p className="fs-2"><strong>$1.1billion</strong> in business opportunities and deal volume gained in 2024 - </p>
                    <p className="fs-2"><strong>$1.1billion</strong> in business opportunities and deal volume gained in 2024 - </p>
                    <p className="fs-2"><strong>$1.1billion</strong> in business opportunities and deal volume gained in 2024 - </p>
                </Ticker>
            </div>


            {/* INVESTORS */}
            <section className="block bg-theme">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Investors at FHS Saudi Arabia</p>
                    </Fade>
                    <div className="columns-3 gap-sm maxw-55 mx-auto mt-md">
                        <InvestorImpact figure={283} label={"Investors"} />
                        <InvestorImpact figure={22} unit={"%"} label={"of Attendees"} />
                        <InvestorImpact figure={17} label={"Deals Signed"} />
                    </div>
                    <p className="mt-md">
                        <Pop>
                            <ButtonKeyline 
                                href={'/sa/investors'} 
                                decal={'fs-5 fw-600'} 
                                color={'var(--secondary)'}
                            >
                                View Past Investors
                            </ButtonKeyline>
                        </Pop>
                    </p>
                </div>
            </section>


            {/* SPEAKERS */}
            {
                SPEAKER_DATA &&
                <SpeakerCarousel 
                    heading={`2025 Speakers`} 
                    color={`c-secondary`}
                    text={``}
                    decal={'bg-neutral-02'}
                    ctaLink={'/sa/speakers'}
                    ctaLabel={'View All Speakers'}
                >
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
                </SpeakerCarousel>
            }


            <ImpactGrid>
                <TitleBlock>
                    <SectionHeading heading={'2024 in Numbers'} decal={'c-secondary'} />
                </TitleBlock>
                <ImpactFigure decal={'bg-neutral-01'} figure={1329} impact={'Attendees'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={38} impact={'Countries'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={206} impact={'Speakers'}  />
                <ImpactFigure decal={'bg-neutral-01'} figure={95} impact={'Sponsors & Partners'}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={80} unit={'%'} impact={'C-Level Executives, VP & Directors'}  />
                <ImpactFigure />
                <ImpactFigure decal={'bg-neutral-01'} figure={94} unit={'%'} impact={'of those surveyed indicated FHS Saudi Arabia met their objective of gaining the latest market insights.'} />
                <ImpactFigure decal={'bg-neutral-02'} figure={84} unit={'%'} impact={'of those surveyed indicated FHS Saudi Arabia met their objective of finding new business opportunities.'} />
                <ImageBlock />
            </ImpactGrid>


            {/* QUOTES */}
            <section className="block bg-theme o-hidden ">
                <div className={`${CSS.quoteGrid} container`}>
                    <Quotation
                        avatarUrl={'/assets/img/sa/haddad-bani.jpg'}
                        quote={'FHS Saudi Arabia 2024 was one of the best industry events I have attended in recent years!'}
                        fullName={'Bani Haddad'}
                        title={'Managing Director - Hospitality, Aleph Hospitality'}
                    />
                    <Quotation
                        avatarUrl={'/assets/img/sa/mizan-abdulla.jpg'}
                        quote={`Stepping into the Future Hospitality Summit felt like entering a realm where innovation knows no bounds. This summit wasn't just an event — it was a transformative experience that ignited my passion for shaping the future of hospitality.`}
                        fullName={'Abdulla Mizan'}
                        title={'Director, Procurement at Maldives Fund Management Corporation'}
                    />
                </div>
            </section>


            {/* THEMES */}
            <section className="block bg-primary">
                <ThemesSlider data={THEMES_DATA} link={'/sa/themes'} linkLabel={'Learn more'} />
            </section>


            {/* SPONSORS */}
            <LogoTicker heading={'Thank You to Our Sponsors & Partners'} speed={120}>
                {
                    partners &&
                    partners.map( logo => <Logo key={logo.id} logoUrl={logo.logoUrl} />)
                }
            </LogoTicker>
            

            {/* ANNOUNCEMENTS */}
            <ArticleScroller>
                {
                    ARTICLE_DATA &&
                    ARTICLE_DATA.map(( article, index ) => <Article key={index} heroUrl={article.heroUrl} title={article.title} excerpt={article.excerpt} url={article.url} />)
                }
            </ArticleScroller>


            <VideoUnit>
                <SectionHeading heading={'Watch 2024 Highlights'} inverse />
            </VideoUnit>
        

            <PhotoGrid>
                <ContentBlock>
                    <SectionHeading heading={'2024 in Photos'} />
                </ContentBlock>
                <Photo photoUrl={'/assets/img/sa/photos/2024-01.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-02.jpg'} />
                <Spacer />
                <Photo photoUrl={'/assets/img/sa/photos/2024-03.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-04.jpg'} />
                <Spacer />
                <Photo photoUrl={'/assets/img/sa/photos/2024-05.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-06.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-07.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-08.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-09.jpg'} />
                <Photo photoUrl={'/assets/img/sa/photos/2024-10.jpg'} />
                <ContentBlock>
                    <div className="pl-md">
                        <CTAButton href={'https://www.flickr.com/photos/benchevents/albums/'} label={'View all Photos'} target={'_blank'} background={'white'} />
                    </div>
                </ContentBlock>
            </PhotoGrid>
            


            {/* PREMIUM EXPOSURE FORM */}
            <section className="block bg-primary o-hidden columns-2 gap-md" style={{ position: 'relative' }}>
                <img className={CSS.deco04} src="/assets/theme/sa-2025/gfk-01.svg" alt=""/>

                <div className="container">
                    <div className="formatted">
                        <Slide>
                            <p className="fs-1 lh-1">Get Premium Exposure at FHS Saudi Arabia 2025</p>
                        </Slide>
                        <Fade>
                            <p className="fs-6 mt-sm lh-6">Join the epicenter of the Middle East&apos;s hospitality industry at FHS Saudi Arabia 2025. This premier conference brings together Government leaders, tourism ministries, top hospitality brands, hotel owners and investors, renowned restaurant groups, destination developers, asset managers, financial institutions, and consultants. By participating, you&apos;ll have the opportunity to showcase your brand, position yourself as a thought leader or innovator, and connect with key decision-makers and industry influencers in the region. Don&apos;t miss out on elevating your presence in one of the world&apos;s fastest-growing hospitality markets. Speak with our sales team today to discover how you can make the most of this unique opportunity!</p>
                        </Fade>
                    </div>
                </div>

                <div className=" pt-xs">
                    <HubspotForm portalId={"14527187"} formId={"9b80f5cc-3153-4063-924b-39dae712c15d"} />
                </div>
            </section>



            <PopOver>
                <StartupPromo />
            </PopOver>

            
            <Footer />
            <LenisScroller />
        </>
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






export async function getStaticProps({ preview, previewData }) {

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
            abVideos: pageData.data.abVideos.videos
		}
	}
}
