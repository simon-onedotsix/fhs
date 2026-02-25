import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import parse from 'html-react-parser'

import Image from "next/image"
import Script from "next/script"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'


import CSS from '../../fuselage/theme/2025/sa/css/projects.module.css'




export default function Page ({ entry }) {

    return (
        <div>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Header compact />

            <div className="bg-primary">
                <PageHeroImage 
                    hero={
                        entry.hero.length
                        ?   { url: entry.hero[0].url, width: entry.hero[0].width, height: entry.hero[0].height }
                        :   { url: '/assets/img/sa/about/hero-about.jpg', width: 2000, height: 1334 }
                    } 
                >
                    <div className="container maxw-50 pb-md formatted c-white center">
                        <h1>{entry.title}</h1>
                    </div>
                {
                    entry.body
                    ?   <section className="block pt-sm mb-sm" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="container formatted center maxw-55">
                                {
                                    parse(entry.body)
                                }
                            </div>
                        </section>
                    :   null
                }
                {
                    entry.flipFlops.length
                    ?   entry.flipFlops.map( project => <ProjectCard key={project.id} project={project} />)
                    :   null
                }
                </PageHeroImage>
            </div>
            

            <Footer />
            <LenisScroller />
        </div>
    )

}

Page.theme = 'sa-2025'




const ProjectCard = ({ project }) => {
    return (
        <div className={CSS.cardLayout}>
            <aside>
                <Image src={ project.hero[0].url } layout={'fill'}/>
            </aside>
            <main className="formatted">
                { parse(project.body) }
            </main>
        </div>
    )
}



export async function getStaticProps() {

    const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entry(site: "${process.env.SITE_HANDLE_SA}", id: 255547) {
                    ... on fhsSaProjects_fhsSaProjects_Entry {
                        id
                        title
                        hero {
                            url
                            width
                            height
                        }
                        body
                        flipFlops {
                            ... on flipFlops_BlockType {
                                id
                                hero {
                                    url
                                    width
                                    height
                                }
                                caption
                                body
                            }
                        }
                    }
                }
            }
          
        `
    })

    return {
        props: { 
            entry: craftCmsProfiles.data.entry
        }
    }
}