import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { ArrowButton } from "../../../../../components/arrow-button/arrow-button"

import Chevron from './img/slider-chevron-right.svg'

import CSS from './speaker-carousel.module.css'

export const SpeakerCarousel = ({ children, heading, text, ctaLink, ctaLabel, color, decal }) => {
    return (

        <section className={`block ${decal}`}>
            
            <div className='container center'>
                <p className={`fs-0 fw-700 lh-1 ${ color ? color : "c-primary"}`}>{ heading }</p>
                <div className='fs-5'>
                    { text }
                </div>
            </div>


            <div className={`container mt-sm maxw-80`}>
                <Splide hasTrack={false} aria-label="Speakers" options={{
                    pagination: false,
                    gap: '2rem',
                    perPage: 5,
                    perMove: 1,
                    breakpoints: {
                        600: {
                            gap: '1rem',
                            perPage: 2
                        }
                    }
                }}>
                    <SplideTrack>
                        { children?.map( (item, index) => {
                            return (
                                <SplideSlide key={index}>
                                    { item }
                                </SplideSlide>
                            )
                        })}

                    </SplideTrack>
                    
                    <div className="splide__arrows">
                        <button className={`${CSS.sliderButton} ${CSS.prev} splide__arrow splide__arrow--prev`}>
                            <Chevron />
                        </button>
                        
                        <button className={`${CSS.sliderButton} ${CSS.next} splide__arrow splide__arrow--next`}>
                            <Chevron />
                        </button>
                    </div>
                </Splide>
            </div>

            {
                ctaLink &&
                <div className='container center'>
                    <p className='mt-sm'>
                        <ArrowButton href={ ctaLink } theme={{ arrow: color ? color : "c-primary", border: color ? color : "c-primary", label: color ? color : "c-primary"}} >{ ctaLabel }</ArrowButton>
                    </p>
                </div>
            }


        </section>

    )
}