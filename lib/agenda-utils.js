import _ from 'lodash'

import { AgendaSpeakerCard } from '../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import CSS from '../fuselage/theme/2025/ais/css/homepage.module.css'




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


// new method (using swapcard custom field)
 export const sortSpeakersAndModerators = ( sessionData ) => {

    const moderatorIDs = []
    const moderators = []
    const speakers = []

    // find moderatorIDs by targeting custom swapcard field at session-level
    sessionData.fields.map(field => {
        if (field.definition?.id === "RmllbGREZWZpbml0aW9uXzg0NDQ3Nw==") {
            if (field.value.includes(", ")) {
                const mods = field.value.split(", ")
                moderatorIDs.push(...mods)
            } else {
                moderatorIDs.push(_.replace(field.value, ',', ''))
            }
        }
    })

    // map through all the speakers (sorted into alpha order) and pull out the moderator (if one exists)
    _.orderBy(sessionData.speakers, 'lastName').map(speaker => {
        moderatorIDs.includes(speaker.communityProfile.id) 
            ? moderators.push(speaker)
            : speakers.push(speaker)
    })
     
    //  console.log('moderators:', moderators)
    //  console.log('speakers:', speakers)

    // output the speakers
    if ( moderators.length && speakers.length ) { 
        return (
            <>
                {
                    moderators.length ?
                        <div>
                            <p className="c-accent pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
                            <div className={CSS.sessionSpeakerGrid}>
                                { moderators.map( moderator => renderSpeakerCard(moderator) ) }
                            </div>
                            {
                                speakers.length ?
                                    <p style={{ color: `var(--accent)`, padding: `10px 0 0 0`}}>In conversation with</p>
                                : null
                            }
                        </div>
                    : null
                }
                <div className={CSS.sessionSpeakerGrid}>
                    { speakers.map( speaker => renderSpeakerCard(speaker) ) }
                </div>
            </>
        )
    }

    return (
        <div className={CSS.sessionSpeakerGrid}>
            { sessionData.speakers.map( speaker => renderSpeakerCard(speaker) ) }
        </div>
    )
 }


 export const SpeakerCard = ({ speaker, type }) => {
	return (
		<div key={speaker.id} className={CSS.sessionSpeaker}>

			<span className={CSS.speakerAvatar} style={{ cursor: speaker.biography ? 'pointer' : 'default' }}>
				{
					speaker.photoUrl ?
						<img src={speaker.photoUrl} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />
					: 
						<img src={`/assets/ui/avatar-fallback.png`} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />

				}
			</span>

			<p className="fw-600">{ speaker.firstName } { speaker.lastName }</p>
			<p className="fs-sm lh-1">{ speaker.jobTitle }<br />{ speaker.organization }</p>
		</div>
	)
}
    

export const renderSpeakerCard = ( speaker ) => {
    return (
        <span
            key={speaker.id} 
            onClick={() => {
                if ( speaker.biography ) {
                    setModalContent({
                        avatar: speaker.photoUrl,
                        name: `${speaker.firstName} ${speaker.lastName}`,
                        title: speaker.jobTitle,
                        company: speaker.organization,
                        bio: speaker.biography
                    })
                    setShowModal(true)
                }
            }
        }><SpeakerCard key={speaker.id} speaker={speaker}/></span>
    )
}