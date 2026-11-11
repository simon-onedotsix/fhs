import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/fhs-advisory-board-terms'

export default function AdvisoryBoardTerms(p) {
	return <CorporatePage path="/fhs-advisory-board-terms" {...p} />
}
AdvisoryBoardTerms.theme = 'global-2024'

export async function getStaticProps() {
	return { props: page }
}
