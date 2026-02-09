import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import Chevron from './img/slider-chevron-right.svg'

import CSS from './speaker-carousel.module.css'

export const SpeakerCarousel = ({ children  }) => {
    return (

        <div>
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

    )
}