import React from "react"

export default function SectionHeading({ id, start = true, wrap = false }) {
    return (
        <pre className="sm:text-3xl text-xl">
            {start && !wrap ? (
                <>
                    {style("text-gray-500", "<")}
                    {style("text-green-400", "section")}{" "}
                    {style("text-blue-400", "id")}
                    {style("text-red-600", "=")}
                    {style("text-blue-900 dark:text-orange-200", '"')}
                    {style("text-blue-900 dark:text-orange-200", id)}
                    {style("text-slate-800 dark:text-orange-200", '"')}
                    {style("text-gray-500", ">")}
                </>
            ) : (
                wrap && (
                    <>
                        {style("text-gray-500", "<")}
                        {style("text-gray-500", "/")}
                        {style("text-green-400", "section")}{" "}
                        {style("text-gray-500", ">")}
                    </>
                )
            )}
        </pre>
    )
}

function style(color, text) {
    return <span className={" " + color}>{text}</span>
}
