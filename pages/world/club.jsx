import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'

import _ from 'lodash'
import parse from 'html-react-parser'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitImage } from '../../fuselage/theme/2024/world/blocks/hero-unit-image/hero-unit-image'

import { UpcomingEvents, EventGroupCard, EventCard } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'

import CSS from '../../fuselage/theme/2024/world/css/club.module.css'



const TIER_DATA = [
    {
        title: 'Member',
        color: 'white',
        badgeUrl: '/assets/theme/fhs-pin-member.png',
        criteria: '<p>Attended at least 2 editions of the last 6 editions of FHS</p>',
        benefits: '<ul><li><strong>5% Discount on Standard Tickets:</strong> Enjoy a discount on your tickets to future FHS editions.</li><li><strong>5% Discount on Colleague/Friend Tickets:</strong> Share the experience with your colleagues and friends at a reduced price.</li><li><strong>Exclusive Access to Industry Reports and Event Content:</strong> Get early access to valuable industry insights and content from past events.</li><li><strong>Loyalty Pins/Badges:</strong> Receive special loyalty pins or badges provided on-site at events.</li></ul>'
    },
    {
        title: 'Silver',
        color: '#9F9F9F',
        badgeUrl: '/assets/theme/fhs-pin-silver.png',
        criteria: '<p>Attended 3 or more editions of the last 6 editions of FHS</p>',
        benefits: '<ul><li><strong>10% Discount on Standard Tickets:</strong> Greater savings on your tickets to FHS events.</li><li><strong>5% Discount on Colleague/Friend Tickets:</strong> Continued discount for your colleagues and friends.</li><li><strong>Exclusive Access to Industry Reports and Event Content:</strong> Stay ahead with priority access to exclusive content.</li><li><strong>Loyalty Pins/Badges:</strong> Receive loyalty pins or badges on-site.</li><li><strong>Hotel/Restaurant Vouchers:</strong> Free hotel nights/restaurant/activity vouchers from our sponsors/partners.</li><li><strong>2 Weeks Extended Access to Previous Delegate Rate:</strong> Secure your place at events with extended access to discounted rates.</li><li><strong>Featured on FHS Website:</strong> Be recognized on our website under the members&apos; section.</li><li><strong>Priority Access to Site Tours and On-Site Activities:</strong> Enjoy priority booking for site tours and other activities.</li><li><strong>Access to Networking Receptions:</strong> Join exclusive networking receptions at FHS and other Bench conferences.</li></ul>'
    },
    {
        title: 'Gold',
        color: '#DFA258',
        badgeUrl: '/assets/theme/fhs-pin-gold.png',
        criteria: '<p>Attended 5 or more editions of FHS</p>',
        benefits: '<ul><li><strong>15% Discount on Delegate Tickets:</strong> Maximize your savings with the highest discount on event tickets.</li><li><strong>10% Discount on Colleague/Friend Tickets:</strong> Significant savings for your colleagues and friends.</li><li><strong>Exclusive Access to Industry Reports and Event Content:</strong> Continue to receive exclusive industry insights and content.</li><li><strong>Loyalty Pins/Badges + Event Preparation Kits:</strong> Get special loyalty pins or badges along with event preparation kits provided on-site.</li><li><strong>Hotel/Restaurant Vouchers:</strong> Free hotel nights/restaurant/activity vouchers from our sponsors/partners.</li><li><strong>4 Weeks Extended Access to Previous Delegate Rate:</strong> Enjoy the longest period of extended access to discounted rates.</li><li><strong>Featured on FHS Website:</strong> Prominent recognition on our website.</li><li><strong>Priority Access to Site Tours and On-Site Activities:</strong> Maintain priority booking status for all activities.</li><li><strong>Access to Networking Receptions:</strong> Full access to all networking receptions at FHS and other Bench conferences.</li><li><strong>Opportunity to be Featured in FHS Podcast:</strong> Opportunity to be an interviewer of one of our partners/sponsors.</li><li><strong>Opportunity to be Interviewed On-Site:</strong> Gain visibility by being interviewed by the FHS team on-site.</li></ul>'
    }
]



