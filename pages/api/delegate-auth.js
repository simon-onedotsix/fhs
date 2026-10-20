// hubspot v3 api
//
// get memberID from email
// get lists associated with that memberID
// check listID is on lists


import { Client } from "@hubspot/api-client"

async function handler (req, res) {

    if ( req.method === 'POST') {

        const email = req.body.email
        const listId = req.body.hubspotListId
        // console.log('email:', email)
        
        let contact = undefined
        let isOnList = false
        
        const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })  

        try {
            contact = await hubspotClient.crm.contacts.basicApi.getById(
                email,
                ['email'],
                undefined,
                undefined,
                false,
                'email'
            )

        } catch (error) {
            // 404 = email not in HubSpot; anything else (e.g. 401 bad token) is our problem, not the user's
            if (error.code !== 404) {
                console.error('HubSpot contact lookup failed:', error.code, error.message)
                return res.status(500).json({ email, error: 'HubSpot lookup failed' })
            }

        } finally {
            console.log(contact ? 'found contact' : 'no contact found') 

        }
        
 



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
        // get all the lists of which the contact is a member
        if (contact) {
            const response = await hubspotClient.apiRequest({
                method: 'GET',
                path: `/crm/v3/lists/records/0-1/${contact.id}/memberships`
            })
            if (!response.ok) {
                console.error('HubSpot list memberships lookup failed:', response.status)
                return res.status(500).json({ email, error: 'HubSpot lookup failed' })
            }
            const data = await response.json()
            // console.log('data:', data)
            
            isOnList = data.results.some(m => m.listId === listId)
        }
        console.log('isOnList:', isOnList)

        res.status(201).json({ email, isOnList })

        
    } else {
        console.log('ERROR FIRED')
        res.status(200).json({ email, isOnList })

    }

}

export default handler