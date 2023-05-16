import { AboutMe } from "./about"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { Header } from "./header"
import { Contact } from "./contact"
import { useRef, useEffect } from "react"

function Main() {
    const doc = useRef()

    useEffect(() => {
        intersectionObserverFunc(doc.current)
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

let observerID

function intersectionObserverFunc(doc) {
    if (observerID) {
        observerID.disconnect()
    }
    const options = {
        rootMargin: "-280px",
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
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

    observerID = observer

    const sections = doc.querySelectorAll("section[data-snap]")

    sections.forEach((section) => {
        observer.observe(section)
    })
}

export default Main
