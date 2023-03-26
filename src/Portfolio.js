import { createContext, useEffect, useRef, useState } from "react"
import "./Portfolio.css"

import Navbar from "./component/navbar"
import Main from "./component/main"
import Footer from "./component/footer/Footer"

import { SocialMedia, Modal, Drawer, ProjectDetail } from "./component/utils"
import { useLayoutEffect } from "react"
import { useMediaScreens } from "./hooks"

export const GlobalContext = createContext()

function Portfolio() {
    const [darkTheme, setDarkTheme] = useState()
    const [modal, toggleModal] = useState(false)
    const [drawer, toggleDrawer] = useState(false)
    const [projectDetail, setProjectDetail] = useState(null)

    const appRef = useRef()

    useEffect(() => {
        if (drawer || modal) setProjectDetail(null)
    }, [drawer, modal])

    useLayoutEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setDarkTheme(true)
        }
    }, [])

    return (
        <div
            ref={appRef}
            className={`portfolio p-0 m-0 flex flex-col items-center relative min-h-[100vh]
            ${
                darkTheme ? "dark text-slate-200 bg-gray-900" : "bg-slate-100"
            } overflow-x-hidden`}
        >
            <GlobalContext.Provider
                value={{
                    appRef,

                    darkTheme,
                    setDarkTheme,
                    modal,
                    toggleModal,
                    drawer,
                    toggleDrawer,
                    projectDetail,
                    setProjectDetail,
                }}
            >
                {projectDetail && <ProjectDetail project={projectDetail} />}

                {modal && <Modal instanceDispatcher={toggleModal} />}

                <Navbar changeTheme={setDarkTheme} />

                {drawer && <Drawer callback={toggleDrawer} />}

                {/* {resume && <Resume />} */}
                <SocialMedia />
                <div className="portfolio">
                    <Main />
                </div>
                <Footer />
            </GlobalContext.Provider>
        </div>
    )
}

export default Portfolio

