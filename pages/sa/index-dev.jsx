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

import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { ImpactGrid, ImpactFigure, TitleBlock, ImageBlock } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"


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


export default function Home ({ entry, seomatic, contentBlocks, partners }) {

    // console.log('entry:', entry)


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


            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-world-opt.mp4'} poster={'/assets/video/fhs-2024-world-opt-poster.jpg'}>

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

            
            <Footer />
            <LenisScroller />
        </>
    )
}
Home.theme = 'sa-2025'




const SectionHeading = ({ heading }) => {
    return (
        <div className={CSS.sectionHeadingContainer}>
            <span/>
            <Slide>
                <p className={CSS.sectionHeading}>{ heading }</p>
            </Slide>
        </div>
    )
}




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
            partners: partnerData2025.data
		}
	}
}
