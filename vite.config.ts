import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Pastikan plugin tailwindcss SUDAH TIDAK ADA di sini
  ],
});
