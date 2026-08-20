import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import Script from "next/script"

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
	BizzaboPartners
} from "../../graphql/queries"

import handleContentBlocks from "../../lib/content-blocks"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"


import handleSeomaticMeta from '../../lib/seomatic'



// bypass live data ----------------------------------------------
const DEMO_CONTENT_BLOCKS = [
    {
        "__typename": "fhisContentBlocks_text_BlockType",
        "id": "307297",
        "theme": "default",
        "columns": "1",
        "maxWidth": "default",
        "center": false,
        "anchorId": null,
        "textBlocks": []
    },
    {
        "__typename": "fhisContentBlocks_text_BlockType",
        "id": "154895",
        "theme": "default",
        "columns": "1",
        "maxWidth": "default",
        "center": false,
        "anchorId": null,
        "textBlocks": [
            {
                "__typename": "textBlocks_BlockType",
                "id": "154896",
                "body": "<h1>Secure Your Pass</h1>\r\n<h6><strong>Note:</strong> FHS events are hospitality investment-focused; if you are a manufacturer of hotel products, we may reject your delegate ticket upon registration. In case of any queries, please reach out to <a href=\"mailto:hello@thebench.com\" target=\"_blank\">hello@thebench.com</a>.<br></h6>\r\n<p><br>Discounted rates below are exclusively available for hotel operators, owners, developers, investors/banks, consultants, architects, lawyers, Govt. officials. If your organisation does not fall within these categories, please email <a href=\"mailto:hello@thebench.com\">hello@thebench.com</a> to register.</p>"
            }
        ]
    },
    {
        "__typename": "fhisContentBlocks_passes_BlockType",
        "id": "154897",
        "theme": "default",
        "passes": [
            {
                "__typename": "passes_sectionHeading_BlockType",
                "id": "162906",
                "heading": "Regular Passes"
            },
            {
                "__typename": "passes_passNew_BlockType",
                "id": "287631",
                "passTitle": "Standard Pass",
                "passFlash": null,
                "passCallout": null,
                "passPriceIncreases": true,
                "passDescription": "<p>Includes access to:</p>\n<ul><li>All keynote presentations, panel discussions and breakout sessions</li><li>Exhibition hall and sponsor booths</li><li>AI-powered attendee matching app for pre-scheduled meetings</li><li>Networking receptions and daily networking lunches</li><li>AI-generated session summaries with key takeaways and highlights</li><li>Post-event session recordings and presentation downloads</li><li>Site tours and local experiences (Subject to Availability)</li><li>Industry reports and investment insights from partners</li></ul>",
                "passCurrency": "US$",
                "passTaxRate": null,
                "passPriceBands": [
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-09-29T00:00:00+01:00",
                        "startDate": "2025-10-28T00:00:00+00:00",
                        "value": "2000"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-03-01T00:00:00+00:00",
                        "startDate": "2026-01-01T00:00:00+00:00",
                        "value": "2200"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-06-01T00:00:00+01:00",
                        "startDate": "2026-03-01T00:00:00+00:00",
                        "value": "2400"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-07-01T00:00:00+01:00",
                        "startDate": "2026-06-01T00:00:00+01:00",
                        "value": "2800"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-08-01T00:00:00+01:00",
                        "startDate": "2026-07-01T00:00:00+01:00",
                        "value": "3200"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-09-01T00:00:00+01:00",
                        "startDate": "2026-08-01T00:00:00+01:00",
                        "value": "3500"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "0202-10-01T00:00:00-00:01",
                        "startDate": "0202-09-01T00:00:00-00:01",
                        "value": "3800"
                    }
                ],
                "passQuantityRemaining": "24",
                "passButtonLabel": "Register Here",
                "passButtonUrl": "https://www.eventbooking.uk.com/FHS-2026/",
                "passSoldOut": false
            },
            {
                "__typename": "passes_passNew_BlockType",
                "id": "207682",
                "passTitle": "Premium Pass",
                "passFlash": "Best Value!",
                "passCallout": "Includes All 3 Days Access",
                "passPriceIncreases": true,
                "passDescription": "<p>Includes access to:</p>\n<ul><li><strong>FHS Living 2026 (Stage Sessions + Networking Experiences)</strong></li><li>All FHS Conference Tracks</li><li>Exhibition</li><li>Experiences (Subject to Availability)</li><li>Networking Receptions</li><li>Panel Discussions &amp; Stage Sessions Summaries</li></ul>",
                "passCurrency": "US$",
                "passTaxRate": null,
                "passPriceBands": [
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-03-01T00:00:00+00:00",
                        "startDate": "2026-01-01T00:00:00+00:00",
                        "value": "2700"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-06-01T00:00:00+01:00",
                        "startDate": "2026-03-01T00:00:00+00:00",
                        "value": "2900"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-07-01T00:00:00+01:00",
                        "startDate": "2026-06-01T00:00:00+01:00",
                        "value": "3300"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-08-01T00:00:00+01:00",
                        "startDate": "2026-07-01T00:00:00+01:00",
                        "value": "3700"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-09-01T00:00:00+01:00",
                        "startDate": "2026-08-01T00:00:00+01:00",
                        "value": "4000"
                    },
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-10-01T00:00:00+01:00",
                        "startDate": "2026-09-01T00:00:00+01:00",
                        "value": "4300"
                    }
                ],
                "passQuantityRemaining": "19",
                "passButtonLabel": "Purchase Pass",
                "passButtonUrl": "https://www.eventbooking.uk.com/FHS-2026/premium.php",
                "passSoldOut": false
            },
            {
                "__typename": "passes_passNew_BlockType",
                "id": "207683",
                "passTitle": "FHS Living Pass",
                "passFlash": null,
                "passCallout": null,
                "passPriceIncreases": true,
                "passDescription": "<p>Includes <strong>single-day access</strong> to:</p>\n<ul><li><strong>FHS Living - 01 October, 2026</strong></li><li>All FHS conference tracks (Single Day)</li><li>Exhibition</li></ul>",
                "passCurrency": "US$",
                "passTaxRate": null,
                "passPriceBands": [
                    {
                        "__typename": "passPriceBands_TableRow",
                        "endDate": "2026-10-01T00:00:00+01:00",
                        "startDate": "2026-01-01T00:00:00+00:00",
                        "value": "1500"
                    }
                ],
                "passQuantityRemaining": "20",
                "passButtonLabel": "Purchase Pass",
                "passButtonUrl": "https://www.eventbooking.uk.com/FHS-2026/branded.php",
                "passSoldOut": false
            },
            {
                "__typename": "passes_sectionHeading_BlockType",
                "id": "241834",
                "heading": "Special Passes"
            },
            {
                "__typename": "passes_specialPass_BlockType",
                "id": "281648",
                "specialPassTitle": "Group Pass Discounts",
                "specialPassDescription": "<p>2 passes - 10% OFF</p>\n<p>3 or more passes - 15% OFF</p>",
                "specialPassValue": null,
                "specialPassAvailableFrom": null,
                "specialPassExpires": null,
                "specialPassButtonLabel": "Contact Us",
                "specialPassHyperlink": "mailto:hello@thebench.com"
            },
            {
                "__typename": "passes_specialPass_BlockType",
                "id": "241835",
                "specialPassTitle": "Multi-Event Pass Discounts",
                "specialPassDescription": "<p><strong>2 Events:</strong> FHS World + one additional event, get 10% off.</p>\n<p><strong>3 Events:</strong> Any 3 events from FHS World, Saudi Arabia, Africa, or Egypt, save 15% on all passes.</p>\n<p><strong>4 Events: </strong>FHS World, Saudi Arabia, Africa and Egypt, save 20% on all passes<br /></p>\n<p><a href=\"https://futurehospitality.com/sa/\">FHS Saudi Arabia</a> | <a href=\"https://futurehospitality.com/africa/\">FHS Africa</a> | <a href=\"https://futurehospitality.com/egypt\" target=\"_blank\" rel=\"noreferrer noopener\">FHS Egypt</a></p>",
                "specialPassValue": null,
                "specialPassAvailableFrom": null,
                "specialPassExpires": null,
                "specialPassButtonLabel": "Contact Us",
                "specialPassHyperlink": "mailto:hello@thebench.com"
            },
            {
                "__typename": "passes_specialPass_BlockType",
                "id": "308033",
                "specialPassTitle": "Women in Hospitality Pass",
                "specialPassDescription": "<p><strong>Women working in hospitality </strong>can benefit from a <strong>35% discount</strong> on their passes for FHS World as part of our effort to champion gender diversity in the industry.</p>",
                "specialPassValue": null,
                "specialPassAvailableFrom": null,
                "specialPassExpires": null,
                "specialPassButtonLabel": "Apply here",
                "specialPassHyperlink": "https://futurehospitality.com/world/fhswomenpower"
            },
            {
                "__typename": "passes_specialPass_BlockType",
                "id": "296281",
                "specialPassTitle": "Investors Pass",
                "specialPassDescription": "<p>Exclusive Investor benefits at FHS World include:<br /></p>\n<ul><li>Access to the Investor Lounge - an invitation-only networking zone for investors and developers</li><li>Pre-arranged 1:1 Meetings - our team will help arrange targeted meetings based on your investment interests, connecting you with the types of delegates you’re looking to meet</li><li>VIP invitation to the curated presentation of selected investment projects</li><li>Exclusive VIP access to closed-door investor events hosted globally within 12 months of your registration (subject to availability).</li></ul><p>Please fill out below form so we can assess your eligibility as an Investor for the FHS World Investor Pass. The organisers possess the authority to exercise their discretion in granting access.</p>",
                "specialPassValue": null,
                "specialPassAvailableFrom": null,
                "specialPassExpires": null,
                "specialPassButtonLabel": "Apply Here",
                "specialPassHyperlink": "https://www.eventbooking.uk.com/FHS-2026/investor.php"
            },
            {
                "__typename": "passes_specialPass_BlockType",
                "id": "278195",
                "specialPassTitle": "FHS Club Members Pricing",
                "specialPassDescription": "<p>Up to 10% discount on standard tickets for yourself and your colleagues. <a href=\"https://futurehospitality.com/fhs-club\">Read more about FHS Club</a></p>",
                "specialPassValue": null,
                "specialPassAvailableFrom": null,
                "specialPassExpires": null,
                "specialPassButtonLabel": "Contact Us",
                "specialPassHyperlink": "mailto:muhammad.ahmed@thebench.com"
            }
        ]
    }
]



function PurchasePass({ seomatic, entry }) {

	console.log('entry:', entry )

	return (
		<>

				<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{handleSeomaticMeta(seomatic)} 
            </Head>

			<EventsBar site={'/world'} />
			<Header
				site={`/world`}
				handle={`World`}
				event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>

			<ThemeBg />

			{/* { handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' ) } */}
			{ handleContentBlocks( DEMO_CONTENT_BLOCKS, null, null, 'ae' ) }

			<Footer />
			<LenisScroller />

		</>
	)
}

PurchasePass.theme = 'world-2024'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: "10624") {
					... on ${process.env.SITE_HANDLE_AE}PurchasePass_${process.env.SITE_HANDLE_AE}PurchasePass_Entry {
						id
						slug
						title
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
			seomatic: cmsData.data.entry.seomatic,
			entry: cmsData.data.entry,
		}
	}
}

export default PurchasePass


