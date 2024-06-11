import { useState, useRef, useEffect } from 'react'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"
import { Client } from "@hubspot/api-client"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'

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



export default function PostEvent ({ hubspotData, cmsEntryData }) {

    const [ allowed, setAllowed ] = useState( false )
    const [ message, setMessage ] = useState( '' )
    const userEmailRef = useRef(null)
    const allEmails = ['simon@onedotsix.com', 'muhammad.ahmed@thebench.com']
    

    useEffect( ()=> {
        if ( localStorage.getItem("fhsSaPostEvent") === "true" ) {
            setAllowed( true )
        }
    },[])


    // extract all emails for a given contact

    const getEmailsFromIdentityProfiles = ( identitiesData ) => {
        if ( !identitiesData ) return

        const emails = []

        identitiesData.map( profile => {
            profile.identities.map ( identity => {
                if ( identity.type === 'EMAIL' ) emails.push(identity.value)
            })
        })

        return emails
    }


    // compile list of all emails

    hubspotData.map( contact => allEmails.push(...getEmailsFromIdentityProfiles(contact['identity-profiles'])) )


    // form handler

    function checkEmail (e) {
        e.preventDefault()

        if ( allEmails.includes(userEmailRef.current.value) ) {
            setAllowed(true)
            localStorage.setItem("fhsSaPostEvent", "true")
        } else if ( !userEmailRef.current.value ) {
            setMessage("<p>Please enter a valid email</p>")
        } else {
            setMessage("<p><span className='fw-500'>Email not found!</span> Apply <a href='#'>here</a> to gain access.</p>")
        }
    }




    // console.log('cmsEntryData:',cmsEntryData)
    // console.log('hubspotData:',hubspotData)


    return (
        <>
            <ThemeBg />
            <Header compact shim />

            {
                allowed ? 
                    
                    handleContentBlocks( cmsEntryData.fhisContentBlocks, null, null, 'sa' )
                   
                :
                    <>
                        <section className='block'>
                            <div className="container">
                                <p className='fs-2 fw-600'>FHS Saudi Arabia 2024 - Resources</p>
                            </div>
                            <div className="container">
                                <p>Please enter your email below to access.</p>
                                <form className='form mt-xs columns-1 gap-xs maxw-30' onSubmit={checkEmail}>
                                    <input ref={userEmailRef} type="email" required/>
                                    <div>
                                        <button className='button fs-6' type="submit">Submit</button>
                                    </div>
                                </form>
                                {
                                    message &&
                                    <div className='formatted mt-xs'>{ parse(message) }</div>
                                }
                            </div>
                        </section>
                    </>
                    
            }
            

            <Footer />
            <LenisScroller />
        </>
    )

}

PostEvent.theme = 'sa-2024'




// https://web.postman.co/workspace/My-Workspace~9945b9ad-25f6-48ea-8a6e-fcb4e2b1900e/request/19835058-f2b4d8a1-dccd-40a2-8840-82349f761576

// https://api.hubapi.com/contacts/v1/lists/737/contacts/all



export async function getStaticProps() {

    
    const hubspotClient = new Client({ accessToken: 'pat-na1-4b3f96a9-f593-4d17-b3bf-ecfce1f5fe82' })  
    const hubspotContactData = await hubspotClient.apiRequest({
        path: '/contacts/v1/lists/737/contacts/all',
    })
    const contactsData = await hubspotContactData.json()


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
			hubspotData: contactsData.contacts,
            cmsEntryData: cmsEntryData.data.entry
		}
	}
}