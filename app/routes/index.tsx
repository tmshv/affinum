import { json } from "@remix-run/node"
import type { LoaderFunction } from "@remix-run/node"
import { getMDXComponent } from "mdx-bundler/client"
import { useCallback, useContext, useMemo, useState } from "react"
import { getPost, getPosts, getProjects } from "~/lib/api"
import { useLoaderData, useMatches } from "@remix-run/react"
import Number from "~/components/hero/number"
import AffinumLogo from "~/components/affinum-logo"
import { Float } from "~/components/float"

import styles from "~/styles/index.css"
import projectStyles from "~/styles/project.css"
import mainStyles from "~/styles/main.css"
import { links as heroLinks } from "~/components/hero"
import { links as wideLinks } from "~/components/wide"
import { links as floatFinks } from "~/components/float"
import { links as flexLinks } from "~/components/flex"
import { links as productHeroLinks } from "~/components/productHero"
import { links as projectsGrid } from "~/components/projectsGrid"
import { links as indexHeadLinks } from "~/components/index/head"
import { links as ourNumbersLinks } from "~/components/index/ourNumbers"
import { links as competenciesLinks } from "~/components/index/competencies"
import { ProjectsGrid } from '~/components/projectsGrid'
import Head from '~/components/index/head'
import OurNumbers from '~/components/index/ourNumbers'
import Competencies from '~/components/index/competencies'

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
        ...heroLinks(),
        ...wideLinks(),
        ...floatFinks(),
        ...flexLinks(),
        ...productHeroLinks(),
        ...projectsGrid(),
        ...indexHeadLinks(),
        ...ourNumbersLinks(),
        ...competenciesLinks()
    ]
}

export type ProjectsGridLoaderData = {
    title: string
    location: string
    description: string
    cover: string
    tags: string[]
    href: string
}[]

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
        <article>
            <Head />
            <OurNumbers />
            <Competencies />
            <ProjectsGrid data={data} />
        </article>
    )
}
