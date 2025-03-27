import DepartmentDetail from "@/components/department-detail";
import { departments } from "@/config/departments";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let slug = (await params).slug;
  if (!slug) {
    slug = departments[0].slug;
  }
  return (
    <div>
      <DepartmentDetail slug={slug} />
    </div>
  );
}
