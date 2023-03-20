import { useEffect } from "react";
import styles from "./styles.css";
import useResizeHandler from "~/hooks/use-resize-handler";

function cssPercent(value: number): string {
    return `${value * 100}%`
}

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type FloatProps = {
    value: number
    children: React.ReactNode
    onChange?: (width: number, absoluteWidth: number) => void
}

export const Float: React.FC<FloatProps> = ({ value, children, onChange }) => {
    const { ref, width, absoluteWidth } = useResizeHandler(value, 0.10, 0.9)

    useEffect(() => {
        if (typeof onChange === "function") {
            onChange(width, absoluteWidth)
        }
    }, [width, absoluteWidth, onChange])

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

