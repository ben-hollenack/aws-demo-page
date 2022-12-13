import Head from 'next/head'

const Meta = () => (
	<Head>
		<title>Aws Demo</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>
		<meta name='apple-mobile-web-app-title' content='Rice Bowl' />
		<meta name='application-name' content='Aws Demo' />
		{/* Discord Embed Color */}
		<meta name='generator' content='Aws Demo' />
		<meta
			name='description'
			content={`The next generation of the AWS platform, built by teenagers for teenagers... and everyone else!\n\nA sleek, intuitive, and engaging reimagination of the AWS front-end. It's focused on being a captivating and hassle-free experience for every user with the "it just works" philosophy in mind.`}
		/>
		<meta content='#f99800' data-react-helmet='true' name='theme-color' />

		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/>
		<link rel='apple-touch-icon' href='/images/awsLogo512.png' />
		<link rel='icon' type='image/png' href='/images/favicon.png' />
		<link rel='manifest' href='/manifest.json' />
	</Head>
)

export default Meta
