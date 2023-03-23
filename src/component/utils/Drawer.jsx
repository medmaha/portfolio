import React, { useState, useEffect } from "react"
import "./Drawer.css"

export default function Drawer({ state, callback }) {
    const [open, setOpen] = useState(state)

    useEffect(() => {
        setOpen(state)
    }, [state])

    useEffect(() => {
        if (open) {
            document.body.addEventListener("click", closeDrawer)
        }

        return () => document.body.removeEventListener("click", closeDrawer)
    }, [open])

    function closeDrawer({ target, currentTarget }) {
        if (!target.closest(".__nav__drawer")) {
            setOpen(false)
            callback(false)
        }
    }

    return (
        <>
            <div className={`__nav__drawer ${open && "open"}`}>
                <div className="flex gap-[25px] flex-col w-full pt-3">
                    <h3 className="text-center font-semibold tracking-wider">
                        Mahamed Toure
                    </h3>
                    <ul className="flex gap-5 text-sm flex-col h-full items-center">
                        <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer active">
                            Home
                        </li>
                        <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                            Work
                        </li>
                        <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                            About
                        </li>
                        <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                            Skills
                        </li>
                        <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
