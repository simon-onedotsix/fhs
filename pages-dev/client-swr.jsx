import request from 'graphql-request'
import useSWR from 'swr'

const graphQLFetcher = (query) => request('https://developer.swapcard.com/event-admin/graphql', query)

export default function ClientSwr () {

    const {
        data,
        error: isError,
        loading: isLoading,
      } = useSWR(
        `
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
        `,
        graphQLFetcher
      );
      if (isError) return <div>Error loading books</div>;
      if (isLoading) return <div>Loading books...</div>;

      return (
        <ul>
          {data?.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      )
}