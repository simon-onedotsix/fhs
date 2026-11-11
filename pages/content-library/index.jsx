import { CorporatePage } from '../../ui-corporate/site/page'
import page from '../../ui-corporate/html/content-library'
import { libraryProps, REVALIDATE } from '../../ui-corporate/lib/cms'

export default function ContentLibrary(p) {
	return <CorporatePage path="/content-library" {...p} />
}
ContentLibrary.theme = 'global-2024'

export async function getStaticProps() {
	return { revalidate: REVALIDATE, props: await libraryProps(page) }
}
