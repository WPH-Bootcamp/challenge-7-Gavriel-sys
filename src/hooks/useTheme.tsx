import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    // Hapus kelas lama agar bersih
    root.classList.remove("light", "dark");
    // Tambahkan kelas baru
    root.classList.add(theme);
    // Simpan ke local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Debugging: Cek di console apakah fungsi ini terpanggil
    console.log(
      "Tombol ditekan! Mengubah ke:",
      theme === "dark" ? "light" : "dark"
    );
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
