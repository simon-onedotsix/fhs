import { ApolloClient, InMemoryCache } from "@apollo/client"

export default function craftApolloClient ( preview, previewData ) {	

	const previewToken = preview ? previewData.token : undefined

	const client = new ApolloClient({
		uri: `https://cms.thebench.com/api${ previewToken ? `?token=${previewToken}` : `` }`,
		cache: new InMemoryCache(),
	})
	return client
}