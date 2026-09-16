import { useState, useRef, useEffect } from "react"

import Head from "next/head"
import Script from "next/script"
import { useRouter } from "next/router"
import Link from "next/link"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"


import { Modal } from "../../fuselage/theme/2024/world/components/modal/modal"
import { Sidebar } from "../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../fuselage/components/avatar/avatar'


import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css'

import { 
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem as MenuItemInner,
	SubMenu as SubMenuInner 
} from '@szhsin/react-menu'
import DROPDOWN from '../../css/app/dropdown-world-2024.module.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import {Session} from '../../ui/agenda/session'
import {SessionStartups} from '../../ui/agenda/session-startups'

import CSS from '../../css/app/agenda-world-2024.module.css'
import CSS2 from '../../ui/agenda/agenda.module.css'


const CUSTOM_PLACES_ORDER = [
	'Summit Stage',
	'Future Stage (Murjan A)',
	'Workshop Room (Murjan B)',
	'Jumeirah Racquets - Al Qasr',
	'J Club Jumeirah Beach Hotel'
]
const CUSTOM_SESSION_CONTENT = [
	{
		ref: "wellness partner",
		ids: ["UGxhbm5pbmdfNDU5NzU5MA==", "UGxhbm5pbmdfNDU5NzU5NA=="],
		content: (
			<div key={'cc1'}>
				<p className="fs-sm caps mb-xxs">WELLNESS PARTNER</p>
				<Link href={`/world/partners/RXhoaWJpdG9yXzI1NDczMDE=`}>
					<a style={{ display: `inline-block`, backgroundColor: `white`, padding: 10, borderRadius: 5 }}>
						<img src="/assets/img/world/pages/partners/technogym.png" alt="" width={100} />
					</a>
				</Link>
			</div>
		)
	},
	{
		ref: "speed networking",
		ids: ["UGxhbm5pbmdfNDQ0NTg3Mg==", "UGxhbm5pbmdfNDQ0NTkwMQ==", "UGxhbm5pbmdfNDUzMDc3Nw=="],
		content: (
			<div key={'cc1'}>
				<p className="fs-sm caps mb-xxs">SPEED NETWORKING PARTNER</p>
				<Link href={`/world/partners/RXhoaWJpdG9yXzIzODA4MjY=`}>
					<a style={{ display: `inline-block`, backgroundColor: `white`, padding: 10, borderRadius: 5 }}>
						<img src="/assets/img/world/pages/partners/FSK-Logo-Horizontal.png" alt="" width={100} />
					</a>
				</Link>
			</div>
		)
	},
	{
		ref: "networking reception",
		ids: ["UGxhbm5pbmdfNDQ2MzI4Mw=="],
		content: (
			<div key={'cc2'} className="columns-3 gap-xs">
				<img src="/assets/img/world/pages/agenda/networking-01.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/networking-02.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/networking-03.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
			</div>
		)
	},
	{
		ref: "padel",
		ids: ["UGxhbm5pbmdfNDU4NDEyMQ=="],
		content: (
			<div key={'cc2'} className="columns-3 gap-xs">
				<img src="/assets/img/world/pages/agenda/padel-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/padel-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/padel-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
			</div>
		)
	},
	{
		ref: "beach pilates",
		ids: ["UGxhbm5pbmdfNDU4NDEyMw=="],
		content: (
			<div key={'cc2'} className="columns-3 gap-xs">
				<img src="/assets/img/world/pages/agenda/beach-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/beach-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/beach-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
			</div>
		)
	},
	{
		ref: "networking reception",
		ids: ["UGxhbm5pbmdfNDQ2MzI4NA=="],
		content: (
			<div key={'cc2'} className="columns-3 gap-xs">
				<img src="/assets/img/world/pages/agenda/mcgettigans-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/mcgettigans-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/mcgettigans-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
			</div>
		)
	},
	{
		ref: "breathwork",
		ids: ["UGxhbm5pbmdfNDU4NDEyNQ=="],
		content: (
			<div key={'cc2'} className="columns-3 gap-xs">
				<img src="/assets/img/world/pages/agenda/breathwork-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/breathwork-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
				<img src="/assets/img/world/pages/agenda/breathwork-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
			</div>
		)
	},
]

