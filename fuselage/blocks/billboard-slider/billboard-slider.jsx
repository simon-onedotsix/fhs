import { Swiper } from 'swiper/react'
import { Navigation  } from 'swiper'

import 'swiper/css'
import "swiper/css/navigation"

import CSS from './billboard-slider.module.css'

export const BillboardSlider = ({ children }) => {

	return (
		<Swiper
			className={CSS.swiper}
			navigation={true}
			modules={[Navigation]}
			spaceBetween={0}
			slidesPerView={1}
		>
			{children}
		</Swiper>
	)
}
