import { Link } from '@remix-run/react'
import styles from "./styles.css"
import { Logo, LogoPlus } from '../affinum-logo'

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type NavProps = {}

const buttons = [
    {
        text: "Проекты",
        href: "/projects",
    },
    {
        text: "Продукты",
        href: "/products",
    },
    {
        text: "Бюро",
        href: "/about",
    },
    {
        text: "Контакты",
        href: "/contacts",
    },
]

const Nav: React.FC<NavProps> = () => {
    return (
        <nav
            className="nav"
        >
            <Link to="/">
                <Logo
                    width={166}
                    height={10}
                    fill="black"
                />
            </Link>
            <ul>
                {buttons.map(x => (
                    <li key={x.href}>
                        <Link to={x.href}>
                            {x.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                className="icons-container"
            >
                <LogoPlus
                    width={12}
                    height={12}
                    fill="black"
                />
                <LogoPlus
                    width={12}
                    height={12}
                    fill="black"
                />
            </div>
        </nav>
    )
}

export default Nav

