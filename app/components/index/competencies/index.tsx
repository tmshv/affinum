import { useMedia } from 'react-use'
import { Flex } from '../../flex'
import { FlexItem } from '../../flex/item'
import styles from "./styles.css"
import { links as flexLinks } from "~/components/flex"

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...flexLinks(),
]

const Competencies: React.FC = () => {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <>
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
        </>
    )
}

export default Competencies

