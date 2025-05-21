import Link from "next/link";
import React from "react";
import { BsArrowRightSquare, BsClipboardData } from "react-icons/bs";

import { IoSettingsOutline } from "react-icons/io5";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import {
  PiChalkboardTeacherThin,
  PiGavelLight,
  PiIdentificationCardLight,
} from "react-icons/pi";
import { SlEye } from "react-icons/sl";

const ServiceCard = ({
  title,
  description,
  bgColor,
  textColor,
  borderColor,
  icon,
  iconBgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  icon: React.ReactNode;
  iconBgColor: string;
}) => {
  return (
    <div
      className={`relative font-lato flex flex-col justify-between p-8 rounded-lg shadow-md h-full ${bgColor} ${textColor}`}
    >
      {/* <div className="absolute top-0 right-0">
        <Image
          src="/wave.svg"
          alt={title}
          width={280}
          height={280}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/wave1.svg"
          alt={title}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      */}
      <div
        className={`  mb-4 flex items-center justify-center rounded-md w-fit p-2 ${iconBgColor} backdrop-blur-2xl`}
      >
        {icon}
      </div>
      <h2 className="font-unbounded text-3xl font-semibold mb-4 z-10">
        {title}
      </h2>
      <div>
        <p className="text-base leading-relaxed mb-6">{description}</p>
        <Link href="#">
          <button
            className={`flex   cursor-pointer items-center gap-2 text-sm font-medium border ${borderColor} rounded-md py-3 px-4 transition-all duration-300 hover:bg-white/20 w-fit`}
          >
            Learn More <BsArrowRightSquare className="size-4 ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      title: "AML/CFT Policy & Procedures",
      icon: <LiaBalanceScaleSolid className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-900",
      textColor: "text-blue-50",
      iconBgColor: "bg-blue-50/20",
      borderColor: "border-blue-50",
    },
    {
      title: "KYC & CDD Services",
      icon: <PiIdentificationCardLight className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      iconBgColor: "bg-blue-900/20",
      borderColor: "border-blue-900",
    },
    {
      title: "Transaction Monitoring & SAR",
      icon: <SlEye className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-900",
      textColor: "text-blue-50",
      iconBgColor: "bg-blue-50/20",
      borderColor: "border-blue-50",
    },
    {
      title: "Risk Assessment & Internal Audit",
      icon: <PiGavelLight className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      iconBgColor: "bg-blue-900/20",
      borderColor: "border-blue-900",
    },
    {
      title: "Control Reviews & Recommendations",
      icon: <PiChalkboardTeacherThin className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-900",
      textColor: "text-blue-50",
      iconBgColor: "bg-blue-50/20",
      borderColor: "border-blue-50",
    },
    {
      title: "Licensing & Compliance Advisory",
      icon: <IoSettingsOutline className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      iconBgColor: "bg-blue-900/20",
      borderColor: "border-blue-900",
    },
    {
      title: "AML/CFT Training & Capacity Building",
      icon: <PiChalkboardTeacherThin className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-900",
      textColor: "text-blue-50",
      iconBgColor: "bg-blue-50/20 ",
      borderColor: "border-blue-50",
    },
    {
      title: "Compliance Software Support",
      icon: <BsClipboardData className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      iconBgColor: "bg-blue-900/20",
      borderColor: "border-blue-900",
    },
    {
      title: "Training & Development",
      icon: <PiChalkboardTeacherThin className="size-7" />,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id quas quos hic, adipisci reiciendis. Voluptatibus quasi quiseligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,provident.",
      bgColor: "bg-blue-900",
      textColor: "text-blue-50",
      iconBgColor: "bg-blue-50/20",
      borderColor: "border-blue-50",
    },
  ];

  return (
    <div className="font-lato w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className=" space-y-2 pb-3.5">
          <div className="bg-[#1E3A8A]/20 text-center flex  mx-auto justify-center rounded-full w-fit px-4 py-1 text-[#1E3A8A] font-medium text-sm">
            Services
          </div>
          <h2 className="font-unbounded text-3xl font-bold text-center text-gray-800">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-center leading-relaxed md:w-1/2 w-9/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vel
            id quas quos hic, adipisci reiciendis. Voluptatibus quasi quis
            eligendi sed ipsam. Tempore officiis dicta nemo enim animi! Quaerat,
            provident.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
              textColor={service.textColor}
              borderColor={service.borderColor}
              icon={service.icon}
              iconBgColor={service.iconBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
