export const CompanyLogos = () => {
  // Pastikan path gambar sudah benar sesuai folder public kamu
  const logos = [
    "/assets/logo company/Company logo.svg",
    "/assets/logo company/Company logo (1).svg",
    "/assets/logo company/Company logo (2).svg",
    "/assets/logo company/Company logo (3).svg",
    "/assets/logo company/Company logo (4).svg",
    "/assets/logo company/Company logo (5).svg",
    "/assets/logo company/Company logo (6).svg",
    "/assets/logo company/Company logo (7).svg",
    "/assets/logo company/Company logo (8).svg", // Ada logo ke-9 di HTML aslimu
  ];

  return (
    <section className="relative flex flex-col items-center py-10">
      {/* Judul Section */}
      <p className="text-sm font-bold leading-[30px] text-center mb-4">
        Trusted by Global Innovators & Leading Brands
      </p>

      <div className="w-full flex flex-col gap-4">
        <div className="relative overflow-x-hidden">
          {/* Container Logo: 
              - Saya kembalikan class 'py-10' (HTML asli) bukan 'py-4' 
              - Saya hapus 'flex-wrap' supaya tetap satu baris
              - Saya hapus class sizing pada <img> supaya mengikuti ukuran asli SVG
          */}
          <div className="flex gap-12 py-10 items-center justify-center mix-blend-luminosity">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                // Hapus className sizing (h-8/w-auto) agar kembali ke ukuran asli
              />
            ))}
          </div>

          {/* Gradient Kiri (Sesuai HTML asli w-[45.55px]) */}
          <div className="absolute left-0 top-0 h-full w-[45.55px] bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          {/* Gradient Kanan */}
          <div className="absolute right-0 top-0 h-full w-[45.55px] bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};
