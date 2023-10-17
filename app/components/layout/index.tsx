import Nav from '~/components/nav'
import styles from "./styles.css"
import { useLocation } from 'react-use'
import { links as navLinks } from "~/components/nav"
import { links as footerLinks } from "~/components/footer"
import Footer from '../footer'

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...navLinks(),
    ...footerLinks(),
]

export type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation()
    const isMapPage = location.pathname === "/map"

    if (isMapPage) {
        return (
            <div className="container">
                <Nav />
                <main>
                    {children}
                </main>
            </div>
        )
    }
    return (
        <div className="container">
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout

