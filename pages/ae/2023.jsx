import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'

export default function PreLaunch () {
    
    let scroll  = useScroll()
    let largeRight = useTransform( scroll.scrollYProgress, [0, 1], ["100%", "-100%"])
    let largeLeft = useTransform( scroll.scrollYProgress, [0, 1], ["100%", "-40%"])
    let small = useTransform( scroll.scrollYProgress, [0, 1], ["500%", "0%"])

    return (
        <>
            <motion.div style={{ y: largeLeft, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/538`, }}>
                <Image src={`/assets/theme/ae-2023/kv-lg-l.png`} width={1680} height={538} />
            </motion.div>
            
            <motion.div style={{ y: largeRight, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/640`, }}>
                <Image src={`/assets/theme/ae-2023/kv-lg-r.png`} width={1680} height={640} />
            </motion.div>
            
            <motion.div style={{ y: small, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/241`, }}>
                <Image src={`/assets/theme/ae-2023/kv-sm.png`} width={1680} height={241} />
            </motion.div>

            <Header compact shim />

            <section className="block bg-theme">

                <div className="container">
                    <p className="fs-0 fw-600 mb-md">2023 Theme</p>
                    <div className="formatted">
                        <h2>Heading level 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatum explicabo eum dolorum, doloremque eius dolore adipisci, architecto corrupti voluptates aut a non nulla esse at vel laboriosam. Praesentium, magnam.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="formatted">
                        <h2>Heading level 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatum explicabo eum dolorum, doloremque eius dolore adipisci, architecto corrupti voluptates aut a non nulla esse at vel laboriosam. Praesentium, magnam.</p>
                    </div>
                </div>

                <div style={{ minHeight: `250vh`}}></div>

            </section> 

            {/* <Footer /> */}
        </>
    )
}
PreLaunch.theme = 'ae'