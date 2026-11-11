import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/award-winners'
import { awardsProps, REVALIDATE } from '../ui-corporate/lib/cms'

export default function AwardWinners(p) {
	return <CorporatePage path="/award-winners" {...p} />
}
AwardWinners.theme = 'global-2024'

export async function getStaticProps() {
	return { revalidate: REVALIDATE, props: await awardsProps(page) }
}
