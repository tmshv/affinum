import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type GridProps = {
    children: React.ReactNode
}

export const Grid: React.FC<GridProps> = ({ children }) => {
    return (
        <div
            className='grid-container'
        >
            {children}
        </div>
    )
}
