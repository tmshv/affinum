import gridStyles from "~/components/grid/styles.css"
import projectStyles from "~/styles/project.css"
import Head, { links as aboutHeadLinks } from "~/components/about/head"
import mainStyles from "~/styles/main.css"
import singleStyles from "~/styles/singlePage.css"
import { links as gridLinks } from "~/components/grid"
import { useMedia } from 'react-use'
import GridCeo from '~/components/about/gridCeo'
import { links as gridCeoLinks } from '~/components/about/gridCeo'
import GridTeam from '~/components/about/gridTeam'
import { links as gridTeamLinks } from '~/components/about/gridTeam'
import Contacts from '~/components/about/contacts'
import { links as contactsinks } from '~/components/about/contacts'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: projectStyles,
        },
        {
            rel: "stylesheet",
            href: gridStyles,
        },
        {
            rel: "stylesheet",
            href: mainStyles,
        },
        {
            rel: "stylesheet",
            href: singleStyles,
        },
        ...aboutHeadLinks(),
        ...gridLinks(),
        ...gridCeoLinks(),
        ...gridTeamLinks(),
        ...contactsinks(),
    ]
}

export default function About() {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <article>
            {!isMobile && (
                <h2>
                    О бюро
                </h2>
            )}
            <div style={{ marginBottom: 128, }}>
                <Head />
            </div>

            <h2>
                Руководители бюро
            </h2>
            <GridCeo />

            {!isMobile && <div style={{ height: 200, }} />}

            <h2>
                Команда
            </h2>
            <GridTeam />

            {!isMobile && <div style={{ height: 90, }} />}

            <h2>
                Контакты
            </h2>
            <Contacts />
        </article>
    )
}
