import { gql } from "@apollo/client"
import craftApolloClient from '../../../api/apollo'

import Head from "next/head"
import Image from "next/image"
import Script from "next/script"

import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../../fuselage/theme/2024/world/common/footer/footer'
import { Sidebar } from '../../../../fuselage/layout/sidebar/sidebar'
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'


import CSS from '../../../../css/app/speakers.module.css'


export default function Profile ({ profile }) {

    // console.log('profile data:', profile)

    return (
        <>
                <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header compact  />


            <section className="block">
                <div className="container">
					<Sidebar size='medium'>

						<aside className="formatted">
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `white`, stroke: `var(--secondary)` }} 
									href="/world/speakers"
								>
									View All Speakers
								</ArrowLink>
							</p>
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `white`, stroke: `var(--secondary)` }} 
									href="/world/advisory-board"
								>
									View Advisory Board
								</ArrowLink>
							</p>
							<div className={`${CSS.avatar} mt-sm`}>
                                {
                                    profile.avatar.length ?
                                        <Image className={CSS.photo} src={profile.avatar[0].url} layout='fill' alt=""/>
                                    :
                                        <Image className={CSS.photo} src={`/assets/ui/avatar-fallback.png`} layout='fill' alt=""/>
                                }
                            </div>
							
						</aside>

						<main className="maxw-60">
							<p className="fs-3 fw-600 caps">{profile.title}</p>
							
                            {
                                profile.positions.map( position => (
                                    <p key={position.id} className='mt-xxs'>
                                        { position.jobTitle }<br/>
                                        <span className="fw-600">{ position.organisation }</span>
                                    </p>
                                ))
                            }
							<div className="formatted mt-sm maxw-50" dangerouslySetInnerHTML={{__html: profile.profile }} />
						</main>

					</Sidebar>
				</div>
			</section>


            <Footer />
            <LenisScroller />
		</>
    )
}

Profile.theme = 'world-2024'


export async function getStaticPaths() {

    const res = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_AE}", section: "profiles") {
                    slug
                }
            }
        `
    })

    const entries = await res.data.entries

    return {
        // paths: entries.map( entry => ({ params: { slug: entry.slug } })),
        // fallback: false
        paths: [],
		fallback: 'blocking',
    }

}

export async function getStaticProps({ params, preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Profile {
                entries(site:"${process.env.SITE_HANDLE_AE}" section: "profiles" slug: "${params.slug}") {
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
        `
    })

    const profile = data.data.entries[0]

    return { props: { profile }}
}