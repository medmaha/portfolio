import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useMediaScreens } from "../../src/hooks"
import { GlobalContext } from "../../src/Portfolio"
import { NextRequest } from "next/server"
import { workProjects } from "../../src/db"
import Layout from "../../src/component/Layout"
import Portfolio from "../../src/Portfolio"
import Image from "next/image"

let closeTimeout
let closedByButton

function Project({ data: project, theme, slug }) {
    const thumbnailRef = useRef(null)
    const headerRef = useRef(null)
    const descriptionRef = useRef(null)

    if (!project) {
        return (
            <div className="mt-[200px] text-center font-bold text-xl">
                Not Found {slug}
            </div>
        )
    }

    if (project)
        return (
            <Layout theme={theme}>
                <Portfolio dark={theme === "dark"} page={"details"}>
                    <div className="w-full h-full min-h-[calc(100vh-120px)] pb-10 mt-[70px] max-w-[1000px] mx-auto">
                        <div className="flex w-full h-full flex-col md:flex-row gap-2">
                            <div
                                ref={thumbnailRef}
                                className="px-2 flex md:h-full md:w-max justify-center flex-col items-center gap-2 md:mt-[100px]"
                            >
                                <h2
                                    ref={headerRef}
                                    className="text-center text-2xl font-bold tracking-wider sm:py-4 py-2 block md:hidden"
                                >
                                    {project.name}
                                </h2>
                                <Image
                                    width={400}
                                    height={250}
                                    src={`/assets/img/${project.thumbnail}`}
                                    className="rounded-md border-[2px] dark:border-card-dark border-gray-300"
                                    alt={project.name + "thumbnail"}
                                />
                                <a
                                    href={project.liveDemoLink}
                                    target={"blank"}
                                    className="flex gap-1 shadow-lg p-2 rounded-md outline outline-1 focus:outline-2 transition-all group -translate-y-1 focus:translate-y-0
                                    outline-primary-light dark:outline-primary-dark shadow-primary-light dark:shadow-primary-dark items-center md:mt-4 my-2 flex-wrap justify-center tracking-wide text-primary-light dark:text-primary-dark"
                                >
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18px"
                                            height="18px"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                    </span>
                                    <span className="text-sm cursor-pointer transition">
                                        Visit live demo
                                    </span>
                                </a>
                            </div>
                            <div
                                ref={descriptionRef}
                                className="flex-1 overflow-hidden overflow-y-auto"
                            >
                                <h2
                                    ref={headerRef}
                                    className="text-center text-2xl font-bold tracking-wider sm:py-4 py-2 hidden md:block"
                                >
                                    {project.name}
                                </h2>
                                <div
                                    data-project-desc
                                    className="font-medium md:pt-2 flex justify-center flex-col gap-4 tracking-wide sm:px-2 text-sm sm:text-base px-1"
                                >
                                    {project.description?.map((desc, idx) => {
                                        return (
                                            <p key={idx}>{desc.toString()}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Portfolio>
            </Layout>
        )
}

// This gets called on every request
export async function getServerSideProps({ req, params }) {
    const { slug } = params

    const data = workProjects.find((item) => item.slug === slug) || {}

    return { props: { data, theme: req.cookies.theme || "dark" } }
}
export default Project
