import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useMediaScreens } from "../../hooks"
import { GlobalContext } from "../../Portfolio"

let closeTimeout
let closedByButton

function ProjectDetail({ project }) {
    const [loaded, toggleLoaded] = useState(false)
    const { setProjectDetail } = useContext(GlobalContext)
    const { screen } = useMediaScreens()

    const thumbnailRef = useRef(null)
    const headerRef = useRef(null)
    const descriptionRef = useRef(null)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        document.body.style.overflow = "hidden"

        headerRef.current.closest("#detailsWrapper").classList.add("open")
        return () => {
            document.body.style.overflow = "auto"

            if (closedByButton) {
                const projectsElement = document.getElementById("myWorks")
                projectsElement.scrollIntoView({ behavior: "smooth" })
                closedByButton = false
            }
        }
    }, [])

    useEffect(() => {
        if (screen) {
            const headerElm = headerRef.current
            const thumbnailElm = thumbnailRef.current
            const descriptionElm = descriptionRef.current
            const mainWrapperElm = headerElm.closest("#detailsWrapper")

            let reservedSpace

            if (["extra-small", "small"].includes(screen.width)) {
                reservedSpace =
                    mainWrapperElm.offsetHeight -
                    headerElm.offsetHeight -
                    thumbnailElm.offsetHeight -
                    10
            } else {
                reservedSpace =
                    mainWrapperElm.offsetHeight - headerElm.offsetHeight
            }

            // descriptionElm.style.maxHeight = `auto`
            descriptionElm.style.maxHeight = `${reservedSpace - 10}px`
            toggleLoaded(true)
        }
    }, [screen])

    function closeProjectDetail() {
        const container = headerRef.current.closest("#detailsWrapper")
        closedByButton = true
        container.classList.add("close")

        if (closeTimeout) clearTimeout(closeTimeout)
        closeTimeout = setTimeout(() => {
            setProjectDetail(null)
        }, 300)
    }

    return (
        <div className="ml-[35px] md:ml-[50px] absolute top-[70px] left-0 w-full max-w-[calc(100%-35px)] md:max-w-[calc(100%-50px)] h-full max-h-[calc(100vh-75px)] z-20">
            <div
                id="detailsWrapper"
                className="block h-full mr-1 bg-gray-100 dark:bg-slate-800 shadow-xl rounded-lg relative"
            >
                <div className="absolute left-4 top-2">
                    <h2>
                        <button
                            title="Exit"
                            onClick={closeProjectDetail}
                            className="bg-red-400 font-semibold text-lg bg-opacity-20 hover:bg-opacity-100 transition w-[2em] h-[2em] rounded-full"
                        >
                            &times;
                        </button>
                    </h2>
                </div>
                <h2
                    ref={headerRef}
                    className="text-center text-2xl font-bold tracking-wider py-4"
                >
                    {project.name}
                </h2>
                <div className="flex w-full h-full flex-col md:flex-row gap-2">
                    <div
                        ref={thumbnailRef}
                        className="px-2 flex md:h-full md:pt-10 justify-center md:flex-1 "
                    >
                        <img
                            src={`/assets/img/${project.thumbnail}`}
                            className="h-auto max-h-[200px] md:max-h-[350px] rounded-md"
                            alt={project.name + "thumbnail"}
                        />
                    </div>
                    <div
                        ref={descriptionRef}
                        className="flex-1 overflow-hidden overflow-y-auto"
                    >
                        <div
                            data-project-desc
                            className="font-medium pt-4 flex justify-center flex-col gap-4 tracking-wide px-2"
                        >
                            {loaded && <>{project.description}</>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
