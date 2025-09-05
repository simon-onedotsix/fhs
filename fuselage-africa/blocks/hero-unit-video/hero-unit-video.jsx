import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'

import { Button } from '../../components/button/button'

import CSS from './hero-unit-video.module.css'

export const RenewHeroUnitVideo = ({ eventInfo, decal }) => {

    const videoPlayer = useRef(null)
    
    const tagline01 = useRef(null)
    const tagline02 = useRef(null)
    const tagline03 = useRef(null)
    const actions = useRef(null)

    useEffect(() => {

        // console.log(videoPlayer.current.currentTime.toFixed(1))
        // console.log(videoPlayer.current.paused)
        
        
        const timer = setInterval(() => {        
            
            if ( !videoPlayer.current.paused ) {
                
                let timeStamp = parseFloat(videoPlayer.current.currentTime.toFixed(1))
                // console.log('video timestamp', timeStamp)
                
                if ( timeStamp >= 1 ) {
                    tagline01.current.style.opacity = 1
                    tagline01.current.style.transform = 'translateX(0)'
                }
                if ( timeStamp >= 4 ) {
                    tagline02.current.style.opacity = 1
                    tagline02.current.style.transform = 'translateX(0)'
                }
                if ( timeStamp >= 5 ) {
                    tagline03.current.style.opacity = 1
                    tagline03.current.style.transform = 'translateX(0)'
                }
                if ( timeStamp >= 6 ) {
                    actions.current.style.opacity = 1
                    actions.current.style.transform = 'translateY(0)'
                }
    
                if ( timeStamp > 6.1 ) {
                    clearInterval(timer)
                }
            }

        }, 100)

        // clear interval
        return () => clearInterval(timer)
    }, [])

    return (
        <section className={`${CSS.heroUnit} ${decal}`}>

            <div className={CSS.background}>
                <video 
                    ref={videoPlayer} 
                    autoPlay 
                    muted 
                    className={CSS.bgVideo}
                    poster='/assets/video/renew-2022-theme.jpg'
                >
                    <source src='/assets/video/renew-2022-theme-long.mp4' type="video/mp4"/>
                </video>
            </div>

            <div className={CSS.overlay}>
                <div className={`${CSS.container} container`}>
                    <div className="mt-lg">

                        <div className={CSS.taglineContainer}>
                            <div ref={tagline01} className={CSS.taglineImg01}>
                                <Image src='/assets/theme/RENEW-tagline-1@2x.png' width={579} height={74} alt=""/>
                            </div>
                            <div ref={tagline02} className={CSS.taglineImg02}>
                                <Image src='/assets/theme/RENEW-tagline-2@2x.png' width={579} height={77} alt=""/>
                            </div>
                            <div ref={tagline03} className={CSS.taglineImg03}>
                                <Image src='/assets/theme/RENEW-tagline-3@2x.png' width={577} height={74} alt=""/>
                            </div>
                        </div>

                        <div ref={actions} className={CSS.actions}>
                            <div className='maxw-40 my-sm'>
                                <p className='fs-3 fw-600 lh-1' style={{ whiteSpace: `pre-wrap` }}>{eventInfo.date}</p>
                                <p className='fs-4 fw-400 lh-1 mt-xs'>{eventInfo.location}</p>
                            </div>
                            <div className='maxw-40 my-sm'>
                                <Button 
                                    href={eventInfo.ctaButtonLink}
                                    inverse
                                    decal="fs-5 fw-700 caps" 
                                    accent
                                > 
                                    {eventInfo.ctaButtonLabel}
                                </Button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}



RenewHeroUnitVideo.propTypes = {
    heroVideo: PropTypes.string,
    decal: PropTypes.string
}
RenewHeroUnitVideo.defaultProps = {
    heroVideo: '/assets/theme/hero-homepage.jpg',
    decal: 'c-white'
}