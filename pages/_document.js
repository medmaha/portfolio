import { Html, Head, Main, NextScript } from "next/document"

export default function Document(props) {
    const themeClass = props.__NEXT_DATA__.props.pageProps.theme || "dark"
    return (
        <Html lang="en">
            <title>Mahamed Touray PortFolio</title>
            {/* <link rel="stylesheet" href="/styles/globals.css" /> */}
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

