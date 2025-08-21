import React, { useState } from "react";
import { Button, Input, Select, Title } from "./index";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showTitle?: boolean;
  variant?: 'default' | 'compact' | 'full';
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  carType?: string;
  pickupDate?: string;
  returnDate?: string;
}

  const ContactForm: React.FC<ContactFormProps> = ({
    title = "In Touch",
    className = "",
    showTitle = true,
  variant = 'default',
  onSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    carType: "",
    pickupDate: "",
    returnDate: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Default behavior - log to console
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        carType: "",
        pickupDate: "",
        returnDate: ""
      });
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return 'w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8';
      case 'full':
        return 'w-full px-4 sm:px-6 lg:px-8';
      default:
        return 'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      {showTitle && (
        <div className="mb-8">
          <Title
            subtitle="KEEP IN TOUCH"
            title={title}
            subtitleClassName="text-white"
            titleClassName="text-brand-yellow font-bold"
            align="center"
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 bg-brand-formBg p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <Input
            placeholder="User name"
            type="text"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            error={errors.name}
            required
       
          />
          
          <Input
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
          />
        </div>

        <div>
          <Input
            placeholder="Title Message"
            type="text"
            value={formData.subject}
            onChange={(value) => handleInputChange('subject', value)}
            error={errors.subject}
            required
          />
        </div>

        {/* Conditional fields based on variant */}
        {variant === 'full' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            <Select
              label="Car Type"
              value={formData.carType}
              onChange={(value) => handleInputChange('carType', value)}
              options={[
                { value: "", label: "Select Car Type" },
                { value: "sedan", label: "Sedan" },
                { value: "suv", label: "SUV" },
                { value: "luxury", label: "Luxury" },
                { value: "sports", label: "Sports" }
              ]}
            />
            
            <Input
              label="Pickup Date"
              type="text"
              value={formData.pickupDate}
              onChange={(value) => handleInputChange('pickupDate', value)}
              placeholder="MM/DD/YYYY"
            />
            
            <Input
              label="Return Date"
              type="text"
              value={formData.returnDate}
              onChange={(value) => handleInputChange('returnDate', value)}
              placeholder="MM/DD/YYYY"
            />
          </div>
        )}

        <div>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={8}
            className={`w-full px-3 md:px-4 py-3 md:py-4 bg-[#333]/60 text-white placeholder-gray-400 focus:outline-none focus:text-white text-sm shadow-sm backdrop-blur-sm transition-all duration-200 resize-none ${
              errors.message ? 'border-red-500' : 'border-0'
            }`}
            placeholder="Message"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 tracking-widest text-xs sm:text-sm bg-brand-yellow text-white hover:bg-brand-yellowDark"
          >
            SEND MESSAGE NOW
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