export default function Agenda({ sessions }) {
	

	const lenis = useLenis()
	const router = useRouter()


	const [selectedDay, setSelectedDay] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedPlace, setSelectedPlace] = useState(null)
	
	const [ filtersActive, setFiltersActive ] = useState (false)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: '', speakingOn: null })
	
	const [ searchActive, setSearchActive ] = useState (false)
	const [ search, setSearch ] = useState ('')



	useEffect(() => {
		// if session param is provided, scroll to session
		if ( lenis && router.isReady && router.query.session ) {
			lenis.scrollTo(`#${router.query.session}`, { duration: 1 })
			router.replace({
				pathname: router.pathname,
				search: new URLSearchParams(router.search).delete('session'),
			})
		}
		
		// if track param is provided, set topic
		if ( router.isReady && router.query.track ) {
			setselectedCategory(router.query.track)
			router.replace({
				pathname: router.pathname,
				search: new URLSearchParams(router.search).delete('track'),
			})
		}
	})


	// utilties menu pinning
	const [utilties, utiltiesInView] = useInView({
		threshold: 1,
		rootMargin: '-30px 0px 0px 0px'
	})
	const [toggles, togglesInView] = useInView({
		threshold: 1,
		rootMargin: '-70px 0px 0px 0px'
	})


	// FILTERS

	const resetFilters = () => {
		setSelectedDay(null)
		setSelectedLocation(null)
		setSelectedTopic(null)
		locationSelect.current.value = 'All locations'
	}
	


	// dropdown ui classes
	const menuClassName = ({ state }) => (
		state === "opening"
		? DROPDOWN.menuOpening
		: state === "closing"
		? DROPDOWN.menuClosing
		: DROPDOWN.menu
	)
	const menuItemClassName = ({ hover, disabled }) => ( 
		disabled
		? DROPDOWN.menuItemDisabled
		: hover
		? DROPDOWN.menuItemHover
		: DROPDOWN.menuItem
	)
	const submenuItemClassName = (modifiers) => ( 
		`${DROPDOWN.submenuItem} ${menuItemClassName(modifiers)}`
	)
	const MenuItem = (props) => (
		<MenuItemInner {...props} className={menuItemClassName} />
	)
	const SubMenu = (props) => (
		<SubMenuInner
			{...props}
			menuClassName={menuClassName}
			itemProps={{ className: submenuItemClassName }}
			offsetY={-7}
		/>
	)



	// AGENDA BUSINESS LOGIC

    
    // data manipulation
    
    function getPlaces( sessionsArray, customOrderArray ) {
        
        const uniquePlaces = _.uniqBy(_.filter(sessionsArray, item => item.place !== null), 'place')
        const places = uniquePlaces.map(session => session.place)
        
        const orderMap = new Map(customOrderArray?.map((item, index) => [item, index]))
            const sorted = places.sort((a, b) => {
            const indexA = orderMap.get(a) ?? Infinity
            const indexB = orderMap.get(b) ?? Infinity
            return indexA - indexB
        })

        return customOrderArray ? sorted : places
        
    }

    function getCategories ( sessionsArray ) {
        
        if (!sessionsArray) return

        const categories = _.uniq(sessionsArray.flatMap(session => session.categories))
        
        if (!categories.length) return

        return categories
        
    }

    function getDays( sessionsArray ) {

        const getUniqueDays = ( data ) => {
			const groupedStartTimes = _.groupBy( data , 'beginsAt')
			const timeCodes = Object.keys(groupedStartTimes)
			const eventDays = _.uniqBy( timeCodes, string => string.slice(0, 10) )
            
			return eventDays
		}
		
		const agendaDays = []
		getUniqueDays( sessionsArray ).map(timestring => {
			agendaDays.push({ 
				date: format( new Date(timestring), "eeee dd MMMM" ), 
				time: timestring.slice(0, 10), 
				timeslots: [] 
			})
        })
        
        return agendaDays
        
    }

    function searchAgenda ( sessionsArray ) {
        if ( !search ) return sessionsArray

        let results = sessionsArray.filter(session => {
            
            let searchableString = session.title.toLowerCase()

            session.planningSpeakerRoles?.map(role => {
                role.speakers?.map(speaker => {
                    searchableString = searchableString + ` ${speaker.firstName.toLowerCase()}`
					searchableString = searchableString + ` ${speaker.lastName.toLowerCase()}`
					searchableString = searchableString + ` ${speaker.jobTitle?.toLowerCase()}`
					searchableString = searchableString + ` ${speaker.organization?.toLowerCase()}`
                })
            })

            if ( searchableString.includes(search.toLocaleLowerCase()) ) return session
        })

        return results
    }


    // filtering

    function filterDays(sessionsArray) {
        if (!selectedDay) return sessionsArray
        const result = sessionsArray.filter(session => format( new Date(session.beginsAt), "eeee dd MMMM" ) === selectedDay )
        return result
    }

    function filterCategories(sessionsArray) {
        if (!selectedCategory) return sessionsArray
        const result = sessionsArray.filter(session => session.categories.includes(selectedCategory))
        return result
    }
    
    function filterPlaces(sessionsArray) {
        if (!selectedPlace) return sessionsArray
        const result = sessionsArray.filter(session => session.place === selectedPlace)
        return result
    }
    
    function filterSessions(sessionsArray) {
        if (!selectedCategory && !selectedPlace && !selectedDay) return sessionsArray
        return _.intersection( filterPlaces(sessionsArray), filterCategories(sessionsArray), filterDays(sessionsArray) )
    }
    

    // build agenda

    function buildAgenda(sessionsArray) {
        // if (search === '' && !selectedDay) return sessionsArray
        return _.intersection(filterSessions(sessionsArray), searchAgenda(sessionsArray))
    }

    // format agenda

    function formatAgenda( sessionsArray ) {
        
        // group sessions

        const timeslots = _.groupBy(sessionsArray, 'beginsAt')
		
	
		// format agenda into days and timeslots
	
		const agenda = []
		getDays(sessionsArray).map( day => {
			let slots = []
			for ( const key in timeslots ) {
				if ( key.slice(0, 10) === day.time.slice(0, 10) ) {
					slots.push({ 
						beginsAt: timeslots[key][0].beginsAt, 
						endsAt: timeslots[key][0].endsAt, 
						sessions: timeslots[key]
					})
				}
			}
	
			agenda.push( { ...day , timeslots: slots } )
        })
        
        return agenda

    }
    
    

    // session utilities 

	function handleSessionCustomContent(contentArray, sessionID) {
        if ( !contentArray ) return
        
        if ( contentArray.find(content => content.ids.includes(sessionID)) ) {
            const inject = contentArray.find(content => content.ids.includes(sessionID))
            return inject.content
        }
        return
    }

    function handleCustomSlotOrder(sessionsArray, customOrderArray) {

        if (sessionsArray.length < 2 || !customOrderArray) return sessionsArray

        const sortMap = new Map(customOrderArray.map((place, i) => [place, i])) 

        const sortedSessions = _.sortBy(sessionsArray, (session => {
            const index = sortMap.get(session.place)
            return index === undefined ? Infinity : index
        }))

        return sortedSessions
    }




	// console.log('total sessions:', sessions.length)
    // console.log('sessions:', sessions)
    // console.log('agenda:', formatAgenda(searchAgenda(sessions)))
    // console.log('themes:', getCategories( sessions ))
    // console.log('days:', getDays(sessions))
    
    // console.log('filtered categories', filterCategories(sessions))
    // console.log('filtered places', filterPlaces(sessions))
    // console.log('filtered by day:', filterDays(sessions).length)
    // console.log('filtered sessions:', filterSessions(sessions).length)
    // console.log('filtered sessions:', filterSessions(sessions))
    // console.log('build agenda:', buildAgenda(sessions).length)
    
	// console.log('search results:', searchAgenda(sessions).length)
	
	

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

            <section className={`${CSS.agendaWrapper} block`}>
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm">
					<div className={CSS.titleBlock}>
						<p className="fs-0 fw-500">2026 Agenda</p>
						<button 
							className={CSS.printButton}
							onClick={ ()=> window.print() }
						><PrinterIcon />Print Agenda</button>
					</div>
					<div className="formatted mt-md">
						<p>Programme is subject to change.</p>
					</div>
                </div>



				<span ref={toggles}/>
				<div ref={utilties} className={CSS.utilities}>

					{/* FILTERS */}
					<section className={CSS.filters}>

						{/* mobile-only toggle */}
						<div id="agendaMob" className={CSS.filterToggleContainer}>
							<button 
								className={`${CSS.filterToggle} ${ !togglesInView && CSS.fixed } ${filtersActive && CSS.active}`} 
								style={{ zIndex: filtersActive ? 110 : 6 }}
								onClick={() => {
									setFiltersActive(!filtersActive)
									lenis.scrollTo('#agendaMob', { duration: 1 })
								}}
							>{ filtersActive ? <Close /> : <FilterIcon color={'white'} /> }</button>
						</div>

						<div className={`${CSS.filterLayout} ${CSS.filterGroup} ${ !utiltiesInView && CSS.fixed } ${filtersActive && CSS.active}`}>
							{/* tracks (topics) */}
							<section className={CSS.filterLayoutButtons}>
								<Menu 
									menuButton={
										<MenuButton className={DROPDOWN.button}>
											<strong className="left">{ selectedCategory ?  selectedCategory : `Tracks` }</strong> <Chevron />
										</MenuButton>
									} 
									transition 
									menuClassName={menuClassName}
									position={'initial'}
								>
									<div className="columns-2">
										{
											sessions &&
											getCategories(sessions).map((category, i) => (
												<MenuItem key={i} onClick={() => {
													setSelectedCategory(category)
													lenis.scrollTo('#agenda', { duration: 1 })
												}}>{ category }</MenuItem> 
											))
										}
										<MenuItem key={0} onClick={() => {
											setSelectedCategory(null)
											lenis.scrollTo('#agenda', { duration: 1 })
										}}>All tracks</MenuItem>

									</div>
								</Menu>
							</section>

							{/* days */}
							<section className={CSS.filterLayoutButtons}>
								<Menu 
									menuButton={
										<MenuButton className={DROPDOWN.button}><strong className="left">{ selectedDay ?  selectedDay : `Days` }</strong> <Chevron /></MenuButton>
									} 
									transition 
									menuClassName={menuClassName}
								>
									{
										sessions &&
										getDays(sessions).map((day, i) => (
											<MenuItem key={i} onClick={() => {
												setSelectedDay(day.date)
												lenis.scrollTo('#agenda', { duration: 1 })
											}}>{ day.date }</MenuItem>
										))
									}
									<MenuItem key={0} onClick={() => {
										setSelectedDay(null)
										lenis.scrollTo('#agenda', { duration: 1 })
									}}>All days</MenuItem>
								</Menu>
							</section>

							{/* locations */}
							<section className={CSS.filterLayoutButtons}>
								<Menu 
									menuButton={
										<MenuButton className={DROPDOWN.button}>
											<strong className="left">{ selectedPlace ?  selectedPlace : `Stages` }</strong> <Chevron />
										</MenuButton>
									} 
									transition 
									menuClassName={menuClassName}
								>
									{
										sessions &&
										getPlaces(sessions, CUSTOM_PLACES_ORDER).map((place, i) => (
											<MenuItem key={i} onClick={() => {
												setSelectedPlace(place)
												lenis.scrollTo('#agenda', { duration: 1 })
											}}>{place}</MenuItem>
										))
									}
									<MenuItem key={0} onClick={() => {
										setSelectedPlace(null)
										lenis.scrollTo('#agenda', { duration: 1 })
									}}>All stages</MenuItem>
								</Menu>
							</section> 

							{/* reset filters */}
							{
								selectedDay || selectedPlace || selectedCategory ?
									<section className={CSS.agendaFilterResetWrapper}>
										<button className={CSS.agendaFilterReset} onClick={resetFilters}><span><Close /></span> Reset all filters</button>
									</section>
								: null
							}

							<div className={CSS.filterActions}>
								<button className={CSS.filterActionButton} onClick={ () => setFiltersActive(!filtersActive) }>Apply</button>
							</div>
						</div>

					</section>


					{/* SEARCH */}
					<section className={`${CSS.search}`}>

						{/* mobile-only toggle */}
						<div id="searchMob" className={CSS.searchToggleContainer}>
							<button 
								className={`${CSS.searchToggle} ${ !togglesInView && CSS.fixed } ${searchActive && CSS.active} `} 
								style={{ zIndex: searchActive ? 105 : 6 }}
								onClick={() => {
									setSearchActive(!searchActive)
									lenis.scrollTo('#agendaMob', { duration: 1 })
								}}
							>{ searchActive ? <Close /> : <SearchIcon color={'white'} /> }</button>
						</div>

						{/* search form */}
						<div className={`${CSS.searchLayout} ${ !utiltiesInView && CSS.fixed } ${searchActive && CSS.active}`}>
							<div className={CSS.searchFormContainer}>
								
								<input 
									type="text" 
									placeholder="Search" 
									onChange={ e => {
										e.preventDefault()
										setSearch(e.target.value) 
									}}
									value={search}
									
								/>
								
								<button
									className={`${CSS.searchReset} ${ search !== '' ? CSS.active : ''}`}
									onClick={ () => {
										setSearch('')
										lenis.scrollTo('#agendaMob', { duration: 1 })
									}}
								>&times;</button>
							</div>
						</div>
					</section>
				
				</div>

				

				{/* AGENDA */}
				<div className={`${CSS2.layout} mt-sm`}>
					{
						buildAgenda(sessions).length ?
						formatAgenda(buildAgenda(sessions))?.map((day, i) => {
								
							return (
								<Day key={i} date={day.date}>
									{
										day.timeslots.map((slot, i) => (
											<Timeslot key={i}>
												{
													handleCustomSlotOrder(slot.sessions, CUSTOM_PLACES_ORDER).map((session, i) => {
														
														if (session.id === 'UGxhbm5pbmdfNDQ0NTg4OA==') return (
															<SessionStartups
																key={i}
																session={session}
																customContent={handleSessionCustomContent(CUSTOM_SESSION_CONTENT, session.id)}
															/>
														)

														return (
															<Session
																key={i}
																session={session}
																customContent={handleSessionCustomContent(CUSTOM_SESSION_CONTENT, session.id)}
															/>
														)
													})
												}
											</Timeslot>
										))
									}
								</Day>
							)
						}) :
							<Day date={selectedDay ? selectedDay : 'All days'}>
								<p className="fs-5 fw-500">No sessions found!</p>
								<p>Please try a different filter combination.</p>
							</Day>
					}
				</div>

				
            </section>

			<div className={CSS.actions}>
				<button className={CSS.scrollButton} onClick={() => { lenis.scrollTo('#agenda', { duration: 1 }) }}>
					<ChevronUp/>
				</button>
			</div>






            <Modal onClose={() => setShowModal(false)} show={showModal}>

                <Sidebar size={`medium`}>
                    <aside className="center">
                        {
                            modalContent.avatar ?
                                <Avatar src={modalContent.avatar}/>
                                :
                                <Avatar src={`/assets/ui/avatar-fallback.png`}/>
                        }
                        <p className="fs-5 fw-600 c-white mt-xs lh-1">{ modalContent.name }</p>
                        <p className="fs-sm fw-400 c-accent mt-xs">{modalContent.title} <br/>{modalContent.company}</p>
                    </aside>
                    
					<section>
						<SimpleBar style={{ maxHeight: `50vh` }}>
							<div className="formatted pr-xs" dangerouslySetInnerHTML={{ __html: modalContent.bio }}></div>
						</SimpleBar> 
					</section>

                    
                </Sidebar>

            </Modal>


            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'world-2024'



