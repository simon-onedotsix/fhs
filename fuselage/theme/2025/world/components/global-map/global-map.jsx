import { AnimatedCounter } from '../../../../../animation/animated-counter'
import { Pop } from '../../../../../animation/animation'

import CSS from './global-map.module.css'

export const GlobalMap = () => {
    return (
        <div className={CSS.layout}>
            <Pop>
                <img className={CSS.map} src="/assets/ui/world-map.svg" alt="world map" />
            </Pop>

            <div className={CSS.overlay}>
                <Region label={'Middle East'} value={64} unit={'%'} position={{ x: '58%', y: '42%' }} delay={0.3}/>
                <Region label={'Europe'} value={22} unit={'%'} position={{ x: '40%', y: '28%' }} delay={0.1}/>
                <Region label={'Asia'} value={5} unit={'%'} position={{ x: '80%', y: '50%' }} delay={0.5}/>
                <Region label={'Americas'} value={4} unit={'%'} position={{ x: '20%', y: '50%' }} delay={0.2}/>
                <Region label={'Africa'} value={5} unit={'%'} position={{ x: '45%', y: '60%' }} delay={0.4}/>
            </div>
        </div>
    )
}

const Region = ({ label, value, unit, position, delay }) => {
    return (
        <div className={CSS.regionContainer} style={{ top: position.y, left: position.x }}>
            <Pop delay={delay}>
                <p className={CSS.value}><AnimatedCounter from={0} to={value} /><span className={CSS.unit}>{unit}</span></p>
                <p className={CSS.label}>{ label }</p>
            </Pop>
        </div>
    )
}