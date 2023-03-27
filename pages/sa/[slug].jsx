import Layout from '../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"

import { Header } from '../../fuselage/global-sa/header/header'
import { Footer } from '../../fuselage/global-sa/footer/footer'

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
    QueryPartners,
	BizzaboPartners
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'

export default function Page ({ entry, seomatic }) {

    console.log('entry:', entry)
    
  
    return (
        <>

            <Head>
                { handleSeomaticMeta( seomatic ) }
            </Head>

            <Header compact shim />
            
            { handleContentBlocks( entry.fhisContentBlocks, null, null, 'sa' ) }

            <Footer />

        </>
    )
}


Page.getLayout = function getLayout( page ) {
	return (
		<Layout>
			{ page }
		</Layout>
	)
}




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