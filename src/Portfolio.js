import { createContext, useEffect, useRef, useState } from "react"

import Main from "./component/main"

import { SocialMedia, Modal, Drawer, ProjectDetail } from "./component/utils"
import Navbar from "./component/navbar"
import Footer from "./component/footer/Footer"
import Alert from "./component/UI/Alert"

export const GlobalContext = createContext()

function Portfolio({ dark, page = "home", children }) {
    const [darkTheme, setDarkTheme] = useState(null)
    const [modal, toggleModal] = useState(false)
    const [drawer, toggleDrawer] = useState(false)
    const [_alert, setAlert] = useState(null)
    const [projectDetail, setProjectDetail] = useState(null)

    const appRef = useRef()

    useEffect(() => {
        if (drawer || modal) setProjectDetail(null)
    }, [drawer, modal])

    useEffect(() => {
        setDarkTheme(!!dark)
    }, [])

    return (
        <div
            ref={appRef}
            className={`portfolio p-0 m-0 flex flex-col items-center relative min-h-[100vh] dark:text-slate-200 dark:bg-gray-900 bg-slate-100
            overflow-x-hidden transition-[background-color] duration-500`}
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
                    setAlert,
                }}
            >
                <Navbar />

                {/* OVERLAYS */}
                {projectDetail && <ProjectDetail project={projectDetail} />}
                {drawer && <Drawer callback={toggleDrawer} />}
                {modal && <Modal instanceDispatcher={toggleModal} />}

                {page === "home" && (
                    <div className="">
                        <Main />
                    </div>
                )}
                {page === "details" && <>{children}</>}

                {_alert && (
                    <Alert
                        text={_alert.text}
                        duration={_alert.duration}
                        error={_alert.error}
                    />
                )}

                <SocialMedia />
                <Footer />
            </GlobalContext.Provider>
        </div>
    )
}

export default Portfolio

