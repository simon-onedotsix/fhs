import { LivingPage } from '../../ui-living/site/page'
import { CraftPage } from '../../ui-living/sections/craft-blocks'
import { listCraftPages, loadCraftPage } from '../../ui-living/lib/craft-page'
import { REVALIDATE } from '../../ui-living/lib/cms'
import { R } from '../../ui-living/lib/routes'

// Every page the team adds in Craft's "FHS Living Pages" section, in the Living design (25 Nov 2026; before this,
// these pages used Simon's old theme, header and footer). The modules come from Craft and are drawn by
// ui-living/sections/craft-blocks.jsx. A new or edited page shows within about 5 minutes, no deploy needed.
export default function Page({ page }) {
	return (
		<LivingPage path={`/living/${page.slug}`} title={page.seoTitle} description={page.description}
			head={page.noindex ? <meta name="robots" content="noindex" /> : null}>
			<CraftPage page={page} />
		</LivingPage>
	)
}
Page.theme = 'living'

const BUILDING = process.env.NEXT_PHASE === 'phase-production-build'
// FHS Living v3 pages own some addresses (travel-and-accommodation, case-studies): a Craft page with the same slug
// is left to the Living page
const owned = slug => Object.values(R).includes(`/living/${slug}`)

export async function getStaticPaths() {
	let slugs = []
	try {
		slugs = await listCraftPages()
	} catch (e) {
		console.warn(`FHS Living: Craft pages not listed at build (${e.message}); each is built on its first visit`)
	}
	// pages published after the build are built on their first visit (fallback), then refreshed like the rest
	return { paths: slugs.filter(s => !owned(s)).map(slug => ({ params: { slug } })), fallback: 'blocking' }
}

export async function getStaticProps({ params, preview, previewData }) {
	if (owned(params.slug)) return { notFound: true }
	try {
		const page = await loadCraftPage(params.slug, preview, previewData)
		if (!page) return { notFound: true, revalidate: REVALIDATE }
		return { props: { page }, revalidate: REVALIDATE }
	} catch (e) {
		// at build an outage must not stop the build for every event: the page waits for its first refresh. On the live
		// site a failed read throws, so Next keeps serving the page's last good version
		if (BUILDING) {
			console.warn(`FHS Living: Craft page ${params.slug} not built (${e.message})`)
			return { notFound: true, revalidate: 60 }
		}
		throw e
	}
}
