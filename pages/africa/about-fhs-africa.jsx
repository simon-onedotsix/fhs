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
import { GlobalMap, Region, Disclaimer } from '../../ui/components/global-map'

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
                return <Infographics key={`custom-${index}`}/>
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



// CUSTOM MODULES -------------------------

const Infographics = () => {

    const INDUSTRY_DATA = [
        {
            label: 'Hotel Operator / Management',
            value: 22
        },
        {
            label: 'Investor / Owner',
            value: 19
        },
        {
            label: 'Consultant / Advisor',
            value: 12
        },
        {
            label: 'Technology',
            value: 8
        },
        {
            label: 'Government / Tourism Official',
            value: 7
        },
        {
            label: 'Hotel Developer / Builder',
            value: 7
        },
        {
            label: 'Financial Services / Banks',
            value: 6
        },
        {
            label: 'Architecture & Design',
            value: 4
        },
        {
            label: 'FF&E',
            value: 3
        },
        {
            label: 'Education',
            value: 2
        },
        {
            label: 'Leisure / Entertainment',
            value: 2
        },
        {
            label: 'Real Estate Broker / Surveyor',
            value: 2
        },        
        {
            label: 'Asset Manager',
            value: 2
        },        
        {
            label: 'Lawyer',
            value: 2
        },        
        {
            label: 'Branded Residences / Extended Stays / Serviced Apartments',
            value: 1
        },        
        {
            label: 'Third Party Management Company (White Label)',
            value: 1
        },        
        {
            label: 'Aviation',
            value: 1
        },        
    ]
    const SENIORITY_DATA = [
        {
            label: 'Director / VP / Head / Principal',
            value: 31
        },
        {
            label: 'Manager',
            value: 28
        },
        {
            label: 'C-Level',
            value: 26
        },
        {
            label: 'Board Level / Owner / Partner / Chair / Founder',
            value: 14
        },
    ]

    return (
        <section className="block bg-secondary">
            <div className="container center">
                <Fade>
                    <p className="fs-1 fw-600 lh-1 caps">Who Attends FHS Africa</p>
                </Fade>
            </div>

            <div className="container maxw-50">
                <section>
                    <p className="fs-4 fw-500 pb-sm">By Primary Business:</p>
                    <BarChart>
                        {
                            INDUSTRY_DATA &&
                            INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 1, max: 22 }} />)
                        }
                    </BarChart>
                </section>
            </div>

            <div className="container pt-sm maxw-50">
                <section>
                    <p className="fs-4 fw-500 pb-sm">By Seniority:</p>
                    <BarChart>
                        {
                            SENIORITY_DATA &&
                            SENIORITY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 14, max: 31 }} />)
                        }
                    </BarChart>
                </section>
            </div>

                
            <div className="container pt-sm maxw-50">
                <p className="fs-4 fw-500 pb-sm">By Geography:</p>
                <GlobalMap>
                    <Region label={'Middle East'} value={14} unit={'%'} position={{ x: '58%', y: '35%' }} delay={0.3}/>
                    <Region label={'Europe'} value={15} unit={'%'} position={{ x: '40%', y: '28%' }} delay={0.1}/>
                    <Region label={'Asia'} value={1} unit={'%'} position={{ x: '80%', y: '50%' }} delay={0.5}/>
                    <Region label={'Americas'} value={2} unit={'%'} position={{ x: '20%', y: '50%' }} delay={0.2}/>
                    <Region label={'Africa'} value={68} unit={'%'} position={{ x: '45%', y: '60%' }} delay={0.4} />
                </GlobalMap>
            </div>
        </section>
    )
}


// END CUSTOM MODULES ---------------------





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