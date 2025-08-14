import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  MapPin as MapIcon,
  ArrowUp,
  Mail as EnvelopeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 relative">
      {/* Background Car Image */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0 flex items-end justify-end">
        <img src="/images/footer-car.png" alt="Footer Car" className="h-full w-auto object-contain" />
      </div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Company Description */}
          <div className="space-y-10">
            <div className="flex items-center space-x-3">
              <img
                src="/images/footer-logo.png"
                alt="Royal Cars Logo"
                className="w-60 object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We know the difference is in the details and that's why our car
              rental services, in the tourism and business industry, stand out
              for their quality.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Subscribe Newsletter"
                  className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow text-gray-700"
                />
                <button className="px-4 py-3 bg-brand-yellow text-white hover:bg-brand-yellow/80 transition-colors">
                  <EnvelopeIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Phone 1 and Useful Links */}
          <div className="space-y-10">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-yellow" />
              <div>
                <p className="text-xs text-brand-yellow font-semibold uppercase">
                  Call us on Line 1
                </p>
                <h5 className="text-2xl text-gray-800">
                  100.1212.2000
                </h5>
              </div>
            </div>
            <div className="space-y-4">
              <h6
                className="text-lg font-bold text-gray-800 uppercase"
                style={{
                  fontSize: "18px",
                  color: "#333",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                Useful Link
              </h6>
              <ul className="space-y-3">
                {[
                  "Private Policy",
                  "Term & Conditions",
                  "Copyright Notification",
                  "Register for New Member",
                  "Press Release",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-600 hover:text-brand-yellow transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-brand-yellow" />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Phone 2 and Our Info */}
          <div className="space-y-10">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-yellow" />
              <div>
                <p className="text-xs text-brand-yellow font-semibold uppercase">
                  Call us on Line 2
                </p>
                <h5 className="text-2xl text-gray-800">
                  100.2424.2000
                </h5>
              </div>
            </div>
            <div className="space-y-4">
              <h6
                className="text-lg font-bold text-gray-800 uppercase"
                style={{
                  fontSize: "18px",
                  color: "#333",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                Our Info
              </h6>
              <ul className="space-y-3">
                {[
                  "About Royal Cars",
                  "Our Mission & Strategy",
                  "Our Vision",
                  "Royal Cars Advantages",
                  "Contact Us",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-600 hover:text-brand-yellow transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-brand-yellow" />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Map Button and Account Information */}
          <div className="space-y-10">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-brand-yellow text-white px-6 py-3 hover:bg-brand-yellow/80 transition-colors">
                <MapIcon className="w-5 h-5" />
                <span className="font-semibold">RoyalCars on Map</span>
              </button>
            </div>
            <div className="space-y-4">
              <h6
                className="text-lg font-bold text-gray-800 uppercase"
                style={{
                  fontSize: "18px",
                  color: "#333",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                Account Information
              </h6>
              <ul className="space-y-3">
                {[
                  "Login to My Account",
                  "Press Releases",
                  "User Dashboard",
                  "Email Address",
                  "Lorem Ipsum dolorist",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-600 hover:text-brand-yellow transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-brand-yellow" />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="border-t border-gray-200 relative z-10"
        style={{ borderTop: "1px solid #eeeeee" }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2019 Created by{" "}
              <span>| Seval Şentürk</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-gray-400">
                <a
                  href="#"
                  className="flex items-center space-x-1 hover:text-brand-yellow transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 hover:text-brand-yellow transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 hover:text-brand-yellow transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
              <button className="w-10 h-10 bg-gray-800 text-white rounded-lg hover:bg-brand-yellow transition-colors flex items-center justify-center">
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
