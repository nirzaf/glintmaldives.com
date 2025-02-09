import React from 'react';
import { BaseComponentProps } from '../../types';
import clsx from 'clsx';

/**
 * Container component for consistent width and padding across the site
 */
const Container: React.FC<BaseComponentProps> = ({ className, children }) => {
  return (
    <div className={clsx(
      'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
      className
    )}>
      {children}
    </div>
  );
};

export default Container;
