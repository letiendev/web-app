import React from 'react';
import { cn } from '@/lib/utils';

interface GlamoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'red' | 'nav-tile';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'nav';
  children: React.ReactNode;
}

export const GlamoButton: React.FC<GlamoButtonProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'flex items-center justify-center font-bold transition-all focus:outline-none';
  
  const variantClasses = {
    default: 'glamo-button',
    outline: 'glamo-button-outline',
    red: 'glamo-button-red',
    'nav-tile': 'glamo-nav-tile',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-lg h-12',
    md: 'px-6 py-3 text-xl h-15',
    lg: 'px-8 py-4 text-2xl h-16',
    xl: 'px-12 py-6 text-3xl h-20',
    nav: 'w-[300px] h-[200px] text-4xl',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        size !== 'nav' && sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
