import { format } from 'date-fns'
import parse from 'html-react-parser'
import _ from 'lodash'
import convertSeconds from '../../lib/convertSeconds'

import Link from 'next/link'

import { StopwatchIcon, LocationIcon, TagIcon } from '../icons/icons'

import CSS from './session.module.css'

export const SessionCustomSpeakerOrder = ({ session, customContent, theme, moderatorIds, speakerIds }) => {
    
    if (!session) return

    // console.log(session)
    if ( session.id === 'UGxhbm5pbmdfNDQ0NTg4OA==' ) console.log(session)
    if ( session.id === 'UGxhbm5pbmdfNDQ0NTg4OA==' ) console.log(session.planningSpeakerRoles)

    const breakTitle = ( trigger, titleString, splitPoint ) => {
		if ( !titleString.includes(trigger) ) return titleString
		let lines = titleString.split(splitPoint)
		return `${lines[0]}:<br/>${lines[1]}`		
	}

    return (
        <div className={CSS.wrapper} style={{ backgroundColor: theme ? theme : undefined }}>
			<header className={CSS.header}>
				<Duration startTime={session.beginsAt} endTime={session.endsAt} />
                { session.place && <Location location={session.place} /> }
			</header>

            <div className={CSS.content} >
                {
                    session.title &&
                    <p className={CSS.title}>{parse(breakTitle(":", session.title, ": "))}</p>
                }
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

                <Speakers speakerData={session.planningSpeakerRoles} moderatorIds={moderatorIds} speakerIds={speakerIds} />
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
				<span>&ensp;<StopwatchIcon fill={'var(--agenda-icons)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
			}
		</p>
	)
}

const Location = ({ location }) => {
    if ( !location ) return
	
    return (
		<p className={CSS.location}><LocationIcon fill={'var(--agenda-icons)'} />{ location }</p>
	)
}

const orderByIdArray = (items, orderedIds, fallbackKey = 'lastName') => {
    if (!Array.isArray(items) || !items.length) return []

    if (!Array.isArray(orderedIds) || !orderedIds.length) {
        return _.orderBy(items, [fallbackKey, 'firstName'])
    }

    const orderMap = new Map(orderedIds.map((id, index) => [String(id), index]))

    return [...items].sort((a, b) => {
        const aOrder = orderMap.get(String(a.id))
        const bOrder = orderMap.get(String(b.id))

        if (aOrder !== undefined || bOrder !== undefined) {
            if (aOrder === undefined) return 1
            if (bOrder === undefined) return -1
            return aOrder - bOrder
        }

        return String(a[fallbackKey] ?? '').localeCompare(String(b[fallbackKey] ?? '')) ||
            String(a.firstName ?? '').localeCompare(String(b.firstName ?? ''))
    })
}

const Speakers = ({ speakerData, moderatorIds, speakerIds }) => {
    if ( !speakerData ) return
    
    // segregate speakers
    const moderators = speakerData.find(r => r.role.planningLabel === 'Moderators')?.speakers
    const speakers = speakerData.find(r => r.role.planningLabel === 'Speakers')?.speakers

    // check moderators or speakers exist
    if (!moderators?.length && !speakers?.length) return

    return (
        <div className={CSS.speakerGrid}>
            {
                moderators?.length ?
                <div>
                    <p className={CSS.speakerTypeLable}>{moderators.length > 1 ? `Moderators` : `Moderator`}</p>
                    <div className={CSS.speakerGridSection}>
                        { orderByIdArray(moderators, moderatorIds).map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} />) }
                    </div>
                </div>
                : null
            }
            {
                speakers.length ?
                <div>
                    { moderators?.length ? <p className={CSS.speakerTypeLable}>In conversation with</p> : null }
                    <div className={CSS.speakerGridSection}>
                        { orderByIdArray(speakers, speakerIds).map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} />) }
                    </div>
                </div>
                : null
            }
        </div>
    )
}

const SpeakerCard = ({ speaker }) => {
    if ( !speaker ) return 
    
    return (
        <div className={CSS.speakerCard}>
            <div className={CSS.speakerAvatar}>
                <img src={speaker.photoUrl} alt="" />
			</div>
			{/* <small style={{ color: `lime` }}>{speaker.id}</small> */}
            <p>{speaker.firstName} {speaker.lastName}</p>
            <p>{speaker.jobTitle}</p>
            <p>{speaker.organization}</p>
        </div>
    )
}

const Tags = ({ tagArray }) => {
    return (
        <div className={CSS.tags}><TagIcon fill={`var(--agenda-icons)`}/> {tagArray.map((category, i) => <span key={i} className={CSS.tag}>{category}</span>)}</div>
    )
}