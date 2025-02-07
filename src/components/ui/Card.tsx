import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from '../../types';

interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  hover?: boolean;
}

/**
 * Card component for displaying content in a consistent format
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  hover = true,
  className,
  children
}) => {
  return (
    <div
      className={clsx(
        'rounded-lg bg-white p-6 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-md hover:-translate-y-1',
        className
      )}
    >
      {imageUrl && (
        <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="h-6 w-6">{icon}</span>
        </div>
      )}
      {title && <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>}
      {description && <p className="mb-4 text-gray-600">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