export default function Club ({ events }) {



    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>
        
            <Header compact />


            <HeroUnitImage imageUrl={'/assets/site/ae/hero-about-fhs-world.jpg'}>
                <p className='fs-1 fw-600 center'>Welcome to the FHS Club</p>
                <p className='fs-6 maxw-50 center mx-auto mt-md'>The FHS Club is an exclusive loyalty program designed to reward our most dedicated attendees, recognising and celebrating your commitment to the FHS brand. As a member, you&apos;ll enjoy exclusive perks, early access, and unique opportunities that are reserved for our most loyal supporters. Whether you are a frequent attendee or new to FHS, there is a tier for everyone, providing tailored rewards and experiences that recognise your commitment.</p>
            </HeroUnitImage>


            <section className="block pt-0">
                <div className="container">
                    <p className='fs-2 fw-600 center'>Tiers</p>
                    <p className='fs-6 maxw-50 center mx-auto mt-md'>Our loyalty program is structured into three distinct tiers, each offering a range of benefits. Your tier is determined by your attendance at past FHS editions.</p>
                </div>

                <div className="container columns-1 gap-sm">
                    {
                        TIER_DATA.map( (tier, index) => (
                            <Tier key={index} title={tier.title} color={tier.color} badgeUrl={tier.badgeUrl} criteria={tier.criteria} benefits={tier.benefits} />
                        ))
                    }
                </div>
            </section>

            <section className="block pt-0">
                <div className="container">
                    <p className='fs-2 fw-600 center'>How to Join</p>
                    
                    <div className={CSS.steps}>
                        <div className={CSS.step}>
                            <p className={CSS.bigNumber}>1</p>
                            <p>ATTEND TWO OR MORE EDITIONS OF THE FUTURE HOSPITALITY SUMMIT TO START EARNING YOUR PLACE IN THE FHS CLUB.</p>
                        </div>
                        <div className={CSS.step}>
                            <p className={CSS.bigNumber}>2</p>
                            <p>YOUR TIER IS AUTOMATICALLY ASSIGNED BASED ON YOUR ATTENDANCE RECORD. KEEP ATTENDING FHS EDITIONS TO MOVE UP THE TIERS AND UNLOCK MORE BENEFITS.</p>
                        </div>
                        <div className={CSS.step}>
                            <p className={CSS.bigNumber}>3</p>
                            <p>CHECK YOUR MEMBERSHIP STATUS AND LEARN ABOUT EXCLUSIVE BENEFITS</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="block bg-dark">
                <div className="container">
                    <p className='fs-2 fw-600 center'>Our Upcoming Events</p>
                </div>

                <UpcomingEvents landscape={true}>
                    {
                        events?.map( event => {
                            return (
                                <EventGroupCard
                                    key={event.id}
                                    theme={event.theme} 
                                    location={event.heading} 
                                    dates={{ startDate: event.startDate, endDate: event.endDate}}
                                    venue={event.venue}
                                >
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCard
                                                key={stream.id}
                                                title={stream.heading}
                                                logo={stream.logo[0]}
                                                passLink={stream.purchasePassLink} 
                                                websiteLink={stream.websiteLink} 
                                                theme={event.theme} 
                                            />
                                        ))
                                    }
                                </EventGroupCard>
                            )
                        })
                    }
                </UpcomingEvents>
            </section>



            <section className="block">
                <div className="container">
                    <p className='fs-2 fw-600 center'>FAQs (Frequently Asked Questions)</p>
                </div>
            </section>
            
            
            
            <section className="block bg-dark">
                <div className="container">
                    <p className='fs-2 fw-600 center'>Terms and Conditions</p>
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Club.theme = 'world-2024'




// COMPONENTS –––––––––––––––––––––––––––––––––––––––––


const Tier = ({ color, badgeUrl, title, criteria, benefits }) => {
    return (
        <div className={CSS.tier}>
            <aside>
                <div className={CSS.badge}>
                    <img src={badgeUrl} alt="" />
                </div>
                <p className={CSS.tierTitle} style={{ background: color ? color : 'white' }}>{ title }</p>
            </aside>
            <main>
                <div className='formatted'>
                    <p className={CSS.smallHeading}>Criteria:</p>
                    { parse(criteria) }
                </div>
                <div className='formatted'>
                    <p className={CSS.smallHeading}>Benefits:</p>
                    { parse(benefits) }
                </div>
            </main>
        </div>
    )
}






// DATA -----------------------------------------------



export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query LandingPage {
                entry(site: "${process.env.SITE_HANDLE}", id: "77020") {
                    ... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
                        id
                        title
                        theme
                        events {
                            ... on events_BlockType {
                                id
                                heading
                                startDate
                                endDate
                                venue
                                theme
                                streams {
                                    ... on streams_stream_BlockType {
                                        id
                                        logo {
                                            id
                                            url
                                            width
                                            height
                                        }
                                        heading
                                        purchasePassLink
                                        websiteLink
                                    }
                                }
                            }
                        }
                    }
                }
                
                
            }
          
        `
        })

        return {
        props: {
            events: data.entry.events
        },
    }
}