import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { ArrowButton } from "../../components/arrow-button/arrow-button"

import Chevron from './img/slider-chevron-right.svg'

import CSS from './speaker-carousel.module.css'

export const SpeakerCarousel = ({ children, heading, text, ctaLink, ctaLabel, decal }) => {
    return (

        <section className={`block ${decal}`}>
            
            <div className='container center'>
                <p className="fs-2 fw-700 lh-1 caps">{ heading }</p>
                <div className='fs-5'>
                    { text }
                </div>
            </div>


            <div className={`container mt-sm maxw-80`}>
                <Splide hasTrack={false} aria-label="Speakers" options={{
                    pagination: false,
                    gap: '2rem',
                    perPage: 4,
                    perMove: 1,
                    breakpoints: {
                        600: {
                            gap: '1rem',
                            perPage: 2
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

            <div className='container center'>
                <p className='mt-sm'>
                    <ArrowButton href={ ctaLink } theme={{ arrow: `var(--accent-sa)`, border: `var(--accent-sa)`, label: `white`}} >{ ctaLabel }</ArrowButton>
                </p>
            </div>


        </section>

    )
}