import { useContext } from 'react'
import { GlobalsContext } from '../_app'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Image from 'next/image'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

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
import { HomepageHero } from '../../fuselage/theme/2024/sa/blocks/homepage-hero/homepage-hero'





export default function Home({ seomatic, contentBlocks, partnerData }) {

	const { globals } = useContext(GlobalsContext)


	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>
			<Header shimMobile />

            <ThemeBg />
			<ThemeFg />
			<HomepageHero />

			<section className="block">
                <div className="container center">
                    <p className="fs-2 fw-600 caps">Host Sponsors</p>
                </div>
                <div className="container flex gap-md jc-center">
                    <Image src={`/assets/site/sa/mandarin-oriental-al-faisaliah-logo.png`} width={200} height={200}/>
                    <Image src={`/assets/site/sa/al-khozama-logo.png`} width={200} height={200}/>
                </div>
            </section>

			{ handleContentBlocks( contentBlocks, null, partnerData, 'sa' ) }

			<Footer />
			<LenisScroller />

		</>
	)
}

Home.theme = 'sa-2024'





export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE_SA}") {
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
				entry(site: "fhisSa", id: 63852) {
					id
					title
					... on fhisSaHomepage_fhisSaHomepage_Entry {
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


