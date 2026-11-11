import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/fhs-club'

export default function Club(p) {
	return <CorporatePage path="/fhs-club" {...p} />
}
Club.theme = 'global-2024'

export async function getStaticProps() {
	return { props: page }
}
