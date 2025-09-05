import Image from "next/image"

import CSS from './partner-logo.module.css'

export const PartnerLogo = ({ src, alt }) => {
    return (
        <div className={CSS.logo}> 
            <Image
                src={src}
                alt={alt}
                width={500}
                height={300}
            />
        </div>
    )
}

export const PartnerLogoGrid = ({ children }) => {
    return <div className={CSS.grid}>{ children }</div>
}