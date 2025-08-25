import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { HoverPop, HoverPopContainer } from '../../fuselage/theme/2025/world/components/hover-pop/hover-pop'


export default function AboutPage () {

    return (
        <>
            <Header compact />


            <section className="block">
                <HoverPopContainer>

                    <HoverPop year={`2023`}>
                        <p className='fs-6 lh-1'>Percentage of women attendees:</p>
                        <p className='fs-0 lh-1'>26%</p>
                    </HoverPop>

                    <HoverPop year={`2024`}>
                        <p className='fs-5 lh-1 fw-600'>First Edition with FHSWomenPower</p>
                        <p className='fs-6 lh-1 mt-xxs'>Percentage of women attendees:</p>
                        <p className='fs-0 lh-1'>32%</p>
                        <p>Growth YoY: 23%</p>
                    </HoverPop>

                    <HoverPop year={`2025`}>
                        <p className='fs-1 lh-1'>Stay tuned!</p>
                    </HoverPop>

                </HoverPopContainer>
            </section>
            

            <Footer />
            <LenisScroller />
        </> 
    )

}

AboutPage.theme = 'world-2024'




