import "./modalStyles.css"
import React, { useEffect, useState } from "react"

export default function Modal({ children, instanceDispatcher }) {
    const [open, setOpen] = useState(true)

    function closeModal() {
        setOpen(false)
        instanceDispatcher(null)
    }

    return (
        <>
            {open && (
                <div className="__modal">
                    <div className="__modal_container">
                        <div className="__modal_content bg-slate-300 dark:bg-slate-700">
                            <div className="">{children}</div>
                        </div>

                        <div
                            className="__modal_close leading-none absolute top-1 sm:left-[90%] sm:top-[10px]"
                            onClick={closeModal}
                        >
                            <button
                                title="close"
                                className="rounded-full text-center
                                leading-none h-8 w-8 text-xl bg-slate-300 dark:bg-slate-700
                                hover:bg-red-400 transition
                                "
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
