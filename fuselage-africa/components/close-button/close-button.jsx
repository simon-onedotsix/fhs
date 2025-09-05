import Icon from './img/icon-close.svg'

import CSS from './close-button.module.css'

export const CloseButton = () => {
    return (
        <button className={CSS.button}>
            <Icon />
        </button>
    )
}