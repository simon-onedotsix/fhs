import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"
import Script from "next/script"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from "../../fuselage/animation/animation"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { Flag } from "../../fuselage/theme/2025/world/blocks/flag-ticker/flag-ticker"
import Ticker from 'framer-motion-ticker'

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
    QuerySEO,
    QueryImages,
    QueryCards,
    QueryTestimonials,
    QueryTickers,
    QueryBannerImage,
    QueryCoutryPavilions,
    QueryVideoTestimonials,
    Passes
} from "../../graphql/queries"





export default function Page ({ entry }) {

    
    const {countryPavilions} = entry.fhisContentBlocks.find( block => block.__typename === 'fhisContentBlocks_countryPavilions_BlockType' )
    

    return (
        <>
                <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
            
            <Header compact />

            {/* UPDATE TO USE CMS DATA */}

            <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-World/53727353681_d9e964e388_o.jpg', width: 6192, height: 4128 }} >

                <div className="container maxw-50 pb-xl formatted c-white center">
                    <Pop>
                        <h1>Projects & Country Pavilions</h1>
                    </Pop>
                    <Fade>
                        <p className='fs-6 mt-sm'>FHS World features country pavilions that showcase new projects and destinations unique to each participating country. These pavilions will showcase upcoming hospitality projects unique to each country and present a plethora of investment opportunities in ventures with high ROI.</p>
                    </Fade>
                </div>

            {/* END UPDATE TO USE CMS DATA */}
                
                <div className="container">
                    <p className="fs-2 center pb-sm">Country Pavilions at FHS World 2026</p>
                </div>

                {
                    countryPavilions.length &&
                    <Ticker speed={10}>
                        { countryPavilions.map( (pavilion, index) => <Flag key={index} flagUrl={pavilion.flag[0].url} /> ) }
                        { countryPavilions.map( (pavilion, index) => <Flag key={index} flagUrl={pavilion.flag[0].url} /> ) }
                        { countryPavilions.map( (pavilion, index) => <Flag key={index} flagUrl={pavilion.flag[0].url} /> ) }
                    </Ticker>      
                }
                
                {handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' )}

            </PageHeroImage>


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
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "271354") {
                    id
                    hero {
                        url
                        width
                        height
                    }
                    heading
                    body

                    ${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
                        ${QueryText}
                        ${QueryFlipFlops}
                        ${QueryFloaters}
                        ${QueryBillboards}
                        ${QueryBillboardSliders}
                        ${QueryImpactFigures}
                        ${QueryVideos}
                        ${QueryProfileCarousel}
                        ${QueryForm}
                        ${QueryImages}
                        ${QueryCards}
                        ${QueryTestimonials}
                        ${QueryTickers}
                        ${QueryBannerImage}
                        ${QueryCoutryPavilions}
                        ${Passes}
                        ${QueryVideoTestimonials}
                    }
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