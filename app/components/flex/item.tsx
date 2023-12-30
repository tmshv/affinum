import React from 'react';
import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type FlexItemProps = {
    children: React.ReactNode
    flex?: string
}

export const FlexItem: React.FC<FlexItemProps> = ({ children, flex }) => {
    return (
        <div style={{ flex }} >{children}</div>
    )
}
