import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import { LenisScroller } from '../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'

import _ from 'lodash'
import parse from 'html-react-parser'

import { EventsBar } from "../ui/site/eventsbar"
import { Header } from '../ui/site/header'
import { FHS as header } from '../fixtures/nav'
import { Footer } from '../fuselage/theme/2024/global/common/footer/footer'

import { HeroUnitImage } from '../fuselage/theme/2024/world/blocks/hero-unit-image/hero-unit-image'
import { FhsLockup } from "../fuselage/theme/2024/global/components/logos/fhs-brand"
import { Button } from '../fuselage/theme/2024/world/components/button/button'
import HubspotForm from "../fuselage/components/hubspot-form/hubspot-form"

import { UpcomingEvents, EventGroupCard, EventCard } from '../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'

import CSS from '../fuselage/theme/2024/global/css/fhs-club.module.css'




const TIER_DATA = [
    {
        title: 'Member',
        color: 'white',
        badgeUrl: '/assets/theme/fhs-pin-member.png',
        criteria: '<p>Attended at least 2 editions of the recent most 6 editions of FHS</p>',
        benefits: '<ul><li><strong>5% Discount on Standard Tickets:</strong> Enjoy a discount on your tickets to future FHS editions.</li><li><strong>5% Discount on Colleague/Friend Tickets:</strong> Share the experience with your colleagues and friends at a reduced price.</li><li><strong>Exclusive Access to Industry Reports and Event Content:</strong> Get early access to valuable industry insights from our partners and content from recent events.</li></ul>'
    },
    {
        title: 'Silver',
        color: '#9F9F9F',
        badgeUrl: '/assets/theme/fhs-pin-silver.png',
        criteria: '<p>Attended 3 or more editions of the recent most 6 editions of FHS</p>',
        benefits: '<ul><li><strong>7% Discount on Standard Tickets:</strong> Greater savings on your tickets to FHS events.</li><li><strong>5% Discount on Colleague/Friend Tickets:</strong> Continued discount for your colleagues and friends.</li><li><strong>Exclusive Access to Industry Reports and Event Content:</strong> Stay ahead with priority access to exclusive content.</li><li><strong>Loyalty Pins/Badges:</strong> Receive loyalty pins or badges on-site.</li><li><strong>Hotel/Restaurant Vouchers:</strong> Free hotel nights/restaurant/activity vouchers from our sponsors/partners.</li><li><strong>Priority Access to Site Tours and On-Site Activities:</strong> Enjoy priority booking for site tours and other activities.</li><li><strong>Access to Networking Receptions:</strong> Join exclusive networking receptions at FHS and other Bench conferences.</li></ul>'
    },
    {
        title: 'Gold',
        color: '#DFA258',
        badgeUrl: '/assets/theme/fhs-pin-gold.png',
        criteria: '<p>Attended 5 or more editions of FHS</p>',
        benefits: '<ul><li><strong>10% Discount on Delegate Tickets:</strong> Maximize your savings with the highest discount on event tickets.</li><li><strong>10% Discount on Colleague/Friend Tickets:</strong> Significant savings for your colleagues and friends.</li><li><strong>Exclusive Access to Industry Reports and Event Content:</strong> Continue to receive exclusive industry insights and content.</li><li><strong>Loyalty Pins/Badges + Event Preparation Kits:</strong> Get special loyalty pins or badges along with event preparation kits provided on-site.</li><li><strong>Hotel/Restaurant Vouchers:</strong> Free hotel nights/restaurant/activity vouchers from our sponsors/partners.</li><li><strong>Featured on FHS Website:</strong> Prominent recognition on our website.</li><li><strong>Priority Access to Site Tours and On-Site Activities:</strong> Maintain priority booking status for all activities.</li><li><strong>Access to Networking Receptions:</strong> Full access to all networking receptions at FHS and other Bench conferences.</li></ul>'
    }
]

