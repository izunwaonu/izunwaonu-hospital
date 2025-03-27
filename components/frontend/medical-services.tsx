import Image from "next/image";
import BoldHeading from "./BoldHeading";

interface ServiceCard {
  title: string;
  description: string;
  imageUrl: string;
  gradientFrom: string; // Bottom color
  gradientVia: string; // Middle color
  gradientTo: string; // Top color
}

const services: ServiceCard[] = [
  {
    title: "Highly Qualified Experts",
    description:
      "Our team of certified specialists across multiple departments ensures comprehensive care tailored to your needs.",
    imageUrl: "/dep/pregnant.jpg",
    gradientFrom: "from-emerald-300/10", // Bottom color
    gradientVia: "via-emerald-400/80", // Middle color
    gradientTo: "to-emerald-900", // Top color
  },
  {
    title: "24/7 Emergency Services",
    description:
      "Round-the-clock emergency care with fully equipped trauma center and accident & emergency department",
    imageUrl: "/dep/emergency.jpg",
    gradientFrom: "from-emerald-300/10", // Bottom color
    gradientVia: "via-emerald-400/80", // Middle color
    gradientTo: "to-emerald-900", // Top color
  },
  {
    title: "Advanced Medical Care",
    description:
      "Modern medical facilities including digital imaging, specialized surgical units, and high dependency care",
    imageUrl: "/dep/lab.webp",
    gradientFrom: "from-emerald-300/10", // Bottom color
    gradientVia: "via-emerald-400/80", // Middle color
    gradientTo: "to-emerald-900", // Top color
  },
  {
    title: "24/7 Ambulance Services",
    description:
      "From specialized clinics to ambulance services, we provide comprehensive healthcare solutions for your family",
    imageUrl: "/dep/amb.webp",
    gradientFrom: "from-emerald-300/10", // Bottom color
    gradientVia: "via-emerald-400/80", // Middle color
    gradientTo: "to-emerald-900", // Top color
  },
];

export default function MedicalServices() {
  return (
    <div className="py-16 ">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <BoldHeading title="Why Choose Kasese Hospital" />
        <p className="text-lg text-gray-600">
          Experience comprehensive healthcare delivered by our expert team of
          specialists, supported by modern facilities and round-the-clock
          emergency services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 w-full max-w-7xl mx-auto px-4 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-[250px] rounded-[10%] md:rounded-[15%] overflow-hidden group cursor-pointer shadow-md"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            {/* Three-Color Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${service.gradientFrom} ${service.gradientVia} ${service.gradientTo}`}
            />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90 line-clamp-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
