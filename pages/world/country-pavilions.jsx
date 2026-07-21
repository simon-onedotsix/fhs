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
                        <p className='fs-6 mt-sm'>FHS World features country pavilions that showcase new projects and destinations unique to each participating country. These pavilions will showcase upcoming hospitality projects unique to each country and present a plethora of investment opportunities in ventures with high ROI.</p>
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
                

                {handleContentBlocks(entry.fhisContentBlocks, null, null, 'ae')}
                

                {/* GALLERY */}

                <section className="block pt-0">
                    <div className="container center">
                        <p className="fs-2 fw-600">Past Country Pavilions at FHS World</p>
                    </div>

                    <div className="container columns-3 gap-sm">
                        <PavilionCard photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-generic-01.jpg`} />
                        <PavilionCard photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-generic-02.jpg`} />
                        <PavilionCard photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-generic-03.jpg`} />
                        <PavilionCard title={`Sri Lanka`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-sri-lanka.jpg`} />
                        <PavilionCard title={`Maldives`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-maldives.jpg`} />
                        <PavilionCard title={`Albania`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-albania.jpg`} />
                        <PavilionCard title={`Philippines`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-philippines.jpg`} />
                        <PavilionCard title={`Italy`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-italy.jpg`} />
                        <PavilionCard title={`Greece`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-greece.jpg`} />
                        <PavilionCard title={`Morocco`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-morocco.jpg`} />
                        <PavilionCard title={`Egypt`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-egypt.jpg`} />
                        <PavilionCard title={`Cyprus`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-cyprus.png`} />
                        <PavilionCard title={`UAE`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-uae.jpg`} />
                        <PavilionCard title={`Saudi Arabia`} photoUrl={`/assets/img/world/pages/country-pavilions/gallery/pav-saudi.jpg`} />
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