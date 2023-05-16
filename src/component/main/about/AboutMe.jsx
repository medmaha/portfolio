import { useContext } from "react"
import { GlobalContext } from "../../../Portfolio"
import SectionHeading from "../../utils/SectionHeading"

export default function AboutMe() {
    const { toggleResume } = useContext(GlobalContext)
    return (
        <section
            id="aboutMe"
            data-snap
            className="grid min-h-[100vh] place-items-center content-center"
        >
            <div className="mt-[70px]"></div>
            <div className="flex items-center flex-col">
                <h3 className="text-center py-[25px] text-2xl tracking-wide font-semibold">
                    <SectionHeading id={"aboutMe"} />
                </h3>
                <div className="w-full py-4 max-w-[40ch] sm:max-w-[50ch] md:max-w-[60ch] lg:max-w-[75ch]">
                    <h2 className="text-xl text-center tracking-wide font-bold mb-4">
                        Self-Taught Full-Stack Developer
                    </h2>
                    <p className="text-center dark:text-gray-300 mb-4">
                        I am a driven and self-taught full-stack developer with
                        2 years of experience. My passion for technology and
                        programming has led me to pursue a career in full-stack
                        development.
                    </p>
                    <p className="text-center dark:text-gray-300 mb-4">
                        Throughout my career, I have honed my skills by working
                        on various projects and continuously learning. I have
                        strong experience in front-end and back-end
                        technologies, including React, Node.js, Django, and
                        MongoDB.
                    </p>
                    <p className="text-center dark:text-gray-300">
                        I am committed to delivering high-quality, efficient,
                        and maintainable code. I am always eager to take on new
                        challenges and expand my skillset to help me grow as a
                        developer.
                    </p>
                    <div className="flex justify-center items-center mt-4 pt-2">
                        <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="/assets/resume.pdf"
                            // onClick={() => toggleResume(true)}
                            className="bg-primary-light dark:bg-primary-dark hover:bg-opacity-100 bg-opacity-90 min-w-[200px] text-center transition font-semibold tracking-wide text-card-light dark:text-card-dark rounded-md py-2 px-4 capitalize"
                        >
                            my resume
                        </a>
                    </div>
                </div>
                <h3 className="text-center text-2xl pt-4 tracking-wide font-semibold">
                    <SectionHeading wrap={true} />
                </h3>
            </div>
        </section>
    )
}
