import { Link } from '@remix-run/react'
import styles from "./styles.css"
import { Logo, LogoPlus } from '../affinum-logo'
import { useMedia } from 'react-use'
import { useEffect, useState } from 'react'

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
                        width={166}
                        height={10}
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
                        <div className={`mobile-menu ${isMenuOpen && "mobile-menu-opened"}`}>
                            <div className="mobile-menu-top" >
                                <Logo width={166} height={10} fill={'black'} />
                                <div
                                    className="button-mobile-menu-close"
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
                    )}
                </div>
            </nav>
            <div className="nav-spacer" />
        </>
    )
}

export default Nav

