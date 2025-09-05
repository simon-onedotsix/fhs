import CSS from './filter-button.module.css'

export const FilterButton = ({ children, theme })  => {
    return (
        <button 
            className={CSS.agendaFilterButton}
        >
            { theme && <span className={CSS.flag} style={{ backgroundColor: theme }}/> }
                
            { children }
        </button>
    )
}