import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type HighlightProps = {
    children: React.ReactNode
    color?: string
}

const Highlight: React.FC<HighlightProps> = ({ children, color = "yellow" }) => {
    return (
        <section className="highlight" style={{
            backgroundColor: color,
        }}>
            {children}
        </section>
    );
}

export default Highlight

