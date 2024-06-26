import Image from 'next/image'

import { Pop } from '../../../../../animation/animation'

import CSS from './callout.module.css'

export const Callout = ({ image, children, flipped }) => {

    return (
        <section className={`${CSS.layout} ${flipped && CSS.flipped}`}>
            <div className={CSS.imageContainer}>
                <Pop>
                    <Image src={image.url} width={image.width} height={image.height} />
                </Pop>
            </div>

            <div className={CSS.content}>
                { children }
            </div>
        </section>
    )
}