import _ from 'lodash'

import { AgendaSpeakerCard } from '../fuselage/components/agenda-speaker-card/agenda-speaker-card'




export function sortSessions ( sessions ) {
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




export function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}




export const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''
    const minuteString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''

    if ( hours > 0 ) {
        return `${hourString} ${ minutes > 0 ? minuteString : ''}`

    } else if ( !hours && minutes > 0 ) {
        return `${minuteString}`

    }

    return
}



export const sortSpeakers = ( speakerData ) => {

    if ( !speakerData ) return

    let moderators = []
    let speakers = []

    _.orderBy(speakerData, 'lastName').forEach( speaker => {
        speaker.withEvent.eventProfile.type === 'Moderator' ? moderators.push( speaker ) : speakers.push( speaker )
    })


    if ( moderators.length && speakers.length ) return (
        <>
            {
                moderators.length ?
                    <div>
                        <p className="c-secondary pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
                        <div className={CSS.sessionSpeakerGrid}>
                            { moderators.map( moderator => <AgendaSpeakerCard key={moderator.id} color={'white'} speaker={moderator}/> ) }
                        </div>
                        {
                            speakers.length ?
                                <p style={{ color: `var(--secondary)`, padding: `10px 0 0 0`}}>In conversation with</p>
                            : null
                        }
                    </div>
                : null
            }
            <div className={CSS.sessionSpeakerGrid}>
                { speakers.map( speaker => <AgendaSpeakerCard key={speaker.id} color={'white'} speaker={speaker}/> ) }
            </div>
        </>
    )

    return (
        <div className={CSS.sessionSpeakerGrid}>
            { speakerData.map( speaker => <AgendaSpeakerCard key={speaker.id} color={'white'} speaker={speaker}/> ) }
        </div>
    )
}