import Image from "next/image"

import CSS from './partner-logo.module.css'

export const PartnerLogo = ({ hero, size, alt }) => {

    if ( !hero ) return

    const handleSize = () => {
        switch (size) {
            case 'lg':
                return CSS.lg
                break
        
            default:
                break
        }
    }
    
    return ( 
        <div className={`${CSS.logo} ${handleSize()}`}> 
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