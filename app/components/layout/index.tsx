import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <main
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                {children}
            </main>
        </div>
    )
}

export default Layout

