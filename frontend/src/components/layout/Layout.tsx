import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactSection from './ContactSection';

interface LayoutProps {
  children: React.ReactNode;
  showContactForm?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showContactForm = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {showContactForm && <ContactSection />}
      <Footer />
    </div>
  );
};

export default Layout;
