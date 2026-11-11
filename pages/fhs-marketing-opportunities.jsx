import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/fhs-marketing-opportunities'
import { partnerProps, REVALIDATE } from '../ui-corporate/lib/cms'

export default function Partner(p) {
	return <CorporatePage path="/fhs-marketing-opportunities" {...p} />
}
Partner.theme = 'global-2024'

export async function getStaticProps() {
	return { revalidate: REVALIDATE, props: await partnerProps(page) }
}
