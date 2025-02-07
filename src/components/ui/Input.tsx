import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

/**
 * Input component for forms with consistent styling and error handling
 */
const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  multiline = false,
  rows = 4,
  id,
  ...props
}) => {
  const inputClasses = clsx(
    'w-full px-4 py-3 rounded-lg border transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
    error
      ? 'border-red-500 bg-red-50'
      : 'border-gray-300 focus:border-primary',
    className
  );

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <InputComponent
        id={id}
        className={inputClasses}
        rows={multiline ? rows : undefined}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
