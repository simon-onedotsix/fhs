import { useState, Children } from "react"

import CSS from './slider.module.css'


export const Slider = ({ children }) => {

	if (!children) return

	const slideArray = Children.toArray(children)
	// console.log(slideArray)

	const [ currentPage, setCurrentPage ] = useState(1)
    const totalPages = slideArray.length

    const nextPage = () => {
        if ( currentPage < totalPages ) setCurrentPage( currentPage + 1 )
    }
    const prevPage = () => {
        if ( currentPage > 1 ) setCurrentPage( currentPage - 1 )
    }

    return (
        <section className={CSS.layout}>

			{
				slideArray.map( (slide, index) => (
					<div key={index} className={`${CSS.contentWrapper} ${index+1 === currentPage ? CSS.active : ''}`}>
						<div className={CSS.content}>
							{slide}
						</div>
					</div>
				))
			}

			
			<nav className={CSS.nav}>
				<button className={CSS.navButton} onClick={prevPage} disabled={currentPage === 1 && true}>
					<NavChevron flipped />
				</button>
				
				<p style={{ userSelect: `none` }}>{currentPage}<span style={{ padding: `0 5px` }}>/</span>{totalPages}</p>

				<button className={CSS.navButton} onClick={nextPage} disabled={currentPage === totalPages && true}>
					<NavChevron />
				</button>	
			</nav>
		

        </section>
    )
}



const NavChevron = ({ flipped }) => {
    return (
        <div style={{ width: `100%`, height: `100%`, transform: flipped && `rotateY(180deg)` }}>
            <svg width="100%" height="100%" viewBox="0 0 18 28" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`square`, strokeMiterlimit:3 }}>
                <path id="nav-chevron" d="M5,23.885L15,13.885L5,3.885" style={{ fill:`none`, stroke:`white`, strokeWidth:`4px` }}/>
            </svg>
        </div>
    )
}