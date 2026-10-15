// shortcut: React 18.2 has no fetchPriority prop and lint rejects the lowercase attribute in JSX, so it is spread in;
// once the app is on React 18.3+, write fetchPriority="high" instead.
export const HIGH = { fetchpriority: 'high' }

// External links that open a new tab (the app's lint requires noreferrer).
export const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' }
