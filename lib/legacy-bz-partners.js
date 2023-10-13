import Image from "next/image"

import { LogoGrid } from "../fuselage/layout/logo-grid/logo-grid"

import CSS from '../css/app/partners.module.css'

const partnerLevels = [
    { level: 1, label: 'Platinum Sponsor', size: 'lg' },
    { level: 2, label: 'Gold Sponsor', size: 'lg' },
    { level: 3, label: 'Sponsor', size: 'md' },
    { level: 4, label: 'Silver Sponsor', size: 'md' },
    { level: 5, label: 'Media Partner', size: 'md' },
    { level: 6, label: 'Supporter', size: 'md' },
    { level: 7, label: 'Airport Exhibitor', size: 'md' },
    { level: 8, label: 'Airline', size: 'md' },
    { level: 9, label: 'Charity', size: 'md' },
]

export const GetLegacyBzPartners = ( data, levelId, levelType, levelHeading, logoSize, siteLocaleSlug, year ) => {

    if ( !data ) return

    let partnerCategory
    let bizzaboPartnersByLevel = data.filter( partner => partner.level === levelId )
    let bizzaboPartnersByType = data.filter( partner => partner.type === levelType )

    // console.log('bizzaboPartnersByLevel:',bizzaboPartnersByLevel)
    // console.log('sponsorLevelType [from CMS]:', levelType, levelHeading)
    
    
    levelType === 'EXHIBITOR' ? partnerCategory = bizzaboPartnersByType : partnerCategory = bizzaboPartnersByLevel

    if ( partnerCategory.length ) {
        return (
            <div className="container center pt-sm">
                <p className="fs-6 fw-600 caps c-primary mb-sm">{ levelHeading }</p>
                <LogoGrid>
                    {
                        partnerCategory.map( partner => {
                            if ( !partner.visible ) return
                            return (
                                <a key={partner.id} href={`/${siteLocaleSlug}/${year}/partners/${partner.id}`} rel="noreferrer" aria-label="Partner logo">
                                    <div className={`${CSS.logo} ${logoSize === 'lg' ? CSS.lg : ''}`}>
                                        <Image 
                                            src={partner.logo} 
                                            width={500}
                                            height={400}
                                            layout='responsive'
                                            alt=""
                                            unoptimized
                                        />
                                    </div>
            
                                </a>
                            )
                        })
                    }
                </LogoGrid>
            </div>
        )
        
    } else {
        return
    }
        
}