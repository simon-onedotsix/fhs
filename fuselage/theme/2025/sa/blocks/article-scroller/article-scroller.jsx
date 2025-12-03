import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { Pop, Slide, Fade } from '../../../../../animation/animation'
import { SectionHeading } from '../../components/section-heading/section-heading'

import CSS from './article-scroller.module.css'

export const ArticleScroller = ({ children }) => {

    const { locale } = useRouter()

    return (

        <section className={CSS.layout}>
            <aside>
                <SectionHeading heading={ locale === 'ar' ? "التوقيعات والإعلانات لعام 2025" : '2025 Signings & Announcements'} />
                <div className='p-md'>
                    <Link href={'/sa/content-library/category/press-room'} >
                        <a className={`${CSS.ctaButton} fs-5 fw-600`} >{ locale === 'ar' ? "آخر الأخبار والمستجدات" : <>Latest News &amp; Updates</> }</a>
                    </Link>
                </div>
            </aside>
            
            <main>
                { children }
            </main>
        </section>

    )
}



export const Article = ({ heroUrl, title, excerpt, url }) => {
    
    if (!heroUrl) return

    const { locale } = useRouter()

    return (
        <section className={CSS.article}>
            <Pop>
                <aside>
                    <Image src={heroUrl} layout={'fill'} alt="" />
                </aside>
            </Pop>

            <main className='formatted'>
                <Slide><p className='fs-4 fw-600 lh-2 c-secondary'>{title}</p></Slide>
                <Fade>
                    <p>{excerpt}</p>
                    {
                        url &&
                        <div>
                            <Link href={url}>
                                <a className={`${CSS.readButton} uLink c-accent fw-600`}>
                                    <span className={CSS.iconContainer}><PageIcon/></span> { locale === 'ar' ? "اقرأ المزيد" : "Read More"}
                                </a>
                            </Link>
                        </div>
                    }
                </Fade>
            </main>
        </section>
    )
}


const PageIcon = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
            <g transform="matrix(1,0,0,1,-1002,-86)">
                <g transform="matrix(1.16032,0,0,1.16032,-162.64,-15.643)">
                    <g id="icon-page">
                        <g transform="matrix(1.40988,0,0,1.90861,-56.2812,-392.917)">
                            <path d="M763.948,256.209L759.692,253.065L755,253.065L755,260.912L763.948,260.912L763.948,256.209Z" style={{ fill:`none`, strokeWidth:1.03 }}/>
                        </g>
                        <g transform="matrix(-0.670557,0,0,-0.764596,1527.06,289.579)">
                            <path d="M763.948,253.065L755,253.065L763.948,260.912L763.948,253.065Z" style={{ fill:`none`, strokeWidth:2.4 }}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    )
}