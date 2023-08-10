import { Html, Head, Main, NextScript } from "next/document"

export default function Document(props) {
    const themeClass = props.__NEXT_DATA__.props.pageProps.theme || "dark"
    return (
        <Html lang="en">
            <title>Mahamed Toure | PortFolio</title>
            {/* <link rel="stylesheet" href="/styles/globals.css" /> */}
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body className="m-0 p-0 box-border">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

