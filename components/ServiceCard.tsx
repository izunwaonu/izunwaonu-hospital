import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 bold-heading ">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
