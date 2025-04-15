import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState } from 'react'
import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactFigure } from '../../fuselage/theme/2025/world/blocks/impact-grid/impact-grid'




import CSS from '../../css/app/lead-wall.module.css'






export default function Page ({ entry }) {

    console.log('entry:', entry)

    return (
        <>
            <Header compact />


            <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-World/53727353681_d9e964e388_o.jpg', width: 6192, height: 4128 }} >
                <div className="container maxw-50 pb-md formatted c-white center">
                    <h1>Projects & Country Pavilions</h1>
                    <p className='fs-6 mt-sm'>FHS World features country pavilions that showcase new projects and destinations unique to each participating country. These pavilions will showcase upcoming hospitality projects unique to each country and present a plethora of investment opportunities in ventures with high ROI.</p>
                </div>
            </PageHeroImage>


            <section className="block pt-0">
                <div className="container formatted center">
                    <p className='fs-1 fw-600'>Country Pavilions at FHS World 2025</p>
                </div>
            </section>
            

            <Footer />
            <LenisScroller />
        </> 
    )

}

Page.theme = 'world-2024'




export async function getStaticProps() {

    const cmsData = await craftApolloClient().query({
        query: gql`
            query PAGE {
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "157393") {
                    title
                }
            }
        `
    })

    return {
        props: { 
            entry: cmsData.data.entry
        }
    }
}