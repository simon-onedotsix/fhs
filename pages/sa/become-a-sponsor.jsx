import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useRouter } from 'next/router'
import Image from 'next/image'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Link from 'next/link'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactGrid, ImpactFigure, TitleBlock, ImageBlock } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { SectionHeading } from "../../fuselage/theme/2025/sa/components/section-heading/section-heading"
import { InvestorImpact } from "../../fuselage/components/impact-figure/impact-figure"
import { VideoTestimonial } from '../../fuselage/theme/2025/sa/components/video-testimonial/video-testimonial'
import { LogoTicker, Logo } from "../../fuselage/theme/2025/sa/blocks/logo-ticker/logo-ticker"
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { Button } from '../../fuselage/theme/2024/sa/components/button/button'
import { PopOverlay } from "../../fuselage/components/popoverlay/popoverlay"

import useMasonry from "../../fuselage/layout/masonry/useMasonry"
import Ticker from 'framer-motion-ticker'

import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'



import CSS from '../../fuselage/theme/2025/sa/css/become-a-sponsor.module.css'


const BENEFITS_DATA = [
    {
        imageUrl: "/assets/img/sa/become-a-sponsor/global.svg",
        heading: "Global Positioning",
        body: "Showcase your brand to top hospitality leaders worldwide"
    },
    {
        imageUrl: "/assets/img/sa/become-a-sponsor/networking.svg",
        heading: "Exclusive Networking",
        body: "Connect with C-level decision-makers and key stakeholders"
    },
    {
        imageUrl: "/assets/img/sa/become-a-sponsor/introductions.svg",
        heading: "Investor Introductions",
        body: "Gain direct introductions to global hospitality investors"
    },
    {
        imageUrl: "/assets/img/sa/become-a-sponsor/stage.svg",
        heading: "Spotlight Stage Sessions",
        body: "Share the stage with industry trailblazers"
    },
    {
        imageUrl: "/assets/img/sa/become-a-sponsor/visibility.svg",
        heading: "Brand Visibility",
        body: "Boost visibility through curated digital campaigns"
    }
]
const PHOTOS_DATA = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/sa/photos/2025-01.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/sa/photos/2025-02.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/sa/photos/2025-03.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/sa/photos/2025-04.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/sa/photos/2025-05.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/sa/photos/2025-06.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/sa/photos/2025-07.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/sa/photos/2025-08.jpg",
                "width": 1379,
                "height": 919
            }
        ]
    },
    // {
    //     "id": "50207",
    //     "hero": [
    //         {
    //             "id": "50193",
    //             "url": "/assets/img/sa/photos/2025-09.jpg",
    //             "width": 1379,
    //             "height": 919
    //         }
    //     ]
    // }
]


