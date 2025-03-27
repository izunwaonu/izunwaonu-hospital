"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle, Minus, Plus } from "lucide-react";
import Link from "next/link";
import WavyBackground from "./WavyBackground";
import ThemeButton from "./theme-button";
import BoldHeading from "./BoldHeading";
// import WavyBackground from "@/components/WavyBackground";
export type FAQProps = {
  question: string;
  answer: string;
};
export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: FAQProps[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <WavyBackground
      waveColor="rgba(134, 239, 172, 0.25)" // green-300 with opacity
      baseColor="rgb(240, 253, 244)" // green-50
      className="py-16"
    >
      <div id="faqs" className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
            {title}
          </p>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            You ask? We <span className="italic">answer</span>
          </h2> */}
          <BoldHeading title="You ask? We answer" />
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-green-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-green-600" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center flex-wrap justify-between">
          <div className="flex items-center mb-3">
            <HelpCircle className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600">Need further support?</span>
          </div>

          <ThemeButton href="/contact" title="Contact Us" />
        </div>
      </div>
    </WavyBackground>
  );
}
