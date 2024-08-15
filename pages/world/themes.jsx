import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from 'next/head'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'


export default function Themes () {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>
        
            <Header compact />

            <section className="block">
                <div className="container">
                    <p>Themes page</p>
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Themes.theme = 'world-2024'