import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";
import { MdOutlineWhatsapp } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8 text-start">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live Chat */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MdOutlineWhatsapp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Chat Support
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team 24/7 for instant assistance
              </p>
              <button className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        {/* Phone Support */}
        <div className="bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                <LuPhone className="w-6 h-6 text-[#1E3A8A]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone Support
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="text-base">
                  Monday - Friday, 9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="space-y-1">
                <a href="tel:+234803XXXXXXX">
                  <div className="text-base  text-[#1E3A8A]">
                    +234803XXXXXXX
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Email Support */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <LuMail className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 mb-3">
                Send us an email and we&apos;ll respond within 24 hours
              </p>
              <a
                href="mailto:support@company.com"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                info@moyinolconsulting.com
              </a>
            </div>
          </div>
        </div>

        {/* Address 
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <LuMapPin className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Our Office
              </h3>
              <address className="text-gray-600 not-italic leading-relaxed">
                Ibadan, Oyo State, Nigeria
              </address>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default ContactDetails;
