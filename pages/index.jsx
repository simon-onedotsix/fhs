import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/home'
import { homeProps, REVALIDATE } from '../ui-corporate/lib/cms'

// Egypt's home and the FHS Living pages of World, Saudi Arabia and Egypt import this from here
export { EVENT_DATA } from '../ui-corporate/data/legacy'

export default function Home(p) {
	return <CorporatePage path="/" {...p} />
}
Home.theme = 'global-2024'

export async function getStaticProps() {
	return { revalidate: REVALIDATE, props: await homeProps(page) }
}
