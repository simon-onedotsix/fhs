import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png" />
					<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png" />
					<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png" />
					<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png" />
					<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png" />
					<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png" />
					<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png" />
					<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png" />
					<link rel="icon" type="image/png" href="/assets/favicons/favicon-196x196.png" sizes="196x196" />
					<link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32" />
					<link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
					<link rel="icon" type="image/png" href="/assets/favicons/favicon-128.png" sizes="128x128" />
					<meta name="application-name" content="&nbsp;"/>
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png" />
					<meta name="msapplication-square70x70logo" content="/assets/favicons/mstile-70x70.png" />
					<meta name="msapplication-square150x150logo" content="/assets/favicons/mstile-150x150.png" />
					<meta name="msapplication-wide310x150logo" content="/assets/favicons/mstile-310x150.png" />
					<meta name="msapplication-square310x310logo" content="/assets/favicons/mstile-310x310.png" />

					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Barlow+Condensed:wght@200&display=swap" rel="stylesheet"/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modalRoot"></div>
					<noscript
						dangerouslySetInnerHTML={{
						__html: `<iframe src=https://www.googletagmanager.com/ns.html?id=GTM-MNM37BX height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						}}
					/>
				</body>
			</Html>
		)
	}

}

export default MainDocument