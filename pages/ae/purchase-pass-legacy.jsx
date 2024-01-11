import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import Head from "next/head"

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'
import { PassBox } from '../../fuselage/components/pass-box/pass-box'

import handleSeomaticMeta from '../../lib/seomatic'

const TICKET_DATA = [
    'January - February (Standard Pass)',
    'January - February (Plus Pass)',
    'January - February (Premium Pass)'
]

export default function Register ({ entry, passes, bizzaboPassData }) {

    // console.log('pageData:', entry)
    // console.log('passes:', passes)
    console.log('bizzaboPassData:', bizzaboPassData)

    return (
        <>
            <Head>
                {/* { handleSeomaticMeta( seomatic ) }  */}
            </Head>

            <ThemeBg />

			<Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

            <section className="block bg-theme"> 

                <div className="container">
                    <p className="fs-0 fw-600">Purchase Pass</p>
                </div>

                {
                    entry && entry.bodyHeader ?
                    <div className="container">
                        <div className=" maxw-50 formatted" dangerouslySetInnerHTML={{__html: entry.bodyHeader }} />
                    </div>
                    : null
                }




                {/* main passes */}

                <div className="container columns-3 gap-sm">
                    { 
                        passes &&
                        passes.map( pass => {
                            let bizzPass = bizzaboPassData.find( bzPass => bzPass.name === pass.ticketName )
                
                            if ( bizzPass ) {
                                console.log(`CMS pass: ${pass.passName} US$${bizzPass.price / 100}`)
                                return (
                                    <PassBox
                                        key={pass.id}
                                        title={ pass.passName ? pass.passName : bizzPass.name }
                                        availableFrom={bizzPass.availabilityStartTimestamp}
                                        availableTo={bizzPass.availabilityEndTimestamp}
                                        hideAvailability
                                        quantity={bizzPass.quantity}
                                        currency={bizzPass.currencyCode}
                                        price={bizzPass.price}
                                        description={ pass.description ? pass.description : bizzPass.description }
                                        buttonLink={'/ae/register'}
                                    />
                                )
                            }
                
                        })
                    }
                    <PassBox
                        key={945867}
                        title={'Plus'}
                        availableFrom={'2023-07-12 13:36:00'}
                        availableTo={'2023-07-12 13:36:00'}
                        hideAvailability
                        quantity={0}
                        currency={'USD'}
                        price={330000}
                        description={ '<p>*expires on September 25th</p><p><strong><span class="c-primary">Includes:</span></strong></p><ul><li>Full Event Access</li><li>Networking App</li><li>Post Event Resources</li><li>2 Nights Accommodation at <strong>DoubleTree by Hilton</strong></li></ul>' }
                        buttonLink={'/ae/register'}
                    />
                    <PassBox
                        key={392847}
                        title={'Premium'}
                        availableFrom={'2023-07-12 13:36:00'}
                        availableTo={'2023-07-12 13:36:00'}
                        hideAvailability
                        quantity={0}
                        currency={'USD'}
                        price={340000}
                        description={ '<p>*expires on September 25th</p><p><strong><span class="c-primary">Includes:</span></strong></p><ul><li>Full Event Access</li><li>Networking App</li><li>Post Event Resources</li><li>2 Nights Accommodation at <strong>Hilton Abu Dhabi Yas Island</strong></li><li>Complimentary Theme Park Access (One from Ferrari World Abu Dhabi, Warner Bros World Abu Dhabi, Yas Waterworld Abu Dhabi)</li></ul>' }
                        buttonLink={'/ae/register'}
                    />
                </div>



                {
                    entry && entry.bodyFooter ?
                    <div className="container">
                        <div className=" maxw-50 formatted" dangerouslySetInnerHTML={{__html: entry.bodyFooter }} />
                    </div>
                    : null
                }

            </section>

            <Footer theme={{ footerBg: 'bg-white-90' }} />

        </>
    )
}
Register.theme = 'ae-2023'



export async function getStaticProps({ params, preview, previewData }) {

    const cmsEntryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "10624") {
                    id
                    title
                    slug
                    seomatic(asArray: true) {
                        metaTitleContainer
                        metaTagContainer
                    }
                    ... on fhisAePurchasePass_fhisAePurchasePass_Entry {
                        id
                        bodyHeader
                        bizzaboPasses {
                            ... on bizzaboPasses_BlockType {
                                id
                                ticketName
                                passName
                                description
                            }
                        }
                        bodyFooter
                    }
                }
			}
        `
    })
    const pageData = cmsEntryData


    const res = await fetch(`https://api.bizzabo.com/api/registrationTypes?eventId=${process.env.BIZZABO_EVENT_ID_AE}`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
    const bizzaboPassData = await res.json()
  

    return { 
        props: { 
            bizzaboPassData: bizzaboPassData.content,
            passes: pageData.data.entry.bizzaboPasses,
            entry: pageData.data.entry
        }
    }
}