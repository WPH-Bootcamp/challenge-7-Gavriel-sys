export const Footer = () => {
  // Array Social Media
  const socials = [
    { icon: "/assets/sosmed/fb.svg", link: "#" },
    { icon: "/assets/sosmed/ig.svg", link: "#" },
    { icon: "/assets/sosmed/in.svg", link: "#" },
    { icon: "/assets/sosmed/tiktok.svg", link: "#" },
  ];

  const links = ["About", "Service", "Projects", "Testimonials", "FAQ"];

  return (
    <footer className="py-8 px-4 w-full">
      <div className="bg-[#0A0D12] rounded-2xl p-6 shadow-sm border border-[#181D27] max-w-md mx-auto text-center md:text-left">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
          <img
            src="/assets/logo-symbol.svg"
            alt="Your Logo"
            className="w-8 h-8"
          />
          <span className="font-bold">Your Logo</span>
        </div>

        {/* Judul */}
        <h2 className="text-[24px] font-bold mb-4">LET’S DISCUSS YOUR IDEAS</h2>

        {/* Garis Horizontal */}
        <hr className="border-[#252B37] mb-6" />

        {/* Daftar Link */}
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[14px] hover:text-orange-500 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="w-8 h-8 bg-[#181D27] rounded-full flex items-center justify-center hover:bg-orange-500 transition group"
            >
              <img
                src={social.icon}
                alt="Social"
                className="w-4 h-4 group-hover:brightness-200"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
