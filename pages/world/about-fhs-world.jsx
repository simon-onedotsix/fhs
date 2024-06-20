import { useState } from 'react'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'
import { Billboard } from '../../fuselage/blocks/billboard/billboard'


import CSS from '../../css/app/lead-wall.module.css'



export default function LeadWall () {

    const [ showPopover, setShowPopover ] = useState( false )


    return (
        <>
            <Header compact shim />

            <Billboard 
                hero={{ url: '/assets/site/ae/hero-about-fhs-world.jpg', width: 6048, height: 3422 }}
                height={90}
                tint={50}
                horizontalAlign={'center'}
                verticalAlign={'middle'}
                maxContentWidth={50}
            >
                <div className="maxw-50 formatted c-white center">
                    <div>
                        <h1>About FHS World</h1>

                        <p>FHS World is the hospitality industry&apos;s platform to invest in its future. It is a premium platform for investors, hotel owners and operators in the hospitality industry to connect, network and drive the future of hospitality.</p>
                        
                        <p>The summit connects investment opportunities and projects from the Middle East, Europe, Africa, Asia and the Americas to C-level hospitality decision-makers. Established in 2005, FHS World was formerly known as AHIC.</p>

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
                            <p className='fw-500 c-primary'>Please fill out the form to download the FHS 2023 post-event report.</p>
                            <section className='mt-md'>
                                <HubspotForm portalId='14527187' formId='c2b14f19-e6b6-478f-83ac-e76e9facc2c6' />
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

LeadWall.theme = 'world-2024'


