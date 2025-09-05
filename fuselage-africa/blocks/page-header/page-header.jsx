import Image from 'next/image'

import CSS from './page-header.module.css'

export function PageHeader ({ children, theme }) {
    return (
        
        <section className={`${CSS.layout} ${ theme ? theme : `bg-primary`}`} >

            <div className={CSS.brandPattern}>
                <Image src={`/assets/brand/motif-page-header.jpg`} layout={`fill`} width={1800} height={600} alt="" priority />
            </div>

            <section className={`${CSS.content} block ${ theme ? theme : `bg-primary`}`}>
                { children }
            </section>

        </section>

    )
}