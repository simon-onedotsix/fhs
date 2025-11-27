import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import parse from 'html-react-parser'

import Head from "next/head"

import { Header } from '../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'
import { PageHeader } from '../../fuselage-africa/blocks/page-header/page-header'

import HubspotForm from '../../fuselage-africa/components/hubspot-form/hubspot-form'

import { StickySidebar } from "../../fuselage-africa/components/sticky-sidebar/sticky-sidebar"

export default function AttendeeList ({ entry }) {
    
    // console.log(entry)

    const form = entry.ahifContentBlocks.find( obj => obj.__typename === "ahifContentBlocks_hubspotForm_BlockType")
    // const listHeading = entry.ahifContentBlocks.find( obj => obj.__typename === "ahifContentBlocks_text_BlockType" && obj.id === "194650").textBlocks[0].body
    const list = entry.ahifContentBlocks.find( obj => obj.__typename === "ahifContentBlocks_text_BlockType")

    // console.log('LIST:,', list)

    return (

      <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header compact />

            <PageHeader >
                <p className='fs-1 fw-600 lh-1'>{ entry.title }</p>
            </PageHeader>

            <section className="block">
              <div className="container">

                <StickySidebar>

                  <aside>
                    <p className="fs-2 fw-600 pb-sm">List of Companies Attending AHIF&nbsp;2024</p>
                    {/* { form && <HubspotForm portalId={form.hubspotForm[0].portalId} formId={form.hubspotForm[0].formId} /> } */}
                  </aside>

                  <main className="formatted">
                    {/* <p className="fs-4 fw-600 c-primary pb-sm">List of Confirmed Companies Attending AHIF 2024</p> */}
                    {/* <span className="fs-2 c-primary">{ parse(listHeading) }</span> */}
                    { list && parse(list.textBlocks[0].body) }
                  </main>

                </StickySidebar>
                
              </div>
            </section>

            <Footer />
        </>

    )
}
AttendeeList.theme = 'africa'





export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Entry {
                entry(site: "${process.env.SITE_HANDLE_AFRICA}", id: "194166") {
                  ... on ${process.env.SITE_HANDLE_AFRICA}Pages_page_Entry {
                    id
                    title
                    ${process.env.SITE_HANDLE_AFRICA}ContentBlocks {
                      ... on ${process.env.SITE_HANDLE_AFRICA}ContentBlocks_text_BlockType {
                        id
                        textBlocks {
                          ... on textBlocks_BlockType {
                            id
                            body
                          }
                        }
                      }
                      ... on ${process.env.SITE_HANDLE_AFRICA}ContentBlocks_hubspotForm_BlockType {
                        id
                        hubspotForm {
                          ... on hubspotForm_BlockType {
                            id
                            portalId
                            formId
                          }
                        }
                      }
                    }
                  }
                }
              }
        `
    })
    const pageData = data
    
    

    // console.dir(pageData)
    // console.log(pageData.data.entry.speakers[0].speakers)


    return { 
		props: { 
            entry: pageData.data.entry
		}
	}
}
