import Image from 'next/image'

import Link from 'next/link'
import { Parallax } from "react-scroll-parallax"

import CSS from './hero-unit-post-event.module.css'

export const HeroUnitPostEvent = () => {
    return (
        <section className={`${CSS.layout} bg-theme`}>

            <div className={`${CSS.container} c-white`}>

                <section className={CSS.message}>
                    <p className='fs-1 fw-600'>FHS 2023 Dates &amp; Venue Confirmed:</p>
                    <p className="fs-3 mt-xs">25-27 September at the Hilton Abu Dhabi Yas&nbsp;Island.</p>
                    <p className='fs-5 fw-600 mt-sm mb-xs'>Host Sponsors</p>

                    <div className={CSS.logoGrid}>
                        <div>
                            <Image src={`/assets/img/homepage/post-event/adt.png`} width={1400} height={357} layout={`responsive`} />
                        </div>
                        <div>
                            <Image src={`/assets/img/homepage/post-event/miral-updated.png`} width={548} height={802} layout={`responsive`} />
                        </div>
                        <div>
                            <Image src={`/assets/img/homepage/post-event/hilton-updated.png`} width={1229} height={953} layout={`responsive`} />
                        </div>
                    </div>
                </section>

                <section className={CSS.hero}>
                    <Image src={`/assets/img/homepage/post-event/fhs22-collage.jpg`} width={2000} height={1600} />
                </section>

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