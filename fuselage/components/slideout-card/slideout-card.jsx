import { Pop } from '../../animation/animation'

import CSS from './slideout-card.module.css'

export const SlideoutCard = ({ title, imageSrc, children }) => {
    return (
        <Pop>
            <div className={CSS.layout}>
                <img className={CSS.image} src={imageSrc} alt="" />
                
                <div className={CSS.content}>
                    <p className='fs-4 fw-600 lh-1 c-white'>{title}</p>
                </div>

                <div className={CSS.overlay}>
                    {children}
                </div>
            </div>
        </Pop>
    )
}
