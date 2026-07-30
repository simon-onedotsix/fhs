import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import _ from 'lodash'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Slide } from "../../fuselage-africa/animation/animation"

import Head from "next/head"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

import handleContentBlocks from "../../lib/content-blocks-africa"

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
    QueryPageHeader,
    QueryCards,
    QueryOffsetCallout,
    QueryDividers,
    QuerySEO,
    QueryPartners,
    QueryTestimonials,
    QueryCustomSliderVideo,
    QueryCustomQuoteImageGrid
} from "../../graphql/queries-africa"

import handleSeomaticMeta from '../../lib/seomatic'


import { PageHero } from "../../ui/modules/page-hero"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { Quotation } from "../../fuselage-africa/components/quotation/quotation"
import { FixedBackgroundImage } from "../../fuselage/theme/2025/africa/blocks/fixed-background-image/fixed-background-image"
import { Button, ButtonGrid } from "../../fuselage/theme/2025/africa/components/button/button"
import { Slider } from "../../ui/components/slider"


const QUOTES_DATA = [
    {
        avatarUrl: 'https://static.swapcard.com/public/images/6c33755bfc764a0baae794953986c15f.png',
        quote: "FHS Africa delivered a broad, well-balanced agenda that brought together meaningful discussions across investment, development, operations, ESG, and destination growth, making it a genuinely useful forum for the industry.",
        fullName: "Suhail Ashok Bhatia ",
        title: "Director - Asset management, Compagnie Hoteliere Et Immobiliere Du Congo (CHIC) – Headline Partner FHS Africa 2026"
    },
    {
        avatarUrl: '/assets/img/africa/homepage/altaaf-kazi.jpeg',
        quote: "FHS Africa was hugely successful for the Millat Group. We look forward to building on the key meetings and conversations that took place - strengthening our portfolio on the continent and continuing to play our part in amplifying Africa's voice and tourism offering.",
        fullName: "Altaaf Kazi",
        title: "VP: Corporate Communications and Business Development, Millat Group – Education Partner FHS Africa 2026",
    },
    {
        avatarUrl: '/assets/img/africa/homepage/sherif-ahmed.jpeg',
        quote: "FHS Africa was a great experience that strengthened our industry partnerships, opened new possible opportunities with hotel owners and operators, and showcased our leadership in hospitality digital transformation.",
        fullName: "Sherif Ahmed",
        title: "Business Development Director, ACT Hospitality Group – Headline Partner FHS Africa 2026",
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/site/AHIF/david-diamba.jpg',
        quote: "FHS Africa enables all the market players to gather in one place, to network and come up with new ideas, have panels of experts who try to help each other as well.",
        fullName: "David Damiba",
        title: "Managing Partner | Chief Investment Officer, Kasada Capital Management",
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/site/AHIF/jerry-mabena.jpg',
        quote: "The quality of the people that you interact with, the knowledge that they have, the experience, world view, regional view are extremely enriching. I'm looking forward to the next edition. For me, the quality of the panels is absolutely incredible.",
        fullName: "Jerry Mabena",
        title: "Chief Executive Officer, Motsamayi Tourism Group",
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/site/AHIF/amos-wekesa.jpg',
        quote: "It's a fantastic forum that brings in so many different people from different walks of life, and just now I don't even know how many contacts I've made. Anybody out there should consider attending these meetings, for their own good and I don't think there are many meetings as good as this in the world.",
        fullName: "Amos Wekesa",
        title: "Founder and Chief Executive Officer, Great Lakes Safari",
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/site/AHIF/artur-gerber.jpg',
        quote: "It's great to have events like this, that bring people together. For us these are important events in terms of opportunities in Africa.",
        fullName: "Artur Gerber",
        title: "Managing Director, TUI Blue Hotels",
    },
]


