import React from "react";
import { cn } from "@/lib/utils";

interface GlamoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  showPasswordToggle?: boolean;
  onPasswordToggle?: () => void;
  isPasswordVisible?: boolean;
}

export const GlamoInput: React.FC<GlamoInputProps> = ({
  className,
  error = false,
  showPasswordToggle = false,
  onPasswordToggle,
  isPasswordVisible = false,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        className={cn(
          "glamo-input w-[500px] h-15 text-2xl",
          error && "border-glamo-red",
          className,
        )}
        {...props}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onPasswordToggle}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-glamo-blue-700 hover:text-glamo-blue-500"
        >
          {isPasswordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
              <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
              <path d="M3 3l18 18"></path>
            </svg>
          )}
        </button>
      )}
    </div>
  );
};
