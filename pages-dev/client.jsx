import { useState, useEffect } from 'react';

export default function Client () {

    const [data, setData] = useState(null)

    
    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(
                "https://developer.swapcard.com/event-admin/graphql",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": process.env.SWAPCARD_AUTH_KEY
                    },
                    mode: 'no-cors',
                    body: JSON.stringify({
                        query: `
                            query {
                                event(id: "${process.env.SWAPCARD_EVENT_ID}") {
                                    exhibitorsTypes {
                                        name
                                        id
                                        position
                                    }
                                }
                                exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID}", page:1, pageSize: 200) {
                                    id
                                    name
                                    logoUrl
                                    websiteUrl
                                    description
                                    type
                                    typeLabel {
                                        id
                                        name
                                    }
                                }
                            }
                        `
                    })
                }
            )
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setData(result)
            console.log(result)
          }
       
          fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e)
          })

    }, [])


    // if (loading) return <p>Loading...</p>
    // if (error) return <p>No profile data</p>



    return (
            <h1>loaded!</h1>
    )
}