const Day = ({ children, date }) => {
    return (
        <section className={CSS2.day}>
			<div className={CSS2.divider}>
				<p className="fs-4 fw-600">{date}</p>
				{
					date === "Thursday 01 October" &&
					<p className="fs-sm"><i>FHS Living will take place on the Summit Stage entirely on Day 3. Access to FHS Living is limited to Premium and FHS Living Pass holders.</i></p>
				}
			</div>

            { children }
        </section>
    )
}

const Timeslot = ({ children }) => {
    return (
        <div className={CSS2.timeslot}>
            { children }
        </div>
    )
}





const ChevronUp = () => {
	return (
			<svg width="100%" height="100%" viewBox="0 0 32 20" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`square`, strokeMiterlimit:1.5 }}>
				<g transform="matrix(1,0,0,1,-2137,-269)">
					<g id="chevron-up" transform="matrix(-1.3,-1.3,-1.3,1.3,3687.02,662.598)">
						<path d="M730,440L740,440L740,450" style={{ fill:`none`, strokeWidth:`2px` }}/>
					</g>
				</g>
			</svg>
	)
}

const Chevron = () => {
	return (
		<span style={{ display: `inline-block`, height: 12, width: 20, marginLeft: 6 }}>
			<svg width="100%" height="100%" viewBox="0 0 28 20" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`square`, strokeMiterlimit:3 }}>
				<g transform="matrix(1,0,0,1,-4176,-535)">
					<g transform="matrix(0.5,0,0,0.5,2065,250)">
						<path id="dropdown-chevron" d="M4230,580L4250,600L4270,580" style={{ fill:`none`, strokeWidth:`8px` }}/>
					</g>
				</g>
			</svg>
		</span>
	)
}

