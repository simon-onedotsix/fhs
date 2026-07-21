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

import { StickySidebar } from '../../fuselage/theme/2024/global/components/sticky-sidebar/sticky-sidebar'
import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"

import FhsWorld2026Schedule from '../../ui/agenda/FhsWorld2026Schedule'



export default function Agenda () {

	return (
		<ReactLenis root>

				<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
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





export const SessionGroup = ({ location, children, trackID }) => {

	if (!children) return
	
	const t = tracks.find( track => track.id === trackID )

	return (
		<div className={CSS.sessionGroupContainer} style={{ backgroundColor: t?.color || 'var(--primary)' }}>
			{
				location?.title &&
				<p className={`${CSS.sessionGroupHeader} | fs-5`}>{ location.title }</p>
			}

			<div className={CSS.sessionGroup}>
				{ children }
			</div>
		</div> 
	)
}

export const Session = ({ startTime, endTime, title, trackID, children }) => {

	const t = tracks.find( track => track.id === trackID )

	return (
		<Pop>
			<div className={CSS.sessionsWrapper}>
				<div className={CSS.session}>
					<div className={CSS.sessionHeader}>
						<Duration startTime={startTime} endTime={endTime} />
						{/* { trackID && <Track trackID={trackID} />} */}
					</div>
					
					<div className={CSS.sessionContent}>
						<p className={`${CSS.sessionTitle} | fs-5 fw-500 lh-1-1 c-primary`}>
							{ title }
						</p>
						{
							children &&
							<div className="formatted">{ children }</div>
						}
					</div>
				</div>
			</div>
		</Pop>
	)
}

export const Timeslot = ({ startTime, endTime, trackID, children }) => {

	const t = tracks.find( track => track.id === trackID )

	return (
		<Pop>
			<div className={CSS.timeslotWrapper}>
				{
					startTime ?
						<div className={CSS.timeslotHeader}>
							<Duration startTime={startTime} endTime={endTime} />
							{ trackID && <Track trackID={trackID} />}
						</div>
					: null
				}
				{ children }
			</div>
		</Pop>
	)
}

export const Feature = ({ children }) => {
	return (
		<div className={CSS.featureWrapper}>
			{ children }
		</div>
	)
}

export const Duration = ({ startTime, endTime }) => {

	const convertSeconds = (seconds) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
	
		const hourString = hours > 0 ? `${hours}h` : ''
		const minuteString = minutes > 0 ? `${minutes}m` : ''
	
		if ( hours > 0 ) {
			return `${hourString} ${ minutes > 0 ? minuteString : ''}`

		} else if ( !hours && minutes > 0 ) {
			return `${minuteString}`

		}
	
		return
	}


	return (
		<>
			{ startTime && format( new Date(startTime), "HH:mm" ) } { startTime && endTime && "-"} { endTime && format( new Date(endTime), "HH:mm" ) }
			{/* {
				startTime &&  endTime ?
				<span>&ensp;<StopwatchIcon fill={'white'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
				: null
			} */}
		</>
	)
}

export const Track = ({ trackID }) => {

	const t = tracks.find( track => track.id === trackID )

	if ( !t ) return
	
	return (
		<p className={CSS.tag}><TagIcon fill={'white'} />{ t.title }</p>
	)
}

export const Theme = ({ children }) => {
	return (
		<p className={CSS.theme}>THEME: { children }</p>
	)
}