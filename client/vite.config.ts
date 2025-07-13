import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages expects an index.html in the root directory
  // so just run npm build before pushing to GitHub and this will rebuild our assets to the root
  build: { outDir: '..' },
  // needed for github pages just put the repo name here
  base: '/barcelona/',
  plugins: [
    tailwindcss(),
    react(),
  ],
});
