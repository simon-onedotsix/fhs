import Image from 'next/image'

import CSS from './award-winner-card.module.css'
import { Award } from '../../icons/award'

export const AwardWinnerCard = ({ index, year, award, url, photoUrl, fullName, jobTitle, company }) => {
    return (
        <a href={url} className={CSS.layout}>

            <p className='fs-2 ff-space' style={{ opacity: index < 1 ? 1 : 0 }}>{ year }</p>
                                            
            <div className={CSS.award}>
                <Award />
                <p className='fs-6 fw-300 lh-1 c-accent caps ff-space'>{ award }</p>
            </div>

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