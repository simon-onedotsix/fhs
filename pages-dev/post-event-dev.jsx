import { useEffect } from "react"
import axios from 'axios'
import { Client } from "@hubspot/api-client"



export default function PostEvent () {

    // useEffect( () => {

    //     axios.get('https://api.hubapi.com/contacts/v1/lists/737/contacts/all', 
    //         { 
    //             headers: {
    //                 'Authorization': 'Bearer pat-na1-4b3f96a9-f593-4d17-b3bf-ecfce1f5fe82',
    //                 'Content-Type': 'application/json'
    //             }
    //         },
    //         ( err, data ) => {
    //             console.log(err)
    //             console.log(data)
    //         }
    //     )

    // },[])
 

    const hubspotClient = new Client({ accessToken: 'pat-na1-4b3f96a9-f593-4d17-b3bf-ecfce1f5fe82' });

    // const response = hubspotClient.apiRequest({
    //     path: '/contacts/v1/lists/737/contacts/all',
    // })

    // console.log(response)
    

    const callAPI = async () => {
        const response = await hubspotClient.apiRequest({
            path: '/contacts/v1/lists/737/contacts/all',
        })
        const json = await response.json()
        console.log(json)
    }

    

    // const callAPI = async () => {
    //     try {
    //         const res = await fetch(
    //             'https://api.hubapi.com/contacts/v1/lists/737/contacts/all', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Authorization': 'Bearer pat-na1-4b3f96a9-f593-4d17-b3bf-ecfce1f5fe82',
    //                     "Content-Type": "application/json",
    //                     "Access-Control-Allow-Origin": '*'
    //                 },
    //                 mode: 'no-cors'
    //             }
    //         )
    //         const data = await res.json()
    //         console.log( data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <>
            <p>post event page</p>
            <button onClick={callAPI}>Make API Call</button>
        </>
    )
}

// https://api.hubapi.com/crm/v3/objects/contacts

// https://web.postman.co/workspace/My-Workspace~9945b9ad-25f6-48ea-8a6e-fcb4e2b1900e/request/19835058-f2b4d8a1-dccd-40a2-8840-82349f761576

// And here is the link to attendee list: https://app.hubspot.com/contacts/14527187/lists/737/filters

// https://api.hubapi.com/contacts/v1/lists/737/contacts/all


// https://www.kelp.agency/blog/how-to-enable-cors-ajax-requests-for-any-hubspot-api/