import { AnimatedCounter } from '../../../../../animation/animated-counter'
import { Pop } from '../../../../../animation/animation'

import CSS from './global-map.module.css'

export const GlobalMap = () => {
    return (
        <div className={CSS.layout}>
            <Pop>
                <img src="/assets/ui/world-map.svg" alt="world map" />
            </Pop>

            <div className={CSS.overlay}>
                <Region label={'Middle East'} value={81} unit={'%'} position={{ x: '55%', y: '42%' }} delay={0.3}/>
                <Region label={'Saudi Arabia'} value={55} unit={'%'} position={{ x: '55%', y: '52%' }} delay={0.3}/>
                <Region label={'Europe'} value={12} unit={'%'} position={{ x: '35%', y: '30%' }} delay={0.1}/>
                <Region label={'Asia'} value={4} unit={'%'} position={{ x: '80%', y: '50%' }} delay={0.5}/>
                <Region label={'Americas'} value={3} unit={'%'} position={{ x: '20%', y: '50%' }} delay={0.2}/>
                <Region label={'Africa'} value={1} unit={'%'} position={{ x: '42%', y: '60%' }} delay={0.4}/>
            </div>
        </div>
    )
}

const Region = ({ label, value, unit, position, delay }) => {
    return (
        <div className={CSS.regionContainer} style={{ top: position.y, left: position.x }}>
            <Pop delay={delay}>
                <div className={CSS.region}>
                    <p>{ label }&ensp;<span><AnimatedCounter from={0} to={value} />{ unit }</span></p>
                </div>
            </Pop>
        </div>
    )
}