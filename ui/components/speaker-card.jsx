import Image from 'next/image'

import CSS from './speaker-card.module.css'

export const SpeakerCard = ({ url, color, photoUrl, fullName, positions, jobTitle, company, specialField }) => {
    if (url) return (
        <a href={url} className={CSS.link}>
            <Layout url={url} color={color} photoUrl={photoUrl} fullName={fullName} positions={positions} jobTitle={jobTitle} company={company} specialField={specialField} />
        </a>
    )

    return <Layout url={url} color={color} photoUrl={photoUrl} fullName={fullName} positions={positions} jobTitle={jobTitle} company={company} specialField={specialField} />
}




const Layout = ({ url, color, photoUrl, fullName, positions, jobTitle, company, specialField }) => {
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

            <div className={`pt-xs ${color ? color : 'c-primary'}`}>
                {
                    specialField &&
                    <p className='fw-600 c-primary-2 lh-1 mb-xxs'>{specialField}</p>
                }
                <p className='fs-5 fw-600 lh-1 caps balance mb-xxs'>{fullName}</p>
                {
                    positions
                        ?
                            <>
                                {
                                    positions.map((position, index) => (
                                        <p className='fs-sm fw-300 balance'>{position.jobTitle}, <span className='fw-500 balance'>{position.organisation}</span></p>
                                    ))
                                }
                            </>
                        :
                            <>
                                <p className='fs-sm fw-300 balance'>{ jobTitle },</p>
                                <p className='fs-sm fw-500 balance'>{ company }</p>
                            </>
                }
            </div>

        </div>
    )
}