import { useLayoutEffect, useState } from "react"
import Layout from "../src/component/Layout"
import Portfolio from "../src/Portfolio"
import { useRouter } from "next/router"

export default function Home() {
    const [theme, setTheme] = useState(null)
    const router = useRouter()

    useLayoutEffect(() => {
        const regex = document.cookie.match(/(theme).\w*/g)

        if (regex?.length > 0) {
            const _theme = regex[0].split("=")[1] || "light"
            setTheme(_theme)
        }
        setTheme("light")
    }, [])

    if (theme)
        return (
            <Layout theme={theme}>
                <div className="">
                    <Portfolio dark={theme === "dark"} page="error">
                        <div className="w-full h-full min-h-[91.5vh] py-16">
                            <div className="py-10"></div>
                            <h1 className="text-center text-2xl font-bold tracking-wide uppercase">
                                Page Not Found
                            </h1>
                            <p className=" py-4 text-center text-sm font-semibold tracking-wide leading-relaxed max-w-[40ch]">
                                Sorry! This is not the resource your are looking
                                for.
                            </p>
                            <div className="flex items-center justify-center p-4">
                                <button
                                    onClick={() => router.back()}
                                    className="bg-primary-light dark:bg-primary-dark hover:bg-opacity-100 bg-opacity-90 min-w-[150px] text-center transition font-semibold tracking-wide text-card-light dark:text-card-dark rounded-md py-2 px-4 capitalize"
                                >
                                    Go back
                                </button>
                            </div>
                        </div>
                    </Portfolio>
                </div>
            </Layout>
        )

    return <></>
}
