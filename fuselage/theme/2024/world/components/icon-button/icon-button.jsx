import Link from 'next/link'
import CSS from './icon-button.module.css'

import VideoSVG from './img/icon-video.svg'
import PodcastSVG from './img/icon-podcast.svg'
import NewsSVG from './img/icon-page.svg'

export const IconButton = ({ href, type }) => {

    // console.log('type:', type)

    const handleType = ( type ) => {
        if ( !type ) return

        switch ( type ) {
            case 'podcast' : return <PodcastSVG/>
                break

            case 'video' : return <VideoSVG/>
                break
            
            case 'videos-and-webinars' : return <VideoSVG/>
                break

            case 'press-room' : return <NewsSVG/>
                break

            default : return <NewsSVG/>
        }
    }

    const handleLabel = ( type ) => {

        switch ( type ) {
            case 'podcast' : return 'Listen'
                break

            case 'video' : return 'Watch'
                break

            case 'videos-and-webinars' : return 'Watch'
                break

            case 'press-room' : return 'Read'
                break

            default: return 'Read more'
        }
    }


    return (
        <Link href={href}>
            <a className={`${CSS.button} uLink c-primary-3`}>
                <span className={CSS.iconContainer}>{handleType(type)}</span> <span className='c-white'>{handleLabel(type)}</span>
            </a>
        </Link>
    )
}