const FilterIcon = ({ color }) => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 18 19" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:1.5 }}>
			<path id="icon-filter" d="M16,2L16,5L11,11L11,17L7,15L7,11L2,5L2,2L16,2Z" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:1.5 }}/>
		</svg>
	)
}

const SearchIcon = ({ color }) => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 20 20" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:2 }}>
			<g transform="matrix(1,0,0,1,-2511,-135)">
				<g id="icon-search" transform="matrix(0.515035,0,0,0.515035,2511.24,135.556)">
					<path d="M15.697,31.349C17.503,31.349 19.216,31.058 20.838,30.477C22.46,29.895 23.944,29.084 25.29,28.044L33.873,36.673L36.627,33.873L28.044,25.29C29.084,23.944 29.895,22.46 30.477,20.838C31.058,19.216 31.349,17.503 31.349,15.697C31.349,13.525 30.936,11.49 30.109,9.593C29.283,7.696 28.166,6.036 26.759,4.613C25.351,3.19 23.684,2.065 21.756,1.239C19.859,0.413 17.839,0 15.697,0C13.525,0 11.49,0.413 9.593,1.239C7.696,2.065 6.036,3.19 4.613,4.613C3.19,6.036 2.065,7.696 1.239,9.593C0.413,11.49 0,13.525 0,15.697C0,17.839 0.413,19.859 1.239,21.756C2.065,23.684 3.19,25.351 4.613,26.759C6.036,28.166 7.696,29.283 9.593,30.109C11.49,30.936 13.525,31.349 15.697,31.349ZM15.697,3.947C17.319,3.947 18.834,4.253 20.241,4.865C21.679,5.477 22.926,6.311 23.982,7.367C25.038,8.422 25.887,9.669 26.529,11.107C27.141,12.546 27.447,14.076 27.447,15.697C27.447,17.319 27.141,18.834 26.529,20.241C25.887,21.679 25.038,22.926 23.982,23.982C22.926,25.038 21.679,25.887 20.241,26.529C18.834,27.141 17.319,27.447 15.697,27.447C14.076,27.447 12.546,27.141 11.107,26.529C9.669,25.887 8.422,25.038 7.367,23.982C6.311,22.926 5.477,21.679 4.865,20.241C4.253,18.834 3.947,17.319 3.947,15.697C3.947,14.076 4.253,12.546 4.865,11.107C5.477,9.669 6.311,8.422 7.367,7.367C8.422,6.311 9.669,5.477 11.107,4.865C12.546,4.253 14.076,3.947 15.697,3.947Z" style={{ fill: color ? color : 'var(--accent)', fillRule:'nonzero' }}/>
				</g>
			</g>
		</svg>
	)
}

