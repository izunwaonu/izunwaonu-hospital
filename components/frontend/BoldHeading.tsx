import React from "react";

export default function BoldHeading({ title }: { title: string }) {
  const [firstPart, secondPart] = title.split(" ").reduce(
    (acc, word, i, arr) => {
      if (i < arr.length / 2) {
        acc[0] = (acc[0] + " " + word).trim();
      } else {
        acc[1] = (acc[1] + " " + word).trim();
      }
      return acc;
    },
    ["", ""]
  );

  return (
    <h1 className="bold-heading text-4xl md:text-5xl font-bold mb-4">
      <span className="text-gray-900">{firstPart}</span>{" "}
      <span className="text-emerald-700">{secondPart}</span>
    </h1>
  );
}
