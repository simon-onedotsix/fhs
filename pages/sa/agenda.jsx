import Layout from '../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

import { formatInTimeZone } from 'date-fns-tz'

import _ from 'lodash'
import { toHoursAndMinutes } from "../../lib/agenda-utils"

import { Header } from '../../fuselage/global-sa/header/header'
import { Footer } from '../../fuselage/global-sa/footer/footer'
import { Session, SessionSpeaker, SessionSpeakerGrid } from '../../fuselage/components/session/session'
import { Button } from "../../fuselage/components/button/button"
import { Modal } from "../../fuselage/components/modal/modal"
import { Sidebar } from "../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../fuselage/components/avatar/avatar'

import handleSeomaticMeta from '../../lib/seomatic'

import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css'

import CSS from '../../css/app/agenda.module.css'


export default function Agenda ({ agendaSettings, sessions, speakers, speakersOverflow, cmsAgendaData }) {

    const [ currentDay, setCurrentDay ] = useState (null)
    const [ currentFilter, setCurrentFilter ] = useState (389592)
    // 389592 = fhs sessions

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

    let mainStreamIds = [ 388496, 388497, 388115, 389592, 394512 ]

    const entry = cmsAgendaData.data.entry
    const sessionThemes = entry.bizzaboAgendaTheme

    let metaTitle = JSON.parse(entry.seomatic.metaTitleContainer)
    let metaTags = JSON.parse(entry.seomatic.metaTagContainer)  

    
    
    // handle 200+ speakers ( requires separate api requests )

    if ( speakersOverflow && speakersOverflow.content.length ) {
        speakers.content = [].concat( speakers.content, speakersOverflow.content )
    }
    

    
    // console.log('agenda data:', cmsAgendaData)
    // console.log('settings:', agendaSettings)
    // console.log('sessions:', sessions)
    // console.log('speakers:', speakers.content)
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
                <p className='fs-4 fw-600 c-primary bg-theme px-sm py-xs mb-xs'>
                    { day && formatInTimeZone(new Date( day ), 'Asia/Dubai', 'EEEE dd MMMM') }
                </p>
            )
        }

        function renderSessions ( sessions ) {

            // filter sessions
            if ( currentFilter ) {

                // check for global (and untagged) sessions
                let globalSessions = ( findGlobalSessions( sessions, mainStreamIds ) )

                let filteredSessions = sessions.filter( session => {
                    // for sessions with filter + tags
                    if (session.filters) {
                        if ( 
                            session.filters[0].tags.includes(parseInt(currentFilter)) || 
                            session.filters[1] && session.filters[1].tags.includes(parseInt(currentFilter)) ||
                            globalSessions && globalSessions.includes(session)
                        ) return session
                    } 
                    // for sessions without filters
                    else if ( globalSessions && globalSessions.includes(session) ) {
                        return session
                    }
                    
                })
                sessions = filteredSessions
            }

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
                            <div key={session.id}>
                                {
                                    session.id === 1122241 ?
                                    <p key={`banner${session.id}`} className='fs-4 fw-600 c-primary bg-theme px-sm py-xs mb-xs'>Welcome to Future Hospitality Summit</p>
                                    : ''
                                }

                                {
                                    session.id === 1120633 && !currentFilter ?
                                    <p key={`banner${session.id}`} className='fs-4 fw-600 c-primary bg-theme px-sm py-xs mb-xs mt-xs'>Global Restaurant Investment Forum (GRIF) Culinary Tours</p>
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
                return <p className="fs-6 fw-400">No { getSessionTagTitle(currentFilter) } sessions available on this day.</p>
            }
            
        }    

        function getAllSessionSpeakers( speakerIds ) {
            
            if ( !speakerIds ) return

            let moderators = []
            let profiles = []

            speakerIds.forEach( speaker => {
                const speakerProfile = speakers.content.find( obj => obj.id === speaker.speakerId )

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

    if ( agendaSettings ) {
        agendaSettings.filters.forEach( obj => {
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
        if ( found.length ) return found[0].color
        
        // otherwise return a fallback
        return '#7a4afd'
    }

    
    // filter

    function clearQuery() {
        router.replace('/sa/agenda', undefined, { shallow: true })
    }


    // find global sessions ( to be included in all main streams )
    
    function findGlobalSessions ( sessionIds, streamIds ) {

        if ( !sessionIds ) return
        
        let globalSessionIds = []
    
        sessionIds.forEach( session => {
            // check for filters
            if (session.filters) {                
                session.filters.forEach( filter => {
                    // check for tags
                    if (filter.tags) {
                        // check for main stream tags
                        let checker = (arr, target) => target.some(value => arr.includes(value))
                        // if no main stream tags are found, push into array
                        if ( !checker(filter.tags, streamIds) ) globalSessionIds.push(session)
                    }
                })
            }
    
            if (!session.filters) {
                // if no filters + tags are found, push into array
                globalSessionIds.push(session)
            }
        })
        
        return globalSessionIds
        
    }
    



    return (
        <>

            <Head>
                { handleSeomaticMeta( cmsAgendaData.seomatic ) }
			</Head>

            <Header compact shim />


            <section className="block">
                {/* filter */}
                <div className="container">
                    <p className="fs-0 fw-600 c-primary">Agenda</p>

                    <div className={CSS.filterLayout}>

                        {/* buttons */}
                        <section className={CSS.filterLayoutButtons}>

                            <button 
                                className={`${CSS.filterButton} ${ currentFilter === 389592 ? CSS.active : null }`} 
                                onClick={ () => {
                                    setCurrentFilter(389592)
                                    clearQuery()
                                }}
                            >FHS</button>

                            <button 
                                className={`${CSS.filterButton} ${ currentFilter === 388115 ? CSS.active : null }`} 
                                onClick={ () => {
                                    setCurrentFilter(388115)
                                    clearQuery()
                                }}
                            >GRIF</button>
                           
                            <button 
                                className={`${CSS.filterButton} ${ currentFilter === 394512 ? CSS.active : null }`} 
                                onClick={ () => {
                                    setCurrentFilter(394512)
                                    clearQuery()
                                }}
                            >Experiences</button>

                        </section>

                        <section className={CSS.filterLayoutButtons}>

                            <button 
                                className={`${CSS.filterButton} ${ currentDay === null ? CSS.active : null }`} 
                                onClick={ () => {
                                    setCurrentDay(null)
                                    clearQuery()
                                }}
                            >All</button>
                            {
                                groupSessionsIntoDays(sessions).map( (day, index) => {
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

                        {/* dropdown */}
                        {/* <section className={CSS.filterLayoutButtons}>
                            <p className={`${CSS.desktopOnly} fw-400 c-primary`}>Filter:&emsp;</p>
                            <select
                                className={CSS.filterSelect}
                                value={currentFilter}
                                defaultValue=""
                                onChange={ (e) => {
                                    setCurrentFilter( e.target.value )
                                    clearQuery()
                                }}
                            >
                                <option value="">All sessions</option>
                                {
                                    agendaSettings &&
                                    agendaSettings.filters.slice(0).reverse().map( filter => {
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
                        </section>                 */}
                    </div>
                </div>

                {/* programme */}
                <div className="container">
                    {outputAgenda( sessions )}
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

            <Footer />

        </>
    )
}


Agenda.getLayout = function getLayout( page ) {
	return (
		<Layout>
			{ page }
		</Layout>
	)
}


export async function getStaticProps() {


    const cmsAgendaData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_SA}", id: "63855") {
					title
                    ... on ${process.env.SITE_HANDLE_SA}Agenda_${process.env.SITE_HANDLE_SA}Agenda_Entry {
                        id
                        bizzaboAgendaTheme {
                            ... on bizzaboAgendaTheme_BlockType {
                                id
                                color
                                bizzaboAgendaTag
                            }
                        }
                    }
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })


    const sessionsRes = await fetch(`https://api.bizzabo.com/api/agenda/sessions?eventId=${process.env.BIZZABO_EVENT_ID_SA}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
    const sessionsData = await sessionsRes.json()
    const sessions = sessionsData.content
    

    const agendaSettingsRes = await fetch(`https://api.bizzabo.com/api/agenda/settings?eventId=${process.env.BIZZABO_EVENT_ID_SA}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
    const agendaSettings = await agendaSettingsRes.json()


    // speakers – beware of 200 max per page + each page requires a separate call
    const bizzaboSpeakers = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID_SA}&page=0&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const speakers = await bizzaboSpeakers.json()
    
    // speaker overflow ( when there are more than 200 )
    const bizzaboSpeakersOverflow = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID_SA}&page=1&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const speakersOverflow = await bizzaboSpeakersOverflow.json()
  


    return { 
        props: { 
            sessions, 
            agendaSettings, 
            speakers, 
            // speakersOverflow, 
            cmsAgendaData
        } 
    }
}