export default function Page ({ partners }) {

    const { locale } = useRouter()

    const masonryContainer = useMasonry()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />

            {/* intro */}
            <div className="bg-primary o-hidden">
                <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHIS-SA/become-a-sponsor-hero.jpg', width: 3643, height: 2429 }} >
                    <div className="container maxw-60 pb-md center">
                        <Reveal>
                            {
                                locale === 'ar'
                                ?
                                    <h1 className='fs-0'>Let&apos;s Talk Future. <br/>Let&apos;s Talk FHS Saudi</h1>
                                :
                                    <h1 className='fs-0'>Let&apos;s Talk Future. <br/>Let&apos;s Talk FHS Saudi</h1>
                            }
                        </Reveal>

                        <div className="mt-sm">
                            <Pop inline>
                                <Link href="#form">
                                    <a className="button secondary fs-5">Get in Touch</a>
                                </Link>
                            </Pop>
                        </div>
                    </div>


                    {/* key downloadables */}
                    <div className={`block ${CSS.linkGrid}`}>
                        <div>
                            <Pop inline>
                                <Link href="/sa/post-event-report-2025">
                                    <a className="button secondary fs-5">2025 Post-Event Report</a>
                                </Link>
                            </Pop>
                        </div>
                        <div>
                            <Pop inline>
                                <Link href="https://floorplan.live/interactive/shows/4222/views/3/plan" target="_blank">
                                    <a className="button secondary fs-5">2026 Floor Plan</a>
                                </Link>
                            </Pop>
                        </div>
                    </div>

                </PageHeroImage>

            </div>



            {/* impact figures */}
            <ImpactGrid>
                <TitleBlock>
                    <SectionHeading heading={'2025 in Numbers'} decal={'c-secondary'} />
                </TitleBlock>
                <ImpactFigure decal={'bg-neutral-01'} figure={1106} impact={"Attendees"}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={85} impact={"Sponsors"}  />
                <ImpactFigure decal={'bg-neutral-02'} figure={24} unit={"%"} impact={"Investors"}  />
                <ImpactFigure decal={'bg-neutral-01'} prefix={"$"} figure={1.6} unit={"bn"} impact={"in Business Opportunities"}  />
                <ImageBlock imageUrl={'/assets/img/sa/become-a-sponsor/sponsor-impact-inset.jpg'} />
            </ImpactGrid>



            {/* sponsor benefits */}
            <section className="block bg-default">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 c-primary lh-1 caps">Sponsor Benefits</p>
                    </Fade>
                </div>

                <div className="container columns-5 gap-sm">
                    {
                        BENEFITS_DATA.map( (card, index) => <IconCard key={index} imageUrl={card.imageUrl} heading={card.heading} body={card.body} />)
                    }
                </div>
            </section>



            {/* testimonials */}
            <section className='block bg-default'>
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps c-primary">Hear What Our Partners Have to Say</p>
                    </Fade>
                </div>

                <div className="container columns-3 gap-lg">

                    <VideoTestimonial entry={{
                        "id": "223023",
                        "videoShareUrl": "https://youtu.be/bJuvI9381nw",
                        "fullName": "Ibrahim Osta",
                        "jobTitle": "Global Tourism Lead and Senior Economic Growth Advisor",
                        "organisation": "Chemonics International",
                        "testimonial": "So many of the world's best minds represented in one place."
                    }} />
                   
                    <VideoTestimonial entry={{
                        "id": "223023",
                        "videoShareUrl": "https://youtu.be/vGJuFVZeb0I",
                        "fullName": "Maud Bailly",
                        "jobTitle": "Chief Executive Officer",
                        "organisation": "Sofitel Legend, Sofitel, MGallery & Emblems",
                        "testimonial": "It's a blessing. Very energizing, very dynamic, very busy. Lots of beautiful encounters so far."
                    }} />
                   
                    <VideoTestimonial entry={{
                        "id": "223023",
                        "videoShareUrl": "https://youtu.be/u15jyxLvqNE",
                        "fullName": "Eddy Tannous",
                        "jobTitle": "Chief Operating Officer",
                        "organisation": "Rotana",
                        "testimonial": "As in every Future Hospitality Summit, we get quality conversations rather than the big quantities that we find in other exhibitions."
                    }} />

                </div>
            </section>



            {/* join the conversation */}
            <section className="block bg-primary">
                <div className="container center">
                    <Pop inline>
                        <p className="fs-1 fw-600 lh-1 caps ">Join the Conversation</p>
                    </Pop>    
                </div>

                <div ref={masonryContainer} className="container center columns-3 gap-sm">
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-01.jpg`, width: 720, height: 1396 }} />
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-02.jpg`, width: 902, height: 1020 }} />
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-03.jpg`, width: 902, height: 1026 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-04.jpg`, width: 902, height: 744 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-05.jpg`, width: 902, height: 1060 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-06.jpg`, width: 902, height: 750 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-07.jpg`, width: 902, height: 1014 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-08.jpg`, width: 902, height: 1050 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/posts/?feedView=all`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-09.jpg`, width: 902, height: 854 }} />                     
                </div>
            </section>



            {/* previous sponsors */}
            <section className="block bg-default pb-0">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps c-primary pb-sm">2025 Sponsors</p>
                    </Fade>
                </div>
            </section>

            {/* <LogoTicker speed={120}>
                {
                    partners &&
                    partners.map( logo => <Logo key={logo.id} logoUrl={logo.logoUrl} />)
                }
            </LogoTicker> */}

            <Ticker duration={100}>
                {
                    partners &&
                    partners.map( logo => <Logo key={logo.id} logoUrl={logo.logoUrl} />)
                }
            </Ticker>



            {/* contacts */}
            <section className="block bg-primary-2 mt-lg">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Get in Touch</p>
                    </Fade>
                </div>
                <div className="container columns-1 gap-md formatted maxw-50 center">
                    <Pop>
                        <h5>Daria Smith</h5>
                        <p>Portfolio Director at The Bench <br/><a href="mailto:daria.smith@thebench.com">daria.smith@thebench.com</a> </p>
                    </Pop>
                </div>
            </section>



            {/* form */}
            <section id='form' className="block bg-primary">
                <div className="container formatted maxw-60">
                    <p className='fs-1 fw-600 center'>We are keen to hear more about your objectives. Let&apos;s connect!</p>
                </div>
                <div className="container maxw-60">
                    <HubspotForm portalId={`14527187`} formId={`34357038-0e2a-412a-95e3-a68427da15e3`} />
                </div>
            </section>



            {/* see what you missed */}
            <section className="block bg-default">
                <div className={`${CSS.photoGrid} container center`}>
                    <Fade><p className='fs-1 fw-700 lh-1 caps c-primary'>See What You Missed</p></Fade>
                    
                    <div className="columns-4 gap-xs mt-md">
                        {
                            PHOTOS_DATA.map( (photo, index) => (
                                <Pop key={index}>
                                    <div key={photo.id} style={{ position: `relative`, borderRadius: '.75rem', overflow: 'hidden' }}>
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" />
                                    </div>
                                </Pop>
                            ))
                        }
                    </div>

                    <p className="pt-md">
                        <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View Full Gallery</ArrowButton>
                    </p>
                </div>
            </section>




            <PopOverlay id={"sa2026prospectus"}>
                <div className="formatted p-xs center">
                    <img src="/assets/img/sa/2026-prospectus-cover.png" alt="" width={300} />
                    <p className="fs-2 fw-600 c-primary lh-1 mt-sm">FHS Saudia Arabia 2026 Prospectus</p>
                    <p className="mt-sm"><Button href={`/sa/prospectus-download`}>Download</Button></p>
                </div>
            </PopOverlay>



            <Footer />
            <LenisScroller />
        </div>
    )
}

