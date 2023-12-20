import { useState } from 'react'
import { Grid } from '../grid'
import styles from "./styles.css"
import { links as grid } from "~/components/grid"
import { useMedia } from 'react-use'

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...grid(),
]

export type ProjectsGridProps = {
    data: any[]
    isTitle?: boolean
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

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ data, isTitle = true }) => {
    const [state, setState] = useState(buttons[0].tag)
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <>
            {isTitle && (
                <h2 style={{
                    marginBottom: 60,
                }}>
                    Наши проекты
                </h2>
            )}

            <div style={{
                display: 'flex',
                gap: '2rem',
                rowGap: 0,
                color: '#818181',
                marginBottom: 30,
                flexWrap: 'wrap',
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
            <Grid cols={isMobile ? 1 : 3}>
                {data
                    .filter(project => state === buttons[0].tag ? true : project.tags.includes(state))
                    .map((project, i) => (
                        <div
                            key={project.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: isMobile ? 20 : 80,
                                color: '#818181',
                            }}
                        >
                            <img src={project.image} />
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
