import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

const DEFAULT_LAYOUT = "/src/layouts/Section.astro";

function setDefaultLayout() {
  return function (_, file) {
    const { frontmatter } = file.data.astro;
    if (!frontmatter.layout) frontmatter.layout = DEFAULT_LAYOUT;
  };
}

export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    remarkPlugins: [setDefaultLayout, remarkToc],
    syntaxHighlight: false,
  },
});
