import Image from 'next/image'

import CSS from './brand-section.module.css'

export const BrandSection = ({ children, topBar, bottomBar }) => {

    return (
        <section className={CSS.layout}>

            {
                topBar && topBar.graphic || topBar && topBar.background ?
                    <TopBar graphic={topBar.graphic} position={topBar.position} background={topBar.background} collapse={topBar.collapse} />
                : null
            }
            
            <section className={`block bg-extra-dark`}>
                <div className="container">
                    { children }
                </div>
            </section>

            {
                bottomBar && bottomBar.graphic || bottomBar && bottomBar.background ?
                    <BottomBar graphic={bottomBar.graphic} position={bottomBar.position} background={bottomBar.background} collapse={bottomBar.collapse} />
                : null
            }


        </section>
    )
}



const TopBar = ({ graphic, position, background, collapse }) => {
    return (
        <div 
            className={`
                ${CSS.topGraphic}
                ${position === `right` && CSS.right}
                ${collapse && CSS.collapseTop}
            `} 
            style={{ background: background }}
        >
            {
                graphic &&
                <Image src={`/assets/brand/motif-page-header.jpg`} layout='fill' />
            }
        </div>
    )
}


const BottomBar = ({ graphic, position, background, collapse }) => {
    return (
        <div 
            className={`
                ${CSS.bottomGraphic} 
                ${position === `right` && CSS.right}
                ${collapse && CSS.collapseBottom}
            `} 
            style={{ background: background }}
        >
            {
                graphic ?
                <Image src={`/assets/brand/motif-page-header.jpg`} layout='fill' />
                : null
            }
        </div>
    )
}