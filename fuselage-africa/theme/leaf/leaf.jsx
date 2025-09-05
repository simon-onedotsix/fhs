import Image from 'next/image'

import CSS from './leaf.module.css'

export const Leaf = () => {
    return (
        <div className={CSS.leaf}>
            <Image src={`/assets/theme/leaf.png`} layout={`fill`} alt='' />
        </div>
    )
}