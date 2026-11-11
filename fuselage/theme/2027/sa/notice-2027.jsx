import Link from 'next/link'

import CSS from './css/notice-2027.module.css'

// shown on pages that still carry the 2026 edition, until the 2027 programme is announced
export const Notice2027 = ({ host, agenda }) => {
    return (
        <section className={`${CSS.notice} ${agenda ? CSS.agenda : ''}`}>
            <div className={CSS.inner}>
                <p className={CSS.text}>
                    <strong>FHS Saudi Arabia Madinah Edition, 13-14 April 2027, DoubleTree by Hilton at Madinah Gate.</strong>
                    {' '}Details for 2027 will be announced soon. This page shows the 2026 edition.
                    {' '}<Link href="/sa/register-interest"><a>Register interest</a></Link>
                </p>
                { host &&
                    <div className={CSS.host}>
                        <p>2027 Host Partner</p>
                        <img src="/assets/site/sa/knowledge-economic-city-logo.png" alt="Knowledge Economic City" />
                    </div>
                }
            </div>
        </section>
    )
}
