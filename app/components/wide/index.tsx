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
            <div className="wide-content">
                {children}
            </div>
        </section>
    );
}

export default Wide

