import { useState } from 'react'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'
import { Billboard } from '../../fuselage/blocks/billboard/billboard'


import CSS from '../../css/app/lead-wall.module.css'



export default function LeadWall () {

    const [ showPopover, setShowPopover ] = useState( false )


    return (
        <>

            <Header compact shim />

            <Billboard 
                hero={{ url: '/assets/site/sa/hero-about-fhs-saudi.jpg', width: 2000, height: 1334 }}
                height={80}
                tint={60}
                horizontalAlign={'center'}
                verticalAlign={'middle'}
                maxContentWidth={50}
            >
                <div className="maxw-50 formatted c-white center">
                    <div>
                        <h1>About FHS Saudi Arabia</h1>

                        <p>Anchored in Riyadh, FHS Saudi Arabia attracts esteemed investors, hotel owners & operators and leading C-level executives from the hospitality industry to focus on the region&apos;s booming hospitality landscape. Featuring insightful panel discussions, informative workshops and unparalleled networking opportunities, the region&apos;s hospitality community convenes to invest in the industry&apos;s future together.</p>
                        
                        <p>FHS Saudi Arabia 2024 was a record-breaking edition, attracting over 1300+ delegates from 40 countries for 3 days of business, growth and networking at the iconic Mandarin Oriental Al Faisaliah Hotel, Riyadh.</p>

                        <p className='fs-5 fw-600 mt-sm'>Find out Who Attends: </p>
                        <p><button className='button fs-6' onClick={() => setShowPopover(true)}>Download 2023 Post-event Report</button></p>
                        <p className='mt-xs'><a className="button fs-6" href="https://www.futurehospitality.com/about-fhs" target="_blank" rel="noreferrer noopener">Our Legacy</a></p>
                    </div>
                </div>

            </Billboard>

            
            <div className={`${CSS.overlay} ${ showPopover && CSS.active }`}>

                <section className={CSS.container}>
                    <button className={CSS.closeButton} onClick={() => setShowPopover(false)}>&times;</button>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content}>
                            <p className='fw-500 c-primary'>Please fill out the form to download the FHS Saudi Arabia 2023 post-event report.</p>
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


