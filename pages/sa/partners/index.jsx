import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Script from "next/script"
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import useCustomMediaQuery from "../../../hooks/useCustomMediaQuery"

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_SA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'


import { Quote, QuoteGrid } from '../../../fuselage/theme/2024/sa/components/quote/quote'
import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'
import { VideoTestimonialCard } from '../video-testimonials'
import { SpeakerCard } from "../../../fuselage/components/speaker-card/speaker-card"
import { CTAButton } from '../../../fuselage/theme/2025/sa/components/cta-button/cta-button'
import { Fade, Pop } from '../../../fuselage/animation/animation'

import { VideoSection, Section } from '../../../fuselage/theme/2026/sa/blocks/section'
import { ThemeGraphic } from '../../../fuselage/theme/2026/sa/theme/theme-graphic'


const AMBASSADOR_DATA = [
	{
        url: `/sa/speakers/profile/mohammed-al-nashwan`,
        photoUrl: 'https://static.swapcard.com/public/images/301ecbac6ae64d1aa72e7f8626b4694a.jpeg',
        fullName: 'Mohammed Al Nashwan',
        jobTitle: 'Chief Executive Officer',
        company: 'Hartt Hospitality Consulting Co.',
	},
    {
        url: `/sa/speakers/profile/turab-saleem`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Saleem_Turab-Final-Photo.jpg',
        fullName: 'Turab Saleem',
        jobTitle: 'Chief Executive Officer',
        company: 'Perfetti Hospitality',
    },
	{
        url: `/sa/speakers/profile/fahad-al-fawaz-2`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Fahad-Al-Fawaz-1.jpg',
        fullName: 'Fahad Al Fawaz',
        jobTitle: 'Board Director & Board Committee Member',
        company: 'Tabuk Investment Co. & Jenan Real Estate Co. & Gulf Liting Financing Co',
    },
    {
        url: `/sa/speakers/profile/haifaa-alzahrani`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/IMG_3406.jpeg',
        fullName: 'Haifaa Al Zahrani',
        jobTitle: 'Passenger Experience and Accreditation Director',
        company: 'Jeddah Airports',
    },
	{
        url: `/sa/speakers/profile/rabih-feghali`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Rabih-Feghali-2026.jpg',
        fullName: 'Rabih Feghali',
        jobTitle: 'Board Member',
        company: 'HAMA EMEA',
    },
]


