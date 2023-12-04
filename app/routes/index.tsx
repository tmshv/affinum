import { json } from "@remix-run/node"
import type { LoaderFunction } from "@remix-run/node"
import { getMDXComponent } from "mdx-bundler/client"
import { useCallback, useContext, useMemo, useState } from "react"
import { getPost, getPosts } from "~/lib/api"
import { useLoaderData, useMatches } from "@remix-run/react"
import Number from "~/components/hero/number"
import AffinumLogo from "~/components/affinum-logo"
import { Float } from "~/components/float"

import Wide from "~/components/wide"
import styles from "~/styles/index.css"
import projectStyles from "~/styles/project.css"
import mainStyles from "~/styles/main.css"
import { links as heroLinks } from "~/components/hero"
import { links as wideLinks } from "~/components/wide"
import { links as floatFinks } from "~/components/float"
import { links as flexLinks } from "~/components/flex"
import { links as productHeroLinks } from "~/components/productHero"
import { links as projectsGrid } from "~/components/projectsGrid"
import { Flex } from '~/components/flex'
import { FlexItem } from '~/components/flex/item'
import { ProjectsGrid } from '~/components/projectsGrid'

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
            <div style={{
                margin: '50px 0 100px 0',
            }}>
                <Flex>
                    <FlexItem>
                        <p style={{
                            marginTop: 60,
                        }}>
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
            </div>

            <div style={{
                marginBottom: 100,
            }}>
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
                        flexDirection: 'column',
                        gap: 30,
                        justifyContent: 'center',
                        maxWidth: 'var(--max-width)',
                        marginLeft: 'calc(50% - var(--max-width) / 2)',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: 100,
                            padding: '0 50px',
                        }}>
                            <Number
                                size={120}
                                number={'30+'}
                                color='white'
                            >
                                Проектов
                            </Number>
                            <Number
                                size={120}
                                number={'10'}
                                color='white'
                            >
                                Реализованных проектов
                            </Number>
                            <Number
                                size={120}
                                number={(
                                    <>
                                        {'2,8 '}
                                        <span style={{
                                            fontSize: 80,
                                        }}>
                                            млд ₽
                                        </span>
                                    </>
                                )}
                                color='white'
                            >
                                сумма привлеченных инвестиций<br />за 2018-2023 гг
                            </Number>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: 100,
                            padding: '0 50px',
                            justifyContent: 'flex-end',
                        }}>
                            <Number
                                size={120}
                                number={'30+'}
                                color='white'
                            >
                                команда
                            </Number>
                            <Number
                                size={120}
                                number={'30+'}
                                color='white'
                            >
                                команда
                            </Number>
                            <Number
                                size={120}
                                number={'30+'}
                                color='white'
                            >
                                команда
                            </Number>
                        </div>
                    </div>
                </Wide>
            </div>

            <h2 style={{
                marginBottom: 60,
            }}>
                Компетенции
            </h2>
            <div className='index-competencies'>
                <Flex>
                    <FlexItem flex='4'>
                        <img src='/assets/placeholder.jpg' />
                    </FlexItem>
                    <FlexItem flex='8'>
                        Градостроительство


                        <h2>
                            Градостроительство
                        </h2>
                        <ul>
                            <li>Мастер планы</li>
                            <li>Градостроитльная аналитика</li>
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
                            <li>RnD</li>
                            <li>Автоматизация проектирования</li>
                            <li>Вычислительный дизайн</li>
                            <li>Городские данные</li>
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
            </div>
            <ProjectsGrid data={projectPlaceholder} />
        </article>
    )
}
