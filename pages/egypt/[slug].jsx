import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

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
    QueryDividers,
    Passes
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'



export default function Page ({ entry, seomatic }) {

    // console.log('entry:', entry) 
  
    return (
        <>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
            </Head>

            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />
            
            {handleContentBlocks( entry.fhisContentBlocks, null, null, 'egypt' )}

            <Footer />
            <LenisScroller />

        </>
    )
}

Page.theme = 'egypt'





export async function getStaticPaths() {

    const entriesData = await craftApolloClient().query({
        query: gql`
            query Pages {
                entries(site: "${process.env.SITE_HANDLE_EGYPT}", section: "${process.env.SITE_HANDLE_EGYPT}Pages") {
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
                entry(site: "${process.env.SITE_HANDLE_EGYPT}", slug: "${params.slug}") {
                    ... on ${process.env.SITE_HANDLE_EGYPT}Pages_page_Entry {
                        id
                        title
                        slug
                        fhisContentBlocks {
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
                            ${QueryDividers}
                            ${Passes}
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