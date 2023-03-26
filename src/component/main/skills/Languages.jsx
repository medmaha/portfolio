import "./styles.css"
import { useEffect, useRef } from "react"
import { programmingLang } from "./DATA"

export default function Languages() {
    return (
        <>
            <div className="flex gap-4 flex-wrap justify-between items-center w-[95%] md:w-[90%]">
                {programmingLang.map((lang) => {
                    return <Lang key={lang.name} lang={lang} />
                })}
            </div>
        </>
    )
}

function Lang({ lang }) {
    const langRef = useRef()
    useEffect(() => {
        let IntervalID
        intersectionObserverFunc(
            null,
            "0px 0px -50px 0px",
            IntervalID,
            langRef.current,
        )
    }, [])

    return (
        <div
            ref={langRef}
            className={`
                            __skills__lang flex-1 basis-[320px] flex gap-1 items-center flex-col  ${lang.animation}
                        `}
        >
            <div className="flex justify-between gap-2 text-sm w-full font-semibold tracking-wide">
                <span className="md:text-lg">{lang.name}</span>
                <span className="md:text-lg" data-score={lang.score}></span>
            </div>
            <div className="w-full flex bg-blue-200 dark:bg-slate-800 h-[8px]">
                <span
                    data-score-bar
                    style={{
                        maxWidth: `0%`,
                        backgroundColor: `${lang.color}`,
                    }}
                    className="flex-1 w-full rounded-full"
                ></span>
            </div>
        </div>
    )
}

function intersectionObserverFunc(root, rootMargin, IntervalID, doc) {
    const options = {
        root: root,
        rootMargin: rootMargin,
        threshold: 0.5,
    }

    function callback(entries = []) {
        entries.forEach((entry) => {
            const target = entry.target
            const inViewPort = entry.isIntersecting
            entry.target.classList.toggle("__animate_lang", !!inViewPort)
            if (entry.isIntersecting) {
                // observer.unobserve(entry.target)
                const scoreElement = target?.querySelector("[data-score]")
                const scoreBarElement =
                    target?.querySelector("[data-score-bar]")
                const score = scoreElement?.dataset.score.split("%")[0]
                scoreBarElement.style.maxWidth = "0%"

                let marked = 0
                function func() {
                    if (marked === Number(score)) {
                        clearInterval(IntervalID)
                        return
                    }
                    scoreElement.innerHTML = String(marked) + "%"
                    scoreBarElement.style.maxWidth = String(marked) + "%"
                    marked++
                }
                if (IntervalID) clearInterval(IntervalID)
                IntervalID = setInterval(func, 20)
            }
        })
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(doc)
}
