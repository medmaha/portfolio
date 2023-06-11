import Project from "./Project"
import { useEffect } from "react"
import { projects as projectsDATA } from "../../../db/projects"
import SectionHeading from "../../utils/SectionHeading"
import Link from "next/link"

export const ProjectsContainer = ({
    limit = 6,
    sections = true,
    projectsLink = true,
}) => {
    useEffect(() => {
        intersectionObserverProjects()
        // intersectionObserverProjectsImages()
    }, [])
    return (
        <section
            data-snap
            className={
                sections
                    ? "min-h-[100vh]"
                    : "" + "grid place-items-center content-center"
            }
            id="myWorks"
        >
            <div className="mt-[70px]"></div>
            {sections && (
                <h3 className="text-center py-[25px] text-2xl tracking-wide font-semibold">
                    {/* Latest Projects */}
                    <SectionHeading id="myWorks" />
                </h3>
            )}
            <div className="flex justify-center gap-[15px] sm:gap-2 flex-wrap mt-4">
                {projectsDATA.slice(0, limit).map((data, idx) => {
                    return (
                        <div
                            key={idx}
                            className="__project__card p-1 flex-1 min-w-[250px] md:min-w-[310px] max-w-[350px]"
                        >
                            <Project data={data} />
                        </div>
                    )
                })}
            </div>
            {projectsLink && (
                <div className="py-4 flex justify-center">
                    <Link
                        href="/projects"
                        className="text-primary-light dark:text-primary-dark  outline-current outline-1 outline rounded-full hover:scale-[1.01] hover:shadow-current hover:shadow-lg transition-all shadow-current shadow-md p-2 tracking-wide"
                    >
                        See more projects?
                    </Link>
                </div>
            )}

            {sections && (
                <h3 className="text-center text-2xl pt-4 tracking-wide font-semibold">
                    <SectionHeading wrap={true} />
                </h3>
            )}
        </section>
    )
}

function intersectionObserverProjects() {
    const options = {
        root: null,
        rootMargin: "500px 0px 0px 0px",
    }

    const observer = new IntersectionObserver((entries = []) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("__animate__in", entry.isIntersecting)
            // if (entry.isIntersecting) {

            // }
        })
    }, options)

    const projects = document.querySelectorAll(".__project__card")

    projects.forEach((project) => {
        observer.observe(project)
    })
}
