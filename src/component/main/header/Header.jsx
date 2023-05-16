import Hero from "./Hero"
import Quotes from "./Q"

export default function Header() {
    return (
        <section
            data-snap
            id="home"
            className="w-full px-2 min-h-[100vh] h-full grid place-items-center content-center"
        >
            <header className="relative h-[calc(100vh/2)] flex flex-col items-center justify-center px-4">
                <Hero />
                <Quotes />
            </header>
        </section>
    )
}
