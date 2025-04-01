import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {

	// add below to HTML tag to handle RTL globally
	// dir={ this.props.locale === 'ar' ? 'rtl' : 'ltr'}

	render() {
		return (
			<Html lang={this.props.locale}>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Barlow+Condensed:wght@200&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
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