const PrinterIcon = ({ color }) => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 18" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:1.5 }}>
			<g transform="matrix(1,0,0,1,-2615,-138)">
				<g id="printer" transform="matrix(0.557918,0,0,0.557918,1290.56,6.44085)">
					<path d="M2381.63,259.726L2375.8,259.726L2375.8,244.224L2400.43,244.224L2400.43,259.726L2394.6,259.726L2394.6,253.717L2381.63,253.717L2381.63,259.726Z" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:1.79 }}/>
					<g transform="matrix(0.526495,0,0,0.745724,1130.79,71.5936)">
						<rect x="2375.8" y="244.224" width="24.631" height="15.502" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:2.78 }}/>
					</g>
					<g transform="matrix(0.526495,0,0,0.327579,1130.79,159.143)">
						<rect x="2375.8" y="244.224" width="24.631" height="15.502" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:4.09 }}/>
					</g>
					<circle cx="2381.62" cy="248.903" r="0.906" style={{ fill: color ? color : 'var(--accent)' }}/>
					<g transform="matrix(1,0,0,1,2.95813,0)">
						<circle cx="2381.62" cy="248.903" r="0.906" style={{ fill: color ? color : 'var(--accent)' }}/>
					</g>
				</g>
			</g>
		</svg>
	)
}

