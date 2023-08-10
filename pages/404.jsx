import { useLayoutEffect, useState } from "react"
import Layout from "../src/component/Layout"
import Portfolio from "../src/Portfolio"

export default function Home() {
    const [theme, setTheme] = useState(null)

    useLayoutEffect(() => {
        const regex = document.cookie.match(/(theme).\w*/g)

        if (regex.length > 0) {
            const _theme = regex[0].split("=")[1] || "dark"

            setTheme(_theme)
        }
    }, [])

    if (theme)
        return (
            <Layout theme={theme}>
                <div className="">
                    <Portfolio dark={theme === "dark"} page="error">
                        <div className="w-full h-full min-h-[91.5vh] py-16">
                            <div className="py-10"></div>
                            <h1 className="text-center font-bold tracking-wide uppercase">
                                Page Not Found
                            </h1>
                            <p className="text-center text-sm max-w-[50ch]">
                                This is not the resource your are looking for.
                            </p>
                        </div>
                    </Portfolio>
                </div>
            </Layout>
        )

    return <></>
}
