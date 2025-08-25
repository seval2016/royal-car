import React from "react";
import ContactForm from '../common/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <ContactForm 
        variant="default"
        showTitle={true}
        className=""
      />
    </section>
  );
};

export default ContactSection;
