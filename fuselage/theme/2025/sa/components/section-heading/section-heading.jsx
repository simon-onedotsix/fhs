import { Slide } from '../../../../../animation/animation'

import CSS from './section-heading.module.css'

export const SectionHeading = ({ heading, inverse }) => {
    return (
        <div className={`${CSS.sectionHeadingContainer} ${inverse && CSS.inverse}`}>
            <span/>
            <Slide>
                <p className={CSS.sectionHeading}>{ heading }</p>
            </Slide>
        </div>
    )
}