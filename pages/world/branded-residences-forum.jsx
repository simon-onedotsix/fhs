import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitVideo } from "../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"


import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"


export default function Page () {
    return (
        <>
            <Header overlaid inverse />

            <HeroUnitVideo video={'/assets/video/fhs-2024-world-beanded-residences-opt.mp4'} poster={'/assets/video/fhs-2024-world-beanded-residences-opt.jpg'}>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Branded Residences Forum
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 fw-300 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    Co-located with <strong>FHS World</strong> and brought to you by <strong>Accor One Living</strong>, this <strong>exclusive one-day forum</strong> will explore the burgeoning sector of Branded Residences holistically.
                </motion.p>

                <Fade>
                    <div className="mt-md center">
                        <Pop inline>
                            <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Your Pass</Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>


            <section className="block">
                <div className="container center maxw-50">
                    <p className="fs-5 fw-300">The branded residences sector is experiencing a period of unprecedented growth, globally. Since 2024, the sector has expanded by 176%, with 687 projects now open and operating worldwide.</p>
                </div>
            </section>
            
            
            <section className="block">
                <div className="container center maxw-50">
                    <p className="fs-5 fw-300">Accor has been at the forefront of driving the branded residences sector, showcasing an impressive portfolio that spans ultra-prime urban locations and the most sought-after resort destinations. These exclusive homes are natural extensions of Accor's iconic luxury, premium, and lifestyle brands. Each property is meticulously designed and serviced to meet the demanding standards of the brand it represents, epitomising excellence in luxury living.</p>
                </div>
            </section>
            
            
            <section className="block">
                <div className="container center">
                    <Pop inline>
                        <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Your Pass</Button>
                    </Pop>
                </div>
            </section>

            <Footer />
        </>
    )
}

Page.theme = 'world-2024'