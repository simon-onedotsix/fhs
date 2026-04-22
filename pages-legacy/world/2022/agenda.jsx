import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { formatInTimeZone } from 'date-fns-tz'

import _ from 'lodash'
import { toHoursAndMinutes } from "../../../lib/agenda-utils"

import { Header } from '../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'
import { Session, SessionSpeaker, SessionSpeakerGrid } from '../../../fuselage/components/session/session'
import { Button } from "../../../fuselage/components/button/button"
import { Modal } from "../../../fuselage/components/modal/modal"
import { Sidebar } from "../../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../../fuselage/components/avatar/avatar'

import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css'

import CSS from '../../../css/app/agenda.module.css'


// legacy data imports

import { bzAgendaSettings } from "../../../data/legacy/ae/2022/bz-agenda-settings"
import { bzAgendaSessions } from "../../../data/legacy/ae/2022/bz-agenda-sessions"
import { bzSpeakers } from "../../../data/legacy/ae/2022/bz-speakers"
import { cmsAgendaSettings } from "../../../data/legacy/ae/2022/cms-agenda-settings"


export default function Agenda () {

    const [ currentDay, setCurrentDay ] = useState (null)
    const [ currentFilter, setCurrentFilter ] = useState (null)

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

    const router = useRouter()


    
    useEffect( () => {
        if ( router.query.filter ) {
            setCurrentFilter(router.query.filter)
        }
    
        if ( router.query.day ) {
            setCurrentDay(router.query.day - 1)
        }
    
    }, [ router ])
    
    

    
    // cms entry data

    const entry = cmsAgendaSettings.data.entry
    
    
    // console.log('agenda data:', cmsAgendaSettings)
    // console.log('settings:', bzAgendaSettings)
    // console.log('bzAgendaSessions:', bzAgendaSessions)
    // console.log('speakers:', speakers.content)
    // console.log('speakers found:', speakers.content.length)
    // console.log('combined speakers:', speakers)


    // LEGACY DATA ------------------------------------------ (hard-coded)

    let sessionThemes = [
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14877",
            "color": "var(--primary)",
            "bizzaboAgendaTag": "Summit Main Stage"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14878",
            "color": "var(--primary)",
            "bizzaboAgendaTag": "Innovation Stage"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14881",
            "color": "var(--primary)",
            "bizzaboAgendaTag": "Future Stage"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14880",
            "color": "var(--primary)",
            "bizzaboAgendaTag": "Creativity Stage"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14879",
            "color": "var(--accent)",
            "bizzaboAgendaTag": "Networking"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14948",
            "color": "var(--accent)",
            "bizzaboAgendaTag": "GRIF"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14949",
            "color": "var(--accent)",
            "bizzaboAgendaTag": "FHS"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "14950",
            "color": "var(--accent)",
            "bizzaboAgendaTag": "AHIC"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "28893",
            "color": "var(--secondary)",
            "bizzaboAgendaTag": "Sustainable Hospitality Challenge"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "28894",
            "color": "var(--secondary)",
            "bizzaboAgendaTag": "Workshops & Pitches"
        },
        {
            "__typename": "bizzaboAgendaTheme_BlockType",
            "id": "28939",
            "color": "var(--secondary)",
            "bizzaboAgendaTag": "Experiences"
        }
    ]

    // END LEGACY DATA -------------------------------------- (hard-coded)




    // build agenda

    function outputAgenda ( sessions ) {

        let agenda = sortSessions(sessions)

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
                <p className='fs-4 fw-600 c-white bg-theme px-sm py-xs mb-xs'>
                    { day && formatInTimeZone(new Date( day ), 'Asia/Dubai', 'EEEE dd MMMM') }
                </p>
            )
        }

        function renderSessions ( sessions ) {

            // filter sessions
            if ( currentFilter ) {
                let filteredSessions = sessions.filter( session => {
                    if (session.filters) {
                        if ( 
                            session.filters[0].tags.includes(parseInt(currentFilter)) || 
                            session.filters[1] && session.filters[1].tags.includes(parseInt(currentFilter)) 
                        ) return session
                    }
                })
                sessions = filteredSessions
            }

            if ( sessions.length ) {
                return (
                    sessions.map( session => {
                        let tag = session.filters ? getSessionTagTitle(session.filters[0].tags[0]) : null
                        let tags = []
                        let tagIds = []
    
                        if ( session.filters ) {
                            session.filters.forEach( filter => {
                                tags.push(getSessionTagTitle(filter.tags[0]))
                                tagIds.push(filter.tags[0])
                            })
                        }
    
                        return (
                            <Session
                                id={session.id}
                                key={session.id}
                                startTime={toHoursAndMinutes(session.startMinute)}
                                endTime={toHoursAndMinutes(session.endMinute)}
                                tags={tags}
                                theme={getSessionTheme(tag)}
                            >   
                                
                                <p className='h3 c-primary'>{ session.title }</p>
                                <p className="mb-xs" style={{ whiteSpace: `pre-wrap` }}>{ session.description }</p>
                                {/* {addSessionCta( session.id )} */}
                                <div>{getAllSessionSpeakers(session.speakers)}</div>
    
                            </Session>
    
                        )
                    })
                )

            } else {
                return <p className="fs-6 fw-400">No { getSessionTagTitle(currentFilter) } sessions available on this day.</p>
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
                { id: 968557, href: "/world/site-tours#farm", target: '' },
                { id: 968558, href: "/world/site-tours#lagoon", target: '' },
                { id: 956648, href: "/world/lead-the-change", target: '' },
                { id: 956649, href: "/world/startup-den", target: '' },
                { id: 958016, href: "https://forms.office.com/pages/responsepage.aspx?id=CynbjH5LUUqIhntljO8w5dWMsPcd5IpFpf8wtnYUOZZUMElKU0lQN1pLNURCWlQ2TUhCUUNMMEdIOC4u", target: '_blank' },
                { id: 956524, href: "https://forms.office.com/pages/responsepage.aspx?id=CynbjH5LUUqIhntljO8w5dWMsPcd5IpFpf8wtnYUOZZUM1pIVDE1NTc4VUwxSDNBT0ZIWlVHQlM1Wi4u", target: '_blank' },
                { id: 968559, href: "/world/sports#fitness", target: '' },
                { id: 968560, href: "/world/sports#yoga", target: '' },
                { id: 790696, href: "/world/sustainable-hospitality-challenge", target: '' },
                { id: 956645, href: "/world/the-knight-frank-investors-briefing", target: '' },
                { id: 980614, href: "/world/sports#golf", target: '' },
                { id: 971946, href: "/world/sports#tennis", target: '' },
                { id: 980500, href: "/world/site-tours#fish", target: '' },
                { id: 980612, href: "/world/site-tours#museum", target: '' },
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
   
   
    function sortSessions ( sessions ) {
        const orderedSessions = _.orderBy(sessions, [ 'startMinute', 'asc'])
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

    if ( bzAgendaSettings ) {
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

    const getSessionTheme = ( bizzaboAgendaTagName ) => {
        let theme = sessionThemes.filter( color => color.bizzaboAgendaTag == bizzaboAgendaTagName )
        if ( theme.length ) return theme[0].color
        return 'var(--accent)'
    }

    
    // filter

    function clearQuery() {
        router.replace('/world/2022/agenda', undefined, { shallow: true })
    }


    return (
        <>

            <Header 
                compact
                shim 
                path={'/agenda'}
                theme={{ 
                    primary: 'white', 
                    secondary: 'var(--accent)', 
                    text: 'white',
                    buttons: 'var(--primary)',
                    buttonText: 'white',
                    headerBg: 'bg-theme',
                    overlayBg: 'var(--primary)',
                }} 
            />


            <section className="block">
                <div className="container">
                    <p className="fs-0 fw-600 c-primary">2022 Agenda</p>
                    
                    {/* filters */}
                    <div className={CSS.filterLayout}>
                        <section className={CSS.filterLayoutButtons}>
                            
                            {
                                sortSessions(bzAgendaSessions).map( (day, index) => {
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

                            <button 
                                className={`
                                    ${CSS.filterButton} 
                                    ${ currentDay === null ? CSS.active : null }
                                `} 
                                onClick={ () => {
                                    setCurrentDay(null)
                                    clearQuery()
                                }}
                            >All</button>

                        </section>

                        <section className={CSS.filterLayoutButtons}>
                            <p className={`${CSS.desktopOnly} fw-400 c-primary`}>Filter:&emsp;</p>
                            <select
                                className={CSS.filterSelect} 
                                defaultValue=""
                                onChange={ (e) => {
                                    setCurrentFilter( e.target.value )
                                    clearQuery()
                                    // console.log('selected filter:', e.target.value)
                                }}
                            >
                                <option value="">All sessions</option>
                                {
                                    bzAgendaSettings &&
                                    bzAgendaSettings.filters.slice(0).reverse().map( filter => {
                                        return (
                                            <optgroup key={filter.id} label={filter.name}>
                                                {filter.tags.map( (tag) => (
                                                    <option key={tag.id} value={tag.id}>
                                                        {tag.name}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        )
                                    })
                                }
                            </select>
                        </section>                
                    </div>
                    
                    {/* main agenda */}
                    <div className="mt-sm">
                        {outputAgenda( bzAgendaSessions )}
                    </div>
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

            <Footer theme={{ footerBg: 'bg-theme' }} />

        </>
    )
}

Agenda.theme = 'ae-2022'


