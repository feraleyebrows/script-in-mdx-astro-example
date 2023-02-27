import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";

const m2dxOptions = { frontmatter: true };

export default defineConfig({
  site: "https://rcarr.dev",
  integrations: [
    mdx(),
  ],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    drafts: false,
    shikiConfig: {
      theme: "nord",
      wrap: true,
    },
  },
});