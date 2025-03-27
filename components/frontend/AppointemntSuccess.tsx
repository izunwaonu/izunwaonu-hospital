import React from "react";
import { Check, X, Phone } from "lucide-react";

interface AppointmentSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentData: {
    date: string;
    referenceId: string;
    email: string;
  };
}

const AppointmentSuccess: React.FC<AppointmentSuccessProps> = ({
  isOpen,
  onClose,
  appointmentData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Successfully Booked!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Your appointment has been confirmed. We've sent the details to your
          email({appointmentData.email})
        </p>

        {/* Appointment Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Date</span>
            <span className="font-medium">{appointmentData.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Reference ID</span>
            <span className="font-medium font-mono">
              {appointmentData.referenceId}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Email</span>
            <span className="font-medium">{appointmentData.email}</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <a
            href="tel:+2348138390681"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group"
          >
            <Phone className="w-5 h-5 group-hover:animate-bounce" />
            Call Us: +234 81 38390681
          </a>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Need to confirm or have questions?</strong>
              <br />
              Please call us with your reference ID handy. Our team is available
              Monday to Saturday, 8:00 AM - 5:00 PM.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        {/* <p className="text-sm text-gray-500 text-center mt-4">
          We've sent you a copy to {appointmentData.email}
        </p> */}
      </div>
    </div>
  );
};

export default AppointmentSuccess;
