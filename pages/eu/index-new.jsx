import { useContext } from 'react'
import { GlobalsContext } from '../_app'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { Header } from '../../fuselage/theme/2024/eu/global/header/header'
import { Footer } from "../../fuselage/theme/2024/eu/global/footer/footer"
import { HeroUnit } from '../../fuselage/theme/2024/eu/blocks/hero-unit/hero-unit'
import { Floaters, Floater } from '../../fuselage/theme/2024/eu/blocks/floater/floater'
import { AngledSection } from '../../fuselage/blocks/angled-section/angled-section'
import { SectionDivider } from '../../fuselage/theme/2024/eu/blocks/section-divider/section-divider'
import { NumberedFloaters, NumberedFloater } from '../../fuselage/theme/2024/eu/blocks/numbered-floater/numbered-floater'
import { Button } from '../../fuselage/components/button/button'

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
	QueryCards,
    QuerySEO,
    QueryImages,
	BizzaboPartners
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'

export default function Home({ seomatic, contentBlocks, speakerData, partnerData }) {

	const { globals } = useContext(GlobalsContext)
	
    // console.log('globals from template MAIN:', globals.ksa)
	// console.log('entry:', entry)
	// console.log('seomatic:', seomatic)
	

	return (
		<div className='bg-primary' style={{ backgroundColor: `var(--primary)`, backgroundImage: `url('/assets/theme/eu-2024/fhs-2024-eu-bg.svg')`, backgroundSize: `100%` }}>
			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>

			<Header shimMobile={true} />

			<HeroUnit />


			<section className="block pt-0">
				<div className="container">

					<Floaters flipped>
						
						<Floater hero={{ url: '/assets/theme/eu-2024/homepage/hero-unit.jpg', width: 3360, height: 2100 }}>
							<p className='fs-1 caps c-accent-light ff-space lh-1'>Exclusive Owner & Investor Led Discussions</p>
							<p className='fs-6 fw-300 mt-xs'>At FHS Monaco, Owners & Investors Forum, we will create a closed-door environment for the investment community to share best practices, assess investable projects and gain insight into the latest trends shaping hospitality investment.</p>
						</Floater>
						
						<Floater hero={{ url: '/assets/theme/eu-2024/homepage/hero-unit.jpg', width: 3360, height: 2100 }}>
							<p className='fs-1 caps c-accent-light ff-space lh-1'>Networking Platform For Investors</p>
							<p className='fs-6 fw-300 mt-xs'>Our objective is to bring the key capital market investors together to create a platform to connect, network and address industry challenges. We will also discuss cross-sector innovations that will shape the future of a rapidly transforming hospitality real estate sector. Companies wishing to sponsor will be restricted to ensure relevance and delegates will be invited on an invitation basis.</p>
							<p className='mt-sm'><Button href={`https://share.hsforms.com/1crNFT2dCSLGkhgATKI-yOQ8nd8z`} accent outline decal={`c-white fw-600`}>Become a Sponsor</Button></p>
						</Floater>
						
						<Floater hero={{ url: '/assets/theme/eu-2024/homepage/hero-unit.jpg', width: 3360, height: 2100 }}>
							<p className='fs-1 caps c-accent-light ff-space lh-1'>About FHS</p>
							<p className='fs-6 fw-300 mt-xs'>FHS is a leading hospitality investment platform that showcases current trends and future innovations for the industry with regional summits across Europe, Africa and Saudi Arabia. The FHS series attracts industry leaders to share best practices, find solutions for industry challenges and ultimately drive connections that fuel investment globally.</p>
							<p className='mt-sm'><Button href={`/`} accent outline decal={`c-white fw-600`}>Learn about FHS</Button></p>
						</Floater>

					</Floaters>

				</div>
			</section>


			<AngledSection innerBg={`var(--dark)`}>

				<SectionDivider 
                    theme={{ heading: `white`, body: `var(--default-text-color)`, keyline: `var(--accent)` }}
                    contentLeft={
						<>
							<p className='fs-0 ff-space caps'>FHS Monaco Programme</p>
							<p className='fs-4 fw-400 c-accent-light mt-sm maxw-30'>The Owners & Investors Forum will focus on three key themes:</p>
						</>
					} 
                    contentRight={
						<>
							<Button href={`/`} accent decal={`c-white fw-600`}>View Agenda</Button>
						</>
					}
                />


				<NumberedFloaters>

					<NumberedFloater 
						number={`1`}
						heading={`Investment Opportunities`}
						hero={{ url: '/assets/theme/eu-2024/homepage/hero-unit.jpg', width: 3360, height: 2100 }}
					>
						<p className='fs-5 maxw-25'>Insights into carefully curated international investment opportunities. Our programme will actively engage investors in discussions on projects that are shaping the future of the industry.</p>
					</NumberedFloater>

					<NumberedFloater 
						number={`2`}
						heading={`Sustainability, Innovation & Digital`}
						hero={{ url: '/assets/theme/eu-2024/homepage/hero-unit.jpg', width: 3360, height: 2100 }}
					>
						<p className='fs-5 maxw-25'>Looking at the pivotal role of sustainability, we cast a spotlight on how the industry is capitalising on environmentally-conscious opportunities. With a pronounced focus on the transformative power of innovation and artificial intelligence, our program underscores these elements as critical catalysts in sculpting a more sustainable future.</p>
					</NumberedFloater>

					<NumberedFloater 
						number={`3`}
						heading={`The Future of Physical Space`}
						hero={{ url: '/assets/theme/eu-2024/homepage/hero-unit.jpg', width: 3360, height: 2100 }}
					>
						<p className='fs-5 maxw-20'>We will focus on maximising utilisation and ROI for owners and how best to activate their asset.</p>
					</NumberedFloater>

				</NumberedFloaters>


			</AngledSection>


			{/* { handleContentBlocks( contentBlocks, null, partnerData, 'eu' ) } */}

			<Footer />

		</div>
	)
}

Home.theme = 'eu-2024'





export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE_EU}") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
				entry(site: "fhsEu", id: 	127791) {
					id
					title
					... on fhsEuHomepage_fhsEuHomepage_Entry {
						id
						${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryProfileCarousel}
							${QueryCards}
							${QueryForm}
							${QueryImages}
							${BizzaboPartners}
						}
						${QuerySEO}
					}
				}
			}
			
        `
    })
    const pageData = data


    return { 
		props: { 
			globals: pageData.data.globalSet,
			entry: pageData.data.entry,
			seomatic: pageData.data.entry.seomatic,
			contentBlocks: pageData.data.entry.fhisContentBlocks,
		}
	}
}


