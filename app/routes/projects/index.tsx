import styles from "~/styles/index.css"
import projectStyles from "~/styles/project.css"
import mainStyles from "~/styles/main.css"
import { links as flexLinks } from "~/components/flex"
import { links as projectsGrid } from "~/components/projectsGrid"
import { ProjectsGrid } from '~/components/projectsGrid'
import MainMap from '~/components/main-map'
import mapboxCustomStyles from "~/styles/mapbox.css"
import { links as mainMainStyles } from "~/components/main-map"
import mapboxStyles from "mapbox-gl/dist/mapbox-gl.css"

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
        <>
            <div style={{
                position: 'relative',
                aspectRatio: '1200 / 800',
                marginBottom: 40,
            }}>
                <MainMap />
            </div>
            <article>
                <ProjectsGrid data={projectPlaceholder} isTitle={false} />
            </article>
        </>
    )
}
