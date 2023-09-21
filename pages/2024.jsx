import Layout from '../fuselage/templates/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Image from 'next/image'

import { Header } from '../fuselage/global/header/header'
import { Footer } from '../fuselage/global/footer/footer'
import { CtaTab } from '../fuselage/components/cta-tab/cta-tab'
import { ArrowButton } from '../fuselage/components/arrow-button/arrow-button'


export default function Promo () {

    
    return (
        <div className='bg-primary' style={{ backgroundColor: `var(--secondary)`, backgroundImage: `url('/assets/theme/fhs-2023-global-bg.svg')`, backgroundSize: `100%` }}>

            <Header overlaid inverse />

            <section className="block minvh-90" style={{ display: `flex`, flexDirection: `column`, alignItems:`center`, justifyContent: `center` }}>

                <div className="container center">
                    <p className='fs-0 fw-600'>Welcome to FHS World 2024</p>
                    <p className='fs-3 mt-xs'>30 Sep - 2 Oct, Dubai</p>
                </div>

                <div className="container">
                    <ArrowButton href={`https://www.canva.com/design/DAFtBtry1HM/nJ8pAa0CtfAnnW4g7jA7Uw/view#1`} target={`_blank`} theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}} large>Online Brochure</ArrowButton>
                </div>

            </section>

            <Footer />

            <CtaTab />
        </div>
    )
}


Promo.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}

