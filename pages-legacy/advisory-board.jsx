import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header, HeaderShim } from '../fuselage/global/header/header'
import { StickySidebar } from '../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { SpeakerGrid } from '../fuselage/layout/speaker-grid/speaker-grid'
import HubspotForm from'../fuselage/components/hubspot-form/hubspot-form'

import CSS from '../css/app/speakers.module.css'

function Speakers({ seomatic, craftCmsProfiles }) {

	// seo

	let metaTitle = JSON.parse(seomatic.metaTitleContainer)
    let metaTags = JSON.parse(seomatic.metaTagContainer) 

	// speakers

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<div className='bg-secondary'>

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

			<section className="block bg-theme">
				<div className="container">

					{/* <HeaderShim /> */}

					<p className='fs-0 fw-600 lh-1'>2022 Advisory Board</p>

					<SpeakerGrid decal="gap-sm mt-md">
						{craftCmsProfiles.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/speakers/profile/${speaker.slug}`}>
									<a className={CSS.avatar}>
										<Image 
											src={speaker.avatar[0].url} 
											layout='fill'
											alt="profile picture"
										/>
									</a>
								</Link>
								<div>
									<p className='mt-xs'>
										<span className='fw-600'>
										{speaker.title}</span> <br/>
										{speaker.positions[0] && speaker.positions[0].jobTitle} <br/>
										{speaker.positions[0] && speaker.positions[0].organisation} <br/>
										
									</p>
								</div>
							</div>
						))}
					</SpeakerGrid>

				</div>
			</section>

		</div>
	)
}

export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE}", id: "11552") {
					title
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })


	const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE}", section: "profileGroups", id: "10222") {
					... on profileGroups_default_Entry {
						id
						title
						profiles {
							... on profiles_profile_Entry {
								id
								slug
								title
								avatar {
									... on avatars_Asset {
										id
										url
										width
										height
									}
								}
								positions {
									... on positions_BlockType {
										id
										jobTitle
										organisation
									}
								}
								profile
							}
						}
					}
				}
            }
          
        `
	})

	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			craftCmsProfiles: craftCmsProfiles.data.entries[0].profiles
		}
	}
}

export default Speakers


