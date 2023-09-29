import { useSize } from 'react-use'
import styles from "./styles.css"
import plusImage from "~/../public/plus.svg"
import { Logo } from '../affinum-logo'

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type FooterProps = {}

const colsMax = 38

const Footer: React.FC<FooterProps> = () => {

    const [tackEl, { width, height }] = useSize(
        () => <div style={{ width: '100%' }} />,
        { width: 1440, height: 0 },
    )
    const cellSize = 1440 / colsMax
    const cols = Math.floor(width / cellSize)

    const fullRow = (
        <div className="row">
            {Array(cols).fill(null).map((x, i) => (
                <img
                    key={i}
                    src={plusImage}
                    alt="plus"
                    width={15}
                    height={15}
                />
            ))}
        </div>
    )

    return (
        <>
            <footer className="footer">
                {fullRow}
                <div className="row">
                    <div style={{
                        paddingRight: 7,
                    }}>
                        <Logo width={166} height={10} fill="black" />
                    </div>
                    {Array(cols - 5 - 2).fill(null).map((x, i) => (
                        <img
                            key={i}
                            src={plusImage}
                            alt="plus"
                            width={15}
                            height={15}
                        />
                    ))}
                    <div className="button">
                        <div>
                            RU
                        </div>
                    </div>
                    <img
                        src={plusImage}
                        alt="plus"
                        width={15}
                        height={15}
                    />
                </div>
                {fullRow}
            </footer>
            {tackEl}
        </>
    )
}

export default Footer

