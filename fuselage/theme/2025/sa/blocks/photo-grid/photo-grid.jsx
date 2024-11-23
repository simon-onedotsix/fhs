import Image from 'next/image'

import { Pop, Fade } from '../../../../../animation/animation'

import CSS from './photo-grid.module.css'

export const PhotoGrid = ({ children }) => {
    return (
        <section className={CSS.layout}>
            <img className={CSS.deco} src="/assets/theme/sa-2025/gfk-03.svg" alt=""/>

            { children }
        </section>
    )
}

export const Photo = ({ photoUrl }) => {
    if (!photoUrl) return
    return (
        <Pop>
            <div className={CSS.imageBlock}>
                <Image src={photoUrl} layout={'fill'} />
            </div>
        </Pop>
    )
}

export const ContentBlock = ({ children }) => {
    return (
        <div className={CSS.contentBlock}>
            { children }
        </div>
    )
}

export const Spacer = () => <div className={CSS.spacer} />

