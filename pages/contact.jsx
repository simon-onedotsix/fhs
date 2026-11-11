import { CorporatePage } from '../ui-corporate/site/page'
import page from '../ui-corporate/html/contact'

export default function Contact(p) {
	return <CorporatePage path="/contact" {...p} />
}
Contact.theme = 'global-2024'

export async function getStaticProps() {
	return { props: page }
}
