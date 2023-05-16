// components/Layout.js

import Footer from "./footer/Footer"
import Navbar from "./navbar"

function Layout({ children, theme }) {
    const themeClass = theme || "light"
    return (
        <div data-theme className={`${themeClass}`}>
            {children}
        </div>
    )
}

export default Layout
