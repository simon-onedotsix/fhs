import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

import handleContentBlocks from "../../lib/content-blocks-africa"

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
    QueryPageHeader,
    QueryCards,
    QueryOffsetCallout,
    QueryDividers,
    QuerySEO,
    QueryPartners,
    QueryTestimonials,
    QueryCustomSliderVideo,
    QueryCustomQuoteImageGrid
} from "../../graphql/queries-africa"

import handleSeomaticMeta from '../../lib/seomatic'



export default function Page ({ entry, seomatic }) {

    // console.log('entry:', entry) 
  
    return (
        <>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
              { handleSeomaticMeta( seomatic ) }
            </Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />



            {/* <section className="block bg-default">
                <div className="container formatted">
                    <h2>Put your brand at the centre of Africa's hospitality investment conversation.</h2>
                    <p>Partnering with FHS Africa allows you to build direct relationships with the investors, owners, developers and operators shaping hospitality across the continent.</p>
                    <h5>Why partners return year after year:</h5>
                    <p>✓ Generate qualified business opportunities<br/>✓ Meet senior decision-makers in two days rather than six months<br/>✓ Present deal signings to the industry's most influential audience<br/>✓ Position themselves as industry leaders<br/>✓ Build relationships that lead to long-term partnerships</p>
                </div>
            </section> */}

            
            { handleContentBlocks( entry.ahifContentBlocks ) }

            <Footer />
            <LenisScroller />

        </>
    )
}

Page.theme = 'africa'






export async function getStaticProps() {

    const entryData = await craftApolloClient().query({
        query: gql`
            query Page {
                entry(site: "ahif", slug: "why-partner") {
                    ... on ahifSponsorship_ahifSponsorship_Entry {
                        id
                        title
                        slug
                        ahifContentBlocks {
                            ${QueryText}
                            ${QueryFlipFlops}
                            ${QueryFloaters}
                            ${QueryBillboards}
                            ${QueryBillboardSliders}
                            ${QueryImpactFigures}
                            ${QueryVideos}
                            ${QueryProfileCarousel}
                            ${QueryOffsetCallout}
                            ${QueryPageHeader}
                            ${QueryDividers}
                            ${QueryCards}
                            ${QueryForm}
                            ${QueryPartners}
                            ${QueryTestimonials}
                            ${QueryCustomSliderVideo}
                            ${QueryCustomQuoteImageGrid}
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