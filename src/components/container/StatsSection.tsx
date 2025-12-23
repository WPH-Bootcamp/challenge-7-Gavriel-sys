import { SectionHeader } from "../ui/SectionHeader";

export const StatsSection = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "5+", label: "Years of Experience" },
    { value: "10+", label: "Industry Awards Won" },
    { value: "100%", label: "Client Satisfaction Rate" },
  ];

  return (
    <section className="px-4 py-20 flex flex-col gap-10 items-center justify-center max-w-5xl mx-auto">
      <SectionHeader
        title="End-to-End IT Solutions That Drive Results"
        subtitle="From strategy to execution, we deliver solutions that grow your business."
      />

      {/* Grid Layout: 2 Kolom di semua ukuran (atau 4 di desktop besar jika mau satu baris) */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            // PERBAIKAN DI SINI:
            // 1. w-[172.5px] h-[172.5px]: Ukuran fix agar jadi kotak
            // 2. rounded-full: Karena kotak, rounded-full akan membuatnya jadi lingkaran sempurna
            // 3. bg-[#0A0D12]: Warna background hitam (sesuai tema gelapmu)
            className="w-[172.5px] h-[172.5px] bg-[#0A0D12] border border-[#181D27] rounded-full flex flex-col items-center justify-center text-center p-2 hover:border-orange-500 transition-colors duration-300 shadow-sm"
          >
            <p className="text-4xl text-[#FF623E] font-bold mb-1">
              {stat.value}
            </p>
            {/* max-w-[80%] supaya teks tidak menabrak pinggiran lingkaran */}
            <p className="text-sm font-semibold text-white max-w-[80%] leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
