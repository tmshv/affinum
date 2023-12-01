import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type HeroProps = {
    children: React.ReactNode
    number: React.ReactNode
    color?: string
}

const Number: React.FC<HeroProps> = ({ children, number, color = "black" }) => {
    return (
        <div className="hero"
            style={{
                display: "block",
            }}
        >
            <div
                className="values"
                style={{ color }}
            >
                <div className="number">
                    <div className="value">
                        {number}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Number

