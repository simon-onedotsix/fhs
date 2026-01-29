import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

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
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { VideoTestimonialCard } from '../../pages/sa/video-testimonials'
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard, Tri } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"

import CSS from '../../fuselage/theme/2024/world/css/homepage.module.css'



export default function Page ({ videoTestimonials }) {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
           <Header compact />


            <section className="block">
                <div className="container center">
                    <h1 className="fs-0 caps">Sponsors & Partners</h1>
                </div>

                <div className="container center formatted">
                    <p>Our partners help shape the conversation and connect the market—supporting an environment designed for meaningful introductions and high-quality deal flow</p>
                </div>

                <div className="container center">
                    <p><ButtonKeyline href={`/egypt/forms/become-a-partner`}>Become A Partner</ButtonKeyline></p>
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

                <div className="container center">
                    [ logo slider ]
                </div>
            </section>

       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'


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