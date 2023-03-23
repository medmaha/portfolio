import React, { useContext } from "react"
import { GlobalContext } from "../../../Portfolio"
import Quotes from "./Quote"

export default function Hero() {
    const context = useContext(GlobalContext)
    return (
        <div className="flex justify-center items-center flex-col mt-[5px]">
            <h1
                className={`sm:text-3xl text-2xl md:text-3xl text-center tracking-wide font-semibold capitalize`}
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
