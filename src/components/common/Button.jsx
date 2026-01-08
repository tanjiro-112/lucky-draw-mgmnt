import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  const baseClasses = 'font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-primary text-primary-content hover:bg-primary-focus focus:ring-primary',
    secondary: 'bg-secondary text-secondary-content hover:bg-secondary-focus focus:ring-secondary',
    danger: 'bg-error text-error-content hover:bg-error-focus focus:ring-error',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
