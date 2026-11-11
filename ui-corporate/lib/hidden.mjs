// Profiles that are never shown on the corporate pages, whatever the CMS returns. The list is kept as hashes of
// name slugs because this repository is public; the readable list is with The Bench marketing team.
import { createHash } from 'crypto'

const HIDDEN = new Set(['be480d3210e56e78', 'e3ecb29b0f91f4f5', '826ea7f80224507f', 'e50bc5aedf72da79', 'c60b5a0e82a214a0'])
const sha = s => createHash('sha256').update(s).digest('hex').slice(0, 16)

// slug: a lower-case name with hyphens. anyWord also tests each word, so a title or an extra name in front does not
// let a listed name through.
export const hidden = (slug, anyWord = false) => (anyWord ? [slug, ...slug.split('-')] : [slug]).some(s => HIDDEN.has(sha(s)))