function Partners({ partnerData, videoTestimonials }) {

	const isDesktop = useCustomMediaQuery('(min-width: 600px)')

	
	// programatically build array of unique types (custom type field) pulled from exhibitor data
	const allCategoriesArray = []
	partnerData.exhibitors?.forEach( obj => {
		if (obj.fields) {

			const ids = obj.fields.map(field => field.id)
			const names = obj.fields.map(field => field.translations[0].value)
			
			allCategoriesArray.push({
				ids: ids,
				name: names[0],
				size: ''
			})
		}
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.name)


	
	const CUSTOM_ORDERING = [
		'Host Partner',
		'Founding Partner',
		'Strategic Enabler',
		'Strategic Partners',
		'Headline Partners',
		'Partners',
		'Exhibitors',
		'BRF Partner',
		'Strategic Event Partner',
		'Supporters',
		'Media Partners',
	]
	

	// console.log('swapcard partner data 2026:', partnerData)
	// console.log('categoriesArray:', categoriesArray)


	const indexMap = new Map(CUSTOM_ORDERING.map((item, idx) => [item, idx]))
	const sorted = _.sortBy(categoriesArray, (item) => indexMap.get(item.name))
	// console.log('SORTED:', sorted)

	return (
		<>
			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />


			{
				videoTestimonials.length ?
					<Section
						backgroundClass={`bg-primary`}
						themeGraphics={
							isDesktop
							?   <ThemeGraphic
									src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
									width={`60vw`}
									opacity={.4}
									coordinates={{ bottom: 0, left: `-35vh`}}
								/>
							:   <ThemeGraphic
									src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
									opacity={.4}
									width="180vw"
									coordinates={{ top: `30%`}}
								/>
						}
					>
						<div className="container columns-3 gap-md">
							{ videoTestimonials.map( entry => <VideoTestimonialCard key={entry.id} entry={entry} /> ) }
						</div>
					</Section>
				: null
			}




			{/* 2025 partners */}
			<section className='block bg-default'>

				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2026 Partners</p>
					<p><Link href="/sa/become-a-sponsor#form"><a className="button secondary">Become a Partner</a></Link></p>
				</div>

				<PartnerCategoryGrid>
					{
						partnerData &&
						sorted.map((category, index) => {

							console.log('category:', category)
							
							const group = partnerData.exhibitors?.filter(partner => {
								const ids = partner.fields.map(field => field.id)
								if (ids.some(item => category.ids.includes(item)) ) return partner
							})
							
							if (group.length > 0) {
								
								let specialCategories = [
									'RmllbGRWYWx1ZV8yMjM5NDE1Mg==',
									'RmllbGRWYWx1ZV8zMDg1MjU3MQ=='
								]

								return (
									<PartnerCategory key={category.id} width={ specialCategories.some(item => category.ids.includes(item)) ? 1 : null }>

										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{category && category.name}</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( group, [(p) => p.name.toLowerCase()] ).map( partner => (
													<a key={partner.id} href={`/sa/partners/${partner.id}`} style={{ textDecoration: 'none'}}>
														<PartnerLogo 
															src={partner.logoUrl ? partner.logoUrl : null} 
															size={category && category.size}
															label={partner.id === "RXhoaWJpdG9yXzIzOTI3MTM=" && 'China'}
														/>
													</a>
												))
											}
										</PartnerLogoGrid>
										
									</PartnerCategory>
								)
							}
							
						})
					}
				</PartnerCategoryGrid>
				
			</section>



			{/* AMBASSADORS + SPEAKERS */}
			<Section
				backgroundClass={`bg-primary`}
				themeGraphics={
					isDesktop
					?   <ThemeGraphic
							src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
							width={`60vw`}
							opacity={.4}
							coordinates={{ bottom: 0, right: `-30vh`}}
						/>
					:   <ThemeGraphic
							src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
							opacity={.4}
							width="180vw"
							coordinates={{ top: `30%`}}
						/>
				}
			>
				
				<div className="container center">
					<Fade>
						<p className="fs-1 fw-600 c-white">FHS Saudi Arabia Ambassadors</p>
					</Fade>
				</div>
				<div className="container columns-5 gap-sm maxw-75">
					{
						AMBASSADOR_DATA.map( (profile, index) => (
							<Pop key={index}>
								<SpeakerCard
									url={profile.url}
									photoUrl={profile.photoUrl}
									fullName={profile.fullName}
									jobTitle={profile.jobTitle}
									company={profile.company}
									color={'white'}
								/>
							</Pop>
						))
					}
				</div>
				
				
			</Section>


			{/* quotes */}
			<QuoteGrid>
				<Quote 
					quote={`“Great quality content and senior influential leadership under one roof!”`}
					name={`Imran Changezi`}
					title={`Executive Director Development`}
					company={`Hospitality, Diriyah Company`}
				/>
				<Quote 
					quote={`“Great insight into the Saudi Arabia tourism business development and valuable contacts. A very well-organised conference with ample opportunity to network.”`}
					name={`Elisabeth Ixmeier`}
					title={`Co-Founder and Managing Partner`}
					company={`Healing Hotels of the World`}
				/>
				<Quote 
					quote={`“Very informative, relevant to our business, engaging and necessary! It has become a must do.”`}
					name={`Najee Syriani`}
					title={`Corporate Vice President - Projects`}
					company={`Rotana`}
				/>
			</QuoteGrid>


			

			<section className="block bg-default">
				<div className="container flex jc-center flex-wrap gap-xs">
					<Link href="/sa/2025/partners"><a className="button secondary">2025 Partners</a></Link> 
					<Link href="/sa/become-a-sponsor#form"><a className="button secondary">Get in Touch</a></Link>
				</div>
			</section>



			{/* { handleContentBlocks( contentBlocks, null, partnerData, '/sa' ) } */}


			<Footer />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'sa-2025'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entries(site: "${process.env.SITE_HANDLE_SA}", section: "videoTestimonials", limit: 3) {
					... on videoTestimonials_videoTestimonial_Entry {
                        id
                        slug
                        title
                        videoShareUrl
                        fullName
                        jobTitle
                        organisation
                        testimonial
                    }
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
						event(id: "${process.env.SWAPCARD_EVENT_ID_SA_2026}") {
							fieldDefinitions {
								... on SelectFieldDefinition {
									id
									name
									optionsValues {
										id
										value
										translations {
											language
											value
										}
									}
								}
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2026}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2026,
					"page": 1
				}
			})
		}
	)
	const partnerData =  await swapcardData.json()

	
	return {
		props: { 
			partnerData: partnerData.data,
			videoTestimonials: cmsData.data.entries
		}
	}
}

export default Partners


