import { useEffect, useLayoutEffect, useState } from "react"

function useMediaScreens() {
    const [screen, setScreen] = useState()

    function handleResize(ev) {
        // Code to be executed when the window is resized

        const width = window.outerWidth
        // const height = window.outerHeight

        let w = getScreenType(width)
        setScreen({ width: w })
    }

    function getScreenType(width) {
        let w
        switch (true) {
            case width < 480:
                w = "extra-small"
                break
            case width >= 480 && width < 768:
                w = "small"
                break
            case width >= 768 && width < 1024:
                w = "medium"
                break
            case width >= 1024 && width < 1280:
                w = "large"
                break
            case width >= 1280:
                w = "extra-large"
                break

            default:
                w = "h"
        }
        return w
    }

    useLayoutEffect(() => {
        const width = window.outerWidth
        let w = getScreenType(width)
        setScreen({ width: w })
    }, [])

    useEffect(() => {
        const width = window.outerWidth
        // const height = window.outerHeight

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return { screen }
}

export default useMediaScreens
