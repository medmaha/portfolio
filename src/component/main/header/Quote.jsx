import React, { useRef, useEffect, useState } from "react"

export default function Quotes() {
    const quotesList = [
        "Never negative",
        "Always positive",
        "Do what you love!",
        "Love what you do !",
    ]
    const [quote, setQuote] = useState({
        pk: 0,
        idx: 0,
        text: quotesList[0].split("")[0],
    })

    const quoteTextRef = useRef()

    useEffect(() => {
        let timeout
        if (quote.text === quotesList[quote.pk].trim()) {
            timeout = setTimeout(changeQuote, 3000)
        } else {
            timeout = setTimeout(changeQuote, 100)
        }
        toggleAnimationClass(true)
        return () => {
            quoteTextRef.current?.classList.remove("animate-quote")
            clearTimeout(timeout)
        }
    }, [quote])

    // TODO not working
    function toggleAnimationClass(add) {
        if (add) {
            quoteTextRef.current?.classList.add("animate-quote")
        } else {
            quoteTextRef.current?.classList.remove("animate-quote")
        }
    }

    function changeQuote() {
        const newQuote = {}

        const { pk, idx, text } = quote

        // outputs all text
        if (text === quotesList[pk]) {
            if (quotesList[pk + 1]) {
                newQuote["pk"] = pk + 1
                newQuote["idx"] = 0
                newQuote["text"] = quotesList[pk + 1].split("")[idx]
            } else {
                newQuote["pk"] = 0
                newQuote["idx"] = 0
                newQuote["text"] = quotesList[0].split("")[0]
            }
        } else {
            newQuote["pk"] = pk
            newQuote["idx"] = idx + 1
            newQuote["text"] = quotesList[pk]
                .split("")
                .slice(0, idx + 1)
                .join("")
        }
        setQuote(newQuote)
    }

    return (
        <div className="absolute bottom-[5px] right-[10px] w-full">
            <div className="flex justify-center py-2">
                <span
                    ref={quoteTextRef}
                    className="border-b-2 px-2 opacity-80"
                    data-intro-quote
                >
                    {quote.text}
                </span>
                <span className="animate-ping">|</span>
            </div>
        </div>
    )
}
