import React from 'react';
import { BaseComponentProps } from '../../types';
import clsx from 'clsx';

interface GridProps extends BaseComponentProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 2 | 4 | 6 | 8 | 10 | 12;
  mdCols?: 1 | 2 | 3 | 4 | 5 | 6;
  lgCols?: 1 | 2 | 3 | 4 | 5 | 6;
}

const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6'
};

const mdColsMap = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6'
};

const lgColsMap = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6'
};

const gapMap = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12'
};

/**
 * Grid component for responsive grid layouts
 */
const Grid: React.FC<GridProps> = ({
  cols = 1,
  mdCols,
  lgCols,
  gap = 4,
  className,
  children
}) => {
  return (
    <div
      className={clsx(
        'grid',
        colsMap[cols],
        mdCols && mdColsMap[mdCols],
        lgCols && lgColsMap[lgCols],
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
