import FilterIcon from './img/icon-filter.svg'

import CSS from './filter-toggle.module.css'

export const FilterToggle = ({ handleFilterToggle }) => {
    return (
        <button className={CSS.button} onClick={handleFilterToggle}>
            <FilterIcon />
        </button>
    )
}