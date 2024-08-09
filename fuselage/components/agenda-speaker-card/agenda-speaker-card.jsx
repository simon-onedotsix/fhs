import Image from 'next/image'

import CSS from './agenda-speaker-card.module.css'

export const AgendaSpeakerCard = ({ url, color, speaker }) => {

    if ( !speaker ) return
    
    return (
        <a href={url} className={CSS.layout}>
            
            <div className={CSS.photoContainer}>
                {
                    speaker.photoUrl ?
                        <Image className={CSS.photo} src={speaker.photoUrl} layout='fill' alt=""/>
                    :
                        <Image className={CSS.photo} src={`/assets/ui/avatar-fallback.png`} layout='fill' alt=""/>
                }
            </div>

            <div className={`pt-xs ${ color ? color : 'c-primary'}`}>
                <p className='fs-6 fw-600 lh-1 caps'>{ speaker.firstName } { speaker.lastName }</p>
                <p className='fs-sm fw-300 mt-xxs'>{ speaker.jobTitle }</p>
                <p className='fs-sm fw-500'>{ speaker.organization }</p>
            </div>

        </a>
    )
}