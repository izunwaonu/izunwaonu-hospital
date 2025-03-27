import React from "react";
import {
  Users,
  Heart,
  Award,
  Clock,
  Building2,
  Stethoscope,
  Shield,
  Target,
} from "lucide-react";
import BoldHeading from "@/components/frontend/BoldHeading";

const AboutPage = () => {
  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Medical Professionals", value: "50+" },
    { label: "Patients Served", value: "10k+" },
    { label: "Successful Surgeries", value: "5k+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and comfort are our top priorities.",
    },
    {
      icon: Shield,
      title: "Quality Healthcare",
      description: "Maintaining highest standards in medical services.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing modern medical technologies and practices.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Floating Gradients */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <BoldHeading title="About Kasese Hospital" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion and
            expertise since 2008. Our commitment to excellence has made us a
            trusted healthcare provider in the region.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Mission Statement - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bold-heading">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To provide accessible, high-quality healthcare services that
              improve the health and well-being of our community through
              compassionate care, medical excellence, and continuous innovation.
            </p>
          </div>

          {/* Vision - Tall Card */}
          <div className="row-span-2 bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bold-heading">
              Our Vision
            </h2>
            <p className="text-gray-700 mb-6">
              To be the leading healthcare institution in the region, recognized
              for:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span>Excellence in patient care</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span>Community engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <Stethoscope className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span>Medical innovation</span>
              </li>
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 bold-heading">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline/History Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 bold-heading">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[2008, 2012, 2016, 2020].map((year, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    {year}
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
