import React from 'react';
import { SectionProps } from '../../types';
import clsx from 'clsx';

const bgColors = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  white: 'bg-white',
  gray: 'bg-gray-50'
};

/**
 * Section component for consistent section styling across the site
 */
const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  bgColor = 'white',
  className,
  children
}) => {
  return (
    <section
      id={id}
      className={clsx(
        'py-20 overflow-hidden',
        bgColors[bgColor],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className={clsx(
              'text-3xl md:text-4xl font-bold mb-4',
              bgColor === 'white' || bgColor === 'gray' ? 'text-gray-900' : 'text-white'
            )}>
              {title}
            </h2>
            {subtitle && (
              <p className={clsx(
                'text-xl max-w-2xl mx-auto',
                bgColor === 'white' || bgColor === 'gray' ? 'text-gray-600' : 'text-white/80'
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
