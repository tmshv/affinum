import Nav from '~/components/nav'
import styles from "./styles.css"
import { useLocation } from 'react-use'
import { links as navLinks } from "~/components/nav"

export const links = () => [
    { rel: "stylesheet", href: styles },
    ...navLinks(),
]

export type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation()
    const isMapPage = location.pathname === "/map"
    return (
        <div className="container">
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout

