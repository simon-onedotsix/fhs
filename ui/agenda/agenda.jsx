'use client'

import { useState } from "react"

import _ from 'lodash'
import { format } from 'date-fns'

import { Session } from '@/ui/layout/agenda/session'

import CSS from './agenda.module.css'


export const Agenda = ({ sessions }) => {

    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedPlace, setSelectedPlace] = useState(null)
    
    const [search, setSearch] = useState('')



    // data manipulation

    function getPlaces ( sessionsArray ) {

        if (!sessionsArray) return
        
        const places = _.uniqBy( _.filter(sessionsArray, item => item.place !== null), 'place' )
        
        if (!places.length) return
                
        return places
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

        let results = sessionsArray.filter( session => {
            if ( session.title.toLowerCase().includes(search.toLocaleLowerCase()) ) return session
        })

        // console.log('filtered sessions:', results)
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
        if (search === '' && !selectedDay) return sessionsArray
        return _.intersection(filterSessions(sessionsArray), searchAgenda(sessionsArray))
    }

    // format agenda

    function formatAgenda( sessionsArray ) {
        
        // group sessions

        const timeslots = _.groupBy(sessionsArray, 'beginsAt')
		
	
		// build agenda
	
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
        <>
			
            {/* FILTERS */}

            <div>

                {/* search */}
                <section>
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
                        onClick={ () => {
                            setSearch('')
                        }}
                    >&times;</button>

                    {
                        search != ''
                            ? <p>{searchAgenda(filterSessions(sessions)).length} result{ searchAgenda(filterSessions(sessions)).length != 1 ? 's' : null}</p>
                            : null
                    }
                </section>

                
                {/* filters */}
                <section style={{ display: `flex`, gap: 30 }}>
                    <div style={{ margin: `1rem 0` }}>
                        <p className="fs-5 fw-600">Days</p>
                        {
                            getDays(sessions).map((day, i) => <p key={i} onClick={()=> setSelectedDay(day.date)} style={{ color: selectedDay === day.date ? `red` : `currentColor`}}>{day.date}&ensp;</p>)
                        }
                        <p onClick={()=> setSelectedDay(null)}>[x]</p>
                    </div>

                    <div style={{ margin: `1rem 0` }}>
                        <p className="fs-5 fw-600">Places</p>
                        {
                            getPlaces(sessions).map((session, i) => <p key={i} onClick={()=> setSelectedPlace(session.place)} style={{ color: selectedPlace === session.place ? `red` : `currentColor`}}>{session.place}&ensp;</p>)
                        }
                        <p onClick={()=> setSelectedPlace(null)}>[x]</p>
                    </div>

                    <div style={{ margin: `1rem 0` }}>
                        <p className="fs-5 fw-600">Categories</p>
                        {
                            getCategories(sessions).map((category, i) => <p key={i} onClick={()=> setSelectedCategory(category)} style={{ color: selectedCategory === category ? `red` : `currentColor`}}>{category}&ensp;</p>)
                        }
                        <p onClick={()=> setSelectedCategory(null)}>[x]</p>
                    </div>
                </section>

            </div>


            {/* AGENDA */}

            <div className={CSS.layout}>
                {
                    buildAgenda(sessions).length ?
                    formatAgenda(buildAgenda(sessions))?.map((day, i) => {
                             
                        return (
                            <Day key={i} date={day.date}>
                                {
                                    day.timeslots.map((slot, i) => (
                                        <Timeslot key={i}>
                                            {
                                                slot.sessions.map((session, i) => (
                                                    <Session key={i} session={session} />
                                                ))
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

        </>
    )
}


const Day = ({ children, date }) => {
    return (
        <section className={CSS.day}>
            <div className={CSS.divider}><p>{date}</p></div>
            { children }
        </section>
    )
}

const Timeslot = ({ children }) => {
    return (
        <div className={CSS.timeslot}>
            { children }
        </div>
    )
}