import { useState } from "react";
import Button from "../ui/Button";
import { useTheme } from "../../hooks/useTheme"; // Import Hook yang baru dibuat

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Panggil fungsi saklar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* WRAPPER NAVBAR: 
          - bg-white (Light Mode) / dark:bg-black (Dark Mode)
          - border-gray-200 (Light Mode) / dark:border-[#252B37] (Dark Mode)
      */}
      <div className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-[#252B37] sticky top-0 z-50 transition-colors duration-300">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-[80px] py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-8 h-8" src="/assets/logo-symbol.svg" alt="Logo" />
            {/* Teks Logo: Hitam di Light, Putih di Dark */}
            <span className="font-bold text-[24px] font-outfit text-gray-900 dark:text-white">
              Your Logo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-[32px] items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[16px] font-medium text-gray-600 dark:text-white hover:text-[#FF623E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* TOMBOL GANTI TEMA (Matahari/Bulan) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#181D27] hover:bg-gray-200 transition text-xl"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <Button>Let's Talk</Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Tombol Tema di Mobile */}
            <button onClick={toggleTheme} className="text-xl">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger Menu */}
            <button onClick={toggleMenu} className="p-2">
              {/* LOGIKA IKON: 
                    Ikon aslimu warnanya PUTIH. 
                    - Di Light Mode (BG Putih), kita harus 'invert' (balik warna) jadi HITAM.
                    - Di Dark Mode (BG Hitam), biarkan 'invert-0' (tetap PUTIH).
                */}
              <img
                className="w-[28px] h-auto invert dark:invert-0"
                src="/assets/Icon.svg"
                alt="Menu"
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="fixed inset-0 top-0 left-0 w-full h-full bg-white dark:bg-black z-[999] flex flex-col transition-colors">
          <div className="h-[64px] flex justify-between items-center px-[16px]">
            <div className="flex items-center gap-2">
              <img
                className="w-[26.3px]"
                src="/assets/logo-symbol.svg"
                alt="Logo"
              />
              <span className="font-bold text-[21.33px] text-gray-900 dark:text-white">
                Your Logo
              </span>
            </div>
            <button onClick={toggleMenu} className="p-2">
              <img
                className="w-[20px] invert dark:invert-0"
                src="/assets/x-icon.svg"
                alt="Close"
              />
            </button>
          </div>

          {/* Isi Menu Mobile */}
          <div className="flex flex-col px-[16px] w-full gap-[12px] mt-4">
            <ul className="list-none flex flex-col gap-[12px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="block no-underline text-gray-900 dark:text-white text-sm py-2 transition-colors hover:text-orange-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button onClick={toggleMenu}>Let's Talk</Button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
