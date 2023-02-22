import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type HeroProps = {
    children: React.ReactNode
    area?: string
    budget?: string
    color?: string
}

const Hero: React.FC<HeroProps> = ({ children, area, budget, color = "black" }) => {
    return (
        <section className="hero flex-row" style={{
            marginBottom: 64,
            color,
        }}>
            <div className="caption">
                {children}
            </div>

            <div style={{ flex: 1 }} />

            <div className="flex-column">
                <div className="number">
                    <div className="value">
                        {area}
                    </div>
                    площадь территории
                </div>

                <div className="number">
                    <div className="value">
                        {budget}
                    </div>
                    бюджет проекта
                </div>
            </div>

            <div style={{ flex: 1 }} />
        </section>
    );
}

export default Hero

