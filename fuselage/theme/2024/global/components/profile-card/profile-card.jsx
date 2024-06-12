import Image from 'next/image'

import CSS from './profile-card.module.css'

export const ProfileCard = ({ profile }) => {
    return (
        <div className={CSS.layout}>

            <div className={CSS.photo}>
                {
                    profile.avatar.length ? 
                    <Image 
                        src={profile.avatar[0].url} 
                        width={370} 
                        height={370} 
                        alt=""
                    />
                    : 
                    <Image 
                        src='/assets/ui/avatar-fallback.png' 
                        width={370} 
                        height={370} 
                        alt=""
                    />
                }
            </div>

            <div className={CSS.details}>
                <p className='fw-700 fs-6 lh-2'>{ profile.title }</p>
                <p className='mt-xxs'>{ profile.positions && profile.positions.length ? profile.positions[0].jobTitle : null }</p>
                <p className='fw-500 lh-2'>{ profile.positions && profile.positions.length ? profile.positions[0].organisation : null }</p>
            </div>

        </div>
    )
}