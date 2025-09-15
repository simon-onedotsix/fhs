import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { Reveal } from '../../animation/reveal'

import { ArrowButton } from '../../components/arrow-button/arrow-button'

import Chevron from './img/slider-chevron-right.svg'

import CSS from './speaker-carousel.module.css'

export const SpeakerCarousel = ({ children, heading, text, ctaLink, ctaLabel, theme  }) => {

    const handleCtaLink = () => {
        if ( !ctaLabel && !ctaLink ) return

        return (
            <p className={CSS.actions}>
                <ArrowButton href={ctaLink} theme={{ arrow: `white`, border: `white`, label: `white`}}>{ ctaLabel }</ArrowButton>
            </p>
        )
    }

    return (

        <section className={`block bg-default`}>

            <div className='bc-primary'>

                <div className='container '>
                    <Reveal>
                        <p className="fs-1 fw-700 lh-1">{ heading }</p>
                    </Reveal>
                </div>

                <div className={`${CSS.layout} container`}>

                    {
                        text &&
                        <div className='fs-5'>
                            { text }
                        </div>
                    }
                        
                    <div className='mt-sm'>
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
                                { children.map( (item, index) => {
                                    return (
                                        <SplideSlide key={index}>
                                            { item }
                                        </SplideSlide>
                                    )
                                })}

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

                    {handleCtaLink()}


                

                </div>
            </div>
        </section>

    )
}