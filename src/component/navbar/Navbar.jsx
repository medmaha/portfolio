import "./styles.css"
import { useContext, useState, useEffect, useRef } from "react"
import { GlobalContext } from "../../Portfolio"
import NavLinks from "./NavLinks"

export default function Navbar() {
    const { drawer, toggleDrawer, setDarkTheme, darkTheme } =
        useContext(GlobalContext)

    useEffect(() => {
        // console.log(context)
    }, [])

    const [drawerIsOpen, setOpenDrawer] = useState(false)

    function toggleTheme() {
        if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme", "light")
        } else {
            localStorage.setItem("theme", "dark")
        }
        setDarkTheme((prev) => !prev)
    }

    return (
        <nav className="h-[65px] fixed top-0 left-0 flex justify-center w-full z-30">
            <div className="relative flex h-full items-center justify-between w-full px-[10px]">
                <div className="">
                    <a
                        href="/"
                        className="text-xl tracking-wide flex items-stretch h-full dark:fill-slate-200 fill-slate-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="40"
                            viewBox="0 0 48 40"
                        >
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="none"
                                strokeWidth="1"
                            >
                                <g
                                    fill="currentColor"
                                    transform="translate(-800.000000, -463.000000)"
                                >
                                    <g transform="translate(800.000000, 463.000000)">
                                        <path d="M47.4742642,7.33797753 C47.4652075,7.33078652 47.4579623,7.32134831 47.4466415,7.31595506 L47.4303396,7.30786517 L33.1344906,0.213483146 C33.0380377,0.165393258 32.9366038,0.133033708 32.8338113,0.106966292 C32.7047547,0.0741573034 32.5729811,0.0539325843 32.4407547,0.0539325843 C31.893283,0.0539325843 31.3485283,0.326741573 31.053283,0.802247191 L22.8230943,14.0768539 L33.1516981,30.7348315 L47.5181887,7.56449438 C47.5657358,7.48719101 47.5430943,7.39191011 47.4742642,7.33797753" />
                                        <path d="M18.2898113 11.0530337L18.2898113 26.1635955 31.8221887 32.8791011 18.2898113 11.0530337" />
                                        <path d="M33.8553962,33.8880899 L44.994566,39.4157303 C46.4440755,40.1352809 47.6191698,39.6314607 47.6191698,38.291236 L47.6191698,11.6894382 L33.8553962,33.8880899" />
                                        <path d="M15.9405283,7.35955056 L1.97841509,0.430561798 C1.72618868,0.305617978 1.48618868,0.246292135 1.26883019,0.246292135 C0.657509434,0.246292135 0.228679245,0.715955056 0.228679245,1.50382022 L0.228679245,31.4229213 C0.228679245,32.2238202 0.819169811,33.1721348 1.54098113,33.5303371 L13.8384906,39.632809 C14.1536604,39.7892135 14.4538868,39.8633708 14.7251321,39.8633708 C15.4895094,39.8633708 16.0256604,39.2764045 16.0256604,38.291236 L16.0256604,7.49573034 C16.0256604,7.43820225 15.9926038,7.38516854 15.9405283,7.35955056" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span className="pl-[2px] inline-flex items-end h-[40px] font-bold">
                            aha
                        </span>
                    </a>
                </div>
                <div className="flex h-full items-center">
                    {/* nav links Toggler */}
                    <NavLinks />
                    {/* Theme Toggler */}
                    <button
                        className="cursor-pointer sm:ml-5"
                        title={darkTheme ? "Light mode" : "Dark mode"}
                        onClick={toggleTheme}
                    >
                        {darkTheme ? (
                            // <img
                            //     src="/assets/svg/dark-mode.svg"
                            //     alt="dark theme toggler"
                            // />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2048 2048"
                                width="24px"
                                height="24px"
                                className="dark:fill-slate-200 fill-slate-800 transition"
                            >
                                <path d="M960 512q93 0 174.5 35.5t142 96 96 142T1408 960t-35.5 174.5-96 142-142 96T960 1408t-174.5-35.5-142-96-96-142T512 960t35.5-174.5 96-142 142-96T960 512zm0 768q66 0 124-25.5t101.5-69 69-101.5 25.5-124-25.5-124-69-101.5-101.5-69T960 640q-35 0-64 7v626q29 7 64 7zm64-896H896V0h128v384zM896 1536h128v384H896v-384zm1024-640v128h-384V896h384zM384 1024H0V896h384v128zm123-426L236 326l90-90 272 271zm906 724l271 272-90 90-272-271zm0-724l-91-91 272-271 90 90zm-906 724l91 91-272 271-90-90z" />
                            </svg>
                        ) : (
                            // <img
                            //     src="/assets/svg/light-mode.svg"
                            //     alt="light theme toggler"
                            // />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                width="24px"
                                viewBox="0 0 24 24"
                                className="dark:fill-slate-200 fill-slate-800 transition"
                            >
                                <rect fill="none" height="24" width="24" />
                                <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
                            </svg>
                        )}
                    </button>
                    {/* Drawer Toggler */}
                    <button
                        className="cursor-pointer inline-flex ml-3 sm:hidden"
                        onClick={() => {
                            toggleDrawer((prev) => !prev)
                        }}
                        data-drawer
                    >
                        {drawer ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="dark:fill-slate-200 fill-slate-800"
                            >
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 92 92"
                                className="dark:fill-slate-200 fill-slate-800"
                            >
                                <path
                                    d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
                                    c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
                                    H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}
