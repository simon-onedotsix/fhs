import Head from 'next/head'
import { Header, HeaderShim } from '../fuselage/global/header/header'

export default function ErrorPage () {
    return (
        <>
            <Head><link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" /></Head>
            <Header compact shim />
            <section className="block">
                <div className="container">
                    
                    <p className="fs-0 fw-400 c-primary">404</p>
                    <p className='fw-400'>Page not found. Please check your URL.</p>

                </div>
            </section>
        </>
    )
}