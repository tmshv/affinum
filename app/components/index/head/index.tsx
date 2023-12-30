import { useMedia } from 'react-use'
import { Flex } from '../../flex'
import { FlexItem } from '../../flex/item'
import styles from "./styles.css"
import { links as flexLinks } from "~/components/flex"

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...flexLinks(),
]

const Head: React.FC = () => {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <div
            className='index-head-container'
            style={{
                backgroundImage: isMobile ? "url(/assets/index-01.jpg)" : undefined,
            }}
        >
            {isMobile ? (
                <p>
                    Кон­сультант, про­ек­ти­ров­щик и раз­ра­бот­чик в области гра­до­строи­тель­но­го ана­ли­за и урбантех.
                    Ком­па­ния со­еди­ня­ет пе­ре­до­вые ком­пе­тен­ции и опыт для со­з­да­ния ком­плекс­ных ре­ше­ний.
                </p>
            ) : (
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
                    </FlexItem >

                    <FlexItem>
                        <img src='/assets/index-01.jpg' />
                    </FlexItem>
                </Flex >
            )}
        </div>
    )
}

export default Head