const Close = () => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 24 24" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
			<g transform="matrix(0.760499,0,0,0.760499,-1524.21,-102.075)">
				<g id="icon-close">
					<path d="M2010,140L2030,160" style={{ fill:`none`, stroke:`white`, strokeWidth: 3.5 }}/>
					<g transform="matrix(-1,0,0,1,4040,0)">
						<path d="M2010,140L2030,160" style={{ fill:`none`, stroke:`white`, strokeWidth: 3.5 }}/>
					</g>
				</g>
			</g>
		</svg>
	)
}





export async function getStaticProps() {

	const eventQuery = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query PROGRAMME {
						sessions: planningsV2(
							communityId: "Q29tbXVuaXR5Xzc4MzM="
							filter: {eventIds: "${process.env.SWAPCARD_EVENT_ID_AE_2026}"}
							cursor: {first: 300}
						) {
							nodes {
								id
								beginsAt
								endsAt
								title
								categories
								place
								htmlDescription
								planningSpeakerRoles {
									speakers {
										id
										photoUrl
										firstName
										lastName
										jobTitle
										organization
									}
									role {
										planningLabel
										position
									}
								}
							}
						}
					}
				`
			})
		}
	)

	const result = await eventQuery.json()
	

	// console.log('RESULT', result)
	// console.log('TEST plannings', result.data.event.planningsPlaces)
	// console.log('TEST sessions', result.data.plannings)
  

    if ( result.data ) return { 
        props: { 
            sessions: result.data.sessions.nodes
        } 
    }

	return { props: {} }
}