export default function Page ({ entry, seomatic, partners }) {

    // console.log('entry:', entry) 
    // console.log('parterData:', partners)
  
    return (
        <>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
              { handleSeomaticMeta( seomatic ) }
            </Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            
            <PageHero hero={{ url: `/assets/img/africa/why-partner/why-partner-hero.jpg`, width: 2047, height: 1149 }}>
                <div className="maxw-50 formatted">
                    <h1 className="caps lh-1">Put your brand at the centre of Africa&apos;s hospitality investment conversation.</h1>
                    <h6>Partnering with FHS Africa allows you to build direct relationships with the investors, owners, developers and operators shaping hospitality across the continent.</h6>
                    <br />
                    <br />
                    <h5>Why partners return year after year:</h5>
                    <p>✓ Generate qualified business opportunities<br />✓ Meet senior decision-makers in two days rather than six months<br />✓ Present deal signings to the industry&apos;s most influential audience<br />✓ Position themselves as industry leaders<br />✓ Build relationships that lead to long-term partnerships</p>
                    
                    <p className="pt-sm">
                        <Pop inline><Button inverse href="/africa/partner-with-fhs-africa-2027">Get in Touch</Button></Pop>
                    </p>
                </div>
            </PageHero>

            
            {/* WHO YOU WILL MEET */}
            <section className="block">
                <div className="container center maxw-45">
                    <p className="fs-2 fw-600 lh-1 balance">Meet the people leading investment decisions across the continent</p>
                </div>

                <div className="container center columns-5 gap-xs">
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Investors</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Owners</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Hotel Brands</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Developers</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Government</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Architects</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Lenders</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Consultants</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Operators</p></Card>
                    <Card background={`var(--secondary)`}><p className="fs-6 fw-600 lh-1">Institutional Capital</p></Card>
                </div>
            </section>


            {/* PARTNERS */}
            <section className="block bg-white">
                <div className="container center maxw-45">
                    <p className="fs-2 fw-600 lh-1 balance c-secondary">Join the companies already investing in FHS Africa</p>
                </div>

                <div className="container" style={{ display: `flex`, flexWrap: `wrap`, gap: `4rem`, justifyContent: `center`}}>
                    {
                        partners.length &&
                        _.orderBy(_.uniqBy(partners, 'name'), 'name').map(partner => (
                            <div
                                key={partner.id}
                                style={{
                                    position: `relative`,
                                    width: 150,
                                    aspectRatio: 19 / 9,
                                    display: `flex`,
                                    justifyContent: `center`,
                                    alignItems: `center`,
                                }}
                            >
                                <Pop><img src={partner.logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} /></Pop>
                            </div>
                        ))
                    }
                </div>
            </section>


            {/* VIDEO */}
            <section className="block bg-primary o-hidden">
                <div className="container maxw-60">
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://youtu.be/kGIETQ-Cunw`} />
                </div>
            </section>



            {/* WHY SPONSOR */}
            <FixedBackgroundImage
                backgroundImageUrl={`/assets/img/africa/why-partner/why-partner-01.jpg`}
                overlay={`hsl(from var(--secondary) h s l / .75)`}
                flex
            >

                <div className="container center maxw-45">
                    <p className="fs-2 fw-600">Why Partner?</p>
                </div>

                <div className="container columns-3 gap-sm maxw-70">
                    <Card><p className="fs-4 lh-1 center balance">Build trust before the first meeting</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Speaking positions establish credibility</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Roundtables create conversations</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Networking creates introductions</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Branding creates familiarity before delegates arrive</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Your partnership continues long after the summit ends through year-round marketing exposure</p></Card>
                </div>
                
            </FixedBackgroundImage>



            {/* WHAT CAN PARTNERING ACHIEVE? */}
             {/* <FixedBackgroundImage
                backgroundImageUrl={`/assets/img/africa/why-partner/why-partner-02.jpg`}
                overlay={`hsl(from var(--secondary) h s l / .75)`}
                flex
            >

                <div className="container center maxw-45">
                    <p className="fs-2 fw-600">What can sponsoring FHS Africa achieve?</p>
                </div>

                <div className="container columns-3 gap-sm maxw-70">
                    <Card><p className="fs-4 lh-1 center balance">Announce a new market entry</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Launch a hotel brand</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Meet hotel owners seeking partners</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Connect with governments</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Build investor relationships</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Generate qualified leads</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Position your executives as thought leaders</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Showcase innovation</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Strengthen brand credibility</p></Card>
                    <Card><p className="fs-4 lh-1 center balance">Become part of Africa&apos;s hospitality investment ecosystem</p></Card>
                </div>
                
            </FixedBackgroundImage> */}



            {/* QUOTES */}
            <section className="block bg-secondary">
                <div className="container center maxw-45">
                    <p className="fs-2 fw-600">Testimonials</p>
                </div>

                <div className={`container maxw-65`}>
                    <Slider>
                        {
                            QUOTES_DATA.map((quote, index) => (
                                <Quotation
                                    key={index}
                                    avatarUrl={quote.avatarUrl}
                                    quote={quote.quote}
                                    fullName={quote.fullName}
                                    title={quote.title}
                                    landscape
                                />
                            ))
                        }
                    </Slider>
                </div>
            </section>


            {/* CONTACT */}
            <section className="block bg-primary">
                <div className="container columns-2 gap-md">
                    <section className="formatted balance">
                        <p className="fs-2 lh-1">Let&apos;s build a partnership around your objectives.</p>
                        <br />
                        <p>Whether you&apos;re launching into Africa, strengthening relationships or positioning your business alongside the industry&apos;s leaders, we&apos;ll design a package aligned with your commercial goals.</p>
                        <br />
                        <ButtonGrid>
                            <Pop inline><Button inverse href="/africa/partner-with-fhs-africa-2027">Get in Touch</Button></Pop>
                            <Pop inline><Button inverse href="mailto:roy.bannister@thebench.com" rel="noreferrer noopener">Book a Strategy Call</Button></Pop>
                        </ButtonGrid>
                    </section>

                    <section className="columns-2 gap-md">
                        <Pop>
                            <img src="https://cms.thebench.com/assets/img/avatars/Roy-Profile-Pic.jpg" alt="" style={{ width: `100%`, maxWidth: `16rem`, borderRadius: `.5rem` }} />
                        </Pop>

                        <div className="formatted balance">
                            <h5>Roy Bannister</h5>
                            <p>Head of Strategic Partnerships for Africa <br /><strong className="fw-500">The Bench</strong></p>    
                        </div>
                    </section>
                </div>
            </section>

            
            
            {/* { handleContentBlocks( entry.ahifContentBlocks ) } */}

            <Footer />
            <LenisScroller />

        </>
    )
}

