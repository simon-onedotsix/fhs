import { useState, useRef, useEffect } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"
import { Client } from "@hubspot/api-client"

import Script from "next/script"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'
import handleContentBlocks from "../../lib/content-blocks-sa"

import parse from 'html-react-parser'

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

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import CSS from './post-event-resources.module.css'



export default function PostEvent ({ cmsEntryData }) {

    const [ allowed, setAllowed ] = useState( false )
    const [ showForm, setShowForm ] = useState( false )
    const [ message, setMessage ] = useState( '' )
    const emailInputRef = useRef()


    useEffect( ()=> {
        if ( localStorage.getItem("fhsSaPostEvent2025") === "true" ) {
            setAllowed( true )
        } else {
            setAllowed( false )
        }
    },[])


    function formHandler ( e ) {
        e.preventDefault()

        const reqBody = { email: emailInputRef.current.value }

        fetch('/api/sa/delegate-auth', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( (data) => {
            console.log(data)
            if ( data.authorised === true ) {
                setAllowed( true )
                localStorage.setItem("fhsSaPostEvent2025", "true")
            } else {
                setAllowed( false )
                setMessage("<p><span className='fw-500'>Email not found!</span> See below to register for access.</p>")
            }
        })
    }




    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Header compact shim />

            
            <div className={`${CSS.overlay} ${ !allowed && CSS.active }`}>

                <section className={CSS.container}>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <div className="container center">
                                <p className='fs-2 fw-600 lh-1 c-primary'>FHS Saudi Arabia 2025 - Resources</p>
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
                                <p className='fw-500 c-primary'>Didn&apos;t attend FHS Saudi Arabia this year? <br/>Click <span className='underline' onClick={() => setShowForm(true)}>here</span> to register for access.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <div className={`${CSS.formOverlay} ${ showForm && CSS.active }`}>

                <section className={CSS.container}>
                    <button className={CSS.closeButton} onClick={() => setShowForm(false)}>&times;</button>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <p className='mb-sm maxw-30'>Please complete the form below to register and access content and insights from FHS Saudi Arabia 2025.</p>
                            <HubspotForm portalId={'14527187'} formId={'747f6371-f812-4f58-8fc6-a5e6d1798537'} />
                        </div>
                    </div>
                </section>
                
            </div>
                    
           
            { handleContentBlocks( cmsEntryData.fhisContentBlocks, null, null, 'sa' ) }
            

            <Footer />
            {/* <LenisScroller /> */}
        </>
    )

}

PostEvent.theme = 'sa-2025'





export async function getStaticProps() {

    const cmsEntryData = await craftApolloClient().query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE_SA}", id: "112156") {
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
            cmsEntryData: cmsEntryData.data.entry
		}
	}
}