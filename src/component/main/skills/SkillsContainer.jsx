import React from "react"
import Languages from "./Languages"
import Skill from "./Skill"
import Technologies from "./Technologies"
import SectionHeading from "../../utils/SectionHeading"

export const SkillsContainer = () => {
    return (
        <section
            data-snap
            id="mySkills"
            className="grid min-h-[100vh] place-items-center content-center"
        >
            <div className="mt-[70px]"></div>
            <div className="flex flex-col gap-4 items-center justify-center w-full">
                <h3 className="text-center py-[25px] text-2xl tracking-wide font-semibold">
                    <SectionHeading id={"skills"} />
                </h3>
                <Languages />

                <Technologies />
                <h3 className="text-center text-2xl pt-4 tracking-wide font-semibold">
                    <SectionHeading wrap={true} />
                </h3>
            </div>
        </section>
    )
}
