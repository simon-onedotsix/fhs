import Image from 'next/image'
import { Button } from '../../../components/button/button'

import CSS from './page-header.module.css'

export const PageHeader = () => {
    return (
        <section className={CSS.layout}>

            <div className={`${CSS.intro}`}>
                <div className='block bg-primary'>
                    <p className='fs-1 fw-600 lh-1 mt-sm'>Investor Places</p>
                    <div className="formatted mt-sm">
                        <p className='fs-6'>If you are a hotel owner or investor currently with hotel assets, or looking to acquire hotel assets, and would like to attend the conference as our guest, please contact <a href="mailto:marina.franolic@thebench.com">Marina&nbsp;Franolic</a>.</p>

                        <p className='mt-sm'><Button href={'/africa/register-interest-for-2027'} decal={'fs-6 fw-600'} outline>Register Interest for 2027</Button></p>

                        <h4 className='pt-sm'>Criteria for approval</h4>
                        <ul>
                            <li>Hospitality property owned or being developed in Africa over the next 12-24 months*</li>
                            <li>Any other real estate investor with assets considering expanding into African hospitality sector</li>
                        </ul>
                        <small>*Should you wish to keep your portfolio confidential, we will be able to deliver this.</small>
                    </div>
                </div>
            </div>

            <div className={CSS.hero}>
                <Image src={`/assets/img/africa/investors/investor-hero.jpg`} layout={`fill`} alt="" priority />
            </div>
            
            <section className={CSS.graphic}>
                <Image src={`/assets/img/africa/homepage/brand-pattern-horizontal.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
            </section>

        </section>
    )
}