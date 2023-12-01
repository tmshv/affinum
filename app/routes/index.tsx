import { json } from "@remix-run/node"
import type { LoaderFunction } from "@remix-run/node"
import { getMDXComponent } from "mdx-bundler/client"
import { useCallback, useContext, useMemo, useState } from "react"
import { getPost } from "~/lib/api"
import { useLoaderData, useMatches } from "@remix-run/react"
import Number from "~/components/hero/number"
import AffinumLogo from "~/components/affinum-logo"
import Wide from "~/components/wide"
import { Float } from "~/components/float"

import styles from "~/styles/index.css"
import projectStyles from "~/styles/project.css"
import { links as heroLinks } from "~/components/hero"
import { links as wideLinks } from "~/components/wide"
import { links as floatFinks } from "~/components/float"
import { links as flexLinks } from "~/components/flex"
import { links as productHeroLinks } from "~/components/productHero"
import { links as ladderGalleryLinks } from "~/components/ladder-gallery"
import { links as productGrid } from "~/components/grid"
import { Flex } from '~/components/flex'
import { FlexItem } from '~/components/flex/item'
import { Grid } from '~/components/grid'

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
        ...heroLinks(),
        ...wideLinks(),
        ...floatFinks(),
        ...flexLinks(),
        ...productHeroLinks(),
        ...ladderGalleryLinks(),
        ...productGrid(),
    ]
}

const projectPlaceholder = [
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
    },
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
    },
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
    },
    {
        name: 'Музей леса',
        description: 'Костромская область, г. Шарья\nКонцепция развития Городского парка',
        image: '/assets/placeholder.jpg',
    },
]

export default function Index() {
    return (
        <article>
            <Flex>
                <FlexItem>
                    <p>
                        Кон­сультант, про­ек­ти­ров­щик и раз­ра­бот­чик в области гра­до­строи­тель­но­го ана­ли­за и урбантех.
                        <br /><br />
                        Ком­па­ния со­еди­ня­ет пе­ре­до­вые ком­пе­тен­ции и опыт для со­з­да­ния ком­плекс­ных ре­ше­ний.
                    </p>
                    <p>
                        Наша цель — повышение качества городской среды в городах России путем разработки и реализации инновационных проектов по развитию урбанизированных пространств.
                        <br /><br />
                        Мы стремимся к созданию городов, в которых каждый сможет найти свое место, наслаждаться уникальной атмосферой и участвовать в формировании динамичного и прогрессивного общества.
                    </p>
                </FlexItem>

                <FlexItem>
                    <img src='/assets/index-01.jpg' />
                </FlexItem>
            </Flex>

            <Wide fullscreen>
                <img src='/assets/index-02.jpg' />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div>
                        <Number
                            number={'30+'}
                            color='white'
                        >
                            Проектов
                        </Number>
                    </div>
                    <div>
                        <Number
                            number={'10'}
                            color='white'
                        >
                            Реализованных проектов
                        </Number>
                    </div>
                    <div>
                        <Number
                            number={'2,8 млд ₽ '}
                            color='white'
                        >
                            сумма привлеченных инвестиций<br />за 2018-2023 гг
                        </Number>
                    </div>
                </div>
            </Wide>
            <h2>
                Компетенции
            </h2>
            <Flex>
                <FlexItem flex='4'>
                    <img src='/assets/placeholder.jpg' />
                </FlexItem>
                <FlexItem flex='8'>
                    <h2>
                        Градостроительство
                    </h2>
                    <ul>
                        <li>Мастер планы</li>
                        <li>Стандартизация и методическая документация</li>
                        <li>Благоустройство</li>
                        <li>Транспортное планирование</li>
                    </ul>
                </FlexItem>
            </Flex>
            <Flex>
                <FlexItem flex='4'>
                    <img src='/assets/placeholder.jpg' />
                </FlexItem>
                <FlexItem flex='8'>
                    <h2>
                        Урбантех
                    </h2>
                    <ul>
                        <li>Автоматизация проектирования</li>
                        <li>Вычислительный дизайн</li>
                        <li>Сбор и анализ городских данных</li>
                        <li>Геоинформационные технологии</li>
                    </ul>
                </FlexItem>
            </Flex>
            <Flex>
                <FlexItem flex='4'>
                    <img src='/assets/placeholder.jpg' />
                </FlexItem>
                <FlexItem flex='8'>
                    <h2>
                        Конкурс Малых городов и исторических поселений
                    </h2>
                    <ul>
                        <li>Стратегия развития ООП</li>
                        <li>Дизайн код и бренд бук</li>
                        <li>Дизайн и концептуальное проектирование</li>
                        <li>Социология, вовлечение, партиципация</li>
                        <li>Экономика</li>
                    </ul>
                </FlexItem>
            </Flex>
            <h2>Наши проекты</h2>

            <div style={{
                display: 'flex',
                gap: '2rem',
                color: '#818181',
                marginTop: 60,
                marginBottom: 30,
            }}>
                <div>
                    Все
                </div>
                <div>
                    Общественные пространства
                </div>
                <div>
                    Исследования
                </div>
                <div>
                    Продукты
                </div>
            </div>

            <Grid cols={3}>
                {projectPlaceholder.map((project, i) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 50,
                    }}>
                        <img src={project.image}
                            style={{
                                aspectRatio: '36 / 26',
                            }}
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
        </article>
    )
}
