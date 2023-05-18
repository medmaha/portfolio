import { NextRequest, NextResponse } from "next/server"

import { cookies } from "next/headers"

export default async function handle(req, res) {
    let theme = "dark"
    const cookieTheme = req.cookies.theme

    if (cookieTheme === "dark") {
        theme = "light"
    }

    const prodENV = process.env.NODE_ENV === "development"

    const currentDate = new Date()

    const expirationDate = new Date(
        currentDate.getTime() + 30 * 24 * 60 * 60 * 1000,
    )

    const expires = "expires=" + expirationDate.toUTCString()

    res.setHeader(
        "set-cookie",
        `theme=${theme};sameSite=Strict;${expires};path=/`,
    )

    res.setHeader("content-type", "application/json")
    res.status(200).json({ "current-theme": theme })
}
