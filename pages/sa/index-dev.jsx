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

const AB_DATA = [
    {
        url: `/sa/speakers/profile/khalid-saud-abu-haimed`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Abu-Haimed_Khalid-Saud_pic2_2023-07-05-064306_cgrk.jpg',
        fullName: 'Khalid Saud Abu Haimed',
        jobTitle: 'Chief Executive Officer',
        company: 'Al Khozama Investments',
    },
    {
        url: `/sa/speakers/profile/sultan-bader-al-otaibi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Otaibi_Sultan_photo.jpg',
        fullName: 'Sultan Bader Al-Otaibi',
        jobTitle: 'Chief Executive Officer',
        company: 'Taiba Investments',
    },
    {
        url: `/sa/speakers/profile/mae-al-mozaini`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Mozaini_Mae_hi-res-photo.jpeg',
        fullName: 'Mae Al Mozaini',
        jobTitle: 'Founder & CEO',
        company: `The Arab Institute for Women's Empowerment - Nusf`,
    },
    {
        url: `/sa/speakers/profile/mohammad-al-athel`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Athel_Mohammad_photo.jpg',
        fullName: 'Mohammad Alathel',
        jobTitle: 'Managing Director',
        company: `Amsa Hospitality`,
    },
    {
        url: `/sa/speakers/profile/manuel-schneider`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Manuel-Schneider_profile-photo-1.jpg',
        fullName: 'Manuel Schneider',
        jobTitle: 'Representative',
        company: `A PIF Company`,
    },
    {
        url: `/sa/speakers/profile/abdallah-azhari`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/AZHARI_ABDALLAH_sq.jpg',
        fullName: 'Abdullah Azhari',
        jobTitle: 'Chief Executive Officer',
        company: `Saudi Icon`,
    }
]

