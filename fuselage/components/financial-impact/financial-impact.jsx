import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { Tween } from 'react-gsap'

import CSS from './financial-impact.module.css'

export const FinancialImpact = ({ children, id, currency, impactTotal, ion }) => {

    return (
        <div className={CSS.container}>
            { children }

            <p id={`val${id}`} className={CSS.impact}>
                <Tween
                    to={{
                        duration: 1,
                        textContent: `+=${impactTotal}`,
                        roundProps: 'textContent',
                        scrollTrigger: {
                            // markers: { startColor: 'tomato', endColor: 'tomato'},
                            trigger: `#val${id}`,
                            start: '-100px 75%',
                            end: '100px 75%',
                            scrub: 0.5,
                        }
                    }}
                >
                    <span>0</span>
                </Tween>
                <br/>{currency} {ion}
            </p>

        </div>
    )
}