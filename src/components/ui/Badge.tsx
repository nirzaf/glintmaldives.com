import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from '../../types';

interface BadgeProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

const variants = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800'
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base'
};

/**
 * Badge component for displaying status, tags, or labels
 */
const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  rounded = false,
  className,
  children
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium',
        variants[variant],
        sizes[size],
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
