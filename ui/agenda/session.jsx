import { format } from 'date-fns'
import parse from 'html-react-parser'
import convertSeconds from '../../lib/convertSeconds'

import Link from 'next/link'

import { StopwatchIcon, LocationIcon, TagIcon } from '../icons/icons'

import CSS from './session.module.css'

export const Session = ({ session }) => {
    
    if (!session) return

    // console.log(session)
    // if ( session.id === 'UGxhbm5pbmdfNDQ0NTg3Mw==' ) console.log(session)
    // if ( session.id === 'UGxhbm5pbmdfNDQ0NTg3Mw==' ) console.log(session.planningSpeakerRoles)

    const breakTitle = ( trigger, titleString, splitPoint ) => {
		if ( !titleString.includes(trigger) ) return titleString
		let lines = titleString.split(splitPoint)
		return `${lines[0]}:<br/>${lines[1]}`		
	}

    return (
        <div className={CSS.wrapper}>
			<header className={CSS.header}>
				<Duration startTime={session.beginsAt} endTime={session.endsAt} />
                { session.place && <Location location={session.place} /> }
			</header>

			<div className={CSS.content} >
                <p className={CSS.title}>{parse(breakTitle(":", session.title, ": "))}</p>
                {/* <small style={{ color: `lime` }}>{session.id}</small> */}

                {
                    session.categories.length
                        ? <Tags tagArray={session.categories}/>
                        : null
                }

                {/* start custom content ================================================================ */}
                {/* FHS WORLD: add speed networking sponsor logo */}
                {
                    session.id === "UGxhbm5pbmdfNDQ0NTg3Mg==" ||
                    session.id === "UGxhbm5pbmdfNDQ0NTkwMQ==" ||
                    session.id === "UGxhbm5pbmdfNDUzMDc3Nw=="
                        ? <div>
                            <p className="fs-sm caps mb-xxs">Sponsored by</p>
                            <Link href={`/world/partners/RXhoaWJpdG9yXzIzODA4MjY=`}>
                                <a style={{ display: `inline-block`, backgroundColor: `white`, padding: 10, borderRadius: 5 }}>
                                    <img src="/assets/img/world/pages/partners/FSK-Logo-Horizontal.png" alt="" width={100} />
                                </a>
                            </Link>
                            </div>
                        : null
                }

                {/* FHS WORLD: add images to networking reception */}
                {
                    session.id === "UGxhbm5pbmdfNDQ2MzI4Mw=="
                        ? <div className="columns-3 gap-xs">
                            <img src="/assets/img/world/pages/agenda/networking-01.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/networking-02.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/networking-03.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            </div>
                        : null
                }

                {/* FHS WORLD: add images to padel */}
                {
                    session.id === "UGxhbm5pbmdfNDU4NDEyMQ=="
                        ? <div className="columns-3 gap-xs">
                            <img src="/assets/img/world/pages/agenda/padel-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/padel-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/padel-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            </div>
                        : null
                }

                {/* FHS WORLD: add images to beach pilates */}
                {
                    session.id === "UGxhbm5pbmdfNDU4NDEyMw=="
                        ? <div className="columns-3 gap-xs">
                            <img src="/assets/img/world/pages/agenda/beach-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/beach-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/beach-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            </div>
                        : null
                }

                {/* FHS WORLD: add images to networking reception */}
                {
                    session.id === "UGxhbm5pbmdfNDQ2MzI4NA=="
                        ? <div className="columns-3 gap-xs">
                            <img src="/assets/img/world/pages/agenda/mcgettigans-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/mcgettigans-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/mcgettigans-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            </div>
                        : null
                }

                {/* FHS WORLD: add images to breathwork */}
                {
                    session.id === "UGxhbm5pbmdfNDU4NDEyNQ=="
                        ? <div className="columns-3 gap-xs">
                            <img src="/assets/img/world/pages/agenda/breathwork-1.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/breathwork-2.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            <img src="/assets/img/world/pages/agenda/breathwork-3.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
                            </div>
                        : null
                }
                {/* end custom content ================================================================ */}

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
    
    // segregate speakers
    const moderators = speakerData.find(r => r.role.planningLabel === 'Moderators').speakers
    const speakers = speakerData.find(r => r.role.planningLabel === 'Speakers').speakers

    // check moderators or speakers exist
    if (!moderators.length && !speakers.length) return

    return (
        <div className={CSS.speakerGrid}>
            {
                moderators.length ?
                <div>
                    <p className={CSS.speakerTypeLable}>{moderators.length > 1 ? `Moderators` : `Moderator`}</p>
                    <div className={CSS.speakerGridSection}>
                        { moderators.map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} />) }
                    </div>
                </div>
                : null
            }
            {
                speakers.length ?
                <div>
                    { moderators.length ? <p className={CSS.speakerTypeLable}>In conversation with</p> : null }
                    <div className={CSS.speakerGridSection}>
                        { speakers.map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} />) }
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