import { json } from "@remix-run/node"
import type { LoaderFunction } from "@remix-run/node"
import { getMDXComponent } from "mdx-bundler/client"
import { useCallback, useContext, useMemo, useState } from "react"
import { getPost, getPosts } from "~/lib/api"
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

const projectPlaceholder = [
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
        tags: ['social space'],
    },
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
        tags: ['product'],
    },
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
        tags: ['research'],
    },
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
        tags: ['research'],
    },
]

export default function Index() {
    return (
        <article>
            <Head />
            <OurNumbers />
            <Competencies />
            <ProjectsGrid data={projectPlaceholder} />
        </article>
    )
}
