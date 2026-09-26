import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Head from "next/head"
import Script from "next/script"

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { LIVING_FHS_SA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'

import handleContentBlocks from "../../../lib/content-blocks"

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
    Passes,
    QueryVideoTestimonials,
    QueryHoverPopups
} from "../../../graphql/queries"

import handleSeomaticMeta from '../../../lib/seomatic'



export default function Page ({ entry, seomatic }) {

    // console.log('entry:', entry) 
  
    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
            </Head>

            <EventsBar site={'/sa/brf'} />
            <Header
                site={`/sa/brf`}
                parentSite={`/sa`}
                handle={`At FHS Saudi Arabia`}
                parentHandle={`FHS Saudi Arabia`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />
            
            { handleContentBlocks( entry.fhisContentBlocks, null, null, 'world' ) }

            <Footer />
            <LenisScroller />

        </>
    )
}

Page.theme = 'living'





export async function getStaticPaths() {

    const entriesData = await craftApolloClient().query({
        query: gql`
            query Pages {
                entries(site: "${process.env.SITE_HANDLE_LIVING}", section: "${process.env.SITE_HANDLE_LIVING}Pages") {
                    slug
                }
            }
        `
    })

    const entries = await entriesData.data.entries

    return {
        paths: entries.map( entry => ({ params: { slug: entry.slug } })),
        fallback: false
    }

}

export async function getStaticProps({ params, preview, previewData }) {

    const entryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE_LIVING}", slug: "${params.slug}") {
                    ... on ${process.env.SITE_HANDLE_LIVING}Pages_page_Entry {
                        id
                        title
                        slug
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
                            ${QueryHoverPopups}
                        }
                        ${QuerySEO}
                    }
                }
            }
        `
    })

    return { 
        props: { 
            entry: entryData.data.entry,
            seomatic: entryData.data.entry.seomatic 
        }
    }
}