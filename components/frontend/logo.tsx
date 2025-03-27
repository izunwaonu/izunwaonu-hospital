import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Kasese Logo"
          width={500}
          height={500}
          className="md:w-24 w-16"
        />
        <div className=" text-gray-900 hidden md:block">
          <p className="text-xl md:text-2xl font-semibold">
            Izunwaonu Hospital
          </p>
          <p className="text-sm">Expert Care, Compassionate Healing</p>
        </div>
      </Link>
    </div>
  );
}
