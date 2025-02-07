import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from '../../types';

interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-secondary text-white hover:bg-secondary/90',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-gray-600 hover:text-primary hover:bg-primary/10',
  text: 'text-gray-600 hover:text-primary bg-transparent hover:bg-transparent p-0'
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

/**
 * Button component with different variants and sizes
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  disabled = false,
  type = 'button',
  className
}) => {
  const sizeClass = variant === 'text' ? '' : sizes[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300',
        variants[variant],
        sizeClass,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {icon && <span className={clsx('flex-shrink-0', children && 'mr-2')}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
