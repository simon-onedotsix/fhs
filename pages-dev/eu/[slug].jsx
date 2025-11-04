import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"

import { Header, HeaderShim } from '../../fuselage/theme/2024/eu/global/header/header'
import { Footer } from "../../fuselage/theme/2024/eu/global/footer/footer"

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
    QueryImages
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'



export default function Page ({ entry, seomatic }) {

    // console.log('entry:', entry) 
  
    return (
        <div className='bg-primary' style={{ backgroundColor: `var(--primary)`, backgroundImage: `url('/assets/theme/eu-2024/fhs-2024-eu-bg.svg')`, backgroundSize: `100%` }}>

            <Head>
				{ handleSeomaticMeta( seomatic ) }
                <meta name="robots" content="noindex" />
            </Head>

            <Header compact shimMobile={true} />

            <HeaderShim />
            
            {handleContentBlocks( entry.fhisContentBlocks, null, null, 'eu' )}

            <Footer />

        </div>
    )
}

Page.theme = 'eu-2024'


export async function getStaticPaths() {

    const entriesData = await craftApolloClient().query({
        query: gql`
            query Pages {
                entries(site: "${process.env.SITE_HANDLE_EU}", section: "${process.env.SITE_HANDLE_EU}Pages") {
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
                entry(site: "${process.env.SITE_HANDLE_EU}", slug: "${params.slug}") {
                    ... on ${process.env.SITE_HANDLE_EU}Pages_page_Entry {
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

    return { 
        props: { 
            entry: entryData.data.entry,
            seomatic: entryData.data.entry.seomatic 
        }
    }
}