import { AboutMe } from "./about"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { Header } from "./header"
import { Contact } from "./contact"
import { useRef, useEffect } from "react"

function Main() {
    const doc = useRef()

    useEffect(() => {
        const observer = intersectionObserverFunc(doc.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <main
            ref={doc}
            className="ml-[35px] md:ml-[50px] px-2 flex flex-col items-center"
        >
            <Header />
            <div className="max-w-[1100px] sections-container">
                <Projects />
                <Skills />
                <AboutMe />
                <Contact />
            </div>
        </main>
    )
}

let timeout

function intersectionObserverFunc(doc) {
    const options = {
        rootMargin: "-280px",
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (localStorage.getItem("router")) {
                    const element = document.querySelector(
                        `.__nav__link li[data-link="${localStorage
                            .getItem("router")
                            ?.toLowerCase()}"]`,
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
                        ?.classList.remove("active")

                    element.classList.add("active")

                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        localStorage.removeItem("router")
                    }, 3000)
                    return
                }

                const activeLink = document.querySelector("nav ul li.active")
                if (activeLink) {
                    activeLink.classList.remove("active")
                }

                const targetLink = document.querySelector(
                    `nav ul li[data-${entry.target.id.toLowerCase()}]`,
                )

                targetLink.classList.add("active")
            }
        })
    }, options)

    const sections = doc.querySelectorAll("section[data-snap]")

    sections.forEach((section) => {
        observer.observe(section)
    })

    return observer
}

export default Main
