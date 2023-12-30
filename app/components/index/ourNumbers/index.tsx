import { useMedia } from 'react-use'
import styles from "./styles.css"
import Wide from '~/components/wide'
import Number from "~/components/hero/number"
import { links as wideLinks } from "~/components/wide"
import { links as heroLinks } from "~/components/hero"

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...heroLinks(),
    ...wideLinks(),
]

const items = [
    {
        number: '24',
        text: 'Заявки',
    },
    {
        number: '19',
        text: 'Проектов одержали победу',
    },
    {
        number: '9',
        text: 'Реализованных проектов',
    },
    {
        number: '3',
        text: (
            <>
                Стратегии развития<br />городских пространств
            </>
        ),
    },
    {
        number: (
            <>
                {'2,8 '}
                <span style={{
                    fontSize: '.75em',
                }}>
                    млд ₽
                </span>
            </>
        ),
        text: (
            <>
                сумма привлеченных средств<br />за 2018-2023 гг
            </>
        ),
    },
]

const OurNumbers: React.FC = () => {
    const isMobile = useMedia("(max-width: 768px)", false)
    const size = isMobile ? 40 : 120

    return (
        <div style={{
            marginBottom: 100,
        }}>
            {isMobile ? (
                <>
                    <h2 style={{ marginTop: 70 }}>
                        На нашем счету
                    </h2>
                    <div className='index-numbers-container'>
                        {items.slice(0, 4).map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: '1 1 calc(50% - 20px)',
                                }}
                            >
                                <Number
                                    size={size}
                                    number={item.number}
                                >
                                    {item.text}
                                </Number>
                            </div>
                        ))}
                        {items.slice(4, 5).map((item, i) => (
                            <div
                                key={i}
                            >
                                <Number
                                    size={50}
                                    number={item.number}
                                >
                                    {item.text}
                                </Number>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <Wide ar='unset'>
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
                        justifyContent: 'center',
                        gap: 30,
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: 90,
                            padding: '0 50px',
                        }}>
                            {items.slice(0, 4).map((item, i) => (
                                <Number
                                    key={i}
                                    size={size}
                                    number={item.number}
                                    color='white'
                                >
                                    {item.text}
                                </Number>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: 90,
                            padding: '0 50px',
                        }}>
                            {items.slice(4, 5).map((item, i) => (
                                <Number
                                    key={i}
                                    size={size}
                                    number={item.number}
                                    color='white'
                                >
                                    {item.text}
                                </Number>
                            ))}
                        </div>
                    </div>
                </Wide>
            )}
        </div>
    )
}

export default OurNumbers

