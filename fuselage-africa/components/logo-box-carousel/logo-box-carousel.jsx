import Image from 'next/image'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import CSS from './logo-box-carousel.module.css'

export const LogoBoxCarousel = ({ large, heading, sponsors }) => {

    // console.log('sponsors:', sponsors)

    if ( !sponsors.length ) return 

    return ( 
        <section className={`${CSS.container} ${large && CSS.lg}`}>

            {
                heading &&
                <div className={CSS.heading}>
                    <p className='fs-6 fw-500 c-black lh-1'>{ heading }</p>
                </div>
            }
            
            <div className={`${CSS.slider}`}>
                <Splide hasTrack={false} aria-label="Attending airlines" options={{
                    type: 'loop',
                    pagination: false,
                    arrows: false,
                    autoplay: true,
                    interval: 2500,
                    speed: 750,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    gap: 'var(--space-lg)',
                    perPage: 1,
                    perMove: 1
                }}>
                    <SplideTrack>
                        { sponsors.map( partner => {

                            if ( !partner.partnerLogo.length ) return
                            
                            let logo = partner.partnerLogo[0]
                            return (
                                <SplideSlide key={partner.id}>
                                    <a href={`/partners/${partner.slug}`} rel="noreferrer" aria-label="Partner logo">
                                        <div className={`${CSS.logo} ${large && CSS.lg}`}>
                                            <Image 
                                                src={logo.url} 
                                                width={500}
                                                height={400}
                                                layout='fill'
                                                alt=""
                                            />
                                        </div>
                
                                    </a>
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>

                </Splide>
            </div>

        </section>
    )
}