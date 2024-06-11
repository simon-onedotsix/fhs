import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import handleContentBlocks from "../../lib/content-blocks-sa"

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
    Passes,
    QueryPartners,
    QueryTestimonials,
	BizzaboPartners
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'

export default function Page ({ entry, seomatic }) {

    // console.log('entry:', entry)
    
  
    return (
        <>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( seomatic ) }
            </Head>
            
            <ThemeBg />

            <Header compact shim />
            
            { handleContentBlocks( entry.fhisContentBlocks, null, null, 'sa' ) }

            <Footer />
            <LenisScroller />
        </>
    )
}


Page.theme = 'sa-2024'




export async function getStaticPaths() {

    const entriesData = await craftApolloClient().query({
        query: gql`
            query Pages {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "${process.env.SITE_HANDLE_SA}Pages") {
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
                entry(site: "${process.env.SITE_HANDLE_SA}", slug: "${params.slug}") {
                    ... on ${process.env.SITE_HANDLE_SA}Pages_page_Entry {
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
                            ${QueryPartners}
                            ${Passes}
                            ${QueryTestimonials}
                            ${BizzaboPartners}
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
            seomatic: entryData.data.entry.seomatic, 
        }
    }
}