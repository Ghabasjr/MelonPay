import React from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  disabled = false,
  type = "submit",
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none transition duration-300";

  const variantStyles: Record<
    "primary" | "secondary" | "danger" | "outline",
    string
  > = {
    primary: "bg-[#005787] text-white",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  // Ensure variant is always valid
  const buttonStyles = `${baseStyles} ${
    variantStyles[variant ?? "primary"]
  } ${className}`;

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonStyles}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center justify-center">
        {isLoading ? <ClipLoader size={15} color="#FF8C4B" /> : null}
        {children}
      </span>
    </button>
  );
};

export default Button;
