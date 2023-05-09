import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'

import { Container } from '../../fuselage/theme/2023/ae/launch-page'
import { LogoBubble, LogoBubbleGrid, HostSponsorLogo, HostSponsorGrid } from '../../fuselage/theme/2023/ae/launch-page'
import { FhsLogo } from '../../fuselage/components/fhs-logo/fhs-logo'
import { AhicLogo } from '../../fuselage/components/ahic-logo/ahic-logo'
import { GrifLogo } from '../../fuselage/components/grif-logo/grif-logo'
import { PartnerLogo } from '../../fuselage/components/partner-logo/partner-logo'

export default function PreLaunch () {
    
    let scroll  = useScroll()
    
    let largeLeft = useTransform( scroll.scrollYProgress, [0, 1], ["-15vh", "50vh"])
    let small = useTransform( scroll.scrollYProgress, [0, 1], ["80vh", "-20vh"])
    let largeRight = useTransform( scroll.scrollYProgress, [0, 1], ["30vh", "80vh"])
    let large = useTransform( scroll.scrollYProgress, [0, 1], ["150vh", "10vh"])

    return (
        <>
        

            <motion.div style={{ y: largeLeft, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/538`}}>
                <Image src={`/assets/theme/ae-2023/kv-lg-l.png`} width={3360} height={1076} />
            </motion.div>
            
            <motion.div style={{ y: largeRight, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/640`}}>
                <Image src={`/assets/theme/ae-2023/kv-lg-r.png`} width={3360} height={1280} />
            </motion.div>
            
            <motion.div style={{ y: small, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/241`}}>
                <Image src={`/assets/theme/ae-2023/kv-sm.png`} width={3360} height={482} />
            </motion.div>
            
            <motion.div style={{ y: large, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/641`}}>
                <Image src={`/assets/theme/ae-2023/kv-lg.png`} width={3360} height={1282} />
            </motion.div>





            <Header compact shim theme={{ 
                primary: 'var(--primary-ae)', 
                secondary: 'var(--secondary-ae)', 
                text: 'var(--primary-ae)',
                buttons: 'var(--primary-ae)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary-ae)',
            }} />

            <section className="block flush bg-theme">

                <Container decal={`bg-white-90 p-md`}>
                    <p className='fs-3 fw-300 caps'>25-27 September 2023</p>
                    <p className="fs-xl caps maxw-50 my-sm" style={{ lineHeight: 0.9}}>Focus on Investment</p>
                    <p className='fs-5 fw-300 caps mb-lg'>Hilton Abu Dhabi Yas Island</p>
                    
                    <LogoBubbleGrid>
                        <LogoBubble><FhsLogo primary={`white`} secondary={`white`} /></LogoBubble>
                        <LogoBubble><AhicLogo primary={`white`} secondary={`white`} /></LogoBubble>
                        <LogoBubble><GrifLogo primary={`white`} secondary={`white`}  /></LogoBubble>
                    </LogoBubbleGrid>
                </Container>

                
                <Container flushRight decal={`bg-white-90 p-md`}>
                    <div className="formatted">
                        <h1 className='lh-1'>FHS & AHIC 2023</h1>
                        <h3 className='maxw-40'> Join Us As We Transform Yas Island into a Global Epicenter for Hospitality Investment</h3>
                        <p className='fs-6 fw-300 maxw-40 mt-md'>Experience the highly anticipated Future Hospitality Summit 2023 alongside the 19th edition of The Bench&apos;s flagship AHIC - Arabian Hospitality Investment Conference, in Abu Dhabi for the very first time! </p>
                        <p className='fs-6 fw-300 maxw-40'>Experience three extraordinary days of dealmaking and impactful industry discussions at the Yas Island, thanks to our host sponsors - Abu Dhabi Convention & Exhibition Bureau, Miral, and Hilton Abu Dhabi Yas Island. </p>
                        <p className='fs-6 fw-300 maxw-40'>Explore innovative investment trends, groundbreaking insights, and unparalleled networking opportunities in the world of hospitality. </p>
                        <p className='fs-6 fw-300 maxw-40'>Don&apos;t miss this unique opportunity to shape the industry&apos;s future.</p>
                    </div>

                    <div className="mt-md bt-1 bc-grey-10 pt-sm">
                        <p className='fw-600 caps mb-sm'>Host Sponsors</p>

                        <HostSponsorGrid>
                            <HostSponsorLogo hero={{url: `/assets/site/ae/abu-dhabi.png`}}/>
                            <HostSponsorLogo hero={{url: `/assets/site/ae/miral.png`}}/>
                            <HostSponsorLogo hero={{url: `/assets/site/ae/hilton.png`}}/>
                        </HostSponsorGrid>
                    </div>
                </Container>


            </section> 

            <Footer theme={{ footerBg: 'bg-white-90' }} />


            
        </>
    )
}
PreLaunch.theme = 'ae'