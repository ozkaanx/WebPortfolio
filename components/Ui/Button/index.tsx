import React from "react";
import "./style.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outline" | "text" | 'next' | 'prev';
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ style, children, variant, disabled, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        style={style}
        className={`button ${variant ? variant : ""}`}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
