import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from "../../fuselage/animation/animation"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { Flag } from "../../fuselage/theme/2025/world/blocks/flag-ticker/flag-ticker"
import Ticker from 'framer-motion-ticker'

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
    QuerySEO,
    QueryImages,
    QueryCards,
    QueryTestimonials,
    QueryTickers,
    QueryBannerImage,
    QueryCoutryPavilions,
    QueryVideoTestimonials,
    Passes
} from "../../graphql/queries"


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



export default function Page ({ entry }) {

    
    const {countryPavilions} = entry.fhisContentBlocks.find( block => block.__typename === 'fhisContentBlocks_countryPavilions_BlockType' )
    

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

                {
                    countryPavilions.length &&
                    <Ticker speed={20}>
                        { countryPavilions.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                        { countryPavilions.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                        { countryPavilions.map( pavilion => <Flag key={pavilion.id} flagUrl={pavilion.flag[0].url} /> ) }
                    </Ticker>      
                }
                
                {handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' )}

            </PageHeroImage>


            <Footer />
            <LenisScroller />
        </> 
    )

}
Page.theme = 'world-2024'






export async function getStaticProps() {

    const cmsData = await craftApolloClient().query({
        query: gql`
            query PAGE {
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "271354") {
                    id
                    hero {
                        url
                        width
                        height
                    }
                    heading
                    body

                    ${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
                        ${QueryText}
                        ${QueryFlipFlops}
                        ${QueryFloaters}
                        ${QueryBillboards}
                        ${QueryBillboardSliders}
                        ${QueryImpactFigures}
                        ${QueryVideos}
                        ${QueryProfileCarousel}
                        ${QueryForm}
                        ${QueryImages}
                        ${QueryCards}
                        ${QueryTestimonials}
                        ${QueryTickers}
                        ${QueryBannerImage}
                        ${QueryCoutryPavilions}
                        ${Passes}
                        ${QueryVideoTestimonials}
                    }
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