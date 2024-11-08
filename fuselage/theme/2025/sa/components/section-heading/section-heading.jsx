import { Slide } from '../../../../../animation/animation'

import CSS from './section-heading.module.css'

export const SectionHeading = ({ heading }) => {
    return (
        <div className={CSS.sectionHeadingContainer}>
            <span/>
            <Slide>
                <p className={CSS.sectionHeading}>{ heading }</p>
            </Slide>
        </div>
    )
}