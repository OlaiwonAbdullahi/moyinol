import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiClock2, CiMail } from "react-icons/ci";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="font-lato flex flex-col bg-gray-50">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-8 lg:p-12">
        {/* Our Services */}
        <div className="space-y-4">
          <h2 className="font-unbounded text-lg font-bold uppercase text-gray-900">
            Our Services
          </h2>
          <ul className="text-sm md:text-base space-y-2 text-gray-700">
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              AML/CFT Policy & Procedures
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              KYC & CDD Services
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Transaction Monitoring & SAR
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Risk Assessment & Internal Audit
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Control Reviews & Recommendations
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Licensing & Compliance Advisory
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              AML/CFT Training & Capacity Building
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Compliance Software Support
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Training & Development
            </li>
          </ul>
        </div>

        {/* Industries Served */}
        <div className="space-y-4">
          <h2 className="font-unbounded text-lg font-bold uppercase text-gray-900">
            Industries Served
          </h2>
          <ul className="text-sm md:text-base space-y-2 text-gray-700">
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Finance
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Legal & Professional Service
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Real Estate & Investment Companies
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Insurance & Pension Providers
            </li>
            <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
              Dealers in Precious Metals and Stones (DPMS)
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h2 className="font-unbounded text-lg font-bold uppercase text-gray-900">
            Company
          </h2>
          <ul className="text-sm md:text-base space-y-2 text-gray-700">
            <Link href={"/contact"}>
              <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
                About Us
              </li>
            </Link>

            <Link href={"/contact"}>
              <li className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-6">
          {/* Contact Us */}
          <div>
            <h2 className="font-unbounded text-lg font-bold uppercase text-gray-900 mb-4">
              Contact Us
            </h2>
            <ul className="text-sm md:text-base space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <BsTelephone className="text-[#1E3A8A] flex-shrink-0" />
                <span>+234803XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <CiMail className="text-[#1E3A8A] flex-shrink-0" />
                <span className="break-all">info@moyinolconsulting.com</span>
              </li>
              <li className="flex items-start gap-3">
                <LiaMapMarkerSolid className="text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                <span>Ibadan, Oyo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <CiClock2 className="text-[#1E3A8A] flex-shrink-0" />
                <span>Mon-Fri 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="font-unbounded text-lg font-bold uppercase text-gray-900 mb-4">
              Follow Us
            </h2>
            <ul className="flex gap-4">
              <li>
                <FaFacebook className="w-6 h-6 text-[#1E3A8A] hover:text-[#1E3A8A] cursor-pointer transition-colors" />
              </li>
              <li>
                <LuInstagram className="w-6 h-6 text-[#1E3A8A] hover:text-[#1E3A8A] cursor-pointer transition-colors" />
              </li>
              <li>
                <FaLinkedin className="w-6 h-6 text-[#1E3A8A] hover:text-[#1E3A8A] cursor-pointer transition-colors" />
              </li>
              <li>
                <IoLogoTiktok className="w-6 h-6 text-[#1E3A8A] hover:text-[#1E3A8A] cursor-pointer transition-colors" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-6 md:px-8 lg:px-12 pb-6">
        <div className="max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Subscribe to Our Newsletter"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
            <button className="bg-[#1E3A8A] hover:bg-[#1e3b8adc] px-6 py-3 rounded-md text-white cursor-pointer transition-colors h-12 whitespace-nowrap text-sm md:text-base font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Moyinol Consulting. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-sm md:text-base text-gray-600">
              <span className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-gray-400">|</span>
              <span className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="text-gray-400">|</span>
              <span className="hover:text-[#1E3A8A] cursor-pointer transition-colors">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
