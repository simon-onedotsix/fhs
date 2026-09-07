import _ from 'lodash'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import convertSeconds from '../../lib/convertSeconds'

import Link from 'next/link'

import { StopwatchIcon, LocationIcon, TagIcon } from '../icons/icons'

import CSS from './session.module.css'

export const SessionStartups = ({ session, customContent }) => {
    
    if (!session) return

    // console.log(session)
    // if ( session.id === 'UGxhbm5pbmdfNDQ0NTg4OA==' ) console.log(session)
    // if ( session.id === 'UGxhbm5pbmdfNDQ0NTg4OA==' ) console.log(session.planningSpeakerRoles)



    return (
        <div className={CSS.wrapper}>
			<header className={CSS.header}>
				<Duration startTime={session.beginsAt} endTime={session.endsAt} />
                { session.place && <Location location={session.place} /> }
			</header>

			<div className={CSS.content} >
                <p className={CSS.title}>{session.title}</p>
                {/* <small style={{ color: `lime` }}>{session.id}</small> */}

                {
                    session.categories.length
                        ? <Tags tagArray={session.categories}/>
                        : null
                }

                {/* start custom content ========================================= */}

                {
                    customContent && customContent
                }

                {/* end custom content =========================================== */}

				{
                    session.htmlDescription
                        ? <div className='formatted'>{parse( session.htmlDescription )}</div>
                        : null
				}

                <Speakers speakerData={session.planningSpeakerRoles} />
			</div>
		</div>
    )
}







const Duration = ({ startTime, endTime }) => {
    if ( !startTime ) return

	return (
		<p>
			{ format( new Date(startTime), "HH:mm" ) } - { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				endTime &&
				<span>&ensp;<StopwatchIcon fill={'var(--accent)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
			}
		</p>
	)
}

const Location = ({ location }) => {
    if ( !location ) return
	
    return (
		<p className={CSS.location}><LocationIcon fill={'var(--accent)'} />{ location }</p>
	)
}

const Speakers = ({ speakerData }) => {
    if ( !speakerData ) return
    
    // merge all speakers
    const allSpeakers = speakerData.flatMap(group => group.speakers || [])

    // find host
    const hostId = 'U3BlYWtlcihFdmVudF80MzA3NjUyLEV2ZW50UGVvcGxlXzQ3NDk5MzI5LFVzZXJfMTA5NzY4Nzkp'
    const host = allSpeakers.filter(speaker => speaker.id === hostId)
    const speakers = allSpeakers.filter(speaker => speaker.id !== hostId)

    // find judges
    const judgeIds = [
        "U3BlYWtlcihFdmVudF80MzA3NjUyLEV2ZW50UGVvcGxlXzQ3NzMyNzAyLFVzZXJfMjkwOTYwMjgp",
        "U3BlYWtlcihFdmVudF80MzA3NjUyLEV2ZW50UGVvcGxlXzQ4MTE2MzY1KQ==",
        "U3BlYWtlcihFdmVudF80MzA3NjUyLEV2ZW50UGVvcGxlXzQ4NTIxODY2LFVzZXJfMjU3NjYxOTgp",
    ]
    const judges = allSpeakers.filter(speaker => judgeIds.includes(speaker.id))
    
    // startups = all the remaining speakers
    const startups = allSpeakers.filter(
        speaker => speaker.id !== hostId && !judgeIds.includes(speaker.id)
    )
    
    // console.log('host;', host)
    // console.log('judges:', judges)
    // console.log('startups:', startups)

    return (
        <div>

            <div className={CSS.speakerGridSection}>
                { host.map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} label={'Host'} />) }
                { _.orderBy(judges, 'lastName').map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} label={'Judge'} />) }
            </div>
            
            <div><p className='c-accent fw-600 fs-sm mt-sm mb-xs'>Startups</p></div>
            
            <div className={CSS.speakerGridSection}>
                { _.orderBy(startups, 'lastName').map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} />) }
            </div>

        </div>
    )
}

const SpeakerCard = ({ speaker, label }) => {
    if ( !speaker ) return 
    
    return (
        <div className={CSS.speakerCard}>
            <div className={CSS.speakerAvatar}>
                <img src={speaker.photoUrl} alt="" />
            </div>
            {
                label &&
                <p className='c-accent fs-sm'>{label}</p>
            }
            {/* <small style={{ color: `lime` }}>{speaker.id}</small> */}
            <p>{speaker.firstName} {speaker.lastName}</p>
            <p>{speaker.jobTitle}</p>
            <p>{speaker.organization}</p>
        </div>
    )
}

const Tags = ({ tagArray }) => {
    return (
        <div className={CSS.tags}><TagIcon fill={`var(--accent)`}/> {tagArray.map((category, i) => <span key={i} className={CSS.tag}>{category}</span>)}</div>
    )
}