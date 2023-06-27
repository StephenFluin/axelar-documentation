import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";


const DEFAULT_LAYOUT = '/src/layouts/Section.astro';

function setDefaultLayout() {
  return function (_, file) {
    const { frontmatter } = file.data.astro;
    if (!frontmatter.layout) frontmatter.layout = DEFAULT_LAYOUT;
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    // remarkPlugins: [setDefaultLayout],
  },
});
