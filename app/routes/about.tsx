import gridStyles from "~/components/grid/styles.css"
import projectStyles from "~/styles/project.css"
import { Flex } from '~/components/flex'
import Head, { links as indexHeadLinks } from "~/components/index/head"
import { links as flexLinks } from "~/components/flex"
import { FlexItem } from '~/components/flex/item'
import mainStyles from "~/styles/main.css"
import aboutStyles from "~/styles/about.css"
import { Grid } from '~/components/grid'
import { links as gridLinks } from "~/components/grid"
import Wide from '~/components/wide'
import { useMedia } from 'react-use'

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
            href: aboutStyles,
        },
        ...indexHeadLinks(),
        ...flexLinks(),
        ...gridLinks(),
    ]
}


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

// TODO:
// head
// content texts
// map image update
// minor offtests

export default function About() {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <article>
            {/* head is placeholder */}
            <div style={{ marginBottom: 100, }}>
                <Head />
            </div>

            <h2>
                Руководители бюро
            </h2>
            <div style={{ marginBottom: 'var(--space)', }}>
                <Flex>
                    <FlexItem flex='5 0 0%'>
                        <img src="/assets/team-ruslan.jpg"
                            style={{
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                height: 'auto',
                            }}
                        />
                    </FlexItem>
                    <FlexItem flex='7 0 0%'>
                        <h2>
                            Руслан Тимашев
                        </h2>
                        <p>
                            Закончил МАРХИ, и, перед тем как основать Правду, несколько лет работал ведущим архитектором в АБ Стрелка, стажировался в голландском бюро West 8. Петр обладает огромным опытом в благоустройстве — он стоял у истоков программы "Моя улица" и "Комфортная городская среда" и значительно повлиял на то, как Москва выглядит сегодня.
                        </p>
                    </FlexItem>
                </Flex>
                {!isMobile && <div style={{ height: 100, }} />}
                <Flex>
                    <FlexItem flex='5 0 0%'>
                        <img src="/assets/team-ruslantwin.jpg"
                            style={{
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                height: 'auto',
                            }}
                        />
                    </FlexItem>
                    <FlexItem flex='7 0 0%'>
                        <h2>
                            Руслан Тимашев
                        </h2>
                        <p>
                            Закончил МАРХИ, и, перед тем как основать Правду, несколько лет работал ведущим архитектором в АБ Стрелка, стажировался в голландском бюро West 8. Петр обладает огромным опытом в благоустройстве — он стоял у истоков программы "Моя улица" и "Комфортная городская среда" и значительно повлиял на то, как Москва выглядит сегодня.
                        </p>
                    </FlexItem>
                </Flex>
            </div>

            <h2>
                Команда
            </h2>
            <div style={{ marginBottom: 'var(--space)', }}>
                <Grid cols={3}>
                    {data.map((x, i) => (
                        <div
                            key={x.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginBottom: 'var(--space)',
                            }}
                        >
                            <img
                                src={x.image}
                                alt={x.name}
                                style={{
                                    aspectRatio: '26 / 36',
                                    objectFit: 'cover',
                                    height: 'auto',
                                }}
                            />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                                <span>
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

            <h2>
                Контакты
            </h2>
            <div style={{ marginBottom: 'var(--space)', }}>
                <Flex>
                    <FlexItem flex='5 0 0%'>
                        <span style={{ fontWeight: 300 }}>Адрес:</span><br />
                        Россия, Москва,<br />
                        ул. Шелапутинский переулок д. 6, с. 3<br />
                    </FlexItem>
                    <FlexItem flex={`${isMobile ? '5' : '7'} 0 0%`}>
                        <span style={{ fontWeight: 300 }}>Для клиентов:</span><br />
                        <a href='mailto:timashev@affinum.tech'>timashev@affinum.tech</a><br />
                        +7 (921) 393-18-15<br />
                    </FlexItem>
                </Flex>
            </div>
            <Wide>
                <img src="/assets/about-map.jpg"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Wide>
        </article>
    )
}
