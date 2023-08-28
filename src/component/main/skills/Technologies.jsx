import React from "react"

export default function Technologies() {
    return (
        <>
            <h3 className="mt-4 pt-2 pb-4 text-xl tracking-wide font-semibold text-center">
                Tech Stack
            </h3>
            <div className="py-2 flex flex-wrap w-[95%] md:w-[70%] gap-4">
                {technologies.map((framework) => {
                    return (
                        <button
                            key={framework.name}
                            style={{
                                backgroundColor: framework.color,
                                color: framework.backgroundColor,
                            }}
                            className="p-1 px-2 tracking-wide font-semibold rounded-lg bg-blue-500 flex-1 basis-[100px] text-center"
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
        color: "#092e20", // Django brand color
        backgroundColor: "#fff", // white background
        textColor: "#092e20", // dark text color
    },
    // {
    //     name: "Pandas",
    //     color: "#150458", // Pandas brand color
    //     backgroundColor: "#fff", // white background
    //     textColor: "#150458", // dark text color
    // },
    {
        name: "SQL",
        color: "#FFD700", // MongoDB brand color
        backgroundColor: "#292929", // white background
        textColor: "#4DB33D", // dark text color
    },
    {
        name: "MongoDB",
        color: "#4DB33D", // MongoDB brand color
        backgroundColor: "#fff", // white background
        textColor: "#4DB33D", // dark text color
    },
    {
        name: "React",
        color: "#61DAFB", // React brand color
        backgroundColor: "#292929", // dark background
        textColor: "#fff", // light text color
    },
    {
        name: "Angular",
        color: "#DD0031", // Angular brand color
        backgroundColor: "#fff", // white background
        textColor: "#DD0031", // dark text color
    },
    {
        name: "Express",
        color: "#000000", // Express brand color
        backgroundColor: "#fff", // white background
        textColor: "#000000", // dark text color
    },
    {
        name: "Sveltekit",
        color: "#FF3E00", // Flask brand color
        backgroundColor: "#fff", // white background
        textColor: "#000000", // dark text color
    },
    {
        name: "Redux",
        color: "#764ABC", // Redux brand color
        backgroundColor: "#fff", // white background
        textColor: "#764ABC", // dark text color
    },
    {
        name: "NextJs",
        color: "#111", // Nextjs brand color
        backgroundColor: "#fff", // white background
        textColor: "#764ABC", // dark text color
    },
    {
        name: "Redis",
        color: "#DC382D", // Redis brand color
        backgroundColor: "#fff", // white background
        textColor: "#DC382D", // dark text color
    },
    {
        name: "Firebase",
        color: "#a07c04", // Firebase brand color
        backgroundColor: "#fff", // white background
        textColor: "#222", // dark text color
    },
    {
        name: "Git",
        color: "#F05032", // Git brand color
        backgroundColor: "#fff", // white background
        textColor: "#F05032", // dark text color
    },
]
