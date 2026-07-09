import { useState, Children } from "react"

import Image from 'next/image'

import CSS from './slider.module.css'


const SLIDE_DATA = [
	{
		"id": "118056",
		"title": "Hospitality Leaders discuss supply chain challenges at AHIF 2023",
		"slug": "hospitality-leaders-discuss-supply-chain-challenges-at-ahif-2023",
		"siteId": 4,
		"contentTypes": [
		{
			"id": "7700",
			"title": "Blog",
			"slug": "blog"
		}
		],
		"contentLibraryHero": []
	},
	{
		"id": "115738",
		"title": "Simplifying payments and preventing fraud for African airlines with Judy Waruiru, Managing Director, DPO Pay",
		"slug": "simplifying-payments-and-preventing-fraud-for-african-airlines-with-judy-waruiru-managing-director-dpo-pay",
		"siteId": 6,
		"contentTypes": [
		{
			"id": "7701",
			"title": "Podcasts",
			"slug": "podcast"
		}
		],
		"contentLibraryHero": [
		{
			"url": "https://cms.thebench.com/assets/content-library/img/AviaDev/Judy-promo.png",
			"width": 797,
			"height": 797
		}
		]
	},
	{
		"id": "117582",
		"title": "Radisson Hotel Group announces seven new hotels in Africa for the first half of 2023",
		"slug": "radisson-hotel-group-announces-seven-new-hotels-in-africa-for-the-first-half-of-2023",
		"siteId": 5,
		"contentTypes": [
			{
			"id": "7704",
			"title": "Videos",
			"slug": "videos"
			},
		{
			"id": "7702",
			"title": "Press room",
			"slug": "press-room"
		}
		],
		"contentLibraryHero": []
	},
	{
		"id": "117576",
		"title": "CityBlue Opens In  South Sudan and Tanzania",
		"slug": "cityblue-opens-in-south-sudan-and-tanzania",
		"siteId": 4,
		"contentTypes": [
		{
			"id": "7703",
			"title": "Industry news",
			"slug": "industry-news"
		}
		],
		"contentLibraryHero": []
	},
	{
		"id": "117571",
		"title": "The Emin Pasha joins the CityBlue Collection in Uganda",
		"slug": "the-emin-pasha-joins-the-cityblue-collection-in-uganda",
		"siteId": 4,
		"contentTypes": [
		{
			"id": "7702",
			"title": "Press room",
			"slug": "press-room"
		}
		],
		"contentLibraryHero": []
	}
]


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