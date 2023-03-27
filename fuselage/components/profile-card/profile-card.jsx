import { Avatar } from '../avatar/avatar'

import CSS from './profile-card.module.css'

export const ProfileCard = ({ profile }) => {
    return (
        <div className={CSS.layout}>
            <div className={CSS.avatar}>
                {
                    profile.avatar.length ?
                        <Avatar src={profile.avatar[0].url} alt={ profile.title } />
                    :
                        <Avatar src={`/assets/ui/avatar-fallback.png`} alt={ profile.title } />
                }
            </div>

            <div className={CSS.details}>
                <p className='fw-700 fs-6 lh-2'>{ profile.title }</p>
                <p>{ profile.positions && profile.positions.length ? profile.positions[0].jobTitle : null }</p>
                <p className='fw-500 lh-2'>{ profile.positions && profile.positions.length ? profile.positions[0].organisation : null }</p>
            </div>
        </div>
    )
}