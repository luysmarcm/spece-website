import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"></link>
					{/* <link
						rel="stylesheet"
						href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
					/> */}
				</Head>
				<body className="max-w-max min-w-min mx-auto">
					<Main />
					<NextScript />
					{/* <div id="fb-root"></div>
					<div id="fb-customer-chat" className="fb-customerchat"></div>
					<script
						strategy="lazyOnload"
						dangerouslySetInnerHTML={{
							__html: `
								var chatbox = document.getElementById("fb-customer-chat");
							     chatbox.setAttribute("page_id", "1707919246123667");
							     chatbox.setAttribute("attribution", "biz_inbox");
						
							     window.fbAsyncInit = function () {
							         FB.init({
							             xfbml            : true,
                           version          : 'v12.0'
							         });
							     };
							     (function (d, s, id) {
							         var js,
							             fjs = d.getElementsByTagName(s)[0];
							         if (d.getElementById(id)) return;
							         js = d.createElement(s);
							         js.id = id;
							         js.src =
							             "https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js";
							         fjs.parentNode.insertBefore(js, fjs);
							     })(document, "script", "facebook-jssdk");
                            `,
						}}
					/> */}
					{/* <scrip src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js" /> */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
