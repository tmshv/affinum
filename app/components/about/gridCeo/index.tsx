import { useMedia } from 'react-use'
import styles from "./styles.css"
import { links as gridLinks } from "~/components/grid"
import { Column, Grid } from '~/components/grid'

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...gridLinks(),
]

const GridCeo: React.FC = () => {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <div className='about-grid-ceo'>
            <Grid cols={12}>
                <Column cols={5}>
                    <img src="/assets/team-ruslan.jpg"
                        style={{
                            aspectRatio: '1 / 1',
                            objectFit: 'cover',
                            height: 'auto',
                        }}
                    />
                </Column>
                <Column cols={7}>
                    <h2>
                        Руслан Тимашев
                    </h2>
                    <p>
                        Закончил МАРХИ, и, перед тем как основать Правду, несколько лет работал ведущим архитектором в АБ Стрелка, стажировался в голландском бюро West 8. Петр обладает огромным опытом в благоустройстве — он стоял у истоков программы "Моя улица" и "Комфортная городская среда" и значительно повлиял на то, как Москва выглядит сегодня.
                    </p>
                </Column>
            </Grid>
            {!isMobile && <div style={{ height: 100, }} />}
            <Grid cols={12}>
                <Column cols={5}>
                    <img src="/assets/team-ruslantwin.jpg"
                        style={{
                            aspectRatio: '1 / 1',
                            objectFit: 'cover',
                            height: 'auto',
                        }}
                    />
                </Column>
                <Column cols={7}>
                    <h2>
                        Руслан Тимашев
                    </h2>
                    <p>
                        Закончил МАРХИ, и, перед тем как основать Правду, несколько лет работал ведущим архитектором в АБ Стрелка, стажировался в голландском бюро West 8. Петр обладает огромным опытом в благоустройстве — он стоял у истоков программы "Моя улица" и "Комфортная городская среда" и значительно повлиял на то, как Москва выглядит сегодня.
                    </p>
                </Column>
            </Grid>
        </div>
    )
}

export default GridCeo

