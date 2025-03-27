import React from "react";
import BoldHeading from "./BoldHeading";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const DepartmentComponent = () => {
  const services = [
    {
      id: 1,
      title: "Obstetrics & Gynecology",
      slug: "obstetrics-and-gynecology",
      description:
        "Comprehensive womens healthcare including normal and cesarean delivery, antenatal services, family planning, and specialized gynecological surgeries.",
      image: "/dep/pregnant.jpg",
      gradientFrom: "from-teal-600/10", // Bottom color
      gradientVia: "via-teal-800/90", // Middle color
      gradientTo: "to-teal-900", // Top color
    },
    {
      id: 2,
      title: "Surgery Department",
      slug: "surgery",
      description:
        "Expert surgical care including prostatectomy, hernia repair, trauma care, and both major and minor surgical procedures.",
      image: "/dep/surgery.webp",
      gradientFrom: "from-blue-600/10", // Bottom color
      gradientVia: "via-blue-800/80", // Middle color
      gradientTo: "to-blue-900", // Top color
    },
    {
      id: 3,
      title: "Medical Department",
      slug: "medical",
      description:
        "Specialized care for diabetes, hypertension, infectious diseases, and emergency medicine with a dedicated high dependency unit.",
      image: "/dep/dent.webp",
      gradientFrom: "from-teal-600/10", // Bottom color
      gradientVia: "via-teal-800/80", // Middle color
      gradientTo: "to-teal-900", // Top color
    },
    {
      id: 4,
      title: "Pediatrics Department",
      slug: "pediatrics",
      description:
        "Complete child healthcare services including NICU, sickle cell clinic, immunization, and specialized pediatric care.",
      image: "/dep/child.jpg",
      gradientFrom: "from-pink-600/10", // Bottom color
      gradientVia: "via-pink-800/80", // Middle color
      gradientTo: "to-pink-900", // Top color
      //
    },
    {
      id: 5,
      title: "Laboratory & Imaging",
      slug: "laboratory",
      description:
        "Advanced diagnostic services including chemistry, serology, microbiology, digital x-ray, and ultrasound scanning.",
      image: "/dep/lab.webp",
      gradientFrom: "from-purple-600/10", // Bottom color
      gradientVia: "via-purple-800/80", // Middle color
      gradientTo: "to-purple-900", // Top color
    },
    {
      id: 6,
      title: "Emergency Services",
      slug: "emergency",
      description:
        "24/7 accident & emergency care, ambulance services, trauma care, and emergency medical response.",
      image: "/doctor-9.jpg",
      gradientFrom: "from-yellow-600/10", // Bottom color
      gradientVia: "via-yellow-800/80", // Middle color
      gradientTo: "to-yellow-900", // Top color
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-10">
      <div className="text-center max-w-4xl mx-auto mb-5">
        <BoldHeading title="Specialized Departments Delivering Excellence in Healthcare" />
        <p className="text-gray-600 md:max-w-xl text-center mx-auto text-sm">
          Our dedicated medical departments combine skilled specialists, modern
          facilities, and compassionate care to provide comprehensive healthcare
          solutions for every patient's unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* First Small Card */}
          <Link
            href={`/services/${services[0].slug}`}
            className="relative overflow-hidden rounded-3xl shadow-md group h-72  cursor-pointer"
          >
            <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[0].image}
              alt={services[0].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${services[0].gradientFrom} ${services[0].gradientVia} ${services[0].gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl bold-heading font-bold mb-1">
                {services[0].title}
              </h3>
              <p className="text-sm opacity-90">{services[0].description}</p>
            </div>
          </Link>

          {/* Second Small Card */}
          <Link
            href={`/services/${services[3].slug}`}
            className="relative overflow-hidden rounded-3xl shadow-md group h-72 cursor-pointer"
          >
            <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[3].image}
              alt={services[3].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* <div
              className={`absolute inset-0 bg-gradient-to-b ${services[3].gradientFrom} ${services[3].gradientVia} ${services[3].gradientTo}`}
            /> */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${services[3].gradientFrom} ${services[3].gradientVia} ${services[3].gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[3].title}</h3>
              <p className="text-sm opacity-90">{services[3].description}</p>
            </div>
          </Link>
        </div>

        {/* Center Large Card */}
        <Link
          href={`/services/${services[1].slug}`}
          className="relative overflow-hidden rounded-3xl shadow-md group h-[100%] md:h-[100%] cursor-pointer"
        >
          <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-gray-600"
              stroke="currentColor"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <img
            src={services[1].image}
            alt={services[1].title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-yellow-100/10 to-green-900 group-hover:opacity-0 transition-opacity duration-300" /> */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${services[1].gradientFrom} ${services[1].gradientVia} ${services[1].gradientTo}`}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-1">{services[1].title}</h3>
            <p className="text-sm opacity-90">{services[1].description}</p>
          </div>
        </Link>

        {/* Right Column */}
        <div className="flex flex-col gap-6 cursor-pointer">
          {/* First Small Card */}
          <Link
            href={`/services/${services[2].slug}`}
            className="relative overflow-hidden rounded-3xl shadow-md group h-72"
          >
            <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[2].image}
              alt={services[2].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${services[2].gradientFrom} ${services[2].gradientVia} ${services[2].gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[2].title}</h3>
              <p className="text-sm opacity-90">{services[2].description}</p>
            </div>
          </Link>

          {/* Second Small Card */}
          <Link
            href={`/services/${services[4].slug}`}
            className="relative overflow-hidden rounded-3xl shadow-md group h-72 cursor-pointer"
          >
            <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[4].image}
              alt={services[4].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${services[4].gradientFrom} ${services[4].gradientVia} ${services[4].gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[4].title}</h3>
              <p className="text-sm opacity-90">{services[4].description}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Service Card */}
        <Link
          href={`/services/${services[5].slug}`}
          className="flex flex-col gap-6 mt-8"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-md group h-72 cursor-pointer">
            <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[5].image}
              alt={services[5].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${services[5].gradientFrom} ${services[5].gradientVia} ${services[5].gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl bold-heading font-bold mb-1">
                {services[5].title}
              </h3>
              <p className="text-sm opacity-90">{services[5].description}</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-6 mt-8">
          <div className="relative overflow-hidden rounded-3xl shadow-md group h-72 cursor-pointer">
            <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={"/dep/amb.webp"}
              alt={"Contact Us"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${services[1].gradientFrom} ${services[1].gradientVia} ${services[1].gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-3xl md:text-4xl  bold-heading font-bold mb-1">
                Contact Us today
              </h3>
              <p className="text-sm opacity-90">
                Make Inquiries and appointments about all our services
              </p>
              <div className="flex items-center gap-4 py-4 bold-heading">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />

                  <p className="text-lg font-bold">039 290 8493</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />

                  <p className="text-lg font-bold">
                    thekasesehospital@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
