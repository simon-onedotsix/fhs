import Image from 'next/image'
import Link from 'next/link'

import CSS from './speaker-card.module.css'

export const SpeakerCard = ({ url, photoUrl, fullName, jobTitle, company }) => {
    
    if (url) return (
        <Link href={url}>
            <a className={CSS.layout}>
                <div className={CSS.photoContainer}>
                    {
                        photoUrl ?
                            <Image className={CSS.photo} src={photoUrl} layout='fill' alt=""/>
                        :
                            <Image className={CSS.photo} src={`/assets/ui/avatar-fallback.png`} layout='fill' alt=""/>
                    }
                </div>
            
                <div className='pt-xs pr-xs'>
                    <p className='fs-5 fw-600 lh-1 c-secondary'>{ fullName }</p>
                    <p className='fs-sm mt-xxs'>{ jobTitle }{ jobTitle && <br/> }
                    <span className='fs-sm fw-500'>{ company }</span></p>
                </div>
            </a>
            

        </Link>
    )

    return (
        <div className={CSS.layout}>
            <div className={CSS.photoContainer}>
                {
                    photoUrl ?
                        <Image className={CSS.photo} src={photoUrl} layout='fill' alt=""/>
                    :
                        <Image className={CSS.photo} src={`/assets/ui/avatar-fallback.png`} layout='fill' alt=""/>
                }
            </div>
        
            <div className='pt-xs pr-xs'>
                <p className='fs-5 fw-600 lh-1'>{ fullName }</p>
                <p className='fs-sm mt-xxs'>{ jobTitle }{ jobTitle && <br/> }
                <span className='fs-sm fw-500'>{ company }</span></p>
            </div>
        </div>
    )
}