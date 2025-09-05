import { ParallaxBanner } from 'react-scroll-parallax'

import CSS from './poster.module.css'

export const Poster = ( props ) => {

    return (
        <ParallaxBanner
            layers={[{ image: props.imageUrl, speed: -20 }]}
        >
            <section className={`${CSS.poster} | ${props.decal}`}>
                {props.children}
            </section>

        </ParallaxBanner>

    )
}