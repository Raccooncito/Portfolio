// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://luissoria.github.io",
  base: "/Portfolio",
  output: "static",
  devToolbar: {
    enabled: false,
  },
});
