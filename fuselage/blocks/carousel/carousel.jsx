import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Chevron from './img/slider-chevron-right.svg'

import CSS from './carousel.module.css'

export const Carousel = ({ children }) => {
    return (

        <section>
            <Splide hasTrack={false} aria-label="Speakers" options={{
                pagination: false,
                gap: 0,
                perPage: 1,
                perMove: 1,

                autoplay: true,
                interval: 3000, 
                speed: 800,
                rewind: true,
                rewindSpeed: 800,
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
        </section>

    )
}