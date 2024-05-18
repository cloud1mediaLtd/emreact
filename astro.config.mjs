import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sanity from "@sanity/client";
// Initialize Sanity client
const sanityClient = sanity({
  projectId: "fxgbvp8h",
  dataset: "production",
  apiVersion: "2023-02-08",
  useCdn: false,
});

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    // If there's a specific Astro integration for Sanity in the future, add it here
  ],
  output: "static",
  adapter: vercel(),
});
