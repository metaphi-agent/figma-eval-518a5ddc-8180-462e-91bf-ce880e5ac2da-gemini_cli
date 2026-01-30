import React from 'react';
import { clsx } from 'clsx';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 cursor-pointer group select-none">
        <div className="relative flex items-center justify-center w-5 h-5">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <div className="w-5 h-5 rounded border border-[#D8DADD] bg-white transition-all peer-checked:bg-black peer-checked:border-black peer-focus:ring-2 peer-focus:ring-black/20" />
          <svg
            className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3334 1L5.00008 8.33333L1.66675 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {label && <span className="text-[14px] text-gray-600">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';