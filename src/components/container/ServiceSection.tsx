import { SectionHeader } from "../ui/SectionHeader";

export const ServiceSection = () => {
  // Data lengkap 9 Layanan sesuai HTML kamu
  const services = [
    {
      title: "Web Development",
      desc: "Build fast, scalable, and SEO-friendly websites.",
      icon: "/assets/card-service/website.svg",
    },
    {
      title: "Mobile App Development",
      desc: "Native & cross-platform apps tailored to user needs.",
      icon: "/assets/card-service/mobile-app-development.svg",
    },
    {
      title: "UI/UX Design",
      desc: "Delight users with intuitive and beautiful interfaces.",
      icon: "/assets/card-service/ux-design.svg",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and flexible cloud infrastructure for your growth.",
      icon: "/assets/card-service/cloud-solutions.svg",
    },
    {
      title: "Software Development",
      desc: "Custom solutions built around your business logic.",
      icon: "/assets/card-service/software-development.svg",
    },
    {
      title: "IT Infrastructure",
      desc: "Scale your backend with reliable tech foundations.",
      icon: "/assets/card-service/it-infrastructure.svg",
    },
    {
      title: "Cybersecurity Services",
      desc: "Stay protected with enterprise-grade security.",
      icon: "/assets/card-service/cybersecurity-services.svg",
    },
    {
      title: "QA Solutions",
      desc: "Ensure performance with rigorous testing frameworks.",
      icon: "/assets/card-service/qa-solution.svg",
    },
    {
      title: "IT Consulting & Support",
      desc: "Make smarter tech decisions with expert guidance.",
      // Perhatikan: Pastikan nama file ini di folder assets tidak error karena simbol '&'
      icon: "/assets/card-service/it-consulting&support.svg",
    },
  ];

  return (
    <section
      id="service"
      className="py-[40px] px-[16px] flex flex-col gap-[40px] items-center max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <div className="max-w-2xl text-center">
        <SectionHeader
          title="Smart IT Solutions That Grow With You"
          subtitle="Tailored tech to boost efficiency, security, and results."
        />
      </div>

      {/* Grid Layout:
          - Mobile: 1 kolom (flex-col)
          - Tablet (md): 2 kolom
          - Desktop (lg): 3 kolom (agar pas 3x3 = 9 item)
      */}
      <div className="w-full flex flex-col gap-[40px] md:grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-[20px] pb-[20px] px-[20px] rounded-2xl border border-[#181D27] w-full bg-[#0A0D12] hover:border-orange-500 transition-colors duration-300 group"
          >
            {/* Icon dengan posisi floating (Negative Margin) */}
            <img
              src={service.icon}
              alt={service.title}
              className="w-[64px] h-[64px] relative top-[-21px] mb-[-35px]"
            />

            <div className="flex flex-col gap-[4px]">
              <h3 className="font-bold text-[16px] text-white group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#A4A7AE] font-medium text-[14px] leading-[30px]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
