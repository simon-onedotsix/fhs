import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Image from "next/image"

import { Header } from '../../fuselage/global/header/header'

import { GetBizzaboPartersByLevel, GetAllBizzaboParterLevels, GetAllBizzaboParters } from '../../lib/bizzabo-partner-levels'
import { ArrowButton } from '../../fuselage/components/arrow-button/arrow-button'



function Partners({ seomatic, partnerData }) {

	// seo

	let metaTitle = JSON.parse(seomatic.metaTitleContainer)
    let metaTags = JSON.parse(seomatic.metaTagContainer) 

	// console.log('bizzabo partner data:', partnerData)


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

			<section className="block bg-white">
				<div className="container center">
					<p className="fs-0 fw-700 lh-1 c-primary">2022 Sponsors <span>&amp; Partners</span></p>
				</div>
				                
                { GetBizzaboPartersByLevel( 1, partnerData ) }
                { GetBizzaboPartersByLevel( 10, partnerData ) }
                { GetBizzaboPartersByLevel( 2, partnerData ) }
                { GetBizzaboPartersByLevel( 3, partnerData ) }
                { GetBizzaboPartersByLevel( 4, partnerData ) }
                { GetBizzaboPartersByLevel( 5, partnerData ) }
                { GetBizzaboPartersByLevel( 6, partnerData ) }
                { GetBizzaboPartersByLevel( 7, partnerData ) }

			</section>

			{/* <section className="block bg-white">
				<div className="container center">
					<ArrowButton href='/become-a-sponsor' large >Become a sponsor</ArrowButton>
				</div>
			</section> */}
		
		</div>
	)
}

export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE}", id: 11544) {
					title
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })

	const partners = await fetch(`https://api.bizzabo.com/api/partners?eventId=${process.env.BIZZABO_EVENT_ID}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const partnerData = await partners.json()
	
	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			partnerData: partnerData.content 
		}
	}
}

export default Partners


