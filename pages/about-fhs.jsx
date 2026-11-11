import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/about-fhs'
import { aboutProps, REVALIDATE } from '../ui-corporate/lib/cms'

export default function AboutFhs(p) {
	return <CorporatePage path="/about-fhs" {...p} />
}
AboutFhs.theme = 'global-2024'

export async function getStaticProps() {
	return { revalidate: REVALIDATE, props: await aboutProps(page) }
}
