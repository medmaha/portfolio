import AboutMe from "./AboutMe"

import React from "react"

export default function ExperiencesContainer() {
    const experiences = [0]
    return (
        <div className="max-w-[1000px] mx-auto" id="aboutMe">
            <div className="flex items-center flex-col gap-2">
                {experiences.map((_) => {
                    return <AboutMe key={_} />
                })}
            </div>
        </div>
    )
}
