import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import _ from 'lodash'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/egypt/common/header/header'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { VideoTestimonialCard } from '../../pages/sa/video-testimonials'


import CSS from '../../fuselage/theme/2024/world/css/homepage.module.css'


import { partners } from "../../data/partners"


export default function Page ({ videoTestimonials }) {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
           <Header compact />


            <section className="block bg-default">
                <div className="container center">
                    <h1 className="fs-0 caps">Sponsors & Partners</h1>
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
                    <p className="fs-4 fw-500 c-primary pb-xs">Partners</p>
                    <div className="logoGrid">
                        <LogoBox size={250} logoUrl={`https://cms.thebench.com/assets/img/logos/KOFISI-Logo.png`} />
                        <LogoBox size={250} logoUrl={`https://static.swapcard.com/public/images/509f8a7dcf094ebf9f9ad42481e5f9fe.png`} />
                        <LogoBox size={250} logoUrl={`https://cms.thebench.com/assets/img/logos/ACT_Logo-1024x401.png`} />
                        <LogoBox size={250} logoUrl={`/assets/img/egypt/partners/jll.png`} />
                        <LogoBox size={250} logoUrl={`https://cms.thebench.com/assets/img/logos/KertenHospitality_Logo.jpg`} />
                        <LogoBox size={250} logoUrl={`https://cms.thebench.com/assets/img/logos/wjcdzzravithipy9zpch.webp`} />
                    </div>
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



const LogoBox = ({ logoUrl, size = 150}) => {
    return (
        <Pop inline>
            <div
                style={{
                    position: `relative`,
                    width: size,
                    aspectRatio: 19 / 9,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,

                    backgroundColor: `white`,
                    padding: 20,
                    borderRadius: 10
                }}
            >
                <img src={logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} />
            </div>
        </Pop>
    )
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


    return {
        props: { 
            videoTestimonials: cmsData.data.entries
        }
    }
}