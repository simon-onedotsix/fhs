import Image from "next/image"

import CSS from './partner-logo.module.css'

export const PartnerLogo = ({ hero, alt }) => {

    if ( !hero ) return
    
    return ( 
        <div className={CSS.logo}> 
            <Image
                src={hero.url}
                alt={alt}
                layout={`fill`}
            />
        </div>
    )
}

export const PartnerLogoGrid = ({ children }) => {
    return <div className={CSS.grid}>{ children }</div>
}