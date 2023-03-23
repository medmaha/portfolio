import { createContext, useEffect, useRef, useState } from "react"
import "./Portfolio.css"

import Navbar from "./component/navbar"
import Main from "./component/main"
import Footer from "./component/footer/Footer"

import { SocialMedia, Modal, Drawer } from "./component/utils"
import Resume from "./component/resume"

export const GlobalContext = createContext()

function Portfolio() {
    const [darkTheme, setDarkTheme] = useState()
    const [modal, setModalOptions] = useState({})
    const [drawer, setDrawerOptions] = useState({})
    const [resume, toggleResume] = useState(false)

    const appRef = useRef()
    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setDarkTheme(true)
        }
    }, [])

    function toggleModal(options = {}) {
        setModalOptions({
            ...modal,
            ...options,
        })
    }

    function toggleDrawer(options = {}) {
        setDrawerOptions({
            ...drawer,
            ...options,
        })
    }

    return (
        <div
            ref={appRef}
            className={`portfolio p-0 m-0 flex flex-col items-center relative min-h-[100vh]
            ${
                darkTheme ? "dark text-slate-200 bg-gray-900" : "bg-slate-100"
            } overflow-x-hidden`}
        >
            <Modal
                state={modal.state}
                children={modal.children}
                instanceDispatcher={toggleModal}
            />
            {/* <Drawer state={drawer.state} callback={drawer.callback} /> */}

            <GlobalContext.Provider
                value={{
                    appRef,
                    darkTheme,
                    setDarkTheme,
                    modal,
                    toggleModal,
                    toggleDrawer,
                    toggleResume,
                }}
            >
                <Navbar changeTheme={setDarkTheme} />
                {resume && <Resume />}
                <SocialMedia />
                <Main />
                <Footer />
            </GlobalContext.Provider>
        </div>
    )
}

export default Portfolio

