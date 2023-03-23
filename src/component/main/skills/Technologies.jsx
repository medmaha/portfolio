import React from "react"

export default function Technologies() {
    return (
        <>
            <div className="mt-4 py-2 flex flex-wrap w-[95%] md:w-[70%] gap-4">
                {technologies.map((framework) => {
                    return (
                        <button
                            key={framework.name}
                            className="p-1 px-2 rounded-lg bg-blue-500 flex-1 basis-[100px] text-center"
                        >
                            {framework.name}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

const technologies = [
    {
        name: "Django",
    },
    {
        name: "Pandas",
    },
    {
        name: "MangoDB",
    },
    {
        name: "React",
    },
    {
        name: "Angular",
    },
    {
        name: "Express",
    },
    {
        name: "Flask",
    },
    {
        name: "Redux",
    },
    {
        name: "Redis",
    },
    {
        name: "Git",
    },
    {
        name: "Node",
    },
]
