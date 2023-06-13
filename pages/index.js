import { useEffect, useState } from "react"

import Portfolio from "../src/Portfolio"
import Layout from "../src/component/Layout"
import { programmingLang } from "../src/db/skill"
import { projects as projectsDATA } from "../src/db/projects"
import { NextRequest } from "next/server"

export default function Home({ theme }) {
    return (
        <Layout theme={theme}>
            <Portfolio dark={theme === "dark"} />
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    return { props: { theme: req.cookies.theme || "light" } }
}
