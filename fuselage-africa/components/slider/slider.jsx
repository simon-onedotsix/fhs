import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import parse from 'html-react-parser'


import CSS from './slider.module.css'



export const Slider = ({ data }) => {

    if ( !data ) return

    return (
        <Splide hasTrack={false} aria-label="Speakers" options={{
            pagination: false,
        }}>
            <SplideTrack>
                { data.map( (item, index) => {
                    return (
                        <SplideSlide key={index}>
                            <div className="slider formatted">
                                { parse(String(item.slide)) }
                            </div>
                        </SplideSlide>
                    )
                })}
            </SplideTrack>
            
            <div className={`${CSS.navWrapper} splide__arrows pt-sm`} >
                <button className={`${CSS.sliderButton} ${CSS.prev} splide__arrow splide__arrow--prev`}>
                    <Chevron />
                </button>
                
                <button className={`${CSS.sliderButton} ${CSS.next} splide__arrow splide__arrow--next`}>
                    <Chevron />
                </button>
            </div>
        </Splide>
    )
}



const Chevron = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 32" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:1.5 }}>
            <path id="slider-chevron-left" d="M3.325,2.864L16.325,15.864L3.325,28.864" style={{ fill:'none', strokeWidth: `3px` }}/>
        </svg>
    )
}