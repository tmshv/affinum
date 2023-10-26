import React from 'react';
import styles from "./styles.css";
import Wide from '../wide';

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export type FlexProps = {
    title: string
    subtitle: string
    children: React.ReactNode
    shadow?: boolean
}

export const ProductHero: React.FC<FlexProps> = ({ children, title, subtitle, shadow = true }) => {
    return (
        <Wide>
            {children}
            {shadow && <div className='product-hero-shadow' />}
            <div className='overlay'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </Wide>
    )
}
