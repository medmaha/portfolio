import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import Portfolio from "./Portfolio"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    // <React.StrictMode>
    <Portfolio />,
    // {/* 'Hello world' */}
    // </React.StrictMode>,
)

let defaultTheme = "dark"
let storeTheme = localStorage.getItem("theme")

if (!storeTheme) {
    localStorage.setItem("theme", defaultTheme)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

