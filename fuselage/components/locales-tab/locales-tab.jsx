import CSS from './locales-tab.module.css'
import ICON from './img/link.svg'

export const LocalesTab = () => {
    return (
        <div className={CSS.layout}>
            <a className={CSS.button} href='/ae'>
                FHS Saudi Arabia <ICON className={CSS.icon}/>
            </a>
        </div>
    )
}