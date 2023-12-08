import { useMedia, useSize } from 'react-use'
import styles from "./styles.css"
import plusImage from "~/../public/plus.svg"
import { Logo } from '../affinum-logo'
import { Link } from '@remix-run/react'
import Plus from '../plus'

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type FooterProps = {}
const Footer: React.FC<FooterProps> = () => {
    const isMobile = useMedia("(max-width: 768px)", false)
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <Link to="/">
                        <Logo
                            width={isMobile ? 156 : 233}
                            height={isMobile ? 10 : 14}
                            fill="black"
                        />
                    </Link>
                    <Plus style={{ marginBottom: isMobile ? 1 : 2 }} size={isMobile ? 8 : 11} />
                </div>
            </footer>
        </>
    )
}

export default Footer

