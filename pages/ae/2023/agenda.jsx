import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

import { formatInTimeZone } from 'date-fns-tz'

import _ from 'lodash'
import { toHoursAndMinutes } from "../../../lib/agenda-utils"

import { Header } from '../../../fuselage/global-ae/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'
import { Session, SessionSpeaker, SessionSpeakerGrid } from '../../../fuselage/components/session/session'
import { Button } from "../../../fuselage/components/button/button"
import { Modal } from "../../../fuselage/components/modal/modal"
import { Sidebar } from "../../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../../fuselage/components/avatar/avatar'

import handleSeomaticMeta from '../../../lib/seomatic'

import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css'

import { 
	Menu,
	MenuButton,
	MenuItem as MenuItemInner,
	SubMenu as SubMenuInner 
} from '@szhsin/react-menu'
import DROPDOWN from '../../../css/app/dropdown.module.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import CSS from '../../../css/app/agenda.module.css'


// legacy data imports

import { bzAgendaSettings } from "../../../data/bz-agenda-settings"
import { bzAgendaSessions } from "../../../data/bz-agenda-sessions"
import { bzSpeakers } from "../../../data/bz-speakers"
import { cmsAgendaSettings } from "../../../data/cms-agenda-settings"


export default function Agenda () {
    

    const [ currentFilter, setCurrentFilter ] = useState (null)
    const [ currentDay, setCurrentDay ] = useState (null)
    const [ currentStage, setCurrentStage ] = useState(null)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

    const router = useRouter()
    
    useEffect( () => {
        if ( router.query.filter ) {
            setCurrentFilter(parseInt(router.query.filter))
        }
    
        if ( router.query.day ) {
            setCurrentDay(parseInt(router.query.day) - 1)
        }
    
    }, [ router ])


    


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



    const findTrackName = ( trackId ) => {

        let tracks = [
            { 
                id: 414721,
                name: "FHS"
            },
            { 
                id: 414722,
                name: "AHIC"
            },
            { 
                id: 414720,
                name: "GRIF"
            },
            { 
                id: 414723,
                name: "Experiences"
            },
            { 
                id: 414723,
                name: "Workshop & Pitches"
            },
        ]

        let { name } = tracks.find( obj => obj.id === trackId )
        if ( !name ) return
        return name

    }

    
    let stagesObject = bzAgendaSettings.filters.find( obj => obj.name === 'Stages')
    let stages = stagesObject.tags

    const findStageName = ( stageId ) => {
        let { name } = stages.find( obj => obj.id === stageId )
        if ( !name ) return
        return name
    }

    
    let mainStreamIds = [ 414721, 414720, 414722, 414723, 414723 ]

    // check for global (and untagged) sessions and dump in array

    let globalSessions = ( findGlobalBzSessions( bzAgendaSessions, mainStreamIds ) )

    
    // cms entry data

    const entry = cmsAgendaSettings.data.entry
    const sessionThemes = entry.bizzaboAgendaTheme

    let metaTitle = JSON.parse(entry.seomatic.metaTitleContainer)
    let metaTags = JSON.parse(entry.seomatic.metaTagContainer)  

  

    
    // console.log('agenda data:', cmsAgendaSettings)
    // console.log('BZ settings:', bzAgendaSettings)
    // console.log('sessions:', sessions)
    // console.log('speakers:', bzSpeakers.content)
    // console.log('bzSpeakersOverflow speakers:', bzSpeakersOverflow.content)
    // console.log('speakers found:', speakers.content.length)
    // console.log('combined speakers:', speakers)




    // build agenda

    function outputAgenda ( sessions ) {

        let agenda = groupSessionsIntoDays(sessions)

        // console.log('agenda:', agenda)

        if ( currentDay !== null ) {
            // output just one day
            return (
                <>
                    { renderDivider( agenda[currentDay][0].startDate ) }
                    { renderSessions( agenda[currentDay] ) }
                </>
            )

        } else {
            // output all days
            return (
                agenda.map( (day, index) => (
                    <div key={index} className='mb-xs'>
                        { renderDivider( day[0].startDate ) }
                        { renderSessions( day ) }
                    </div>
                ))
            )
            
        }



        // helpers

        function renderDivider ( day ) {
            return (
                <p className='fs-4 fw-600 c-primary bg-light px-sm py-xs mb-xs'>
                    { day && formatInTimeZone(new Date( day ), 'Asia/Dubai', 'EEEE dd MMMM') }
                </p>
            )
        }

        function renderSessions ( sessions ) {

            // filter sessions (by track)
            if ( currentFilter ) {
                let filteredSessionsByTrack = checkForMainBzSessions( sessions, currentFilter )
                sessions = filteredSessionsByTrack
            }

            // filter sessions (by stage)
            if ( currentStage ) {
                let filteredSessionsByStage = checkForMainBzSessions( sessions, currentStage )
                sessions = _.intersection(sessions, filteredSessionsByStage)
            }

            // render sessions
            if ( sessions.length ) {
                return (
                    sessions.map( session => {

                        let sessionTags = []
    
                        if ( session.filters ) {
                            session.filters.forEach( filter => {
                                filter.tags.forEach( tag =>  sessionTags.push(getSessionTagTitle(tag)) )
                            })
                        }

                        return (
                            <div key={session.id} className={CSS.sessionWrapper}>
                                <span id={`session-${session.id}`} className={CSS.anchorOffset} />

                                {
                                    session.id === 1180597 ?
                                        <div key={`banner${session.id}`} className='pb-sm formatted mb-xs bg-light'>
                                            <p className='fs-4 fw-600 c-primary bg-primary px-sm py-xs mb-xs mt-xs' style={{ background: `#4c83bd`}}>FHS Intelligence Talks</p>
                                            <p className='fs-5 fw-600 c-primary pt-xs px-sm'>A market snapshot of key trends as they relate to the hospitality sector. Understanding the fundamentals underpinning the market from performance, pipeline, costs, AI and contracts. The Talks allows each speaker 10 minutes presentation followed by q&a.</p>
                                        </div>
                                    : ''
                                }
                                
                                {
                                    session.id === 1198596 ?
                                        <div key={`banner${session.id}`} className='pb-sm formatted mb-xs bg-light'>
                                            <p className='fs-4 fw-600 c-primary bg-primary px-sm py-xs mb-xs mt-xs' style={{ background: `rgb(125, 89, 161)`}}>F&B Concept Tour</p>
                                            <p className='fs-5 c-primary pt-xs px-sm'>Join us for an exclusive <span className="fw-600">F&B Concept Tour</span> at the upcoming GRIF@FHS Yas Island, Abu Dhabi on 25th September 2023 hosted by <span className="fw-600">Priya Chellani</span> - Acting Head Asset Management, Miral and <span className="fw-600">Matthew Dadd</span> - Acting General Manager, Yas Asset Management. This exclusive tour at Yas Bay Waterfront offers a unique opportunity to explore the diverse tenant mix curated by Miral. Our thought provoking and insightful onsite sessions at various venues will uncover the secrets behind Yas Bay&apos;s success. Don&apos;t miss this extraordinary chance to delve into the world of F&B concepts and discover the collaborative spirit that fuels Yas Bay&apos;s success as you witness firsthand how these concepts work seamlessly together, creating a dynamic and vibrant culinary ecosystem!</p>
                                        </div>
                                    : ''
                                }
                                
                                {
                                    session.id === 1177361 ?
                                        <div key={`banner${session.id}`} className='pb-sm formatted mb-xs bg-light'>
                                            <p className='fs-4 fw-600 c-primary bg-primary px-sm py-xs mb-xs mt-xs' style={{ background: `rgb(76, 131, 189)`}}>FHS Intelligence Talks</p>
                                            <p className='fs-5 c-primary pt-xs px-sm'>A marketing snapshot of key trends as they relate to the hospitality sector. Understanding the fundamentals underpinning the market from performance, pipeline, costs, AI, and contracts. The Talks allow each speaker 10 minutes presentation followed by Q&amp;A.</p>
                                        </div>
                                    : ''
                                }

                                <Session
                                    id={session.id}
                                    startTime={toHoursAndMinutes(session.startMinute)}
                                    endTime={toHoursAndMinutes(session.endMinute)}
                                    tags={sessionTags}
                                    theme={getSessionTheme(sessionTags)}
                                >   
                                    <p className='h3 c-primary'>{ session.title }</p>
                                    {/* <small style={{ color: `orangered`}}>{ session.id }</small> */}
                                    
                                    {
                                        session.descriptionHtml &&
                                        <div dangerouslySetInnerHTML={{__html: session.descriptionHtml}} className="mb-xs formatted" />
                                    }

                                    {addSessionCta( session.id )}

                                    <div>{getAllSessionSpeakers(session.speakers)}</div>
        
                                </Session>

                            </div>
                        )
                    })
                )

            
            } else {
                return <p className="fs-6 fw-400">No { getSessionTagTitle(currentFilter) } { currentStage && findStageName(currentStage) } sessions available on this day.</p>
            }
            
        }    

        function getAllSessionSpeakers( speakerIds ) {
            
            if ( !speakerIds ) return

            let moderators = []
            let profiles = []

            speakerIds.forEach( speaker => {
                const speakerProfile = bzSpeakers.content.find( obj => obj.id === speaker.speakerId )

                if ( speakerProfile ) {
                    const profile = new SessionSpeakerProfile( 
                        speakerProfile.firstname, 
                        speakerProfile.lastname, 
                        speakerProfile.title,
                        speakerProfile.company,
                        speakerProfile.photoSet ? speakerProfile.photoSet.large : null,
                        speaker.role ? speaker.role : null,
                        speakerProfile.bio 
                    )
                    profile.role === 'Moderator' ? moderators.push( profile ) : profiles.push( profile )
                }
            })

            return (
                <>
                    {
                        moderators.length ?
                            <div>
                                <SessionSpeakerGrid>
                                    { moderators.map( (moderator, index) => handleSpeakerCard( moderator, index) ) }
                                </SessionSpeakerGrid>
                                <p className="fw-500 my-xs c-primary">In conversation with</p>
                            </div>
                        : null
                    }
                    <SessionSpeakerGrid>
                        { profiles.map( (profile, index) => handleSpeakerCard( profile, index) ) }
                    </SessionSpeakerGrid>

                    
                </>
            )

        }

        function addSessionCta( id ) {

            const selectedSessions = [
                { id: 968557, href: "/ae/site-tours#farm", target: '' },
                { id: 968558, href: "/ae/site-tours#lagoon", target: '' }
            ]

            let selectedSession = selectedSessions.find( session => session.id === id)
            let sessionDetails = sessions.find( session => session.id === id)
            
            if ( selectedSession ) {
                return <Button href={selectedSession.href} size={`small`} decal={`fs-sm fw-400 mb-xs no-print`} target={selectedSession.target}>
                    Learn more and register
                </Button>
            }
        }

        function handleSpeakerCard( profile, index) {
            return (
                <span
                    key={index} 
                    onClick={() => {
                        if ( profile.bio ) {
                            setModalContent({
                                avatar: profile.avatarUrl,
                                name: `${profile.firstname} ${profile.lastname}`,
                                title: profile.title,
                                company: profile.company,
                                bio: profile.bio
                            })
                            setShowModal(true)
                        }
                    }}>
                    <SessionSpeaker 
                        avatarUrl={profile.avatarUrl}
                        role={profile.role}
                        firstname={profile.firstname}
                        lastname={profile.lastname}
                        title={profile.title}
                        company={profile.company}
                        bio={profile.bio}
                    />
                </span>
            )
        }

    }


    class SessionSpeakerProfile {
        constructor( firstname, lastname, title, company, avatarUrl, role, bio ) {
            this.firstname = firstname
            this.lastname = lastname
            this.title = title
            this.company = company
            this.avatarUrl = avatarUrl
            this.role = role
            this.bio = bio
        }
    }
   
    function groupSessionsIntoDays ( sessions ) {

        const orderedSessions = _.orderBy(sessions, [ 'startMinute', 'endMinute'], [ 'asc', 'asc'])
        // console.log('orderedSessions:', orderedSessions)
    
        const groupedSessions = _
            .chain(orderedSessions)
            .groupBy(function(session) { return new Date(session.startDate).getDay() })
            .sortBy(function(session) { return session.startMinute })
            .value()
        // console.log('sorted sessions:', groupedSessions)
        // console.log('sorted sessions [1]:', groupedSessions[1])
    
        return groupedSessions
    }


    // tags

    let mergedTags = []

    if ( bzAgendaSettings && bzAgendaSettings.filters ) {
        bzAgendaSettings.filters.forEach( obj => {
            obj.tags.forEach( tag => mergedTags.push(tag))
        })
    }

    const getSessionTagTitle = ( id ) => {
        let tag = mergedTags.filter( tag => tag.id == id )
        if ( tag.length ) return tag[0].name
        return
    }

    
    // session theme

    const getSessionTheme = ( bizzaboAgendaTags ) => {

        // check if a cms sessionThemes object exists for bz tag
        const found = sessionThemes.filter( obj => bizzaboAgendaTags.includes( obj.bizzaboAgendaTag ))

        
        // if yes, return the theme color
        if ( found.length ) {
            return found[0].color
        }
        
        // otherwise return a fallback
        return '#ff9500'
    }

    
    // filter query reset

    function clearQuery() {
        router.replace('/ae/agenda', undefined, { shallow: true })
    }


    // check bz agenda settings data for specific tag group

    function searchBzFilters( filterData, targetFilterName ) {

        if ( !filterData || !targetFilterName ) return

        let isolatedFilter = []

        filterData.some( arr => {
            if ( arr.name === targetFilterName ) isolatedFilter = arr.tags
        })
        
        return isolatedFilter
    }


    // find global sessions ( to be included in all main streams )
    
    function findGlobalBzSessions ( sessionIds, streamIds ) {

        if ( !sessionIds ) return
        
        let globalSessionIds = []
    
        sessionIds.forEach( session => {
            // check for filters
            if (session.filters) {                
                session.filters.forEach( filter => {
                    // check for tags
                    if (filter.tags) {
                        // check for main stream tags
                        // if no main stream tags are found, push into array
                        if ( !_.intersection(filter.tags, streamIds) ) globalSessionIds.push(session)
                    }
                })
            }
    
            if (!session.filters) {
                // if no filters + tags are found, push into array
                globalSessionIds.push(session)
            }
        })

        // console.log('global sessions: ', globalSessionIds)
        
        return globalSessionIds
        
    }


    // check if bz filter is allocated as main (for filtering)

    function checkForMainBzSessions ( bxSessions, bxFilterId ) {
        let snapshot = bxSessions.filter( session => {
            // for sessions with filter + tags
            if (session.filters) {
                if ( 
                    session.filters[0].tags.includes(parseInt(bxFilterId)) || 
                    session.filters[1] && session.filters[1].tags.includes(parseInt(bxFilterId)) ||
                    globalSessions && globalSessions.includes(session)
                ) return session
            } 
            // for sessions without filters
            else if ( globalSessions && globalSessions.includes(session) ) {
                // return session <––––– disabled to stop non-tagged sessions appearing everywhere
            }
            
        })
        return snapshot
    }
    



    return (
        <>

            <Head>
                { handleSeomaticMeta( cmsAgendaSettings.seomatic ) }
			</Head>

            <Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />


            <section className="block">
                {/* filter */}
                <div className="container" style={{ zIndex: 3 }}>
                    <p className="fs-0 fw-600 c-primary">2023 Agenda</p>

                    <div className={CSS.filterLayout}>

                        {/* day buttons */}
                        <section className={CSS.filterLayoutButtons}>
                            <button 
                                className={`${CSS.filterButton} ${ currentDay === null ? CSS.active : null }`} 
                                onClick={ () => {
                                    setCurrentDay(null)
                                    clearQuery()
                                }}
                            >All</button>
                            {
                                groupSessionsIntoDays(bzAgendaSessions).map( (day, index) => {
                                    return (
                                        <button 
                                            className={`
                                                ${CSS.filterButton} 
                                                ${ currentDay === index ? CSS.active : null }
                                            `}
                                            key={index} 
                                            onClick={ () => {
                                                setCurrentDay(index)
                                                clearQuery()
                                            }}
                                        >Day { index + 1 }</button>
                                    )
                                })
                            }
                        </section>

                        {/* track dropdown */}
                        <section className={CSS.filterLayoutButtons}>
                            <Menu 
                                menuButton={
                                    <MenuButton className={DROPDOWN.button}>{ currentFilter ? findTrackName(currentFilter) : 'All tracks' } <Chevron /></MenuButton>
                                } 
                                transition 
                                menuClassName={menuClassName}
                            >
                                <MenuItem onClick={ () => {
                                    setCurrentFilter(null)
                                    clearQuery()
                                }}>All tracks</MenuItem>

                                <MenuItem onClick={ () => {
                                    setCurrentFilter(414721)
                                    clearQuery()
                                }}>FHS</MenuItem>
                                
                                {/* <MenuItem onClick={ () => {
                                    setCurrentFilter(414722)
                                    clearQuery()
                                }}>AHIC</MenuItem> */}
                                
                                <MenuItem onClick={ () => {
                                    setCurrentFilter(414720)
                                    clearQuery()
                                }}>GRIF</MenuItem>
                            </Menu>
                        </section>

                        {/* stage dropdown */}
                        <section className={CSS.filterLayoutButtons}>
                            <Menu 
                                menuButton={
                                    <MenuButton className={DROPDOWN.button}>
                                        { currentStage ? findStageName(currentStage) : 'All stages' } <Chevron />
                                    </MenuButton>
                                } 
                                transition 
                                menuClassName={menuClassName}
                            >
                                <MenuItem 
                                    onClick={ () => {
                                        setCurrentStage('')
                                        clearQuery()
                                    }}
                                >All stages</MenuItem>
                                
                                {
                                    bzAgendaSettings.filters &&
                                    searchBzFilters( bzAgendaSettings.filters, 'Stages').map( filter => {
                                        return (
                                            <MenuItem
                                                key={filter.id}
                                                onClick={ () => {
                                                    setCurrentStage( parseInt(filter.id) )
                                                    clearQuery()
                                                }}
                                            >
                                                {filter.name}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                        </section> 
  
                    </div>
                </div>

                {/* programme */}
                <div className="container">
                    {outputAgenda( bzAgendaSessions )}
                </div>
            </section>



            <Modal onClose={() => setShowModal(false)} show={showModal}>

                <Sidebar size={`medium`}>
                    <aside className="center">
                        {
                            modalContent.avatar ?
                                <Avatar src={modalContent.avatar}/>
                                :
                                <Avatar src={`/assets/ui/avatar-fallback.png`}/>
                        }
                        <p className="fs-5 fw-600 c-primary mt-sm lh-1">{ modalContent.name }</p>
                        <p className="fs-sm fw-400 mt-xs">{modalContent.title} <br/>{modalContent.company}</p>
                    </aside>
                    
                    <SimpleBar style={{ maxHeight: 300 }}>
                        <div className="formatted pr-xs" dangerouslySetInnerHTML={{ __html: modalContent.bio }}></div>
                    </SimpleBar>                            
                    
                </Sidebar>

            </Modal>

            <Footer theme={{ footerBg: 'bg-white' }} />

        </>
    )
}

Agenda.theme = 'ae-2023'



const Chevron = () => {
	return (
		<span style={{ display: `inline-block`, height: 12, marginLeft: 6 }}>
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