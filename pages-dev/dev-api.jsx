import { useRef, useState } from "react"


export default function ApiDevPage () {

    const [ allowed, setAllowed ] = useState( false )
    const emailInputRef = useRef()

    function formHandler ( e ) {
        e.preventDefault()

        const reqBody = { email: emailInputRef.current.value }

        fetch('/api/sa/delegate-auth', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( (data) => {
            console.log(data)
            if ( data.authorised === true ) {
                setAllowed( true )
            } else {
                setAllowed( false )
            }
        })
    }

    return (
        <section className="block">
            <div className="container">
                <p className="fs-5 fw-600">API test page</p>
            </div>

            <div className="container">
                <form onSubmit={formHandler}>
                    <input ref={emailInputRef} type="email" name="email" id="email" />
                    <button>check email</button>
                </form>
            </div>

            <div className="container">
                Authorised: { allowed === true ? 'yep' : 'nope' }
            </div>

            {
                allowed &&
                <div className="container">
                    <p>Here be all the juicy content for attendees only</p>
                </div>
            }

            <div className="container">
                <p>pr@eatnstays.com</p>
                <p>zuban@havanalife.com</p>
            </div>
        
        </section>
    )
}