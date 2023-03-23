import React, { useContext, useRef } from "react"
import { useEffect } from "react"
import { GlobalContext } from "../../Portfolio"

let scrollHeight

const Resume = () => {
    const resumeRef = useRef(null)
    const closeBtnRef = useRef(null)
    const { toggleResume } = useContext(GlobalContext)

    useEffect(() => {
        scrollHeight = document.body.scrollHeight
        window.scrollTo(0, 0)

        document.body.style.overflow = "hidden"
        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.body.style.overflow = "auto"
            window.scrollTo(0, scrollHeight || 0)
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [])

    function closeResumeModal(ev) {
        // Todo add an exit animation effect before closing the modal

        toggleResume(false)
    }

    function handleOutsideClick(ev) {
        const container = resumeRef.current
        const exitButton = closeBtnRef.current

        if (!container && !exitButton) return

        const resumeClicked = !!(
            ev.target.closest("#myResume") || ev.target === container
        )

        if (!resumeClicked) {
            console.log("Outside Clicked")

            exitButton.classList.replace("outline-white", "outline-red-400")
            exitButton.classList.add("animate-bounce")
        } else {
            exitButton.classList.replace("outline-red-400", "outline-white")
            exitButton.classList.remove("animate-bounce")
        }
    }

    return (
        <>
            <div
                style={{ maxHeight: "100vh" }}
                className="absolute top-0 pt-[65px] left-0 h-full w-full flex items-center justify-center z-50"
            >
                <div className="w-max rounded-lg mx-1 overflow-hidden">
                    <div
                        id="myResume"
                        ref={resumeRef}
                        style={{ maxHeight: "calc(100vh - 80px)" }}
                        className="block bg-white p-2 relative shadow-lg rounded-lg w-full max-w-[900px] overflow-hidden overflow-y-auto mx-auto px-2"
                    >
                        <div className="absolute right-4 top-2 w-max h-max">
                            <button
                                onClick={closeResumeModal}
                                style={{
                                    animationIterationCount: "5",
                                    animationDuration: "100ms",
                                }}
                                ref={closeBtnRef}
                                className="text-red-400 leading-none w-[2em] h-[2em] rounded-full text-2xl outline outline-[2px] transition outline-white fucus:outline-red-400 hover:outline-red-400"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            <div className="mb-4 text-center">
                                <h1 className="text-4xl font-bold text-gray-800">
                                    Mahamed Toure
                                </h1>
                                <h2 className="text-xl font-medium text-gray-700">
                                    Full Stack Developer
                                </h2>
                            </div>
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                            Contact Information
                                        </h3>
                                        <ul className="list-disc list-inside mb-4 text-gray-600">
                                            <li>
                                                <strong>Email:</strong>{" "}
                                                toure925@outlook.com
                                            </li>
                                            <li>
                                                <strong>Phone:</strong>{" "}
                                                220-310-1417
                                            </li>
                                            <li>
                                                <strong>LinkedIn:</strong>{" "}
                                                linkedin.com/in/medmaha
                                            </li>
                                            <li>
                                                <strong>GitHub:</strong>{" "}
                                                github.com/medmaha
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            Experience
                                        </h3>
                                        <div className="mb-4">
                                            <h4 className="text-lg font-semibold text-gray-700 mb-2">
                                                Web Developer, Acme Co.
                                            </h4>
                                            <p className="text-gray-600">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Duis condimentum, leo quis
                                                accumsan fringilla, velit nulla
                                                aliquet turpis, nec tincidunt
                                                risus felis id arcu. Donec vel
                                                lorem quis ipsum faucibus
                                                aliquet. Duis ultricies sapien
                                                vel risus iaculis, quis viverra
                                                nibh ultricies.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                                            Front-End Developer, XYZ Corp.
                                        </h4>
                                        <p className="text-gray-600">
                                            Sed consectetur, risus sit amet
                                            efficitur ultrices, mauris velit
                                            consequat mauris, nec efficitur
                                            tellus ex non metus. Duis
                                            sollicitudin, sapien sit amet
                                            convallis maximus, lectus tellus
                                            pretium metus, ut vestibulum sapien
                                            metus nec libero.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 px-4">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        Education
                                    </h3>
                                    <div className="mb-4">
                                        <h4 className="text-lg font-medium text-gray-700 mb-2">
                                            Bachelor of Science in Computer
                                            Science, ABC University
                                        </h4>
                                        <p className="text-gray-600">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Duis
                                            condimentum, leo quis accumsan
                                            fringilla, velit nulla aliquet
                                            turpis, nec tincidunt risus felis id
                                            arcu. Donec vel lorem quis ipsum
                                            faucibus aliquet. Duis ultricies
                                            sapien vel risus iaculis, quis
                                            viverra nibh ultricies.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-gray-700 mb-2">
                                            Front-End Web Development Bootcamp,
                                            DEF Coding School
                                        </h4>
                                        <p className="text-gray-600">
                                            Sed consectetur, risus sit amet
                                            efficitur ultrices, mauris velit
                                            consequat mauris, nec efficitur
                                            tellus ex non metus. Duis
                                            sollicitudin, sapien sit amet
                                            convallis maximus, lectus tellus
                                            pretium metus, ut vestibulum sapien
                                            metus nec libero.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <RResume /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume

const RResume = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-3xl font-bold mb-4">John Doe</h2>
                        <h3 className="text-xl font-medium mb-2">
                            Full Stack Developer
                        </h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>5 years of experience</li>
                            <li>Expert in React, Node.js, and MongoDB</li>
                            <li>
                                Excellent problem-solving and communication
                                skills
                            </li>
                        </ul>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed blandit orci quis lorem blandit, eget
                            consectetur lectus ullamcorper. Suspendisse potenti.
                            Fusce sagittis orci eget sapien tincidunt, vel
                            dignissim orci consequat.
                        </p>
                        <p className="mb-4">
                            In hac habitasse platea dictumst. Aliquam semper
                            massa sit amet erat dictum scelerisque. Proin
                            euismod, nisi vel commodo fermentum, ex quam rhoncus
                            velit, eget malesuada velit elit non ante.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h4 className="text-lg font-bold mb-4">
                            Contact Information
                        </h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                <strong>Email:</strong> john.doe@gmail.com
                            </li>
                            <li>
                                <strong>Phone:</strong> 555-555-5555
                            </li>
                            <li>
                                <strong>LinkedIn:</strong>{" "}
                                linkedin.com/in/johndoe
                            </li>
                            <li>
                                <strong>GitHub:</strong> github.com/johndoe
                            </li>
                        </ul>
                        <h4 className="text-lg font-bold mb-4">Skills</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                        <h4 className="text-lg font-bold mb-4">Education</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                <strong>
                                    Bachelor of Science in Computer Science
                                </strong>
                                , XYZ University (2012-2016)
                            </li>
                            <li>
                                <strong>
                                    Master of Science in Software Engineering
                                </strong>
                                , ABC University (2016-2018)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
