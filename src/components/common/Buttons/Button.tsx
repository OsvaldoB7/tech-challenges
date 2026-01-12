import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 border-none rounded-lg text-base font-medium cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-200",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};
