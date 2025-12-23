import { SectionHeader } from "../ui/SectionHeader";

// Cek baris ini! Harus 'export const ProcessSection', JANGAN 'StatsSection' atau lainnya.
export const ProcessSection = () => {
  const steps = [
    {
      num: 1,
      title: "Discovery & Consultation",
      desc: "Understand Your Needs & Goals",
    },
    {
      num: 2,
      title: "Solution Design",
      desc: "Blueprint your custom architecture",
    },
    { num: 3, title: "Development", desc: "Agile coding with regular updates" },
    { num: 4, title: "Testing & QA", desc: "Rigorous bug hunting & fixing" },
    { num: 5, title: "Deployment", desc: "Smooth launch to production" },
    {
      num: 6,
      title: "Support & Scaling",
      desc: "Continuous monitoring & growth",
    },
  ];

  return (
    <section className="py-[40px] w-full flex flex-col items-center gap-[24px]">
      <div className="px-[16px]">
        <SectionHeader
          title="Our Process"
          subtitle="Clear steps. Smart execution. Results you can count on."
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 w-[361px] md:w-[600px] relative">
        <div className="absolute left-[19.5px] top-[20px] bottom-[20px] w-[1px] bg-[#252B37] z-0"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-center gap-[12px] w-full z-10"
          >
            <div className="flex-shrink-0 w-[40px] h-[40px] bg-[#FF623E] rounded-full flex items-center justify-center shadow-[0_0_0_4px_black]">
              <p className="text-[13.3px] font-bold leading-[25px] text-white">
                {step.num}
              </p>
            </div>

            <div className="flex-grow bg-[#0A0D12] rounded-lg p-4 shadow-sm border border-[#181D27] hover:border-orange-500 transition-colors duration-300 cursor-pointer group">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[16px] text-white group-hover:text-orange-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#A4A7AE] text-[14px]">{step.desc}</p>
                </div>
                <button className="text-gray-500 hover:text-orange-500 transition pt-1">
                  <img
                    src="/assets/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
