import "../styles/globals.css"
import { useEffect, createContext } from "react"
import NextJSProgressBar from "nextjs-progressbar"
import { cookies } from "next/headers"

import { programmingLangs, workProjects } from "../src/db"
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage"
import Footer from "../src/component/footer/Footer"

export const DatabaseContext = createContext({ programmingLangs, workProjects })

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextJSProgressBar
                color="#1b1bee"
                startPosition={0.1}
                height={3}
                options={{ showSpinner: false }}
                transformCSS={(css) => {
                    // manipulate css string here

                    return <style>{css}</style>
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

