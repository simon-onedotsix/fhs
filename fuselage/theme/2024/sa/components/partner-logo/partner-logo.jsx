import Image from "next/image"

import CSS from './partner-logo.module.css'

export const PartnerLogo = ({ hero, size, alt, label }) => {

    if ( !hero.url ) return

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
        <div>
            <div className={`${CSS.logo} ${handleSize()}`}> 
                <Image
                    src={hero.url}
                    alt={alt}
                    layout={`fill`}
                />
            </div>
            { label && <p className={CSS.label}>{label}</p> }
        </div>
    )
}

export const PartnerLogoGrid = ({ children }) => {
    return <div className={CSS.grid}>{ children }</div>
}

export const PartnerCategoryGrid = ({ children }) => {
    return <section className={`container center pt-lg ${CSS.categoryGrid}`}>{ children }</section>
}

export const PartnerCategory = ({ children, width }) => {
    return <section className={`${CSS.category} ${ width ? CSS.single : '' }`}>{ children }</section>
}
