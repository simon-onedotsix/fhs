// 2025 hubspot list IDs:
// List ID: 1237
// ILS List ID: 2031


import { Client } from "@hubspot/api-client"

async function handler (req, res) {

    if ( req.method === 'POST') {

        const email = req.body.email
        
        const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })  
        const hubspotContactData = await hubspotClient.apiRequest({
            path: `/contacts/v1/contact/email/${email}/profile`,
        })

        const contactsData = await hubspotContactData.json()
        let message = ''
        let authorised = false


        if ( contactsData['list-memberships'] ) {

            const allowed = contactsData['list-memberships'].find( obj => obj['static-list-id'] === 2875 )
            authorised = true
            message = 'authorisation complete'

            allowed ? console.log('allowed') : console.log('not allowed')

        } else {
            message = 'contact not found: not authorised'
        }

        res.status(201).json({ message, email, authorised })

        
    } else {
        res.status(200).json({ message: 'WTF?'})

    }

}

export default handler