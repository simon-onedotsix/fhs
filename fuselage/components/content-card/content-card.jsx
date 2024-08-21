import Image from 'next/image'
import Link from 'next/link'

import { IconButton } from '../icon-button/icon-button'

import FhsLogoSVG from '../../global/header-legacy/img/FHS-logo-white.svg'
import CSS from './content-card.module.css'

export const ContentCard = ({ url, heroUrl, heading, excerpt, type, background }) => {

    // console.log('contentTypes:', contentTypes)

    return (
        <div className={CSS.layout} style={{ background: background ? `hsl( from ${background} h s calc(l - 4) )` : 'hsl( from var(--primary) h s calc(l - 4) )' }}>

            <Link href={url}>
                <a className={CSS.hero}>
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