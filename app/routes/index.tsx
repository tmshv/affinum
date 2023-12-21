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

export default function Index() {

    return (
        <article>
            <Head />
            <OurNumbers />
            <Competencies />
            {/* <ProjectsGrid data={data} /> */}
        </article>
    )
}
