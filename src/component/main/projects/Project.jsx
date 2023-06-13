import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Project({ data, descriptionClamp = 4 }) {
    "use server"

    return (
        <>
            <div className="__project card rounded-t-[2rem] rounded-lg flex flex-col items-center p-3 bg-gray-100 dark:bg-slate-800">
                <span
                    title={data.name}
                    className="text-lg cursor-default inline-block text-center sm:text-xl md:text-2xl font-semibold mt-1 mb-3 tracking-wide truncate w-full"
                >
                    {data.name}
                </span>
                <div className="h-full w-full mb-4 relative">
                    <ImageLazyLoader
                        slug={data.slug}
                        src={`/assets/img/${data.thumbnail_url}`}
                        alt={"project " + data.name}
                    />
                </div>

                <p
                    className={
                        `line-clamp-${descriptionClamp}` +
                        "line-clamp-3 text-center intro text-sm tracking-wide px-2 font-light text-gray-700 dark:text-gray-300"
                    }
                >
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
                            {...{ href: data.githubLink, target: "blank" }}
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

const ImageLazyLoader = ({ src, slug, alt }) => {
    const [hovering, toggleHovering] = useState(false)
    const imageRef = useRef(null)

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
            className="block relative transition-all duration-300 group object-fill w-full"
        >
            <Image
                onMouseOver={() => toggleHovering(true)}
                onTouchStartCapture={() => toggleHovering(true)}
                onTouchStart={() => toggleHovering(false)}
                ref={imageRef}
                src={src}
                height={250}
                width={350}
                alt={alt}
                className="cursor-pointer bg-slate-800 outline-gray-500 outline outline-2 object-cover"
            />

            <div
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
