import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Head from "next/head"

import { Header } from '../fuselage/global/header/header'
import { PassBox } from '../fuselage/components/pass-box/pass-box'

const TICKET_DATA = [
    'February',
    'April',
    'May - June',
    'July',
    'Onsite',
    'August',
    'September'
]

export default function Register ({ pageData, bizzaboPassData }) {

    const entry = pageData.data.entry

    // console.log('pageData:', entry)
    // console.log('bizzaboPassData:', bizzaboPassData.content)

    let metaTitle = JSON.parse(entry.seomatic.metaTitleContainer)
    let metaTags = JSON.parse(entry.seomatic.metaTagContainer)  

    return (
        <>
            <Head>
                <title>{metaTitle.title.title}</title>

                <meta name="description" content={metaTags.description.content} />
                <meta name="referrer" content={metaTags.referrer.content} />
                {/* <meta name="robots" content={metaTags.robots.content} /> */}
                <meta content={metaTags['og:locale'].content} property="og:locale" />
                <meta content={metaTags['og:site_name'].content} property="og:site_name" />
                <meta content={metaTags['og:type'].content} property="og:type" />
                <meta content={metaTags['og:url'].content} property="og:url" />
                <meta content={metaTags['og:title'].content} property="og:title" />
                <meta content={metaTags['og:description'].content} property="og:description" />
                <meta content={metaTags['og:image'].content} property="og:image"></meta>  
            </Head>

            <Header compact shim />

            <section className="block"> 

                <div className="container">
                    <p className="fs-0 fw-600 c-primary">Purchase Pass</p>
                </div>

                {
                    entry.bodyHeader ?
                    <div className="container">
                        <div className=" maxw-50 formatted" dangerouslySetInnerHTML={{__html: entry.bodyHeader }} />
                    </div>
                    : null
                }

                {/* main passes */}

                <div className="container columns-3 gap-md">
                    {
                        bizzaboPassData.content.map( ticket => {
                            if ( ticket.price > 0 && TICKET_DATA.includes(ticket.name) ) {
                                return (
                                    <PassBox
                                        key={ticket.id}
                                        title={ticket.name}
                                        availableFrom={ticket.availabilityStartTimestamp}
                                        availableTo={ticket.availabilityEndTimestamp}
                                        quantity={ticket.quantity}
                                        currency={ticket.currencyCode}
                                        price={ticket.price}
                                        description={null}
                                        buttonLink={'/register'}
                                    />
                                )
                            }
                        })
                    }
                </div>


                {/* special passes */}

                <div className="container bt-1 bc-grey-20 pt-md">
                    <p className="fs-0 fw-600 c-primary">Other Rates</p>
                </div>

                <div className="container columns-3 gap-md mt">
                    <PassBox
                        title={`GRIF Day Pass`}
                        currency={`USD`}
                        price={130000}
                        description={'Allows access to the GRIF sessions on the first day of the conference.'}
                        buttonLink={'/register?promo=GRIFFHS'}
                    />
                    <PassBox
                        title={`Investor`}
                        currency={`USD`}
                        price={130000}
                        description={'Available after profile review by the organising team.'}
                        buttonLink={'/investor-registration'}
                    />
                    <PassBox
                        title={`Student`}
                        currency={`USD`}
                        price={75000}
                        description={'Exclusively for students pursuing an undergraduate programme within hospitality or related fields. Students need to share their student ID at hello@thebench.com to avail the student rate.'}
                        buttonLink={'mailto:hello@thebench.com'}
                    />
                </div>

                <div className="container">
                    <p className="fw-400">Spaces are limited and discount approvals are at the discretion of the organisers.</p>
                </div>



                {
                    entry.bodyFooter ?
                    <div className="container">
                        <div className=" maxw-50 formatted" dangerouslySetInnerHTML={{__html: entry.bodyFooter }} />
                    </div>
                    : null
                }

            </section>

        </>
    )
}




export async function getStaticProps({ params, preview, previewData }) {

    const cmsEntryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
                entry(site: "${process.env.SITE_HANDLE}", id: "10624") {
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
                                passName
                            }
                        }
                        bodyFooter
                    }
                }
			}
        `
    })
    const pageData = cmsEntryData


    const res = await fetch(`https://api.bizzabo.com/api/registrationTypes?eventId=${process.env.BIZZABO_EVENT_ID}`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
    const bizzaboPassData = await res.json()
  

    return { props: { bizzaboPassData, pageData } }
}