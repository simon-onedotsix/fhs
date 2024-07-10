import Image from 'next/image'

import CSS from './logo-box.module.css'

export const LogoBox = ({ logo }) => {

    if ( !logo ) return

    return (
        <div className={CSS.box}>
            <div className={CSS.container}>
                <Image src={logo.url} layout='fill' alt='' />
            </div>
        </div>
    )

}