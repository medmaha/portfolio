import { createContext, useEffect, useRef, useState } from "react"

import Main from "./component/main"

import {
    SocialMedia,
    Modal,
    ProjectDetail,
    ContactForm,
} from "./component/utils"
import Navbar from "./component/navbar"
import Footer from "./component/footer/Footer"
import Alert from "./component/UI/Alert"
import { GlobalContext } from "./context/global"

function ProjectsPage({ dark, children }) {
    const [darkTheme, setDarkTheme] = useState(null)
    const [modal, toggleModal] = useState(false)
    const [drawer, toggleDrawer] = useState(false)
    const [_alert, setAlert] = useState(null)

    const appRef = useRef()

    useEffect(() => {
        setDarkTheme(!!dark)

        document?.body.classList.add("bg-slate-900")
    }, [])

    return (
        <div
            ref={appRef}
            className={`portfolio flex flex-col items-center relative h-max dark:text-slate-200 dark:bg-gray-900 bg-slate-100
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
                    setAlert,
                }}
            >
                <Navbar />

                {modal && (
                    <Modal instanceDispatcher={toggleModal}>
                        <ContactForm />
                    </Modal>
                )}

                {children}
                <SocialMedia />

                {_alert && (
                    <Alert
                        text={_alert.text}
                        duration={_alert.duration}
                        error={_alert.error}
                    />
                )}

                <Footer />
            </GlobalContext.Provider>
        </div>
    )
}

export default ProjectsPage
