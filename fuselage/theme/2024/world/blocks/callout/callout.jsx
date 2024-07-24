import Image from 'next/image'

import { Pop } from '../../../../../animation/animation'

import CSS from './callout.module.css'

export const Callout = ({ image, caption, children, flipped }) => {

    return (
        <section className={`${CSS.layout} ${flipped && CSS.flipped}`}>
            <Pop>
                <div className={CSS.imageContainer}>
                    <Image src={image.url} width={image.width} height={image.height} />
                    {
                        caption &&
                        <div className={CSS.caption}>
                            <p>{ caption }</p>
                        </div>
                    }
                </div>
            </Pop>

            <div className={CSS.content}>
                { children }
            </div>
        </section>
    )
}