import Link from "next/link"

import { FhsLockup } from "../../ui/brand/fhs-brand"

import CSS from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={`${CSS.layout} bg-secondary`}>

            <div className={CSS.brand}>
                <Link href={`/living`}>
                    <a style={{ textDecoration: `none`}}>
                        <FhsLockup
                            region={`Living`}
                            leftColor={`white`}
                            topColor={`var(--secondary)`}
                            bottomColor={`var(--accent)`}
                        />
                    </a>
                </Link>
            </div>

            <div className={CSS.menu}>
                <Link href={`/`}><a className="uLink fw-500">Contact Us</a></Link>
                <Link href={`/`}><a className="uLink fw-500">Subscribe to Newsletter</a></Link>
            </div>

            <div className={CSS.credits}>
                <section>
                    <label>Powered by</label>
                    <div className={CSS.logo}>
                        <FhsLockup
                            leftColor={`white`}
                            topColor={`var(--secondary)`}
                            bottomColor={`var(--accent)`}
                        />
                    </div>
                </section>

                <section>
                    <label>Organised by</label>
                    <a className={CSS.partnerLogo} href="https://www.thebench.com" target='_blank' rel='noreferrer' aria-label="Organiser">
                        <img width={100} src="/assets/site/the-bench-inverse@2x.png" alt="" />
                    </a>
                </section>
            </div>

        </footer>
    )
}