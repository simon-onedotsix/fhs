import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import Chevron from './img/slider-chevron-right.svg'

import CSS from './card-slider.module.css'

export const CardSlider = ({ children  }) => {

    return (
        <div className={CSS.layout}>

            <Splide hasTrack={false} aria-label="Speakers" options={{
                pagination: false,
                gap: '2rem',
                perPage: 4,
                perMove: 1,
                breakpoints: {
                    600: {
                        gap: '1rem',
                        perPage: 1
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
    )
}