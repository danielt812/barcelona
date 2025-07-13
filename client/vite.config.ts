import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: isProd ? "/barcelona/" : "/",
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    plugins: [tailwindcss(), react()],
  };
});
