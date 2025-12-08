import { useRouter } from 'next/router'

import { AnimatedCounter } from '../../../../../animation/animated-counter'
import { Pop } from '../../../../../animation/animation'

import CSS from './global-map.module.css'

export const GlobalMap = () => {

    const { locale } = useRouter()

    return (
        <div className={CSS.layout}>
            <Pop>
                <img src="/assets/ui/world-map.svg" alt="world map" />
            </Pop>

            <div className={CSS.overlay}>
                <Region label={ locale === 'ar' ? "الشرق الأوسط" : 'Middle East'} value={85.1} unit={'%'} position={{ x: '55%', y: '42%' }} delay={0.3}/>
                <Region label={ locale === 'ar' ?  "السعودية" : 'from Saudi Arabia'} value={62} unit={'%'} position={{ x: '55%', y: '52%' }} delay={0.3}/>
                <Region label={ locale === 'ar' ?  "أوروبا" : 'Europe'} value={10.6} unit={'%'} position={{ x: '35%', y: '30%' }} delay={0.1}/>
                <Region label={ locale === 'ar' ?  "آسيا" : 'Asia'} value={1.3} unit={'%'} position={{ x: '80%', y: '50%' }} delay={0.5}/>
                <Region label={ locale === 'ar' ?  "أمريكا" : 'Americas'} value={2.7} unit={'%'} position={{ x: '20%', y: '50%' }} delay={0.2}/>
                <Region label={ locale === 'ar' ?  "إفريقيا" : 'Africa'} value={0.3} unit={'%'} position={{ x: '40%', y: '60%' }} delay={0.4}/>
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