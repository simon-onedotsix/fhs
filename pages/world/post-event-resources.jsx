import { useState, useRef, useEffect } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"

import parse from 'html-react-parser'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import handleSeomaticMeta from "../../lib/seomatic"
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'


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
    QueryPageHeader,
    QueryCards,
    QueryOffsetCallout,
    QueryDividers,
    QuerySEO,
    QueryPartners,
    QueryTestimonials,
    QueryCustomSliderVideo,
    QueryCustomQuoteImageGrid
} from "../../graphql/queries"

import CSS from '../../fuselage/theme/2026/world/css/post-event-resources.module.css'



export default function Page ({ seomatic, entry }) {

    const [ allowed, setAllowed ] = useState( true )
    const [ showForm, setShowForm ] = useState( false )
    const [ message, setMessage ] = useState( '' )
    const emailInputRef = useRef()


    useEffect( ()=> {
        if ( !localStorage.getItem("worldPostEvent") === "true" ) {
            setAllowed( true )
        } else {
            setAllowed( false )
        }
    },[])


    function formHandler ( e ) {
        e.preventDefault()

        // SET HUBSPOT LIST ID BELOW
        const reqBody = {
            email: emailInputRef.current.value,
            hubspotListId: '3804'
        }

        fetch('/api/delegate-auth', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( (data) => {
            console.log(data)
            if ( data.isOnList === true ) {
                setAllowed( true )
                localStorage.setItem("worldPostEvent", "true")
            } else {
                setAllowed( false )
                setMessage("<p><span className='fw-500'>Email not found!</span> See below to register for access.</p>")
            }
        })
    }

    return (
        <div style={{ width: `100%`, overflow: `hidden` }}>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
            </Head>

            <EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            


            <div className={`${CSS.overlay} ${ !allowed && CSS.active }`}>

                <section className={CSS.container}>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <div className="container center">
                                <p className='fs-2 fw-600 lh-1 c-primary'>FHS World 2026 - Resources</p>
                            </div>
                            <div className="container center">
                                <p>Please enter your email below to access.</p>
                                <form className='form mt-xs columns-1 gap-xs' onSubmit={formHandler}>
                                    <input ref={emailInputRef} className='maxw-25 mx-auto' type="email" required/>
                                    <div>
                                        <button className='button fs-6' type="submit">Submit</button>
                                    </div>
                                </form>
                                {
                                    message &&
                                    <div className='formatted mt-xs'>{ parse(message) }</div>
                                }
                            </div>
                            <div className="container center">
                                <p className='fw-500 c-primary'>Didn&apos;t attend FHS World this year? <br/>Click <span className='underline' onClick={() => setShowForm(true)}>here</span> to register for access.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <div className={`${CSS.formOverlay} ${ showForm && CSS.active }`}>

                <section className={`${CSS.container} bg-white`}>
                    <button className={CSS.closeButton} onClick={() => setShowForm(false)}>&times;</button>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <p className='mb-sm maxw-40'>Please complete the form below to register and access content and insights from FHS World 2026.</p>
                            <HubspotForm portalId={'14527187'} formId={'4ca2e4dd-9485-47b8-998d-6725e4b5ffea'} />
                        </div>
                    </div>
                </section>
                
            </div>

            {handleContentBlocks(entry.fhisContentBlocks)}




            
            <Footer/>

        </div>
    )
}
Page.theme = 'world-2024'


export async function getStaticProps({ preview, previewData }) {

    const entryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "287751") {
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

    const page = entryData

    return { props: 
        { 
            entry: page.data.entry, 
            seomatic: page.data.entry.seomatic
        }
    }
}