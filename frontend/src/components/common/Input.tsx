import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  className = '',
  labelClassName = '',
  inputClassName = '',
  error,
  disabled = false,
  required = false,
  fullWidth = false
}) => {
  const baseInputClasses = 'w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-[#ffcd00] focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm transition-all duration-200';
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={`${widthClass} ${className}`}>
      {label && (
        <label className={`block text-white font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase ${labelClassName}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`${baseInputClasses} ${errorClasses} ${disabledClasses} ${inputClassName}`}
        disabled={disabled}
        required={required}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
