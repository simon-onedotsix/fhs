import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/esg'
import { esgProps, REVALIDATE } from '../ui-corporate/lib/cms'

export default function Esg(p) {
	return <CorporatePage path="/esg" {...p} />
}
Esg.theme = 'global-2024'

export async function getStaticProps() {
	return { revalidate: REVALIDATE, props: await esgProps(page) }
}
