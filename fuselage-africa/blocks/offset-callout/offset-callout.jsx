import { ParallaxImage } from "../../components/parallax-image/parallax-image"

import CSS from './offset-callout.module.css'

export const OffsetCallout = ({ children, hero, theme }) => {

    // console.log('from compontent - contentGraphic:', contentGraphic)

    return (
        <section className={`
            ${CSS.layout} 
        `}
        >

            <div className={`${CSS.content} bg-white`} >
                { children }
            </div>
           
            
            <div className={CSS.image}>
                {
                    hero && hero.url ?
                       <ParallaxImage src={hero.url} layout={`fill`} alt="" />
                    :
                       <ParallaxImage src={`/assets/img/homepage/about.jpg`} layout={`fill`} alt="" />
                }
            </div>
        
        
        </section>
    )
}