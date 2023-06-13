import { useEffect, useState } from "react"

let timeoutRef

const QUOTE_TIMING = 5000

const quotesList = [
    {
        text: "Coding is my passion! so i never stop learning!",
        image: "coding.png",
    },
    {
        text: "Do what you love and love what you do!",
        image: "heart.png",
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        image: "perseverance.png",
    },
    {
        text: "Believe you can and you're halfway there.",
        image: "believe.png",
    },
    {
        text: "The best way to predict your future is to create it.",
        image: "future.png",
    },
    { text: "Quality is not an act, it is a habit.", image: "quality.png" },
    {
        text: "The only true wisdom is in knowing you know nothing.",
        image: "wisdom.png",
    },
    {
        text: "Something inside you is greater than any obstacle.",
        image: "believe2.png",
    },
    {
        text: "Be the change you wish to see in the world.",
        image: "change.png",
    },
]

export default function Quote() {
    const [quote, updateQuote] = useState()

    useEffect(() => {
        updateQuote(renderQuote())
        if (timeoutRef) {
            clearTimeout(timeoutRef)
        }
        timeoutRef = setInterval(() => {
            updateQuote(renderQuote())
        }, QUOTE_TIMING)
        return () => {
            clearTimeout(timeoutRef)
        }
    }, [])

    function renderQuote() {
        function getRandomQuote() {
            return quotesList[Math.floor(Math.random() * quotesList.length)]
        }

        const q = getRandomQuote()

        return q.text
    }

    return (
        <div className="absolute bottom-[-2em] left-0 w-full">
            <div className="flex justify-center py-2 w-max mx-auto h-max max-w-full gap-[1px] opacity-80">
                <span className="dark:text-slate-400 text-slate-700">
                    <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" />
                    </svg>
                </span>
                <span className="tracking-wider text.sm font-light text-center pt-1 dark:text-slate-400 text-slate-600">
                    {quote}
                </span>
                <span className="dark:text-slate-400 text-slate-700">
                    <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
