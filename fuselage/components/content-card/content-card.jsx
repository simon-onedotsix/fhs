import Image from 'next/image'
import Link from 'next/link'

import { IconButton } from '../icon-button/icon-button'

import FhsLogoSVG from '../../global/header/img/FHS-logo-white.svg'
import CSS from './content-card.module.css'

export const ContentCard = ({ url, heroUrl, heading, excerpt, type }) => {

    // console.log('contentTypes:', contentTypes)

    return (
        <div className={CSS.layout}>

            <Link href={url}>
                <a className={`${CSS.hero} bg-theme`}>
                    {
                        heroUrl ?
                        <Image src={ heroUrl } layout='fill' alt="" />
                        : 
                        <FhsLogoSVG className={CSS.placeholderLogo} />
                    }
                </a>
            </Link>

            <div className='formatted pt-xs'>
                <Link href={url}><a className={`${CSS.titleLink} h fs-4 fw-600 lh-2 mt-xxs`}>{ heading }</a></Link>
                <p className='mt-xxs'>{ excerpt }</p>
                                
                <p className='fw-500'>
                    <IconButton href={url} type={type} />
                </p>
            </div>

        </div>
    )
}