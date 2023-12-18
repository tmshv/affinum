import React from "react"
import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type GridProps = {
    children: React.ReactNode
    cols?: number
}

export const Grid: React.FC<GridProps> = ({ children, cols }) => {
    let columns = cols
    if (!columns) {
        columns = React.Children.count(children)
    }

    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
        >
            {children}
        </div>
    )
}
