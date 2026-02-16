import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { useRouter } from "next/router"


import Script from "next/script"

import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { VideoSection, Section } from '../../fuselage/theme/2026/sa/blocks/section'
import { ThemeGraphic } from '../../fuselage/theme/2026/sa/theme/theme-graphic'




export default function Page() {
    
    const { locale } = useRouter()

    return (
        <div>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Header compact />

            <Section
                backgroundClass={`bg-white`}
                themeGraphics={
                    <ThemeGraphic
                        src={`/assets/theme/sa-2026/fhs-sa-2026-theme.svg`}
                        width={`50vw`}
                        opacity={.4}
                        coordinates={{ top: `-20vh`, left: `-30vh`}}
                    />
                }
            >
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 c-primary">
                            {locale === 'ar' ? `FHS 2026 Prospectus Download` : `FHS 2026 Prospectus Download`}
                        </p>
                    </Fade>
                </div>
                <div className="container pt-lg maxw-60">
                    <HubspotForm portalId={"14527187"} formId={"5284cb07-1bfb-42f0-b36f-2b44568a433a"} />
                </div>
            </Section>

            <Footer />
            <LenisScroller />
        </div>
    )

}

Page.theme = 'sa-2025'


