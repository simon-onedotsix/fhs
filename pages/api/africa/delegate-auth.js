// hubspot v3 api
//
// get memberID from email
// get lists associated with that memberID
// check listID is on lists


import { Client } from "@hubspot/api-client"

async function handler (req, res) {

    if ( req.method === 'POST') {

        const email = req.body.email
        console.log('email:', email)
        
        const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })  
        
        const contact = await hubspotClient.crm.contacts.basicApi.getById(
            email,
            ['email'],
            undefined,
            undefined,
            false,
            'email'
        )
        const contactId = contact.id   
        console.log('contactID:', contactId)

        // const memberships = await hubspotClient.crm.lists.membershipsApi.getPage(
        //     2875,
        //     undefined,
        //     undefined,
        //     3000,
        //     undefined
        // )
        // console.log('memberships:', memberships)

        // const isOnList = memberships.results.some(m => m.recordId === contactId)
        // console.log('memberships:', memberships)


        // call endpoint directly as above is unreliable :-/
        const response = await hubspotClient.apiRequest({
            method: 'GET',
            path: `/crm/v3/lists/records/0-1/${contact.id}/memberships`
        })
        const data = await response.json()
        console.log('data:', data)
        
        const isOnList = data.results.some(m => m.listId === '2875')
        console.log('isOnList:', isOnList)

        res.status(201).json({ email, isOnList })

        
    } else {
        console.log('ERROR FIRED')
        res.status(200).json({ email, isOnList })

    }

}

export default handler