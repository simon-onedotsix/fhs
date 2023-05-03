import React from "react"
import { createContext } from "react"

import { ThemeProvider } from 'next-themes'

import { useRouter } from "next/router"

import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Script from "next/script"

import { ParallaxProvider } from 'react-scroll-parallax'

import '../css/index.css'

export const GlobalsContext = createContext( )

export default function App({ Component, pageProps, globals }) {

	// console.log('globals from _app:', globals)
	const router = useRouter()
	// console.log(router)

	const getLayout = Component.getLayout || ((page) => page)

	return getLayout(
		<GlobalsContext.Provider value={{ globals }} >
			<ThemeProvider themes={['global', 'sa', 'ae']} defaultTheme="global" forcedTheme={Component.theme || null}>
				<ParallaxProvider>
					<Script id="google-tag-manager" strategy="afterInteractive">
						{`
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-MNM37BX');
						`}
					</Script>
					<Component {...pageProps} globals={globals} />
				</ParallaxProvider>
			</ThemeProvider>
		</GlobalsContext.Provider>
	)
}

App.getInitialProps = async () => {

	const global = await craftApolloClient().query({
		query: gql`
			query Globals {
				globalSet(site: "fhis") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
			}
		
		`
	})

	const ksa = await craftApolloClient().query({
		query: gql`
			query KsaGlobals {
				globalSet(site: "fhisSa") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
			}
		
		`
	})

	const me = await craftApolloClient().query({
		query: gql`
			query MeGlobals {
				globalSet(site: "fhisAe") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
			}
		
		`
	})

	// console.log('FOOTER DATA:', (data.globalSet))

	return { 
		globals: {
			global: global.data.globalSet,
			ksa: ksa.data.globalSet,
			me: me.data.globalSet,
		}
	}

}