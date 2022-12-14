const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		dest: "public",
		buildExcludes: ['/middleware-manifest.json/', '/pages/_offline.tsx'],
		disable: process.env.NODE_ENV === 'development',
		runtimeCaching,
	},
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		loader: 'akamai',
		path: '',
	},


})
