"use client";
// import { sendMail } from "@/actions/offers";
import { footerConfig } from "@/config/footer";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const phoneNumber = "+256757312658"; // Replace with your actual phone number
  const message = "Hello, I want more info about Enerwat Services";

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setLoading(true);
    try {
      // const res = await sendMail(formData);
      // Reset form after submission
      // if (res.success) {
      //   toast.success(
      //     "Thank you for your message. We'll get back to you soon!"
      //   );
      //   setLoading(false);
      //   setFormData({
      //     firstName: "",
      //     lastName: "",
      //     email: "",
      //     subject: "",
      //     message: "",
      //   });
      // } else {
      //   setLoading(false);
      //   toast.error(res.message);
      //   return;
      // }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8 pb-4">
          We'd love to hear from you. Please fill out the form or reach out
          using the contact information below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="bg-blue-800 text-white p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-1">
                Schedule a Consultation with Our Experts
              </h3>
              <p className="text-sm mb-2 py-2">
                Discuss your engineering needs and explore tailored solutions
                with our sales team.
              </p>
              <Link
                href={whatsappUrl}
                className="bg-white text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300"
              >
                Join Us on Chat
              </Link>
            </div>
            <div className="bg-blue-400 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2 text-2xl text-blue-800">
                Contact Our Team
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="bg-blue-800 p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Email Us</p>
                    <Link
                      href={`mailto:${footerConfig.links.email}`}
                      className="text-sm hover:underline"
                    >
                      {footerConfig.links.email}
                    </Link>
                    {/* <br /> */}
                    {/* <Link
                      href="mailto:sales@agrikkom.co.ug"
                      className="text-sm hover:underline"
                    >
                      sales@agrikkom.co.ug
                    </Link> */}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-800 p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Call Us</p>
                    <Link
                      href={`tel:${footerConfig.links.phone1}`}
                      className="text-sm hover:underline"
                    >
                      {footerConfig.links.phone1}
                    </Link>
                    <br />
                    <Link
                      href={`tel:${footerConfig.links.phone2}`}
                      className="text-sm hover:underline"
                    >
                      {footerConfig.links.phone2}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-800 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Visit Us</p>
                    <p className="text-sm">{footerConfig.links.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300  rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border-gray-300  p-2 border rounded mb-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border-gray-300  p-2 border rounded mb-4"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full border-gray-300  p-2 border rounded mb-4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-800 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                {loading ? "Sending please wait..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
