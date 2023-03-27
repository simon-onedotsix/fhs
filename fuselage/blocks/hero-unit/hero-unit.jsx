import Image from 'next/image'

import { Parallax } from "react-scroll-parallax"

import GrifLogo from './img/grif-logo.svg'
import AhicLogo from './img/ahic-logo.svg'
import AviadevLogo from './img/aviadev-logo.svg'
import AhifLogo from './img/ahif-logo.svg'

import CSS from './hero-unit.module.css'

export const HeroUnit = () => {
    return (
        <section className={CSS.layout}>
            <Parallax speed={-30}>
                <div className={`${CSS.hero} ${CSS.desktopOnly}`}>
                    <Image
                        className={CSS.heroDesktop}
                        src='/assets/theme/fhs-theme-2022-bg.jpg'
                        alt=''
                        layout='fill'
                        quality={85}
                        priority
                    />
                </div>
                <div className={`${CSS.hero} ${CSS.mobileOnly}`}>
                    <Image
                        className={CSS.heroMobile}
                        src='/assets/theme/fhs-theme-2022-bg-mob.jpg'
                        alt=""
                        layout='fill'
                        quality={85}
                        priority
                    />
                </div>
            </Parallax>

            <div className={`${CSS.container} c-white`}>
                <Parallax speed={-20}>
                    <ThemeTagline />
                </Parallax>
                <div className={CSS.subBrands}>
                    <GrifLogo className={CSS.grif}/>
                    <AhicLogo  className={CSS.ahic}/>
                    <AhifLogo className={CSS.ahif} />
                </div>
            </div>

        </section>
    )
}

export const ThemeTagline = () => {
    return (
        <>
            <img className={`${CSS.tagline} ${CSS.desktopOnly}`} src='/assets/theme/lead-the-change.png' />
            <img className={`${CSS.tagline} ${CSS.mobileOnly}`} src='/assets/theme/lead-the-change-mob.png' />
        </>
    )
}