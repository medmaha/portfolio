import React, { useState, useEffect, useRef, useContext } from "react"
import "./Drawer.css"

export default function Drawer({ callback }) {
    const drawerRef = useRef(null)

    useEffect(() => {
        activeLink()
        document.body.addEventListener("click", closeDrawer)
        return () => document.body.removeEventListener("click", closeDrawer)
    }, [])

    function activeLink(ev) {
        if (!drawerRef.current) return
        if (!ev) {
            const activeLink = document.querySelector(".__nav__link li.active")
            const linkID = activeLink.children[0].dataset.href

            drawerRef.current
                .querySelector(`li[data-href="${linkID}"]`)
                .classList.add("active")
        }
    }

    function closeDrawer({ target, currentTarget }) {
        const actionBtnClicked =
            !!target.closest("button[data-drawer]") ||
            !!target.getAttribute("data-drawer")

        const drawerElm =
            !!target.closest(".__nav__drawer") || !!target === drawerRef.current

        if (actionBtnClicked) {
            return
        }
        if (drawerElm) {
            return
        }
        callback(false)
    }

    function navigate(ev = new Event()) {
        const linkID = ev.currentTarget.dataset.href

        const targetElement = document.querySelector(
            `section[data-snap]#${linkID}`,
        )

        targetElement.scrollIntoView({
            behavior: "smooth",
        })

        drawerRef.current.querySelector("li.active")?.classList.remove("active")

        callback(false)
    }

    return (
        <>
            <div
                data-nav-drawer
                ref={drawerRef}
                className={`__nav__drawer open shadow border-r-[1px] border-slate-700`}
            >
                <div className="flex gap-[25px] flex-col w-full h-full pt-3">
                    {/* <h3 className="text-center text-lg font-semibold tracking-wider">
                        Mahamed Toure
                    </h3> */}
                    <ul className="flex text-base font-medium mt-4 gap-5  flex-col h-full items-center">
                        <li
                            onClick={navigate}
                            data-href="home"
                            className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
                        >
                            Home
                        </li>
                        <li
                            onClick={navigate}
                            data-href="myWorks"
                            className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
                        >
                            Work
                        </li>
                        <li
                            onClick={navigate}
                            data-href="mySkills"
                            className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
                        >
                            Skills
                        </li>
                        <li
                            onClick={navigate}
                            data-href="aboutMe"
                            className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
                        >
                            About
                        </li>
                        <li
                            onClick={navigate}
                            data-href="contactMe"
                            className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
                        >
                            Contact
                        </li>
                    </ul>
                    <div className="self-end w-full">
                        <p className="py-2 text-center text-sm text-slate-400">
                            Copyright © 2023 Mahamed Toure
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
