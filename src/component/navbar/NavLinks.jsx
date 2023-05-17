import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../Portfolio"
import { ContactForm } from "../utils"
import { useRef } from "react"
import { useRouter } from "next/router"

let ROUTED_HERE

export default function NavLinks() {
    const navLinksContainerRef = useRef(null)
    const targetLink = useRef(null)

    const router = useRouter()

    const routerHandler = () => {
        if (targetLink.current && ROUTED_HERE) {
            changeRoute()
            ROUTED_HERE = false
        }
    }

    useEffect(() => {
        if (router.pathname === "/") {
            router.events.on("routeChangeComplete", routerHandler)
            return () => {
                router.events.off("routeChangeComplete", routerHandler)
            }
        }
    }, [router])

    async function navigate(ev = new Event()) {
        targetLink.current = ev.currentTarget.dataset.link
        if (router.pathname !== "/") {
            ROUTED_HERE = true
            localStorage.setItem("router", targetLink.current)
            router.back()
        } else {
            changeRoute()
        }
    }

    function changeRoute() {
        const element = document.querySelector(
            `.__nav__link li[data-link="${targetLink.current}"]`,
        )
        const _linkID = element.children[0].dataset.href
        const targetElement = document.querySelector(
            `section[data-snap]#${_linkID}`,
        )

        targetElement.scrollIntoView({
            behavior: "smooth",
        })

        document
            .querySelector(".__nav__link li.active")
            .classList.remove("active")

        element.classList.add("active")
        targetLink.current = null
    }

    return (
        <ul
            ref={navLinksContainerRef}
            className="__nav__link sm:flex gap-2 text-sm  hidden h-full items-center overflow-hidden"
        >
            <li
                data-link="home"
                data-home
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="home">Home</button>
            </li>
            <li
                data-link="myworks"
                data-myworks
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="myWorks">Works</button>
            </li>
            <li
                data-link="myskills"
                data-myskills
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="mySkills">Skills</button>
            </li>
            <li
                data-link="aboutme"
                data-aboutme
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="aboutMe">About</button>
            </li>
            <li
                data-link="contactme"
                data-contactme
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="contactMe">Contact</button>
            </li>
        </ul>
    )
}
