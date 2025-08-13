import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'


import { Header } from '../../../fuselage/theme/2025/brf/common/header/header'
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
    QueryVideoTestimonials,
    Passes
} from "../../../graphql/queries"



export default function Page ({ entry }) {

    const lenis = useLenis()

    // console.log(entry)
    
    return (
        <>
            <Header overlaid inverse />

            
            { handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' ) }


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'brf'




export async function getStaticProps({ params, preview, previewData }) {

    const entryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "266357") {
                    ... on ${process.env.SITE_HANDLE_AE}Pages_page_Entry {
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
                        }
                    }
                }
            }
        `
    })

    return { 
        props: { 
            entry: entryData.data.entry, 
        }
    }
}