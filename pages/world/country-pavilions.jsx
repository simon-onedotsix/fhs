import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"
import Script from "next/script"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from "../../fuselage/animation/animation"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
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





export default function Page ({ entry }) {

    
    const {countryPavilions} = entry.fhisContentBlocks.find( block => block.__typename === 'fhisContentBlocks_countryPavilions_BlockType' )
    

    return (
        <>
                <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
            
            <EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            {/* UPDATE TO USE CMS DATA */}

            <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-World/53727353681_d9e964e388_o.jpg', width: 6192, height: 4128 }} >

                <div className="container maxw-50 pb-xl formatted c-white center">
                    <Pop>
                        <h1>Projects & Country Pavilions</h1>
                    </Pop>
                    <Fade>
                        <p className='fs-6 mt-sm'>At FHS World, countries and destinations can have a powerful platform to position their markets on the global hospitality investment stage.</p>
                        <p className='fs-6'>Through country pavilions, governments and destination partners can highlight upcoming developments, promote investment-ready opportunities, and connect directly with investors, developers, and operators looking to shape the future of tourism and hospitality.</p>
                    </Fade>
                    
                    <div className="mt-md">
                        <Pop inline>
                            <Button href={`/world/why-partner#partner-form`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Get in Touch</Button>
                        </Pop>
                    </div>
                </div>

            {/* END UPDATE TO USE CMS DATA */}
                


                {/* TICKER */}

                {/* <div className="container">
                    <p className="fs-2 center pb-sm">Country Pavilions at FHS World 2026</p>
                </div>

                {
                    countryPavilions.length &&
                    <Ticker speed={10}>
                        { countryPavilions.map( (pavilion, index) => <Flag key={index} flagUrl={pavilion.flag[0].url} /> ) }
                        { countryPavilions.map( (pavilion, index) => <Flag key={index} flagUrl={pavilion.flag[0].url} /> ) }
                        { countryPavilions.map( (pavilion, index) => <Flag key={index} flagUrl={pavilion.flag[0].url} /> ) }
                    </Ticker>      
                } */}


                <section className="block pb-0">
                    <div className="container center">
                        <p className="fs-2 fw-600">Country Pavilion at FHS World 2026</p>
                    </div>
                </section>
                

                {handleContentBlocks(entry.fhisContentBlocks, null, null, 'ae')}


                <section className="block pb-0">
                    <div className="container columns-2 gap-md">
                        <section>
                            <div className="formatted">
                                <p className="fs-2 fw-600 lh-1 pb-xs balance">Why Countries Partner with FHS&nbsp;World</p>
                                <p>Past country pavilions have delivered tangible outcomes, from Sri Lanka generating an estimated USD 5–10 million in business opportunities and engaging over 41 potential partners, to the Maldives securing strategic hospitality partnerships for major tourism development projects.</p>
                                <h5>Benefits of Partnering:</h5>
                                <ul>
                                    <li>Showcase investment-ready projects</li>
                                    <li>Attract foreign direct investment</li>
                                    <li>Promote destination growth</li>
                                    <li>Convert interest into real opportunitie</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <Pop><img src="/assets/img/world/pages/country-pavilions/gallery/pav-generic-02.jpg" alt="" style={{ width: `100%`, borderRadius: `1rem` }} /></Pop>
                        </section>
                    </div>

                </section>
                

                {/* GALLERY */}

                <section className="block">
                    <div className="container center">
                        <p className="fs-2 fw-600">Past Country Pavilions at FHS World</p>
                    </div>

                    <div className="container columns-3 gap-sm">
                        <PavilionCard title={`Albania`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-albania.jpg`} />
                        <PavilionCard title={`Cyprus`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-cyprus.png`} />
                        <PavilionCard title={`Egypt`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-egypt.jpg`} />
                        <PavilionCard title={`Greece`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-greece.jpg`} />
                        <PavilionCard title={`Italy`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-italy.jpg`} />
                        <PavilionCard title={`Maldives`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-maldives.jpg`} />
                        <PavilionCard title={`Morocco`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-morocco.jpg`} />
                        <PavilionCard title={`Philippines`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-philippines.jpg`} />
                        <PavilionCard title={`Saudi Arabia`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-saudi.jpg`} />
                        <PavilionCard title={`Sri Lanka`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-sri-lanka.jpg`} />
                        <PavilionCard title={`United Arab Emirates`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-uae.jpg`} />
                    </div>
                </section>


            </PageHeroImage>


            <Footer />
            <LenisScroller />
        </> 
    )

}
Page.theme = 'world-2024'






const PavilionCard = ({ photoUrl, title }) => {

    if(!photoUrl) return

    return (
        <Pop>
            <div style={{ position: `relative` }}>
                <img src={photoUrl} alt="" style={{ width: `100%`, borderRadius: `1rem` }} />
                {
                    title &&
                    <Pop delay={.15}>
                        <p
                            style={{
                                position: `absolute`,
                                right: 15,
                                bottom: 15,
                                left: 15,
                                backgroundColor: `hsl(from var(--primary) h s l / .85)`,
                                padding: `5px 10px`,
                                borderRadius: `.5rem`,
                                textAlign: `center`,
                                fontWeight: 500
                            }}
                        >{title}</p>
                    </Pop>
                }
            </div>
        </Pop>
    )
}








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