import { useMedia } from 'react-use'
import styles from "./styles.css"
import { links as gridLinks } from "~/components/grid"
import { Column, Grid } from '~/components/grid'

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...gridLinks(),
]

const Contacts: React.FC = () => {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <div className='about-contacts'>
            <Grid cols={12}>
                <Column cols={5}>
                    <span style={{ fontWeight: 300 }}>Адрес:</span><br />
                    Россия, Москва,<br />
                    ул. Шелапутинский переулок д. 6, с. 3<br />
                </Column>
                <Column cols={7}>
                    <span style={{ fontWeight: 300 }}>Для клиентов:</span><br />
                    <a href='mailto:timashev@affinum.tech'>timashev@affinum.tech</a><br />
                    +7 (921) 393-18-15<br />
                </Column>

                {!isMobile && (
                    <>
                        <Column cols={5}>{null}</Column>
                        <Column cols={isMobile ? 5 : 7}>
                            <span style={{ fontWeight: 300 }}>Для клиентов:</span><br />
                            <a href='mailto:timashev@affinum.tech'>timashev@affinum.tech</a><br />
                            +7 (921) 393-18-15<br />
                        </Column>
                    </>
                )}
            </Grid>
            <img src="/assets/about-map.jpg"
                style={{
                    objectFit: 'cover',
                    aspectRatio: isMobile ? '340 / 270' : '1160 / 580',
                }}
            />
        </div>
    )
}

export default Contacts

