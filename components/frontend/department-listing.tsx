import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BoldHeading from "./BoldHeading";

interface DepartmentListingProps {
  departments: {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
    specialist?: string;
  }[];
}

const DepartmentListing = ({ departments }: DepartmentListingProps) => {
  return (
    <div className="relative min-h-screen bg-gray-50 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fading Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Circles */}
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <BoldHeading title="Our Medical Departments" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our specialized departments providing comprehensive
            healthcare services with expert medical professionals.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department) => (
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
  );
};

export default DepartmentListing;
