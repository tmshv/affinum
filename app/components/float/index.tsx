import styles from "./styles.css";
import useResizeHandler from "~/hooks/use-resize-handler";

function cssPercent(value: number): string {
    return `${value * 100}%`
}

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type FloatProps = {
    children: React.ReactNode
}

export const Float: React.FC<FloatProps> = ({ children }) => {
    const { ref, width } = useResizeHandler(0.65, 0.10, 0.9)

    return (
        <div className="float" style={{
            width: cssPercent(width),
        }}>
            <div className="float-content">
                {children}
            </div>
            <div className="float-control"
                ref={ref}
            />
        </div>
    )
}

