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
                <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-SA/53726532587_e90f8d8abb_o.jpg', width: 7557, height: 4448 }} >
                    <div className="container maxw-60 pb-md center minvh-30">
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
                                <Link href="/sa/download-prospectus">
                                    <a className="button secondary fs-5">
                                        {
                                            locale === 'ar'
                                            ?   "كتيب 2025"
                                            :   "2025 Brochure"
                                        }
                                    </a>
                                </Link>
                            </Pop>
                        </div>
                        <div>
                            <Pop inline>
                                <Link href="https://floorplan.live/interactive/shows/3936/views/3/plan" target="_blank">
                                    <a className="button secondary fs-5">
                                        {
                                            locale === 'ar'
                                            ?   "خريطة المعرض 2025"
                                            :   "2025 Floor Plan"
                                        }
                                    </a>
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
                <ImageBlock />
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
                    <Quotation
                        avatarUrl={'https://static.swapcard.com/public/images/9cf68577bdff4a38be44c9fbf2850f25.jpeg'}
                        quote={"Being at FHS is like an obligation now! We attend both Saudi Arabia and World to present our company's developments, network and meet with colleagues and investors. This year was much stronger and more effective."}
                        fullName={"Hassan Ahdab"}
                        title={"Chief Hospitality Operations Officer, Taiba Investments"}
                    />

                    <VideoTestimonial entry={{
                        "__typename": "videoTestimonials_videoTestimonial_Entry",
                        "id": "223023",
                        "slug": "bhagya-mahavithanage",
                        "title": "Bhagya Mahavithanage",
                        "videoShareUrl": "https://youtu.be/e33RqIaIEQE",
                        "fullName": "Bhagya Mahavithanage",
                        "jobTitle": "Deputy Director - Investor Relations Unit",
                        "organisation": "Sri Lanka Tourism Development Authority",
                        "testimonial": "On the very first day, we have created a lot of connections with very important people"
                    }} />

                    <VideoTestimonial entry={{
                        "__typename": "videoTestimonials_videoTestimonial_Entry",
                        "id": "223023",
                        "slug": "bhagya-mahavithanage",
                        "title": "Bhagya Mahavithanage",
                        "videoShareUrl": "https://youtu.be/e33RqIaIEQE",
                        "fullName": "Bhagya Mahavithanage",
                        "jobTitle": "Deputy Director - Investor Relations Unit",
                        "organisation": "Sri Lanka Tourism Development Authority",
                        "testimonial": "On the very first day, we have created a lot of connections with very important people"
                    }} />

                    <Quotation
                        avatarUrl={'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg'}
                        quote={"It's a blessing. Very energizing, very dynamic, very busy. Lots of beautiful encounters so far."}
                        fullName={"Maud Bailly"}
                        title={"Chief Executive Officer, Sofitel Legend, Sofitel, MGallery & Emblems"}
                    />
                    <Quotation
                        avatarUrl={'https://static.swapcard.com/public/images/0ea10113e8f64d0795d891c9d1769812.jpeg'}
                        quote={"As in every Future Hospitality Summit, we get quality conversations rather than the big quantities that we find in other exhibitions. So, this has been a really good exhibition so far. We've had some quality discussions."}
                        fullName={"Eddy Tannous"}
                        title={"Chief Operating Officer, Rotana"}
                    />

                    <VideoTestimonial entry={{
                        "__typename": "videoTestimonials_videoTestimonial_Entry",
                        "id": "223023",
                        "slug": "bhagya-mahavithanage",
                        "title": "Bhagya Mahavithanage",
                        "videoShareUrl": "https://youtu.be/e33RqIaIEQE",
                        "fullName": "Bhagya Mahavithanage",
                        "jobTitle": "Deputy Director - Investor Relations Unit",
                        "organisation": "Sri Lanka Tourism Development Authority",
                        "testimonial": "On the very first day, we have created a lot of connections with very important people"
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
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-01.jpg`, width: 720, height: 1396 }} />
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-02.jpg`, width: 902, height: 1020 }} />
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-03.jpg`, width: 902, height: 1026 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-04.jpg`, width: 902, height: 744 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-05.jpg`, width: 902, height: 1060 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-06.jpg`, width: 902, height: 750 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-07.jpg`, width: 902, height: 1014 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-08.jpg`, width: 902, height: 1050 }} />                     
                    <MediaWallPost href={`https://www.linkedin.com/showcase/future-hospitality-summit/`} image={{ url: `/assets/img/sa/become-a-sponsor/linkedin/card-09.jpg`, width: 902, height: 854 }} />                     
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

            
            {/* contacts */}
            <section className="block bg-primary-2">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Get in Touch</p>
                    </Fade>
                </div>
                <div className="container columns-2 gap-md formatted maxw-50 center">
                    <Pop>
                        <h5>Jamil Chaanine</h5>
                        <p>Senior Sales Manager, The Bench <br/><a href="mailto:jamil.chaanine@thebench.com">jamil.chaanine@thebench.com</a> </p>
                    </Pop>

                    <Pop>
                        <h5>Matthew Weihs</h5>
                        <p>Managing Director, The Bench <br/><a href="mailto:matthew.weihs@thebench.com">matthew.weihs@thebench.com</a> </p>
                    </Pop>
                </div>
            </section>


            {/* form */}
            <section id='form' className="block bg-primary">
                <div className="container formatted">
                    <p className='fs-1 fw-600 center'>Become a Sponsor for 2026</p>
                </div>
                <div className="container maxw-60">
                    <HubspotForm portalId={`14527187`} formId={`34357038-0e2a-412a-95e3-a68427da15e3`} />
                </div>
            </section>
  
           

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