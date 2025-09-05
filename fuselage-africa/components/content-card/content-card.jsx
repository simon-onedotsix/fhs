import Image from 'next/image'
import Link from 'next/link'

import { format } from 'date-fns'

import { ArrowLink } from '../arrow-link/arrow-link'

import CSS from './content-card.module.css'

export const ContentCard = ({ url, heroUrl, heading, excerpt, contentTypes, postDate }) => {

    // console.log('contentTypes:', contentTypes)

    const handleCategories = () => {
        if ( !contentTypes ) return
        return (
            <p className="fs-sm fw-600 c-primary">
                { contentTypes.map( (type, index) => <span key={type.id}>{index > 0 ? <span className="fw-400 c-primary">&ensp;|&ensp;</span> : ''}{type.title}</span> ) }
            </p>
        )
    }

    return (
        <div className={CSS.layout}>

            <Link href={url}>
                <a className={CSS.hero}>
                    {
                        heroUrl ?
                        <Image src={ heroUrl } layout='fill' alt="" />
                        : 
                        <Image src={`/assets/theme/placeholder-card.png`} layout='fill' alt="" />
                    }
                </a>
            </Link>

            <div className='formatted'>
                <div className={CSS.meta}>
                    {handleCategories()} 
                    {/* <p className='fs-sm fw-600 c-primary'>{ format(new Date(postDate), 'dd MMM yyyy') }</p> */}
                </div>
                <Link href={url}><a className={`${CSS.titleLink} fs-4 fw-600 c-dark lh-2`}>{ heading }</a></Link>
                <p className='mt-xxs'>{ excerpt }</p>
                <p className='caps fs-sm fw-500'><ArrowLink href={url} direction='right'>Read more</ArrowLink></p>
            </div>

        </div>
    )
}