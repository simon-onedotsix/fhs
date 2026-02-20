/** @type {import('next').NextConfig} */

const nextConfig = {

	reactStrictMode: true, 

	productionBrowserSourceMaps: true,

	i18n: {
		locales: ['en', 'ar'],
		defaultLocale: 'en',
	},

	images: {
		domains: ['cms.thebench.com', 'res.cloudinary.com', 'cdn-api.swapcard.com', 'static.swapcard.com'],
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
				source: '/sa/become-a-sponsor',
				destination: '/sa/become-a-partner',
				permanent: true,
			},
		  
		]
	}

}

module.exports = nextConfig
