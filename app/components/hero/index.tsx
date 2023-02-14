import Plus from "../plus";
import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type HeroProps = {
    location: string
    title: string
    src: string
    children: React.ReactNode
    area?: string
    budget?: string
}

const Hero: React.FC<HeroProps> = ({ location, title, children, src, area, budget }) => {
    return (
        <section className="hero">
            <img
                className="cover"
                src={src}
                alt={title}
            // width={100}
            // height={100}
            />

            <div className="content">
                <div className="logo">
                    <Plus color={"white"} size={12} />
                    <div style={{ flex: 1 }} />
                    <div>
                        <Plus color={"white"} size={12} />
                        аффинум
                        <Plus color={"white"} size={12} />
                    </div>
                </div>
                <div>
                    {location}
                </div>
                <div>
                    {title}
                </div>

                {children}

            </div>
        </section>
    );
}

export default Hero

