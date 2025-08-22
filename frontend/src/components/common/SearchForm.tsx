import React from "react";
import searchFormData from "../../data/searchForm.json";

interface SearchField {
  label: string;
  options: string[];
  placeholder: string;
}

interface SearchFormProps {
  fields?: SearchField[];
  buttonText?: string;
  className?: string;
  buttonClassName?: string;
  onSubmit?: (values: Record<string, string>) => void;
  variant?: "overlay" | "standalone" | "hero";
  showBackground?: boolean;
  backgroundOpacity?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  fields,
  buttonText = "Search Car Now",
  className = "",
  buttonClassName = "",
  onSubmit,
  variant = "overlay",
  showBackground = true,
  backgroundOpacity = "bg-black/10",
}) => {
  const [formValues, setFormValues] = React.useState<Record<string, string>>(
    {}
  );

  // Default fields from JSON
  const defaultFields: SearchField[] = searchFormData.defaultFields;

  const displayFields = fields || defaultFields;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formValues);
  };

  const handleFieldChange = (fieldLabel: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "hero":
        return `absolute bottom-0 left-0 right-0 z-20 ${
          showBackground ? backgroundOpacity : ""
        } backdrop-blur-sm`;
      case "standalone":
        return "bg-[#f8f4da]";
      default:
        return `absolute bottom-0 left-0 right-0 z-20 ${
          showBackground ? backgroundOpacity : ""
        } backdrop-blur-sm`;
    }
  };

  const getLabelClasses = () => {
    switch (variant) {
      case "standalone":
        return "text-gray-700";
      default:
        return "text-white";
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      <div className={`${variant === "standalone" ? "py-6 md:py-12" : "container mx-auto px-4 py-6 md:py-12"}`}>
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {displayFields.map((field, index) => (
                <div key={index}>
                  <label
                    className={`block font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase ${getLabelClasses()}`}
                  >
                    {field.label}
                  </label>
                  <select
                    className={`w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:outline-none text-sm shadow-sm bg-white/90 backdrop-blur-sm [&>option]:text-gray-600 ${
                      formValues[field.label] ? 'text-gray-700' : 'text-gray-500'
                    }`}
                    value={formValues[field.label] || ""}
                    onChange={(e) =>
                      handleFieldChange(field.label, e.target.value)
                    }
                  >
                    <option value="" className="text-gray-500">{field.placeholder}</option>
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
                  className={`w-full py-3 md:py-4 transition-colors font-normal text-base md:text-lg shadow-lg hover:shadow-xl uppercase bg-brand-yellow text-brand-dark ${buttonClassName}`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
