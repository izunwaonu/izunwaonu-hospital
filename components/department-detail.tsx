"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { departments } from "@/config/departments";
import NotFound from "@/app/not-found";
import ServiceCard from "./ServiceCard";
import FAQ from "./frontend/FAQ";
import BoldHeading from "./frontend/BoldHeading";
import ThemeButton from "./frontend/theme-button";
import { GridBackground } from "./grid-background";

interface DepartmentDetailProps {
  slug: string;
}

const DepartmentDetail = ({ slug }: DepartmentDetailProps) => {
  const department = departments.find((dept) => dept.slug === slug);
  const otherDepartments = departments.filter((dept) => dept.slug !== slug);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!department)
    return (
      <div>
        <NotFound />
      </div>
    );

  const faqs = department.faqs;

  return (
    <div className="">
      <GridBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-12 md:py-20">
            <div className="max-w-3xl">
              <BoldHeading title={department.name} />
              <p className="text-xl text-gray-600 mb-8">
                {department.description}
              </p>
              <div className="flex gap-4">
                <ThemeButton
                  title="Book Appointment"
                  href="/book-appointment"
                />

                <a
                  href="tel:+256 392 908 493"
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors "
                >
                  Call +256 392 908 493
                </a>
              </div>
            </div>
          </div>

          {/* Services Grid */}
        </div>
      </GridBackground>
      <div className="bg-emerald-50 p-16 rounded-md ">
        <div className="max-w-7xl mx-auto">
          <div className="py-4">
            <BoldHeading title={` Services in the ${department.name}`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* FAQs Section */}
      <div className="">
        <FAQ title={`${department.name} FAQs`} faqs={faqs} />
      </div>

      {/* Other Departments */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="py-16 ">
            <div className="flex items-center justify-between py-6">
              <BoldHeading title="Other Departments" />
              <Link
                href="/services"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors "
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherDepartments.slice(0, 6).map((department) => (
                <Link
                  key={department.id}
                  href={`/services/${department.slug}`}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={department.image}
                        alt={department.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      {/* Department Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {department.name}
                        </h3>
                        {department.specialist && (
                          <p className="text-sm text-gray-200">
                            {department.specialist}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description and Link */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {department.description}
                      </p>
                      <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                        Learn More
                        <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/20 rounded-2xl transition-colors duration-300"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
