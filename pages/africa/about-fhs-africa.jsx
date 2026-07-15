import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Fade } from "../../fuselage/animation/animation"

import Head from "next/head"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'
import { BarChart, Field } from '../../ui/components/bar-chart'
import { GlobalMap } from '../../ui/components/global-map'

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
    QueryCustomQuoteImageGrid,
    QueryCustomFrontendModule
} from "../../graphql/queries-africa"

import handleSeomaticMeta from '../../lib/seomatic'



export default function Page ({ entry, seomatic }) {

    // console.log('entry:', entry) 

    const injectCustomFrontendModules = (contentBocksArray) => {
        return contentBocksArray.map((block, index) => {
            if (block.__typename === "ahifContentBlocks_customModule_BlockType") {
                // add case logic here
                return <Infographics/>
            } else {
                return handleContentBlocks( [block] )
            }
        })
    }

    
  
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

            { injectCustomFrontendModules(entry.ahifContentBlocks) }
            
            {/* { handleContentBlocks( entry.ahifContentBlocks ) } */}

            <Footer />
            <LenisScroller />

        </>
    )
}

Page.theme = 'africa'



const Infographics = () => {

    const INDUSTRY_DATA = [
        {
            label: 'Hotel Operator/Management',
            value: 22
        },
        {
            label: 'Investor (Equity)/Owner',
            value: 21
        },
        {
            label: 'Consultant/Advisor',
            value: 13
        },
        {
            label: 'Architecture/Design',
            value: 10
        },
        {
            label: 'Hotel Developer/Builder',
            value: 9
        },
        {
            label: 'Government/Tourism Official',
            value: 7
        },
        {
            label: 'Technology/Innovation',
            value: 6
        },
        {
            label: 'Real Estate Broker/Surveyor',
            value: 3
        },
        {
            label: 'Other',
            value: 10
        },
        
    ]

    return (
        <section className="block bg-primary">
            <div className="container center">
                <Fade>
                    <p className="fs-1 fw-600 lh-1 caps">Who Attends FHS Africa</p>
                </Fade>
            </div>

            <div className="container columns-2 gap-md">
                <section>
                    <p className="fs-4 fw-500 pb-sm">By Industry:</p>
                    <BarChart>
                        {
                            INDUSTRY_DATA &&
                            INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 3, max: 22 }} />)
                        }
                    </BarChart>
                </section>
                
                <section>
                    <p className="fs-4 fw-500 pb-sm">By Geography:</p>
                    <GlobalMap />
                </section>
            </div>
        </section>
    )
}



export async function getStaticProps({ preview, previewData }) {

    const entryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE_AFRICA}", id: "15760") {
                    ... on ${process.env.SITE_HANDLE_AFRICA}Pages_page_Entry {
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
                            ${QueryCustomFrontendModule}
                        }
                        ${QuerySEO}
                    }
                }
            }
        `
    })

    const page = entryData

    return { props: 
        { 
            entry: page.data.entry, 
            seomatic: page.data.entry.seomatic
        }
    }
}