import React from "react";
import { Shield, CheckCircle } from "lucide-react";

const insuranceProviders = [
  {
    name: "Jubilee Health Insurance",
    type: "Health Insurance",
    image: "/insurance/jubilee.png", // placeholder path
  },
  {
    name: "AAR Health Services",
    type: "Health Insurance",
    image: "/insurance/aar.png",
  },
  {
    name: "UAP Old Mutual",
    type: "Health Insurance",
    image: "/insurance/uap.png",
  },
  {
    name: "GA Insurance",
    type: "Health Insurance",
    image: "/insurance/ga.png",
  },
  {
    name: "Casemedcare",
    type: "Health Insurance",
    image: "/insurance/casemedcare.png",
  },
  {
    name: "Liberty Health",
    type: "Health Insurance",
    image: "/insurance/liberty.png",
  },
  {
    name: "Sanlam",
    type: "Health Insurance",
    image: "/insurance/sanlam.png",
  },
  {
    name: "ICEA Insurance",
    type: "Health Insurance",
    image: "/insurance/icea.png",
  },
  {
    name: "CIC Insurance",
    type: "Health Insurance",
    image: "/insurance/cic.png",
  },
  {
    name: "St Catherine's Hospital",
    type: "Healthcare Partner",
    image: "/insurance/st-catherines.png",
  },
  {
    name: "Uganda Lodges",
    type: "Corporate Partner",
    image: "/insurance/uganda-lodges.png",
  },
  {
    name: "NWSC",
    type: "Corporate Partner",
    image: "/insurance/nwsc.png",
  },
  {
    name: "Kasese Child Development Centre",
    type: "Healthcare Partner",
    image: "/insurance/kcdc.png",
  },
  {
    name: "Prudential Assurance Uganda",
    type: "Health Insurance",
    image: "/insurance/prudential.png",
  },
];

const InsuranceProviders = () => {
  return (
    <div id="providers" className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supported Insurance Providers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with leading insurance providers to ensure you receive the
            best possible care. Check our list of supported insurance partners.
          </p>
        </div>

        {/* Insurance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceProviders.map((provider, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-gray-500">{provider.type}</p>
                  <div className="mt-3 flex items-center text-sm text-emerald-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Accepted Provider</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your insurance provider? Contact us to learn more about
            our insurance partnerships.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceProviders;
