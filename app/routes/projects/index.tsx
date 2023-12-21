import styles from "~/styles/index.css"
import projectStyles from "~/styles/project.css"
import mainStyles from "~/styles/main.css"
import { links as flexLinks } from "~/components/flex"
import type { ProjectsGridLoaderData } from "~/components/projectsGrid"
import { links as projectsGrid } from "~/components/projectsGrid"
import { ProjectsGrid } from '~/components/projectsGrid'
import MainMap from '~/components/main-map'
import mapboxCustomStyles from "~/styles/mapbox.css"
import { links as mainMainStyles } from "~/components/main-map"
import mapboxStyles from "mapbox-gl/dist/mapbox-gl.css"
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getProjects } from '~/lib/api'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "stylesheet",
            href: projectStyles,
        },
        {
            rel: "stylesheet",
            href: mainStyles,
        },
        {
            rel: "stylesheet",
            href: mapboxStyles
        },
        {
            rel: "stylesheet",
            href: mapboxCustomStyles,
        },
        ...mainMainStyles(),
        ...flexLinks(),
        ...projectsGrid(),
    ]
}

export const loader: LoaderFunction = async ({ params, request }) => {
    const posts = await getProjects()
    const projectsFrontmatter = posts.map(post => post.frontmatter)
    if (posts) {
        return json(projectsFrontmatter)
    } else {
        throw new Response("Not found", { status: 404 })
    }
}

export default function Index() {
    const data = useLoaderData<ProjectsGridLoaderData>()

    return (
        <>
            <div style={{
                position: 'relative',
                aspectRatio: '1200 / 800',
                marginBottom: 40,
            }}>
                <MainMap />
            </div>
            <article>
                <ProjectsGrid data={data} isTitle={false} />
            </article>
        </>
    )
}
