import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/barcelona/",
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    plugins: [tailwindcss(), react()],
  };
});