Page.theme = 'sa-2025'



const IconCard = ({ imageUrl, heading, body }) => {
    return (
        <Pop>
            <div className={CSS.iconCard}>
                <Pop delay={.15}>
                    <section className={`center`}>
                        <img src={imageUrl} alt="" style={{ width: '30%', aspectRatio: 1  }} />
                    </section>
                </Pop>

                <section className={`formatted center`}>
                    <h3 className='lh-1'>{heading}</h3>
                    <p>{body}</p>
                </section>
            </div>
        </Pop>
    )
}

const MediaWallPost = ({ image, href }) => {
    return (
        
        <div className={CSS.mediaWallPost} style={{ aspectRatio: image.width/image.height  }}>
            <Pop>
                {
                    href
                    ? 
                        <a href={href} target="_blank" rel="noreferrer">
                            <Image src={image.url} width={image.width} height={image.height} />
                        </a>
                    : 
                        <Image src={image.url} width={image.width} height={image.height} />
                }
            </Pop>
        </div>
    )
}




export async function getStaticProps() {

    const swapcardData2025 = await fetch(
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
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2025,
					"page": 1
				}
			})
		}
	)
	const partnerData2025 =  await swapcardData2025.json()


    return { 
		props: { 
            partners: partnerData2025.data.exhibitors,
		}
	}
}