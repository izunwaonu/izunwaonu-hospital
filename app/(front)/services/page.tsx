import DepartmentListing from "@/components/frontend/department-listing";
import { departments } from "@/config/departments";
import React from "react";

export default function page() {
  return (
    <div>
      <DepartmentListing departments={departments} />;
    </div>
  );
}
