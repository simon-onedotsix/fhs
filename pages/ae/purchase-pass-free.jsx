import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'
import { PassBox } from '../../fuselage/components/pass-box/pass-box'

export default function Register ({ data }) {

    console.log('data:', data.content)

    return (
        <>
            <Header compact shim theme={{ primary: 'white', secondary: 'var(--accent-ae)', overlayBg: `var(--secondary)`, text: 'white' }} />
            
            <section className="block"> 

                <div className="container">
                    <p className="fs-0 fw-600 c-primary">Register for Pass</p>
                </div>

                <div className="container columns-3 gap-md">
                    {
                        data.content.map( ticket => {
                            if ( ticket.price <= 0) {
                                return (
                                    <PassBox
                                        key={ticket.id}
                                        title={ticket.name}
                                        availableFrom={ticket.availabilityStartTimestamp}
                                        availableTo={ticket.availabilityEndTimestamp}
                                        registrationLink={'/register-free'}
                                        buttonLink={'/register-free'}
                                        buttonLabel={'Register for Pass'}
                                    />
                                )
                            }
                        })
                    }
                </div>

            </section>

            <Footer />
        </>
    )
}




export async function getStaticProps() {

    const res = await fetch(`https://api.bizzabo.com/api/registrationTypes?eventId=${process.env.BIZZABO_EVENT_ID}`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
    const data = await res.json()
  

    return { props: { data } }
}