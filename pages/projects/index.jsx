import { ProjectsContainer } from "../../src/component/main/projects/ProjectsContainer"
import Layout from "../../src/component/Layout"

export default function Home({ theme }) {
    return (
        <Layout theme={theme}>
            <div className="max-w-[1000px] mx-auto">
                <ProjectsContainer />
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    return { props: { theme: req.cookies.theme || "dark" } }
}
