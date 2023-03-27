import { gql } from "@apollo/client"
import craftApolloClient from "../pages/api/apollo"

import Head from "next/head"

import { Header } from '../fuselage/global/header/header'

import handleContentBlocks from "../lib/content-blocks"

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
    QueryImages
} from "../graphql/queries"

export default function Page ({ entry }) {

    // console.log('entry:', entry)
    // console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))

    let metaTitle = JSON.parse(entry.seomatic.metaTitleContainer)
    let metaTags = JSON.parse(entry.seomatic.metaTagContainer)  
  
    return (
        <>

            <Head>
                <title>{metaTitle.title.title}</title>

                <meta name="description" content={metaTags.description.content} />
                <meta name="referrer" content={metaTags.referrer.content} />
                {/* <meta name="robots" content={metaTags.robots.content} /> */}
                <meta content={metaTags['og:locale'].content} property="og:locale" />
                <meta content={metaTags['og:site_name'].content} property="og:site_name" />
                <meta content={metaTags['og:type'].content} property="og:type" />
                <meta content={metaTags['og:url'].content} property="og:url" />
                <meta content={metaTags['og:title'].content} property="og:title" />
                <meta content={metaTags['og:description'].content} property="og:description" />
                <meta content={metaTags['og:image'].content} property="og:image"></meta>  
            </Head>

            <Header compact shim />
            
            {handleContentBlocks( entry.fhisContentBlocks )}

        </>
    )
}


export async function getStaticPaths() {

    const entriesData = await craftApolloClient().query({
        query: gql`
            query Pages {
                entries(site: "${process.env.SITE_HANDLE}", section: "${process.env.SITE_HANDLE}Pages") {
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
                entries(site: "${process.env.SITE_HANDLE}", slug: "${params.slug}") {
                    ... on ${process.env.SITE_HANDLE}Pages_page_Entry {
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
                        }
                        ${QuerySEO}
                    }
                }
            }
        `
    })

    const page = entryData

    return { props: { entry: page.data.entries[0] }}
}