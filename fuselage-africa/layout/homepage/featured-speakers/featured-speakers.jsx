import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { Pulse } from '../../../theme/pulse/pulse'
import { SpeakerCard } from '../../../components/speaker-card/speaker-card'
import { ArrowButton } from "../../../components/arrow-button/arrow-button"

import Chevron from './img/slider-chevron-right.svg'

import CSS from './featured-speakers.module.css'




export const FeaturedSpeakers = ({ speakers }) => {

    if ( !speakers ) return

    let containerRef = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })
    let y = useTransform( scrollYProgress, [0, 1], ['-4vw', '4vw'])

    return (

        <div ref={containerRef} className={CSS.layout}>

            <div className={CSS.pulseGraphic}><Pulse /></div>

            <div className={CSS.topGraphic}>
                <Image src={`/assets/theme/dune-top-02.png`} layout={`fill`} alt='' />
            </div>

            <div className={CSS.underlay}></div>

            <section className={`${CSS.content} block`}>
                <motion.div className='bl-1 bc-white pl-md' style={{ y }}>
                    <div className={`${CSS.headingGrid} container`}>
                        <p className="fs-1 fw-700 lh-1">Featured speakers</p>
                        <p><ArrowButton href={`/speakers`} theme={{ arrow: `white`, border: `white`, label: `white`}}>See all speakers</ArrowButton></p>
                    </div>

                    <div className={`${CSS.sliderLayout} container`}> 
                        <Splide hasTrack={false} aria-label="Speakers" options={{
                            pagination: false,
                            gap: '2rem',
                            perPage: 5,
                            perMove: 1,
                            breakpoints: {
                                600: {
                                    gap: '1rem',
                                    perPage: 2
                                },
                                900: {
                                    gap: '1rem',
                                    perPage: 3
                                }
                            }
                        }}>
                            <SplideTrack>
                                
                                {
                                    speakers &&
                                    speakers.map( profile => (
                                        <SplideSlide key={profile.id}>
                                            <SpeakerCard
                                                key={profile.id}
                                                url={`/speakers/profile/${profile.slug}`}
                                                photoUrl={profile.avatar[0].url }
                                                fullName={profile.title}
                                                jobTitle={profile.positions[0]?.jobTitle}
                                                company={profile.positions[0]?.organisation}
                                            />
                                        </SplideSlide>
                                    ))
                                }

                            </SplideTrack>
                            
                            <div className={`${CSS.arrows} splide__arrows`}>
                                <button className={`${CSS.sliderButton} ${CSS.prev} splide__arrow splide__arrow--prev`}>
                                    <Chevron />
                                </button>
                                
                                <button className={`${CSS.sliderButton} ${CSS.next} splide__arrow splide__arrow--next`}>
                                    <Chevron />
                                </button>
                            </div>
                        </Splide>
                    </div>
                </motion.div>
            </section>

        </div>

    )
}