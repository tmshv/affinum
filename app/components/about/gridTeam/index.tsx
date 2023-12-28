import { useMedia } from 'react-use'
import styles from "./styles.css"
import { links as gridLinks } from "~/components/grid"
import { Column, Grid } from '~/components/grid'

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...gridLinks(),
]

const data = [
    {
        name: 'Ольга Чистякова',
        description: 'Проектный менеджер',
        image: '/assets/team-olya.jpg',
    },
    {
        name: 'Григорий Ионов',
        description: 'Архитектор',
        image: '/assets/team-grigory.jpg',
    },
    {
        name: 'Никита Маврушичев',
        description: 'Архитектор',
        image: '/assets/team-nikita.jpg',
    },
    {
        name: 'Кети Хварцкия',
        description: 'Архитектор',
        image: '/assets/team-kate.jpg',
    },
    {
        name: 'Евгения Толстых',
        description: 'Архитектор',
        image: '/assets/team-jenya.jpg',
    },
    {
        name: 'Алёна Калянова',
        description: 'Архитектор',
        image: '/assets/team-alyona.jpg',
    },
    {
        name: 'Нина Шадрина',
        description: 'Архитектор',
        image: '/assets/team-nina.jpg',
    },
    {
        name: 'Анна Васильевна',
        description: 'GIS-аналитик',
        image: '/assets/team-anna.jpg',
    },
    {
        name: 'Евгения Лылина',
        description: 'GIS-аналитик',
        image: '/assets/team-jenya2.jpg',
    },
    {
        name: 'Ксения Чепракова',
        description: 'Исследователь',
        image: '/assets/team-xenya.jpg',
    },
]

const GridTeam: React.FC = () => {

    return (
        <div className='about-grid-team'>
            <Grid cols={3}>
                {data.map((x, i) => (
                    <div
                        className='about-grid-team-item'
                        key={x.name}
                    >
                        <img
                            src={x.image}
                            alt={x.name}
                        />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
                            <span style={{
                                fontWeight: 400,
                            }}>
                                {x.name}
                            </span>
                            <span style={{ fontWeight: 300 }}>
                                {x.description}
                            </span>
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default GridTeam

