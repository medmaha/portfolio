import { NextRequest, NextResponse } from "next/server"

export default async function handle(req, res) {
    let themeClass = "dark"
    const cookieTheme = req.cookies.theme

    if (cookieTheme === "dark") {
        themeClass = "light"
    }

    const prodENV = process.env.NODE_ENV === "development"


const currentDate = new Date();

const expirationDate = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));

const expires = "expires="expirationDate.toUTCString();

    res.setHeader(
        "set-cookie",
        `theme=${themeClass};httpOnly=true;sameSite=strick;secure=${prodENV};${expires}`,
    )
    res.setHeader("content-type", "application/json")
    res.status(200).json({ "current-theme": themeClass })
}
