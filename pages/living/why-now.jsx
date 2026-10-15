// /living/why-now redirects to /living/about (next.config.js), so this page never renders. The file stays
// because the Living pages inside FHS World, Saudi Arabia and Egypt import ASSET_CLASS_DATA from here.
export { ASSET_CLASS_DATA } from '../../ui-living/data/legacy'

export default function WhyNow() {
	return null
}
