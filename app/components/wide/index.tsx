import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type WideProps = {
    children: React.ReactNode
    ar?: React.CSSProperties["aspectRatio"]
    fullscreen?: boolean
}

const Wide: React.FC<WideProps> = ({ children, ar, fullscreen = false }) => {
    return (
        <section className="wide" style={{
            // aspectRatio: ar,
            // marginBottom: 50,
        }}>
            {children}
            {/* <div className={fullscreen ? "wide-fullscreen" : ""}> */}
            {/* </div> */}
        </section>
    )
}

export default Wide