Page.theme = 'africa'



const Card = ({ children, background }) => {
    return (
        <Pop>
            <div className={`p-sm`} style={{ background: background ? background : 'var(--primary)', borderRadius: `1rem`, height: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                { children }
            </div>
        </Pop>
    )
}







export async function getStaticProps() {

    const entryData = await craftApolloClient().query({
        query: gql`
            query Page {
                entry(site: "ahif", slug: "why-partner") {
                    ... on ahifSponsorship_ahifSponsorship_Entry {
                        id
                        title
                        slug
                        ahifContentBlocks {
                            ${QueryText}
                            ${QueryFlipFlops}
                            ${QueryFloaters}
                            ${QueryBillboards}
                            ${QueryBillboardSliders}
                            ${QueryImpactFigures}
                            ${QueryVideos}
                            ${QueryProfileCarousel}
                            ${QueryOffsetCallout}
                            ${QueryPageHeader}
                            ${QueryDividers}
                            ${QueryCards}
                            ${QueryForm}
                            ${QueryPartners}
                            ${QueryTestimonials}
                            ${QueryCustomSliderVideo}
                            ${QueryCustomQuoteImageGrid}
                        }
                        ${QuerySEO}
                    }
                }
            }
        `
    })



    const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2026}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2026,
					"page": 1
				}
			})
		}
	)

	console.log(swapcardData)
	
    const partnerData = await swapcardData.json()

    return { 
        props: { 
            entry: entryData.data.entry,
            seomatic: entryData.data.entry.seomatic,
            partners: partnerData.data.exhibitors,
        }
    }
}