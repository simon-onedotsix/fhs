import Image from 'next/image'
import Link from 'next/link'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = () => {
    return (
        <>
            <section className={CSS.layout}>

                <div className={CSS.hero}>
                    <Image src={`/assets/theme/sa-2023/theme-hero.jpg`} layout={`fill`} width={1920} height={1080} />
                </div>

                <div className={CSS.overlay}>
                    <div className="p-md">
                        <p className={CSS.strapline}>Invest in <span>change</span></p>
                    </div>

                    <div className={`${CSS.actions} m-md`}>
                        <Link href={`/sa/grif`}>
                            <a className={CSS.grif}><Image src={`/assets/img/global/homepage/events/grif-logo.png`} width={145} height={161} layout={`responsive`} /></a>
                        </Link>
                    </div>
                </div>

            </section>

            <section className="block">
                <div className="container center">
                    <p className="fs-2 fw-600 caps">Host Sponsors</p>
                </div>
                <div className="container flex gap-md jc-center">
                    <Image src={`/assets/site/sa/al-faisaliah-logo.png`} width={200} height={200}/>
                    <Image src={`/assets/site/sa/al-khozama-logo.png`} width={200} height={200}/>
                </div>
            </section>
        </>
    )
}