import { Link } from '@remix-run/react'
import styles from "./styles.css"
import { Logo, LogoPlus } from '../affinum-logo'
import { useMedia } from 'react-use'
import { useEffect, useState } from 'react'
import SearchIcon from '../search-icon'

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
    const isMobile = useMedia("(max-width: 768px)", false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (!document) {
            return
        }
        document.body.style.touchAction = isMenuOpen ? 'none' : 'auto'
    }, [isMenuOpen])

    return (
        <>
            <nav
                className="nav"
            >
                <Link to="/">
                    <Logo
                        width={233}
                        height={14}
                        fill="black"
                    />
                </Link>
                {!isMobile && (
                    <ul>
                        {buttons.map(x => (
                            <li key={x.href}>
                                <Link to={x.href}>
                                    {x.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <div
                    className="icons-container"
                >
                    <SearchIcon
                        width={24}
                        height={24}
                    />
                    <button className="lang-button">RU</button>
                    {isMobile && ( // menu button
                        <div
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <LogoPlus
                                width={12}
                                height={12}
                                fill="black"
                            />
                        </div>
                    )}
                    {isMobile && (
                        <>
                            <div className={`shadow ${isMenuOpen && "shadow-opened"}`} />
                            <div className={`mobile-menu ${isMenuOpen && "mobile-menu-opened"}`}>
                                <div className="mobile-menu-top" >
                                    <Link
                                        to="/"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Logo width={166} height={10} fill={'black'} />
                                    </Link>
                                    <div
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <LogoPlus
                                            width={12}
                                            height={12}
                                            fill="black"
                                        />
                                    </div>
                                </div>
                                <ul>
                                    {buttons.map(x => (
                                        <li key={x.href}>
                                            <Link
                                                to={x.href}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {x.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Nav

