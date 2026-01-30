import React from 'react';

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string; // e.g., 'google', 'facebook'
  label?: string; // Optional alt text
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  iconName,
  label,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center w-full h-[56px] rounded-[10px] border border-[#EBEBEB] bg-white hover:bg-gray-50 transition-colors ${className}`}
      {...props}
    >
      <img
        src={`/assets/icons/${iconName}.svg`}
        alt={label || `${iconName} login`}
        className="w-6 h-6"
      />
    </button>
  );
};