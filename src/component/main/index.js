import { AboutMe } from "./about"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { Header } from "./header"
import { Contact } from "./contact"
import { useRef, useEffect } from "react"
import { intersectionObserverFunc } from "../../libs/intersections"

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

export default Main
