import React, { useRef, useEffect, useState, useContext } from "react"
import Link from "next/link"

export default function Project({ data }) {
    "use server"

    return (
        <>
            <div className="__project card min-h-[150px] md:min-h-[170px] flex flex-col items-center p-3 bg-gray-100 dark:bg-slate-800">
                <span
                    title={data.name}
                    className="text-lg cursor-default inline-block text-center sm:text-xl md:text-2xl font-semibold mt-1 mb-3 tracking-wide truncate w-full"
                >
                    {data.name}
                </span>
                <div className="flex-1 w-full pb-4 relative">
                    <ImageLazyLoader
                        slug={data.slug}
                        src={`/assets/img/${data.thumbnail}`}
                        // onClick={() => {
                        //     if (data.liveDemoLink) {
                        //         const anchorTag = document.createElement("a")
                        //         anchorTag.setAttribute("target", "_black")
                        //         anchorTag.href = data.liveDemoLink
                        //         anchorTag.click()
                        //     }
                        // }}
                        alt={"project " + data.name}
                        width="100%"
                        className="cursor-pointer bg-slate-800 outline-gray-500 outline outline-2 h-[150px] object-fill sm:min-h-[170px]  md:max-h-[200px]"
                    />
                </div>

                <p className="text-center intro text-sm tracking-wide px-2 font-light text-gray-700 dark:text-gray-300">
                    {data.intro}
                </p>
                <div className="flex justify-between gap-2 w-full mt-4">
                    <div className="flex gap-1 items-center flex-wrap justify-center tracking-wide">
                        <img src="/assets/svg/eye.svg" alt="download" />
                        <a
                            href={data.liveDemoLink}
                            target={"blank"}
                            rel="noreferrer"
                            className="text-xs cursor-pointer"
                        >
                            Live demo
                        </a>
                    </div>
                    <div className="flex gap-1 items-center flex-wrap justify-center text-sm tracking-wide">
                        <img src="/assets/svg/code-block.svg" alt="download" />
                        <a
                            {...{ href: data.githubLink, target: "_blank" }}
                            className="text-xs cursor-pointer"
                        >
                            Source code
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

const ImageLazyLoader = ({ src, slug, ...restProps }) => {
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
            className="block relative transition-all duration-300 group"
        >
            <img
                onMouseOver={() => toggleHovering(true)}
                onTouchStartCapture={() => toggleHovering(true)}
                onTouchStart={() => toggleHovering(false)}
                ref={imageRef}
                src={src}
                {...{ alt: "", ...restProps }}
            />

            <div
                onClick={restProps.onClick}
                onPointerEnter={(ev) => {
                    if (ev.pointerType === "mouse") {
                        ev.currentTarget.classList.add(
                            "group-hover:opacity-100",
                        )
                    }
                }}
                className="link absolute transition opacity-0  top-0 left-0 w-full h-full rounded-[5px] bg-black bg-opacity-70 sm:min-h-[170px] block"
            >
                <span className="inline-flex justify-center items-center w-full sm:min-h-[170px] font-bold text-lg tracking-wide cursor-pointer">
                    More details?
                </span>
            </div>
        </Link>
    )
}
