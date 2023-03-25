import { useEffect, useState } from "react"
import "./q.css"

let timeoutRef

export default function Quote() {
    const quotesList = [
        { text: "Always stay positive!", image: "positive.png" },
        { text: "Do what you love, love what you do!", image: "heart.png" },
        { text: "Coding is my passion!", image: "coding.png" },
        { text: "Never stop learning!", image: "learning.png" },
        {
            text: "The best way to predict your future is to create it.",
            image: "future.png",
        },
        {
            text: "Choose a job you love, and you will never have to work a day in your life.",
            image: "satisfaction.png",
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            image: "courage.png",
        },
        {
            text: "Believe you can and you're halfway there.",
            image: "believe.png",
        },
        { text: "Quality is not an act, it is a habit.", image: "quality.png" },
        {
            text: "It does not matter how slowly you go as long as you do not stop.",
            image: "perseverance.png",
        },
        {
            text: "The only way to do great work is to love what you do.",
            image: "greatwork.png",
        },
        {
            text: "Make your life a masterpiece; imagine no limitations on what you can be, have, or do.",
            image: "masterpiece.png",
        },
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

    const [quote, updateQuote] = useState()

    useEffect(() => {
        updateQuote(renderQuote())

        if (timeoutRef) {
            clearTimeout(timeoutRef)
        }

        timeoutRef = setInterval(() => {
            updateQuote(renderQuote())
        }, 10000)

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
        <div className="absolute bottom-[-2em] left-[5px] w-full">
            <div className="flex justify-center py-2">
                <span
                    // ref={quoteTextRef}
                    className="inline-block text-center px-2 quote text-clip tracking-wider font-medium"
                    data-intro-quote
                >
                    {quote}
                </span>
                {/* <span className="animate-ping">|</span> */}
            </div>
        </div>
    )
}
