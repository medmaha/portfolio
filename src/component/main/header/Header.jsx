import "./styles.css"
import Hero from "./Hero"
import Quotes from "./Quote"

export default function Header() {
    return (
        <section
            data-snap
            id="home"
            className="w-full px-2 min-h-[100vh] h-full grid place-items-center content-center"
        >
            <header className="relative h-[calc(100vh/2)] flex flex-col items-start px-4">
                <Hero />
                <Quotes />
            </header>
        </section>
    )
}
