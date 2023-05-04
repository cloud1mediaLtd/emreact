import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image(),
    mdx(),
    sanity({
      projectId: "fxgbvp8h",
      dataset: "production",
      apiVersion: "2023-02-08",
      useCdn: false,
    }),
  ],
  adapter: vercel({
    analytics: true,
  }),
});
