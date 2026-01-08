import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, required }) => {
  const commonClasses = 'w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary';

  return (
    <div>
      <label className="block text-sm font-bold mb-2">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${commonClasses} h-24`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={commonClasses}
        />
      )}
    </div>
  );
};

export default Input;
