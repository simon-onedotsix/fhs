/** @type {import('next').NextConfig} */

const nextConfig = {

	reactStrictMode: true, 

	productionBrowserSourceMaps: true,

	i18n: {
		locales: ['en', 'ar'],
		defaultLocale: 'en',
		ignoreRoutes: [ '/africa', '/world', '/egypt', '/ais', '/brf' ]
	},

	images: {
		domains: ['cms.thebench.com', 'res.cloudinary.com', 'cdn-api.swapcard.com', 'static.swapcard.com'],
		minimumCacheTTL: 15552000, // 6 months in seconds
	},
	
	webpack(config) {
		config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"]
		});
	
		return config
	},

	async redirects() {
		return [
			{
				source: '/ae/:path*',
				destination: '/world/:path*',
				permanent: true,
			},
			{
				source: '/ais/:path*',
				destination: '/world/ais/:path*',
				permanent: true,
			},
			{
				source: '/world/branded-residences-forum',
				destination: '/world/brf',
				permanent: true,
			},
			{
				source: '/world/brf2025',
				destination: '/world/brf',
				permanent: true,
			},
			{
				source: '/sa/post-event',
				destination: '/sa/post-event-resources-2025',
				permanent: true,
			},
			{
				source: '/sa/purchase-pass',
				destination: '/sa/register-interest',
				permanent: false,
			},
			{
				source: '/sa/grif',
				destination: '/sa/',
				permanent: true,
			},
			{
				source: '/sa/why-sponsor',
				destination: '/sa/why-partner',
				permanent: true,
			},
			{
				source: '/sa/become-a-sponsor',
				destination: '/sa/become-a-partner',
				permanent: true,
			},
			{
				source: '/egypt/why-sponsor',
				destination: '/egypt/why-partner',
				permanent: true,
			},

			{
				source: '/world/brf/:path*',
				destination: '/world/living/:path*',
				permanent: true,
			},
			{
				source: '/sa/brf/:path*',
				destination: '/sa/living/:path*',
				permanent: true,
			},
			{
				source: '/egypt/brf/:path*',
				destination: '/egypt/living/:path*',
				permanent: true,
			},

			// FHS Living v3 (October 2026). Temporary (307) for the launch window, so a rollback leaves no redirect
			// cached in browsers; set permanent: true once Living has run cleanly.
			// Old Living pages that moved
			{
				source: '/living/why-now',
				destination: '/living/about',
				permanent: false,
			},
			{
				source: '/living/programme-demo',
				destination: '/living/programme',
				permanent: false,
			},
			{
				source: '/living/contact-us',
				destination: '/living/contact',
				permanent: false,
			},
			// The Paris home became the Europe Edition's home (6 Nov 2026)
			{
				source: '/living/paris',
				destination: '/living/europe',
				permanent: false,
			},
			// Addresses the v3 pages used for their first hour live (15 Oct 2026)
			{
				source: '/living/paris/programme',
				destination: '/living/programme',
				permanent: false,
			},
			{
				source: '/living/paris/passes',
				destination: '/living/purchase-pass',
				permanent: false,
			},
			{
				source: '/living/paris/venue',
				destination: '/living/travel-and-accommodation',
				permanent: false,
			},
			{
				source: '/living/who-is-in-the-room',
				destination: '/living/founding-advisors',
				permanent: false,
			},
			{
				source: '/living/register',
				destination: '/living/register-interest',
				permanent: false,
			},

			// FHS corporate pages (November 2026). Temporary (307) for the launch window, as for Living above.
			// Craft pages the new pages replace
			{
				source: '/fhs-cub',
				destination: '/fhs-club',
				permanent: false,
			},
			{
				source: '/fhs-marketing-opportunities-cms',
				destination: '/fhs-marketing-opportunities',
				permanent: false,
			},
			{
				source: '/why-attend',
				destination: '/about-fhs',
				permanent: false,
			},
			// The corporate pages have no Arabic version. Not /ar itself: Next sends Arabic-language browsers from / to
			// /ar, so that redirect would loop; /ar shows the English home with its canonical on /
			{
				source: '/ar/:page(about-fhs|award-winners|content-library|contact|esg|fhs-advisory-board-terms|fhs-club|fhs-marketing-opportunities)',
				destination: '/:page',
				permanent: false,
				locale: false,
			},
			// FHS Saudi Arabia: no Arabic version for now, every /ar/sa URL goes to the English homepage
			{
				source: '/ar/sa/:path*',
				destination: '/sa',
				permanent: false,
				locale: false,
			},

		]
	},

	// FHS Living: /living/experience is the 3D site, a static build kept in public/living/experience. With i18n and
	// locale: false the source names the locale: /en/... matches the default locale's unprefixed URL
	async rewrites() {
		return [
			{
				source: '/en/living/experience',
				destination: '/living/experience/index.html',
				locale: false,
			},
		]
	}

}

module.exports = nextConfig
