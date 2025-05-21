import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiClock2, CiMail } from "react-icons/ci";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className=" font-lato flex flex-col">
      <div className=" flex flex-wrap justify-between md:flex-row p-8 md:gap-[6px] gap-[16px]">
        <div className=" space-y-[16px]">
          <h2 className=" font-unbounded text-lg font-bold uppercase">
            Our Services
          </h2>
          <ul className="text-base space-y-2">
            <li>AML/CFT Policy & Procedures</li>
            <li>KYC & CDD Services</li>
            <li>Transaction Monitoring & SAR</li>
            <li>Risk Assessment & Internal Audit</li>
            <li>Control Reviews & Recommendations</li>
            <li>Licensing & Compliance Advisory</li>
            <li>AML/CFT Training & Capacity Building</li>
            <li>Compliance Software Support</li>
            <li>Training & Development</li>
          </ul>
        </div>
        <div className=" space-y-[16px]">
          <h2 className=" font-unbounded text-lg font-bold uppercase">
            Industries Served
          </h2>
          <ul className=" text-base space-y-2">
            <li>Finance</li>
            <li>Legal& Professional Service</li>
            <li>Real Estate & Investment Companies</li>
            <li>Insurance & Pension Providers</li>
            <li>Dealers in Precious Metals and Stones (DPMS)</li>
          </ul>
        </div>
        <div className=" space-y-[16px]">
          <h2 className=" font-unbounded text-lg font-bold uppercase">
            Company
          </h2>
          <ul className=" text-base space-y-2">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact Us</li>
            <li> Blog</li>
          </ul>
        </div>
        <div className=" space-y-[16px]">
          <div className="">
            <h2 className=" font-unbounded text-lg font-bold uppercase">
              Contact Us
            </h2>
            <ul className=" text-base space-y-2">
              <li className=" flex flex-row items-center gap-2">
                <BsTelephone />
                +234803XXXXXXX
              </li>
              <li className=" flex flex-row items-center gap-2">
                <CiMail />
                info@moyinolconsulting.com
              </li>
              <li className=" flex flex-row items-center gap-2">
                <LiaMapMarkerSolid />
                Ibadan, Oyo State, Nigeria
              </li>
              <li className=" flex flex-row items-center gap-2">
                <CiClock2 />
                Mon-Fri 9AM - 6PM
              </li>
            </ul>
          </div>
          <div className=" space-y-2">
            <h2 className=" font-unbounded text-lg font-bold uppercase">
              Follow Us
            </h2>
            <ul className=" text-base flex flex-row gap-2">
              <li>
                <FaFacebook className=" size-5 text-[#1E3A8A] cursor-pointer" />
              </li>
              <li>
                <LuInstagram className=" size-5 text-[#1E3A8A] cursor-pointer" />
              </li>
              <li>
                <FaLinkedin className=" size-5 text-[#1E3A8A] cursor-pointer" />
              </li>
              <li>
                <IoLogoTiktok className=" size-5 text-[#1E3A8A] cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex flex-row gap-2.5  p-8 w-1/2">
        <input
          type="text"
          placeholder=" Subscribe to Our Newsletter"
          className=" border w-[437px] p-2 rounded-md h-[52px] focus:outline-none"
        />
        <button className=" w-fit bg-[#1E3A8A] hover:bg-[#1e3b8adc] px-5.5 rounded-md text-white cursor-pointer">
          Subscribe
        </button>
      </div>
      <div className="">
        <hr className=" border-t border-gray-300" />
        <div className=" p-8 flex flex-row justify-between">
          <p>
            &copy; {new Date().getFullYear()} Moyinol Consulting. All rights
            reserved.
          </p>
          <div className="">
            <ul className=" flex flex-row gap-2">
              <li>Privacy Policy</li>
              <span>|</span>
              <li>Terms of Service</li>
              <span>|</span>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
