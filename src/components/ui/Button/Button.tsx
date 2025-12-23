import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "custom";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseStyles = variant === "primary" ? "btn-primary" : "";

  return (
    <button className={`${baseStyles} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
