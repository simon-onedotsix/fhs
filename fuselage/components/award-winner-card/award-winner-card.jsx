import Image from 'next/image'

import CSS from './award-winner-card.module.css'
import { Award } from '../../icons/award'

export const AwardWinnerCard = ({ event, year, award, url, photoUrl, fullName, jobTitle, company, theme }) => {
    return (
        <a href={url} className={CSS.layout}>

            <p className='fs-2' style={{ opacity: year ? 1 : 0 }}>{ year ? year : '_' }</p>
                                            
            <div className={CSS.award} style={{ borderLeftColor: theme ? theme : `var(--secondary)` }}>
                <Award fill={theme ? theme : `var(--secondary)`} />
                <div style={{ color : theme ? theme : `var(--secondary)`}}>
                    { event ? <p className='fs-sm fw-600' style={{ marginBottom: 2 }}>{ event }</p> : null }
                    <p className='fs-6 fw-400 lh-1 caps'>{ award }</p>
                </div>
                
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
                {
                    jobTitle ?
                        <p className='fs-sm fw-300 mt-xxs'>{ jobTitle }</p>
                    : null
                }
                {
                    company ?
                        <p className='fs-sm fw-500'>{ company }</p>
                    : null
                }
            </div>

        </a>
    )
}