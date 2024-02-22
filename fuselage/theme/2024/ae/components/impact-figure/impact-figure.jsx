import { Pop } from '../../../../../animation/animation'

import CSS from './impact-figure.module.css'

export const ImpactFigure = ({ value, label }) => {
    return (
        <div className={CSS.wrapper}>
            <Pop><p className={`${CSS.value} fs-0 fw-600 c-secondary`}>{ value }</p></Pop>
            <Pop delay={.2}><p className={`${CSS.label} fs-3 c-primary`}>{ label }</p></Pop>
        </div>
    )
}