import styles from "./styles.css"

export const links = () => [
    { rel: "stylesheet", href: styles },
]


export const Timeline = ({ items }: { items: string[] }) => {
    return (
        <div className="timeline-container">
            {items.map((x, i) => (
                <div className="timeline-item" key={x}>
                    <div className="timeline-itemContent">
                        <div className="timeline-icon">
                            <svg width="16" height="16" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="50" fill="black" />
                            </svg>
                            {i !== items.length - 1 && (
                                <div className="timeline-line" />
                            )}
                        </div>
                        <span>
                            {x}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}