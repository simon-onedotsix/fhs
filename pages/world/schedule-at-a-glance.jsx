import Head from "next/head"
import Image from "next/image"
import Script from "next/script"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from '../../fuselage/animation/animation'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import FhsWorld2026Schedule from '../../ui/agenda/FhsWorld2026Schedule'




export default function Agenda () {

	return (
		<ReactLenis root>

				<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

			<EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

			
			
			<section className="block">
				<div className="container center">
					<p className="fs-2 fw-600">2026 Schedule at a Glance</p>
				</div>

				<div className="container">
					<FhsWorld2026Schedule />
				</div>
			</section>
			



			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />

		</ReactLenis>
	)
}
Agenda.theme = 'world-2024'

