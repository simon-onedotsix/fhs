import { Avatar } from '../avatar/avatar'

import TimeIcon from './img/icon-time.svg'
import TagIcon from './img/icon-tag.svg'

import CSS from './session.module.css'



export const Session = ({ id, children, startTime, endTime, tags, theme }) => {

    return (
        <>
            <div id={`session-${id}`} className={`scrollShim no-print`}></div>
            <div className={`${CSS.layout} ${tags} bg-white-90`} style={{ borderLeftColor: theme }}>

                <div className={CSS.timings} style={{ backgroundColor: theme}}>
                    <p className='fw-500'>{ startTime } - { endTime }</p>

                    <div className={CSS.tagGroup}>
                        {
                            tags ? 
                            tags.map((tag, index) => {
                                if ( tag ) return (
                                    <p key={index} className={`${CSS.tag} fw-600`} style={{ color: theme}}>
                                        <TagIcon className={CSS.icon} style={{ fill: theme}} />{ tag }
                                    </p>
                                )
                            }) : null
                        }

                    </div>

                </div>

                <div className={CSS.content}>
                    { children }
                </div>

            </div>
        </>
    )
}


export const SessionSpeaker = ({ id, avatarUrl, role, firstname, lastname, title, company, bio }) => {

    return (
        <div key={id} className='mt-xs'>

            <div className={`${bio && CSS.avatar} no-print`}>
                { avatarUrl ? <Avatar src={avatarUrl}/> : <Avatar src={`/assets/ui/avatar-fallback.png`}/> }
            </div>
            
            <p className='mt-xs lh-2 fw-600'>
                { role && <><span className={`${CSS.role} fs-xs caps fw-600 no-print`}>{ role }</span><br className='no-print'/></> }
                {firstname} {lastname} 
            </p>
            <p className='mt-xxs lh-1 fs-sm'>{title}{company ? `, ${company}` : ''}</p>
            
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