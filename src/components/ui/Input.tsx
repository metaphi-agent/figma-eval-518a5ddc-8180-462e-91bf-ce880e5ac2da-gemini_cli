import React, { useState } from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = 'text', className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    
    // Toggle password visibility
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="flex flex-col gap-[6px] w-full">
        {label && (
          <label className="text-[14px] text-black font-normal">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={clsx(
              "w-full rounded-[10px] border px-[16px] py-[18px] text-[16px] outline-none transition-colors placeholder:text-gray-400 bg-white",
              error
                ? "border-[#E64646] focus:border-[#E64646]"
                : "border-[#D8DADD] focus:border-black",
              isPassword && "pr-12",
              className
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors focus:outline-none"
            >
              <img 
                src={showPassword ? "/assets/icons/eye-hide.svg" : "/assets/icons/eye-show.svg"} 
                alt={showPassword ? "Hide password" : "Show password"}
                className="w-5 h-5"
              />
            </button>
          )}
        </div>
        {error && (
          <span className="text-[13px] font-medium text-[#E64646] animate-in slide-in-from-top-1 fade-in duration-200">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';