import React from "react";
import { BsBuilding, BsBank } from "react-icons/bs";
import { CgArrowRight } from "react-icons/cg";
import { FaBalanceScale, FaRegBuilding, FaDice } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const IndustryCard = ({
  title,
  description,
  icon,
  borderClasses,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderClasses: string;
}) => {
  return (
    <div
      className={`group font-lato p-6 md:p-8 lg:p-10 transition-all duration-300 hover:bg-[#1E3A8A]/5 hover:shadow-lg cursor-pointer ${borderClasses}`}
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-xl mr-4 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-unbounded text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center text-[#1E3A8A] font-medium text-sm group-hover:text-[#1E3A8A] transition-all duration-300">
        <span className="mr-2">Learn more</span>
        <CgArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "Financial Services",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia ut harum, et temporibus autem repellat nostrum tempore distinctio dignissimos, enim saepe ratione quasi? Modi dolorum sed culpa rem unde!",
      icon: <BsBank className="w-6 h-6" />,
      /* description:
        "Comprehensive AML/CFT compliance solutions for banks, credit unions, fintech companies, and payment processors. Our expertise covers regulatory requirements, risk assessments, and transaction monitoring systems.",
      */
      borderClasses: "border-[#1E3A8A] border-r-2 border-b-2 md:rounded-br-3xl",
    },
    {
      title: "Legal & Professional Services",
      /*description:
        "Specialized compliance frameworks for law firms, accounting practices, and consulting agencies. We help professionals navigate complex regulatory landscapes while maintaining client confidentiality.",
     */
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia ut harum, et temporibus autem repellat nostrum tempore distinctio dignissimos, enim saepe ratione quasi? Modi dolorum sed culpa rem unde!",

      icon: <FaBalanceScale className="w-6 h-6" />,
      borderClasses: "border-[#1E3A8A] border-l-2 border-b-2 md:rounded-bl-3xl",
    },
    {
      title: "Real Estate & Investment",
      /* description:
        "Tailored compliance programs for real estate agencies, investment firms, and property developers. Our solutions address due diligence requirements and suspicious transaction reporting.",
     */
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia ut harum, et temporibus autem repellat nostrum tempore distinctio dignissimos, enim saepe ratione quasi? Modi dolorum sed culpa rem unde!",

      icon: <FaRegBuilding className="w-6 h-6" />,
      borderClasses: "border-[#1E3A8A] border-r-2 border-t-2 md:rounded-tr-3xl",
    },
    {
      title: "Insurance & Pension Providers",
      /* description:
        "Robust compliance solutions for insurance companies and pension fund managers. We provide comprehensive risk management frameworks and regulatory reporting systems.",
      */
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia ut harum, et temporibus autem repellat nostrum tempore distinctio dignissimos, enim saepe ratione quasi? Modi dolorum sed culpa rem unde!",

      icon: <BsBuilding className="w-6 h-6" />,
      borderClasses: "border-[#1E3A8A] border-l-2 border-t-2 md:rounded-tl-3xl",
    },
  ];

  const additionalIndustries = [
    {
      title: "Gaming & Entertainment",
      /* description:
        "Specialized AML/CFT compliance solutions for casinos, online gaming platforms, and entertainment venues. We provide comprehensive player due diligence, transaction monitoring, and regulatory reporting systems tailored to the unique challenges of the gaming industry.",
     */
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia ut harum, et temporibus autem repellat nostrum tempore distinctio dignissimos, enim saepe ratione quasi? Modi dolorum sed culpa rem unde!",

      icon: <FaDice className="w-6 h-6" />,
    },
    {
      title: "Precious Metals & Stones (DPMS)",
      /* description:
        "Expert compliance services for dealers in precious metals and stones, jewelry stores, and luxury goods retailers. Our solutions cover customer verification, transaction documentation, and suspicious activity reporting requirements.",
      */
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia ut harum, et temporibus autem repellat nostrum tempore distinctio dignissimos, enim saepe ratione quasi? Modi dolorum sed culpa rem unde!",

      icon: <MdSecurity className="w-6 h-6" />,
    },
  ];

  return (
    <div className="font-lato bg-[#F0F4FF] py-16 lg:py-24" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-[#1E3A8A]/10 text-[#1E3A8A] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span>Industries</span>
          </div>
          <h2 className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Industries We Serve
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            {/*
           
            We deliver industry-specific AML/CFT compliance solutions that
            address the unique regulatory requirements and operational
            challenges of your sector, ensuring comprehensive protection and
            regulatory adherence.
            */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            officia ut harum, et temporibus autem repellat nostrum tempore
            distinctio dignissimos
          </p>
        </div>

        {/* Main Grid with Center Design */}
        <div className="relative w-full max-w-5xl mx-auto mb-16">
          {/* Center Circle - Hidden on Mobile */}
          <div className="hidden  md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-6 h-6 rounded-full bg-[#1E3A8A]"></div>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
            {industries.map((industry, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                <IndustryCard
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                  borderClasses={industry.borderClasses}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Industries Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-unbounded text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Additional Specialized Services
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Expanding our expertise to serve emerging and specialized sectors
              with tailored compliance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {additionalIndustries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E3A8A]/20"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-xl mr-4 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-unbounded text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
                      {industry.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center text-[#1E3A8A] font-medium text-sm group-hover:text-[#1E3A8A] transition-all duration-300">
                  <span className="mr-2">Learn more</span>
                  <CgArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
