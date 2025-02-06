import { ArrowButton } from '../arrow-button/arrow-button'

import CSS from './actions-tab.module.css'

export const ActionsTab = ({ children }) => {
    return (
        <div className={CSS.layout}>
            { children }
        </div>
    )
}