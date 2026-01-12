import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={`px-3 py-2 border rounded-lg text-base transition-all ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        }`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
