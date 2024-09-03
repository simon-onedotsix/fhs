import _ from 'lodash'
import { format } from 'date-fns'


// inputs swapcard sessions (related to current speaker profile)
// outputs array of unique days, each containing an array of sessions

export const groupSessionsByDays = ( sessionData ) => {

    if ( !sessionData ) return

    const groupedStartTimes = _.groupBy(sessionData, 'beginsAt')
    const timeCodes = Object.keys(groupedStartTimes)
    const eventDays = _.uniqBy( timeCodes, string => string.slice(0, 10) )

    const dayObjects = []
    eventDays.forEach( day => {

        const relatedSessions = []
        sessionData.forEach( session => {
            if ( session.beginsAt.slice(0, 10) == day.slice(0, 10) ) relatedSessions.push( session )
        })

        dayObjects.push({
            timeCode: day,
            day: format( new Date(day), "eeee dd MMMM" ),
            sessions: _.orderBy(relatedSessions, 'beginsAt')
        })
    })

    return dayObjects
}