// components/Layout.js

import Footer from "./footer/Footer"
import Navbar from "./navbar"

function Layout({ children, theme }) {
    return (
        <div data-theme className={`${theme}`}>
            {children}
        </div>
    )
}

export default Layout
