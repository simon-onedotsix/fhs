import Image from "next/image"

import { LogoGrid } from "../fuselage/layout/logo-grid/logo-grid"

import CSS from '../css/app/partners.module.css'


const partnerLevels = [
    { level: 1, label: 'Host Sponsor' },
    { level: 2, label: 'Platinum Sponsor' },
    { level: 3, label: 'Emerald Sponsor' },
    { level: 4, label: 'Gold Sponsor' },
    { level: 5, label: 'Silver Sponsor' },
    { level: 6, label: 'Supporter' },
    { level: 7, label: 'Media Partner' },
    { level: 8, label: 'Innovation Media Partner' },
    { level: 9, label: 'Partner' },
    { level: 10, label: 'Enablement Partner' }
]



// export const GetAllBizzaboParterLevels = ( data ) => {
//     return (
//         partnerLevels.forEach( level => GetBizzaboPartersByLevel( level.level, data ) )
//     )
// }



// export const GetAllBizzaboParterLevels = ( data ) => {

//     partnerLevels.forEach( level => {

//         let currentLevelPartners = data.filter( partner => partner.level === level.level )

//         if ( currentLevelPartners.length ) {
//             console.log('PARTNERS LEVEL:', level)
//             currentLevelPartners.map( partner => {
//                 console.log('PARTNER:', partner.name)
//             })
//         }


//     })

// }


export const GetBizzaboPartersByLevel = ( levelId, data ) => {

    if ( levelId && data ) {

        let currentLevelLabel = partnerLevels.filter( level => level.level === levelId )
        let currentLevelPartners = data.filter( partner => partner.level === levelId )
    
        return (
            <div className="container center pt-sm">
                <p className="fw-500 caps c-secondary mb-sm">{currentLevelLabel[0].label}</p>
                <LogoGrid>
                    {
                        currentLevelPartners.map( partner => (
                            <a key={partner.id} href={`/partners/${partner.id}`} rel="noreferrer" aria-label="Partner logo">
        
                                <div className={CSS.logo}>
                                    <Image 
                                        src={partner.logo} 
                                        width={500}
                                        height={400}
                                        layout='responsive'
                                        alt=""
                                    />
                                </div>
        
                            </a>
                        ))
                    }
                </LogoGrid>
            </div>
        )

    } else {

        return (
            <div className="container center pt-sm">
                <p className="c-primary">No partners found</p>
            </div>
        )
        
    }

}



export const GetAllBizzaboParters = ( data ) => {

    if ( data ) {

        return (
            <div className="container center pt-sm">
                <LogoGrid>
                    {
                        data.map( partner => (
                            <a key={partner.id} href={`/partners/${partner.id}`} rel="noreferrer" aria-label="Partner logo">
        
                                <div className={CSS.logo}>
                                    <Image 
                                        src={partner.logo} 
                                        width={500}
                                        height={400}
                                        layout='responsive'
                                        alt=""
                                    />
                                </div>
        
                            </a>
                        ))
                    }
                </LogoGrid>
            </div>
        )

    } else {

        return (
            <div className="container center pt-sm">
                <p className="c-primary">No partners found</p>
            </div>
        )
        
    }

}


export const GetBizzaboPartnerLevelTitle = ( id ) => {
    if ( !id ) return
    let title = partnerLevels[id - 1].label
    return title
}