const FAQ_DATA = [
    {
        q: "What is the FHS Club?",
        a: "The FHS Club is a loyalty programme designed to reward attendees of the Future Hospitality Summit with exclusive benefits based on their participation in the recent most 6 editions."
    },
    {
        q: "How do I become a member of the FHS Club?",
        a: "To become a member, you must have attended at least two editions of the Future Hospitality Summit. Membership tiers are then assigned based on the total number of editions you have attended."
    },
    {
        q: "What are the different membership tiers?",
        a: "There are three tiers: Member, Silver, and Gold, each offering different levels of benefits. Tiers are determined by the number of FHS editions attended."
    },
    {
        q: "How can I check my membership tier?",
        a: "You can check your membership status by submitting your email address in the form shared above."
    },
    {
        q: "Can my membership tier change?",
        a: "Yes, your membership tier can change as you attend more FHS editions. The more editions you attend, the higher the tier and the greater the benefits."
    },
    {
        q: "What benefits are available to Gold Tier members?",
        a: "Gold Tier members enjoy the highest level of benefits, including significant ticket discounts, hotel/ restaurant vouchers, exclusive access to content, priority event access, and media opportunities."
    },
    {
        q: "How long do my benefits last?",
        a: "Membership tiers are updated at every FHS event to include recent most 6 editions. You can renew or upgrade your tier by attending more FHS editions."
    }
]

const TERMS_DATA = [
    {
        title: "Membership Eligibility:",
        body:"<p>The FHS Club is open to all individuals who have attended at least two editions of the Future Hospitality Summit. Membership is automatically assigned based on edition attendance.Tier Qualification:</p><ul><li>Member Tier: Attend at least 2 editions of the recent most 6 editions of FHS.</li><li>Silver Tier: Attend 3 or more editions of the recent most 6 editions of FHS.</li><li>Gold Tier: Attend 5 or more editions of the recent most 6 editions of FHS.</li></ul>"
    },
    {
        title: "Membership Validity:",
        body:"<p>Membership and associated benefits are valid until the next edition of FHS event and will be updated biannually.</p>"
    },
    {
        title: "Benefit Redemption:",
        body:"<p>Benefits such as discounts and vouchers are non-transferable and can only be used by the member. Benefits must be redeemed within the specified time frames.</p>"
    },
    {
        title: "Changes to the Program:",
        body:"<p>FHS reserves the right to modify or terminate the FHS Club, including its benefits and terms, at any time without prior notice.</p>"
    },
    {
        title: "Privacy Policy:",
        body:"<p>FHS Club members&apos; personal information will be handled according to the FHS privacy policy, ensuring the security and confidentiality of all data.</p>"
    },
    {
        title: "Contact Information:",
        body:"<p>For any questions or support, members can contact the FHS Club team at <a href='hello@thebench.com'>hello@thebench.com</a></p>"
    }
]







