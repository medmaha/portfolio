import React, { useContext } from "react"
import { GlobalContext } from "../../../context/global"

export default function Hero() {
    const context = useContext(GlobalContext)
    return (
        <div className="flex items-center flex-col h-full mt-[20px]">
            <h1
                className={`sm:text-3xl text-2xl md:text-3xl xl:text-4xl text-center tracking-wide font-bold capitalize`}
            >
                I'm Toure Mahamed
            </h1>
            <p
                className={`max-w-[25ch] text-center ${
                    context.darkTheme ? "text-slate-300" : "text-slate-700"
                }`}
            >
                A software engineer and a full stack developer
            </p>
        </div>
    )
}
