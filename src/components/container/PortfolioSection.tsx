import { SectionHeader } from "../ui/SectionHeader";

export const PortfolioSection = () => {
  const portfolios = [
    { img: "/assets/portofolio/portfolio-card1.png", title: "Portfolio 1" },
    { img: "/assets/portofolio/portfolio-card2.png", title: "Portfolio 2" },
    { img: "/assets/portofolio/portfolio-card3.png", title: "Portfolio 3" },
  ];

  return (
    <section
      id="portfolio"
      className="px-[16px] py-[40px] flex flex-col gap-[24px] items-center"
    >
      <div className="w-full max-w-2xl text-center">
        <SectionHeader
          title="From Vision to Launch! Projects We’re Proud Of"
          subtitle="Take a closer look at our recent work powering startups, enterprises, and everything in between."
        />
      </div>

      {/* Grid Portfolio */}
      <div className="flex flex-col gap-[20px] md:grid md:grid-cols-3 w-full max-w-6xl">
        {portfolios.map((item, index) => (
          <figure
            key={index}
            className="flex flex-col gap-[8px] group cursor-pointer"
          >
            {/* Gambar dengan efek hover zoom sedikit */}
            <div className="overflow-hidden rounded-[16px]">
              <img
                src={item.img}
                alt={`${item.title} preview`}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Caption */}
            <div className="flex flex-col px-1">
              <figcaption className="text-[14px] font-medium leading-[28px] text-[#FF623E]">
                Landing Page
              </figcaption>
              <figcaption className="text-[16px] font-bold leading-[30px] tracking-[-2%] text-white">
                {item.title}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};
