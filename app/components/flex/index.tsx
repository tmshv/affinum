import React from 'react';
import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type FlexProps = {
    col?: boolean
    children: React.ReactNode
}

export const Flex: React.FC<FlexProps> = ({ children, col = false }) => {
    return (
        <section
            className={`flex-container ${col ? 'col' : ''}`}
        >
            <style>
                {`
                    .flex-container > * {
                        flex: 0 1 ${(100 / (React.Children.count(children) ?? 1)).toFixed(3)}%;
                    }
                `}
            </style>
            {children}
        </section>
    )
}
