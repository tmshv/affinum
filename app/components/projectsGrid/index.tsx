import { useState } from 'react'
import { Grid } from '../grid'
import styles from "./styles.css"
import { links as grid } from "~/components/grid"

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...grid(),
]

export type ProjectsGridProps = {
    data: any[]
}

const buttons = [
    {
        text: 'Все',
        tag: '',
    },
    {
        text: 'Общественные пространства',
        tag: 'social space',
    },
    {
        text: 'Исследования',
        tag: 'research',
    },
    {
        text: 'Продукты',
        tag: 'product',
    },
]

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ data }) => {
    const [state, setState] = useState(buttons[0].tag)
    return (
        <>
            <h2 style={{
                marginBottom: 60,
            }}>
                Наши проекты
            </h2>

            <div style={{
                display: 'flex',
                gap: '2rem',
                color: '#818181',
                marginBottom: 30,
            }}>
                {buttons.map((button, i) => (
                    <div
                        key={button.tag}
                        onClick={() => setState(button.tag)}
                        style={{
                            cursor: 'pointer',
                            color: state === button.tag ? 'black' : 'inherit',
                        }}
                    >
                        {button.text}
                    </div>
                ))}
            </div>
            <Grid cols={3}>
                {data
                    .filter(project => state === buttons[0].tag ? true : project.tags.includes(state))
                    .map((project, i) => (
                        <div
                            key={project.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: 80,
                                color: '#818181',
                            }}
                        >
                            <img src={project.image}
                                // style={{
                                //     aspectRatio: '36 / 26',
                                // }}
                            />
                            <h3>
                                {project.name}
                            </h3>
                            <span>
                                {project.description}
                            </span>
                        </div>
                    ))}
            </Grid>
        </>
    )
}
