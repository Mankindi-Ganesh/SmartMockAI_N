import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <div className="contact-us-container p-6 md:p-10 lg:p-12 bg-white text-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Contact Us
        </h1>
        <p className="text-gray-700 text-center text-lg sm:text-xl">
          Reach out to us for inquiries about our AI-Powered Mock Interview System.
        </p>

        <div className="contact-info space-y-6 bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Our Contact Information</h2>
          <div className="space-y-4">
            {/* G.rohith */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: A.Rohith</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 23BD5A1201
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Email:</strong> rohithalugoju@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 8639189992
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Address:</strong> IT-A KMIT
                </p>
              </div>
            </div>

            {/* ganesh mahadev */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name:M.Ganesh</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 23BD5A1202
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Email:</strong> ganeshmahadev@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 9876543210
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Address:</strong> IT-A KMIT
                </p>
              </div>
            </div>

            {/* P.SHASHI VARDHAN */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: p.Shashi Vardhan</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 23BD5A1205
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Email:</strong> shashivardhan@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 7075011480
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  <strong>Address:</strong> IT-A KMIT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
