import React, { useContext, useEffect, useRef } from "react"
import { GlobalContext } from "../../context/global"

export default function Alert({ text, error = false, duration = 5000 }) {
    const { setAlert } = useContext(GlobalContext)

    const alertRef = useRef()

    useEffect(() => {
        const elem = alertRef.current

        if (elem) {
            elem.classList.add("animate-pulse")
        }
        const timeout1 = setTimeout(() => {
            elem?.classList.remove("animate-pulse")
        }, 1200)

        const timeout2 = setTimeout(() => {
            setAlert(null)
        }, duration)

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
    }, [])

    return (
        <div className="w-full fixed left-0 top-[80px] p-2 z-20">
            <div
                ref={alertRef}
                className={`max-w-[450px] flex justify-center items-center h-full w-full min-h-[50px] mx-auto duration-200 ${
                    error
                        ? " bg-red-500 text-card-light "
                        : " bg-sky-500 text-card-dark "
                } shadow ${
                    error ? " shadow-red-400 " : " shadow-sky-400 "
                } rounded-md p-2`}
            >
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}
