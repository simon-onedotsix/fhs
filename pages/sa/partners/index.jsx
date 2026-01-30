import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import useCustomMediaQuery from "../../../hooks/useCustomMediaQuery"

import { Header } from '../../../fuselage/theme/2025/sa/common/header/header'
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
        url: `/sa/speakers/profile/rabih-feghali`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Rabih-Feghali-2026.jpg',
        fullName: 'Rabih Feghali',
        jobTitle: 'Board Member',
        company: 'HAMA EMEA',
    },
    {
        url: `/sa/speakers/profile/haifaa-alzahrani`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/IMG_3406.jpeg',
        fullName: 'Haifaa Al Zahrani',
        jobTitle: 'Head of Hospitality Asset Management and Partnerships',
        company: 'Thakher Development',
    },
    {
        url: `/sa/speakers/profile/fahad-al-fawaz-2`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Fahad-Al-Fawaz-1.jpg',
        fullName: 'Fahad Al Fawaz',
        jobTitle: 'Board Director & Board Committee Member',
        company: 'Tabuk Investment Co. & Jenan Real Estate Co. & Gulf Liting Financing Co',
    },
    {
        url: `/sa/speakers/profile/turab-saleem`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Saleem_Turab-Final-Photo.jpg',
        fullName: 'Turab Saleem',
        jobTitle: 'Hospitality Expert',
        company: '',
    },
    {
        url: `/sa/speakers/profile/mohammed-al-nashwan`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/al-nashwan.png',
        fullName: 'Mohammed Al Nashwan',
        jobTitle: 'Hotel Consultant',
        company: 'Hartt Consulting',
    }    
]


function Partners({ partnerData, videoTestimonials }) {

	const isDesktop = useCustomMediaQuery('(min-width: 600px)')

	// programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partnerData.exhibitors?.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0]?.id, name: obj.fields[0]?.translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)

	// 2025 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQxNw==') orderedCategories.push({ ...category, priority: 0 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQ0Mw==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQ0MQ==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQ0Mg==') orderedCategories.push({ ...category, priority: 2 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQyMQ==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQyMg==') orderedCategories.push({ ...category, priority: 5 })
	})


	// console.log('swapcard partner data 2026:', partnerData)
	// console.log('categories:', categoriesArray)
	// console.log('orderedCategories:', orderedCategories)


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact shim />


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
					<p className='fs-1 fw-600'>2026 Sponsors &amp; Partners</p>
					<p><Link href="/sa/become-a-sponsor#form"><a className="button secondary">Become A Sponsor</a></Link></p>
				</div>

				<PartnerCategoryGrid>
					{
						partnerData &&
						_.orderBy(orderedCategories, 'priority').map( category => {
							const group = partnerData.exhibitors?.filter( partner => {
								if (partner.fields[0]?.id === category.id ) return partner
							})
							
							// console.log('group:', group)

							if ( group.length > 0 ) {

								// console.log(`GROUP: ${category.id} - ${category.name}`)

								let specialCategories = [
									'RmllbGRWYWx1ZV8yNTg5Nzk4NA==',
									'RmllbGRWYWx1ZV8yMzk2Njg2MA==',
									'RmllbGRWYWx1ZV8yMzk2Njg2MQ=='
								]

								return (
									<PartnerCategory key={category.id} width={ specialCategories.includes( category.id ) ? 1 : null }>

										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( group, [(p) => p.name.toLowerCase()] ).map( partner => (
													<a key={partner.id} href={`/sa/partners/${partner.id}`}>
														<PartnerLogo 
															src={partner.logoUrl ? partner.logoUrl : null} 
															size={ category && category.size }
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
					<Link href="/sa/2025/partners"><a className="button secondary">2025 Sponsors & Partners</a></Link> 
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


