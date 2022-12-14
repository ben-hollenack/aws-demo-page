import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Meta from '@/components/common/meta'
import '@/styles/globals.scss'
import '@/styles/fonts.scss'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import smile from '@/public/images/items/smile.svg'

const App = ({ Component, pageProps }: AppProps) => {
	// Create a boolean value that represents if the viewport is 1920x975 or not
	//If its not then dont render the component
	const [viewport, setViewport] = useState(false)

	useEffect(() => {
		// Check if the viewport is 1920x975
		// window.innerHeight === 975
		if (window.innerWidth === 1920) {
			setViewport(true)
		}
	}, [])

	return (
		<ThemeProvider attribute='class'>
			<Meta />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
