import { gql } from "@apollo/client"
import craftApolloClient from '../../../api/apollo'

import Head from "next/head"
import Script from "next/script"
import Image from "next/image"

import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../../ui/site/eventsbar"
import { Header } from '../../../../ui/site/header'
import { FHS_SA as header } from '../../../../fixtures/nav'
import { Footer } from '../../../../fuselage/theme/2025/sa/common/footer/footer'

import { ThemeBg } from '../../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { HeaderShim } from '../../../../fuselage/global-sa/header/header'

import { StickySidebar } from '../../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'
import { ArrowLinkBack } from '../../../../fuselage/components/arrow-link-back/arrow-link-back'

import CSS from '../../../../css/app/speakers.module.css'


export default function Profile ({ profile }) {

    // console.log('profile data:', profile)

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

            <ThemeBg />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
                            <HeaderShim/>
                            
							<p className="fw-600">
                                {/* <ArrowLink 
                                    theme={{ color: `white`, stroke: `var(--accent)` }} 
                                    href="/sa/advisory-board"
                                >
                                    Advisory Board
                                </ArrowLink> */}
                                <ArrowLinkBack 
                                    theme={{ stroke: `var(--accent)` }} 
                                >
                                    Back
                                </ArrowLinkBack>
                            </p>
							
                            <div className={`${CSS.avatar} mt-sm rad-md`}>
                                {
                                    profile.avatar.length ?
                                        <Image className={CSS.photo} src={profile.avatar[0].url} layout='fill' alt=""/>
                                    :
                                        <Image className={CSS.photo} src={`/assets/ui/avatar-fallback.png`} layout='fill' alt=""/>
                                }
                            </div>
						</aside>
						
						<main className="maxw-60">
                            <HeaderShim/>
							<p className='fs-4 fw-600 lh-1 c-accent maxw-40'>Profile</p>
                            <p className="fs-3 fw-600 caps mt-sm">{profile.title}</p>
							
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

					</StickySidebar>

				</div>
			</section>

            <Footer />
            <LenisScroller />
		</>
    )
}

Profile.theme = 'sa-2025'



export async function getStaticPaths() {

    const res = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "profiles") {
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
                entries(site:"${process.env.SITE_HANDLE_SA}" section: "profiles" slug: "${params.slug}") {
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

    console.log('data:', data)

    const profile = data.data.entries[0]

    return { props: { profile }}
}