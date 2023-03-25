import React from "react"

export default function Footer() {
    return (
        <div className="flex pl-[35px] md:pl-[50px] justify-center mt-[10px] w-full bg-slate-200 dark:bg-slate-800">
            <div className="h-max flex items-center p-3 justify-evenly w-full gap-3 max-w-[650px] flex-wrap mx-2">
                <span
                    className="text-center opacity-90 text-sm
                     text-blue-500
                    dark:text-primary-dark
                    h-full"
                >
                    Copyright © 2023 Mahamed Toure
                </span>
                {/* <span
                    className="text-center opacity-90 text-sm underline underline-offset-4
                    text-blue-500
                    dark:text-primary-dark
                    decoration-blue-500
                    dark:decoration-primary-dark"
                >
                    https://www.muhamedtoure.org
                </span> */}
            </div>
        </div>
    )
}
