import { NextRequest, NextResponse } from "next/server"

export default async function handle(req, res) {
    let themeClass = "dark"
    const cookieTheme = req.cookies.theme

    if (cookieTheme === "dark") {
        themeClass = "light"
    }

    const prodENV = process.env.NODE_ENV === "development"

    res.setHeader(
        "set-cookie",
        `theme=${themeClass};httpOnly=true;sameSite=strick;path=/;secure=${prodENV}`,
    )
    res.setHeader("content-type", "application/json")
    res.status(200).json({ "current-theme": themeClass })
}
