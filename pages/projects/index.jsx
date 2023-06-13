import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import Layout from "../../src/component/Layout"
import ProjectsPage from "../../src/Projects"
import { intersectionObserverFunc } from "../../src/libs/intersections"
import { projects as projectsData } from "../../src/db/projects"

export default function Home({ theme }) {
    const doc = useRef()

    useEffect(() => {
        const observer = intersectionObserverFunc(doc.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <Layout theme={theme}>
            <ProjectsPage dark={theme === "dark"}>
                <section className="">
                    <main
                        ref={doc}
                        className="ml-[35px] md:ml-[50px] px-2 flex flex-col items-center"
                    >
                        <div className="py-4">
                            <h1 className="pt-20 text-xl tracking-wide font-bold text-center px-2">
                                My Past Projects
                            </h1>
                            <p className="text-center p-2">
                                These are some of the products I have worked on
                                during my self-taught journey.
                            </p>
                        </div>
                        <div className="max-w-[900px] mx-auto pt-6">
                            {/* <ProjectsContainer
                            sections={false}
                            projectsLink={false}
                        /> */}

                            <div className="grid justify-center  sm:gap-4 gap-2 mt-4">
                                {projectsData.map((data, idx) => {
                                    return (
                                        <Project
                                            key={idx}
                                            data={data}
                                            descriptionClamp={5}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </main>
                </section>
            </ProjectsPage>
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    return { props: { theme: req.cookies.theme || "dark" } }
}

function Project({ data }) {
    return (
        <>
            <div className="rounded-t-[3rem] outline-1 outline outline-gray-400 dark:outline-gray-700 shadow-lg sm:rounded-none sm:rounded-br-[2rem] sm:rounded-tl-[2rem] grid sm:grid-cols-[1fr,2fr] items-center gap:2 md:gap-4 sm:p-4 bg-gray-100 dark:bg-slate-800">
                <div className="h-full w-full mx-auto relative flex items-center justify-center">
                    <ImageLazyLoader
                        slug={data.slug}
                        src={`/assets/img/${data.thumbnail_url}`}
                        alt={"project " + data.name}
                    />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <h4
                        title={data.name}
                        className="pt-4 sm:pt-0 cursor-default inline-block text-center sm:text-left text-xl md:text-2xl font-semibold mt-1 mb-3 tracking-wide truncate w-full"
                    >
                        {data.name}
                    </h4>

                    <p
                        className={
                            "line-clamp-3 px-1 sm:p-0 text-center sm:text-left text-sm sm:text-base font-light text-gray-700 dark:text-gray-300 inline-block max-w-[60ch] sm:max-w-[auto]"
                        }
                    >
                        {data.intro} {"  "}
                        <Link
                            href={`/projects/${data.slug}`}
                            className="inline text-primary-light dark:text-primary-dark text-xs font-semibold tracking-wide"
                        >
                            read more
                        </Link>
                    </p>
                    <div className="flex justify-between gap-2 w-full mt-4">
                        <div className="flex gap-1 items-center flex-wrap justify-center tracking-wide">
                            <img src="/assets/svg/eye.svg" alt="download" />
                            <a
                                href={data.liveDemoLink}
                                target={"blank"}
                                rel="noreferrer"
                                className="text-xs cursor-pointer sm:font-semibold"
                            >
                                Live demo
                            </a>
                        </div>
                        <div className="flex gap-1 items-center flex-wrap justify-center text-sm tracking-wide">
                            <img
                                src="/assets/svg/code-block.svg"
                                alt="download"
                            />
                            <a
                                {...{ href: data.githubLink, target: "blank" }}
                                className="text-xs cursor-pointer  sm:font-semibold"
                            >
                                Source code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ImageLazyLoader = ({ src, slug, alt }) => {
    const [imageSrc, setImageSrc] = useState(null)
    const [hovering, toggleHovering] = useState(false)
    const imageRef = useRef(null)

    useEffect(() => {
        // const observer = new IntersectionObserver(
        //     (entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 setImageSrc(src)
        //                 // observer.disconnect()
        //             }
        //         })
        //     },
        //     { root: null, rootMargin: "500px 0px 0px 0px" },
        // )
        // observer.observe(imageRef.current)
        // setImageSrc(src)
    }, [src])

    return (
        <Link
            href={`/projects/${slug}`}
            onPointerLeave={(ev) => {
                ev.currentTarget.classList.remove("scale-[1.03]")
                ev.currentTarget
                    .querySelector(".link")
                    .classList.remove("group-hover:opacity-100")
            }}
            onPointerEnter={(ev) => {
                console.log(ev.pointerType)
                if (ev.pointerType === "mouse") {
                    ev.currentTarget.classList.add("scale-[1.03]")
                }
            }}
            className="flex justify-center relative transition-all duration-300 group object-fill w-full rounded-t-lg sm:rounded-none"
        >
            <Image
                onMouseOver={() => toggleHovering(true)}
                onTouchStartCapture={() => toggleHovering(true)}
                onTouchStart={() => toggleHovering(false)}
                ref={imageRef}
                src={src}
                height={300}
                width={500}
                alt={alt}
                className="cursor-pointer bg-slate-800 dark:outline-gray-500 outline-gray-300 outline outline-2 object-cover rounded-t-lg sm:rounded-none"
            />

            <div
                onPointerEnter={(ev) => {
                    if (ev.pointerType === "mouse") {
                        ev.currentTarget.classList.add(
                            "group-hover:opacity-100",
                        )
                    }
                }}
                className="link absolute transition opacity-0  top-0 left-0 w-full h-full rounded-t-lg sm:rounded-none bg-black bg-opacity-70 sm:min-h-[170px] block"
            >
                <span className="inline-flex justify-center items-center w-full sm:min-h-[170px] font-bold text-lg tracking-wide cursor-pointer">
                    More details?
                </span>
            </div>
        </Link>
    )
}

export async function getServerSideProps({ req }) {
    return { props: { theme: req.cookies.theme || "light" } }
}
