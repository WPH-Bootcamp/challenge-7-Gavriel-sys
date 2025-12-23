export const IndustrySection = () => {
  const industries = [
    { name: "Fintech", color: "bg-[#FF623E]" }, // Orange
    { name: "E-Commerce", color: "bg-[#535862]" }, // Grey
    { name: "Healthcare", color: "bg-[#535862]" }, // Grey
  ];

  return (
    <section className="py-[40px] px-[16px] flex flex-col gap-[24px] items-start max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-[11px]">
        <h2 className="text-[32px] font-bold text-start leading-[42px] tracking-[-2%]">
          Built for Your Industry
        </h2>
        <p className="text-[14px] font-medium leading-[28px] text-[#A4A7AE]">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>

      {/* List Industri */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        {industries.map((item, index) => (
          <div key={index} className="flex items-center gap-[6px]">
            {/* Garis Indikator Warna */}
            <div
              className={`w-[4px] h-[24px] rounded-full ${item.color}`}
            ></div>

            {/* Nama Industri */}
            <h3
              className={`text-[16px] font-bold leading-[30px] tracking-[-2%] ${
                item.name === "Fintech" ? "text-white" : "text-[#535862]"
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Deskripsi Bawah & Gambar */}
      <div className="flex flex-col gap-[20px] items-start w-full mt-4">
        <p className="text-[14px] font-medium leading-[28px] text-gray-300">
          We build secure, scalable, and compliant fintech solutions — from
          digital wallets to core banking systems — tailored to modern financial
          needs.
        </p>
        <img
          src="/assets/industry-image.svg"
          alt="Industry Illustration"
          className="w-full rounded-[12px] h-auto object-cover"
        />
      </div>
    </section>
  );
};
