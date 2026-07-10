import { useState } from 'react'
import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import Script from 'next/script'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactFigure } from '../../fuselage/theme/2025/world/blocks/impact-grid/impact-grid'
import { BarChart, Field } from '../../fuselage/theme/2025/world/components/bar-chart/bar-chart'
import { GlobalMap } from '../../fuselage/theme/2025/world/components/global-map/global-map'
import { Quote } from '../../fuselage/theme/2024/world/components/quote/quote'



import CSS from '../../css/app/lead-wall.module.css'



const INDUSTRY_DATA = [
    {
        label: 'Hotel Operator/Management',
        value: 22
    },
    {
        label: 'Investor (Equity)/Owner',
        value: 21
    },
    {
        label: 'Consultant/Advisor',
        value: 13
    },
    {
        label: 'Architecture/Design',
        value: 10
    },
    {
        label: 'Hotel Developer/Builder',
        value: 9
    },
    {
        label: 'Government/Tourism Official',
        value: 7
    },
    {
        label: 'Technology/Innovation',
        value: 6
    },
    {
        label: 'Real Estate Broker/Surveyor',
        value: 3
    },
    {
        label: 'Other',
        value: 10
    },
    
]

const SENIORITY_DATA = [
    {
        label: 'Board Level / Owner / Partner / Chair / Founder',
        value: 21
    },
    {
        label: 'C-level',
        value: 18
    },
    {
        label: 'Director / Middle Management',
        value: 21
    },
    {
        label: 'Manager',
        value: 22
    },
    {
        label: 'VP / Head / Principal / Advisor',
        value: 17
    },
]




export default function AboutPage () {

    const [ showPopover, setShowPopover ] = useState( false )


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


            <PageHeroImage hero={{ url: '/assets/site/ae/hero-about-fhs-world.jpg', width: 6048, height: 3422 }} >
                <div className="container maxw-50 p-md formatted c-white center">
                    <h1>About FHS World</h1>

                    <p className='fs-4'>FHS World is the hospitality industry&apos;s platform to invest in its future.</p>

                    <p className='mt-sm'>It is a premium platform for investors, hotel owners and operators in the hospitality industry to connect, network and drive the future of hospitality.</p>
                    
                    <p>The summit connects investment opportunities and projects from the Middle East, Europe, Africa, Asia and the Americas to C-level hospitality decision-makers. Established in 2005, FHS World was formerly known as AHIC.</p>

                    <p className='mt-sm'><a className="button fs-6" href="https://www.futurehospitality.com/about-fhs" target="_blank" rel="noreferrer noopener">Our Legacy</a></p>
                </div>
            </PageHeroImage>


            <section className="block pt-0">
                <div className="container formatted center">
                    <p className='fs-1 fw-600'>Who Attends</p>
                    <ImpactFigure figure={1581} impact={'attendees from across the globe'}  />
                    <p className='mt-sm'><button className='button fs-6' onClick={() => setShowPopover(true)}>Download 2025 Post-event Report</button></p>
                </div>
            </section>


            <section className="block bg-dark">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>By Industry</p>
                </div>

                <div className="container maxw-50">
                    <BarChart>
                        {
                            INDUSTRY_DATA &&
                            INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 3, max: 22 }} />)
                        }

                    </BarChart>
                </div>
            </section>


            <section className="block bg-primary o-hidden">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>Job Seniority</p>
                </div>

                <div className="container maxw-50">
                    <BarChart>
                        {
                            SENIORITY_DATA &&
                            SENIORITY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 5, max: 25 }} />)
                        }

                    </BarChart>
                </div>

                <div className="container pt-lg maxw-30">
                    <Quote quote={'Great engagement with lots of key decision makers under one roof.'} name={'Rafik Kamel'} title={'Vice President'} company={'Abu Dhabi Capital Group'} />
                </div>
            </section>


            <section className="block bg-dark">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>By Geography</p>
                </div>

                <div className="container center">
                    <GlobalMap />
                </div>
            </section>


            {/* POP-OVER */}
            
            <div className={`${CSS.overlay} ${ showPopover && CSS.active }`}>
                <section className={CSS.container}>
                    <button className={CSS.closeButton} onClick={() => setShowPopover(false)}>&times;</button>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <p className='fw-500 c-primary'>Please fill out the form to download the FHS 2025 post-event report.</p>
                            <section className='mt-md'>
                                <HubspotForm portalId='14527187' formId='e2919e90-4702-498e-8fda-35724db51ca2' />
                            </section>
                        </div>
                    </div>
                </section>
            </div>
            

            <Footer />
            <LenisScroller />
        </> 
    )

}

AboutPage.theme = 'world-2024'




