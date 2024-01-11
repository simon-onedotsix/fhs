/** @type {import('next').NextConfig} */

const nextConfig = {

	reactStrictMode: true, 

	productionBrowserSourceMaps: true,

	images: {
		domains: ['cms.thebench.com', 'res.cloudinary.com', 'cdn-api.swapcard.com'],
	},
	
	webpack(config) {
		config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"]
		});
	
		return config
	},

}

module.exports = nextConfig
