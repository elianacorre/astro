import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { imageService } from "@unpic/astro/service";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Lexend",
        weights: ["100 900"],
        subsets: ["latin"],
        cssVariable: "--font-base",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Dancing Script",
        weights: ["100 900"],
        subsets: ["latin"],
        cssVariable: "--font-heading",
      },
    ],
  },
  image: {
    service: imageService({ placeholder: "blurhash" }),
  },
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
