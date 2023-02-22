import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type WideProps = {
    children: React.ReactNode
}

const Wide: React.FC<WideProps> = ({ children }) => {
    return (
        <section className="wide">
            {children}
        </section>
    );
}

export default Wide

