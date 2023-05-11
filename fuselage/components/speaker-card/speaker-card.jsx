import Image from 'next/image'

import CSS from './speaker-card.module.css'

export const SpeakerCard = ({ url, photoUrl, fullName, jobTitle, company }) => {
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

            <div className='pt-xs'>
                <p className='fs-5 fw-600 lh-1 caps'>{ fullName }</p>
                <p className='fs-sm fw-300 mt-xxs'>{ jobTitle }</p>
                <p className='fs-sm fw-500'>{ company }</p>
            </div>

        </a>
    )
}