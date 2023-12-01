import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type GridProps = {
    children: React.ReactNode
    cols?: number
}

export const Grid: React.FC<GridProps> = ({ children, cols = 2 }) => {
    return (
        <div
            className='grid-container'
            style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
            }}
        >
            {children}
        </div>
    )
}
