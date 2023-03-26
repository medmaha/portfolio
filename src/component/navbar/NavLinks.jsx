import React, { useContext } from "react"
import { GlobalContext } from "../../Portfolio"
import { ContactForm } from "../utils"
import { useRef } from "react"

export default function NavLinks() {
    const { modal, toggleModal, setProjectDetail } = useContext(GlobalContext)
    const navLinkRef = useRef(null)

    function navigate(ev = new Event()) {
        const linkID = ev.currentTarget.children[0].dataset.href

        const targetElement = document.querySelector(
            `section[data-snap]#${linkID}`,
        )

        setProjectDetail(null)

        targetElement.scrollIntoView({
            behavior: "smooth",
        })

        navLinkRef.current
            .querySelector("li.active")
            ?.classList.remove("active")

        ev.target.closest("li").classList.add("active")
    }

    function ShowContactModal() {
        toggleModal({
            state: !modal.state,
            children: <ContactForm />,
        })
    }

    return (
        <ul
            ref={navLinkRef}
            className="__nav__link sm:flex gap-2 text-sm  hidden h-full items-center overflow-hidden"
        >
            <li
                data-home
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="home">Home</button>
            </li>
            <li
                data-myworks
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="myWorks">Works</button>
            </li>
            <li
                data-myskills
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="mySkills">Skills</button>
            </li>
            <li
                data-aboutme
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="aboutMe">About</button>
            </li>
            <li
                data-contactme
                onClick={navigate}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                <button data-href="contactMe">Contact</button>
            </li>
        </ul>
    )
}
