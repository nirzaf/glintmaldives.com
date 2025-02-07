import React, { useState } from 'react';
import { CardProps } from '../../types';
import clsx from 'clsx';

/**
 * Card component for displaying content in a consistent format
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  image,
  tags,
  href,
  onClick,
  className,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const CardWrapper = href ? 'a' : 'div';
  const cardProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper
      {...cardProps}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        'group block rounded-xl bg-white shadow-lg transition-all duration-300',
        (href || onClick) && 'cursor-pointer hover:shadow-xl',
        className
      )}
    >
      {image && (
        <div className="relative aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className={clsx(
              'w-full h-full object-cover transition-transform duration-300',
              isHovered && 'scale-110'
            )}
          />
          <div className={clsx(
            'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )} />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </CardWrapper>
  );
};

export default Card;
