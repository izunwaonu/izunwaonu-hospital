import FloatingSocials from "@/components/frontend/FloatingSocials";
import Navbar from "@/components/frontend/navbar";
import React, { ReactNode } from "react";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <FloatingSocials />
    </div>
  );
}
