import { CloseButton } from '../close-button/close-button'

import CSS from './slide-out.module.css'

export const SlideOut = ({ children, active, handleFilterCloseButton }) => {
    return (
        <div className={`${CSS.layout} ${active && CSS.active}`}>
            <div className={CSS.actions}>
                <span onClick={handleFilterCloseButton}><CloseButton /></span>
            </div>
            { children }
        </div>
    )
}