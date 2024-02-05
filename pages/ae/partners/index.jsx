import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/global-ae/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'
import { ThemeBg } from '../../../fuselage/theme/2023/ae/theme-bg'

import { Button } from '../../../fuselage/components/button/button'
import { Floaters, Floater } from '../../../fuselage/blocks/floater/floater'

import handleContentBlocks from "../../../lib/content-blocks"
import handleSeomaticMeta from "../../../lib/seomatic"

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
	QueryCards,
	QueryPartners,
	QueryPartnerGroups
} from "../../../graphql/queries"

import { PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'
import { Quote, QuoteGrid } from '../../../fuselage/theme/2023/ae/components/quote/quote'




function Partners({ seomatic, contentBlocks, partnerData }) {


	// console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)


	// programatically build array of unique types pulled from exhibitor data

	const allTypesArray = []
	partnerData.exhibitors.forEach( obj => {
		if ( obj.type && obj.typeLabel ) allTypesArray.push({id: obj.typeLabel.id, name: obj.type, size: ''})
	})
	console.log('types:', _.uniqBy(allTypesArray, obj => obj.id))

	const typesArray = _.uniqBy(allTypesArray, obj => obj.id)

	

	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) }  
            </Head>

			<Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

			{/* <ThemeBg /> */}


			{/* INTRO */}

			<section className="block">
				<div className="container center formatted">
					<p className='fs-0 fw-600'>Become a sponsor!</p>
				</div>

				<Floaters theme={``} flipped={true}>
					
						<Floater hero={{ url: '/assets/img/ae/2023/partners/exhibition-01.jpg', width: 1000, height: 600 }}>
							<p className='fs-6 mt-xs'>FHS World 2024 is the ideal platform to showcase your brand&apos;s leadership and expertise, connect with industry thought leaders and investment decision-makers, and shape the future of hospitality investment. </p>
							<p className='fs-6'>FHS provides a platform for nurturing relationships, igniting innovation, and creating lasting and meaningful experiences.</p>
						</Floater>
						
						<Floater hero={{ url: '/assets/img/ae/2023/partners/exhibition-02.jpg', width: 1000, height: 600 }}>
							<p className='fs-6'>By sponsoring FHS, you have the opportunity to be part of a dynamic platform that not only promotes your brand but also contributes to the collective shaping of the future of the hospitality industry. As a sponsor, you get access to:</p>
							
							<ul className='fs-6 fw-600'>
								<li>Exhibition Floor Space</li>
								<li>Speaking Slots on the FHS Programme</li>
								<li>Marketing and Branding Opportunities (Digital & On-site)</li>
								<li>Attendee Lists</li>
								<li>Investor Meetings</li>
								<li>Closed Door Workshops and Roundtable</li>
							</ul>
						</Floater>
				</Floaters>

				<div className="container center">
					<Button href={'/ae/get-in-touch'} decal={`fs-5 fw-600`}>Get in touch</Button>&emsp;
					<Button href={'/ae/floor-plan'} decal={`fs-5 fw-600`}>View Floor Plan</Button>
				</div>
			</section>



			{/* TESTIMONIALS */}

			<QuoteGrid>
				<Quote 
					quote={`“Great to have a balance between connecting with quality industry people and keeping up with what the industry is doing as a whole.”`}
					name={`Sandeep Walia`}
					title={`Chief Operations Officer, Middle East`}
					company={`Marriott International`}
				/>
				<Quote 
					quote={`“FHS gives us the opportunity to network with owners, with investors, and with colleagues in the industry. It's always excellent to understand what's next and how we can collaborate to achieve that.”`}
					name={`Carlos Khneisser`}
					title={`Vice President Development Middle East & Africa`}
					company={`Hilton`}
				/>
				<Quote 
					quote={`“A top notch event and a great opportunity to 'lead the change!' The only way to make a change in the hospitality sector is to shake it from within!”`}
					name={`Najee Syriani`}
					title={`CVP Projects`}
					company={`Rotana Hotels`}
				/>
				<Quote 
					quote={`“The Future Hospitality Summit by The Bench was a great event to speak with industry leaders from the region and learn from those that have witnessed hospitality develop over centuries.”`}
					name={`Fritz Dickamp`}
					title={`Managing Director`}
					company={`Studio 49`}
				/>
			</QuoteGrid>


			{/* PARTNERS */}

			<section className='block'>

				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2024 Sponsors &amp; Partners</p>
				</div>

				<div className='container columns-1 gap-md center pt-md'>
					{
						partnerData &&
						partnerData.event.exhibitorsTypes.map( type => {

							const group = partnerData.exhibitors.filter( element => {
								if (element.typeLabel && element.typeLabel.id === type.id ) return element
							})

							if ( group.length > 0 ) {

								let category = typesArray.find( obj => obj.id === type.id )

								return (
									<div key={type.id}>
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy(group, 'name').map(partner => (
													<a key={partner.id} href={`/ae/partners-2024/${partner.id}`}>
														<PartnerLogo 
															hero={{ url: partner.logoUrl }} 
															size={ category && category.size }
														/>
													</a>
												))
											}
										</PartnerLogoGrid>
									</div>
								)
							}
							
						})
					}
				</div>
				
			</section>





			{/* { handleContentBlocks( contentBlocks, null, partnerData, '/ae' ) } */}


			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'ae-2023'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: 11544) {
					title
					... on ${process.env.SITE_HANDLE_AE}Partners_${process.env.SITE_HANDLE_AE}Partners_Entry {
						id
						title
						slug
						${process.env.SITE_HANDLE}ContentBlocks {
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryCards}
							${QueryProfileCarousel}
							${QueryForm}
							${QueryPartnerGroups}
						}
					}
					${QuerySEO}
				}
			}
        `
    })


	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						event(id: "${process.env.SWAPCARD_EVENT_ID_AE}") {
							exhibitorsTypes {
								name
								id
								position
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AE}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							websiteUrl
							description
							type
							typeLabel {
								id
								name
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AE,
					"page": 1
				}
			})
		}
	)

	// console.log(swapcardData)
	
	const partnerData =  await swapcardData.json()
	
	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			contentBlocks: cmsData.data.entry.fhisContentBlocks,
			partnerData: partnerData.data
		}
	}
}

export default Partners


