/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true, 
	productionBrowserSourceMaps: true,
	images: {
		domains: ['cms.thebench.com', 'res.cloudinary.com'],
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
			source: '/2024',
			destination: 'https://www.canva.com/design/DAFtBtry1HM/nJ8pAa0CtfAnnW4g7jA7Uw/view#1',
			permanent: false,
		  },
		]
	},
}

module.exports = nextConfig
