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
import { HeroUnit } from "../../fuselage/theme/2025/sa/blocks/hero-unit/hero-unit"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"
import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'

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


const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/ae/2023/photo-01.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/ae/2023/photo-02.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/ae/2023/photo-03.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/ae/2023/photo-04.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/ae/2023/photo-05.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/ae/2023/photo-06.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    }
]



export default function Home ({ entry, seomatic, contentBlocks, partners }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    // console.log('entry:', entry)

    let selectedCmsSpeakers = entry.fhisContentBlocks.find( obj => obj.__typename === 'fhisContentBlocks_profilesCarousel_BlockType')
    // console.log('selectedCmsSpeakers:', selectedCmsSpeakers)


    // scroll animation
    let introRef = useRef(null)
    let { scrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["start 75%", "end 0%"]
    })

    let y = useTransform( scrollYProgress, [0, 1], ["-15%", "5%"])

    


    // swapcard sponsors
    // programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partners.exhibitors.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0].id, name: obj.fields[0].translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)

	// 2025 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg1Nw==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg2MA==') orderedCategories.push({ ...category, priority: 2 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg1OA==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yNDQ3NDE0MA==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk3OTkyMw==') orderedCategories.push({ ...category, priority: 5 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk3OTkyNQ==') orderedCategories.push({ ...category, priority: 6 })
	})





    return (
        <div className="bg-theme">
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
			</Head>
        
            <Header overlaid inverse />


            <HeroUnit hero={{
                url: "/assets/img/sa/homepage-hero-2025-2.jpg",
                width: "3000",
                height: "2333"
            }}>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Invest in Tomorrow: Today, Together
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
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

            </HeroUnit>
            
            
            
            {/* HOST SPONSOR */}

            <section className="block bg-accent-2">
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


            { handleContentBlocks( contentBlocks, null, null, 'sa' ) }

            
            {/* 2025 partners */}

			<section className='block bg-default'>
                <div className='container center formatted'>
                    <p className='fs-1 fw-600'>2025 Sponsors &amp; Partners</p>
                    <p><Link href="/sa/get-in-touch"><a className="button secondary">Become A Sponsor</a></Link></p>
                </div>

                <PartnerCategoryGrid>
                    {
                        partners &&
                        _.orderBy(orderedCategories, 'priority').map( category => {
                            const group = partners.exhibitors.filter( partner => {
                                if (partner.fields[0].id === category.id ) return partner
                            })
                            // console.log('group:', group)

                            return (
                                <PartnerCategory key={category.id}>

                                    <h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
                                    <PartnerLogoGrid>
                                        {
                                            _.orderBy(group, 'name').map(partner => (
                                                <a key={partner.id} href={`/sa/partners/${partner.id}`}>
                                                    {
                                                        partner.logoUrl &&
                                                        <PartnerLogo 
                                                            hero={{ url: partner.logoUrl }} 
                                                            size={ category && category.size }
                                                        />
                                                    }
                                                </a>
                                            ))
                                        }
                                    </PartnerLogoGrid>
                                    
                                </PartnerCategory>
                            )
                            
                        })
                    }
                </PartnerCategoryGrid>
            </section>


            <Footer />
            <LenisScroller />


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                { modalContent } 
            </PopupOverlay>

        </div>
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
            partners: partnerData2025.data
		}
	}
}
