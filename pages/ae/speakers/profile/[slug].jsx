import { ThemeBg } from "../../../../fuselage/theme/2023/ae/theme-bg"

import { gql } from "@apollo/client"
import craftApolloClient from '../../../api/apollo'

import Image from "next/image"

import { Header, HeaderShim } from '../../../../fuselage/global-ae/header/header'
import { Footer } from '../../../../fuselage/global-ae/footer/footer'
import { Sidebar } from '../../../../fuselage/layout/sidebar/sidebar'
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'
// import { ButtonSocial } from  '../../../../fuselage/components/button-social/button-social'

import { Container } from "../../../../fuselage/theme/2023/ae/layout/container/container"

import CSS from '../../../../css/app/speakers.module.css'


export default function Profile ({ profile }) {

    // console.log('profile data:', profile)

    return (
        <>
			<ThemeBg />

            <Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />


            <section className="block flush">
				<Container flushRight maxWidth={`85%`} decal={`bg-white-90 p-md`}>
					<Sidebar size='medium'>

						<aside className="formatted">
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `var(--dark)`, stroke: `var(--accent)` }} 
									href="/ae/speakers"
								>
									View All Speakers
								</ArrowLink>
							</p>
							<p className="fw-600">
								<ArrowLink 
									theme={{ color: `var(--dark)`, stroke: `var(--accent)` }} 
									href="/ae/advisory-board"
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
				</Container>
			</section>


            <Footer theme={{ footerBg: 'bg-white-90' }} />
		</>
    )
}

Profile.theme = 'ae-2023'


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
        paths: entries.map( entry => ({ params: { slug: entry.slug } })),
        fallback: false
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