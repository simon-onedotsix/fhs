import Image from 'next/image'

import CSS from './callout.module.css'

export const Callout = () => {
    return (
        <section className={CSS.layout}>

            <div className={CSS.graphic}>
                <Image src={`/assets/img/homepage/brand-pattern-horizontal.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
            </div>

            <div className={`${CSS.content} block bg-dark columns-2`}>
                <div className="container pr-lg">
                    <p className='fs-1 fw-500'>Why FHS Africa is the Ideal Platform for Investors</p>
                </div>

                <div className="container formatted">
                    <p>By positioning FHS Africa in Africa&apos;s most dynamic markets, we offer investors a well-rounded view of the continent&apos;s hospitality potential. FHS Africa is where global capital meets African opportunity, and by alternating between these leading cities i.e., South Africa & Kenya, the forum provides diverse experiences, deeper regional insights, and exposure to different investment landscapes. In its last edition, FHS Africa generated an impressive <strong>$365 million in business opportunities</strong> and deal volume, as reported by JLL - solidifying its role as a catalyst for transformative investments across Africa.</p>
                    <p>For investors looking to capitalise on Africa&apos;s transformative growth, FHS Africa stands as the essential destination for understanding, connecting with, and ultimately investing in one of the world&apos;s most exciting hospitality markets.</p>
                </div>

            </div>

        </section>
    )
}