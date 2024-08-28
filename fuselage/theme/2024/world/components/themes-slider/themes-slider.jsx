import { useState } from "react"

import { motion, useScroll, useTransform } from "framer-motion"

import Link from "next/link"

import CSS from './themes-slider.module.css'



export const ThemesSlider = ({ data }) => {

	// console.log('insight-slider data:', data)

	const [ currentPage, setCurrentPage ] = useState(1)
	const [ offset, setOffset ] = useState( 50 - (100/11) /2 )

    const totalPages = data.length

    const nextPage = () => {
        if ( currentPage < totalPages ) {
			setCurrentPage( currentPage + 1 )
			setOffset( offset - 100/11 )
		}
	}
	const prevPage = () => {
		if ( currentPage > 1 ) {
			setCurrentPage( currentPage - 1 )
			setOffset( offset + 100/11 )
		}
    }

    return (
		<>
			<div className={`${CSS.header} block center formatted py-0 mb-sm`}>
				<p className="fs-1 fw-600">Event Themes</p>
				{/* <p className="fs-5 maxw-40 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut laborum id corrupti illum ab at temporibus eum dolore.</p> */}
			</div>


			<section className={CSS.layout}>
			
				<div>
					<ThemesExploreArrow/>
					<div className={CSS.keylineWrapper}>
						<span className={CSS.keyline} />
					</div>
				</div>

				<div className={CSS.icons}>
					<motion.div className={CSS.iconWrapper} style={{ x: `${offset}%` }}>
						{
							data.map( (theme, index) => (
								<div key={index} className={`${CSS.iconSlide} ${index+1 === currentPage ? CSS.active : ''}`}>
									{
										theme ? 
											<motion.div 
												initial={{ scale: 0, opacity: 0 }}
												whileInView={{ scale: 1, opacity: 1 }}
												transition={{ type: "spring", bounce: 0.25 }}
											>
												<img src={theme.iconUrl} alt="" />
											</motion.div>
										: undefined
									}
								</div>
							))
						}
					</motion.div>
				</div>

				<div className={CSS.keylineWrapper}>
					<span className={CSS.keyline} />
				</div>

				{
					data.map( (slide, index) => (
						<div key={index} className={`${CSS.headingWrapper} ${index+1 === currentPage ? CSS.active : ''}`}>
							<div className={CSS.heading}>
								<p className="fs-2 c-secondary center lh-2">{ slide.title }</p>
							</div>
						</div>
					))
				}

				

				<nav className={CSS.nav}>
					<button className={CSS.navButton} onClick={prevPage} disabled={currentPage === 1 && true}><NavChevron flipped /></button>
					<button className={CSS.navButton} onClick={nextPage} disabled={currentPage === totalPages && true}><NavChevron /></button>
					{/* <p style={{ userSelect: `none` }}>{ currentPage }<span style={{ padding: `0 5px` }}>/</span>{ totalPages }</p> */}
				</nav>

				
				

			</section>

			<div className={`${CSS.footer} block pt-md center`}>
				<Link href={'/world/themes'}>
					<a className={CSS.button}>Learn More</a>
				</Link>
			</div>
		</>
    )
}




export const ThemesExploreArrow = () => {
    return (
        <div className={CSS.keylineArrow}>
            <svg width="100%" height="100%" viewBox="0 0 42 42" style={{ fillRule:'evenodd', clipRule:'evenodd', strokeMiterlimit:3 }}>
                <g transform="matrix(1,0,0,1,0,-304)">
                    <g id="arrow" transform="matrix(1,0,0,0.907972,0,27.4585)">
                        <rect x="0" y="304.571" width="42.117" height="45.771" style={{ fill:'none' }}/>
                        <clipPath id="_clip1">
                            <rect x="0" y="304.571" width="42.117" height="45.771"/>
                        </clipPath>
                        <g clipPath="url(#_clip1)">
                            <g transform="matrix(-1,-1.34877e-16,1.22465e-16,-1.10136,2598.53,1324.97)">
                                <path vectorEffect="non-scaling-stroke" d="M2577.47,884.939L2597.97,925.943L2556.97,925.943L2577.47,884.939Z" style={{ fill:'none', stroke:'rgb(226,53,66)', strokeWidth: 1 }}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
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