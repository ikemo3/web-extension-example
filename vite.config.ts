import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

import { chromeManifest, firefoxManifest } from "./manifest";

export default defineConfig(({ mode }) => {
  const isFirefox = mode === "firefox";
  const manifest = isFirefox ? firefoxManifest : chromeManifest;
  const browser = isFirefox ? "firefox" : "chrome";

  return {
    build: {
      outDir: `dist/${browser}`,
      target: "esnext",
    },
    plugins: [solidPlugin(), crx({ manifest, browser })],
    server: {
      port: 3000,
    },
  };
});
