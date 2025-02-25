import { Pop } from '../../animation/animation'
import { AnimatedCounter } from '../../theme/2024/world/components/animated-counter/animated-counter'

import CSS from './impact-figure.module.css'

export const InvestorImpact = ({ prefix, figure, unit, label }) => {
    return (
        <Pop>
            <div className={CSS.investorImpact}>
                <p className={CSS.investorImpactFigure}>{prefix}<AnimatedCounter from={0} to={figure} />{unit}</p>
                <p className={CSS.investorImpactLabel}>{label}</p>
            </div>
        </Pop>
    )
}
