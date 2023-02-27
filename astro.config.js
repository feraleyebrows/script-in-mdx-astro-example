import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://rcarr.dev",
  integrations: [
    mdx(),
  ],
});