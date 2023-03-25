import React, { useRef, useEffect, useState } from "react"

export default function Project({ data }) {
    return (
        <div className="__project card min-h-[150px] md:min-h-[170px] flex flex-col items-center p-3 bg-gray-100 dark:bg-slate-800">
            <span
                title={data.name}
                className="text-lg cursor-default inline-block text-center sm:text-xl md:text-2xl font-semibold mt-1 mb-3 tracking-wide truncate w-full"
            >
                {data.name}
            </span>
            <div className="flex-1 w-full pb-4">
                <ImageLazyLoader
                    src={`/assets/img/${data.thumbnail}`}
                    onClick={() => {
                        if (data.liveDemoLink) {
                            const anchorTag = document.createElement("a")
                            anchorTag.setAttribute("target", "_black")
                            anchorTag.href = data.liveDemoLink
                            anchorTag.click()
                        }
                    }}
                    alt={"project " + data.name}
                    width="100%"
                    className="cursor-pointer bg-slate-800 outline-gray-500 outline outline-1 h-[150px] object-fill sm:min-h-[170px]  md:max-h-[200px]"
                />
            </div>

            <p className="text-center pb-2 text-sm tracking-wide px-2 font-light text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                illo necessitatibus reiciendis consequatur in sint{" "}
            </p>
            <div className="flex justify-between gap-2 w-full mt-2">
                <div className="flex gap-1 items-center flex-wrap justify-center tracking-wide">
                    <img src="/assets/svg/download.svg" alt="download" />
                    <span className="text-xs cursor-pointer">download</span>
                </div>
                <div className="flex gap-1 items-center flex-wrap justify-center text-sm tracking-wide">
                    <img src="/assets/svg/code-block.svg" alt="download" />
                    <a
                        {...{ href: data.githubLink, target: "_blank" }}
                        className="text-xs cursor-pointer"
                    >
                        source code
                    </a>
                </div>
            </div>
        </div>
    )
}

const ImageLazyLoader = ({ src, ...restProps }) => {
    const [imageSrc, setImageSrc] = useState(null)
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
        setImageSrc(src)
    }, [src])

    return (
        <>
            <img ref={imageRef} src={src} {...{ alt: "", ...restProps }} />
        </>
    )
}
