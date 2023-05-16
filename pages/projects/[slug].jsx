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
                    <div className="w-full h-full pb-10 mt-[70px] max-w-[1000px] mx-auto">
                        <div
                            // id="detailsWrapper"
                            className="block h-full  rounded-lg relative"
                        >
                            <div className="flex w-full h-full flex-col md:flex-row gap-2">
                                <div
                                    ref={thumbnailRef}
                                    className="px-2 flex md:h-full justify-center w-max md:mt-[100px]"
                                >
                                    <Image
                                        width={400}
                                        height={250}
                                        src={`/assets/img/${project.thumbnail}`}
                                        className="rounded-md"
                                        alt={project.name + "thumbnail"}
                                    />
                                </div>
                                <div
                                    ref={descriptionRef}
                                    className="flex-1 overflow-hidden overflow-y-auto"
                                >
                                    <h2
                                        ref={headerRef}
                                        className="text-center text-2xl font-bold tracking-wider py-4"
                                    >
                                        {project.name}
                                    </h2>
                                    <div
                                        data-project-desc
                                        className="font-medium pt-4 flex justify-center flex-col gap-4 tracking-wide px-2"
                                    >
                                        {project.description?.map(
                                            (desc, idx) => {
                                                return (
                                                    <p key={idx}>
                                                        {desc.toString()}
                                                    </p>
                                                )
                                            },
                                        )}
                                    </div>
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

    const data = workProjects.find((item) => item.slug === slug)

    if (data) return { props: { data, theme: req.cookies.theme } }

    return { props: { slug } }
}
export default Project
