import Image from 'next/image'

import CSS from './speaker-card.module.css'

export const SpeakerCard = ({ url, color, photoUrl, fullName, jobTitle, company, specialField }) => {
    return (
        <a href={url} className={CSS.layout}>
            
            <div className={CSS.photoContainer}>
                {
                    photoUrl ?
                        <Image className={CSS.photo} src={photoUrl} layout='fill' alt=""/>
                    :
                        <Image className={CSS.photo} src={`/assets/ui/avatar-fallback.png`} layout='fill' alt=""/>
                }
            </div>

            <div className={`pt-xs ${color ? color : 'c-primary'}`}>
                {
                    specialField &&
                    <p className='fw-600 c-primary-2 lh-1 mb-xxs'>{specialField}</p>
                }
                <p className='fs-5 fw-600 lh-1 caps balance'>{ fullName }</p>
                <p className='fs-sm fw-300 mt-xxs balance'>{ jobTitle }</p>
                <p className='fs-sm fw-500 balance'>{ company }</p>
            </div>

        </a>
    )
}