import Image from 'next/image'

import CSS from './avatar.module.css'

export const Avatar = ({ src, alt }) => {
    return (
        <div className={CSS.avatar}>
            <Image src={src} layout='fill' alt={alt} />
        </div>
    )
}