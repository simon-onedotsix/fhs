import { useContext } from 'react'
import { GlobalsContext } from '../_app'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Image from 'next/image'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/global-sa/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme-bg/theme-bg'

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




export default function Home({ seomatic, contentBlocks, partnerData }) {

	const { globals } = useContext(GlobalsContext)


	return (
		<div>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>

			<Header shimMobile />

            <ThemeBg />


            <div style={{ height: `90vh`, padding: `var(--space-md)` }}> 
                <div className='maxw-50 pt-xl'>
                    <Image src='/assets/theme/sa-2024/theme-headline.svg' layout='responsive' width={1113} height={464} alt='' />
                </div>
            </div>

            <div style={{ minHeight: `275vh`, padding: `var(--space-md)`, color:`white` }}>

                <div className="columns-1 gap-md">
                    <p className='fs-4 maxw-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, accusamus reprehenderit? Error voluptate alias, ipsum saepe cumque, nihil vero quasi vel dolore dolorem quisquam, minima iusto rem eligendi ratione adipisci.</p>
                    <p className='fs-4 maxw-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, accusamus reprehenderit? Error voluptate alias, ipsum saepe cumque, nihil vero quasi vel dolore dolorem quisquam, minima iusto rem eligendi ratione adipisci.</p>
                    <p className='fs-4 maxw-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, accusamus reprehenderit? Error voluptate alias, ipsum saepe cumque, nihil vero quasi vel dolore dolorem quisquam, minima iusto rem eligendi ratione adipisci.</p>
                </div>
                
                <div className="columns-1 gap-md mt-xl">
                    <p className='fs-4 maxw-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, accusamus reprehenderit? Error voluptate alias, ipsum saepe cumque, nihil vero quasi vel dolore dolorem quisquam, minima iusto rem eligendi ratione adipisci.</p>
                    <p className='fs-4 maxw-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, accusamus reprehenderit? Error voluptate alias, ipsum saepe cumque, nihil vero quasi vel dolore dolorem quisquam, minima iusto rem eligendi ratione adipisci.</p>
                    <p className='fs-4 maxw-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, accusamus reprehenderit? Error voluptate alias, ipsum saepe cumque, nihil vero quasi vel dolore dolorem quisquam, minima iusto rem eligendi ratione adipisci.</p>
                </div>
            </div>



			{/* { handleContentBlocks( contentBlocks, null, partnerData, 'sa' ) } */}

			{/* <Footer /> */}

		</div>
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


