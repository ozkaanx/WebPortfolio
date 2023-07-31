import React from "react";
import "./style.scss";

interface IContainerProps {
    children: React.ReactNode;
    maxWidth?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Container: React.FC<IContainerProps> = ({ children, maxWidth, height, className, style }) => {
    return (
        <div
            className={`container ${className ?? ''}`}
            style={{ maxWidth, height, ...style }}
        >
            {children}
        </div>
    );
};

export default Container;
