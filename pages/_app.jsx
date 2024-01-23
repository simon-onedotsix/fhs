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
			query fhsGlobals {
				globalSets(site: "fhis") {
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

	const sa = await craftApolloClient().query({
		query: gql`
			query KsaGlobals {
				globalSets(site: "fhisSa") {
					... on header_GlobalSet {
						id
						name
						mainMenu {
							... on mainMenu_BlockType {
								id
								menuColumns {
									... on menuColumns_heading_BlockType {
										id
										heading
										headingSize
									}
									... on menuColumns_menuLinksGroup_BlockType {
										id
										menuLink {
										label
										hyperlink
										size
										}
									}
								}
							}
						}
					}
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
			query meGlobals {
				globalSets(site: "fhisAe") {
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

	// console.log('FOOTER DATA:', (global))

	return { 
		globals: {
			global: global.data.globalSets,
			sa: sa.data.globalSets,
			me: me.data.globalSets,
		}
	}

}