import { ArrowButton } from '../arrow-button/arrow-button'

import CSS from './actions-sidebar.module.css'

export const ActionsSidebar = ({ children }) => {
    return (
        <div className={CSS.layout}>
            <div className="p-xs">
                <span className='fs-4 fw-500 c-primary'>#theRENEWevent</span>&emsp;
                <ArrowButton href='https://cms.thebench.com/assets/img/site/RENEW/RENEW-Investment-Summit-Brochure-SWN.pdf' large theme='accent' target="_blank" rel="noreferrer">
                    <span className='c-accent'>View event brochure</span>
                </ArrowButton>
            </div>
        </div>
    )
}