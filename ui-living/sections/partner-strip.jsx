import { c } from '../lib/c'
import { img } from '../lib/format'

// Every partner logo in tier order, at 80% of its visual-weight size (tools/build.py logo_heights).
export function PartnerStrip({ partners, style }) {
	return (
		<ul className={c('strip')} style={style}>
			{partners.tiers.flatMap(t => t.items.map(it => (
				<li key={it.logo}><img src={img(`partners/${it.logo}`)} alt={`${it.name}, ${t.tier}`} width={Math.round(it.w * 0.8)} height={Math.round(it.h * 0.8)} loading="lazy" /></li>
			)))}
		</ul>
	)
}
