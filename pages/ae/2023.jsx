import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'

export default function PreLaunch () {
    
    let scroll  = useScroll()
    let largeLeft = useTransform( scroll.scrollYProgress, [0, 1], ["50%", "-20%"])
    let small = useTransform( scroll.scrollYProgress, [0, 1], ["300%", "0%"])
    let largeRight = useTransform( scroll.scrollYProgress, [0, 1], ["0%", "100%"])

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

            <Header compact shim />

            <section className="block bg-theme">

                <div className="container bg-white-90 p-md">
                    <p className='fs-3 fw-300 caps'>25-27 September 2023</p>
                    <p className="fs-xl caps maxw-50 my-sm" style={{ lineHeight: 0.9}}>Focus on Investment</p>
                    <p className='fs-5 fw-300 caps'>Hilton Abu Dhabi Yas Island</p>

                </div>
                
                <div className="container columns-2">

                    <div className="bg-white-90 p-md formatted">
                        <h1>FHS & AHIC 2023</h1>
                        <h3 className='maxw-40'> Join Us As We Transform Yas Island into a Global Epicenter for Hospitality Investment</h3>
                        <p className='fs-6 fw-300 maxw-40 mt-md'>Experience the highly anticipated Future Hospitality Summit 2023 alongside the 19th edition of The Bench&apos;s flagship AHIC - Arabian Hospitality Investment Conference, in Abu Dhabi for the very first time! </p>
                        <p className='fs-6 fw-300 maxw-40'>Experience three extraordinary days of dealmaking and impactful industry discussions at the Yas Island, thanks to our host sponsors - Abu Dhabi Convention & Exhibition Bureau, Miral, and Hilton Abu Dhabi Yas Island. </p>
                        <p className='fs-6 fw-300 maxw-40'>Explore innovative investment trends, groundbreaking insights, and unparalleled networking opportunities in the world of hospitality. </p>
                        <p className='fs-6 fw-300 maxw-40'>Don't miss this unique opportunity to shape the industry's future.</p>
                    </div>

                    <div className="bg-light p-md">
                        <p>content</p>
                    </div>
                </div>

                {/* <div style={{ minHeight: `250vh`}}></div> */}

            </section> 

            {/* <Footer /> */}
        </>
    )
}
PreLaunch.theme = 'ae'