import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import { useState, useRef } from "react"

import _, { curry } from 'lodash'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../../fuselage/theme/2023/ae/layout/animation/animation"

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_EGYPT as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/egypt/common/footer/footer'

import { Button } from "../../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { ArrowButton } from "../../../fuselage/components/arrow-button/arrow-button"

import { VideoTestimonialCard } from '../../sa/video-testimonials'


import CSS from '../../../fuselage/theme/2024/world/css/homepage.module.css'


import { partners } from "../../../data/partners"


export default function Page({ videoTestimonials, partnerData }) {
    
    console.log('parterData:', partnerData)

    // use fieldDefinitions to automate partner categorisation (requires ID of the selectFieldDefinition used to tag categories inside SC studio)

	const swapcardPartnerGroups = partnerData.event.fieldDefinitions.find( arr => arr.id === "RmllbGREZWZpbml0aW9uXzI5NjgyNg==").optionsValues
	const partnersArray = []
	
	swapcardPartnerGroups.map(category => {
		const partnerGroup = []
		
		partnerData.exhibitors.map( partner => {
			partner.fields.map( field => {
				if ( field.id === category.id ) partnerGroup.push( partner )
			})
		})
		
		if (partnerGroup.length) {
			partnersArray.push(
				{
					group: category,
					partners: partnerGroup
				}
			)
		}
    })
    
    console.log('swapcard partner categories:', swapcardPartnerGroups )
	console.log('PARTNERS ARRAY:', partnersArray)

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />


            <section className="block bg-default">
                <div className="container center">
                    <h1 className="fs-0 caps">Partners and Supporters</h1>
                </div>

                <div className="container center formatted maxw-55">
                    <p className="fs-5">Our partners help shape the conversation and connect the market—supporting an environment designed for meaningful introductions and high, quality deal flow</p>
                </div>

                <div className="container center">
                    <Pop><p><ButtonKeyline href={`/egypt/forms/become-a-partner`}>Become A Partner</ButtonKeyline></p></Pop>
                </div>
            </section>



            <section className="block bg-default">
                <div className="container center maxw-60">

                    {
                        partnersArray.length &&
                        partnersArray.map((category, index) => (
                            <div key={index} className={`mb-md`}>
                                <p className="fs-4 fw-500 c-primary pb-xs">{category.group.translations[0].value}</p>
                                <div className="logoGrid">
                                    {
                                        category.partners.map(partner => (
                                            <LogoBox
                                                key={partner.id}
                                                size={250}
                                                logoUrl={partner.logoUrl}
                                                href={`/egypt/partners/${partner.id}`}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>


            {/* SECTION 2 */}

            <section className="block bg-dark">
                <div className="container center">
                    <h1 className="fs-1">Hear Directly From Our Partners</h1>
                </div>

                <div className="container columns-3 gap-md">
                    { videoTestimonials.map( entry => <VideoTestimonialCard key={entry.id} entry={entry} /> ) }
                </div>
            </section>


            {/* SECTION 3 */}

            <section className="block bg-white">
                <div className="container center">
                    <h1 className="fs-1 c-primary">Our 2026 Events Sponsors & Partners</h1>
                </div>

                <div className="container" style={{ display: `flex`, flexWrap: `wrap`, gap: `4rem`, justifyContent: `center`}}>
                    {
                        partners.length &&
                        _.orderBy(_.uniqBy(partners, 'name'), 'name').map(partner => (
                            <div
                                key={partner.id}
                                style={{
                                    position: `relative`,
                                    width: 150,
                                    aspectRatio: 19 / 9,
                                    display: `flex`,
                                    justifyContent: `center`,
                                    alignItems: `center`,
                                }}
                            >
                                <Pop><img src={partner.logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} /></Pop>
                            </div>
                        ))
                    }
                </div>
            </section>

       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'



const LogoBox = ({ logoUrl, size = 150, href }) => {
    return (
        <Pop inline>
            {
                href
                    ? (
                        <Link href={href}>
                            <div style={{...logoBoxStyle, width: size}} >
                                <img src={logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} />
                            </div>
                        </Link>
                    ) : (
                        <div style={{...logoBoxStyle, width: size}} >
                            <img src={logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} />
                        </div>
                    )
            }
            
        </Pop>
    )
}

const logoBoxStyle = {
    cursor: `pointer`,
    position: `relative`,
    aspectRatio: 19 / 9,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,

    backgroundColor: `white`,
    padding: 20,
    borderRadius: 10
}




export async function getStaticProps() {

    const cmsData = await craftApolloClient().query({
        query: gql`
            query Page {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "videoTestimonials", limit: 3) {
                    ... on videoTestimonials_videoTestimonial_Entry {
                        id
                        slug
                        title
                        videoShareUrl
                        fullName
                        jobTitle
                        organisation
                        testimonial
                    }
                }
            }
        `
    })

    const swapcardData = await fetch(
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
						event(id: "${process.env.SWAPCARD_EVENT_ID_EGYPT_2026}") {
							fieldDefinitions {
								... on SelectFieldDefinition {
									id
									name
									optionsValues {
										id
										value
										translations {
											language
											value
										}
									}
								}
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_EGYPT_2026}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_EGYPT_2026,
					"page": 1
				}
			})
		}
	)

	console.log(swapcardData)
	
	const partnerData =  await swapcardData.json()


    return {
        props: { 
            videoTestimonials: cmsData.data.entries,
            partnerData: partnerData.data,
        }
    }
}