export default function Club ({ events }) {



    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>
        

            <EventsBar site={'/'} />
            <Header
                site={``}
                handle={``}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
            />

            <div className="bg-pattern-primary-50">

                <HeroUnitImage imageUrl={'/assets/site/ae/hero-about-fhs-world.jpg'}>
                    <p className='fs-1 fw-600 center'>Welcome to the</p>
                    <div className="pt-xs" style={{ margin: '0 auto'}}>
                        <FhsLockup 
                            inverse
                            sectorLabel={"Club"} 
                            sectorColor={"#6E3FA1"} 
                            topColor={"#9A72AB"}
                        />
                    </div>
                    <p className='fs-5 maxw-55 center mx-auto mt-md'>Be part of our exclusive community, reserved for those who shape the future of hospitality. As one of our most dedicated attendees, your membership tier is now recognised both as an individual and as part of your organisation, rewarding your personal commitment as well as your company&apos;s long-standing relationship with FHS. Gain access to exclusive privileges, early VIP experiences, and once-in-a-lifetime opportunities that only the inner circle of FHS can enjoy.</p>
                </HeroUnitImage>


                <section className="block pt-0">
                    <div className="container center formatted">
                        <p className='fs-2 fw-600 center'>Tiers</p>
                        <p className='fs-6 maxw-50 mx-auto mt-md'>Our loyalty programme is divided into three distinct tiers, each offering a range of exclusive benefits.</p>
                        <p>Your tier is determined in two ways</p>
                        <p> &bull; <strong>Personal attendance</strong> across the most recent 9 editions of FHS <br />
                            &bull; <strong>Company&apos;s cumulative attendance</strong> across all representatives.</p>
                        <p>You are automatically assigned the higher of the two tiers, so your organisation&apos;s participation works in your favour even if you are attending FHS for the first time.</p>

                        {/* <div className={CSS.eligibilityTable}>
                            <span>FHS Africa (2024, 2025, 2026)</span>
                            <span>FHS Saudi Arabia (2023, 2024, 2025)</span>
                            <span>FHS World (2023, 2024, 2025)</span>
                        </div>
                        <p>Please note that membership status will reset at every FHS event to include the recent most 6 editions.</p> */}
                    </div>

                    <div className="container columns-1 gap-sm">
                        {
                            TIER_DATA.map( (tier, index) => (
                                <Tier 
                                    key={index} 
                                    title={tier.title} 
                                    color={tier.color} 
                                    badgeUrl={tier.badgeUrl} 
                                    criteria={tier.criteria} 
                                    benefits={tier.benefits} 
                                />
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
                                <p className="balance">Attend two or more of the recent six editions of Future Hospitality Summit (FHS Saudi Arabia, FHS  World, FHS  Africa) to start earning your place in the FHS Club.</p>
                            </div>
                            <div className={CSS.step}>
                                <p className={CSS.bigNumber}>2</p>
                                <p className="balance">Your tier is automatically assigned based on your attendance record or your company&apos;s cumulative attendance, whichever is higher. Keep attending FHS editions to move up the tiers and unlock more benefits.</p>
                            </div>
                            <div className={CSS.step}>
                                <p className={CSS.bigNumber}>3</p>
                                <p className="balance">Check your membership status below and learn about exclusive benefits. Memership status will reset at every FHS event.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="formatted center balance">
                            <p className="fs-5 fw-600">How does company-based membership work?</p>
                            <p>In addition to individual attendance, we recognise the commitment of organisations that have consistently sent representatives to FHS. If your company qualifies for a higher tier than your personal record, you are automatically elevated to that tier.</p>
                        </div>
                    </div>

                    <div className="container maxw-30 pt-md">
                        <HubspotForm portalId={"14527187"} formId={"975e52f2-15f8-4f34-bfd8-b251c814c288"} />
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
                    <div className="container maxw-45 columns-1 gap-sm">
                        {
                            FAQ_DATA.map( (set, index) => (
                                <div key={index} className="formatted">
                                    <p className="fs-6 fw-600 c-accent">{set.q}</p>
                                    <p>{set.a}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
                
                
                
                <section className="block bg-dark">
                    <div className="container">
                        <p className='fs-2 fw-600 center'>Terms and Conditions</p>
                    </div>
                    <div className="container maxw-45 columns-1 gap-sm">
                        {
                            TERMS_DATA.map( (set, index) => (
                                <div key={index} className="formatted">
                                    <p className="fs-6 fw-600 c-secondary">{set.title}</p>
                                    {parse(set.body)}
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>



            <Footer />
            <LenisScroller />
        </>
    )
}

Club.theme = 'global-2024'




// COMPONENTS –––––––––––––––––––––––––––––––––––––––––


const Tier = ({ color, badgeUrl, title, criteria, benefits }) => {
    return (
        <div className={CSS.tier}>
            <aside>
                <div className={CSS.badge}>
                    <img src={badgeUrl} alt="" />
                </div>
                <p className={CSS.tierTitle} style={{ background: color ? color : 'white' }}>{ title }</p>

                {
                    title === "Gold" &&
                    <div className="mt-sm center">
                        <a 
                            className="uLink"
                            href={'https://14527187.fs1.hubspotusercontent-na1.net/hubfs/14527187/FHS%20Club/Gold%20Members.pdf'} 
                            target={'_blank'}
                            rel="noreferrer"
                        >View Gold Members</a>
                    </div>
                }
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