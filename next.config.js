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

			// FHS Living v3 (October 2026): the old Living pages moved. Temporary (307) for the launch window, so a
			// rollback leaves no redirect cached in browsers; set permanent: true once Living has run cleanly.
			{
				source: '/living/why-now',
				destination: '/living/about',
				permanent: false,
			},
			{
				source: '/living/founding-advisors',
				destination: '/living/who-is-in-the-room',
				permanent: false,
			},
			{
				source: '/living/programme',
				destination: '/living/paris/programme',
				permanent: false,
			},
			{
				source: '/living/programme-demo',
				destination: '/living/paris/programme',
				permanent: false,
			},
			{
				source: '/living/purchase-pass',
				destination: '/living/paris/passes',
				permanent: false,
			},
			{
				source: '/living/register-interest',
				destination: '/living/register',
				permanent: false,
			},
			{
				source: '/living/contact-us',
				destination: '/living/contact',
				permanent: false,
			},
			{
				source: '/living/travel-and-accommodation',
				destination: '/living/paris/venue',
				permanent: false,
			},
		  
		]
	}

}

module.exports = nextConfig
