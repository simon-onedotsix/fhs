import CSS from './menu-toggle.module.css'

export const MenuToggle = ({ active }) => {
    
    return (
        <div className={`${CSS.toggle} ${ active && CSS.active }`}>
            <span/>
            <span/>
            <span/>
        </div>
    )
}