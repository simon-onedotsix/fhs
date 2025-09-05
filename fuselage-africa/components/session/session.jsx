import { Avatar } from '../avatar/avatar'

import TimeIcon from './img/icon-time.svg'
import TagIcon from './img/icon-tag.svg'

import CSS from './session.module.css'

export const Session = ({ children,  startTime, endTime, tags, stream, theme }) => {
   
    const handleStreams = () => {
        if ( !stream ) return

        switch (stream) {
            case 3:
                return CSS.cols3
                break

            case 2:
                return CSS.cols2
        
            default:
                break
        }
    }

    return (
        <div 
            className={`${CSS.layout} ${stream && CSS.stream} ${handleStreams()}`} 
            style={{ borderLeftColor: theme }}>

            <div className={CSS.timings} style={{ backgroundColor: theme}}>
                <p className='fw-500'>{ startTime } - { endTime }</p>

                {
                    tags && 
                    tags.map((tag, index) => (
                        <p key={index} className={`${CSS.tag} fw-600`} style={{ color: theme}}>
                            <TagIcon className={CSS.icon} style={{ fill: theme}} />{ tag }
                        </p>
                    ))
                }
            </div>

            <div className={CSS.content}>
                { children }
            </div>

        </div>
    )

}

export const SessionSpeaker = ({ id, avatarUrl, role, firstname, lastname, title, company }) => {
    return (
        <div key={id} className={`${CSS.speakerCard} mt-xs`}>
            {
                avatarUrl ? <Avatar src={avatarUrl}/>
                : <Avatar src={`/assets/ui/avatar-fallback.png`}/>
            }
            
            <p className='mt-xs lh-2 fw-600'>
                {
                    role &&
                    <>
                        <span className={`${CSS.role} fs-xs caps fw-600`}>{ role }</span><br/>
                    </>
                }
                {firstname} {lastname} 
            </p>
            <p className='mt-xxs lh-1 fs-sm'>{title}, {company}</p>
        </div>
    )
}

export const SessionSpeakerGrid = ({ children }) => {
    return (
        <div className={CSS.speakerGrid}>
            { children }
        </div>
    )
}