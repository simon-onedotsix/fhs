import { useState } from 'react'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactFigure } from '../../fuselage/theme/2025/world/blocks/impact-grid/impact-grid'
import { BarChart, Field } from '../../fuselage/theme/2025/sa/components/bar-chart/bar-chart'
import { GlobalMap } from '../../fuselage/theme/2025/sa/components/global-map/global-map'
import { Quote } from '../../fuselage/theme/2025/sa/components/quote/quote'


import CSS from '../../css/app/lead-wall.module.css'



const INDUSTRY_DATA = [
    {
        label: 'Hotel/Resort Operator',
        value: 20.4
    },
    {
        label: 'Tourism / Government Official',
        value: 12
    },
    {
        label: 'Consultant / Advisor',
        value: 11.2
    },
    {
        label: 'Hotel Developer / Builder',
        value: 7.5
    },
    {
        label: 'Architect / Designer',
        value: 6.4
    },
    {
        label: 'Investor (Equity) / Owner',
        value: 6
    },
    {
        label: 'Media',
        value: 5.5
    },
    {
        label: 'Asset Managers',
        value: 5.6
    },
    {
        label: 'F&B Investor / Operator',
        value: 5.6
    },
    {
        label: 'Supplier',
        value: 2.6
    },
    {
        label: 'Real Estate Agent / Surveyor',
        value: 2.2
    },
    {
        label: 'Lawyer',
        value: 1.9
    },
    {
        label: 'Bank / Lender',
        value: 0.9
    },
    {
        label: 'Student',
        value: 0.3
    },
    {
        label: 'Education',
        value: 0.1
    },
    {
        label: 'Other',
        value: 9.9
    },
]

const LEVEL_DATA = [
    {
        label: 'Director / Middle Management',
        value: 23
    },
    {
        label: 'Manager',
        value: 18
    },
    {
        label: 'Board Level / Owner / Partner / Chair / Founder',
        value: 14
    },
    {
        label: 'C-level',
        value: 26
    },
    {
        label: 'VP / Head / Principal / Advisor',
        value: 17
    },
    {
        label: 'Other',
        value: 2
    },
]




export default function LeadWall () {

    const [ showPopover, setShowPopover ] = useState( false )


    return (
        <>

            <Header compact />

            <div className="bg-primary">
                <PageHeroImage hero={{ url: '/assets/img/sa/about/hero-about.jpg', width: 2000, height: 1334 }} >
                    <div className="container maxw-50 pb-md formatted c-white center">
                        <h1>About FHS Saudi Arabia</h1>

                        <p className='mt-sm'>Anchored in Riyadh, FHS Saudi Arabia attracts esteemed investors, hotel owners &amp; operators and leading C-level executives from the hospitality industry to focus on the region&apos;s booming hospitality landscape. Featuring insightful panel discussions, informative workshops and unparalleled networking opportunities, the region&apos;s hospitality community convenes to invest in the industry&apos;s future together.</p>
                        
                        <p>FHS Saudi Arabia 2024 was a record-breaking edition, attracting over 1300+ delegates from 40 countries for 3 days of business, growth and networking at the iconic Mandarin Oriental Al Faisaliah Hotel, Riyadh.</p>

                        <p className='mt-sm'><a className="button fs-6" href="https://www.futurehospitality.com/about-fhs" target="_blank" rel="noreferrer noopener">Our Legacy</a></p>
                    </div>
                </PageHeroImage>


                <section className="block pt-0" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="container formatted center">
                        <p className='fs-1 fw-600'>Who Attends</p>
                        <ImpactFigure figure={1329} impact={'attendees from across the globe'}  />
                        <p className='mt-sm'><button className='button fs-6' onClick={() => setShowPopover(true)}>Download 2024 Post-event Report</button></p>
                    </div>
                </section>
            </div>


            <section className="block bg-secondary">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>By Industry</p>
                </div>

                <div className="container maxw-50">
                    <BarChart>
                        {
                            INDUSTRY_DATA &&
                            INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0.3, max: 18 }} />)
                        }

                    </BarChart>
                </div>
            </section>


            <section className="block bg-theme">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>Job Seniority</p>
                </div>

                <div className="container maxw-50">
                    <BarChart>
                        {
                            LEVEL_DATA &&
                            LEVEL_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 5, max: 25 }} />)
                        }

                    </BarChart>
                </div>

                <div className="container pt-lg maxw-40">
                    <Quote quote={`The summit provided unparalleled networking opportunities and deep insights from panel discussions, shedding light on Saudi Arabia's vibrant tourism sector.`} name={'Falih M. Hajaj'} title={'CEO'} company={'Tashyid Urban Development'} />
                </div>
            </section>


            <section className="block bg-secondary">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>By Geography</p>
                </div>

                <div className="container center">
                    <GlobalMap />
                </div>
            </section>


            
            <div className={`${CSS.overlay} ${ showPopover && CSS.active }`}>

                <section className={CSS.container}>
                    <button className={CSS.closeButton} onClick={() => setShowPopover(false)}>&times;</button>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <p className='fw-500 c-primary'>Please fill out the form to download the FHS Saudi Arabia 2024 post-event report.</p>
                            <section className='mt-md'>
                                <HubspotForm portalId='14527187' formId='0113cdf5-eada-4d6b-83b5-1e5054fdc7e2' />
                            </section>
                        </div>
                    </div>
                </section>

            </div>
            

            <Footer />
            {/* <LenisScroller /> */}
        </>
    )

}

LeadWall.theme = 'sa-2025'


