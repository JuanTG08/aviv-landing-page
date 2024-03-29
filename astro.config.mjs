import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://connectics.co",
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
});
