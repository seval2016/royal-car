import React from 'react';

interface SearchField {
  label: string;
  options: string[];
  placeholder: string;
}

interface SearchFormProps {
  fields: SearchField[];
  buttonText: string;
  className?: string;
  onSubmit?: (values: Record<string, string>) => void;
  variant?: 'overlay' | 'standalone';
}

const SearchForm: React.FC<SearchFormProps> = ({
  fields,
  buttonText,
  className = '',
  onSubmit,
  variant = 'overlay'
}) => {
  const [formValues, setFormValues] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formValues);
  };

  const handleFieldChange = (fieldLabel: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [fieldLabel]: value
    }));
  };

  const baseClasses = variant === 'overlay' 
    ? "absolute bottom-0 left-0 right-0 z-20 bg-black/10 backdrop-blur-sm"
    : "bg-white shadow-lg rounded-lg";

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="container mx-auto px-4 py-6 md:py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {fields.map((field, index) => (
              <div key={index}>
                <label className={`block font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase ${
                  variant === 'overlay' ? 'text-white' : 'text-gray-700'
                }`}>
                  {field.label}
                </label>
                <select 
                  className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm"
                  value={formValues[field.label] || ''}
                  onChange={(e) => handleFieldChange(field.label, e.target.value)}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3 md:py-4 transition-colors font-normal text-base md:text-lg shadow-lg hover:shadow-xl uppercase bg-brand-yellow text-brand-dark"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
