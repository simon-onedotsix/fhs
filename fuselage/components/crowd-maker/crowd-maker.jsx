import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { Tween } from 'react-gsap'

import CSS from './crowd-maker.module.css'

export const CrowdMaker = () => {
    return (
        <div className={CSS.container}>
            <Tween 
                from={{ 
                    opacity: 0,
                    scale: 0.2,
                    scrollTrigger: {
                        // markers: { startColor: 'tomato', endColor: 'tomato'},
                        trigger: '.person',
                        start: 'center 95%',
                        end: 'center 40%',
                        scrub: 0.5,
                    } 
                }} 
                duration={1}
                stagger={0.2} 
                ease="elastic.inOut(1, 0.3)"
            >
                
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                <span className="person"><img className={CSS.person} src="/assets/homepage/person.svg" alt="" /></span>
                

            </Tween>
        </div>
    )
}