export default function Home ({ entry, seomatic, contentBlocks, partners }) {

    // console.log('entry:', entry)
    // console.log('partners:', partners)


    // scroll animation
    let introRef = useRef(null)
    let { scrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["start 75%", "end 0%"]
    })
    let y = useTransform( scrollYProgress, [0, 1], ["-15%", "5%"])



    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
			</Head>
        
            <Header overlaid inverse />


            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-sa-opt.mp4'} poster={'/assets/video/fhs-2024-sa-opt-poster.jpg'}>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Invest in Tomorrow: Today,&nbsp;Together
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 fw-500 c-white center mt-xs`} 
                >
                    14 - 16 April 2025, Mandarin Oriental Al Faisaliah, Riyadh
                </motion.p>

                <Fade>
                    <div className="mt-sm center">
                        <Pop inline>
                            <Button 
                                href={'/sa/agenda'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >
                                2024 Programme
                            </Button>&ensp;
                            <Button 
                                href={'/sa/post-event-resources'} 
                                theme={{ background: `var(--secondary)`, hover: `var(--secondary-dark)`, color: `white`}} 
                                decal={'fs-5 fw-600'} 
                                accent
                            >
                                2024 Resources
                            </Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>


            {/* HOST SPONSOR */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-3 fw-600 c-accent caps">2024 Host Sponsors</p>
                        <Pop>
                            <div className={`${CSS.hostSponsorLogoWrapper} mt-sm mx-auto`}>
                                    <Image src={`/assets/site/sa/mandarin-oriental-al-faisaliah-logo.png`} width={200} height={200}/>
                                    <Image src={`/assets/site/sa/al-khozama-logo.png`} width={200} height={200}/>
                            </div>
                        </Pop>
                </div>
            </section>


            {/* QUOTE */}
            <section className="block bg-primary o-hidden ">
                <div className="container maxw-80">
                    <Quotation
                        avatarUrl={'/assets/img/sa/haddad-bani.jpg'}
                        quote={'FHS Saudi Arabia 2024 was one of the best industry events I have attended in the recent years!'}
                        fullName={'Bani Haddad'}
                        title={'Managing Director - Hospitality, Aleph Hospitality'}
                    />
                </div>
            </section>

            
            <ImpactGrid>
                <TitleBlock>
                    <SectionHeading heading={'2024 in Numbers'} />
                </TitleBlock>
                <ImpactFigure figure={1329} impact={'Attendees'}  />
                <ImpactFigure decal={'bg-accent'} figure={38} impact={'Countries'}  />
                <ImpactFigure decal={'bg-primary'} figure={206} impact={'Speakers'}  />
                <ImpactFigure figure={95} impact={'Sponsors & Partners'}  />
                <ImpactFigure decal={'bg-primary'} figure={80} unit={'%'} impact={'C-Level Executives, VP & Directors'}  />
                <ImpactFigure decal={'bg-theme'} />
                <ImpactFigure decal={'bg-accent'} figure={94} unit={'%'} impact={'of those surveyed indicated FHS Saudi Arabia met their objective of gaining the latest market insights.'} />
                <ImpactFigure decal={'bg-primary'} figure={84} unit={'%'} impact={'of those surveyed indicated FHS Saudi Arabia met their objective of finding new business opportunities.'} />
                <ImageBlock />
            </ImpactGrid>


            {/* QUOTE */}
            <section className="block bg-dark o-hidden ">
                <div className="container maxw-80">
                    <Quotation
                        avatarUrl={'/assets/img/sa/mizan-abdulla.jpg'}
                        quote={`Stepping into the Future Hospitality Summit felt like entering a realm where innovation knows no bounds. This summit wasn't just an event — it was a transformative experience that ignited my passion for shaping the future of hospitality.`}
                        fullName={'Abdulla Mizan'}
                        title={'Director, Procurement at Maldives Fund Management Corporation'}
                    />
                </div>
            </section>


            {
                AB_DATA &&
                <SpeakerCarousel 
                    heading={`2025 Advisory Board`} 
                    text={``}
                    decal={'bg-medium'}
                    ctaLink={'/sa/advisory-board'}
                    ctaLabel={'View All Members'}
                    color={'white'}
                >
                    {
                        AB_DATA.map( (profile, index) => (
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


            <Ticker>
                <p className="fs-2"><strong>$1.1billion</strong> in business opportunities and deal volume gained in 2024 - </p>
                <p className="fs-2"><strong>$1.1billion</strong> in business opportunities and deal volume gained in 2024 - </p>
                <p className="fs-2"><strong>$1.1billion</strong> in business opportunities and deal volume gained in 2024 - </p>
            </Ticker>


            {/* ANNOUNCEMENTS */}

            <ArticleScroller>
                {
                    ARTICLE_DATA &&
                    ARTICLE_DATA.map(( article, index ) => <Article key={index} heroUrl={article.heroUrl} title={article.title} excerpt={article.excerpt} url={article.url} />)
                }
            </ArticleScroller>


            <VideoUnit>
                <SectionHeading heading={'Watch 2024 Highlights'} />
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
                        <CTAButton href={'https://www.flickr.com/photos/benchevents/albums/'} label={'View all Photos'} target={'_blank'} />
                    </div>
                </ContentBlock>
            </PhotoGrid>
            

            <LogoTicker heading={'Thank You to Our Sponsors & Partners'}>
                {
                    partners &&
                    partners.map( logo => <Logo key={logo.id} logoUrl={logo.logoUrl} />)
                }
            </LogoTicker>


            {/* PREMIUM EXPOSURE FORM */}

            <section className="bg-theme-primary o-hidden">
                <div className="maxw-50 pt-md">
                    <SectionHeading heading={'Get Premium Exposure at FHS Saudi Arabia 2025'} />
                </div>
                <div className="block">
                    <div className="container maxw-45">
                        <div className="formatted">
                            <p className="fs-6">Join the epicenter of the Middle East&apos;s hospitality industry at FHS Saudi Arabia 2025. This premier conference brings together Government leaders, tourism ministries, top hospitality brands, hotel owners and investors, renowned restaurant groups, destination developers, asset managers, financial institutions, and consultants. By participating, you&apos;ll have the opportunity to showcase your brand, position yourself as a thought leader or innovator, and connect with key decision-makers and industry influencers in the region. Don&apos;t miss out on elevating your presence in one of the world&apos;s fastest-growing hospitality markets. Speak with our sales team today to discover how you can make the most of this unique opportunity!</p>
                        </div>
                    </div>
                    <div className="container maxw-45">
                        <HubspotForm portalId={"14527187"} formId={"9b80f5cc-3153-4063-924b-39dae712c15d"} />
                    </div>
                </div>
            </section>
            
            <Footer />
            <LenisScroller />
        </>
    )
}
Home.theme = 'sa-2025'





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
            partners: partnerData2025.data.exhibitors
		}
	}
}
