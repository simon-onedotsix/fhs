export default function PostEvent () {

    const callAPI = async () => {
        try {
            const res = await fetch(
                'https://app.hubspot.com/contacts/14527187', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer pat-na1-4b3f96a9-f593-4d17-b3bf-ecfce1f5fe82',
                        "Content-Type": "application/json",
                    }
                }
            )
            const data = await res.json()
            console.log( data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <p>post event page</p>
            <button onClick={callAPI}>Make API Call</button>
        </>
    )
}

// https://api.hubapi.com/crm/v3/objects/contacts