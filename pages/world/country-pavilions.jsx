import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Image from "next/image"

import { useState } from 'react'
import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade, Slide } from "../../fuselage/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"

import parse from 'html-react-parser'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactFigure } from '../../fuselage/theme/2025/world/blocks/impact-grid/impact-grid'
import { Floaters, Floater } from '../../fuselage/blocks/floater/floater'
import { FlagTicker, Flag } from "../../fuselage/theme/2025/world/blocks/flag-ticker/flag-ticker"
import Ticker from 'framer-motion-ticker'



import CSS from '../../fuselage/theme/2025/world/css/country-pavilions.module.css'


export const PAVILIONS_DATA = [
    {
        "__typename": "countryPavilions_pavilion_BlockType",
        "id": "257333",
        "country": "China Pavilion",
        "body": "<p>In 2024, China saw a significant increase in domestic and international tourism, with 5.6 billion domestic trips and nearly 132 million international arrivals. This growth in 2024 represented an almost 61% increase compared to 2023.</p>\n<p>Learn more about the Chinese hospitality and tourism sector and its upcoming projects at the China pavilion at FHS World.</p>",
        "hero": [
            {
                "__typename": "site_Asset",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/forbiddencity-beijing-china.png"
            }
        ],
        "flag": [
            {
                "__typename": "site_Asset",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/pavilions/flag-of-china.png"
            }
        ],
        "logoGroup": [
            {
                "__typename": "logoGroup_BlockType",
                "id": "257334",
                "groupHeading": "Presented by:",
                "logos": [
                    {
                        "__typename": "contentLibrary_Asset",
                        "url": "https://cms.thebench.com/assets/content-library/img/exhibitor_logo_2025-03-20-075642_hgzn.png"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "countryPavilions_pavilion_BlockType",
        "id": "257335",
        "country": "Italy Pavilion",
        "body": "<p>Italy, now ranked as the 5th most visited country in the world, offers a wealth of opportunities within its dynamic hospitality industry. As Europe's most trending travel destination, Italy continues to captivate the hearts of millions of visitors with its rich cultural heritage, exquisite cuisine, and iconic landmarks.<br /><br />At FHS World 2025, the Italia Hospitality-sponsored Italy Pavilion will provide delegates with invaluable insights into the nation's burgeoning hospitality sector and its array of upcoming projects. This pavilion will underscore Italy's dedication to fostering innovation and excellence in hospitality, ensuring that Italy remains a top choice for travellers from around the globe.</p><p>If you are an Italian company and want to purchase ticket for the Summit or partner up with Italia Hospitality to showcase your brand, please reach out to <a href='mailto:mgm@italiahospitality.it'>Marco G Malacrida</a>.</p>",
        "hero": [
            {
                "__typename": "site_Asset",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/italy-pavilion-retouch.jpg"
            }
        ],
        "flag": [
            {
                "__typename": "site_Asset",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/pavilions/flag-of-italy.png"
            }
        ],
        "logoGroup": [
            {
                "__typename": "logoGroup_BlockType",
                "id": "257336",
                "groupHeading": "Presented by:",
                "logos": [
                    {
                        "__typename": "contentLibrary_Asset",
                        "url": "https://cms.thebench.com/assets/content-library/img/Italia-Hospitaliti-Logo-2020-small.png"
                    }
                ]
            },
            {
                "__typename": "logoGroup_BlockType",
                "id": "257337",
                "groupHeading": "Partners:",
                "logos": [
                    {
                        "__typename": "contentLibrary_Asset",
                        "url": "https://cms.thebench.com/assets/content-library/img/FHS-World/Alpitour-World_positivo-copy.png"
                    },
                    {
                        "__typename": "contentLibrary_Asset",
                        "url": "https://cms.thebench.com/assets/img/site/FHS-World/Logo-Arsenale-Postitivo.png"
                    },
                    {
                        "__typename": "contentLibrary_Asset",
                        "url": "https://cms.thebench.com/assets/content-library/img/FHS-World/Blastness_logo_basic_2020.png"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "countryPavilions_pavilion_BlockType",
        "id": "257914",
        "country": "Maldives Pavilion",
        "body": "<p>The Maldives, a stunning island nation renowned for its breathtaking landscapes and vibrant culture, has been experiencing a remarkable influx of international visitors since 2010. In 2024 alone, the country welcomed over 1.6 million visitors, marking a 13.9% year-on-year growth.<br /><br />Maldives will present its country pavilion at FHS World 2025, showcasing an array of innovative hospitality projects to the attending delegates. This pavilion highlighted the nation's commitment to excellence in hospitality, sustainable tourism, and its ongoing efforts to enhance the visitor experience, solidifying the Maldives' status as a premier global travel destination.</p>",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "246555",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/maldivess.jpg"
            }
        ],
        "flag": [
            {
                "__typename": "site_Asset",
                "id": "257900",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/pavilions/flag-of-maldives.png"
            }
        ],
        "logoGroup": [
            {
                "__typename": "logoGroup_BlockType",
                "id": "257915",
                "groupHeading": "Presented by:",
                "logos": [
                    {
                        "__typename": "contentLibrary_Asset",
                        "id": "193784",
                        "url": "https://cms.thebench.com/assets/img/site/FHS-World/mfmc_logo.jpg"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "countryPavilions_pavilion_BlockType",
        "id": "257914",
        "country": "Philippines Pavilion",
        "body": "<p>The Philippines, an archipelago of over 7,000 islands, is fast emerging as one of Asia's most exciting tourism and hospitality markets. With its breathtaking natural landscapes, vibrant culture, and rapidly expanding infrastructure, the country is attracting growing interest from global investors, developers, and travellers alike.</p><p>At FHS World 2025, the Philippines Pavilion, presented by the Tourism Promotions Board Philippines and key industry stakeholders, will spotlight the nation's strategic push to elevate its hospitality and tourism offerings. From luxury resorts to sustainable developments, the pavilion will showcase upcoming projects and investment opportunities that highlight the Philippines' commitment to becoming a premier destination in the region.</p>",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "246555",
                "url": "/assets/img/world/pages/country-pavilions/philippines.webp"
            }
        ],
        "flag": [
            {
                "__typename": "site_Asset",
                "id": "257900",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/pavilions/flag-of-philippines.jpg"
            }
        ],
        "logoGroup": [
            {
                "__typename": "logoGroup_BlockType",
                "id": "257915",
                "groupHeading": "Presented by:",
                "logos": [
                    {
                        "__typename": "contentLibrary_Asset",
                        "id": "193784",
                        "url": "https://cms.thebench.com/assets/img/site/FHS-World/philippines-tourism.png"
                    }
                ]
            }
        ]
    }
]

const FLOATER_DATA = [
    {
        "__typename": "floaters_BlockType",
        "id": "159691",
        "body": "<h2>Showcase your country's exciting hospitality projects at the FHS World Country Pavilions. </h2>\n<p>As of 2024, <strong>42% of investors attending the event are searching for new projects and opportunities</strong>. Considering this high demand for investable projects, this year we have dedicated a substantial portion of our floor space to showcase hospitality projects from different countries through dedicated country pavilions.</p>",
        "hero": [
            {
                "__typename": "site_Asset",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/low-angle-shot-of-several-international-flags-wavi-2023-11-27-05-34-53-utc.jpg",
                "width": 4896,
                "height": 3264
            }
        ]
    },
    {
        "__typename": "floaters_BlockType",
        "id": "159692",
        "body": "<h3>Who Sponsors Country Pavilions</h3>\n<ul><li>Investment Promotion Agencies</li><li>Tourism Groups</li><li>Developers</li><li>Advisors</li><li>Local Owners/Operators</li><li>International F&amp;B Concepts</li></ul><p>If you belong to any of the categories mentioned above and are interested in booking a pavilion for your country, you can reach out directly to our sponsorship team.</p>\n<p><a class=\"button\" href=\"/world/why-sponsor#partner-form\">Get in touch</a></p>",
        "hero": [
            {
                "__typename": "site_Asset",
                "url": "https://cms.thebench.com/assets/img/site/FHS-World/FHS-WORLD-2024-D1-GENERAL_179.jpg",
                "width": 2000,
                "height": 1116
            }
        ]
    }
]



export default function Page ({ entry }) {

    console.log('entry:', entry)

    return (
        <>
            <Header compact />


            <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-World/53727353681_d9e964e388_o.jpg', width: 6192, height: 4128 }} >
                <div className="container maxw-50 pb-xl formatted c-white center">
                    <Pop>
                        <h1>Projects & Country Pavilions</h1>
                    </Pop>
                    <Fade>
                        <p className='fs-6 mt-sm'>FHS World features country pavilions that showcase new projects and destinations unique to each participating country. These pavilions will showcase upcoming hospitality projects unique to each country and present a plethora of investment opportunities in ventures with high ROI.</p>
                    </Fade>
                </div>
                
                <div className="container">
                    <p className="fs-2 center pb-sm">Country Pavilions at FHS World 2025</p>
                </div>
                <Ticker speed={20}>
                    { PAVILIONS_DATA.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                    { PAVILIONS_DATA.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                    { PAVILIONS_DATA.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                    { PAVILIONS_DATA.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                    { PAVILIONS_DATA.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                </Ticker>
                
                
                <section className="block">
                    <div className="container columns-1 gap-md">
                        { PAVILIONS_DATA.map( pavilion => <Pavilion key={pavilion.id} data={pavilion} /> ) }
                    </div>
                </section>         
                
            </PageHeroImage>

            


            <section className="block pt-0">
                <div className="container">

                    <Floaters theme={'bg-dark'} flipped={true}>
                        {FLOATER_DATA.map( floater => {
                            return (
                                <Floater key={floater.id} hero={floater.hero[0]}>
                                    <div dangerouslySetInnerHTML={{__html: floater.body }} />
                                </Floater>
                            )
                        })}
                    </Floaters>

                </div>
            </section>
            

            <Footer />
            <LenisScroller />
        </> 
    )

}
Page.theme = 'world-2024'


const Pavilion = ({ data }) => {
    return (
        <Pop>
            <article className={`${CSS.pavilion} bg-light`}>
                <div className={CSS.pavilionFlag}>
                    <Image src={data.flag[0].url} layout={'fill'} />
                </div>
            
                <section className={CSS.pavilionHero}>
                    <Fade once={true}>
                        <Image src={data.hero[0].url} layout={'fill'} />
                    </Fade>
                </section>

                <section className={`${CSS.pavilionContent} formatted`}>
                    <Reveal>
                        <h2>{data.country}</h2>
                    </Reveal>
                    <Slide delay={.2}>
                        { parse(data.body) }
                    </Slide>

                    {
                        data.logoGroup.length ?
                        data.logoGroup.map( group => (
                            <div key={group.id}>
                                <p className="fw-600 mt-xs c-accent">{ group.groupHeading }</p>
                                <div className={CSS.pavilionLogoGrid}>
                                    {
                                        group.logos.length &&
                                        group.logos.map( (logo, index) => <PavilionLogo key={index} logo={logo} /> )
                                    }    
                                </div>
                            </div>
                        ))
                        : null
                    }
                
                </section>
            </article>
        </Pop>
    )
}

const PavilionLogo = ({ logo }) => {
    return (
        <Pop>
            <div className={CSS.pavilionLogo}>
                <Image src={logo.url } layout={'fill'} />
            </div>
        </Pop>
    )
}



export async function getStaticProps() {

    const cmsData = await craftApolloClient().query({
        query: gql`
            query PAGE {
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "157393") {
                    title
                }
            }
        `
    })

    return {
        props: { 
            entry: cmsData.data.entry
        }
    }
}