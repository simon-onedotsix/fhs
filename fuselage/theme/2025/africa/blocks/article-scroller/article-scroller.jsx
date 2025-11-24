import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { Pop, Slide, Fade } from '../../../../../animation/animation'
import { Button, ButtonGrid } from "../../../../../theme/2025/africa/components/button/button"

import CSS from './article-scroller.module.css'

export const ArticleScroller = ({ children }) => {

    const { locale } = useRouter()

    return (

        <section className={CSS.layout}>
            <aside>
                <Slide>
                    <p className='fs-1 fw-500 lh-1'>2025 Signings <span className='c-primary'>& Announcements</span></p>
                </Slide>
                <div className='pt-md'>
                    <Button inverse href={'/africa/content-library/category/press-room'}>Latest News &amp; Updates</Button>
                </div>
            </aside>
            
            <main className='pt-md columns-1 gap-xs'>
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
                <Slide><p className='fs-4 fw-600 lh-2 c-primary'>{title}</p></Slide>
                <Fade>
                    <p>{excerpt}</p>
                    {
                        url &&
                        <div>
                            <Link href={url}>
                                <a className={`${CSS.readButton} uLink c-primary fw-600`}>
                                    <span className={CSS.iconContainer}><PageIcon/></span>Read More
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


const KeylineIcon = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1019 1140" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`round`, strokeLinejoin:`round` }}>
            <g transform="matrix(1,0,0,1,-2966,-385)">
                <g transform="matrix(1.79157,0,0,1.68389,-1418.07,0)">
                    <g id="fhs-icon-keyline" transform="matrix(0.404415,-3.65996e-32,-4.12798e-32,0.430276,2447.05,229.076)">
                        <g opacity="0.24">
                            <path d="M803.262,809.524L446.278,987.169" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                            <path d="M443.004,582.217L443.004,983.781" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                            <path d="M439.299,579.914L802.269,806.927" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                            <path d="M1405.87,680.502L1405.87,899.385L228.415,1570.87L228.415,1085.79L456.578,1228L803.262,1028.27L803.262,595.903" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                            <path d="M228.415,1570.87L0.749,1438.89L1.043,131.489" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                            <path d="M228.89,705.141L228.957,865.825L663.622,1108.58" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                            <path d="M1.043,131.489L413.526,371.171L228.913,475.847L228.913,705.141L605.978,480.703L994.788,706.609L993.998,918.649L1405.87,680.502L227.896,0.525L1.043,131.489Z" style={{ fill:`none`, fillRule:`nonzero`, stroke:`white`, strokeWidth:1 }}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}